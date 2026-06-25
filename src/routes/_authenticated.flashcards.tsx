import { createFileRoute } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getDueFlashcards, rateFlashcard } from "@/lib/srs.functions";
import { getDueLearningErrors, rateLearningError } from "@/lib/learning-errors.functions";
import { useServerFn } from "@tanstack/react-start";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AudioWord } from "@/components/learn/AudioWord";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type Level = "A1" | "A2" | "B1" | "B2";
type StudyMode = "grammar" | "vocab" | "all";
type DeckMode = "cards" | "errors";

export const Route = createFileRoute("/_authenticated/flashcards")({ component: Page });

function Page() {
  const [level, setLevel] = useState<Level>("A1");
  const [mode, setMode] = useState<StudyMode>("grammar");
  const [deck, setDeck] = useState<DeckMode>("cards");
  const fetcher = useServerFn(getDueFlashcards);
  const rater = useServerFn(rateFlashcard);
  const errorFetcher = useServerFn(getDueLearningErrors);
  const errorRater = useServerFn(rateLearningError);
  const qc = useQueryClient();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["flashcards", level, mode, deck],
    queryFn: async () => {
      if (deck === "errors") return errorFetcher({ data: { level, limit: 20 } });
      return fetcher({ data: { level, mode, limit: 20 } });
    },
  });
  const [idx, setIdx] = useState(0);
  const [reveal, setReveal] = useState(false);

  const cards = deck === "errors" ? ((data as any)?.errors ?? []) : ((data as any)?.cards ?? []);
  const card = cards[idx];

  const rate = async (rating: 0 | 1 | 2 | 3) => {
    if (!card) return;
    if (deck === "errors") {
      await errorRater({ data: { id: card.id, rating } });
    } else {
      await rater({ data: { flashcardId: card.flashcardId, rating } });
    }
    qc.invalidateQueries({ queryKey: ["dashboard"] });
    setReveal(false);
    if (idx + 1 >= cards.length) {
      await refetch();
      setIdx(0);
    } else {
      setIdx(idx + 1);
    }
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-semibold">Flashcards</h1>
          <p className="text-muted-foreground">Revisao espacada de gramatica, vocabulario e erros pessoais</p>
        </div>
        <div className="flex gap-2">
          <Select
            value={deck}
            onValueChange={(value) => {
              setDeck(value as DeckMode);
              setIdx(0);
              setReveal(false);
            }}
          >
            <SelectTrigger className="w-32"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="cards">Cards</SelectItem>
              <SelectItem value="errors">Erros</SelectItem>
            </SelectContent>
          </Select>
          <Select
            value={mode}
            onValueChange={(value) => {
              setMode(value as StudyMode);
              setIdx(0);
              setReveal(false);
            }}
          >
            <SelectTrigger className="w-36"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="grammar">Gramática</SelectItem>
              <SelectItem value="vocab">Vocabulário</SelectItem>
              <SelectItem value="all">Tudo</SelectItem>
            </SelectContent>
          </Select>
          <Select
            value={level}
            onValueChange={(value) => {
              setLevel(value as Level);
              setIdx(0);
              setReveal(false);
            }}
          >
            <SelectTrigger className="w-32"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="A1">A1</SelectItem>
              <SelectItem value="A2">A2</SelectItem>
              <SelectItem value="B1">B1</SelectItem>
              <SelectItem value="B2">B2</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      {isLoading ? (
        <Card><CardContent className="pt-6 text-muted-foreground">Carregando...</CardContent></Card>
      ) : cards.length === 0 ? (
        <Card><CardContent className="pt-6 text-muted-foreground">Sem itens para revisar neste filtro.</CardContent></Card>
      ) : !card ? (
        <Card><CardContent className="pt-6 text-emerald-500">Tudo em dia! Volte mais tarde para revisar.</CardContent></Card>
      ) : (
        <Card className="min-h-[300px]">
          <CardContent className="pt-8 space-y-6">
            <div className="text-xs text-muted-foreground">Card {idx + 1} / {cards.length}</div>
            <div className="text-center space-y-3">
              {deck === "errors" ? (
                <div className="space-y-2">
                  <div className="text-xs uppercase text-muted-foreground">{card.skill} · {card.tag ?? card.category}</div>
                  <div className="text-2xl font-display font-semibold">{card.prompt}</div>
                </div>
              ) : (
                <AudioWord text={card.front} className="text-3xl font-display font-semibold" />
              )}
              {reveal && (
                <div className="space-y-2 pt-4 border-t">
                  {deck === "errors" ? (
                    <>
                      {card.actual && <div className="text-sm text-muted-foreground">Sua resposta: {card.actual}</div>}
                      {card.expected && <div className="text-xl text-primary">Esperado: {card.expected}</div>}
                      {card.explanation && <div className="text-xs text-muted-foreground">{card.explanation}</div>}
                    </>
                  ) : (
                    <>
                      <div className="text-xl text-primary">{card.back}</div>
                      {card.ex_de && <AudioWord text={card.ex_de} className="text-sm italic" />}
                      {card.ex_pt && <div className="text-xs text-muted-foreground">{card.ex_pt}</div>}
                    </>
                  )}
                </div>
              )}
            </div>
            {!reveal ? (
              <Button onClick={() => setReveal(true)} className="w-full">Mostrar resposta</Button>
            ) : (
              <div className="grid grid-cols-4 gap-2">
                <Button variant="destructive" onClick={() => rate(0)}>Errei</Button>
                <Button variant="outline" onClick={() => rate(1)}>Dificil</Button>
                <Button onClick={() => rate(2)}>Bom</Button>
                <Button variant="secondary" onClick={() => rate(3)}>Facil</Button>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
