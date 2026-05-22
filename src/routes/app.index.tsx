import { createFileRoute, Link } from "@tanstack/react-router";
import { Play, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/app/")({
  component: Vitrine,
});

type Course = {
  id: string;
  title: string;
  subtitle?: string;
  tag?: string;
  // estética da capa (gradiente + iniciais), substituível por imagem real depois
  cover: { from: string; via?: string; to: string; label: string };
};

const featured: Course = {
  id: "core",
  title: "Construção de Carreira",
  subtitle: "O Core · Trilha principal do mentorado",
  tag: "Em destaque",
  cover: { from: "oklch(0.18 0.07 268)", via: "oklch(0.28 0.12 285)", to: "oklch(0.42 0.16 295)", label: "CORE" },
};

const trilhaCore: Course[] = [
  { id: "chave-farma", title: "A Chave da Indústria Farmacêutica", tag: "Curso", cover: { from: "oklch(0.16 0.06 265)", to: "oklch(0.32 0.14 295)", label: "KF" } },
  { id: "impacta-10x", title: "Impacta 10x", subtitle: "Desvende o método. Multiplique o sucesso.", tag: "Programa", cover: { from: "oklch(0.18 0.08 270)", via: "oklch(0.3 0.14 290)", to: "oklch(0.22 0.1 275)", label: "10X" } },
  { id: "empreender", title: "Semana Temática Empreender", subtitle: "Online · gratuito · certificado", tag: "Evento", cover: { from: "oklch(0.55 0.12 200)", to: "oklch(0.35 0.14 220)", label: "EMP" } },
  { id: "retorno", title: "Retorno Memorável", subtitle: "Identidade + Algoritmo de recolocação", tag: "Curso", cover: { from: "oklch(0.14 0.05 265)", via: "oklch(0.22 0.08 270)", to: "oklch(0.78 0.13 82)", label: "RM" } },
  { id: "valor-inegociavel", title: "Inabalável: a Ciência do Valor Inegociável", subtitle: "Aula ao vivo · 17/06", tag: "Ao vivo", cover: { from: "oklch(0.2 0.06 268)", to: "oklch(0.4 0.12 285)", label: "VI" } },
];

const mentorias: Course[] = [
  { id: "executiva", title: "Mentoria Executiva 1:1", subtitle: "6 meses · quinzenal", tag: "Mentoria", cover: { from: "oklch(0.24 0.08 265)", to: "oklch(0.38 0.14 295)", label: "1:1" } },
  { id: "grupo-kam", title: "Roda de KAMs", subtitle: "Grupo fechado mensal", tag: "Grupo", cover: { from: "oklch(0.18 0.06 268)", to: "oklch(0.3 0.12 285)", label: "KAM" } },
  { id: "lideranca", title: "Liderança Comercial Farma", subtitle: "Programa para gerentes", tag: "Grupo", cover: { from: "oklch(0.2 0.07 270)", to: "oklch(0.36 0.13 290)", label: "LC" } },
];

const palestras: Course[] = [
  { id: "keynote", title: "Keynote para Convenções", subtitle: "60–90 min · sob medida", tag: "Palestra", cover: { from: "oklch(0.22 0.08 270)", to: "oklch(0.78 0.13 82)", label: "KEY" } },
  { id: "ia-comercial", title: "IA no Comercial Farma", subtitle: "Palestra técnica", tag: "Palestra", cover: { from: "oklch(0.18 0.06 268)", to: "oklch(0.5 0.16 285)", label: "IA" } },
  { id: "b2b-global", title: "Crescimento B2B Global", subtitle: "Brasil · LATAM · EMEA", tag: "Palestra", cover: { from: "oklch(0.16 0.05 265)", to: "oklch(0.4 0.14 295)", label: "B2B" } },
];

