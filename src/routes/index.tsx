import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import heroImg from "@/assets/hero.jpg";
import joaoAsset from "@/assets/joao-schonhardt.png.asset.json";
import { ArrowUpRight, ShieldCheck, KeyRound, Users2, Target, XCircle, CheckCircle2, Stethoscope, Fingerprint, Dumbbell, Compass, RefreshCw, Network, Linkedin, BadgeCheck, Rocket } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Instituto Schonhardt — Entre na Indústria Farmacêutica sem depender de QI" },
      { name: "description", content: "O método para profissionais invisíveis ao Gupy entrarem na Indústria Farmacêutica. 28 anos de mercado, cargo de KAM, comunidade de elite e o código que ninguém te conta." },
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
              28 anos de estrada. KAM em multinacionais. E vou te entregar o código.
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

            <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-2xl">
              {[
                { n: "28 anos", l: "De campo na Farma" },
                { n: "+10 mil", l: "Conexões ativas no LinkedIn" },
                { n: "+200", l: "Mentorados recolocados" },
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
              28 anos dentro da Indústria Farmacêutica. Passei por gigantes globais.
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

          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              {/* moldura dourada deslocada */}
              <div className="absolute -inset-3 border border-gold/40 rounded-sm translate-x-4 translate-y-4" aria-hidden />
              <div className="absolute -inset-3 bg-gold-gradient/10 rounded-sm -translate-x-3 -translate-y-3 opacity-30" aria-hidden />

              <div className="relative overflow-hidden rounded-sm shadow-2xl">
                <img
                  src={joaoAsset.url}
                  alt="João Schonhardt — KAM e mentor de carreira na Indústria Farmacêutica"
                  className="w-full h-auto object-cover grayscale contrast-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" aria-hidden />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-gold mb-2">Fundador</div>
                  <div className="font-display text-2xl text-background leading-tight">João Schonhardt</div>
                  <div className="text-xs text-background/70 mt-1">KAM Sênior · Mentor da Irmandade</div>
                </div>
              </div>

              {/* selo dourado */}
              <div className="absolute -top-4 -left-4 h-20 w-20 rounded-full bg-gold-gradient grid place-items-center text-primary shadow-gold rotate-[-8deg]">
                <div className="text-center leading-tight">
                  <div className="font-display text-xl font-bold">27</div>
                  <div className="text-[8px] uppercase tracking-wider">anos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MÉTODO */}
      <section className="bg-background py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs uppercase tracking-[0.25em] text-royal mb-4">O método ISN</div>
          <h2 className="font-display text-4xl md:text-5xl text-foreground text-balance max-w-3xl">
            Três etapas. Uma trilha. A mentalidade para você voltar a crescer na Indústria.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Diagnóstico, Branding e Treinamento. Cada fase desbloqueia a seguinte, até você sair de candidato invisível para talento disputado.
          </p>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Stethoscope,
                step: "01",
                t: "Diagnóstico",
                d: "Mapeamos onde você trava: currículo, LinkedIn, entrevista, Business Case ou network. Nenhuma suposição — só o que o mercado realmente cobra.",
              },
              {
                icon: Fingerprint,
                step: "02",
                t: "Branding",
                d: "Reconstruímos sua identidade profissional para que recrutadores da Farma te encontrem, reconheçam e lembrem antes mesmo da vaga abrir.",
              },
              {
                icon: Dumbbell,
                step: "03",
                t: "Treinamento",
                d: "Você pratica o que importa: jargão, simulação, entrevista com GD/Regional e postura KAM. Até virar reflexo.",
              },
            ].map(({ icon: Icon, step, t, d }) => (
              <div key={t} className="group bg-card border border-border rounded-lg p-8 hover:bg-primary hover:text-primary-foreground transition-colors duration-500">
                <div className="flex items-center justify-between mb-6">
                  <Icon className="h-7 w-7 text-royal group-hover:text-gold transition-colors" strokeWidth={1.5} />
                  <span className="font-display text-3xl text-royal/30 group-hover:text-gold/40 transition-colors">{step}</span>
                </div>
                <h3 className="font-display text-2xl">{t}</h3>
                <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80 mt-3 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <div className="flex items-center gap-3 mb-8">
              <Compass className="h-5 w-5 text-gold" strokeWidth={1.5} />
              <div className="text-xs uppercase tracking-[0.25em] text-gold">A mentalidade TRILHA</div>
            </div>
            <p className="text-sm text-muted-foreground max-w-2xl mb-10 leading-relaxed">
              O acrônimo que guia cada mentorado do diagnóstico à contratação. Não é teoria — é o caminho que já recolocou centenas de profissionais na Farma.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { letter: "T", word: "Transformação", desc: "Mudar de "eu preciso de uma vaga" para "eu sou a solução da vaga"." },
                { letter: "R", word: "Reputação", desc: "Construir uma marca digital que recrutadores da Farma confiem e lembrem." },
                { letter: "I", word: "Influência", desc: "Fazer parte do network certo, sem depender de QI ou indicação." },
                { letter: "L", word: "LinkedIn", desc: "Usar a plataforma como máquina de oportunidades, não cartão de visitas." },
                { letter: "H", word: "Habilidades", desc: "Dominar o jargão, o Business Case e a simulação como quem já é de dentro." },
                { letter: "A", word: "Ação", desc: "Aplicar tudo no mercado real, com direcionamento e accountability." },
              ].map(({ letter, word, desc }) => (
                <div key={letter} className="bg-royal/5 border border-royal/10 rounded-lg p-5 hover:bg-royal/10 transition-colors">
                  <div className="font-display text-4xl text-royal mb-2">{letter}</div>
                  <div className="font-display text-sm text-foreground mb-2">{word}</div>
                  <div className="text-xs text-muted-foreground leading-relaxed">{desc}</div>
                </div>
              ))}
            </div>
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
