import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { z } from "zod";
import { nextSrs, type SrsRating } from "./srs";

const SkillSchema = z.enum(["hoeren", "lesen", "schreiben", "sprechen", "grammatik", "wortschatz"]);

const LearningErrorSchema = z.object({
  level: z.enum(["A1", "A2", "B1"]),
  skill: SkillSchema,
  category: z.string().min(1).default("general"),
  tag: z.string().optional(),
  source: z.string().min(1),
  sourceRef: z.string().optional(),
  prompt: z.string().min(1),
  expected: z.string().optional(),
  actual: z.string().optional(),
  explanation: z.string().optional(),
  severity: z.number().int().min(1).max(5).default(2),
});

export const createLearningErrors = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => z.object({ errors: z.array(LearningErrorSchema).max(50) }).parse(d))
  .handler(async ({ data, context }) => {
    if (data.errors.length === 0) return { ok: true, count: 0 };
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const db = supabaseAdmin as any;
    const rows = data.errors.map((error) => ({
      user_id: context.userId,
      level: error.level,
      skill: error.skill,
      category: error.category,
      tag: error.tag ?? null,
      source: error.source,
      source_ref: error.sourceRef ?? null,
      prompt: error.prompt,
      expected: error.expected ?? null,
      actual: error.actual ?? null,
      explanation: error.explanation ?? null,
      severity: error.severity,
    }));
    const { error } = await db.from("learning_errors").insert(rows);
    if (error) throw new Error(error.message);
    return { ok: true, count: rows.length };
  });

export const listLearningErrors = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) =>
    z.object({
      level: z.enum(["A1", "A2", "B1"]).optional(),
      skill: SkillSchema.optional(),
      unresolvedOnly: z.boolean().default(true),
      limit: z.number().int().min(1).max(100).default(30),
    }).parse(d),
  )
  .handler(async ({ data, context }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const db = supabaseAdmin as any;
    let query = db
      .from("learning_errors")
      .select("id, level, skill, category, tag, source, source_ref, prompt, expected, actual, explanation, severity, resolved_at, created_at")
      .eq("user_id", context.userId)
      .order("created_at", { ascending: false })
      .limit(data.limit);
    if (data.level) query = query.eq("level", data.level);
    if (data.skill) query = query.eq("skill", data.skill);
    if (data.unresolvedOnly) query = query.is("resolved_at", null);
    const { data: errors, error } = await query;
    if (error) throw new Error(error.message);
    return { errors: errors ?? [] };
  });

export const getLearningErrorStats = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => z.object({ level: z.enum(["A1", "A2", "B1"]).optional() }).parse(d))
  .handler(async ({ data, context }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const db = supabaseAdmin as any;
    let query = db
      .from("learning_errors")
      .select("level, skill, tag, resolved_at")
      .eq("user_id", context.userId);
    if (data.level) query = query.eq("level", data.level);
    const { data: rows, error } = await query;
    if (error) throw new Error(error.message);

    const bySkill: Record<string, number> = {};
    const byTag: Record<string, number> = {};
    let unresolved = 0;
    for (const row of rows ?? []) {
      if (!row.resolved_at) {
        unresolved += 1;
        bySkill[row.skill] = (bySkill[row.skill] ?? 0) + 1;
        if (row.tag) byTag[row.tag] = (byTag[row.tag] ?? 0) + 1;
      }
    }
    return {
      total: rows?.length ?? 0,
      unresolved,
      bySkill,
      byTag: Object.entries(byTag)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .map(([tag, count]) => ({ tag, count })),
    };
  });

export const resolveLearningError = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => z.object({ id: z.string().uuid() }).parse(d))
  .handler(async ({ data, context }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const db = supabaseAdmin as any;
    const { error } = await db
      .from("learning_errors")
      .update({ resolved_at: new Date().toISOString() })
      .eq("id", data.id)
      .eq("user_id", context.userId);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const getDueLearningErrors = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) =>
    z.object({
      level: z.enum(["A1", "A2", "B1", "B2"]).optional(),
      limit: z.number().int().min(1).max(30).default(10),
    }).parse(d),
  )
  .handler(async ({ data, context }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const db = supabaseAdmin as any;
    let query = db
      .from("learning_errors")
      .select("id, level, skill, category, tag, prompt, expected, actual, explanation, severity, state, ease, interval_days, reps, lapses, streak, due_at")
      .eq("user_id", context.userId)
      .is("resolved_at", null)
      .lte("due_at", new Date().toISOString())
      .order("due_at", { ascending: true })
      .limit(data.limit);
    if (data.level) query = query.eq("level", data.level);
    const { data: errors, error } = await query;
    if (error) throw new Error(error.message);
    return { errors: errors ?? [] };
  });

export const rateLearningError = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => z.object({ id: z.string().uuid(), rating: z.number().int().min(0).max(3) }).parse(d))
  .handler(async ({ data, context }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const db = supabaseAdmin as any;
    const { data: prev, error: readError } = await db
      .from("learning_errors")
      .select("state, ease, interval_days, reps, lapses, streak")
      .eq("id", data.id)
      .eq("user_id", context.userId)
      .maybeSingle();
    if (readError) throw new Error(readError.message);
    const next = nextSrs(prev ?? {}, data.rating as SrsRating);
    const patch: any = { ...next };
    if (next.state === "mastered" && data.rating >= 2) patch.resolved_at = new Date().toISOString();
    const { error } = await db
      .from("learning_errors")
      .update(patch)
      .eq("id", data.id)
      .eq("user_id", context.userId);
    if (error) throw new Error(error.message);
    return { ok: true, next };
  });
