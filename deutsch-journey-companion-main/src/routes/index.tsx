import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, GraduationCap, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:url", content: "https://deutsch-hub.vercel.app/" },
    ],
    links: [
      { rel: "canonical", href: "https://deutsch-hub.vercel.app/" },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background bg-radial-amber">
      <header className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2 font-display text-lg font-semibold">
          <span className="inline-block size-6 rounded-md bg-gradient-to-br from-primary to-orange-600" />
          Deutsch Hub
        </div>
        <div className="flex gap-2">
          <Link to="/login"><Button variant="ghost">Entrar</Button></Link>
          <Link to="/signup"><Button>Começar grátis</Button></Link>
        </div>
      </header>
      <section className="mx-auto max-w-4xl px-6 pt-20 pb-24 text-center">
        <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tighter">
          Alemão do A1 ao <span className="text-gradient-amber">B1</span>
          <br />sem rodeios.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Curso completo, flashcards com repetição espaçada, tutor IA e preparação real para
          os exames Goethe. Tudo em um só lugar.
        </p>
        <div className="mt-10 flex justify-center gap-3">
          <Link to="/signup">
            <Button size="lg" className="gap-2">
              Criar conta <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link to="/login"><Button size="lg" variant="outline">Já tenho conta</Button></Link>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-6 pb-24 grid md:grid-cols-3 gap-4">
        {[
          { icon: BookOpen, title: "Curso estruturado", desc: "20 capítulos A1, lições com diálogo, gramática, exemplos e áudio." },
          { icon: MessageCircle, title: "Tutor IA 24/7", desc: "Tira dúvidas, corrige redações e simula o examinador Goethe." },
          { icon: GraduationCap, title: "Preparação Goethe", desc: "Flashcards SRS, simulados e feedback estruturado por habilidade." },
        ].map((f) => (
          <div key={f.title} className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
            <f.icon className="h-6 w-6 text-primary" />
            <h2 className="mt-4 font-display text-lg font-semibold">{f.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
