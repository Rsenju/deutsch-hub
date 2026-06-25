import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, streamText, type UIMessage } from "ai";

type Body = { messages?: unknown; mode?: "tutor" | "examiner"; level?: "A1" | "A2" | "B1" };

const SYSTEMS = {
  tutor: (level: string) =>
    `Você é um tutor de alemão experiente para alunos brasileiros no nível ${level}. Explique em português brasileiro claro e direto, mas inclua sempre exemplos em alemão. Quando o aluno escrever em alemão, corrija com gentileza apontando o erro e mostrando a forma correta. Foque em gramática, vocabulário e uso cultural. Use markdown.`,
  examiner: (level: string) =>
    `Você é um examinador oficial do exame Goethe ${level}. Conduza uma simulação da parte oral (Sprechen) em alemão. Faça perguntas progressivamente mais difíceis dentro do nível ${level}. Após 6-8 trocas, encerre com um feedback estruturado em português contendo: nota (0-100), pontos fortes, erros de gramática, vocabulário usado, fluência. Comece imediatamente com a primeira pergunta em alemão.`,
};

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const body = (await request.json()) as Body;
        if (!Array.isArray(body.messages)) return new Response("Missing messages", { status: 400 });
        const mode = body.mode === "examiner" ? "examiner" : "tutor";
        const level = body.level ?? "A1";
        const { getAiModel } = await import("@/lib/ai-provider.server");
        const result = streamText({
          model: getAiModel(),
          system: SYSTEMS[mode](level),
          messages: await convertToModelMessages(body.messages as UIMessage[]),
        });
        return result.toUIMessageStreamResponse({ originalMessages: body.messages as UIMessage[] });
      },
    },
  },
});
