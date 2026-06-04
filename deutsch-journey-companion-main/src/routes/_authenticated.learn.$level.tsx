import { createFileRoute, Link } from "@tanstack/react-router";
import { useSuspenseQuery, queryOptions } from "@tanstack/react-query";
import { listChapters } from "@/lib/learn.functions";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const optsFor = (level: "A1" | "A2" | "B1" | "B2") =>
  queryOptions({ queryKey: ["chapters", level], queryFn: () => listChapters({ data: { level } }) });

export const Route = createFileRoute("/_authenticated/learn/$level")({
  params: { parse: (p) => ({ level: p.level.toUpperCase() as "A1" | "A2" | "B1" | "B2" }) },
  loader: ({ context, params }) => context.queryClient.ensureQueryData(optsFor(params.level)),
  component: Page,
  errorComponent: ({ error }) => <div className="text-destructive">Erro: {error.message}</div>,
});

function Page() {
  const { level } = Route.useParams();
  const { data } = useSuspenseQuery(optsFor(level));
  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-display font-semibold">Curso {level}</h1>
          <p className="text-muted-foreground">{data.chapters.length} capítulos</p>
        </div>
      </div>
      {data.chapters.length === 0 ? (
        <Card>
          <CardContent className="pt-6 text-sm text-muted-foreground">
            Nenhum capítulo cadastrado ainda. Vá em <Link to="/admin/ingest" className="text-primary underline">Admin → Ingestão</Link> para carregar o conteúdo.
          </CardContent>
        </Card>
      ) : (
        <div className="grid md:grid-cols-2 gap-3">
          {data.chapters.map((c) => (
            <Link key={c.id} to="/learn/chapter/$slug" params={{ slug: c.slug }} className="group">
              <Card className="transition-colors hover:border-primary/60">
                <CardContent className="pt-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wide text-muted-foreground">Capítulo {c.n}</span>
                    {c.is_exam && <Badge variant="outline">Prova</Badge>}
                  </div>
                  <div className="mt-2 font-display text-lg font-medium">{c.title_pt}</div>
                  <div className="text-sm text-muted-foreground">{c.title_de}</div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
