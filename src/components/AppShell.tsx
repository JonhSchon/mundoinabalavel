import { Link, Outlet, useLocation, useNavigate } from "@tanstack/react-router";
import { LayoutDashboard, PlayCircle, FolderOpen, ClipboardList, MessageSquarePlus, Users, Store, Bell, Search, LogOut, Sparkles } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

type NavItem = { to: string; label: string; icon: typeof LayoutDashboard; exact?: boolean };
const nav: NavItem[] = [
  { to: "/app/boas-vindas", label: "Boas-vindas", icon: Sparkles },
  { to: "/app", label: "Visão geral", icon: LayoutDashboard, exact: true },
  { to: "/app/aulas", label: "Aulas", icon: PlayCircle },
  { to: "/app/materiais", label: "Materiais", icon: FolderOpen },
  { to: "/app/tarefas", label: "Tarefas", icon: ClipboardList },
  { to: "/app/pedidos", label: "Pedidos", icon: MessageSquarePlus },
  { to: "/app/comunidade", label: "Comunidade", icon: Users },
  { to: "/app/ecossistema", label: "Ecossistema", icon: Store },
];


export function AppShell() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  async function handleSignOut() {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }


  return (
    <div className="min-h-screen bg-sidebar text-sidebar-foreground flex">
      {/* SIDEBAR */}
      <aside className="hidden lg:flex w-72 shrink-0 flex-col border-r border-sidebar-border bg-sidebar">
        <Link to="/" className="flex items-center gap-3 px-6 py-7 border-b border-sidebar-border">
          <div className="h-9 w-9 rounded-sm bg-gold-gradient grid place-items-center font-display text-primary font-bold">
            S
          </div>
          <div className="leading-tight">
            <div className="font-display text-sidebar-foreground">Schonhardt</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-gold/80">Mentorado</div>
          </div>
        </Link>

        <nav className="flex-1 px-3 py-6 space-y-1">
          {nav.map(({ to, label, icon: Icon, exact }) => {
            const active = exact ? pathname === to : pathname === to || pathname.startsWith(to + "/");
            return (
              <Link
                key={to}
                to={to}
                className={`flex items-center gap-3 px-4 py-3 rounded-sm text-sm transition-colors ${
                  active
                    ? "bg-gold text-gold-foreground font-medium"
                    : "text-sidebar-foreground/75 hover:bg-sidebar-accent hover:text-sidebar-foreground"
                }`}
              >
                <Icon className="h-4 w-4" strokeWidth={1.7} />
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="m-3 p-5 rounded-md bg-royal-gradient">
          <div className="text-xs uppercase tracking-wider text-gold mb-2">Próximo encontro</div>
          <div className="font-display text-lg text-background leading-tight">Mentoria ao vivo</div>
          <div className="text-xs text-background/70 mt-1">Quinta · 20h</div>
        </div>
      </aside>

      {/* MAIN */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="sticky top-0 z-40 bg-sidebar/95 backdrop-blur border-b border-sidebar-border">
          <div className="flex items-center justify-between px-6 lg:px-10 py-4">
            <div className="flex items-center gap-3 flex-1 max-w-md">
              <Search className="h-4 w-4 text-sidebar-foreground/50" />
              <input
                type="search"
                placeholder="Buscar aulas, materiais, mentorados..."
                className="bg-transparent border-0 outline-none flex-1 text-sm placeholder:text-sidebar-foreground/40 text-sidebar-foreground"
              />
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-sidebar-foreground/70 hover:text-gold">
                <Bell className="h-5 w-5" strokeWidth={1.7} />
                <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-gold" />
              </button>
              <div className="flex items-center gap-3 pl-4 border-l border-sidebar-border">
                <div className="text-right hidden sm:block">
                  <div className="text-sm text-sidebar-foreground">Ana Costa</div>
                  <div className="text-[10px] uppercase tracking-wider text-gold">Premium</div>
                </div>
                <div className="h-10 w-10 rounded-full bg-royal-gradient grid place-items-center text-sm font-medium text-background">
                  AC
                </div>
                <button
                  onClick={handleSignOut}
                  title="Sair"
                  className="ml-2 p-2 text-sidebar-foreground/70 hover:text-gold"
                >
                  <LogOut className="h-5 w-5" strokeWidth={1.7} />
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 bg-background text-foreground">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
