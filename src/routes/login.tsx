import { createFileRoute, Link, redirect, useNavigate } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";
import { getBrowserSession } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Entrar — Deutsch Hub" },
      { name: "description", content: "Acesse sua conta Deutsch Hub para continuar aprendendo alemão com lições, flashcards SRS e o tutor IA." },
      { property: "og:title", content: "Entrar no Deutsch Hub" },
      { property: "og:description", content: "Acesse sua conta para continuar aprendendo alemão do A1 ao B1." },
      { property: "og:url", content: "/login" },
    ],
    links: [
      { rel: "canonical", href: "/login" },
    ],
  }),
  beforeLoad: async () => {
    if (typeof window === "undefined") return;
    const session = await getBrowserSession();
    if (session?.user) throw redirect({ to: "/dashboard" });
  },
  component: LoginPage,
});

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session?.user) {
        navigate({ to: "/dashboard", replace: true });
      }
    });
    return () => sub.subscription.unsubscribe();
  }, [navigate]);

  const signIn = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) toast.error(error.message);
  };
  const google = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback?next=/dashboard`,
      },
    });
    if (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-radial-amber px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <h1 className="sr-only">Entrar no Deutsch Hub</h1>
          <CardTitle className="font-display text-2xl">Entrar no Deutsch Hub</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button type="button" variant="outline" className="w-full" onClick={google}>
            Continuar com Google
          </Button>
          <div className="relative">
            <div className="absolute inset-0 flex items-center"><span className="w-full border-t" /></div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">ou e-mail</span>
            </div>
          </div>
          <Input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input placeholder="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button className="w-full" onClick={signIn} disabled={loading || !email || !password}>
            {loading ? "Entrando..." : "Entrar"}
          </Button>
          <div className="text-center text-sm text-muted-foreground">
            Ainda não tem conta?{" "}
            <Link to="/signup" className="text-primary hover:underline">
              Cadastre-se
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
