export const SESSION_HARD_CAP = 600; // 10 minutes per ARCHITECTURE.md
export function enforceCap(startedAt: Date) {
  const elapsed = (Date.now() - startedAt.getTime()) / 1000;
  if (elapsed > SESSION_HARD_CAP) throw new Error("Session cap exceeded");
}
