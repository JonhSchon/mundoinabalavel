import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import heroImg from "@/assets/hero.jpg";
import joaoAsset from "@/assets/joao-schonhardt.png.asset.json";
import {
  ArrowUpRight,
  Building2,
  GraduationCap,
  Mic,
  TrendingUp,
  Compass,
  Quote,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
  MapPin,
  ShieldCheck,
  Stethoscope,
  Fingerprint,
  Dumbbell,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Instituto Schonhardt — Alta Performance na Indústria Farmacêutica" },
      {
        name: "description",
        content:
          "Portal institucional do Instituto Schonhardt: gestão de contas e Market Access, mentoria de carreira, cursos online e palestras corporativas com a metodologia T.R.I.L.H.A.",
      },
      { property: "og:title", content: "Instituto Schonhardt — Autoridade em Farma e Alta Performance" },
      {
        property: "og:description",
        content:
          "Soluções corporativas, mentoria executiva, cursos e a palestra magna INABALÁVEL: A Ciência do Valor Inegociável.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: LandingPage,
});

const pillars = [
  {
    id: "acesso",
    icon: Building2,
    kicker: "Pilar 01 · Corporativo",
    title: "Gestão de Contas e Acesso",
    desc: "Estratégia de Market Access e execução hospitalar de alta complexidade para times que precisam abrir e sustentar contas críticas.",
    bullets: [
      "Market Access e precificação de acesso",
      "APAC, CEAF e fluxos de dispensação",
      "NAT-Jus e judicialização da saúde",
      "Estratégias hospitalares e contas-chave (KAM)",
    ],
    cta: "Falar sobre projeto corporativo",
    href: "mailto:contato@institutoschonhardt.com.br?subject=Projeto%20Corporativo%20%C2%B7%20Gest%C3%A3o%20de%20Contas%20e%20Acesso",
  },
  {
    id: "mentoria",
    icon: TrendingUp,
    kicker: "Pilar 02 · Carreira",
    title: "Mentoria de Carreira",
    desc: "Para o profissional ativo que quer acelerar até Key Account Management — e para quem busca transição ou recolocação com método.",
    bullets: [
      "Aceleração de carreira e trilha para KAM",
      "Recolocação acelerada com plano semanal",
      "Branding executivo e posicionamento no LinkedIn",
      "Simulações de entrevista, GD e Business Case",
    ],
    cta: "Conhecer a mentoria",
    to: "/app/ecossistema" as const,
  },
  {
    id: "cursos",
    icon: GraduationCap,
    kicker: "Pilar 03 · Formação",
    title: "Cursos Online",
    desc: "Formações práticas e capacitações estratégicas, construídas a partir da operação real da Indústria Farmacêutica.",
    bullets: [
      "O Retorno Pharma — formação de recolocação",
      "A Chave da Indústria — acesso e jargão do setor",
      "IMPACTA 10X — performance comercial",
      "Certificados, ementas completas e acesso vitalício",
    ],
    cta: "Explorar cursos",
    to: "/app/ecossistema" as const,
  },
  {
    id: "palestras",
    icon: Mic,
    kicker: "Pilar 04 · Eventos",
    title: "Palestras Corporativas",
    desc: "A palestra magna INABALÁVEL: A Ciência do Valor Inegociável — 45 a 60 minutos para empresas, convenções e congressos.",
    bullets: [
      "Convenções de força de vendas e kick-offs",
      "Congressos como SOBRAFO e SBOC",
      "Formato online, presencial ou híbrido",
      "Conteúdo adaptado a RH, comercial e liderança",
    ],
    cta: "Solicitar proposta",
    href: "mailto:contato@institutoschonhardt.com.br?subject=Proposta%20%C2%B7%20Palestra%20INABAL%C3%81VEL",
  },
];

