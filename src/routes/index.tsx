import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import heroImg from "@/assets/hero.jpg";
import { ArrowUpRight, GraduationCap, Users, Mic, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Instituto Schonhardt de Negócios — Mentoria para líderes comerciais" },
      { name: "description", content: "Mentoria, cursos e palestras para profissionais comerciais da indústria farmacêutica e demais setores. Forme-se com método, comunidade e acesso direto a Schonhardt." },
      { property: "og:title", content: "Instituto Schonhardt de Negócios" },
      { property: "og:description", content: "Ecossistema de mentoria, cursos e palestras para carreiras comerciais de alto desempenho." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: LandingPage,
});

const ecosystem = [
  {
    icon: GraduationCap,
    title: "Cursos",
    desc: "Trilhas práticas de vendas consultivas, gestão comercial e negociação para o setor farma e além.",
  },
  {
    icon: Users,
    title: "Mentorias",
    desc: "Programas em grupo e 1:1 com acompanhamento direto. Diagnóstico, plano e execução com Schonhardt.",
  },
  {
    icon: Mic,
    title: "Palestras",
    desc: "Keynotes para times comerciais, convenções de vendas e eventos corporativos.",
  },
  {
    icon: Sparkles,
    title: "Comunidade",
    desc: "Rede curada de mentorados, encontros mensais e troca permanente entre líderes do mercado.",
  },
];

function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO */}
      <section className="relative min-h-[100vh] bg-hero overflow-hidden">
        <div
          className="absolute inset-0 opacity-40 mix-blend-overlay bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/95" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-6 pt-40 pb-24 grid lg:grid-cols-12 gap-12 items-center min-h-[100vh]">
          <div className="lg:col-span-7 text-background">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Mentoria executiva
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] text-balance">
              Forme-se para liderar o<br />
              <span className="italic text-gold">comercial farmacêutico</span><br />
              da próxima década.
            </h1>
            <p className="mt-8 max-w-xl text-lg text-background/75 leading-relaxed">
              O Instituto Schonhardt reúne cursos, mentorias e uma comunidade
              de profissionais de vendas, KAMs e gestores. Método, repertório e
              relacionamento — para você crescer onde a régua é alta.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/app"
                className="group inline-flex items-center gap-3 rounded-sm bg-gold-gradient px-7 py-4 text-sm font-medium text-primary shadow-gold hover:opacity-95 transition"
              >
                Entrar na minha área
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <a
                href="#ecossistema"
                className="inline-flex items-center gap-2 px-6 py-4 text-sm text-background/80 hover:text-gold transition-colors"
              >
                Conhecer o ecossistema →
              </a>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg">
              {[
                { n: "+1.200", l: "Mentorados formados" },
                { n: "18 anos", l: "No setor farmacêutico" },
                { n: "92%", l: "Promovidos em 12 meses" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl text-gold">{s.n}</div>
                  <div className="text-xs uppercase tracking-wider text-background/60 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ECOSSISTEMA */}
      <section id="ecossistema" className="relative bg-background py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-5">
              <div className="text-xs uppercase tracking-[0.25em] text-royal mb-4">O ecossistema</div>
              <h2 className="font-display text-4xl md:text-5xl text-foreground text-balance">
                Quatro frentes, <span className="italic text-royal">um único método.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 self-end">
              <p className="text-muted-foreground leading-relaxed">
                Do conteúdo gravado à mentoria 1:1, passando por palestras corporativas
                e uma comunidade ativa — tudo conectado numa jornada feita para resultado.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-lg overflow-hidden border border-border">
            {ecosystem.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group bg-card p-8 hover:bg-primary hover:text-primary-foreground transition-colors duration-500">
                <Icon className="h-7 w-7 text-royal group-hover:text-gold transition-colors" strokeWidth={1.5} />
                <h3 className="font-display text-2xl mt-6">{title}</h3>
                <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80 mt-3 leading-relaxed">
                  {desc}
                </p>
                <div className="mt-8 text-xs uppercase tracking-wider text-royal group-hover:text-gold flex items-center gap-1.5">
                  Conhecer <ArrowUpRight className="h-3 w-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MÉTODO / CTA */}
      <section id="metodo" className="bg-royal-gradient text-background py-32">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="text-xs uppercase tracking-[0.25em] text-gold mb-6">O método Schonhardt</div>
          <h2 className="font-display text-4xl md:text-6xl text-balance">
            Diagnóstico. <span className="italic text-gold">Repertório.</span> Execução.
          </h2>
          <p className="mt-8 text-lg text-background/80 max-w-2xl mx-auto leading-relaxed">
            Cada mentorado passa por um plano sob medida, com aulas gravadas,
            tarefas práticas, encontros ao vivo e acesso direto para pedidos e dúvidas.
          </p>
          <Link
            to="/app"
            className="mt-12 inline-flex items-center gap-3 rounded-sm bg-gold-gradient px-8 py-4 text-sm font-medium text-primary shadow-gold hover:opacity-95 transition"
          >
            Acessar a plataforma <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <footer id="contato" className="bg-primary text-primary-foreground py-16">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-10">
          <div>
            <div className="font-display text-2xl text-gold">Schonhardt</div>
            <p className="text-sm text-primary-foreground/70 mt-3 max-w-xs">
              Instituto de Negócios. Mentoria executiva para carreiras comerciais.
            </p>
          </div>
          <div className="text-sm space-y-2 text-primary-foreground/80">
            <div className="text-gold uppercase text-xs tracking-wider mb-3">Contato</div>
            <div>contato@institutoschonhardt.com.br</div>
            <div>São Paulo · Brasil</div>
          </div>
          <div className="text-sm space-y-2 text-primary-foreground/80">
            <div className="text-gold uppercase text-xs tracking-wider mb-3">Plataforma</div>
            <Link to="/app" className="block hover:text-gold">Área do mentorado</Link>
            <a href="#ecossistema" className="block hover:text-gold">Ecossistema</a>
          </div>
        </div>
        <div className="mt-12 text-center text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Instituto Schonhardt de Negócios
        </div>
      </footer>
    </div>
  );
}
