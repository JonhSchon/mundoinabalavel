import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Play, Lock, CheckCircle2, ArrowLeft } from "lucide-react";
import { getCourse, type Lesson, type Module, type Course } from "@/lib/courses";

export const Route = createFileRoute("/app/aulas/$courseId")({
  loader: ({ params }) => {
    const course = getCourse(params.courseId);
    if (!course) throw notFound();
    return { course };
  },
  notFoundComponent: () => (
    <div className="p-10 text-foreground">
      <p>Curso não encontrado.</p>
      <Link to="/app" className="text-gold underline">Voltar à vitrine</Link>
    </div>
  ),
  errorComponent: ({ error }) => <div className="p-10 text-foreground">Erro: {error.message}</div>,
  component: CoursePage,
});

function CoursePage() {
  const { course } = Route.useLoaderData() as { course: Course };
  const totalLessons = course.modules.reduce((s: number, m: Module) => s + m.lessons.length, 0);
  const done = course.modules.reduce((s: number, m: Module) => s + m.lessons.filter((l: Lesson) => l.s === "done").length, 0);
  const progress = course.progress ?? Math.round((done / Math.max(totalLessons, 1)) * 100);

  return (
    <div className="bg-sidebar text-sidebar-foreground min-h-full pb-20">
      <section
        className="relative h-[42vh] min-h-[340px] overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${course.cover.from} 0%, ${course.cover.via ?? course.cover.from} 50%, ${course.cover.to} 100%)`,
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 50%, white 0, transparent 50%), radial-gradient(circle at 80% 30%, var(--gold) 0, transparent 40%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sidebar to-transparent" />
        <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-10 flex flex-col justify-end pb-10">
          <Link to="/app" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold mb-3 hover:opacity-80">
            <ArrowLeft className="h-3 w-3" /> Vitrine
          </Link>
          <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">ISN · {course.type}</div>
          <h1 className="font-display text-4xl md:text-6xl text-background leading-[1.05]">{course.title}</h1>
          {course.subtitle && <p className="mt-3 text-background/70 text-sm">{course.subtitle}</p>}

          <div className="mt-6 flex items-center gap-5 max-w-xl">
            <button className="inline-flex items-center gap-2 bg-gold-gradient text-gold-foreground px-6 py-2.5 rounded-sm text-sm font-medium">
              <Play className="h-4 w-4 fill-current" /> Começar
            </button>
            <div className="flex-1">
              <div className="flex items-center justify-between text-xs text-background/70 mb-1.5">
                <span>{totalLessons} aulas</span>
                <span>{progress}%</span>
              </div>
              <div className="h-1 bg-background/15 rounded-full overflow-hidden">
                <div className="h-full bg-gold-gradient" style={{ width: `${progress}%` }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-12 space-y-14">
        {course.modules.map((m: Module) => (
          <section key={m.title}>
            {m.image && (
              <div className="relative mb-6 overflow-hidden rounded-lg border border-sidebar-border aspect-[21/9] md:aspect-[21/7]">
                <img
                  src={m.image}
                  alt={m.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sidebar via-sidebar/50 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">Módulo</div>
                  <h2 className="font-display text-xl md:text-3xl text-background leading-tight max-w-3xl">
                    {m.title}
                  </h2>
                </div>
              </div>
            )}
            <div className="flex items-baseline justify-between mb-6">
              {!m.image && (
                <h2 className="font-display text-xl md:text-2xl text-sidebar-foreground">{m.title}</h2>
              )}
              <span className={`text-xs uppercase tracking-[0.2em] text-gold/70 ${m.image ? "ml-auto" : ""}`}>
                {m.lessons.length} aulas
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-7">
              {m.lessons.map((l: Lesson, idx: number) => (
                <LessonCard key={idx} lesson={l} cover={course.cover} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

function LessonCard({ lesson, cover }: { lesson: Lesson; cover: { from: string; to: string } }) {
  const locked = lesson.s === "locked";
  return (
    <button className="group text-left">
      <div
        className="relative aspect-video rounded-md overflow-hidden border border-sidebar-border group-hover:border-gold transition-colors"
        style={{ background: `linear-gradient(135deg, ${cover.from} 0%, ${cover.to} 100%)` }}
      >
        <div className="absolute -top-1/3 -right-1/3 w-2/3 h-2/3 rounded-full opacity-25 blur-2xl" style={{ background: "var(--gold)" }} />
        <div className="absolute inset-0 p-3 flex flex-col justify-between">
          <div className="text-[9px] uppercase tracking-[0.2em] text-background/60">ISN</div>
          <div className="font-display text-[11px] md:text-xs text-background/95 uppercase tracking-wider leading-tight line-clamp-3">
            {lesson.t}
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
      {lesson.d && <div className="text-[11px] text-sidebar-foreground/50 mt-0.5 line-clamp-2">{lesson.d}</div>}
    </button>
  );
}