const trilha = [
  {
    letter: "T",
    word: "Tecnologia",
    desc: "Dominar ferramentas, automações e inteligência artificial para otimizar processos e alavancar a performance estratégica.",
  },
  {
    letter: "R",
    word: "Relevância",
    desc: "Construir autoridade inegociável e valor percebido de alto impacto no mercado corporativo e farmacêutico.",
  },
  {
    letter: "I",
    word: "Intencionalidade",
    desc: "Direcionar cada movimento profissional com foco cirúrgico, clareza de propósito e planejamento rigoroso.",
  },
  {
    letter: "L",
    word: "Liberdade",
    desc: "Conquistar autonomia, flexibilidade de carreira e poder de decisão sobre o próprio futuro profissional.",
  },
  {
    letter: "H",
    word: "Habilidades",
    desc: "Aprimorar competências técnicas e comportamentais avançadas indispensáveis para a alta gestão.",
  },
  {
    letter: "A",
    word: "Arquitetura",
    desc: "Conhecer profundamente o ecossistema de negócios, as redes de influência e a estrutura de mercado.",
  },
];

const testimonials = [
  {
    quote:
      "Mesmo com 24 anos de bagagem na indústria farmacêutica, a mentoria do João Cláudio foi o divisor de águas que recalibrou o meu posicionamento de mercado. Ele tem a habilidade rara de nos tirar do nível operacional e nos elevar para a Inteligência de Ecossistema. É um mentor estratégico indispensável para quem busca o topo no mercado de alta complexidade.",
    name: "Gleison Costa de Sousa",
    role: "Consultor Sênior de Acesso ao Mercado | Market Access | Oncologia & Hospitalar | KAM",
    tag: "Mentoria",
  },
  {
    quote:
      "O que diferencia o João de qualquer outro mentor no mercado é a forma como ele transforma problemas complexos em estratégias elegantes e cirúrgicas. Ele é o mentor ideal para quem quer parar de 'tirar pedidos' e passar a construir valor real.",
    name: "Diego Marley de Oliveira",
    role: "Propagandista Pleno Eurofarma | Onco-Hematologia & Linhas Especiais | Acesso e SFE",
    tag: "Alta performance",
  },
  {
    quote:
      "Sua capacidade de conectar estratégia, mercado farmacêutico, inovação, tecnologia e desenvolvimento humano é algo raro. Sua mentoria revolucionou minha visão sobre posicionamento profissional, branding, relacionamento executivo e construção de carreira de alto impacto.",
    name: "Bruno Carvalho",
    role: "Product Manager | Product Owner | Business Analyst | B2B2C SaaS",
    tag: "Transição",
  },
  {
    quote:
      "Fui cliente do João Schonhardt em sua empresa de mentoria e estratégia de carreira. Me ajudou a estruturar melhor o meu perfil, me fez enxergar e compreender nuances de estratégias de mercado, abrindo novos focos e targets em minha carreira.",
    name: "Glauco Aragão",
    role: "Gerente de Market Access | KAM Sênior | Alta Complexidade & Doenças Raras",
    tag: "Posicionamento",
  },
  {
    quote:
      "Obrigado João, pela mentoria incrível sobre recolocação no mercado de trabalho da indústria farmacêutica! Suas dicas e insights sobre networking e atualização profissional foram fundamentais para mim e para meu retorno ao campo.",
    name: "Alex Bezerra",
    role: "Consultor Hospitalar | Key Account Management | Representante Farmacêutico",
    tag: "Recolocação",
  },
  {
    quote:
      "Grande profissional, incansável no que faz e sempre com propósito de ajudar o paciente, os médicos e também seus pares. Buscou mostrar suas habilidades técnicas para sempre entregar seu melhor.",
    name: "Adalberto Coutinho",
    role: "Market Access | Oncologia, Hematologia e Doenças Raras | KAM | Pagadores Público e Privado",
    tag: "Corporativo",
  },
  {
    quote:
      "João é um profissional dedicado, que mantém ótimo relacionamento com seus clientes e colegas de equipe. Sua capacidade de análise crítica, gestão de contas e soluções inovadoras para o negócio com certeza são suas fortalezas.",
    name: "Fabio Toyoshima",
    role: "Indústria Farmacêutica | Gestão de Contas",
    tag: "Liderança",
  },
  {
    quote:
      "O João é um profissional inovador, tem ideias de fácil execução que facilita muito o trabalho em equipe. Engajado e estratégico, é um profissional muito bom em se ter por perto para contribuir com o dia a dia no campo.",
    name: "Marcela Rezende",
    role: "Executiva de Parcerias Estratégicas | Doenças Raras | Imunologia | Acesso ao Mercado",
    tag: "Estratégia",
  },
  {
    quote:
      "João é um profissional do mais alto nível, competente, dedicado e com um grande espírito de equipe que transcende o próprio grupo a que ele está inserido.",
    name: "Sandro Tolotti Monte Maior",
    role: "Consultor de Vendas | Indústria Farmacêutica | Key Account Manager (KAM)",
    tag: "Excelência",
  },
];


