export function reportAppError(error: unknown, context: Record<string, unknown> = {}) {
  console.error("[AppError]", { error, context });
}
