import { createFileRoute } from "@tanstack/react-router";
import { Play, Lock, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/app/aulas")({
  component: CoursePage,
});

type Lesson = { t: string; d: string; s: "done" | "current" | "locked"; cover: { from: string; to: string; label: string } };
type Module = { title: string; lessons: Lesson[] };

const course = {
  title: "Retorno Memorável",
  subtitle: "Instituto Schonhardt de Negócios",
  progress: 0,
};

const modules: Module[] = [
  {
    title: "Módulo 01 · A Reprogramação e o Hacking (Identidade + Algoritmo)",
    lessons: [
      { t: "Boas-vindas", d: "Comece por aqui", s: "current", cover: { from: "oklch(0.2 0.07 270)", to: "oklch(0.42 0.14 290)", label: "Começe por aqui" } },
      { t: "Aula 1.1 · A verdade nua e crua", d: "O fim do luto", s: "locked", cover: { from: "oklch(0.18 0.06 268)", to: "oklch(0.78 0.13 82)", label: "O fim do luto" } },
      { t: "Prática · Aula 01", d: "O ritual do adeus", s: "locked", cover: { from: "oklch(0.4 0.12 60)", to: "oklch(0.2 0.07 265)", label: "Ritual do adeus" } },
      { t: "Aula 1.2 · A Ciência da Confiança", d: 'Por que o "coitadinho" nunca é contratado', s: "locked", cover: { from: "oklch(0.55 0.14 220)", to: "oklch(0.22 0.08 270)", label: "A ciência da confiança" } },
      { t: "Aula 1.3 · O Detox do Ambiente", d: "Blindagem mental", s: "locked", cover: { from: "oklch(0.32 0.12 295)", to: "oklch(0.16 0.05 265)", label: "Detox do ambiente" } },
      { t: 'Aula 1.4 · Método "CEO de Si Mesmo"', d: "A rotina do sucesso", s: "locked", cover: { from: "oklch(0.22 0.08 270)", to: "oklch(0.78 0.13 82)", label: "CEO de si mesmo" } },
      { t: "Aula 1.5 · Resignificando o gap", d: "A narrativa do herói", s: "locked", cover: { from: "oklch(0.2 0.07 268)", to: "oklch(0.4 0.14 295)", label: "Narrativa do herói" } },
      { t: "Aula 1.6 · O Alvo Estratégico", d: "Primary Care vs Oncologia", s: "locked", cover: { from: "oklch(0.5 0.16 40)", to: "oklch(0.2 0.07 268)", label: "Alvo estratégico" } },
      { t: "Aula 1.7 · Atualização Tecnológica", d: "Obrigatória — o chão de fábrica", s: "locked", cover: { from: "oklch(0.3 0.12 285)", to: "oklch(0.18 0.06 268)", label: "Atualização tecnológica" } },
      { t: "Aula 1.8 · Auditoria de Competências", d: "Individual", s: "locked", cover: { from: "oklch(0.24 0.08 265)", to: "oklch(0.42 0.14 290)", label: "Auditoria de competências" } },
    ],
  },
  {
    title: "Módulo 02 · O Posicionamento Inegociável",
    lessons: [
      { t: "Aula 2.1 · Sua tese de valor", d: "Como em 90 segundos", s: "locked", cover: { from: "oklch(0.2 0.07 268)", to: "oklch(0.36 0.13 290)", label: "Tese de valor" } },
      { t: "Aula 2.2 · LinkedIn como ativo", d: "Algoritmo + autoridade", s: "locked", cover: { from: "oklch(0.18 0.06 268)", to: "oklch(0.55 0.14 220)", label: "LinkedIn como ativo" } },
      { t: "Aula 2.3 · Networking inverso", d: "Quem procura quem", s: "locked", cover: { from: "oklch(0.22 0.08 270)", to: "oklch(0.78 0.13 82)", label: "Networking inverso" } },
      { t: "Aula 2.4 · Entrevista executiva", d: "Os 7 vetores", s: "locked", cover: { from: "oklch(0.16 0.05 265)", to: "oklch(0.4 0.14 295)", label: "Entrevista executiva" } },
    ],
  },
];

