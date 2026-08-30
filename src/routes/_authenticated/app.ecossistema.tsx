import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowUpRight,
  GraduationCap,
  Users,
  Mic,
  Play,
  Lock,
  Compass,
  Building2,
  Layers,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { courses, type Course } from "@/lib/courses";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_authenticated/app/ecossistema")({
  head: () => ({
    meta: [
      { title: "Centro de Aceleração · Instituto Schonhardt" },
      {
        name: "description",
        content:
          "Governança de carreira, Key Account Management e capacitação executiva para a indústria farmacêutica e alta gestão.",
      },
      { property: "og:title", content: "Centro de Aceleração · Instituto Schonhardt" },
      {
        property: "og:description",
        content:
          "Escolha seu momento de carreira: transição, aceleração em KAM ou capacitação executiva avançada.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EcossistemaPage,
});

/* ---------------------------------- data --------------------------------- */

type PathId = "transicao" | "kam" | "capacitacao";

const paths: {
  id: PathId;
  label: string;
  title: string;
  description: string;
  icon: typeof Compass;
  bullets: string[];
  courseIds: string[];
}[] = [
  {
    id: "transicao",
    label: "Momento 01",
    title: "Transição e Recolocação",
    description:
      "Posicionamento de elite, reestruturação de perfil e aceleração para o mercado de alta complexidade.",
    icon: Compass,
    bullets: ["Identidade e narrativa executiva", "Perfil ATS-proof", "Rota de recolocação em 90 dias"],
    courseIds: ["retorno-memoravel", "jogo-real"],
  },
  {
    id: "kam",
    label: "Momento 02",
    title: "Aceleração em Key Account Management",
    description:
      "Domínio de Market Access, APAC, CEAF, NAT-Jus e estratégias hospitalares de alta complexidade.",
    icon: Building2,
    bullets: ["Acesso e judicialização", "Contas hospitalares e públicas", "Business Case de impacto"],
    courseIds: ["chave-industria", "impacta-10x"],
  },
  {
    id: "capacitacao",
    label: "Momento 03",
    title: "Capacitação e Mentorias Avançadas",
    description:
      "Formações executivas, masterclasses e imersões estratégicas do Instituto Schonhardt.",
    icon: Layers,
    bullets: ["Mentoria 1:1 executiva", "Palestra magna Inabalável", "Imersões e masterclasses"],
    courseIds: ["impacta-10x", "inabalavel"],
  },
];

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
  paths: PathId[];
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
    paths: ["transicao", "kam", "capacitacao"],
    bullets: [
      "Sessões quinzenais 1:1 (90 min)",
      "Revisão semanal de CV / LinkedIn / pitch",
      "Simulação de entrevista com GR/GD",
      "Acesso vitalício à Irmandade",
    ],
  },
  {
    id: "inabalavel-palestra",
    icon: Mic,
    type: "Palestra · Online ou presencial",
    title: "Inabalável: A Ciência do Valor Inegociável",
    subtitle: "45 a 60 minutos · sob medida para sua empresa ou evento",
    description:
      "Palestra exclusiva para empresas, congressos e eventos corporativos. Cada convite é avaliado caso a caso — formato, agenda, público e investimento são definidos em conjunto após briefing.",
    price: "Valor sob consulta",
    tag: "Negociável caso a caso",
    paths: ["capacitacao"],
    bullets: [
      "Formato online, presencial ou híbrido",
      "Conteúdo adaptado ao público (RH, comercial, liderança)",
      "Proposta enviada após briefing rápido por e-mail",
      "Investimento definido conforme escopo, deslocamento e audiência",
    ],
  },
];

const typeIcon: Record<Course["type"], typeof GraduationCap> = {
  Curso: GraduationCap,
  Palestra: Mic,
  Mentoria: Users,
  Evento: Mic,
};

/* ---------------------------------- page ---------------------------------- */

