import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/auth/callback")({
  ssr: false,
  component: AuthCallbackPage,
});

function safeNext(value: string | null) {
  if (!value || !value.startsWith("/") || value.startsWith("//")) return "/dashboard";
  return value;
}

function AuthCallbackPage() {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function finishLogin() {
      const search = new URLSearchParams(window.location.search);
      const next = safeNext(search.get("next"));
      const code = search.get("code");
      const authError = search.get("error_description") ?? search.get("error");

      if (authError) {
        throw new Error(authError);
      }

      if (code) {
        const { error } = await supabase.auth.exchangeCodeForSession(code);
        if (error) throw error;
      } else {
        const { data, error } = await supabase.auth.getSession();
        if (error) throw error;
        if (!data.session) throw new Error("Sessao nao encontrada apos o login.");
      }

      if (!cancelled) window.location.replace(next);
    }

    finishLogin().catch((err) => {
      if (!cancelled) setError(err instanceof Error ? err.message : "Nao foi possivel concluir o login.");
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-radial-amber px-4">
      <div className="max-w-md rounded-md border bg-card p-6 text-center shadow-sm">
        <h1 className="font-display text-2xl font-semibold">Concluindo login</h1>
        {error ? (
          <>
            <p className="mt-3 text-sm text-destructive">{error}</p>
            <Link className="mt-5 inline-flex text-sm text-primary hover:underline" to="/login">
              Voltar para login
            </Link>
          </>
        ) : (
          <p className="mt-3 text-sm text-muted-foreground">Aguarde um instante.</p>
        )}
      </div>
    </div>
  );
}
