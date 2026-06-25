import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useSuspenseQuery, queryOptions } from "@tanstack/react-query";
import { getDashboard } from "@/lib/dashboard.functions";
import { getStudyPlan } from "@/lib/study-plan.functions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Flame, BookOpen, Layers } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, PieChart, Pie, Cell, CartesianGrid, Legend } from "recharts";

const opts = queryOptions({ queryKey: ["dashboard"], queryFn: () => getDashboard() });
const planOpts = queryOptions({ queryKey: ["study-plan", "A1"], queryFn: () => getStudyPlan({ data: { level: "A1" } }) });

export const Route = createFileRoute("/_authenticated/dashboard")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Painel — Deutsch Hub" },
      { name: "description", content: "Acompanhe seu progresso de alemão: ofensiva, capítulos concluídos e estado dos flashcards SRS." },
      { name: "robots", content: "noindex" },
    ],
  }),
  loader: async ({ context }) => {
    await Promise.all([context.queryClient.ensureQueryData(opts), context.queryClient.ensureQueryData(planOpts)]);
  },
  component: Dashboard,
  errorComponent: ({ error }) => <div className="text-destructive">Erro: {error.message}</div>,
});

const COLORS = ["#94a3b8", "#60a5fa", "#f59e0b", "#34d399"];
const CHART_TEXT = "#d6cec3";
const CHART_GRID = "rgba(214, 206, 195, 0.14)";
const CHART_TOOLTIP = {
  background: "#1f1712",
  border: "1px solid rgba(214, 206, 195, 0.22)",
  color: CHART_TEXT,
  borderRadius: "8px",
};

function Dashboard() {
  const { data } = useSuspenseQuery(opts);
  const { data: plan } = useSuspenseQuery(planOpts);
  const srs = data.srsStates;
  const pie = [
    { name: "Novas", value: srs.new },
    { name: "Aprendendo", value: srs.learning },
    { name: "Revisão", value: srs.review },
    { name: "Dominadas", value: srs.mastered },
  ].filter((p) => p.value > 0);
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-display font-semibold">
          Olá, {data.profile?.display_name ?? "aluno"} 👋
        </h1>
        <p className="text-muted-foreground">Nível atual: {data.profile?.current_cefr ?? "A1"}</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Stat icon={Trophy} label="XP total" value={data.profile?.xp_total ?? 0} />
        <Stat icon={Flame} label="Nível" value={data.profile?.level ?? 1} />
        <Stat icon={BookOpen} label="Lições concluídas" value={data.lessonsCompleted} />
        <Stat icon={Layers} label="Palavras dominadas" value={srs.mastered} />
      </div>
      <Card>
        <CardHeader><CardTitle className="text-base">Plano de hoje</CardTitle></CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-2">
          {plan.actions.map((action: any) => (
            <Link key={action.title} to={action.to}>
              <div className="rounded-md border p-3 transition-colors hover:bg-accent/40">
                <div className="flex items-center justify-between gap-2">
                  <div className="font-medium">{action.title}</div>
                  <Badge variant={action.priority === "alta" ? "default" : "outline"}>{action.priority}</Badge>
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{action.detail}</div>
              </div>
            </Link>
          ))}
        </CardContent>
      </Card>
      <div className="grid md:grid-cols-2 gap-4">
        <Card>
          <CardHeader><CardTitle className="text-base">XP nos últimos 14 dias</CardTitle></CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer>
              <BarChart data={data.xpByDay} margin={{ top: 12, right: 12, bottom: 8, left: 0 }}>
                <CartesianGrid stroke={CHART_GRID} vertical={false} />
                <XAxis
                  dataKey="day"
                  tick={{ fill: CHART_TEXT, fontSize: 11 }}
                  tickFormatter={(value) => String(value).slice(5)}
                  axisLine={{ stroke: CHART_GRID }}
                  tickLine={{ stroke: CHART_GRID }}
                />
                <YAxis
                  allowDecimals={false}
                  tick={{ fill: CHART_TEXT, fontSize: 11 }}
                  axisLine={{ stroke: CHART_GRID }}
                  tickLine={{ stroke: CHART_GRID }}
                  width={34}
                />
                <Tooltip
                  cursor={{ fill: "rgba(245, 158, 11, 0.12)" }}
                  contentStyle={CHART_TOOLTIP}
                  labelFormatter={(value) => `Dia ${String(value).slice(5)}`}
                  formatter={(value) => [`${value} XP`, "XP"]}
                />
                <Bar dataKey="xp" name="XP" fill="#fb923c" radius={[6, 6, 2, 2]} maxBarSize={42} minPointSize={4} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle className="text-base">Estado do vocabulário</CardTitle></CardHeader>
          <CardContent className="h-72">
            {pie.length === 0 ? (
              <div className="grid place-items-center h-full text-muted-foreground text-sm">
                Comece a estudar flashcards para ver suas estatísticas.
              </div>
            ) : (
              <ResponsiveContainer>
                <PieChart margin={{ top: 8, right: 8, bottom: 8, left: 8 }}>
                  <Pie
                    data={pie}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={82}
                    innerRadius={36}
                    paddingAngle={2}
                    stroke="#f8f1e7"
                    strokeWidth={1}
                    labelLine={{ stroke: CHART_TEXT }}
                    label={({ name, value }) => `${name}: ${value}`}
                  >
                    {pie.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
                  </Pie>
                  <Tooltip contentStyle={CHART_TOOLTIP} formatter={(value, name) => [`${value}`, name]} />
                  <Legend wrapperStyle={{ color: CHART_TEXT, fontSize: 12 }} />
                </PieChart>
              </ResponsiveContainer>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function Stat({ icon: Icon, label, value }: { icon: React.ComponentType<{ className?: string }>; label: string; value: number }) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground uppercase tracking-wide">{label}</span>
          <Icon className="h-4 w-4 text-primary" />
        </div>
        <div className="mt-2 text-2xl font-display font-semibold">{value}</div>
      </CardContent>
    </Card>
  );
}
