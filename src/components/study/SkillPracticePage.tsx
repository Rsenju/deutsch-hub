import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { AudioWord } from "@/components/learn/AudioWord";
import { SKILL_TASKS, type SkillId, type SkillLevel } from "@/content/skillTasks";
import { Mic, Square } from "lucide-react";

const copy = {
  hoeren: { title: "Hören", subtitle: "Áudios contextualizados com perguntas de compreensão.", badge: "Áudio" },
  lesen: { title: "Lesen", subtitle: "Textos curtos no formato Goethe com foco e perguntas.", badge: "Texto" },
  sprechen: { title: "Sprechen", subtitle: "Fala guiada com frases úteis e transcrição por voz.", badge: "Voz" },
};

export function SkillPracticePage({ skill }: { skill: SkillId }) {
  const [level, setLevel] = useState<SkillLevel>("A1");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const tasks = useMemo(() => SKILL_TASKS[skill].filter((task) => task.level === level), [level, skill]);
  const info = copy[skill];

  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-semibold">{info.title}</h1>
          <p className="text-muted-foreground">{info.subtitle}</p>
        </div>
        <Select value={level} onValueChange={(value) => setLevel(value as SkillLevel)}>
          <SelectTrigger className="w-28"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="A1">A1</SelectItem>
            <SelectItem value="A2">A2</SelectItem>
            <SelectItem value="B1">B1</SelectItem>
            <SelectItem value="B2">B2</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {tasks.length === 0 ? (
        <Card><CardContent className="pt-6 text-sm text-muted-foreground">Tarefas deste nível em preparação.</CardContent></Card>
      ) : (
        <div className="grid gap-4 lg:grid-cols-2">
          {tasks.map((task) => (
            <Card key={task.id}>
              <CardContent className="pt-5 space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-semibold">{task.title}</div>
                    <div className="text-xs text-muted-foreground">{task.topic}</div>
                  </div>
                  <Badge variant="secondary">{info.badge}</Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                  {task.focus.map((item) => <Badge key={item} variant="outline">{item}</Badge>)}
                </div>

                {task.skill === "hoeren" && (
                  <div className="space-y-3">
                    <AudioWord text={task.script} label="Ouvir áudio contextualizado" className="text-sm" />
                    <QuestionList questions={task.questions} />
                  </div>
                )}

                {task.skill === "lesen" && (
                  <div className="space-y-3">
                    <pre className="rounded-md border bg-muted/30 p-3 font-sans text-sm whitespace-pre-wrap">{task.text}</pre>
                    <QuestionList questions={task.questions} />
                  </div>
                )}

                {task.skill === "sprechen" && (
                  <div className="space-y-3">
                    <div className="rounded-md border bg-muted/30 p-3 text-sm">{task.prompt}</div>
                    <div className="grid gap-2 text-sm">
                      {task.phrases.map((phrase) => <AudioWord key={phrase} text={phrase} />)}
                    </div>
                    <VoicePractice
                      value={answers[task.id] ?? ""}
                      onChange={(value) => setAnswers((prev) => ({ ...prev, [task.id]: value }))}
                    />
                    <details className="rounded-md border p-3 text-sm">
                      <summary className="cursor-pointer font-medium">Modelo</summary>
                      <p className="mt-2 text-muted-foreground">{task.model}</p>
                    </details>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

function QuestionList({ questions }: { questions: Array<{ q: string; a: string }> }) {
  return (
    <div className="space-y-2">
      {questions.map((question) => (
        <details key={question.q} className="rounded-md border p-3 text-sm">
          <summary className="cursor-pointer font-medium">{question.q}</summary>
          <div className="mt-2 text-primary">{question.a}</div>
        </details>
      ))}
    </div>
  );
}

function VoicePractice({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  const [recording, setRecording] = useState(false);

  const start = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) return;
    const recognition = new SpeechRecognition();
    recognition.lang = "de-DE";
    recognition.interimResults = true;
    recognition.continuous = false;
    recognition.onresult = (event: any) => {
      const text = Array.from(event.results).map((result: any) => result[0]?.transcript ?? "").join(" ");
      onChange(text);
    };
    recognition.onend = () => setRecording(false);
    setRecording(true);
    recognition.start();
  };

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <Button type="button" variant={recording ? "destructive" : "outline"} className="gap-2" onClick={start}>
          {recording ? <Square className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
          {recording ? "Ouvindo..." : "Gravar fala"}
        </Button>
      </div>
      <Textarea rows={5} value={value} onChange={(e) => onChange(e.target.value)} placeholder="Sua fala transcrita ou anotada aparece aqui..." />
      <div className="text-xs text-muted-foreground">A gravação usa o reconhecimento de voz do navegador quando disponível.</div>
    </div>
  );
}

