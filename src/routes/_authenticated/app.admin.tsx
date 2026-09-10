import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { Check, X, ShieldCheck, Search, Loader2 } from "lucide-react";
import { adminOverview, setEntitlement, decideRequest } from "@/lib/access.functions";
import { products, productName } from "@/lib/products";

export const Route = createFileRoute("/_authenticated/app/admin")({
  head: () => ({
    meta: [
      { title: "Liberação de acesso · Schonhardt" },
      { name: "description", content: "Aprove pedidos e libere produtos comprados para cada mentorado." },
    ],
  }),
  component: AdminPage,
});

function AdminPage() {
  const queryClient = useQueryClient();
  const fetchOverview = useServerFn(adminOverview);
  const grantFn = useServerFn(setEntitlement);
  const decideFn = useServerFn(decideRequest);
  const [term, setTerm] = useState("");

  const { data, isLoading, error } = useQuery({
    queryKey: ["admin-overview"],
    queryFn: () => fetchOverview(),
  });

  const refresh = () => {
    queryClient.invalidateQueries({ queryKey: ["admin-overview"] });
    queryClient.invalidateQueries({ queryKey: ["my-access"] });
  };

  const grant = useMutation({
    mutationFn: (vars: { userId: string; productId: string; granted: boolean }) => grantFn({ data: vars }),
    onSuccess: refresh,
  });
  const decide = useMutation({
    mutationFn: (vars: { requestId: string; approve: boolean }) => decideFn({ data: vars }),
    onSuccess: refresh,
  });

  const members = data?.members ?? [];
  const pending = (data?.requests ?? []).filter((r) => r.status === "pending");
  const nameOf = (userId: string) => {
    const m = members.find((x) => x.id === userId);
    return m?.fullName || m?.email || "Mentorado";
  };

  const filtered = useMemo(() => {
    const q = term.trim().toLowerCase();
    if (!q) return members;
    return members.filter(
      (m) => (m.email ?? "").toLowerCase().includes(q) || (m.fullName ?? "").toLowerCase().includes(q),
    );
  }, [members, term]);

  if (error) {
    return (
      <div className="p-10">
        <h1 className="font-display text-2xl text-foreground">Área restrita</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Esta página é exclusiva do administrador do Instituto.
        </p>
      </div>
    );
  }

  return (
    <div className="px-6 lg:px-10 py-10 max-w-6xl">
      <div className="flex items-center gap-3">
        <span className="h-10 w-10 rounded-sm bg-gold-gradient grid place-items-center">
          <ShieldCheck className="h-5 w-5 text-gold-foreground" />
        </span>
        <div>
          <h1 className="font-display text-3xl text-foreground">Liberação de acesso</h1>
          <p className="text-sm text-muted-foreground">
            Aprove pedidos e marque os produtos comprados por cada mentorado.
          </p>
        </div>
      </div>

      {/* PEDIDOS PENDENTES */}
      <section className="mt-10">
        <h2 className="font-display text-xl text-foreground">
          Pedidos aguardando você {pending.length > 0 && <span className="text-gold">({pending.length})</span>}
        </h2>
        {isLoading ? (
          <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" /> Carregando...
          </p>
        ) : pending.length === 0 ? (
          <p className="mt-4 text-sm text-muted-foreground">Nenhum pedido pendente agora.</p>
        ) : (
          <ul className="mt-4 space-y-3">
            {pending.map((r) => (
              <li
                key={r.id}
                className="flex flex-wrap items-center justify-between gap-4 rounded-md border border-border bg-card p-5"
              >
                <div className="min-w-0">
                  <div className="text-sm text-foreground">{nameOf(r.userId)}</div>
                  <div className="text-xs text-gold uppercase tracking-wider mt-1">{productName(r.productId)}</div>
                  {r.message && <p className="mt-2 text-sm text-muted-foreground">"{r.message}"</p>}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => decide.mutate({ requestId: r.id, approve: true })}
                    disabled={decide.isPending}
                    className="inline-flex items-center gap-2 bg-gold-gradient text-gold-foreground px-4 py-2 rounded-sm text-sm disabled:opacity-50"
                  >
                    <Check className="h-4 w-4" /> Liberar
                  </button>
                  <button
                    onClick={() => decide.mutate({ requestId: r.id, approve: false })}
                    disabled={decide.isPending}
                    className="inline-flex items-center gap-2 border border-border px-4 py-2 rounded-sm text-sm text-foreground hover:border-destructive disabled:opacity-50"
                  >
                    <X className="h-4 w-4" /> Recusar
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* MENTORADOS */}
      <section className="mt-14">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="font-display text-xl text-foreground">Mentorados cadastrados</h2>
          <div className="flex items-center gap-2 rounded-sm border border-border bg-card px-3 py-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              placeholder="Buscar por nome ou e-mail"
              className="bg-transparent text-sm outline-none text-foreground placeholder:text-muted-foreground w-56"
            />
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="mt-4 text-sm text-muted-foreground">
            Ninguém encontrado. O mentorado aparece aqui depois de entrar na plataforma pela primeira vez.
          </p>
        ) : (
          <div className="mt-5 space-y-4">
            {filtered.map((m) => (
              <div key={m.id} className="rounded-md border border-border bg-card p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <div className="text-sm text-foreground">{m.fullName || "Sem nome"}</div>
                    <div className="text-xs text-muted-foreground">{m.email}</div>
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-gold">
                    {m.productIds.length} liberado(s)
                  </div>
                </div>

                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {products.map((p) => {
                    const on = m.productIds.includes(p.id);
                    return (
                      <label
                        key={p.id}
                        className={`flex cursor-pointer items-center gap-3 rounded-sm border px-4 py-3 text-sm transition-colors ${
                          on ? "border-gold bg-gold/10 text-foreground" : "border-border text-muted-foreground hover:border-gold/50"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={on}
                          disabled={grant.isPending}
                          onChange={(e) =>
                            grant.mutate({ userId: m.id, productId: p.id, granted: e.target.checked })
                          }
                          className="h-4 w-4 accent-[var(--gold)]"
                        />
                        <span className="min-w-0">
                          <span className="block truncate">{p.name}</span>
                          <span className="block text-[10px] uppercase tracking-wider text-muted-foreground">
                            {p.kind}
                          </span>
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
