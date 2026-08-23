import { createFileRoute, Link } from "@tanstack/react-router";
import { Play, ArrowRight, Sparkles, Target, Fingerprint, Dumbbell, Compass, Rocket } from "lucide-react";
import joaoAsset from "@/assets/joao-schonhardt.png.asset.json";

export const Route = createFileRoute("/_authenticated/app/boas-vindas")({
  head: () => ({
    meta: [
      { title: "Bem-vindo à Irmandade · Instituto Schonhardt" },
      { name: "description", content: "Sua transformação começa aqui. Bem-vindo ao método que vai recolocar você na Indústria Farmacêutica." },
    ],
  }),
  component: WelcomePage,
});

function WelcomePage() {
  return (
    <div className="min-h-full bg-sidebar text-sidebar-foreground">
      {/* Hero de boas-vindas */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, var(--gold) 0, transparent 40%), radial-gradient(circle at 80% 70%, var(--royal) 0, transparent 50%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sidebar via-sidebar/95 to-sidebar" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold mb-8">
              <Sparkles className="h-3.5 w-3.5" /> Você deu o primeiro passo
            </div>

            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-balance">
              Bem-vindo à <span className="italic text-gold">Irmandade.</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-sidebar-foreground/80 leading-relaxed max-w-2xl mx-auto">
              A partir de agora, você não está mais sozinho. Aqui existe um método, uma trilha e um código — e a sua transformação começa exatamente <strong className="text-gold">agora</strong>.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/app/aulas/$courseId"
                params={{ courseId: "retorno-memoravel" }}
                className="group inline-flex items-center gap-3 rounded-sm bg-gold-gradient px-7 py-4 text-sm font-medium text-primary shadow-gold hover:opacity-95 transition"
              >
                <Play className="h-4 w-4 fill-current" />
                Começar minha transformação
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to="/app"
                className="inline-flex items-center gap-2 px-6 py-4 text-sm text-sidebar-foreground/80 hover:text-gold transition-colors"
              >
                Explorar a vitrine primeiro
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Citação do expert */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-10 pb-20">
        <div className="relative overflow-hidden rounded-lg border border-sidebar-border bg-card/40 p-8 md:p-12">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 h-40 w-40 rounded-full bg-gold/10 blur-3xl" />
          <div className="grid md:grid-cols-[180px_1fr] gap-8 items-center">
            <div className="relative mx-auto md:mx-0">
              <div className="absolute inset-0 rounded-full bg-gold-gradient blur opacity-40 scale-110" />
              <img
                src={joaoAsset.url}
                alt="João Schonhardt"
                className="relative h-40 w-40 md:h-44 md:w-44 rounded-full object-cover border-2 border-gold/40 shadow-2xl"
              />
              <div className="absolute -bottom-2 -right-2 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary shadow">
                28 anos
              </div>
            </div>
            <div>
              <blockquote className="font-display text-2xl md:text-3xl leading-snug text-sidebar-foreground text-balance">
                "A Indústria Farmacêutica não contrata quem tem mais histórico. Ela contrata quem sabe <span className="italic text-gold">se vender</span> como solução."
              </blockquote>
              <div className="mt-5 text-sm text-sidebar-foreground/70">
                <strong className="text-sidebar-foreground">João Schonhardt</strong> · KAM, mentor e fundador do Instituto Schonhardt
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A trilha */}
      <section className="bg-primary/20 border-y border-sidebar-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs uppercase tracking-[0.25em] text-gold mb-3">Sua trilha</div>
            <h2 className="font-display text-3xl md:text-4xl text-sidebar-foreground">
              A transformação acontece em <span className="italic text-gold">6 passos</span>
            </h2>
            <p className="mt-4 text-sidebar-foreground/70">
              O método TRILHA foi desenvolvido para criar a mentalidade necessária para você crescer — ou retornar — ao mercado de trabalho na Farma.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Target, t: "T — Transformação", d: "Reconstruir a identidade de quem está pronto para a Farma." },
              { icon: Fingerprint, t: "R — Reputação", d: "Construir uma marca pessoal que o mercado reconhece." },
              { icon: Compass, t: "I — Influência", d: "Aprender a se posicionar e ser procurado pelas empresas." },
              { icon: UsersIcon, t: "L — LinkedIn", d: "Transformar o perfil em um ímã de oportunidades." },
              { icon: Dumbbell, t: "H — Habilidades", d: "Dominar entrevistas, business cases e simulações." },
              { icon: Rocket, t: "A — Ação", d: "Executar o plano de recolocação com estratégia e disciplina." },
            ].map((step, i) => (
              <div
                key={step.t}
                className="group relative rounded-md border border-sidebar-border bg-sidebar p-6 hover:border-gold/40 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-gold/10 text-gold">
                    <step.icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-gold/70 mb-1">Passo {i + 1}</div>
                    <h3 className="font-display text-lg text-sidebar-foreground mb-2">{step.t}</h3>
                    <p className="text-sm text-sidebar-foreground/60 leading-relaxed">{step.d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28 text-center">
        <h2 className="font-display text-3xl md:text-5xl text-sidebar-foreground text-balance">
          O código existe. <span className="italic text-gold">Agora é com você.</span>
        </h2>
        <p className="mt-5 text-sidebar-foreground/70 max-w-2xl mx-auto">
          Clique no botão abaixo e comece o primeiro módulo do curso <strong>Retorno Memorável</strong>. Sua primeira aula já está liberada.
        </p>
        <div className="mt-10">
          <Link
            to="/app/aulas/$courseId"
            params={{ courseId: "retorno-memoravel" }}
            className="group inline-flex items-center gap-3 rounded-sm bg-gold-gradient px-8 py-4 text-sm font-medium text-primary shadow-gold hover:opacity-95 transition"
          >
            <Play className="h-4 w-4 fill-current" />
            Iniciar Retorno Memorável
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
