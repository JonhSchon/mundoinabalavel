import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Activity,
  ArrowUpRight,
  Award,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  Mail,
  MessageCircle,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Target,
  TrendingUp,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_authenticated/app/assessments")({
  head: () => ({
    meta: [
      { title: "Assessments Executivos · Instituto Schonhardt" },
      {
        name: "description",
        content:
          "Diagnósticos proprietários de alta performance para consultores, KAMs e gestores de acesso da indústria farmacêutica.",
      },
      { property: "og:title", content: "Assessments Executivos · Instituto Schonhardt" },
      {
        property: "og:description",
        content:
          "Auditoria de competências, prontidão de mercado e certificação executiva para a indústria farmacêutica.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AssessmentsPage,
});

/* ---------------------------------- data --------------------------------- */

type AssessmentId = "pharma-readiness" | "kam-strategic" | "access-intelligence";

type Assessment = {
  id: AssessmentId;
  seal: string;
  sealVariant: "diagnostic" | "certification" | "complex";
  icon: typeof Stethoscope;
  officialName: string;
  tagline: string;
  description: string;
  transformation: string;
  dimensions: string[];
  metrics: { value: string; label: string }[];
  bullets: string[];
  cta: string;
  context: "assessment";
};

const assessments: Assessment[] = [
  {
    id: "pharma-readiness",
    seal: "Diagnóstico Avançado",
    sealVariant: "diagnostic",
    icon: Stethoscope,
    officialName: "Pharma Readiness Index™",
    tagline: "O Diagnóstico de Prontidão do Consultor de Elite",
    description:
      "Uma auditoria profunda de competências comerciais, domínio de territórios, inteligência de dados e posicionamento estratégico. Identifica os gaps invisíveis que impedem o profissional de romper a barreira do operacional e alcançar a alta gestão.",
    transformation:
      "De executor técnico para consultor de elite reconhecido pelo mercado de alta complexidade.",
    dimensions: [
      "Comercialidade e execução de território",
      "Inteligência de dados e decisão",
      "Posicionamento executivo e influência",
      "Domínio do ecossistema regulatório",
    ],
    metrics: [
      { value: "4", label: "Dimensões de prontidão" },
      { value: "32", label: "Indicadores de elite" },
      { value: "90 min", label: "Avaliação imersiva" },
    ],
    bullets: [
      "Mapa de gaps versus perfil de alta gestão",
      "Score de prontidão por território e função",
      "Plano de ação de 90 dias para romper barreiras",
      "Relatório executivo com recomendações de carreira",
    ],
    cta: "Iniciar auditoria de prontidão",
    context: "assessment",
  },
  {
    id: "kam-strategic",
    seal: "Certificação Executiva",
    sealVariant: "certification",
    icon: Target,
    officialName: "KAM Strategic Audit™",
    tagline: "O Raio-X de Competências em Contas Estratégicas",
    description:
      "Assessment executivo voltado para Key Account Managers que precisam dominar o ecossistema de saúde, leitura avançada de contas hospitalares, negociações complexas e planejamento de território de alto faturamento.",
    transformation:
      "De gestor de contas para arquiteto de negócios que governa relacionamentos de alto valor.",
    dimensions: [
      "Leitura estratégica de contas hospitalares",
      "Negociação multilateral e stakeholders",
      "Planejamento de território de alta complexidade",
      "Business Case e demonstração de valor",
    ],
    metrics: [
      { value: "6", label: "Pilares de excelência KAM" },
      { value: "48", label: "Checkpoint de competência" },
      { value: "120 min", label: "Avaliação executiva" },
    ],
    bullets: [
      "Raio-X de maturidade em KAM farmacêutico",
      "Diagnóstico de contas críticas e oportunidades",
      "Roteiro de certificação executiva ISN",
      "Benchmark contra perfis de top performers",
    ],
    cta: "Acessar KAM Strategic Audit",
    context: "assessment",
  },
  {
    id: "access-intelligence",
    seal: "Alta Complexidade",
    sealVariant: "complex",
    icon: ScanLine,
    officialName: "Access Intelligence Assessment™",
    tagline: "Diagnóstico em Acesso, APAC, CEAF e Decisões de Mercado",
    description:
      "Ferramenta de avaliação e capacitação imersiva focada no complexo cenário de incorporação de tecnologias, sustentabilidade de portfólio, NAT-Jus e negociações com pagadores públicos e privados.",
    transformation:
      "De operador de acesso para estrategista que traduz regulação em oportunidade de mercado.",
    dimensions: [
      "Incorporação de tecnologias e avaliação econômica",
      "APAC, CEAF e NAT-Jus",
      "Negociação com pagadores públicos e privados",
      "Sustentabilidade e defesa de portfólio",
    ],
    metrics: [
      { value: "5", label: "Pilares regulatórios" },
      { value: "40", label: "Cenários de decisão" },
      { value: "150 min", label: "Avaliação aprofundada" },
    ],
    bullets: [
      "Simulação de decisões reais de comitês de saúde",
      "Score de maturidade em Market Access",
      "Plano de desenvolvimento por pilar regulatório",
      "Certificação de alta complexidade ISN",
    ],
    cta: "Solicitar aplicação do assessment",
    context: "assessment",
  },
];

/* ---------------------------------- page --------------------------------- */

function AssessmentsPage() {
  return (
    <div className="relative min-h-full bg-sidebar text-sidebar-foreground overflow-hidden">
      {/* ambient light */}
      <div className="pointer-events-none absolute -top-40 -right-32 h-[520px] w-[520px] rounded-full bg-gold/10 blur-[140px]" />
      <div className="pointer-events-none absolute top-64 -left-40 h-[460px] w-[460px] rounded-full bg-royal/25 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-gold/8 blur-[120px]" />

      <div className="relative px-6 lg:px-10 py-10 max-w-7xl mx-auto">
        {/* 1 · HERO */}
        <section className="rounded-2xl border border-sidebar-border bg-sidebar-accent/30 backdrop-blur-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-gold">
                <Sparkles className="h-3.5 w-3.5" strokeWidth={1.8} />
                Assessments Executivos ISN
              </div>
              <h1 className="font-display text-3xl md:text-5xl leading-[1.05] text-sidebar-foreground mt-5">
                Diagnósticos de <span className="text-gold">alta performance</span> para quem governa a indústria farmacêutica.
              </h1>
              <p className="mt-4 text-base md:text-lg text-sidebar-foreground/65 max-w-xl leading-relaxed">
                Ferramentas proprietárias de auditoria de competências, prontidão de mercado e certificação executiva. Não são cursos de prateleira. São raios-X que revelam onde você está, onde pode chegar e o que falta para dominar o jogo.
              </p>
            </div>
            <div className="shrink-0 flex flex-col gap-3 md:text-right">
              <div className="inline-flex items-center gap-2 self-start md:self-auto rounded-full border border-gold/30 bg-gold/5 px-4 py-2 text-xs text-gold">
                <ShieldCheck className="h-4 w-4" strokeWidth={1.6} />
                Aplicação sob supervisão ISN
              </div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-sidebar-foreground/45">
                Relatório executivo · Plano de ação · Certificação
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3">
            <Metric value="3" label="Assessments proprietários" />
            <Metric value="120" label="Indicadores de elite" />
            <Metric value="90-150 min" label="Avaliação imersiva" />
            <Metric value="1:1" label="Debrief executivo" />
          </div>
        </section>

        {/* 2 · PRODUTOS */}
        <section className="mt-14">
          <div className="flex items-baseline justify-between flex-wrap gap-3">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-royal">Catálogo de diagnósticos</div>
              <h2 className="font-display text-2xl md:text-3xl text-sidebar-foreground mt-2">
                Escolha o assessment para o seu momento
              </h2>
            </div>
            <span className="text-xs uppercase tracking-[0.2em] text-sidebar-foreground/45">
              Aplicação high-ticket · vagas limitadas
            </span>
          </div>

          <div className="mt-8 grid lg:grid-cols-3 gap-6">
            {assessments.map((a) => (
              <AssessmentCard key={a.id} assessment={a} />
            ))}
          </div>
        </section>

        {/* 3 · MANIFESTO DE CONVERSÃO */}
        <section className="mt-16 rounded-2xl border border-gold/20 bg-gradient-to-br from-gold/10 via-gold/5 to-transparent p-8 md:p-12 backdrop-blur-xl">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-gold">Avaliação executiva ISN</div>
              <h2 className="font-display text-2xl md:text-3xl text-sidebar-foreground mt-3">
                O mercado não premia esforço. Premia posicionamento.
              </h2>
              <p className="mt-3 text-sm md:text-base text-sidebar-foreground/65 max-w-2xl leading-relaxed">
                Os assessments do Instituto Schonhardt foram desenvolvidos para profissionais que já entregam resultados, mas sabem que operacional não é sinônimo de indispensável. Descubra os gaps invisíveis, obtenha um relatório executivo e construa o plano para a alta gestão.
              </p>
            </div>
            <AssessmentInterestButton
              productTitle="Assessments Executivos ISN"
              cta="Solicitar avaliação executiva"
              variant="gold"
            />
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

/* ----------------------------- assessment card ----------------------------- */

function AssessmentCard({ assessment }: { assessment: Assessment }) {
  const Icon = assessment.icon;
  const [open, setOpen] = useState(false);

  return (
    <div className="group relative flex flex-col rounded-2xl border border-sidebar-border bg-sidebar-accent/30 backdrop-blur-xl overflow-hidden hover:border-gold/50 transition-all duration-300 hover:-translate-y-1">
      {/* seal */}
      <div className="absolute top-5 right-5 z-10">
        <span
          className={cn(
            "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] uppercase tracking-wider font-medium",
            assessment.sealVariant === "diagnostic" && "border border-gold/40 bg-gold/10 text-gold",
            assessment.sealVariant === "certification" && "border border-royal/40 bg-royal/15 text-royal-foreground",
            assessment.sealVariant === "complex" && "border border-sidebar-border bg-sidebar-accent/60 text-sidebar-foreground",
          )}
        >
          {assessment.sealVariant === "diagnostic" && <Activity className="h-3 w-3" />}
          {assessment.sealVariant === "certification" && <Award className="h-3 w-3" />}
          {assessment.sealVariant === "complex" && <BarChart3 className="h-3 w-3" />}
          {assessment.seal}
        </span>
      </div>

      {/* card header gradient */}
      <div className="relative h-40 overflow-hidden bg-royal-gradient">
        <div className="pointer-events-none absolute -top-20 -right-16 h-48 w-48 rounded-full bg-gold/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-background/20 blur-3xl" />
        <div className="relative h-full flex flex-col justify-end p-6">
          <div className="h-12 w-12 rounded-xl border border-gold/40 bg-gold/15 grid place-items-center backdrop-blur-sm">
            <Icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
          </div>
        </div>
      </div>

      <div className="flex-1 p-7 flex flex-col">
        <div className="text-[10px] uppercase tracking-[0.2em] text-gold">Assessment Proprietário</div>
        <h3 className="font-display text-xl md:text-2xl text-sidebar-foreground mt-2 leading-tight">
          {assessment.officialName}
        </h3>
        <p className="text-xs text-sidebar-foreground/55 mt-1.5 italic">{assessment.tagline}</p>

        <p className="mt-4 text-sm text-sidebar-foreground/70 leading-relaxed">
          {assessment.description}
        </p>

        <div className="mt-5 rounded-xl border border-gold/15 bg-gold/5 p-4">
          <div className="text-[10px] uppercase tracking-[0.2em] text-gold mb-2">Transformação</div>
          <p className="text-sm text-sidebar-foreground/85 leading-relaxed">{assessment.transformation}</p>
        </div>

        <div className="mt-5">
          <div className="text-[10px] uppercase tracking-[0.2em] text-sidebar-foreground/50 mb-2">
            Dimensões avaliadas
          </div>
          <ul className="space-y-1.5">
            {assessment.dimensions.map((d) => (
              <li key={d} className="flex items-start gap-2 text-[13px] text-sidebar-foreground/65">
                <span className="text-gold mt-0.5">·</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-2">
          {assessment.metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-lg border border-sidebar-border bg-sidebar/40 px-3 py-3 text-center"
            >
              <div className="font-display text-lg text-gold leading-none">{m.value}</div>
              <div className="text-[10px] uppercase tracking-wider text-sidebar-foreground/45 mt-1.5 leading-tight">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 space-y-2">
          <AssessmentInterestButton
            productTitle={assessment.officialName}
            cta={assessment.cta}
            variant="primary"
          />
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="w-full inline-flex items-center justify-center gap-2 rounded-sm border border-sidebar-border px-5 py-2.5 text-sm text-sidebar-foreground/80 hover:border-gold/40 hover:text-gold transition-colors"
          >
            <ClipboardCheck className="h-4 w-4" />
            Ver o que o relatório entrega
          </button>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-sidebar border-sidebar-border text-sidebar-foreground sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display text-xl text-sidebar-foreground">
              {assessment.officialName}
            </DialogTitle>
            <DialogDescription className="text-sidebar-foreground/55">
              Relatório executivo entregue após a aplicação do assessment.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 space-y-3">
            {assessment.bullets.map((b) => (
              <div key={b} className="flex items-start gap-3 rounded-lg border border-sidebar-border bg-sidebar-accent/40 p-3">
                <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                <span className="text-sm text-sidebar-foreground/80">{b}</span>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <AssessmentInterestButton
              productTitle={assessment.officialName}
              cta={assessment.cta}
              variant="primary"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

/* ----------------------------- interest button ----------------------------- */

function AssessmentInterestButton({
  productTitle,
  cta,
  variant = "primary",
}: {
  productTitle: string;
  cta: string;
  variant?: "primary" | "gold";
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [goal, setGoal] = useState("");
  const [open, setOpen] = useState(false);

  const subject = encodeURIComponent(`Solicitação de aplicação · ${productTitle}`);
  const body = encodeURIComponent(
    `Olá João,\n\nGostaria de solicitar a aplicação do assessment: ${productTitle}.\n\n` +
      `Nome: ${name}\n` +
      `E-mail: ${email}\n` +
      (company ? `Empresa / cargo: ${company}\n` : "") +
      (goal ? `Objetivo / momento de carreira: ${goal}\n` : "") +
      `\nAguardo o retorno da equipe ISN para agendarmos a aplicação e o debrief executivo.\n\nObrigado.`,
  );
  const mailto = `mailto:contato@institutoschonhardt.com.br?subject=${subject}&body=${body}`;

  const handleSubmit = () => {
    window.open(mailto, "_blank");
    setOpen(false);
  };

  const isValid = name.trim().length > 2 && email.includes("@");

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          className={cn(
            "w-full inline-flex items-center justify-center gap-2 rounded-sm px-5 py-2.5 text-sm font-medium transition-colors",
            variant === "primary"
              ? "border border-gold/40 text-gold hover:bg-gold hover:text-gold-foreground"
              : "bg-gold text-gold-foreground hover:bg-gold/90",
          )}
        >
          {variant === "primary" && <TrendingUp className="h-4 w-4" />}
          {variant === "gold" && <ArrowUpRight className="h-4 w-4" />}
          {cta}
        </button>
      </DialogTrigger>
      <DialogContent className="bg-sidebar border-sidebar-border text-sidebar-foreground sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-xl text-sidebar-foreground">
            Solicitar aplicação
          </DialogTitle>
          <DialogDescription className="text-sidebar-foreground/55">
            Preencha seus dados para a equipe do Instituto Schonhardt entrar em contato sobre{" "}
            <span className="text-gold">{productTitle}</span>.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="name" className="text-xs uppercase tracking-wider text-sidebar-foreground/70">
              Nome completo
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome"
              className="bg-sidebar-accent/50 border-sidebar-border text-sidebar-foreground placeholder:text-sidebar-foreground/35 focus-visible:ring-gold/40"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="email" className="text-xs uppercase tracking-wider text-sidebar-foreground/70">
              E-mail corporativo
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="voce@empresa.com"
              className="bg-sidebar-accent/50 border-sidebar-border text-sidebar-foreground placeholder:text-sidebar-foreground/35 focus-visible:ring-gold/40"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="company" className="text-xs uppercase tracking-wider text-sidebar-foreground/70">
              Empresa / cargo atual
            </Label>
            <Input
              id="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Ex: KAM Sênior · Indústria Farmacêutica"
              className="bg-sidebar-accent/50 border-sidebar-border text-sidebar-foreground placeholder:text-sidebar-foreground/35 focus-visible:ring-gold/40"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="goal" className="text-xs uppercase tracking-wider text-sidebar-foreground/70">
              Objetivo com o assessment
            </Label>
            <Textarea
              id="goal"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="Conte brevemente onde você está e o que espera descobrir ou validar..."
              rows={3}
              className="bg-sidebar-accent/50 border-sidebar-border text-sidebar-foreground placeholder:text-sidebar-foreground/35 focus-visible:ring-gold/40 resize-none"
            />
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={handleSubmit}
              disabled={!isValid}
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-5 py-2.5 text-sm font-medium text-gold-foreground hover:bg-gold/90 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <Mail className="h-4 w-4" />
              Enviar solicitação por e-mail
            </button>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(
                `Olá João, gostaria de solicitar a aplicação do ${productTitle}. Meu nome é ${name}.`,
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-sidebar-border px-5 py-2.5 text-sm text-sidebar-foreground/80 hover:border-gold/40 hover:text-gold transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Preferiu enviar pelo WhatsApp?
            </a>
          </div>

          <p className="text-[11px] text-sidebar-foreground/40 leading-relaxed">
            Ao enviar, seus dados serão direcionados para a equipe do Instituto Schonhardt. A aplicação dos assessments é
            high-ticket, com vagas limitadas e debrief executivo 1:1.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
