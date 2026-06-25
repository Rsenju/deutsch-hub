import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useServerFn } from "@tanstack/react-start";
import { ingestA1, ingestA2, ingestB1, ingestB2, ingestFlashcards, grantSelfAdmin } from "@/lib/ingest.functions";
import { toast } from "sonner";
import { useState } from "react";

export const Route = createFileRoute("/_authenticated/admin/ingest")({ component: Page });

function Page() {
  const a1 = useServerFn(ingestA1);
  const a2 = useServerFn(ingestA2);
  const b1 = useServerFn(ingestB1);
  const b2 = useServerFn(ingestB2);
  const fc = useServerFn(ingestFlashcards);
  const grant = useServerFn(grantSelfAdmin);
  const [code, setCode] = useState("DEUTSCHHUB_SEED_ADMIN");
  const [busy, setBusy] = useState<string | null>(null);

  const run = async (key: string, fn: () => Promise<unknown>) => {
    setBusy(key);
    try {
      const result = await fn();
      toast.success(`${key}: ${JSON.stringify(result)}`);
    } catch (e) {
      toast.error(`${key}: ${(e as Error).message}`);
    } finally {
      setBusy(null);
    }
  };

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="font-display text-3xl font-semibold">Admin · Ingestao</h1>
        <p className="text-muted-foreground">
          Carrega o conteudo dos arquivos A1, A2, B1, B2 e flashcards no banco. Pode rodar de novo: o app usa upsert por slug.
        </p>
      </div>
      <Card>
        <CardContent className="pt-6 space-y-3">
          <div className="text-sm font-medium">1. Promover-se a admin</div>
          <div className="flex gap-2">
            <Input value={code} onChange={(e) => setCode(e.target.value)} placeholder="codigo" />
            <Button onClick={() => run("admin", () => grant({ data: { code } }))} disabled={busy !== null}>
              Promover
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Use <code>DEUTSCHHUB_SEED_ADMIN</code> para o bootstrap inicial.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="pt-6 space-y-3">
          <div className="text-sm font-medium">2. Ingestao</div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            <Button onClick={() => run("A1", () => a1())} disabled={busy !== null}>{busy === "A1" ? "..." : "Ingerir A1"}</Button>
            <Button onClick={() => run("A2", () => a2())} disabled={busy !== null}>{busy === "A2" ? "..." : "Ingerir A2"}</Button>
            <Button onClick={() => run("B1", () => b1())} disabled={busy !== null}>{busy === "B1" ? "..." : "Ingerir B1"}</Button>
            <Button onClick={() => run("B2", () => b2())} disabled={busy !== null}>{busy === "B2" ? "..." : "Ingerir B2"}</Button>
            <Button onClick={() => run("Flashcards", () => fc())} disabled={busy !== null}>{busy === "Flashcards" ? "..." : "Ingerir Flashcards"}</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
