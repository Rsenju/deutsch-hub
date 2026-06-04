import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { generateText, Output } from "ai";
import { z } from "zod";

const SchreibenSchema = z.object({
  prompt: z.string().min(1).max(500),
  text: z.string().min(1).max(5000),
  level: z.enum(["A1", "A2", "B1"]),
});

const FeedbackSchema = z.object({
  nota_0a100: z.number().min(0).max(100),
  gramatica: z.array(z.string()),
  vocabulario: z.array(z.string()),
  coesao: z.array(z.string()),
  feedback_geral: z.string(),
  versao_corrigida: z.string(),
});

export const correctSchreiben = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => SchreibenSchema.parse(d))
  .handler(async ({ data, context }) => {
    const { getAiModel } = await import("./ai-provider.server");
    const { output } = await generateText({
      model: getAiModel(),
      output: Output.object({ schema: FeedbackSchema }),
      system: `Você é um corretor de redações em alemão para alunos brasileiros no nível ${data.level} (Goethe). Avalie com rigor mas seja construtivo. Aponte erros específicos de gramática, vocabulário e coesão. A versão corrigida deve preservar a intenção do aluno.`,
      prompt: `Tarefa (em pt-BR): ${data.prompt}\n\nTexto do aluno (em alemão):\n${data.text}`,
    });
    const { awardXpInternal } = await import("./learn-awards.server");
    await awardXpInternal(context.userId, "schreiben", `${Date.now()}`, Math.round(output.nota_0a100 / 5));
    return output;
  });
