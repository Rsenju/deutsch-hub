import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { z } from "zod";

const SectionScoreSchema = z.record(
  z.string(),
  z.object({
    score: z.number(),
    maxScore: z.number(),
    percent: z.number(),
    mistakes: z.array(z.string()),
  }),
);

const SaveAttemptSchema = z.object({
  level: z.enum(["A1", "A2", "B1"]),
  simuladoSlug: z.string().min(1),
  simuladoTitle: z.string().min(1),
  totalScore: z.number().min(0),
  maxScore: z.number().min(1),
  percent: z.number().min(0).max(100),
  passed: z.boolean(),
  elapsedSeconds: z.number().int().min(0),
  answers: z.record(z.string(), z.string()),
  selfScores: z.record(z.string(), z.number()),
  sectionScores: SectionScoreSchema,
});

export const saveSimulationAttempt = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => SaveAttemptSchema.parse(d))
  .handler(async ({ data, context }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const db = supabaseAdmin as any;
    const { data: attempt, error } = await db
      .from("exam_attempts")
      .insert({
        user_id: context.userId,
        level: data.level,
        simulado_slug: data.simuladoSlug,
        simulado_title: data.simuladoTitle,
        total_score: data.totalScore,
        max_score: data.maxScore,
        percent: data.percent,
        passed: data.passed,
        elapsed_seconds: data.elapsedSeconds,
        answers: data.answers,
        self_scores: data.selfScores,
        section_scores: data.sectionScores,
      })
      .select("id, created_at")
      .single();
    if (error) throw new Error(error.message);
    return { ok: true, attempt };
  });

export const listSimulationAttempts = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => z.object({ level: z.enum(["A1", "A2", "B1"]).optional(), limit: z.number().min(1).max(20).default(8) }).parse(d))
  .handler(async ({ data, context }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const db = supabaseAdmin as any;
    let query = db
      .from("exam_attempts")
      .select("id, level, simulado_slug, simulado_title, total_score, max_score, percent, passed, elapsed_seconds, section_scores, created_at")
      .eq("user_id", context.userId)
      .order("created_at", { ascending: false })
      .limit(data.limit);

    if (data.level) query = query.eq("level", data.level);

    const { data: attempts, error } = await query;
    if (error) throw new Error(error.message);
    return { attempts: attempts ?? [] };
  });