function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO */}
      <section className="relative min-h-[100vh] bg-hero overflow-hidden">
        <div
          className="absolute inset-0 opacity-25 mix-blend-overlay bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/75 to-primary" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-6 pt-40 pb-24 min-h-[100vh] flex flex-col justify-center">
          <div className="max-w-4xl text-background">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold mb-8">
              <ShieldCheck className="h-3.5 w-3.5" strokeWidth={1.8} />
              Instituto Schonhardt · Mundo Inabalável
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[1.04] text-balance">
              Autoridade, acesso e{" "}
              <span className="italic text-gold">alta performance</span> na Indústria Farmacêutica.
            </h1>
            <p className="mt-8 max-w-2xl text-base md:text-lg text-background/80 leading-relaxed">
              28 anos de operação real em multinacionais, traduzidos na metodologia{" "}
              <span className="text-gold">T.R.I.L.H.A.</span> — para o profissional ativo que quer acelerar até
              Key Account Management e para quem busca transição ou recolocação com método, não com sorte.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
              <a
                href="#pilares"
                className="group inline-flex items-center justify-center gap-3 rounded-sm bg-gold-gradient px-7 py-4 text-sm font-medium text-primary shadow-gold hover:opacity-95 transition-all duration-300"
              >
                Explorar Soluções Corporativas e Mentoria
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#cursos"
                className="group inline-flex items-center justify-center gap-3 rounded-sm border border-background/25 bg-background/5 px-7 py-4 text-sm text-background backdrop-blur hover:border-gold hover:text-gold transition-all duration-300"
              >
                Conhecer Cursos e Palestras
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl">
              {[
                { n: "28 anos", l: "De campo na Farma" },
                { n: "+10 mil", l: "Conexões ativas no LinkedIn" },
                { n: "+200", l: "Profissionais recolocados" },
                { n: "4 pilares", l: "Corporativo · Carreira · Cursos · Palestras" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-2xl md:text-3xl text-gold">{s.n}</div>
                  <div className="text-xs uppercase tracking-wider text-background/60 mt-1 leading-relaxed">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section id="pilares" className="bg-background py-24 md:py-32 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs uppercase tracking-[0.25em] text-royal mb-4">Os quatro pilares</div>
          <h2 className="font-display text-3xl md:text-5xl text-foreground text-balance max-w-3xl">
            Um instituto, quatro frentes de{" "}
            <span className="italic text-royal">geração de valor</span>.
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Empresas contratam estratégia de acesso e palestras. Profissionais contratam mentoria e formação.
            Todos entram pela mesma doutrina.
          </p>

          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {pillars.map(({ id, icon: Icon, kicker, title, desc, bullets, cta, href, to }) => (
              <article
                key={id}
                id={id}
                className="group relative flex flex-col rounded-lg border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:shadow-gold scroll-mt-24"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="h-12 w-12 rounded-sm bg-royal/10 grid place-items-center transition-colors duration-500 group-hover:bg-gold/15">
                    <Icon className="h-6 w-6 text-royal transition-colors duration-500 group-hover:text-gold" strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{kicker}</span>
                </div>

                <h3 className="font-display text-2xl text-foreground mt-6">{title}</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{desc}</p>

                <ul className="mt-6 space-y-2.5 flex-1">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-[13px] text-muted-foreground">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                      <span className="leading-snug">{b}</span>
                    </li>
                  ))}
                </ul>

                {to ? (
                  <Link
                    to={to}
                    className="mt-7 inline-flex items-center gap-2 text-sm text-royal transition-colors group-hover:text-gold"
                  >
                    {cta} <ArrowUpRight className="h-4 w-4" />
                  </Link>
                ) : (
                  <a
                    href={href}
                    className="mt-7 inline-flex items-center gap-2 text-sm text-royal transition-colors group-hover:text-gold"
                  >
                    {cta} <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AUTORIDADE / SOBRE */}
      <section id="sobre" className="relative overflow-hidden bg-primary text-background py-24 md:py-32 scroll-mt-24">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: `url(${heroImg})` }} aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-[0.25em] text-gold mb-5">Quem comanda o Instituto</div>
            <h2 className="font-display text-3xl md:text-5xl text-balance">
              Estratégia de mercado, liderança executiva e{" "}
              <span className="italic text-gold">desenvolvimento humano</span>.
            </h2>
            <p className="mt-7 text-base md:text-lg text-background/80 max-w-2xl leading-relaxed">
              João Schonhardt construiu 28 anos de carreira dentro da Indústria Farmacêutica, de campo a
              Key Account Management em multinacionais globais — negociando hospitais, payers e portfólios de
              alta complexidade. O Instituto nasceu para transferir esse repertório: para empresas que precisam
              de acesso e execução, e para profissionais que precisam de método e postura executiva.
            </p>

            <div className="mt-10 grid sm:grid-cols-3 gap-6 max-w-2xl">
              {[
                { icon: Stethoscope, n: "Diagnóstico", l: "Onde a conta ou a carreira trava" },
                { icon: Fingerprint, n: "Branding", l: "Autoridade e posicionamento" },
                { icon: Dumbbell, n: "Treinamento", l: "Execução até virar reflexo" },
              ].map(({ icon: Icon, n, l }) => (
                <div key={n} className="border-l-2 border-gold/40 pl-4">
                  <Icon className="h-5 w-5 text-gold mb-2" strokeWidth={1.5} />
                  <div className="font-display text-lg text-gold">{n}</div>
                  <div className="text-xs uppercase tracking-wider text-background/60 mt-1 leading-relaxed">{l}</div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <div className="flex items-center gap-3 mb-6">
                <Compass className="h-5 w-5 text-gold" strokeWidth={1.5} />
                <div className="text-xs uppercase tracking-[0.25em] text-gold">A Doutrina T.R.I.L.H.A.</div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {trilha.map(({ letter, word, desc }) => (
                  <div
                    key={letter}
                    className="rounded-lg border border-background/10 bg-background/5 p-5 transition-colors duration-300 hover:border-gold/40"
                  >
                    <div className="font-display text-3xl text-gold">{letter}</div>
                    <div className="font-display text-sm text-background mt-1">{word}</div>
                    <div className="text-xs text-background/60 mt-2 leading-relaxed">{desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-3 border border-gold/40 rounded-sm translate-x-4 translate-y-4" aria-hidden />
              <div className="relative overflow-hidden rounded-sm shadow-2xl">
                <img
                  src={joaoAsset.url}
                  alt="João Schonhardt — fundador do Instituto Schonhardt e Key Account Manager na Indústria Farmacêutica"
                  className="w-full h-auto object-cover grayscale contrast-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/10 to-transparent" aria-hidden />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-gold mb-2">Fundador</div>
                  <div className="font-display text-2xl text-background leading-tight">João Schonhardt</div>
                  <div className="text-xs text-background/70 mt-1">KAM Sênior · Palestrante · Mentor executivo</div>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 h-20 w-20 rounded-full bg-gold-gradient grid place-items-center text-primary shadow-gold rotate-[-8deg]">
                <div className="text-center leading-tight">
                  <div className="font-display text-xl font-bold">28</div>
                  <div className="text-[8px] uppercase tracking-wider">anos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="resultados" className="bg-background py-24 md:py-32 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs uppercase tracking-[0.25em] text-royal mb-4">Prova social</div>
          <h2 className="font-display text-3xl md:text-5xl text-foreground text-balance max-w-3xl">
            Profissionais recolocados, gestores promovidos e{" "}
            <span className="italic text-royal">empresas impactadas</span>.
          </h2>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col rounded-lg border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold/60"
              >
                <div className="flex items-center justify-between">
                  <Quote className="h-6 w-6 text-gold" strokeWidth={1.6} />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-royal">{t.tag}</span>
                </div>
                <blockquote className="mt-6 flex-1 text-sm text-muted-foreground leading-relaxed">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 pt-5 border-t border-border">
                  <div className="font-display text-base text-foreground">{t.name}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="mt-8 text-xs text-muted-foreground">
            Casos reais com identidades preservadas. Depoimentos nominais e vídeos podem ser publicados nesta seção.
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="cursos" className="bg-royal-gradient text-background py-24 md:py-32 scroll-mt-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="text-xs uppercase tracking-[0.25em] text-gold mb-6">Próximo passo</div>
          <h2 className="font-display text-3xl md:text-6xl text-balance">
            Escolha por onde você entra no{" "}
            <span className="italic text-gold">Mundo Inabalável</span>.
          </h2>
          <p className="mt-8 text-base md:text-lg text-background/85 max-w-2xl mx-auto leading-relaxed">
            Cursos e mentoria ficam na plataforma do mentorado. Projetos corporativos, palestras e congressos
            passam por briefing e proposta sob medida.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/app/ecossistema"
              className="inline-flex items-center gap-3 rounded-sm bg-gold-gradient px-8 py-4 text-sm font-medium text-primary shadow-gold hover:opacity-95 transition-all duration-300"
            >
              Ver cursos, mentoria e palestras <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a
              href="mailto:contato@institutoschonhardt.com.br?subject=Contrato%20Corporativo%20%C2%B7%20Instituto%20Schonhardt"
              className="inline-flex items-center gap-3 rounded-sm border border-background/25 bg-background/5 px-8 py-4 text-sm text-background hover:border-gold hover:text-gold transition-all duration-300"
            >
              Canal corporativo <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* RODAPÉ INSTITUCIONAL */}
      <footer id="contato" className="bg-primary text-primary-foreground py-16 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-4 gap-10">
          <div>
            <div className="font-display text-2xl text-gold">Schonhardt</div>
            <p className="text-sm text-primary-foreground/70 mt-3 max-w-xs leading-relaxed">
              Instituto de Negócios. Estratégia de acesso, liderança executiva e desenvolvimento humano na
              Indústria Farmacêutica.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/joaoschonhardt", label: "LinkedIn" },
                { icon: Instagram, href: "https://www.instagram.com/", label: "Instagram" },
                { icon: Youtube, href: "https://www.youtube.com/", label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="h-9 w-9 grid place-items-center rounded-sm border border-primary-foreground/15 text-primary-foreground/70 hover:border-gold hover:text-gold transition-colors duration-300"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.7} />
                </a>
              ))}
            </div>
          </div>

          <div className="text-sm space-y-2 text-primary-foreground/80">
            <div className="text-gold uppercase text-xs tracking-wider mb-3">Soluções</div>
            <a href="#acesso" className="block hover:text-gold transition-colors">Gestão de Contas e Acesso</a>
            <a href="#mentoria" className="block hover:text-gold transition-colors">Mentoria de Carreira</a>
            <a href="#cursos" className="block hover:text-gold transition-colors">Cursos Online</a>
            <a href="#palestras" className="block hover:text-gold transition-colors">Palestras Corporativas</a>
          </div>

          <div className="text-sm space-y-2 text-primary-foreground/80">
            <div className="text-gold uppercase text-xs tracking-wider mb-3">Institucional</div>
            <a href="#sobre" className="block hover:text-gold transition-colors">Sobre o fundador</a>
            <a href="#resultados" className="block hover:text-gold transition-colors">Casos de sucesso</a>
            <Link to="/app/ecossistema" className="block hover:text-gold transition-colors">Ecossistema</Link>
            <Link to="/app" className="block hover:text-gold transition-colors">Área do mentorado</Link>
          </div>

          <div className="text-sm space-y-3 text-primary-foreground/80">
            <div className="text-gold uppercase text-xs tracking-wider mb-3">Contratos corporativos</div>
            <a
              href="mailto:contato@institutoschonhardt.com.br"
              className="flex items-center gap-2 hover:text-gold transition-colors"
            >
              <Mail className="h-4 w-4" strokeWidth={1.7} /> contato@institutoschonhardt.com.br
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" strokeWidth={1.7} /> São Paulo · Brasil
            </div>
            <a
              href="mailto:contato@institutoschonhardt.com.br?subject=Briefing%20%C2%B7%20Palestra%20ou%20Projeto%20Corporativo"
              className="inline-flex items-center gap-2 mt-2 rounded-sm border border-gold/40 bg-gold/10 px-4 py-2.5 text-xs uppercase tracking-wider text-gold hover:bg-gold hover:text-primary transition-colors duration-300"
            >
              Enviar briefing <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
        <div className="mt-12 text-center text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Instituto Schonhardt de Negócios · Mundo Inabalável
        </div>
      </footer>
    </div>
  );
}
