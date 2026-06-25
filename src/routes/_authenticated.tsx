import { Link, Outlet, createFileRoute, redirect } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";
import { waitForBrowserSession } from "@/lib/auth";
import {
  BookOpen,
  Layers,
  MessageCircle,
  PenLine,
  Headphones,
  Mic,
  FileText,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  Languages,
  Shield,
  Target,
  BarChart3,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_authenticated")({
  beforeLoad: async () => {
    if (typeof window === "undefined") return;
    const session = await waitForBrowserSession();
    if (!session?.user) throw redirect({ to: "/login" });
  },
  component: AuthLayout,
});

const NAV: { to: string; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { to: "/dashboard", label: "Painel", icon: LayoutDashboard },
  { to: "/learn/a1", label: "Curso A1", icon: BookOpen },
  { to: "/learn/a2", label: "Curso A2", icon: BookOpen },
  { to: "/learn/b1", label: "Curso B1", icon: BookOpen },
  { to: "/learn/b2", label: "Curso B2", icon: BookOpen },
  { to: "/flashcards", label: "Flashcards", icon: Layers },
  { to: "/vocab", label: "Vocabulário", icon: Languages },
  { to: "/tutor", label: "Tutor IA", icon: MessageCircle },
  { to: "/schreiben", label: "Schreiben", icon: PenLine },
  { to: "/hoeren", label: "Hören", icon: Headphones },
  { to: "/lesen", label: "Lesen", icon: FileText },
  { to: "/sprechen", label: "Sprechen", icon: Mic },
  { to: "/simulados", label: "Simulados Goethe", icon: GraduationCap },
  { to: "/erros", label: "Banco de erros", icon: Target },
  { to: "/relatorios", label: "Relatórios", icon: BarChart3 },
  { to: "/admin/ingest", label: "Admin", icon: Shield },
];

function AuthLayout() {
  const [email, setEmail] = useState<string | null>(null);
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setEmail(data.user?.email ?? null));
  }, []);
  return (
    <div className="min-h-screen flex bg-background">
      <aside className="w-60 shrink-0 border-r border-border bg-sidebar text-sidebar-foreground flex flex-col">
        <div className="px-5 py-5">
          <Link to="/dashboard" className="flex items-center gap-2 font-display text-lg font-semibold">
            <span className="inline-block size-6 rounded-md bg-gradient-to-br from-primary to-orange-600" />
            Deutsch Hub
          </Link>
          <div className="mt-1 text-xs text-muted-foreground truncate">{email}</div>
        </div>
        <nav className="px-2 flex-1 space-y-0.5 overflow-y-auto">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="group flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-sidebar-accent transition-colors"
              activeProps={{ className: "bg-sidebar-accent text-sidebar-primary" }}
            >
              <n.icon className="h-4 w-4 opacity-70 group-hover:opacity-100" />
              {n.label}
            </Link>
          ))}
        </nav>
        <button
          onClick={async () => {
            await supabase.auth.signOut();
            window.location.href = "/login";
          }}
          className="m-2 flex items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-sidebar-accent hover:text-foreground"
        >
          <LogOut className="h-4 w-4" /> Sair
        </button>
      </aside>
      <main className="flex-1 min-w-0">
        <div className="bg-radial-amber min-h-screen">
          <div className="mx-auto max-w-6xl px-6 py-8">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}
