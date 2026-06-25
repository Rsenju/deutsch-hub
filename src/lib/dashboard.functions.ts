import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

export const getDashboard = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { userId } = context;
    const [{ data: profile }, { data: srsRows }, { data: xpRows }, { data: completed }] = await Promise.all([
      supabaseAdmin.from("profiles").select("display_name, current_cefr, xp_total, level, streak_days").eq("id", userId).maybeSingle(),
      supabaseAdmin.from("user_vocab_srs").select("state").eq("user_id", userId),
      supabaseAdmin.from("xp_events").select("xp, created_at").eq("user_id", userId).order("created_at", { ascending: false }).limit(60),
      supabaseAdmin.from("user_lesson_progress").select("lesson_id").eq("user_id", userId),
    ]);
    const states = { new: 0, learning: 0, review: 0, mastered: 0 };
    (srsRows ?? []).forEach((r) => {
      states[r.state as keyof typeof states] = (states[r.state as keyof typeof states] ?? 0) + 1;
    });
    // Aggregate XP by day (last 14d)
    const byDay = new Map<string, number>();
    const today = new Date();
    for (let i = 13; i >= 0; i--) {
      const d = new Date(today.getTime() - i * 86400000).toISOString().slice(0, 10);
      byDay.set(d, 0);
    }
    (xpRows ?? []).forEach((r) => {
      const d = (r.created_at as string).slice(0, 10);
      if (byDay.has(d)) byDay.set(d, (byDay.get(d) ?? 0) + r.xp);
    });
    return {
      profile: profile ?? null,
      srsStates: states,
      xpByDay: Array.from(byDay.entries()).map(([day, xp]) => ({ day, xp })),
      lessonsCompleted: completed?.length ?? 0,
    };
  });
