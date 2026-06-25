import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { levelFromXp } from "./level";

export async function awardXpInternal(userId: string, source: string, refId: string, xp: number) {
  const { error } = await supabaseAdmin
    .from("xp_events")
    .insert({ user_id: userId, source, ref_id: refId, xp });
  if (error && !error.message.includes("duplicate")) return;
  const { data: profile } = await supabaseAdmin
    .from("profiles")
    .select("xp_total")
    .eq("id", userId)
    .maybeSingle();
  const newTotal = (profile?.xp_total ?? 0) + xp;
  await supabaseAdmin
    .from("profiles")
    .update({ xp_total: newTotal, level: levelFromXp(newTotal), last_active_at: new Date().toISOString() })
    .eq("id", userId);
}
