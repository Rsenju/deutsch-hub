import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getSkillReport } from "@/lib/study-plan.functions";
import { BarChart3 } from "lucide-react";

type Level = "A1" | "A2" | "B1" | "B2";

const SKILLS = [
  ["hoeren", "Hören"],
  ["lesen", "Lesen"],
  ["schreiben", "Schreiben"],
  ["sprechen", "Sprechen"],
  ["grammatik", "Grammatik"],
  ["wortschatz", "Wortschatz"],
] as const;

export const Route = createFileRoute("/_authenticated/relatorios")({ component: Page });

function Page() {
  const [level, setLevel] = useState<Level>("A1");
  const reportFn = useServerFn(getSkillReport);
  const { data } = useQuery({
    queryKey: ["skill-report", level],
    queryFn: () => reportFn({ data: { level } }),
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <BarChart3 className="h-4 w-4" />
            Prontidão Goethe
          </div>
          <h1 className="font-display text-3xl font-semibold">Relatórios por habilidade</h1>
          <p className="text-muted-foreground">Veja onde você está forte e onde precisa revisar antes da prova.</p>
        </div>
        <Select value={level} onValueChange={(value) => setLevel(value as Level)}>
          <SelectTrigger className="w-28"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="A1">A1</SelectItem>
            <SelectItem value="A2">A2</SelectItem>
            <SelectItem value="B1">B1</SelectItem>
            <SelectItem value="B2">B2</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Card>
        <CardHeader><CardTitle>Prontidão geral: {data?.readiness ?? 0}%</CardTitle></CardHeader>
        <CardContent><Progress value={data?.readiness ?? 0} /></CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        {SKILLS.map(([key, label]) => {
          const item = data?.bySkill?.[key];
          const tags = Object.entries(item?.tags ?? {}).sort((a: any, b: any) => b[1] - a[1]).slice(0, 4);
          return (
            <Card key={key}>
              <CardHeader>
                <div className="flex items-center justify-between gap-2">
                  <CardTitle className="text-base">{label}</CardTitle>
                  <Badge variant={(item?.readiness ?? 0) >= 70 ? "default" : "destructive"}>{item?.readiness ?? 0}%</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <Progress value={item?.readiness ?? 0} />
                <div className="text-sm text-muted-foreground">
                  Erros abertos: {item?.openErrors ?? 0} · Média em simulados: {item?.avgExamPercent ?? "sem dados"}
                </div>
                {tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {tags.map(([tag, count]) => <Badge key={tag} variant="secondary">{tag}: {String(count)}</Badge>)}
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

