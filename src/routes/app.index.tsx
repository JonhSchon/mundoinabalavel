import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, PlayCircle, ClipboardList, Users } from "lucide-react";

export const Route = createFileRoute("/app/")({
  component: Dashboard,
});

function Dashboard() {
  return (
    <div className="px-6 lg:px-10 py-10 max-w-7xl">
      <div className="text-xs uppercase tracking-[0.25em] text-royal mb-3">Bem-vinda de volta</div>
      <h1 className="font-display text-4xl md:text-5xl text-foreground">Olá, Ana.</h1>
      <p className="mt-3 text-muted-foreground max-w-xl">
        Continue de onde parou. Sua trilha de KAM Sênior está em 64%.
      </p>

      {/* Continue assistindo */}
      <div className="mt-10 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-card border border-border rounded-lg overflow-hidden shadow-elegant">
          <div className="aspect-video bg-royal-gradient relative grid place-items-center">
            <PlayCircle className="h-16 w-16 text-gold" strokeWidth={1.2} />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary to-transparent">
              <div className="text-xs uppercase tracking-wider text-gold">Continue assistindo · Módulo 4</div>
              <div className="font-display text-2xl text-background mt-1">Negociação com decisores de hospital</div>
            </div>
          </div>
          <div className="p-5 flex items-center justify-between">
            <div className="flex-1 mr-6">
              <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-gold-gradient" style={{ width: "42%" }} />
              </div>
              <div className="text-xs text-muted-foreground mt-2">14 min restantes</div>
            </div>
            <Link to="/app/aulas" className="inline-flex items-center gap-2 text-sm text-royal hover:text-primary">
              Ver trilha <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          <StatCard icon={ClipboardList} label="Tarefas pendentes" value="3" hint="2 vencem esta semana" to="/app/tarefas" />
          <StatCard icon={Users} label="Comunidade" value="47" hint="novas conversas" to="/app/comunidade" />
          <StatCard icon={PlayCircle} label="Aulas concluídas" value="28/44" hint="trilha KAM Sênior" to="/app/aulas" />
        </div>
      </div>

      {/* Agenda */}
      <h2 className="font-display text-2xl text-foreground mt-16 mb-6">Próximos encontros</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { date: "Qui · 24/04", time: "20h00", title: "Mentoria ao vivo — Pricing", tag: "Grupo" },
          { date: "Ter · 29/04", time: "19h30", title: "1:1 com Schonhardt", tag: "Individual" },
          { date: "Sex · 02/05", time: "18h00", title: "Roda de KAMs", tag: "Comunidade" },
        ].map((e) => (
          <div key={e.title} className="bg-card border border-border rounded-lg p-5 hover:border-gold transition-colors">
            <div className="text-xs uppercase tracking-wider text-royal">{e.tag}</div>
            <div className="font-display text-lg mt-2 text-foreground">{e.title}</div>
            <div className="text-sm text-muted-foreground mt-3 flex items-center justify-between">
              <span>{e.date}</span>
              <span className="text-gold">{e.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StatCard({ icon: Icon, label, value, hint, to }: { icon: typeof PlayCircle; label: string; value: string; hint: string; to: string }) {
  return (
    <Link to={to} className="block bg-card border border-border rounded-lg p-5 hover:border-gold transition-colors group">
      <div className="flex items-start justify-between">
        <Icon className="h-5 w-5 text-royal" strokeWidth={1.7} />
        <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-gold transition-colors" />
      </div>
      <div className="font-display text-3xl text-foreground mt-4">{value}</div>
      <div className="text-sm text-foreground mt-1">{label}</div>
      <div className="text-xs text-muted-foreground mt-1">{hint}</div>
    </Link>
  );
}
