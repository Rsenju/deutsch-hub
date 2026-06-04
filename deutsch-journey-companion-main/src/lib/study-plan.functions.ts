import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { z } from "zod";

const SkillOrder = ["hoeren", "lesen", "schreiben", "sprechen", "grammatik", "wortschatz"] as const;

export const getStudyPlan = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => z.object({ level: z.enum(["A1", "A2", "B1", "B2"]).default("A1") }).parse(d))
  .handler(async ({ data, context }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const db = supabaseAdmin as any;
    const now = new Date().toISOString();
    const [{ data: dueCards }, { data: dueErrors }, { data: errors }, { data: attempts }, { data: xpRows }] = await Promise.all([
      db.from("user_vocab_srs").select("id", { count: "exact" }).eq("user_id", context.userId).lte("due_at", now),
      db.from("learning_errors").select("id", { count: "exact" }).eq("user_id", context.userId).eq("level", data.level).is("resolved_at", null).lte("due_at", now),
      db.from("learning_errors").select("skill, tag, severity, resolved_at").eq("user_id", context.userId).eq("level", data.level).is("resolved_at", null),
      db.from("exam_attempts").select("percent, section_scores, created_at").eq("user_id", context.userId).eq("level", data.level).order("created_at", { ascending: false }).limit(5),
      db.from("xp_events").select("xp, created_at").eq("user_id", context.userId).gte("created_at", new Date(Date.now() - 86400000).toISOString()),
    ]);

    const bySkill = skillStats(errors ?? [], attempts ?? []);
    const weakest = Object.entries(bySkill)
      .sort((a, b) => a[1].readiness - b[1].readiness)
      .map(([skill]) => skill)[0] ?? "hoeren";
    const todayXp = (xpRows ?? []).reduce((sum: number, row: any) => sum + (row.xp ?? 0), 0);
    const dueCardCount = dueCards?.length ?? 0;
    const dueErrorCount = dueErrors?.length ?? 0;

    return {
      level: data.level,
      todayXp,
      dueCardCount,
      dueErrorCount,
      weakestSkill: weakest,
      bySkill,
      actions: [
        {
          title: "Revisar SRS",
          detail: dueCardCount > 0 ? `${Math.min(20, dueCardCount)} cards vencidos` : "20 cards novos ou mistos",
          to: "/flashcards",
          priority: dueCardCount > 0 ? "alta" : "normal",
        },
        {
          title: "Corrigir erros pessoais",
          detail: dueErrorCount > 0 ? `${Math.min(10, dueErrorCount)} erros vencidos` : "Revisar banco de erros aberto",
          to: "/flashcards",
          priority: dueErrorCount > 0 ? "alta" : "normal",
        },
        {
          title: `Treinar ${skillLabel(weakest)}`,
          detail: "Foco principal do dia pelo seu histórico",
          to: skillRoute(weakest),
          priority: "alta",
        },
        {
          title: "Fazer 1 bloco Goethe",
          detail: "Uma seção de simulado ou tarefa cronometrada",
          to: "/simulados",
          priority: "normal",
        },
      ],
    };
  });

export const getSkillReport = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => z.object({ level: z.enum(["A1", "A2", "B1", "B2"]).default("A1") }).parse(d))
  .handler(async ({ data, context }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const db = supabaseAdmin as any;
    const [{ data: errors }, { data: attempts }] = await Promise.all([
      db.from("learning_errors").select("skill, tag, severity, resolved_at, created_at").eq("user_id", context.userId).eq("level", data.level),
      db.from("exam_attempts").select("percent, section_scores, created_at").eq("user_id", context.userId).eq("level", data.level).order("created_at", { ascending: false }).limit(10),
    ]);
    const bySkill = skillStats(errors ?? [], attempts ?? []);
    return {
      level: data.level,
      bySkill,
      attempts: attempts ?? [],
      readiness: Math.round(Object.values(bySkill).reduce((sum: number, s: any) => sum + s.readiness, 0) / SkillOrder.length),
    };
  });

function skillStats(errors: any[], attempts: any[]) {
  const bySkill: Record<string, { openErrors: number; totalErrors: number; avgExamPercent: number | null; readiness: number; tags: Record<string, number> }> = {};
  for (const skill of SkillOrder) bySkill[skill] = { openErrors: 0, totalErrors: 0, avgExamPercent: null, readiness: 75, tags: {} };

  for (const error of errors) {
    const skill = error.skill in bySkill ? error.skill : "grammatik";
    bySkill[skill].totalErrors += 1;
    if (!error.resolved_at) bySkill[skill].openErrors += 1;
    if (error.tag && !error.resolved_at) bySkill[skill].tags[error.tag] = (bySkill[skill].tags[error.tag] ?? 0) + 1;
  }

  for (const skill of SkillOrder) {
    const scores: number[] = [];
    for (const attempt of attempts) {
      const section = attempt.section_scores?.[skill];
      if (typeof section?.percent === "number") scores.push(section.percent);
    }
    if (scores.length) bySkill[skill].avgExamPercent = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
    const base = bySkill[skill].avgExamPercent ?? 75;
    bySkill[skill].readiness = Math.max(0, Math.min(100, base - bySkill[skill].openErrors * 4));
  }
  return bySkill;
}

function skillLabel(skill: string) {
  return ({ hoeren: "Hören", lesen: "Lesen", schreiben: "Schreiben", sprechen: "Sprechen", grammatik: "Grammatik", wortschatz: "Wortschatz" } as Record<string, string>)[skill] ?? skill;
}

function skillRoute(skill: string) {
  if (skill === "hoeren") return "/hoeren";
  if (skill === "lesen") return "/lesen";
  if (skill === "schreiben") return "/schreiben";
  if (skill === "sprechen") return "/sprechen";
  return "/flashcards";
}

