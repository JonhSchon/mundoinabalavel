import { createFileRoute } from "@tanstack/react-router";
import { Heart, MessageCircle, Pin } from "lucide-react";

export const Route = createFileRoute("/app/comunidade")({
  component: ComunidadePage,
});

const posts = [
  {
    a: "Schonhardt", role: "Mentor", tag: "Anúncio", pin: true,
    t: "Convenção anual — datas abertas",
    c: "Já temos data confirmada: 12 e 13 de setembro em SP. Mentorados premium têm prioridade. Em breve compartilho o link de inscrição aqui.",
    l: 32, m: 12, time: "2h",
  },
  {
    a: "Marina R.", role: "KAM · Oncologia", tag: "Discussão",
    t: "Como vocês têm trabalhado o acesso em hospitais filantrópicos?",
    c: "Estou montando um plano para 3 contas e queria trocar experiências sobre comitê de farmácia e prazos médios.",
    l: 18, m: 9, time: "5h",
  },
  {
    a: "Bruno S.", role: "Gerente Distrital", tag: "Vitória",
    t: "Promoção saindo!",
    c: "Pessoal, depois de 9 meses na mentoria recebi a notícia hoje: vou assumir a regional sul. Obrigado a todos pela troca!",
    l: 64, m: 24, time: "1d",
  },
];

function ComunidadePage() {
  return (
    <div className="px-6 lg:px-10 py-10 max-w-3xl">
      <div className="text-xs uppercase tracking-[0.25em] text-royal mb-3">Rede de mentorados</div>
      <h1 className="font-display text-4xl md:text-5xl text-foreground">Comunidade</h1>
      <p className="mt-3 text-muted-foreground">Troque com colegas, compartilhe vitórias e tire dúvidas com o grupo.</p>

      <div className="mt-8 bg-card border border-border rounded-lg p-4 flex gap-3">
        <div className="h-10 w-10 rounded-full bg-royal-gradient grid place-items-center text-sm text-background">AC</div>
        <input
          placeholder="Compartilhe algo com a comunidade..."
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
