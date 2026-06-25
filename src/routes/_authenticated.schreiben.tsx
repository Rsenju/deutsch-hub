import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { correctSchreiben } from "@/lib/schreiben.functions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/schreiben")({ component: Page });

type Feedback = {
  nota_0a100: number;
  gramatica: string[];
  vocabulario: string[];
  coesao: string[];
  feedback_geral: string;
  versao_corrigida: string;
};

function Page() {
  const [level, setLevel] = useState<"A1" | "A2" | "B1">("A1");
  const [prompt, setPrompt] = useState("Escreva um email curto para um amigo contando seu fim de semana.");
  const [text, setText] = useState("");
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [loading, setLoading] = useState(false);
  const fn = useServerFn(correctSchreiben);

  const submit = async () => {
    setLoading(true);
    setFeedback(null);
    try {
      const r = await fn({ data: { level, prompt, text } });
      setFeedback(r);
    } catch (e) {
      toast.error((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-semibold">Schreiben</h1>
        <p className="text-muted-foreground">Escreva em alemão e receba correção detalhada por IA.</p>
      </div>
      <Card>
        <CardContent className="pt-6 space-y-3">
          <div className="flex gap-2">
            <Select value={level} onValueChange={(v) => setLevel(v as "A1" | "A2" | "B1")}>
              <SelectTrigger className="w-24"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="A1">A1</SelectItem>
                <SelectItem value="A2">A2</SelectItem>
                <SelectItem value="B1">B1</SelectItem>
              </SelectContent>
            </Select>
            <Input value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Tarefa de escrita" />
          </div>
          <Textarea rows={8} value={text} onChange={(e) => setText(e.target.value)} placeholder="Schreiben Sie hier..." />
          <Button onClick={submit} disabled={loading || !text.trim()}>{loading ? "Corrigindo…" : "Enviar para correção"}</Button>
        </CardContent>
      </Card>
      {feedback && (
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader><CardTitle>Nota: <span className="text-primary">{feedback.nota_0a100}/100</span></CardTitle></CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p>{feedback.feedback_geral}</p>
              <FbList title="Gramática" items={feedback.gramatica} />
              <FbList title="Vocabulário" items={feedback.vocabulario} />
              <FbList title="Coesão" items={feedback.coesao} />
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Versão corrigida</CardTitle></CardHeader>
            <CardContent>
              <pre className="text-sm whitespace-pre-wrap font-sans">{feedback.versao_corrigida}</pre>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}

function FbList({ title, items }: { title: string; items: string[] }) {
  if (!items?.length) return null;
  return (
    <div>
      <div className="font-medium text-foreground">{title}</div>
      <ul className="list-disc pl-5 text-muted-foreground space-y-1">{items.map((it, i) => <li key={i}>{it}</li>)}</ul>
    </div>
  );
}
