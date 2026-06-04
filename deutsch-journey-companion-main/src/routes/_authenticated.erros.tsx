import { createFileRoute } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getLearningErrorStats, listLearningErrors, resolveLearningError } from "@/lib/learning-errors.functions";
import { CheckCircle2, Target } from "lucide-react";
import { toast } from "sonner";

type LevelFilter = "all" | "A1" | "A2" | "B1";

export const Route = createFileRoute("/_authenticated/erros")({ component: Page });

function Page() {
  const [level, setLevel] = useState<LevelFilter>("all");
  const listErrors = useServerFn(listLearningErrors);
  const statsFn = useServerFn(getLearningErrorStats);
  const resolver = useServerFn(resolveLearningError);
  const qc = useQueryClient();
  const levelData = level === "all" ? undefined : level;
  const { data } = useQuery({
    queryKey: ["learning-errors", level],
    queryFn: () => listErrors({ data: { level: levelData, unresolvedOnly: true, limit: 50 } }),
  });
  const { data: stats } = useQuery({
    queryKey: ["learning-error-stats", level],
    queryFn: () => statsFn({ data: { level: levelData } }),
  });

  const markResolved = async (id: string) => {
    await resolver({ data: { id } });
    await Promise.all([
      qc.invalidateQueries({ queryKey: ["learning-errors", level] }),
      qc.invalidateQueries({ queryKey: ["learning-error-stats", level] }),
    ]);
    toast.success("Erro marcado como resolvido.");
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Target className="h-4 w-4" />
            Revisão inteligente
          </div>
          <h1 className="font-display text-3xl font-semibold">Banco de erros</h1>
          <p className="text-muted-foreground">Erros salvos dos simulados e treinos para virar revisão direcionada.</p>
        </div>
        <Select value={level} onValueChange={(value) => setLevel(value as LevelFilter)}>
          <SelectTrigger className="w-32"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="A1">A1</SelectItem>
            <SelectItem value="A2">A2</SelectItem>
            <SelectItem value="B1">B1</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        <Metric label="Erros abertos" value={stats?.unresolved ?? 0} />
        <Metric label="Total registrado" value={stats?.total ?? 0} />
        <Metric label="Tags fracas" value={stats?.byTag?.length ?? 0} />
      </div>

      {stats?.byTag?.length ? (
        <Card>
          <CardHeader><CardTitle className="text-base">Tags mais recorrentes</CardTitle></CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {stats.byTag.map((item) => (
              <Badge key={item.tag} variant="secondary">{item.tag}: {item.count}</Badge>
            ))}
          </CardContent>
        </Card>
      ) : null}

      <Card>
        <CardHeader><CardTitle>Erros em aberto</CardTitle></CardHeader>
        <CardContent>
          {!data?.errors?.length ? (
            <div className="text-sm text-muted-foreground">Nenhum erro aberto por enquanto.</div>
          ) : (
            <div className="divide-y">
              {data.errors.map((error: any) => (
                <div key={error.id} className="py-4 space-y-3">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex flex-wrap gap-2">
                        <Badge>{error.level}</Badge>
                        <Badge variant="outline">{skillLabel(error.skill)}</Badge>
                        {error.tag && <Badge variant="secondary">{error.tag}</Badge>}
                      </div>
                      <div className="font-medium">{error.prompt}</div>
                      {error.explanation && <div className="text-sm text-muted-foreground">{error.explanation}</div>}
                    </div>
                    <Button size="sm" variant="outline" className="gap-2" onClick={() => markResolved(error.id)}>
                      <CheckCircle2 className="h-4 w-4" />
                      Resolvido
                    </Button>
                  </div>
                  <div className="grid gap-2 text-sm md:grid-cols-2">
                    {error.actual && (
                      <div className="rounded-md border p-3">
                        <div className="text-xs uppercase text-muted-foreground">Sua resposta</div>
                        <div>{error.actual}</div>
                      </div>
                    )}
                    {error.expected && (
                      <div className="rounded-md border p-3">
                        <div className="text-xs uppercase text-muted-foreground">Esperado</div>
                        <div>{error.expected}</div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <Card>
      <CardContent className="pt-5">
        <div className="text-xs uppercase tracking-wide text-muted-foreground">{label}</div>
        <div className="mt-1 font-display text-2xl font-semibold">{value}</div>
      </CardContent>
    </Card>
  );
}

function skillLabel(skill: string) {
  const labels: Record<string, string> = {
    hoeren: "Hören",
    lesen: "Lesen",
    schreiben: "Schreiben",
    sprechen: "Sprechen",
    grammatik: "Grammatik",
    wortschatz: "Wortschatz",
  };
  return labels[skill] ?? skill;
}

