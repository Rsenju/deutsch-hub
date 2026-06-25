export function levelFromXp(xp: number): number {
  // Simple curve: every 250 XP = +1 level
  return Math.max(1, Math.floor(xp / 250) + 1);
}
