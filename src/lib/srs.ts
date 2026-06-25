// SM-2 simplified
export type SrsRating = 0 | 1 | 2 | 3; // again | hard | good | easy

export interface SrsState {
  ease: number;
  interval_days: number;
  reps: number;
  lapses: number;
  streak: number;
  state: "new" | "learning" | "review" | "mastered";
  due_at: string;
}

export function nextSrs(prev: Partial<SrsState>, rating: SrsRating): SrsState {
  let ease = prev.ease ?? 2.5;
  let interval = prev.interval_days ?? 0;
  let reps = prev.reps ?? 0;
  let lapses = prev.lapses ?? 0;
  let streak = prev.streak ?? 0;
  let state: SrsState["state"] = prev.state ?? "new";

  if (rating === 0) {
    lapses += 1;
    streak = 0;
    interval = 1;
    ease = Math.max(1.3, ease - 0.2);
    state = "learning";
  } else {
    reps += 1;
    streak += 1;
    if (rating === 1) {
      interval = Math.max(1, Math.round(interval * 1.2));
      ease = Math.max(1.3, ease - 0.15);
    } else if (rating === 2) {
      interval = interval === 0 ? 1 : interval < 3 ? 3 : Math.round(interval * ease);
    } else {
      interval = interval === 0 ? 3 : Math.round(interval * ease * 1.3);
      ease += 0.1;
    }
    state = interval >= 60 && streak >= 3 ? "mastered" : interval >= 7 ? "review" : "learning";
  }
  interval = Math.min(interval, 365);
  const due = new Date(Date.now() + interval * 86400000).toISOString();
  return { ease, interval_days: interval, reps, lapses, streak, state, due_at: due };
}
