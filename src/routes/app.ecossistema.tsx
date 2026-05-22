import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, GraduationCap, Users, Mic } from "lucide-react";

export const Route = createFileRoute("/app/ecossistema")({
  component: EcossistemaPage,
});

const products = [
  {
    icon: GraduationCap, type: "Curso · Core",
    t: "Retorno Memorável — Entrar na Farma",
    d: "O método completo para o Candidato Invisível furar o ATS, dominar o jargão (DDD, PMB, Close-up) e travar Business Case sem suar.",
    price: "R$ 2.997", tag: "Mais vendido",
  },
  {
    icon: Users, type: "Mentoria 1:1",
    t: "Programa Executivo · 6 meses",
    d: "Acompanhamento quinzenal com Schonhardt. Plano de recolocação sob medida, simulação de entrevista com GD e portfólio para multinacional.",
    price: "R$ 18.000", tag: "Vagas limitadas",
  },
  {
    icon: GraduationCap, type: "Curso",
    t: "A Chave da Indústria Farmacêutica",
    d: "Mapa rápido do setor: estrutura comercial, Primary Care vs Oncologia, pacote padrão (carro, PLR, previdência) e plano de carreira.",
    price: "R$ 1.497",
  },
  {
    icon: Mic, type: "Palestra",
    t: "Keynote para Convenções de Vendas",
    d: "Palestra de 60–90 min adaptada para força de vendas farma, distribuidores e times comerciais B2B. Brasil, LATAM e EMEA.",
    price: "Sob consulta",
  },
];

function EcossistemaPage() {
  return (
    <div className="px-6 lg:px-10 py-10 max-w-6xl">
      <div className="text-xs uppercase tracking-[0.25em] text-royal mb-3">O ecossistema ISN</div>
      <h1 className="font-display text-4xl md:text-5xl text-foreground">Você não precisa esperar a próxima vaga abrir.</h1>
      <p className="mt-3 text-muted-foreground max-w-2xl">
        Cursos, mentoria 1:1 e palestras corporativas. Mentorados ativos da Irmandade têm condição especial e prioridade em todas as turmas.
      </p>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {products.map(({ icon: Icon, type, t, d, price, tag }) => (
          <div key={t} className="group relative bg-card border border-border rounded-lg p-7 hover:border-gold transition-colors">
            {tag && (
              <div className="absolute -top-2.5 right-6 bg-gold-gradient text-gold-foreground text-[10px] uppercase tracking-wider px-3 py-1 rounded-full">
                {tag}
              </div>
            )}
            <Icon className="h-8 w-8 text-royal" strokeWidth={1.5} />
            <div className="text-[10px] uppercase tracking-[0.2em] text-gold mt-5">{type}</div>
            <h3 className="font-display text-2xl text-foreground mt-2">{t}</h3>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{d}</p>
            <div className="mt-6 flex items-center justify-between">
              <div className="font-display text-xl text-foreground">{price}</div>
              <button className="inline-flex items-center gap-2 text-sm text-royal group-hover:text-gold transition-colors">
                Ver detalhes <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
