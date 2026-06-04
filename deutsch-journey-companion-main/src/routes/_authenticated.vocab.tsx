import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { AudioWord } from "@/components/learn/AudioWord";

export const Route = createFileRoute("/_authenticated/vocab")({ component: Page });

function Page() {
  const [level, setLevel] = useState<"A1" | "A2" | "B1">("A1");
  const { data } = useQuery({
    queryKey: ["vocab", level],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("flashcards")
        .select("id, front, back, ex_de, ex_pt, theme, chapter_n")
        .eq("level", level)
        .order("chapter_n", { ascending: true })
        .limit(500);
      if (error) throw new Error(error.message);
      return data ?? [];
    },
  });
  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="font-display text-3xl font-semibold">Vocabulário</h1>
          <p className="text-muted-foreground">{data?.length ?? 0} palavras</p>
        </div>
        <Select value={level} onValueChange={(v) => setLevel(v as "A1" | "A2" | "B1")}>
          <SelectTrigger className="w-24"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="A1">A1</SelectItem>
            <SelectItem value="A2">A2</SelectItem>
            <SelectItem value="B1">B1</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Card>
        <CardContent className="pt-6">
          {!data || data.length === 0 ? (
            <div className="text-sm text-muted-foreground">Sem palavras carregadas para {level}.</div>
          ) : (
            <div className="grid md:grid-cols-2 gap-2">
              {data.map((w) => (
                <div key={w.id} className="flex items-start justify-between border-b py-2">
                  <div>
                    <AudioWord text={w.front} className="font-medium" />
                    <div className="text-sm text-muted-foreground">{w.back}</div>
                    {w.ex_de && <AudioWord text={w.ex_de} className="text-xs italic mt-1" />}
                  </div>
                  {w.theme && <span className="text-[10px] uppercase text-muted-foreground">{w.theme}</span>}
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
