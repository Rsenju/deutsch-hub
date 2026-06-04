import { createFileRoute, Link } from "@tanstack/react-router";
import { useSuspenseQuery, queryOptions, useQueryClient } from "@tanstack/react-query";
import { getChapter, completeLesson, submitQuiz } from "@/lib/learn.functions";
import { useServerFn } from "@tanstack/react-start";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { AudioWord } from "@/components/learn/AudioWord";
import { ExerciseRunner } from "@/components/learn/ExerciseRunner";
import { ArrowLeft, Check } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const optsFor = (slug: string) =>
  queryOptions({ queryKey: ["chapter", slug], queryFn: () => getChapter({ data: { slug } }) });

export const Route = createFileRoute("/_authenticated/learn/chapter/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `Capítulo ${params.slug} — Deutsch Hub` },
      { name: "description", content: `Estude o capítulo ${params.slug} de alemão com lições, gramática, áudio nativo e exercícios.` },
      { property: "og:title", content: `Capítulo ${params.slug} — Deutsch Hub` },
      { property: "og:description", content: `Lições, gramática e exercícios do capítulo ${params.slug}.` },
      { property: "og:url", content: `/learn/chapter/${params.slug}` },
      { property: "og:type", content: "article" },
    ],
  }),
  loader: ({ context, params }) => context.queryClient.ensureQueryData(optsFor(params.slug)),
  component: Page,
  errorComponent: ({ error }) => <div className="text-destructive">Erro: {error.message}</div>,
});

function Page() {
  const { slug } = Route.useParams();
  const { data } = useSuspenseQuery(optsFor(slug));
  const complete = useServerFn(completeLesson);
  const quiz = useServerFn(submitQuiz);
  const qc = useQueryClient();
  const [activeLessonIdx, setActiveLessonIdx] = useState(0);

  if (!data.chapter) return <div>Capítulo não encontrado.</div>;
  const lessons = data.lessons;
  const lesson = lessons[activeLessonIdx];
  const exForLesson = lesson ? data.exercises.filter((e) => e.lesson_slug === lesson.slug) : [];

  return (
    <div className="space-y-6">
      <Link to="/learn/$level" params={{ level: data.chapter.level as "A1" | "A2" | "B1" }} className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> Voltar ao curso {data.chapter.level}
      </Link>
      <div>
        <div className="text-xs uppercase tracking-wide text-muted-foreground">Capítulo {data.chapter.n}</div>
        <h1 className="font-display text-3xl font-semibold">{data.chapter.title_pt}</h1>
        <p className="text-muted-foreground">{data.chapter.title_de}</p>
      </div>

      <div className="grid md:grid-cols-[220px_1fr] gap-6">
        <aside className="space-y-1">
          {lessons.map((l, i) => (
            <button
              key={l.id}
              onClick={() => setActiveLessonIdx(i)}
              className={`w-full text-left rounded-md px-3 py-2 text-sm transition-colors ${
                i === activeLessonIdx ? "bg-accent text-accent-foreground" : "hover:bg-accent/40"
              }`}
            >
              <div className="text-xs text-muted-foreground">Lição {l.sort}</div>
              <div className="font-medium">{l.title_pt}</div>
            </button>
          ))}
          {lessons.length === 0 && (
            <div className="text-sm text-muted-foreground">Conteúdo em breve.</div>
          )}
        </aside>

        {lesson && (
          <Tabs defaultValue="teoria" className="min-w-0">
            <TabsList>
              <TabsTrigger value="teoria">Teoria</TabsTrigger>
              <TabsTrigger value="vocab">Vocabulário</TabsTrigger>
              <TabsTrigger value="exemplos">Exemplos</TabsTrigger>
              <TabsTrigger value="exercicios">Exercícios</TabsTrigger>
            </TabsList>
            <TabsContent value="teoria">
              <Card>
                <CardHeader>
                  <CardTitle>{lesson.title_pt} <span className="text-muted-foreground text-sm font-normal">— {lesson.title_de}</span></CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm leading-relaxed">
                  {lesson.rule && <div className="rounded-md border border-primary/30 bg-primary/5 p-3"><strong>Regra:</strong> {lesson.rule}</div>}
                  {lesson.content && <pre className="whitespace-pre-wrap font-sans">{lesson.content}</pre>}
                  {Array.isArray(lesson.notes) && lesson.notes.length > 0 && (
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      {(lesson.notes as string[]).map((n, i) => <li key={i}>{n}</li>)}
                    </ul>
                  )}
                  <Button
                    onClick={async () => {
                      await complete({ data: { lessonId: lesson.id, lessonSlug: lesson.slug } });
                      toast.success("Lição concluída! +20 XP");
                      qc.invalidateQueries({ queryKey: ["dashboard"] });
                    }}
                    className="gap-2"
                  >
                    <Check className="h-4 w-4" /> Marcar como concluída
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="vocab">
              <Card>
                <CardContent className="pt-6">
                  {Array.isArray(lesson.vocab) && (lesson.vocab as Array<{ de: string; pt: string }>).length > 0 ? (
                    <ul className="divide-y">
                      {(lesson.vocab as Array<{ de: string; pt: string }>).map((v, i) => (
                        <li key={i} className="flex items-center justify-between py-2">
                          <AudioWord text={v.de} className="text-base font-medium" />
                          <span className="text-sm text-muted-foreground">{v.pt}</span>
                        </li>
                      ))}
                    </ul>
                  ) : <div className="text-sm text-muted-foreground">Sem vocabulário nesta lição.</div>}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="exemplos">
              <Card>
                <CardContent className="pt-6 space-y-3">
                  {Array.isArray(lesson.examples) && (lesson.examples as Array<{ de: string; pt: string }>).length > 0 ? (
                    (lesson.examples as Array<{ de: string; pt: string }>).map((e, i) => (
                      <div key={i} className="rounded-md border p-3">
                        <AudioWord text={e.de} className="font-medium" />
                        <div className="text-sm text-muted-foreground mt-1">{e.pt}</div>
                      </div>
                    ))
                  ) : <div className="text-sm text-muted-foreground">Sem exemplos.</div>}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="exercicios">
              <ExerciseRunner
                exercises={exForLesson as unknown as { id: string; type: string; payload: { type: string; q?: string; a?: string; opts?: string[]; exp?: string; xp?: number; criteria?: string[]; model?: string; minWords?: number } }[]}
                onDone={async (r) => {
                  await quiz({ data: { lessonSlug: lesson.slug, totalXp: r.totalXp, correct: r.correct, total: r.total } });
                  toast.success(`Quiz concluído! +${r.totalXp} XP (${r.correct}/${r.total})`);
                  qc.invalidateQueries({ queryKey: ["dashboard"] });
                }}
              />
            </TabsContent>
          </Tabs>
        )}
      </div>
    </div>
  );
}
