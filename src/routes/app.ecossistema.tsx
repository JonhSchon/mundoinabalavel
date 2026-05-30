import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, GraduationCap, Users, Mic, Play, Lock } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { courses, type Course } from "@/lib/courses";

export const Route = createFileRoute("/app/ecossistema")({
  component: EcossistemaPage,
});

type ExtraProduct = {
  id: string;
  type: string;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  tag?: string;
  icon: typeof Users;
  bullets: string[];
};

const extras: ExtraProduct[] = [
  {
    id: "mentoria-1a1",
    icon: Users,
    type: "Mentoria 1:1",
    title: "Programa Executivo · 6 meses",
    subtitle: "Acompanhamento direto com Schonhardt",
    description:
      "Plano de recolocação sob medida, simulação de Grupo de Discussão, revisão de Business Case e portfólio para multinacional.",
    price: "R$ 18.000",
    tag: "Vagas limitadas",
    bullets: [
      "Sessões quinzenais 1:1 (90 min)",
      "Revisão semanal de CV / LinkedIn / pitch",
      "Simulação de entrevista com GR/GD",
      "Acesso vitalício à Irmandade",
    ],
  },
  {
    id: "inabalavel",
    icon: Mic,
    type: "Palestra · Evento online",
    title: "Inabalável: A Ciência do Valor Inegociável",
    subtitle: "90 minutos · ao vivo · gratuito",
    description:
      "Sessão única aberta para a Irmandade. Os bastidores do profissional inegociável — vagas limitadas por turma.",
    price: "Gratuito",
    tag: "Próxima turma",
    bullets: [
      "Transmissão ao vivo 100% online",
      "Q&A direto com Schonhardt",
      "Replay liberado por 72h para confirmados",
    ],
  },
];

const typeIcon: Record<Course["type"], typeof GraduationCap> = {
  Curso: GraduationCap,
  Palestra: Mic,
  Mentoria: Users,
  Evento: Mic,
};

function EcossistemaPage() {
  return (
    <div className="px-6 lg:px-10 py-10 max-w-6xl">
      <div className="text-xs uppercase tracking-[0.25em] text-royal mb-3">
        O ecossistema ISN
      </div>
      <h1 className="font-display text-4xl md:text-5xl text-foreground">
        Você não precisa esperar a próxima vaga abrir.
      </h1>
      <p className="mt-3 text-muted-foreground max-w-2xl">
        Cursos, mentoria 1:1 e palestras. Mentorados ativos da Irmandade têm
        condição especial e prioridade em todas as turmas. Expanda cada produto
        para ver os módulos completos.
      </p>

      <div className="mt-10 space-y-5">
        {courses.map((c) => (
          <CourseProduct key={c.id} course={c} />
        ))}
        {extras.map((p) => (
          <ExtraProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

function CourseProduct({ course }: { course: Course }) {
  const Icon = typeIcon[course.type] ?? GraduationCap;
  const totalLessons = course.modules.reduce(
    (s, m) => s + m.lessons.length,
    0,
  );

  return (
    <div className="group relative bg-card border border-border rounded-lg overflow-hidden hover:border-gold transition-colors">
      {course.tag && (
        <div className="absolute top-5 right-5 bg-gold-gradient text-gold-foreground text-[10px] uppercase tracking-wider px-3 py-1 rounded-full z-10">
          {course.tag}
        </div>
      )}

      <div className="grid md:grid-cols-[260px_1fr]">
        {/* Cover */}
        <div
          className="relative min-h-[180px] md:min-h-full p-6 flex flex-col justify-between"
          style={{
            background: `linear-gradient(135deg, ${course.cover.from} 0%, ${course.cover.via ?? course.cover.from} 50%, ${course.cover.to} 100%)`,
          }}
        >
          <div
            className="absolute -top-1/3 -right-1/3 w-2/3 h-2/3 rounded-full opacity-25 blur-3xl"
            style={{ background: "var(--gold)" }}
          />
          <div className="relative text-[10px] uppercase tracking-[0.3em] text-background/70">
            ISN · {course.cover.label}
          </div>
          <div className="relative">
            <div className="font-display text-2xl text-background leading-tight">
              {course.title}
            </div>
            <div className="mt-2 text-xs text-background/70">
              {course.modules.length} módulos · {totalLessons} aulas
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-7">
          <Icon className="h-7 w-7 text-royal" strokeWidth={1.5} />
          <div className="text-[10px] uppercase tracking-[0.2em] text-gold mt-4">
            {course.type}
          </div>
          <h3 className="font-display text-2xl text-foreground mt-1.5">
            {course.title}
          </h3>
          {course.subtitle && (
            <p className="text-sm text-muted-foreground mt-1.5">
              {course.subtitle}
            </p>
          )}

          <Accordion type="single" collapsible className="mt-5">
            <AccordionItem value="modules" className="border-border">
              <AccordionTrigger className="text-xs uppercase tracking-[0.2em] text-royal hover:text-gold hover:no-underline py-3">
                Ver os {course.modules.length} módulos
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-5 pt-2">
                  {course.modules.map((m, mi) => (
                    <div key={mi}>
                      <div className="font-display text-sm text-foreground mb-2">
                        {m.title}
                      </div>
                      <ul className="space-y-1.5">
                        {m.lessons.map((l, li) => (
                          <li
                            key={li}
                            className="flex items-start gap-2.5 text-[13px] text-muted-foreground"
                          >
                            {l.s === "locked" ? (
                              <Lock className="h-3 w-3 mt-1 shrink-0 text-muted-foreground/60" />
                            ) : (
                              <Play className="h-3 w-3 mt-1 shrink-0 text-gold fill-current" />
                            )}
                            <span className="leading-snug">
                              <span className="text-foreground/85">{l.t}</span>
                              {l.d && (
                                <span className="text-muted-foreground/70">
                                  {" "}
                                  · {l.d}
                                </span>
                              )}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-5 flex items-center justify-between">
            <div className="font-display text-xl text-foreground">
              {course.price}
            </div>
            <Link
              to="/app/aulas/$courseId"
              params={{ courseId: course.id }}
              className="inline-flex items-center gap-2 text-sm text-royal group-hover:text-gold transition-colors"
            >
              Abrir curso <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExtraProductCard({ product }: { product: ExtraProduct }) {
  const Icon = product.icon;
  return (
    <div className="relative bg-card border border-border rounded-lg p-7 hover:border-gold transition-colors">
      {product.tag && (
        <div className="absolute -top-2.5 right-6 bg-gold-gradient text-gold-foreground text-[10px] uppercase tracking-wider px-3 py-1 rounded-full">
          {product.tag}
        </div>
      )}
      <Icon className="h-8 w-8 text-royal" strokeWidth={1.5} />
      <div className="text-[10px] uppercase tracking-[0.2em] text-gold mt-5">
        {product.type}
      </div>
      <h3 className="font-display text-2xl text-foreground mt-2">
        {product.title}
      </h3>
      <p className="text-xs text-muted-foreground mt-1">{product.subtitle}</p>
      <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
        {product.description}
      </p>
      <ul className="mt-4 space-y-1.5">
        {product.bullets.map((b) => (
          <li
            key={b}
            className="flex items-start gap-2 text-[13px] text-muted-foreground"
          >
            <span className="text-gold mt-0.5">·</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex items-center justify-between">
        <div className="font-display text-xl text-foreground">
          {product.price}
        </div>
        <button className="inline-flex items-center gap-2 text-sm text-royal hover:text-gold transition-colors">
          Tenho interesse <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
