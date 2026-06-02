import { createFileRoute, Link } from "@tanstack/react-router";
import { Play, ChevronRight } from "lucide-react";
import { courses, type Course } from "@/lib/courses";

export const Route = createFileRoute("/app/")({
  component: Vitrine,
});

const byId = (id: string) => courses.find((c) => c.id === id)!;

const featured = byId("retorno-memoravel");

const trilhaCore: Course[] = [
  byId("jogo-real"),
  byId("chave-industria"),
  byId("retorno-memoravel"),
  byId("impacta-10x"),
  byId("inabalavel"),
];

const continuar: Course[] = [byId("jogo-real"), byId("retorno-memoravel"), byId("chave-industria")];

const palestras: Course[] = [byId("inabalavel")];

function Vitrine() {
  return (
    <div className="bg-sidebar text-sidebar-foreground min-h-full pb-20">
      <section className="relative">
        <div
          className="relative h-[58vh] min-h-[420px] w-full overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${featured.cover.from} 0%, ${featured.cover.via ?? featured.cover.from} 50%, ${featured.cover.to} 100%)`,
          }}
        >
          {featured.cover.image && (
            <img
              src={featured.cover.image}
              alt={featured.title}
              className="absolute inset-0 w-full h-full object-cover object-center opacity-90"
              width={1024}
              height={1536}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-sidebar via-sidebar/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-sidebar/90 via-sidebar/30 to-transparent" />

          <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-10 flex flex-col justify-end pb-12">
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-4">Curso Core · Em destaque</div>
            <h1 className="font-display text-4xl md:text-6xl text-background max-w-3xl leading-[1.05]">
              {featured.title}
            </h1>
            {featured.subtitle && <p className="mt-4 text-background/80 max-w-xl">{featured.subtitle}</p>}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                to="/app/aulas/$courseId"
                params={{ courseId: featured.id }}
                className="inline-flex items-center gap-2 bg-gold-gradient text-gold-foreground px-7 py-3 rounded-sm text-sm font-medium hover:opacity-95 transition"
              >
                <Play className="h-4 w-4 fill-current" /> Começar
              </Link>
              <Link
                to="/app/aulas/$courseId"
                params={{ courseId: featured.id }}
                className="inline-flex items-center gap-2 bg-background/10 backdrop-blur text-background border border-background/20 px-7 py-3 rounded-sm text-sm hover:bg-background/20 transition"
              >
                Detalhes do programa
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-10 space-y-12">
        <Shelf title="Continuar assistindo" items={continuar} progress />
        <Shelf title="Cursos da Irmandade" items={trilhaCore} />
        <Shelf title="Palestras & Eventos ao vivo" items={palestras} />
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
    <Link to="/app/aulas/$courseId" params={{ courseId: course.id }} className="group block">
      <div
        className="relative aspect-[3/4] rounded-md overflow-hidden border border-sidebar-border group-hover:border-gold transition-colors"
        style={{
          background: `linear-gradient(160deg, ${course.cover.from} 0%, ${course.cover.via ?? course.cover.from} 55%, ${course.cover.to} 100%)`,
        }}
      >
        <div className="absolute -top-1/3 -right-1/3 w-2/3 h-2/3 rounded-full opacity-20 blur-2xl" style={{ background: "var(--gold)" }} />
        <div className="absolute inset-0 flex flex-col justify-between p-4">
          <div className="text-[9px] uppercase tracking-[0.25em] text-background/70">ISN</div>
          <div className="font-display text-3xl md:text-4xl text-background/95 leading-none">{course.cover.label}</div>
        </div>
        {course.tag && (
          <div className="absolute top-3 right-3 bg-background/15 backdrop-blur text-background text-[9px] uppercase tracking-wider px-2 py-1 rounded-sm border border-background/20">
            {course.tag}
          </div>
        )}
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
