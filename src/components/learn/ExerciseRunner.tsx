import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

type Exercise = {
  id: string;
  type: string;
  payload: { type: string; q?: string; a?: string; opts?: string[]; exp?: string; xp?: number; criteria?: string[]; model?: string; minWords?: number };
};

export function ExerciseRunner({
  exercises,
  onDone,
}: {
  exercises: Exercise[];
  onDone: (result: { correct: number; total: number; totalXp: number }) => void;
}) {
  const [idx, setIdx] = useState(0);
  const [answer, setAnswer] = useState("");
  const [reveal, setReveal] = useState<null | { ok: boolean }>(null);
  const [score, setScore] = useState({ correct: 0, total: 0, totalXp: 0 });

  if (exercises.length === 0) {
    return <div className="text-sm text-muted-foreground">Sem exercícios para este capítulo ainda.</div>;
  }
  const ex = exercises[idx];
  if (!ex) return null;
  const p = ex.payload;
  const xp = p.xp ?? 10;
  const isOpen = p.type === "write" || p.type === "speak";

  const submit = (val: string) => {
    if (isOpen) {
      const words = val.trim().split(/\s+/).filter(Boolean).length;
      const ok = words >= (p.minWords ?? 20);
      setReveal({ ok });
      setScore((s) => ({
        correct: s.correct + (ok ? 1 : 0),
        total: s.total + 1,
        totalXp: s.totalXp + (ok ? xp : Math.max(1, Math.round(xp / 3))),
      }));
      return;
    }
    const correctAns = (p.a ?? "").toString().trim().toLowerCase();
    const ok = val.trim().toLowerCase() === correctAns;
    setReveal({ ok });
    setScore((s) => ({
      correct: s.correct + (ok ? 1 : 0),
      total: s.total + 1,
      totalXp: s.totalXp + (ok ? xp : 0),
    }));
  };

  const next = () => {
    setReveal(null);
    setAnswer("");
    if (idx + 1 >= exercises.length) {
      onDone(score);
    } else {
      setIdx(idx + 1);
    }
  };

  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <div className="text-xs text-muted-foreground">
          Exercício {idx + 1} / {exercises.length} · {p.type}
        </div>
        <div className="text-base font-medium whitespace-pre-wrap">{p.q}</div>
        {p.type === "choose" && Array.isArray(p.opts) ? (
          <div className="grid gap-2">
            {p.opts.map((opt) => {
              const isPicked = answer === opt;
              const isCorrect = reveal && opt === p.a;
              return (
                <button
                  key={opt}
                  type="button"
                  disabled={!!reveal}
                  onClick={() => {
                    setAnswer(opt);
                    submit(opt);
                  }}
                  className={cn(
                    "rounded-md border px-3 py-2 text-left text-sm transition-colors",
                    !reveal && "hover:bg-accent/40",
                    reveal && isCorrect && "border-emerald-500/60 bg-emerald-500/10",
                    reveal && isPicked && !isCorrect && "border-destructive/60 bg-destructive/10",
                  )}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        ) : isOpen ? (
          <div className="space-y-3">
            {Array.isArray(p.criteria) && p.criteria.length > 0 && (
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                {p.criteria.map((item) => <li key={item}>{item}</li>)}
              </ul>
            )}
            <Textarea
              rows={p.type === "speak" ? 5 : 8}
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder={p.type === "speak" ? "Escreva o roteiro que voce falou em voz alta..." : "Escreva sua resposta em alemao..."}
              disabled={!!reveal}
            />
            {!reveal && (
              <Button onClick={() => submit(answer)} disabled={!answer.trim()}>
                Marcar como feito
              </Button>
            )}
          </div>
        ) : (
          <div className="flex gap-2">
            <Input
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Sua resposta…"
              disabled={!!reveal}
              onKeyDown={(e) => {
                if (e.key === "Enter" && answer && !reveal) submit(answer);
              }}
            />
            {!reveal && (
              <Button onClick={() => submit(answer)} disabled={!answer}>
                Conferir
              </Button>
            )}
          </div>
        )}
        {reveal && (
          <div
            className={cn(
              "rounded-md border p-3 text-sm",
              reveal.ok ? "border-emerald-500/40 bg-emerald-500/10" : "border-destructive/40 bg-destructive/10",
            )}
          >
            <div className="flex items-center gap-2 font-medium">
              {reveal.ok ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
              {reveal.ok ? `Correto! +${xp} XP` : `Resposta esperada: ${p.a}`}
            </div>
            {p.exp && <div className="mt-1 text-muted-foreground">{p.exp}</div>}
            {p.model && (
              <div className="mt-3 rounded-md border bg-background/60 p-3">
                <div className="text-xs font-medium uppercase text-muted-foreground">Modelo</div>
                <div className="mt-1 whitespace-pre-wrap">{p.model}</div>
              </div>
            )}
            <Button size="sm" className="mt-3" onClick={next}>
              {idx + 1 >= exercises.length ? "Finalizar" : "Próximo"}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
