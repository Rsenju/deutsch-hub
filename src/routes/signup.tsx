import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";
import { getBrowserSession } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Criar conta grátis — Deutsch Hub" },
      { name: "description", content: "Crie sua conta gratuita no Deutsch Hub e comece a aprender alemão do A1 ao B1 com IA, SRS e simulados Goethe." },
      { property: "og:title", content: "Criar conta — Deutsch Hub" },
      { property: "og:description", content: "Crie sua conta gratuita e comece a estudar alemão hoje mesmo." },
      { property: "og:url", content: "/signup" },
    ],
    links: [
      { rel: "canonical", href: "/signup" },
    ],
  }),
  beforeLoad: async () => {
    if (typeof window === "undefined") return;
    const session = await getBrowserSession();
    if (session?.user) throw redirect({ to: "/dashboard" });
  },
  component: SignupPage,
});

function SignupPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const signUp = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: window.location.origin,
        data: { display_name: name },
      },
    });
    setLoading(false);
    if (error) return toast.error(error.message);
    toast.success("Conta criada! Verifique seu email para confirmar.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-radial-amber px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <h1 className="sr-only">Criar conta no Deutsch Hub</h1>
          <CardTitle className="font-display text-2xl">Criar conta</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Seu nome" value={name} onChange={(e) => setName(e.target.value)} />
          <Input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input placeholder="Senha (mínimo 6 caracteres)" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button className="w-full" onClick={signUp} disabled={loading || !email || password.length < 6}>
            Cadastrar
          </Button>
          <div className="text-center text-sm text-muted-foreground">
            Já tem conta?{" "}
            <Link to="/login" className="text-primary hover:underline">
              Entrar
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
