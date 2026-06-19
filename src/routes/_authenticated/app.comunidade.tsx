import { createFileRoute } from "@tanstack/react-router";
import { Heart, MessageCircle, Pin } from "lucide-react";

export const Route = createFileRoute("/app/comunidade")({
  component: ComunidadePage,
});

const posts = [
  {
    a: "Schonhardt", role: "Mentor · ISN", tag: "Vaga interna", pin: true,
    t: "🔓 Vaga oculta — KAM Oncologia / SP capital",
    c: "Multinacional top 5, pacote completo (carro + combustível + PLR agressiva). Não está no Gupy. Indicação direta minha. Quem topar entrevista esta semana comenta aqui que eu mando o briefing.",
    l: 87, m: 34, time: "1h",
  },
  {
    a: "Marina R.", role: "Em transição · ex-varejo", tag: "Dúvida",
    t: "Travei na simulação de propaganda médica — alguém topa treinar comigo?",
    c: "Marcaram pra quinta com o GD. Já estudei o material do módulo 03 mas quero rodar 2x antes. Procuro alguém da Irmandade pra simular por call hoje à noite.",
    l: 24, m: 18, time: "3h",
  },
  {
    a: "Bruno S.", role: "Novo KAM · multinacional", tag: "Vitória",
    t: "Assinei o crachá. 9 meses depois de entrar na Irmandade.",
    c: "Vim de seguros, zero rede em farma, achei que era impossível. Apliquei o método do Retorno Memorável, fiz o ritual do adeus, reescrevi o LinkedIn e o recrutador me chamou. Carro chega semana que vem. Obrigado, João.",
    l: 142, m: 56, time: "1d",
  },
];

function ComunidadePage() {
  return (
    <div className="px-6 lg:px-10 py-10 max-w-3xl">
      <div className="text-xs uppercase tracking-[0.25em] text-royal mb-3">A Irmandade</div>
      <h1 className="font-display text-4xl md:text-5xl text-foreground">Comunidade ISN</h1>
      <p className="mt-3 text-muted-foreground">Vagas privilegiadas, simulações entre pares e vitórias compartilhadas. Aqui ninguém joga sozinho.</p>

      <div className="mt-8 bg-card border border-border rounded-lg p-4 flex gap-3">
        <div className="h-10 w-10 rounded-full bg-royal-gradient grid place-items-center text-sm text-background">AC</div>
        <input
          placeholder="Compartilhe uma vitória, uma dúvida ou peça simulação..."
          className="flex-1 bg-transparent outline-none text-sm placeholder:text-muted-foreground"
        />
        <button className="bg-gold-gradient text-gold-foreground px-4 py-2 rounded-sm text-sm font-medium">Publicar</button>
      </div>

      <div className="mt-6 space-y-4">
        {posts.map((p) => (
          <article key={p.t} className="bg-card border border-border rounded-lg p-6 hover:border-gold/40 transition-colors">
            <header className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-royal-gradient grid place-items-center text-xs text-background">
                  {p.a.split(" ").map(s => s[0]).join("")}
                </div>
                <div>
                  <div className="text-sm text-foreground flex items-center gap-2">
                    {p.a}
                    {p.pin && <Pin className="h-3 w-3 text-gold" />}
                  </div>
                  <div className="text-xs text-muted-foreground">{p.role} · {p.time}</div>
                </div>
              </div>
              <span className="text-[10px] uppercase tracking-wider text-royal border border-royal/30 rounded-full px-2.5 py-0.5">
                {p.tag}
              </span>
            </header>
            <h3 className="font-display text-xl text-foreground mt-4">{p.t}</h3>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.c}</p>
            <footer className="mt-5 flex items-center gap-6 text-xs text-muted-foreground">
              <button className="flex items-center gap-1.5 hover:text-gold"><Heart className="h-4 w-4" /> {p.l}</button>
              <button className="flex items-center gap-1.5 hover:text-gold"><MessageCircle className="h-4 w-4" /> {p.m}</button>
            </footer>
          </article>
        ))}
      </div>
    </div>
  );
}
