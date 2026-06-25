import { createFileRoute } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { AudioWord } from "@/components/learn/AudioWord";
import { GOETHE_SIMULADOS, type GoetheLevel, type GoetheSection } from "@/content/goetheSimulados";
import { listSimulationAttempts, saveSimulationAttempt } from "@/lib/simulados.functions";
import { createLearningErrors } from "@/lib/learning-errors.functions";
import { CheckCircle2, Clock, GraduationCap, RotateCcw } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/simulados")({ component: Page });

type Answers = Record<string, string>;
type SelfScores = Record<string, number>;

const SECTION_LABELS: Record<string, string> = {
  hoeren: "Hören",
  lesen: "Lesen",
  schreiben: "Schreiben",
  sprechen: "Sprechen",
};

function Page() {
  const [level, setLevel] = useState<GoetheLevel>("A1");
  const [sectionIndex, setSectionIndex] = useState(0);
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);
  const [saving, setSaving] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const [selfScores, setSelfScores] = useState<SelfScores>({});
  const saveAttempt = useServerFn(saveSimulationAttempt);
  const listAttempts = useServerFn(listSimulationAttempts);
  const createErrors = useServerFn(createLearningErrors);
  const queryClient = useQueryClient();

  const simulado = GOETHE_SIMULADOS[level];
  const section = simulado.sections[sectionIndex];
  const totalMinutes = simulado.sections.reduce((sum, s) => sum + s.durationMinutes, 0);
  const elapsed = useElapsedSeconds(startedAt, finished);
  const totalSeconds = totalMinutes * 60;
  const remainingSeconds = Math.max(0, totalSeconds - elapsed);
  const result = useMemo(() => scoreSimulation(simulado.sections, answers, selfScores), [answers, selfScores, simulado.sections]);
  const { data: attemptData } = useQuery({
    queryKey: ["simulation-attempts", level],
    queryFn: () => listAttempts({ data: { level, limit: 6 } }),
  });

  const reset = (nextLevel = level) => {
    setLevel(nextLevel);
    setSectionIndex(0);
    setStartedAt(null);
    setFinished(false);
    setAnswers({});
    setSelfScores({});
  };

  const start = () => {
    setStartedAt(Date.now());
    setFinished(false);
  };

  const finish = async () => {
    if (!startedAt || saving) return;
    setSaving(true);
    try {
      const passed = result.percent >= simulado.passPercent;
      await saveAttempt({
        data: {
          level,
          simuladoSlug: `${level.toLowerCase()}-simulado-1`,
          simuladoTitle: simulado.title,
          totalScore: result.score,
          maxScore: result.maxScore,
          percent: result.percent,
          passed,
          elapsedSeconds: elapsed,
          answers,
          selfScores,
          sectionScores: result.bySection,
        },
      });
      const errors = buildErrorsFromSimulation({
        level,
        simuladoTitle: simulado.title,
        sections: simulado.sections,
        answers,
        selfScores,
      });
      if (errors.length > 0) {
        await createErrors({ data: { errors } });
      }
      await queryClient.invalidateQueries({ queryKey: ["simulation-attempts", level] });
      toast.success(errors.length > 0 ? `Tentativa salva. ${errors.length} erro(s) adicionados para revisão.` : "Tentativa salva no histórico.");
      setFinished(true);
    } catch (error) {
      toast.error((error as Error).message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <GraduationCap className="h-4 w-4" />
            Modo prova
          </div>
          <h1 className="font-display text-3xl font-semibold">Simulados Goethe</h1>
          <p className="text-muted-foreground">Treino cronometrado por seção, com nota e relatório final.</p>
        </div>
        <div className="flex items-center gap-2">
          <Select value={level} onValueChange={(value) => reset(value as GoetheLevel)}>
            <SelectTrigger className="w-24"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="A1">A1</SelectItem>
              <SelectItem value="A2">A2</SelectItem>
              <SelectItem value="B1">B1</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="gap-2" onClick={() => reset()}>
            <RotateCcw className="h-4 w-4" />
            Reiniciar
          </Button>
        </div>
      </div>

      <Card>
        <CardContent className="pt-5 space-y-4">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <Badge>{simulado.level}</Badge>
                <Badge variant="outline">Aprovacao: {simulado.passPercent}%</Badge>
                <Badge variant="secondary">{totalMinutes} min</Badge>
              </div>
              <h2 className="mt-3 font-display text-xl font-semibold">{simulado.title}</h2>
              <p className="text-sm text-muted-foreground max-w-3xl">{simulado.description}</p>
            </div>
            <TimerBox remainingSeconds={remainingSeconds} elapsed={elapsed} running={!!startedAt && !finished} />
          </div>
          <Progress value={Math.min(100, (elapsed / totalSeconds) * 100)} />
          {!startedAt && (
            <Button onClick={start} className="w-full md:w-auto">
              Começar simulado
            </Button>
          )}
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
        <aside className="space-y-2">
          {simulado.sections.map((s, index) => {
            const status = sectionStatus(s, answers, selfScores);
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setSectionIndex(index)}
                className={`w-full rounded-md border px-3 py-3 text-left transition-colors ${
                  index === sectionIndex ? "border-primary bg-primary/5" : "hover:bg-accent/40"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-medium">{SECTION_LABELS[s.id]}</span>
                  {status === "done" ? <CheckCircle2 className="h-4 w-4 text-emerald-500" /> : <Clock className="h-4 w-4 text-muted-foreground" />}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{s.durationMinutes} min · {s.maxScore} pts</div>
              </button>
            );
          })}
        </aside>

        {finished ? (
          <ReportCard sections={simulado.sections} result={result} passPercent={simulado.passPercent} />
        ) : (
          <SectionCard
            section={section}
            answers={answers}
            selfScores={selfScores}
            disabled={!startedAt}
            onAnswer={(questionId, value) => setAnswers((prev) => ({ ...prev, [questionId]: value }))}
            onProduction={(taskId, value) => setAnswers((prev) => ({ ...prev, [taskId]: value }))}
            onSelfScore={(taskId, value) => setSelfScores((prev) => ({ ...prev, [taskId]: value }))}
            onPrev={() => setSectionIndex((i) => Math.max(0, i - 1))}
            onNext={() => setSectionIndex((i) => Math.min(simulado.sections.length - 1, i + 1))}
            onFinish={finish}
            saving={saving}
            isFirst={sectionIndex === 0}
            isLast={sectionIndex === simulado.sections.length - 1}
          />
        )}
      </div>

      <AttemptHistory attempts={attemptData?.attempts ?? []} />
    </div>
  );
}

function SectionCard({
  section,
  answers,
  selfScores,
  disabled,
  onAnswer,
  onProduction,
  onSelfScore,
  onPrev,
  onNext,
  onFinish,
  saving,
  isFirst,
  isLast,
}: {
  section: GoetheSection;
  answers: Answers;
  selfScores: SelfScores;
  disabled: boolean;
  onAnswer: (questionId: string, value: string) => void;
  onProduction: (taskId: string, value: string) => void;
  onSelfScore: (taskId: string, value: number) => void;
  onPrev: () => void;
  onNext: () => void;
  onFinish: () => void;
  saving: boolean;
  isFirst: boolean;
  isLast: boolean;
}) {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <CardTitle>{SECTION_LABELS[section.id]}</CardTitle>
          <Badge variant="outline">{section.durationMinutes} min</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-5">
        {disabled && (
          <div className="rounded-md border border-amber-500/30 bg-amber-500/10 p-3 text-sm text-amber-200">
            Clique em "Começar simulado" para liberar as respostas e iniciar o cronômetro.
          </div>
        )}
        <p className="text-sm text-muted-foreground">{section.instructions}</p>

        {section.audioScript && (
          <div className="rounded-md border p-4 space-y-3">
            <div className="text-sm font-medium">Áudio do simulado</div>
            <AudioWord text={section.audioScript} label="Ouvir tarefa de Hören" className="text-sm" />
          </div>
        )}

        {section.sourceText && (
          <div className="rounded-md border bg-muted/30 p-4">
            <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed">{section.sourceText}</pre>
          </div>
        )}

        {section.questions?.map((q) => (
          <div key={q.id} className="rounded-md border p-4 space-y-3">
            <div className="font-medium">{q.prompt}</div>
            <div className="grid gap-2">
              {q.options.map((option) => {
                const picked = answers[q.id] === option;
                return (
                  <button
                    key={option}
                    type="button"
                    disabled={disabled}
                    onClick={() => onAnswer(q.id, option)}
                    className={`rounded-md border px-3 py-2 text-left text-sm transition-colors ${
                      picked ? "border-primary bg-primary/10" : "hover:bg-accent/40"
                    } ${disabled ? "opacity-60" : ""}`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        {section.task && (
          <div className="rounded-md border p-4 space-y-4">
            <div>
              <div className="font-medium">{section.task.prompt}</div>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                {section.task.requirements.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <Textarea
              rows={section.task.type === "speaking" ? 5 : 8}
              disabled={disabled}
              value={answers[section.task.id] ?? ""}
              onChange={(e) => onProduction(section.task!.id, e.target.value)}
              placeholder={section.task.type === "speaking" ? "Anote aqui sua resposta oral ou o roteiro que voce falou..." : "Escreva sua resposta em alemao..."}
            />
            <div className="space-y-2">
              <div className="text-sm font-medium">Autoavaliacao desta parte</div>
              <div className="grid grid-cols-5 gap-2">
                {[0, 1, 2, 3, 4].map((score) => (
                  <Button
                    key={score}
                    type="button"
                    variant={selfScores[section.task!.id] === score ? "default" : "outline"}
                    disabled={disabled}
                    onClick={() => onSelfScore(section.task!.id, score)}
                  >
                    {score}
                  </Button>
                ))}
              </div>
              <p className="text-xs text-muted-foreground">0 = nao consegui cumprir a tarefa · 4 = cumpri todos os pontos com clareza.</p>
            </div>
            {section.task.modelAnswer && (
              <details className="rounded-md border bg-muted/30 p-3 text-sm">
                <summary className="cursor-pointer font-medium">Ver modelo de resposta</summary>
                <p className="mt-2 text-muted-foreground">{section.task.modelAnswer}</p>
              </details>
            )}
          </div>
        )}

        <div className="flex flex-wrap justify-between gap-2 border-t pt-4">
          <Button variant="outline" onClick={onPrev} disabled={isFirst}>Anterior</Button>
          {isLast ? (
            <Button onClick={onFinish} disabled={disabled || saving}>{saving ? "Salvando..." : "Finalizar e ver relatório"}</Button>
          ) : (
            <Button onClick={onNext}>Próxima seção</Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

function AttemptHistory({
  attempts,
}: {
  attempts: Array<{
    id: string;
    level: string;
    simulado_title: string;
    total_score: number;
    max_score: number;
    percent: number;
    passed: boolean;
    elapsed_seconds: number;
    created_at: string;
  }>;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Histórico recente</CardTitle>
      </CardHeader>
      <CardContent>
        {attempts.length === 0 ? (
          <div className="text-sm text-muted-foreground">Nenhuma tentativa salva para este nível ainda.</div>
        ) : (
          <div className="divide-y">
            {attempts.map((attempt) => (
              <div key={attempt.id} className="flex flex-wrap items-center justify-between gap-3 py-3">
                <div>
                  <div className="font-medium">{attempt.simulado_title}</div>
                  <div className="text-xs text-muted-foreground">
                    {new Date(attempt.created_at).toLocaleString("pt-BR")} · tempo: {formatSeconds(attempt.elapsed_seconds)}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={attempt.passed ? "default" : "destructive"}>{attempt.passed ? "Aprovado" : "Revisar"}</Badge>
                  <Badge variant="outline">{attempt.percent}%</Badge>
                  <span className="text-sm text-muted-foreground">{attempt.total_score}/{attempt.max_score}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function ReportCard({
  sections,
  result,
  passPercent,
}: {
  sections: GoetheSection[];
  result: ReturnType<typeof scoreSimulation>;
  passPercent: number;
}) {
  const passed = result.percent >= passPercent;
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <CardTitle>Relatório do simulado</CardTitle>
          <Badge variant={passed ? "default" : "destructive"}>{passed ? "Aprovado" : "Precisa revisar"}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="grid gap-3 md:grid-cols-3">
          <Metric label="Pontuação" value={`${result.score}/${result.maxScore}`} />
          <Metric label="Percentual" value={`${result.percent}%`} />
          <Metric label="Meta" value={`${passPercent}%`} />
        </div>
        <Progress value={result.percent} />

        <div className="grid gap-3 md:grid-cols-2">
          {sections.map((section) => {
            const sectionScore = result.bySection[section.id] ?? { score: 0, maxScore: section.maxScore, percent: 0, mistakes: [] };
            return (
              <div key={section.id} className="rounded-md border p-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="font-medium">{SECTION_LABELS[section.id]}</div>
                  <Badge variant="outline">{sectionScore.percent}%</Badge>
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{sectionScore.score}/{sectionScore.maxScore} pontos</div>
                {sectionScore.mistakes.length > 0 ? (
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-xs text-muted-foreground">
                    {sectionScore.mistakes.map((m) => <li key={m}>{m}</li>)}
                  </ul>
                ) : (
                  <div className="mt-3 flex items-center gap-2 text-xs text-emerald-500">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Nenhum erro objetivo nesta seção.
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="rounded-md border p-4 text-sm">
          <div className="font-medium">Próxima revisão recomendada</div>
          <p className="mt-1 text-muted-foreground">{recommendation(result.percent)}</p>
        </div>
      </CardContent>
    </Card>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border p-4">
      <div className="text-xs uppercase tracking-wide text-muted-foreground">{label}</div>
      <div className="mt-1 font-display text-2xl font-semibold">{value}</div>
    </div>
  );
}

function TimerBox({ remainingSeconds, elapsed, running }: { remainingSeconds: number; elapsed: number; running: boolean }) {
  return (
    <div className="rounded-md border px-4 py-3 text-right">
      <div className="text-xs uppercase tracking-wide text-muted-foreground">{running ? "Tempo restante" : "Cronômetro"}</div>
      <div className="font-display text-2xl font-semibold tabular-nums">{formatSeconds(remainingSeconds)}</div>
      <div className="text-xs text-muted-foreground">decorrido: {formatSeconds(elapsed)}</div>
    </div>
  );
}

function useElapsedSeconds(startedAt: number | null, paused: boolean) {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    if (!startedAt || paused) return;
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, [startedAt, paused]);
  if (!startedAt) return 0;
  return Math.floor((now - startedAt) / 1000);
}

function formatSeconds(total: number) {
  const minutes = Math.floor(total / 60);
  const seconds = total % 60;
  return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function sectionStatus(section: GoetheSection, answers: Answers, selfScores: SelfScores) {
  if (section.questions?.some((q) => !answers[q.id])) return "todo";
  if (section.task && (answers[section.task.id]?.trim() || "").length === 0) return "todo";
  if (section.task && selfScores[section.task.id] === undefined) return "todo";
  return "done";
}

function scoreSimulation(sections: GoetheSection[], answers: Answers, selfScores: SelfScores) {
  let score = 0;
  let maxScore = 0;
  const bySection: Record<string, { score: number; maxScore: number; percent: number; mistakes: string[] }> = {};

  for (const section of sections) {
    let sectionScore = 0;
    const mistakes: string[] = [];
    maxScore += section.maxScore;

    if (section.questions?.length) {
      const points = section.maxScore / section.questions.length;
      for (const q of section.questions) {
        if (answers[q.id] === q.answer) {
          sectionScore += points;
        } else {
          mistakes.push(`${q.prompt} Resposta esperada: ${q.answer}.`);
        }
      }
    }

    if (section.task) {
      const raw = selfScores[section.task.id] ?? 0;
      sectionScore = (Math.max(0, Math.min(4, raw)) / 4) * section.maxScore;
      if (raw < 3) {
        mistakes.push("Produção escrita/oral abaixo da meta. Refaça usando todos os pontos obrigatórios.");
      }
      if (!(answers[section.task.id] ?? "").trim()) {
        mistakes.push("Nenhuma resposta registrada para esta tarefa.");
      }
    }

    sectionScore = Math.round(sectionScore);
    score += sectionScore;
    bySection[section.id] = {
      score: sectionScore,
      maxScore: section.maxScore,
      percent: Math.round((sectionScore / section.maxScore) * 100),
      mistakes,
    };
  }

  return { score, maxScore, percent: Math.round((score / maxScore) * 100), bySection };
}

function buildErrorsFromSimulation({
  level,
  simuladoTitle,
  sections,
  answers,
  selfScores,
}: {
  level: GoetheLevel;
  simuladoTitle: string;
  sections: GoetheSection[];
  answers: Answers;
  selfScores: SelfScores;
}) {
  const errors: Array<{
    level: GoetheLevel;
    skill: "hoeren" | "lesen" | "schreiben" | "sprechen" | "grammatik" | "wortschatz";
    category: string;
    tag?: string;
    source: string;
    sourceRef?: string;
    prompt: string;
    expected?: string;
    actual?: string;
    explanation?: string;
    severity: number;
  }> = [];

  for (const section of sections) {
    for (const question of section.questions ?? []) {
      const actual = answers[question.id];
      if (actual !== question.answer) {
        errors.push({
          level,
          skill: section.id === "hoeren" || section.id === "lesen" ? section.id : "grammatik",
          category: "simulado_objetivo",
          tag: question.tag,
          source: "goethe_simulado",
          sourceRef: question.id,
          prompt: question.prompt,
          expected: question.answer,
          actual: actual || "sem resposta",
          explanation: `${simuladoTitle}: ${question.explanation}`,
          severity: section.id === "hoeren" ? 4 : 3,
        });
      }
    }

    if (section.task) {
      const score = selfScores[section.task.id] ?? 0;
      const text = answers[section.task.id] ?? "";
      if (score < 3 || !text.trim()) {
        errors.push({
          level,
          skill: section.task.type === "writing" ? "schreiben" : "sprechen",
          category: "simulado_producao",
          tag: section.task.tag,
          source: "goethe_simulado",
          sourceRef: section.task.id,
          prompt: section.task.prompt,
          expected: section.task.requirements.join("; "),
          actual: text.trim() || "sem resposta registrada",
          explanation: `${simuladoTitle}: autoavaliacao ${score}/4. Refaça cumprindo todos os pontos obrigatorios.`,
          severity: score <= 1 ? 5 : 4,
        });
      }
    }
  }

  return errors;
}

function recommendation(percent: number) {
  if (percent >= 80) return "Bom resultado. Faça outro simulado e aumente o foco em tempo de prova.";
  if (percent >= 60) return "Você está na zona de aprovação, mas ainda precisa revisar as seções com menos de 70%.";
  return "Antes de repetir o simulado, revise os erros, refaça Schreiben/Sprechen e treine vocabulário das seções fracas.";
}