function Vitrine() {
  return (
    <div className="bg-sidebar text-sidebar-foreground min-h-full pb-20">
      {/* HERO em destaque */}
      <section className="relative">
        <div
          className="relative h-[58vh] min-h-[420px] w-full overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${featured.cover.from} 0%, ${featured.cover.via ?? featured.cover.from} 50%, ${featured.cover.to} 100%)`,
          }}
        >
          {/* textura sutil */}
          <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(circle at 30% 40%, white 0, transparent 50%), radial-gradient(circle at 70% 60%, white 0, transparent 50%)" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-sidebar via-sidebar/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-sidebar/80 via-transparent to-transparent" />

          <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-10 flex flex-col justify-end pb-12">
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-4">{featured.tag}</div>
            <h1 className="font-display text-4xl md:text-6xl text-background max-w-3xl leading-[1.05]">
              {featured.title}
            </h1>
            {featured.subtitle && (
              <p className="mt-4 text-background/80 max-w-xl">{featured.subtitle}</p>
            )}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                to="/app/aulas"
                className="inline-flex items-center gap-2 bg-gold-gradient text-gold-foreground px-7 py-3 rounded-sm text-sm font-medium hover:opacity-95 transition"
              >
                <Play className="h-4 w-4 fill-current" /> Começar
              </Link>
              <Link
                to="/app/aulas"
                className="inline-flex items-center gap-2 bg-background/10 backdrop-blur text-background border border-background/20 px-7 py-3 rounded-sm text-sm hover:bg-background/20 transition"
              >
                Detalhes do programa
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Prateleiras */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-10 space-y-12">
        <Shelf title="Continuar assistindo" items={trilhaCore.slice(0, 5)} progress />
        <Shelf title="Trilha Core — Construção de Carreira" items={trilhaCore} />
        <Shelf title="Mentorias" items={mentorias} />
        <Shelf title="Palestras & Convenções" items={palestras} />
      </div>
    </div>
  );
}

function Shelf({ title, items, progress }: { title: string; items: Course[]; progress?: boolean }) {
  return (
    <section>
      <div className="flex items-baseline justify-between mb-5">
        <h2 className="font-display text-2xl text-sidebar-foreground">{title}</h2>
        <button className="text-xs uppercase tracking-[0.2em] text-gold/80 hover:text-gold inline-flex items-center gap-1">
          Ver tudo <ChevronRight className="h-3 w-3" />
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {items.map((c) => (
          <CourseCard key={c.id} course={c} progress={progress} />
        ))}
      </div>
    </section>
  );
}

function CourseCard({ course, progress }: { course: Course; progress?: boolean }) {
  return (
    <Link to="/app/aulas" className="group block">
      <div
        className="relative aspect-[3/4] rounded-md overflow-hidden border border-sidebar-border group-hover:border-gold transition-colors"
        style={{
          background: `linear-gradient(160deg, ${course.cover.from} 0%, ${course.cover.via ?? course.cover.from} 55%, ${course.cover.to} 100%)`,
        }}
      >
        {/* brilho */}
        <div className="absolute -top-1/3 -right-1/3 w-2/3 h-2/3 rounded-full opacity-20 blur-2xl" style={{ background: "var(--gold)" }} />
        {/* marca / iniciais */}
        <div className="absolute inset-0 flex flex-col justify-between p-4">
          <div className="text-[9px] uppercase tracking-[0.25em] text-background/70">ISN</div>
          <div className="font-display text-3xl md:text-4xl text-background/95 leading-none">{course.cover.label}</div>
        </div>
        {course.tag && (
          <div className="absolute top-3 right-3 bg-background/15 backdrop-blur text-background text-[9px] uppercase tracking-wider px-2 py-1 rounded-sm border border-background/20">
            {course.tag}
          </div>
        )}
        {/* play hover */}
        <div className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition bg-primary/30">
          <div className="h-12 w-12 rounded-full bg-gold-gradient grid place-items-center">
            <Play className="h-5 w-5 text-gold-foreground fill-current" />
          </div>
        </div>
        {progress && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-background/20">
            <div className="h-full bg-gold" style={{ width: `${20 + ((course.title.length * 7) % 60)}%` }} />
          </div>
        )}
      </div>
      <div className="mt-3">
        <div className="text-sm text-sidebar-foreground line-clamp-2 leading-snug">{course.title}</div>
        {course.subtitle && (
          <div className="text-xs text-sidebar-foreground/55 mt-1 line-clamp-1">{course.subtitle}</div>
        )}
      </div>
    </Link>
  );
}
