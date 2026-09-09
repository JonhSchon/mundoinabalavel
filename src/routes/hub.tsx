import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import {
  ArrowUpRight,
  Award,
  BookOpen,
  CheckSquare,
  ClipboardList,
  Compass,
  FileText,
  GraduationCap,
  ListChecks,
  PlayCircle,
  Sparkles,
  Target,
} from "lucide-react";

export const Route = createFileRoute("/hub")({
  head: () => ({
    meta: [
      { title: "Centro de Consciência Executiva ISN — Materiais Gratuitos" },
      {
        name: "description",
        content:
          "Mini-cursos com certificado, e-books, checklists e quizzes gratuitos para profissionais da indústria farmacêutica: recolocação, linhas especiais, KAM e Market Access.",
      },
      { property: "og:title", content: "Centro de Consciência Executiva ISN | Materiais Gratuitos" },
      {
        property: "og:description",
        content:
          "Conteúdos práticos e validados, 100% gratuitos e com certificado de participação, para elevar sua visão de mercado na indústria farmacêutica.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HubPage,
});

type Kind = "Mini-curso" | "E-book" | "Checklist" | "Template" | "Guia" | "Quiz";

type Item = {
  kind: Kind;
  title: string;
  desc: string;
  meta: string;
  certificate?: boolean;
};

type Area = {
  id: string;
  label: string;
  headline: string;
  audience: string;
  icon: typeof Compass;
  items: Item[];
};

const areas: Area[] = [
  {
    id: "transicao",
    label: "Transição e Recolocação",
    headline: "Para quem busca voltar ao mercado ou mudar de empresa",
    audience: "Profissionais em transição, retorno ou fora do jogo há algum tempo.",
    icon: Compass,
    items: [
      {
        kind: "Mini-curso",
        title: "Primeiros Passos no Retorno Pharma",
        desc: "3 aulas práticas para recalibrar o foco na alta complexidade e voltar a ser lido pelo mercado.",
        meta: "3 aulas · ~40 min",
        certificate: true,
      },
      {
        kind: "E-book",
        title: "O Manual Anti-Silêncio do RH",
        desc: "Como destravar envios de currículo na indústria farmacêutica e parar de sumir dentro do ATS.",
        meta: "PDF · leitura de 25 min",
      },
      {
        kind: "Checklist",
        title: "Auditoria de Perfil LinkedIn para Recrutadores",
        desc: "Checklist interativo que revisa headline, sobre, palavras-chave e provas de resultado.",
        meta: "Interativo · 18 pontos",
      },
    ],
  },
  {
    id: "comercial",
    label: "Aceleração Comercial",
    headline: "Para representantes e consultores ativos em linhas especiais",
    audience: "Quem já está em campo e quer performance acima da média.",
    icon: Target,
    items: [
      {
        kind: "Mini-curso",
        title: "Fundamentos de Alta Performance em Linhas Especiais",
        desc: "Introdução à leitura de territórios: onde está o potencial e onde você perde tempo.",
        meta: "3 aulas · ~45 min",
        certificate: true,
      },
      {
        kind: "Guia",
        title: "O Mapa do Ciclo de Vendas Hospitalar",
        desc: "Guia visual em PDF com cada etapa, decisor e ponto de travamento do ciclo hospitalar.",
        meta: "PDF visual · 1 página-mestre",
      },
      {
        kind: "Template",
        title: "Plano de Ação de Território em 1 Página",
        desc: "Template prático para transformar diagnóstico de território em execução semanal.",
        meta: "Template editável",
      },
    ],
  },
  {
    id: "acesso",
    label: "KAM e Acesso",
    headline: "Gestão de contas estratégicas e acesso público e privado",
    audience: "KAMs, coordenadores e quem quer migrar para acesso.",
    icon: ClipboardList,
    items: [
      {
        kind: "Mini-curso",
        title: "Introdução ao Market Access e Contas Estratégicas",
        desc: "Visão descomplicada sobre pagadores, APAC e a lógica de decisão das contas críticas.",
        meta: "3 aulas · ~50 min",
        certificate: true,
      },
      {
        kind: "E-book",
        title: "O Glossário de Ouro do Market Access",
        desc: "Dicionário com APAC, CEAF, NAT-Jus e os termos que separam o amador do executivo.",
        meta: "PDF · dicionário",
      },
      {
        kind: "Checklist",
        title: "Como Analisar uma Conta Hospitalar Crítica em 48 Horas",
        desc: "Check-list de mapeamento: fluxo de compra, protocolos, influenciadores e riscos.",
        meta: "Interativo · 4 blocos",
      },
    ],
  },
  {
    id: "trilha",
    label: "Mindset T.R.I.L.H.A.",
    headline: "Crescimento em vendas, negócios e carreira",
    audience: "Para quem quer método antes de tática.",
    icon: Sparkles,
    items: [
      {
        kind: "Mini-curso",
        title: "Imersão T.R.I.L.H.A. Express",
        desc: "Aplicando Tecnologia, Relevância, Intencionalidade, Liberdade, Habilidades e Arquitetura.",
        meta: "6 blocos · ~60 min",
        certificate: true,
      },
      {
        kind: "Quiz",
        title: "Qual o seu Nível de Prontidão Executiva no Ecossistema de Saúde?",
        desc: "Quiz diagnóstico interativo com leitura de resultado e próximo passo recomendado.",
        meta: "Interativo · 12 perguntas",
      },
    ],
  },
];

const kindIcon: Record<Kind, typeof BookOpen> = {
  "Mini-curso": PlayCircle,
  "E-book": BookOpen,
  Checklist: CheckSquare,
  Template: FileText,
  Guia: ListChecks,
  Quiz: Target,
};

function HubPage() {
  const [active, setActive] = useState(areas[0].id);
  const area = areas.find((a) => a.id === active) ?? areas[0];

  return (
    <div className="min-h-screen bg-sidebar text-sidebar-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden pt-36 pb-20">
        <div className="pointer-events-none absolute inset-0 bg-royal-gradient opacity-30" />
        <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.25em] text-gold">
            <Award className="h-3.5 w-3.5" /> 100% Gratuito • Com Certificado de Participação
          </span>
          <h1 className="mt-7 font-display text-4xl md:text-6xl leading-[1.05] text-sidebar-foreground">
            Centro de Consciência Executiva ISN
            <span className="block text-gold mt-2 text-3xl md:text-4xl">
              Ferramentas e Mini-Cursos Gratuitos
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-sidebar-foreground/70">
            Eleve sua visão de mercado, destrave sua recolocação ou acelere sua carreira na indústria
            farmacêutica com conteúdos práticos e validados.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#materiais"
              className="inline-flex items-center gap-2 rounded-sm bg-gold-gradient px-7 py-3.5 text-sm font-medium text-gold-foreground transition-transform hover:-translate-y-0.5"
            >
              Ver materiais livres <ArrowUpRight className="h-4 w-4" />
            </a>
            <Link
              to="/app"
              className="inline-flex items-center gap-2 rounded-sm border border-gold/40 px-7 py-3.5 text-sm text-gold transition-colors hover:bg-gold/10"
            >
              Criar cadastro gratuito
            </Link>
          </div>
        </div>
      </section>

      {/* ABAS */}
      <section id="materiais" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="flex flex-wrap gap-2 rounded-lg border border-sidebar-border bg-sidebar-accent/30 p-2 backdrop-blur">
          {areas.map(({ id, label, icon: Icon }) => {
            const on = id === active;
            return (
              <button
                key={id}
                onClick={() => setActive(id)}
                className={`inline-flex flex-1 min-w-[200px] items-center justify-center gap-2 rounded-sm px-4 py-3 text-sm transition-colors ${
                  on
                    ? "bg-gold text-gold-foreground font-medium"
                    : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground"
                }`}
              >
                <Icon className="h-4 w-4" strokeWidth={1.7} />
                {label}
              </button>
            );
          })}
        </div>

        <div className="mt-10">
          <div className="text-xs uppercase tracking-[0.25em] text-gold">{area.label}</div>
          <h2 className="mt-3 font-display text-3xl text-sidebar-foreground">{area.headline}</h2>
          <p className="mt-2 text-sm text-sidebar-foreground/60">{area.audience}</p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {area.items.map((item) => {
              const Icon = kindIcon[item.kind];
              return (
                <article
                  key={item.title}
                  className="group relative flex flex-col rounded-xl border border-sidebar-border bg-sidebar-accent/25 p-7 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-gold/60"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-md border border-gold/25 bg-gold/10">
                      <Icon className="h-5 w-5 text-gold" strokeWidth={1.6} />
                    </span>
                    <span className="rounded-full bg-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-foreground">
                      Grátis
                    </span>
                  </div>

                  <div className="mt-6 text-[10px] uppercase tracking-[0.22em] text-sidebar-foreground/45">
                    {item.kind}
                  </div>
                  <h3 className="mt-2 font-display text-xl leading-snug text-sidebar-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-sidebar-foreground/65">
                    {item.desc}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-2 text-[11px]">
                    <span className="rounded-full border border-sidebar-border px-2.5 py-1 text-sidebar-foreground/55">
                      {item.meta}
                    </span>
                    {item.certificate && (
                      <span className="inline-flex items-center gap-1 rounded-full border border-gold/30 px-2.5 py-1 text-gold">
                        <Award className="h-3 w-3" /> Certificado
                      </span>
                    )}
                  </div>

                  <Link
                    to="/app"
                    className="mt-6 inline-flex items-center gap-2 text-sm text-sidebar-foreground transition-colors hover:text-gold"
                  >
                    Acessar gratuitamente <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="relative overflow-hidden rounded-2xl border border-gold/30 bg-sidebar-accent/30 p-10 backdrop-blur-xl md:p-14">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-gold">
                <GraduationCap className="h-3.5 w-3.5" /> Cadastro gratuito
              </span>
              <h2 className="mt-5 font-display text-3xl md:text-4xl text-sidebar-foreground">
                Crie sua conta e libere certificados, progresso e prioridade nas turmas
              </h2>
              <p className="mt-4 max-w-2xl text-sidebar-foreground/70">
                Com o cadastro gratuito você emite os certificados dos mini-cursos, acompanha o progresso
                das aulas e entra na lista de acesso prioritário às turmas de mentoria avançada e às
                formações completas — IMPACTA 10X, O Retorno Pharma e os Assessments de Elite.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/auth"
                  className="inline-flex items-center gap-2 rounded-sm bg-gold-gradient px-7 py-3.5 text-sm font-medium text-gold-foreground transition-transform hover:-translate-y-0.5"
                >
                  Criar cadastro gratuito <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/app/ecossistema"
                  className="inline-flex items-center gap-2 rounded-sm border border-gold/40 px-7 py-3.5 text-sm text-gold transition-colors hover:bg-gold/10"
                >
                  Conhecer o ecossistema
                </Link>
              </div>
            </div>

            <ul className="space-y-4 text-sm">
              {[
                "Certificado de participação em todos os mini-cursos",
                "Progresso das aulas salvo na sua conta",
                "Acesso prioritário às turmas de mentoria avançada",
                "Convites antecipados para formações e Assessments",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sidebar-foreground/75">
                  <CheckSquare className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.8} />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
