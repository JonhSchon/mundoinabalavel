import { createFileRoute } from "@tanstack/react-router";
import { PlayCircle, Lock, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/app/aulas")({
  component: AulasPage,
});

const modules = [
  {
    title: "Fundamentos do KAM farmacêutico",
    lessons: [
      { t: "O ecossistema farma hoje", d: "12 min", s: "done" },
      { t: "Stakeholders: do prescritor ao payer", d: "18 min", s: "done" },
      { t: "Métricas que importam", d: "22 min", s: "done" },
    ],
  },
  {
    title: "Negociação e influência",
    lessons: [
      { t: "Negociação com decisores de hospital", d: "28 min", s: "current" },
      { t: "Construindo coalizões internas", d: "24 min", s: "locked" },
      { t: "Acordos comerciais avançados", d: "31 min", s: "locked" },
    ],
  },
  {
    title: "Liderança comercial",
    lessons: [
      { t: "Times de alta performance", d: "26 min", s: "locked" },
      { t: "Feedback e coaching no campo", d: "20 min", s: "locked" },
    ],
  },
];

function AulasPage() {
  return (
    <div className="px-6 lg:px-10 py-10 max-w-6xl">
      <div className="text-xs uppercase tracking-[0.25em] text-royal mb-3">Trilha</div>
      <h1 className="font-display text-4xl md:text-5xl text-foreground">KAM Sênior · Farma</h1>
      <p className="mt-3 text-muted-foreground max-w-2xl">
        9 aulas · 8h totais · progresso 64%
      </p>

      <div className="mt-10 space-y-10">
        {modules.map((m, i) => (
          <section key={m.title}>
            <div className="flex items-baseline gap-4 mb-4">
              <div className="font-display text-xl text-gold">0{i + 1}</div>
              <h2 className="font-display text-2xl text-foreground">{m.title}</h2>
            </div>
            <div className="border border-border rounded-lg overflow-hidden bg-card">
              {m.lessons.map((l, idx) => (
                <div
                  key={l.t}
                  className={`flex items-center gap-5 px-5 py-4 ${
                    idx > 0 ? "border-t border-border" : ""
                  } ${l.s === "current" ? "bg-gold/5" : ""}`}
                >
                  {l.s === "done" ? (
                    <CheckCircle2 className="h-5 w-5 text-royal" />
                  ) : l.s === "current" ? (
                    <PlayCircle className="h-5 w-5 text-gold" />
                  ) : (
                    <Lock className="h-5 w-5 text-muted-foreground" />
                  )}
                  <div className="flex-1">
                    <div className={`text-sm ${l.s === "locked" ? "text-muted-foreground" : "text-foreground"}`}>
                      {l.t}
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">{l.d}</div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
