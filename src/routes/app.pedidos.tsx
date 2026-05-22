import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MessageSquarePlus, Send } from "lucide-react";

export const Route = createFileRoute("/app/pedidos")({
  component: PedidosPage,
});

const previous = [
  { t: "Revisão do meu plano de carreira", date: "12 abr · respondido", status: "respondido" },
  { t: "Indicação de leitura sobre acesso público", date: "5 abr · respondido", status: "respondido" },
  { t: "Sessão extra antes da convenção", date: "2 abr · em análise", status: "pendente" },
];

function PedidosPage() {
  const [type, setType] = useState("Dúvida");
  return (
    <div className="px-6 lg:px-10 py-10 max-w-4xl">
      <div className="text-xs uppercase tracking-[0.25em] text-royal mb-3">Acesso direto</div>
      <h1 className="font-display text-4xl md:text-5xl text-foreground">Envie um pedido</h1>
      <p className="mt-3 text-muted-foreground max-w-xl">
        Tire dúvidas, peça uma sessão extra, indique um tema ou solicite revisão de material. Respondo pessoalmente.
      </p>

      <form className="mt-10 bg-card border border-border rounded-lg p-6 space-y-5">
        <div>
          <label className="text-xs uppercase tracking-wider text-royal">Tipo</label>
          <div className="mt-2 flex flex-wrap gap-2">
            {["Dúvida", "Sessão 1:1", "Revisão", "Sugestão"].map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setType(opt)}
                className={`px-4 py-2 text-sm rounded-sm border transition-colors ${
                  type === opt
                    ? "bg-gold text-gold-foreground border-gold"
                    : "border-border text-foreground hover:border-gold"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="text-xs uppercase tracking-wider text-royal">Assunto</label>
          <input
            className="mt-2 w-full bg-background border border-border rounded-sm px-4 py-3 text-sm outline-none focus:border-gold"
            placeholder="Resumo em uma linha"
          />
        </div>
        <div>
          <label className="text-xs uppercase tracking-wider text-royal">Mensagem</label>
          <textarea
            rows={6}
            className="mt-2 w-full bg-background border border-border rounded-sm px-4 py-3 text-sm outline-none focus:border-gold resize-none"
            placeholder="Conte com detalhes o que você precisa..."
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-gold-gradient text-gold-foreground px-6 py-3 rounded-sm text-sm font-medium shadow-gold hover:opacity-95"
          >
            <Send className="h-4 w-4" /> Enviar pedido
          </button>
        </div>
      </form>

      <h2 className="font-display text-2xl text-foreground mt-14 mb-4">Seus pedidos</h2>
      <div className="space-y-2">
        {previous.map((p) => (
          <div key={p.t} className="flex items-center justify-between p-4 bg-card border border-border rounded-lg">
            <div className="flex items-center gap-3">
              <MessageSquarePlus className="h-5 w-5 text-royal" />
              <div>
                <div className="text-foreground text-sm">{p.t}</div>
                <div className="text-xs text-muted-foreground">{p.date}</div>
              </div>
            </div>
            <span
              className={`text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                p.status === "respondido"
                  ? "border-royal/40 text-royal"
                  : "border-gold/40 text-gold"
              }`}
            >
              {p.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
