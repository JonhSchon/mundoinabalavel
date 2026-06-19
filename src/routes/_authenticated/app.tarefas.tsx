import { createFileRoute } from "@tanstack/react-router";
import { Circle, CheckCircle2, Clock } from "lucide-react";

export const Route = createFileRoute("/_authenticated/app/tarefas")({
  component: TarefasPage,
});

const tasks = [
  { t: "Reescrever headline do LinkedIn no formato KAM-ready", due: "Vence amanhã", status: "todo", mod: "Módulo 02 · Algoritmo" },
  { t: "Gravar pitch de 90s — Por que você na Farma", due: "Vence em 3 dias", status: "todo", mod: "Módulo 02 · Posicionamento" },
  { t: "Simular Business Case — Lançamento Primary Care", due: "Vence em 5 dias", status: "todo", mod: "Módulo 03 · Blindagem" },
  { t: "Mapear 10 GDs e Regionais no LinkedIn", due: "Vence em 7 dias", status: "todo", mod: "Módulo 02 · Networking Inverso" },
  { t: "Ritual do Adeus — entregue", due: "Concluído", status: "done", mod: "Módulo 01 · Identidade" },
  { t: "Auditoria de competências preenchida", due: "Concluído", status: "done", mod: "Onboarding" },
];

function TarefasPage() {
  return (
    <div className="px-6 lg:px-10 py-10 max-w-4xl">
      <div className="text-xs uppercase tracking-[0.25em] text-royal mb-3">Sua jornada de recolocação</div>
      <h1 className="font-display text-4xl md:text-5xl text-foreground">Missões</h1>
      <p className="mt-3 text-muted-foreground">4 pendentes · 2 concluídas. Cumprir destrava a próxima aula.</p>

      <div className="mt-10 space-y-3">
        {tasks.map((t) => (
          <div
            key={t.t}
            className={`flex items-center gap-5 p-5 rounded-lg border border-border bg-card hover:border-gold/50 transition-colors ${
              t.status === "done" ? "opacity-60" : ""
            }`}
          >
            {t.status === "done" ? (
              <CheckCircle2 className="h-6 w-6 text-royal shrink-0" />
            ) : (
              <Circle className="h-6 w-6 text-muted-foreground shrink-0" />
            )}
            <div className="flex-1">
              <div className={`text-foreground ${t.status === "done" ? "line-through" : ""}`}>{t.t}</div>
              <div className="text-xs text-muted-foreground mt-1">{t.mod}</div>
            </div>
            <div className="text-xs flex items-center gap-1.5 text-gold">
              <Clock className="h-3.5 w-3.5" /> {t.due}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
