import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { z } from "zod";
import { nextSrs, type SrsRating } from "./srs";

export const getDueFlashcards = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) =>
    z.object({
      level: z.enum(["A1", "A2", "B1", "B2"]),
      mode: z.enum(["grammar", "vocab", "all"]).default("grammar"),
      limit: z.number().min(1).max(50).default(20),
    }).parse(d),
  )
  .handler(async ({ data, context }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { userId } = context;
    const now = new Date().toISOString();
    // Existing due
    let dueQuery = supabaseAdmin
      .from("user_vocab_srs")
      .select("id, flashcard_id, state, ease, interval_days, reps, lapses, streak, due_at, flashcards!inner(id, slug, front, back, ex_de, ex_pt, level)")
      .eq("user_id", userId)
      .lte("due_at", now)
      .eq("flashcards.level", data.level)
      .order("due_at", { ascending: true })
      .limit(data.limit);
    dueQuery = applyThemeMode(dueQuery, data.mode, "flashcards.theme");
    const { data: due } = await dueQuery;
    let cards = (due ?? []) as unknown as Array<{
      id: string;
      flashcard_id: string;
      flashcards: { id: string; slug: string; front: string; back: string; ex_de: string | null; ex_pt: string | null };
    }>;
    if (cards.length < data.limit) {
      // Pull new flashcards user hasn't started yet
      const have = new Set(cards.map((c) => c.flashcard_id));
      let allQuery = supabaseAdmin
        .from("flashcards")
        .select("id, slug, front, back, ex_de, ex_pt")
        .eq("level", data.level)
        .limit(200);
      allQuery = applyThemeMode(allQuery, data.mode, "theme");
      const { data: all } = await allQuery;
      const { data: existing } = await supabaseAdmin
        .from("user_vocab_srs")
        .select("flashcard_id")
        .eq("user_id", userId);
      const seen = new Set([...have, ...((existing ?? []).map((e) => e.flashcard_id))]);
      const fresh = (all ?? []).filter((c) => !seen.has(c.id)).slice(0, data.limit - cards.length);
      cards = [
        ...cards,
        ...fresh.map((f) => ({ id: "", flashcard_id: f.id, flashcards: f })),
      ];
    }
    return {
      cards: cards.map((c) => ({
        srsId: c.id || null,
        flashcardId: c.flashcard_id,
        ...c.flashcards,
      })),
    };
  });

function applyThemeMode(query: any, mode: "grammar" | "vocab" | "all", column: string) {
  if (mode === "grammar") return query.ilike(column, "%gram%");
  if (mode === "vocab") return query.not(column, "ilike", "%gram%");
  return query;
}

export const rateFlashcard = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) =>
    z.object({ flashcardId: z.string().uuid(), rating: z.number().int().min(0).max(3) }).parse(d),
  )
  .handler(async ({ data, context }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { userId } = context;
    const { data: prev } = await supabaseAdmin
      .from("user_vocab_srs")
      .select("*")
      .eq("user_id", userId)
      .eq("flashcard_id", data.flashcardId)
      .maybeSingle();
    const next = nextSrs(prev ?? {}, data.rating as SrsRating);
    await supabaseAdmin
      .from("user_vocab_srs")
      .upsert(
        {
          user_id: userId,
          flashcard_id: data.flashcardId,
          ...next,
        },
        { onConflict: "user_id,flashcard_id" },
      );
    const { awardXpInternal } = await import("./learn-awards.server");
    await awardXpInternal(userId, "srs", `${data.flashcardId}-${Date.now()}`, data.rating >= 2 ? 3 : 1);
    return { ok: true, next };
  });
