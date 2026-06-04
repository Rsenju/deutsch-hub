import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Route = createFileRoute("/_authenticated/tutor")({ component: Page });

function Page() {
  const [mode, setMode] = useState<"tutor" | "examiner">("tutor");
  const [level, setLevel] = useState<"A1" | "A2" | "B1">("A1");
  const [sessionKey, setSessionKey] = useState(0);
  return (
    <div className="space-y-4">
      <div className="flex items-end justify-between flex-wrap gap-3">
        <div>
          <h1 className="font-display text-3xl font-semibold">Tutor IA</h1>
          <p className="text-muted-foreground">Tira dúvidas ou simula o exame oral Goethe.</p>
        </div>
        <div className="flex items-center gap-2">
          <Tabs value={mode} onValueChange={(v) => { setMode(v as "tutor" | "examiner"); setSessionKey((k) => k + 1); }}>
            <TabsList>
              <TabsTrigger value="tutor">Tutor</TabsTrigger>
              <TabsTrigger value="examiner">Examinador Goethe</TabsTrigger>
            </TabsList>
          </Tabs>
          <Select value={level} onValueChange={(v) => { setLevel(v as "A1" | "A2" | "B1"); setSessionKey((k) => k + 1); }}>
            <SelectTrigger className="w-24"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="A1">A1</SelectItem>
              <SelectItem value="A2">A2</SelectItem>
              <SelectItem value="B1">B1</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <ChatWindow key={`${mode}-${level}-${sessionKey}`} mode={mode} level={level} />
    </div>
  );
}

function ChatWindow({ mode, level }: { mode: "tutor" | "examiner"; level: "A1" | "A2" | "B1" }) {
  const [input, setInput] = useState("");
  const transport = new DefaultChatTransport({
    api: "/api/chat",
    body: { mode, level },
  });
  const { messages, sendMessage, status } = useChat({
    id: `${mode}-${level}`,
    messages: [] as UIMessage[],
    transport,
  });
  const busy = status === "submitted" || status === "streaming";

  return (
    <Card>
      <CardContent className="pt-6 space-y-4">
        <div className="space-y-3 max-h-[55vh] overflow-y-auto pr-2">
          {messages.length === 0 && (
            <div className="text-sm text-muted-foreground text-center py-10">
              {mode === "tutor"
                ? "Faça uma pergunta em português ou alemão. Ex.: \"Como uso o dativo?\""
                : "O examinador iniciará a simulação assim que você enviar a primeira mensagem (ex.: \"Guten Tag!\")."}
            </div>
          )}
          {messages.map((m) => {
            const text = m.parts.map((p) => (p.type === "text" ? p.text : "")).join("");
            return (
              <div key={m.id} className={m.role === "user" ? "text-right" : ""}>
                <div className={`inline-block max-w-[85%] rounded-lg px-3 py-2 text-sm whitespace-pre-wrap ${
                  m.role === "user" ? "bg-primary text-primary-foreground" : "bg-accent"
                }`}>
                  {text}
                </div>
              </div>
            );
          })}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!input.trim() || busy) return;
            sendMessage({ text: input.trim() });
            setInput("");
          }}
          className="flex gap-2"
        >
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={mode === "tutor" ? "Escreva sua dúvida…" : "Responda em alemão…"}
            disabled={busy}
          />
          <Button type="submit" disabled={busy || !input.trim()}>{busy ? "…" : "Enviar"}</Button>
        </form>
      </CardContent>
    </Card>
  );
}
