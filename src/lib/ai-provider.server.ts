import { createOpenAICompatible } from "@ai-sdk/openai-compatible";

export function getAiModel() {
  const apiKey = process.env.AI_GATEWAY_API_KEY ?? process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("Missing AI gateway key. Set AI_GATEWAY_API_KEY or OPENAI_API_KEY.");
  }

  const baseURL = process.env.AI_GATEWAY_BASE_URL ?? "https://api.openai.com/v1";
  const model = process.env.AI_MODEL ?? "gpt-4o-mini";
  const provider = createOpenAICompatible({
    name: "ai-provider",
    baseURL,
    apiKey,
  });

  return provider(model);
}
