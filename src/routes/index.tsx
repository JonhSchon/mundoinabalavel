import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import heroImg from "@/assets/hero.jpg";
import { ArrowUpRight, ShieldCheck, KeyRound, Users2, Target, XCircle, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Instituto Schonhardt — Entre na Indústria Farmacêutica sem depender de QI" },
      { name: "description", content: "O método para profissionais invisíveis ao Gupy entrarem na Indústria Farmacêutica. 27 anos de mercado, cargo de KAM, comunidade de elite e o código que ninguém te conta." },
      { property: "og:title", content: "Instituto Schonhardt de Negócios" },
      { property: "og:description", content: "Pare de ser triturado pelo ATS. Entre na Farma pela porta dos talentos prontos." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO */}
      <section className="relative min-h-[100vh] bg-hero overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 mix-blend-overlay bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/60 to-primary" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-6 pt-40 pb-24 grid lg:grid-cols-12 gap-12 items-center min-h-[100vh]">
          <div className="lg:col-span-8 text-background">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Para quem o Gupy ignora — e a Indústria contrata
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] text-balance">
              Você não é desempregado.<br />
              Você é um <span className="italic text-gold">talento pronto</span><br />
              que ainda não tem <span className="italic">o código.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-background/75 leading-relaxed">
              A mentira é que "na Indústria Farmacêutica só entra quem tem QI".
              A verdade é que existe um método — e quem o domina vira KAM, ganha carro,
              PLR agressiva e nome disputado pelos concorrentes. Eu sou João Schonhardt.
              27 anos de estrada. KAM em multinacionais. E vou te entregar o código.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/app"
                className="group inline-flex items-center gap-3 rounded-sm bg-gold-gradient px-7 py-4 text-sm font-medium text-primary shadow-gold hover:opacity-95 transition"
              >
                Quero entrar na Irmandade
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <a
                href="#dores"
                className="inline-flex items-center gap-2 px-6 py-4 text-sm text-background/80 hover:text-gold transition-colors"
              >
                Isto é para mim? →
              </a>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl">
              {[
                { n: "27 anos", l: "De campo na Farma" },
                { n: "+1.200", l: "Mentorados recolocados" },
                { n: "92%", l: "Aprovados em 12 meses" },
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

      {/* DORES — Você se reconhece? */}
      <section id="dores" className="bg-background py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs uppercase tracking-[0.25em] text-royal mb-4">Você se reconhece?</div>
          <h2 className="font-display text-4xl md:text-5xl text-foreground text-balance max-w-3xl">
            Se você sente isso há meses, <span className="italic text-royal">não é incompetência sua.</span> É falta de método.
          </h2>

          <div className="mt-16 grid md:grid-cols-2 gap-px bg-border rounded-lg overflow-hidden border border-border">
            {[
              { t: "O robô do Gupy te tritura", d: "Você manda 30 currículos por semana e nenhum ser humano lê o seu nome. Você se sente invisível porque, tecnicamente, você é." },
              { t: 'A lenda do "QI" (Quem Indique)', d: "Te disseram que só entra na Farma quem tem padrinho. É mentira. Mas enquanto você acreditar, vai continuar de fora — e revoltado." },
              { t: "Você não fala o idioma do setor", d: "DDD, PMB, Close-up, Grelha, Visitação, Share. Quando você lê uma vaga ou conversa com alguém da área, sente que está num clube sem saber a senha." },
              { t: "Pavor do Business Case e da simulação", d: "Se um Gerente Distrital te chama amanhã pra simular uma propaganda médica, você sabe que vai travar. E sabe que essa é a fase eliminatória." },
              { t: "Já comprou curso genérico de LinkedIn", d: 'Mentor de RH que nunca pisou num hospital, "coach de carreira" que fala bonito. Você está cansado de história e quer quem assina as promoções.' },
              { t: "Vê colegas medianos sendo contratados", d: "E você, melhor preparado, fica de fora. Não é injustiça do universo. É que eles aprenderam a abrir a fechadura — e você não." },
            ].map((p) => (
              <div key={p.t} className="bg-card p-8">
                <XCircle className="h-6 w-6 text-destructive/80" strokeWidth={1.6} />
                <h3 className="font-display text-xl mt-5 text-foreground">{p.t}</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUTORIDADE */}
      <section className="bg-primary text-background py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: `url(${heroImg})` }} aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-[0.25em] text-gold mb-5">Quem está te chamando</div>
            <h2 className="font-display text-4xl md:text-5xl text-balance">
              Eu sou o cara que <span className="italic text-gold">assina as promoções</span> que você quer receber.
            </h2>
            <p className="mt-7 text-lg text-background/80 max-w-2xl leading-relaxed">
              27 anos dentro da Indústria Farmacêutica. Passei por gigantes globais.
              Cheguei a KAM — o cargo que negocia hospital, payer e oncologia de alta complexidade.
              Eu não te ensino teoria de RH. Eu te entrego o playbook que eu uso pra contratar.
            </p>
            <div className="mt-10 grid sm:grid-cols-3 gap-6 max-w-2xl">
              {[
                { n: "KAM Sênior", l: "Multinacional global" },
                { n: "B2B / IA", l: "Brasil · LATAM · EMEA" },
                { n: "Mentor", l: "De recolocados em Farma" },
              ].map((s) => (
                <div key={s.l} className="border-l-2 border-gold/40 pl-4">
                  <div className="font-display text-xl text-gold">{s.n}</div>
                  <div className="text-xs uppercase tracking-wider text-background/60 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MÉTODO */}
      <section className="bg-background py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs uppercase tracking-[0.25em] text-royal mb-4">O método ISN</div>
          <h2 className="font-display text-4xl md:text-5xl text-foreground text-balance max-w-3xl">
            Quatro chaves para você <span className="italic text-royal">abrir a fechadura</span> da Indústria.
          </h2>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-lg overflow-hidden border border-border">
            {[
              { icon: KeyRound, t: "O Código", d: "Vocabulário, fluxos e métricas da Farma. Você para de ser estrangeiro e passa a falar como quem já é de dentro." },
              { icon: Target, t: "O Algoritmo", d: 'Como driblar o ATS, reposicionar seu LinkedIn e fazer a vaga vir até você. Sem depender de "QI".' },
              { icon: ShieldCheck, t: "A Blindagem", d: "Business Case, simulação de propaganda médica e entrevista com GD/Regional treinados até virarem reflexo." },
              { icon: Users2, t: "A Irmandade", d: "Comunidade fechada de mentorados, vagas privilegiadas e um exército que avisa, indica e empurra você pra cima." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="group bg-card p-8 hover:bg-primary hover:text-primary-foreground transition-colors duration-500">
                <Icon className="h-7 w-7 text-royal group-hover:text-gold transition-colors" strokeWidth={1.5} />
                <h3 className="font-display text-2xl mt-6">{t}</h3>
                <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80 mt-3 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSFORMAÇÃO antes/depois */}
      <section className="bg-sidebar text-sidebar-foreground py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs uppercase tracking-[0.25em] text-gold mb-4">O que muda na sua vida</div>
          <h2 className="font-display text-4xl md:text-5xl text-balance max-w-3xl">
            De candidato invisível a <span className="italic text-gold">nome disputado</span> pelos concorrentes.
          </h2>

          <div className="mt-16 grid md:grid-cols-2 gap-10">
            <div className="bg-background/5 border border-sidebar-border rounded-lg p-8">
              <div className="text-xs uppercase tracking-wider text-destructive/80 mb-5">Antes</div>
              <ul className="space-y-4 text-sm text-sidebar-foreground/80">
                {[
                  "Currículo eliminado pelo ATS sem ninguém ler",
                  "Pavor de simulação de propaganda médica",
                  "Salário, sem carro, sem PLR, sem plano top",
                  "Família duvidando da sua escolha de carreira",
                  "Vendo colegas mais fracos sendo contratados",
                ].map((i) => (
                  <li key={i} className="flex gap-3"><XCircle className="h-4 w-4 mt-0.5 text-destructive/70 shrink-0" />{i}</li>
                ))}
              </ul>
            </div>
            <div className="bg-gold/5 border border-gold/30 rounded-lg p-8">
              <div className="text-xs uppercase tracking-wider text-gold mb-5">Depois do ISN</div>
              <ul className="space-y-4 text-sm text-sidebar-foreground">
                {[
                  "Recrutador da multinacional te chamando no LinkedIn",
                  "Business Case fechado com a postura de quem já é KAM",
                  "Pacote Farma completo: carro, combustível, PLR, previdência",
                  'Família contando com orgulho que você é "Representante de Alta Complexidade"',
                  "Concorrentes te disputando — você escolhe o crachá",
                ].map((i) => (
                  <li key={i} className="flex gap-3"><CheckCircle2 className="h-4 w-4 mt-0.5 text-gold shrink-0" />{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="metodo" className="bg-royal-gradient text-background py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="text-xs uppercase tracking-[0.25em] text-gold mb-6">Última coisa</div>
          <h2 className="font-display text-4xl md:text-6xl text-balance">
            Você pode <span className="italic text-gold">esperar mais 6 meses</span> sendo ignorado pelo Gupy.
          </h2>
          <p className="mt-8 text-lg text-background/85 max-w-2xl mx-auto leading-relaxed">
            Ou pode entrar hoje na Irmandade, pegar o código e começar a jogar com
            quem já está dentro. A Indústria está contratando. A pergunta é se vai ser você.
          </p>
          <Link
            to="/app"
            className="mt-12 inline-flex items-center gap-3 rounded-sm bg-gold-gradient px-8 py-4 text-sm font-medium text-primary shadow-gold hover:opacity-95 transition"
          >
            Entrar na minha área agora <ArrowUpRight className="h-4 w-4" />
          </Link>
          <div className="mt-6 text-xs uppercase tracking-wider text-background/50">
            Vagas limitadas por turma · acesso direto a Schonhardt
          </div>
        </div>
      </section>

      <footer id="contato" className="bg-primary text-primary-foreground py-16">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-10">
          <div>
            <div className="font-display text-2xl text-gold">Schonhardt</div>
            <p className="text-sm text-primary-foreground/70 mt-3 max-w-xs">
              Instituto de Negócios. O método de quem está dentro, para quem quer entrar.
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
            <a href="#dores" className="block hover:text-gold">Isto é para mim?</a>
          </div>
        </div>
        <div className="mt-12 text-center text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Instituto Schonhardt de Negócios
        </div>
      </footer>
    </div>
  );
}