function EcossistemaPage() {
  const [active, setActive] = useState<PathId>("transicao");
  const activePath = paths.find((p) => p.id === active)!;

  const visibleCourses = courses.filter((c) => activePath.courseIds.includes(c.id));
  const visibleExtras = extras.filter((e) => e.paths.includes(active));

  const totalLessons = courses.reduce(
    (s, c) => s + c.modules.reduce((n, m) => n + m.lessons.length, 0),
    0,
  );

  return (
    <div className="relative min-h-full bg-sidebar text-sidebar-foreground overflow-hidden">
      {/* ambient light */}
      <div className="pointer-events-none absolute -top-40 -right-32 h-[520px] w-[520px] rounded-full bg-gold/10 blur-[140px]" />
      <div className="pointer-events-none absolute top-64 -left-40 h-[460px] w-[460px] rounded-full bg-royal/25 blur-[150px]" />

      <div className="relative px-6 lg:px-10 py-10 max-w-7xl mx-auto">
        {/* 1 · DASHBOARD DE BOAS-VINDAS */}
        <section className="rounded-2xl border border-sidebar-border bg-sidebar-accent/30 backdrop-blur-xl p-7 md:p-9">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-gold">
                <Sparkles className="h-3.5 w-3.5" strokeWidth={1.8} />
                Centro de Aceleração
              </div>
              <h2 className="font-display text-2xl md:text-3xl mt-3 text-sidebar-foreground">
                Bem-vindo ao centro de aceleração do Instituto Schonhardt.
              </h2>
              <p className="mt-2 text-sm text-sidebar-foreground/60 max-w-xl">
                Seu painel de governança de carreira: escolha o momento, ative a
                trilha e acompanhe o ecossistema completo em um só lugar.
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-gold/25 bg-gold/5 px-5 py-4">
              <ShieldCheck className="h-5 w-5 text-gold" strokeWidth={1.6} />
              <div className="leading-tight">
                <div className="text-[10px] uppercase tracking-[0.2em] text-gold/80">Status</div>
                <div className="text-sm text-sidebar-foreground">Mentorado ativo · Premium</div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3">
            <Metric value={String(courses.length)} label="Programas no ecossistema" />
            <Metric value={String(totalLessons)} label="Aulas estratégicas" />
            <Metric value="3" label="Momentos de carreira" />
            <Metric value="28" label="Anos de indústria farmacêutica" />
          </div>
        </section>

        {/* 2 · HERO / MANIFESTO */}
        <section className="mt-12 md:mt-16 max-w-4xl">
          <div className="text-xs uppercase tracking-[0.3em] text-royal">
            Manifesto de autoridade e governança
          </div>
          <h1 className="font-display text-4xl md:text-6xl leading-[1.05] text-sidebar-foreground mt-4">
            Autonomia é consequência de{" "}
            <span className="text-gold">valor inegociável</span> — construído com
            método, não com sorte.
          </h1>
          <p className="mt-5 text-base md:text-lg text-sidebar-foreground/65 max-w-2xl leading-relaxed">
            Inteligência de ecossistema, estratégia de carreira e acesso
            corporativo reunidos em uma única arquitetura: domine a indústria
            farmacêutica e a alta gestão a partir de decisões governadas por dados,
            reputação e influência.
          </p>
          <div className="mt-7 h-px w-40 bg-gold-gradient" />
        </section>

        {/* 3 · MAPA DE PILARES */}
        <section className="mt-12">
          <div className="flex items-baseline justify-between flex-wrap gap-2">
            <h2 className="font-display text-2xl text-sidebar-foreground">
              Qual é o seu momento agora?
            </h2>
            <span className="text-xs uppercase tracking-[0.2em] text-sidebar-foreground/45">
              Selecione um caminho
            </span>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-5">
            {paths.map((p) => {
              const Icon = p.icon;
              const isActive = p.id === active;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActive(p.id)}
                  className={cn(
                    "group relative text-left rounded-2xl border p-7 overflow-hidden transition-all duration-300 backdrop-blur-xl",
                    "hover:-translate-y-1",
                    isActive
                      ? "border-gold/60 bg-sidebar-accent/60 shadow-gold"
                      : "border-sidebar-border bg-sidebar-accent/25 hover:border-gold/40",
                  )}
                >
                  <div
                    className={cn(
                      "pointer-events-none absolute -top-20 -right-16 h-48 w-48 rounded-full blur-3xl transition-opacity duration-500",
                      isActive ? "bg-gold/20 opacity-100" : "bg-gold/10 opacity-0 group-hover:opacity-100",
                    )}
                  />
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div className="h-12 w-12 rounded-xl border border-gold/30 bg-gold/10 grid place-items-center">
                        <Icon className="h-5 w-5 text-gold" strokeWidth={1.6} />
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.25em] text-sidebar-foreground/40">
                        {p.label}
                      </span>
                    </div>
                    <h3 className="font-display text-xl text-sidebar-foreground mt-5 leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-sm text-sidebar-foreground/60 mt-2 leading-relaxed">
                      {p.description}
                    </p>
                    <ul className="mt-4 space-y-1.5">
                      {p.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2 text-[13px] text-sidebar-foreground/55"
                        >
                          <span className="text-gold mt-0.5">·</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                    <span
                      className={cn(
                        "mt-6 inline-flex items-center gap-2 text-sm transition-colors",
                        isActive ? "text-gold" : "text-sidebar-foreground/70 group-hover:text-gold",
                      )}
                    >
                      {isActive ? "Caminho ativo" : "Acessar caminho"}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* CATÁLOGO FILTRADO */}
        <section className="mt-14">
          <div className="flex items-center gap-3">
            <TrendingUp className="h-4 w-4 text-gold" strokeWidth={1.8} />
            <h2 className="font-display text-2xl text-sidebar-foreground">
              {activePath.title}
            </h2>
          </div>
          <p className="mt-2 text-sm text-sidebar-foreground/55 max-w-2xl">
            Programas selecionados para este momento. Expanda cada um para ver a
            grade completa de módulos e aulas.
          </p>

          <div className="mt-8 space-y-5">
            {visibleCourses.map((c) => (
              <CourseProduct key={c.id} course={c} />
            ))}
            {visibleExtras.map((p) => (
              <ExtraProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-sidebar-border bg-sidebar/40 px-5 py-4">
      <div className="font-display text-3xl text-gold leading-none">{value}</div>
      <div className="text-[11px] uppercase tracking-[0.15em] text-sidebar-foreground/50 mt-2 leading-snug">
        {label}
      </div>
    </div>
  );
}

/* -------------------------------- products -------------------------------- */

function CourseProduct({ course }: { course: Course }) {
  const Icon = typeIcon[course.type] ?? GraduationCap;
  const totalLessons = course.modules.reduce((s, m) => s + m.lessons.length, 0);

  return (
    <div className="group relative bg-sidebar-accent/30 backdrop-blur-xl border border-sidebar-border rounded-2xl overflow-hidden hover:border-gold/50 transition-colors">
      {course.tag && (
        <div className="absolute top-5 right-5 bg-gold-gradient text-gold-foreground text-[10px] uppercase tracking-wider px-3 py-1 rounded-full z-10">
          {course.tag}
        </div>
      )}

      <div className="grid md:grid-cols-[260px_1fr]">
        <div
          className="relative min-h-[220px] md:min-h-full overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${course.cover.from} 0%, ${course.cover.via ?? course.cover.from} 50%, ${course.cover.to} 100%)`,
          }}
        >
          {course.cover.image ? (
            <img
              src={course.cover.image}
              alt={course.title}
              loading="lazy"
              width={1024}
              height={1536}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
          ) : (
            <>
              <div
                className="absolute -top-1/3 -right-1/3 w-2/3 h-2/3 rounded-full opacity-25 blur-3xl"
                style={{ background: "var(--gold)" }}
              />
              <div className="absolute inset-x-6 top-6 text-[10px] uppercase tracking-[0.3em] text-background/70">
                ISN · {course.cover.label}
              </div>
              <div className="absolute inset-x-6 bottom-6">
                <div className="font-display text-2xl text-background leading-tight">
                  {course.title}
                </div>
                <div className="mt-2 text-xs text-background/70">
                  {course.modules.length} módulos · {totalLessons} aulas
                </div>
              </div>
            </>
          )}
        </div>

        <div className="p-7">
          <Icon className="h-7 w-7 text-gold" strokeWidth={1.5} />
          <div className="text-[10px] uppercase tracking-[0.2em] text-gold mt-4">
            {course.type}
            {course.duration && ` · ${course.duration}`}
          </div>
          <h3 className="font-display text-2xl text-sidebar-foreground mt-1.5">
            {course.title}
          </h3>
          {course.subtitle && (
            <p className="text-sm text-sidebar-foreground/60 mt-1.5">{course.subtitle}</p>
          )}

          <Accordion type="single" collapsible className="mt-5">
            <AccordionItem value="modules" className="border-sidebar-border">
              <AccordionTrigger className="text-xs uppercase tracking-[0.2em] text-sidebar-foreground/70 hover:text-gold hover:no-underline py-3">
                Ver os {course.modules.length} módulos
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-5 pt-2">
                  {course.modules.map((m, mi) => (
                    <div key={mi}>
                      <div className="font-display text-sm text-sidebar-foreground mb-2">
                        {m.title}
                      </div>
                      <ul className="space-y-1.5">
                        {m.lessons.map((l, li) => (
                          <li
                            key={li}
                            className="flex items-start gap-2.5 text-[13px] text-sidebar-foreground/60"
                          >
                            {l.s === "locked" ? (
                              <Lock className="h-3 w-3 mt-1 shrink-0 text-sidebar-foreground/40" />
                            ) : (
                              <Play className="h-3 w-3 mt-1 shrink-0 text-gold fill-current" />
                            )}
                            <span className="leading-snug">
                              <span className="text-sidebar-foreground/85">{l.t}</span>
                              {l.d && (
                                <span className="text-sidebar-foreground/45"> · {l.d}</span>
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
            <div className="font-display text-xl text-sidebar-foreground">{course.price}</div>
            <Link
              to="/app/aulas/$courseId"
              params={{ courseId: course.id }}
              className="inline-flex items-center gap-2 rounded-sm border border-gold/40 px-5 py-2.5 text-sm text-gold hover:bg-gold hover:text-gold-foreground transition-colors"
            >
              Abrir programa <ArrowUpRight className="h-4 w-4" />
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
    <div className="relative bg-sidebar-accent/30 backdrop-blur-xl border border-sidebar-border rounded-2xl p-7 hover:border-gold/50 transition-colors">
      {product.tag && (
        <div className="absolute -top-2.5 right-6 bg-gold-gradient text-gold-foreground text-[10px] uppercase tracking-wider px-3 py-1 rounded-full">
          {product.tag}
        </div>
      )}
      <Icon className="h-8 w-8 text-gold" strokeWidth={1.5} />
      <div className="text-[10px] uppercase tracking-[0.2em] text-gold mt-5">{product.type}</div>
      <h3 className="font-display text-2xl text-sidebar-foreground mt-2">{product.title}</h3>
      <p className="text-xs text-sidebar-foreground/55 mt-1">{product.subtitle}</p>
      <p className="text-sm text-sidebar-foreground/65 mt-3 leading-relaxed">
        {product.description}
      </p>
      <ul className="mt-4 space-y-1.5">
        {product.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2 text-[13px] text-sidebar-foreground/60">
            <span className="text-gold mt-0.5">·</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex items-center justify-between">
        <div className="font-display text-xl text-sidebar-foreground">{product.price}</div>
        <a
          href={`mailto:contato@institutoschonhardt.com.br?subject=${encodeURIComponent(`Interesse · ${product.title}`)}&body=${encodeURIComponent("Olá João,\n\nTenho interesse em contratar. Segue um breve briefing:\n\n• Empresa / evento:\n• Data e local:\n• Formato (online, presencial, híbrido):\n• Público estimado e perfil:\n• Objetivo:\n\nAguardo proposta.\n\nObrigado.")}`}
          className="inline-flex items-center gap-2 rounded-sm border border-gold/40 px-5 py-2.5 text-sm text-gold hover:bg-gold hover:text-gold-foreground transition-colors"
        >
          Solicitar proposta <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