function CoursePage() {
  return (
    <div className="bg-sidebar text-sidebar-foreground min-h-full pb-20">
      {/* HERO */}
      <section className="relative h-[42vh] min-h-[340px] overflow-hidden" style={{ background: "linear-gradient(135deg, oklch(0.14 0.05 265) 0%, oklch(0.22 0.08 270) 50%, oklch(0.32 0.12 295) 100%)" }}>
        <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: "radial-gradient(circle at 25% 50%, white 0, transparent 50%), radial-gradient(circle at 80% 30%, var(--gold) 0, transparent 40%)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-sidebar to-transparent" />
        <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-10 flex flex-col justify-end pb-10">
          <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3">ISN · Curso</div>
          <h1 className="font-display text-4xl md:text-6xl text-background leading-[1.05]">{course.title}</h1>
          <p className="mt-3 text-background/70 text-sm">{course.subtitle}</p>

          <div className="mt-6 flex items-center gap-5 max-w-xl">
            <button className="inline-flex items-center gap-2 bg-gold-gradient text-gold-foreground px-6 py-2.5 rounded-sm text-sm font-medium">
              <Play className="h-4 w-4 fill-current" /> Começar
            </button>
            <div className="flex-1">
              <div className="flex items-center justify-between text-xs text-background/70 mb-1.5">
                <span>Progresso</span>
                <span>{course.progress}%</span>
              </div>
              <div className="h-1 bg-background/15 rounded-full overflow-hidden">
                <div className="h-full bg-gold-gradient" style={{ width: `${course.progress}%` }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Módulos */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-12 space-y-14">
        {modules.map((m) => (
          <section key={m.title}>
            <h2 className="font-display text-xl md:text-2xl text-sidebar-foreground mb-6">{m.title}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-7">
              {m.lessons.map((l, idx) => (
                <LessonCard key={idx} lesson={l} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

function LessonCard({ lesson }: { lesson: Lesson }) {
  const locked = lesson.s === "locked";
  return (
    <button className="group text-left">
      <div
        className="relative aspect-video rounded-md overflow-hidden border border-sidebar-border group-hover:border-gold transition-colors"
        style={{ background: `linear-gradient(135deg, ${lesson.cover.from} 0%, ${lesson.cover.to} 100%)` }}
      >
        <div className="absolute -top-1/3 -right-1/3 w-2/3 h-2/3 rounded-full opacity-25 blur-2xl" style={{ background: "var(--gold)" }} />
        <div className="absolute inset-0 p-3 flex flex-col justify-between">
          <div className="text-[9px] uppercase tracking-[0.2em] text-background/60">ISN</div>
          <div className="font-display text-sm md:text-base text-background/95 uppercase tracking-wider leading-tight line-clamp-2">
            {lesson.cover.label}
          </div>
        </div>
        <div className="absolute top-2 right-2">
          {lesson.s === "done" ? (
            <CheckCircle2 className="h-4 w-4 text-gold" />
          ) : locked ? (
            <Lock className="h-3.5 w-3.5 text-background/60" />
          ) : null}
        </div>
        <div className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition bg-primary/30">
          <div className="h-10 w-10 rounded-full bg-gold-gradient grid place-items-center">
            <Play className="h-4 w-4 text-gold-foreground fill-current" />
          </div>
        </div>
      </div>
      <div className="mt-2.5 text-xs text-sidebar-foreground/85 line-clamp-2 leading-snug">{lesson.t}</div>
      {lesson.d && <div className="text-[11px] text-sidebar-foreground/50 mt-0.5 line-clamp-1">{lesson.d}</div>}
    </button>
  );
}
