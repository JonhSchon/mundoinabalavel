import { createFileRoute, useNavigate, useSearch, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";

const searchSchema = z.object({
  redirect: z.string().optional(),
});

export const Route = createFileRoute("/auth")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Entrar · Instituto Schonhardt" },
      { name: "description", content: "Acesse sua área do mentorado." },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const { redirect } = useSearch({ from: "/auth" });
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  // Se já logado, redirecionar
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: redirect ?? "/app", replace: true });
    });
  }, [navigate, redirect]);

  async function handleEmail(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setInfo(null);
    setLoading(true);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: window.location.origin + "/app",
            data: { full_name: name },
          },
        });
        if (error) throw error;
        setInfo("Conta criada. Verifique seu e-mail para confirmar e depois entre.");
        setMode("signin");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        navigate({ to: redirect ?? "/app", replace: true });
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro inesperado");
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogle() {
    setError(null);
    setLoading(true);
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin + "/app",
    });
    if (result.error) {
      setError(result.error instanceof Error ? result.error.message : String(result.error));
      setLoading(false);
      return;
    }
    if (result.redirected) return;
    navigate({ to: redirect ?? "/app", replace: true });
  }

  return (
    <div className="min-h-screen bg-sidebar text-sidebar-foreground grid place-items-center px-4 py-12">
      <div className="w-full max-w-md">
        <Link to="/" className="flex items-center justify-center gap-3 mb-8">
          <div className="h-10 w-10 rounded-sm bg-gold-gradient grid place-items-center font-display text-primary font-bold">S</div>
          <div className="leading-tight">
            <div className="font-display text-sidebar-foreground text-lg">Schonhardt</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-gold/80">Mentorado</div>
          </div>
        </Link>

        <div className="bg-card border border-border rounded-lg p-8 text-foreground">
          <h1 className="font-display text-2xl text-foreground">
            {mode === "signin" ? "Entrar na sua área" : "Criar acesso de mentorado"}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {mode === "signin"
              ? "Acesse aulas, materiais e a Irmandade."
              : "Cadastre-se para começar sua jornada."}
          </p>

          <button
            type="button"
            onClick={handleGoogle}
            disabled={loading}
            className="mt-6 w-full inline-flex items-center justify-center gap-3 border border-border rounded-sm px-4 py-3 text-sm font-medium hover:border-gold disabled:opacity-50 transition-colors"
          >
            <svg className="h-4 w-4" viewBox="0 0 48 48" aria-hidden>
              <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.4 29.3 35.5 24 35.5c-6.4 0-11.5-5.1-11.5-11.5S17.6 12.5 24 12.5c2.9 0 5.6 1.1 7.6 2.9l5.7-5.7C33.6 6.3 29 4.5 24 4.5 13.2 4.5 4.5 13.2 4.5 24S13.2 43.5 24 43.5 43.5 34.8 43.5 24c0-1.2-.1-2.3-.4-3.5z"/>
              <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 12.5 24 12.5c2.9 0 5.6 1.1 7.6 2.9l5.7-5.7C33.6 6.3 29 4.5 24 4.5c-7.2 0-13.4 4-16.7 9.9z"/>
              <path fill="#4CAF50" d="M24 43.5c5 0 9.5-1.7 12.9-4.6l-6-5c-2 1.4-4.4 2.1-6.9 2.1-5.3 0-9.7-3.1-11.3-7.6l-6.5 5C9.6 39.5 16.2 43.5 24 43.5z"/>
              <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.2 4.3-4 5.8l6 5c-.4.4 6.7-4.9 6.7-14.8 0-1.2-.1-2.3-.4-3.5z"/>
            </svg>
            Continuar com Google
          </button>

          <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground">
            <div className="h-px flex-1 bg-border" /> ou e-mail <div className="h-px flex-1 bg-border" />
          </div>

          <form onSubmit={handleEmail} className="space-y-4">
            {mode === "signup" && (
              <div>
                <label className="text-xs uppercase tracking-wider text-royal">Nome</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full bg-background border border-border rounded-sm px-4 py-3 text-sm outline-none focus:border-gold"
                />
              </div>
            )}
            <div>
              <label className="text-xs uppercase tracking-wider text-royal">E-mail</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full bg-background border border-border rounded-sm px-4 py-3 text-sm outline-none focus:border-gold"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-royal">Senha</label>
              <input
                type="password"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full bg-background border border-border rounded-sm px-4 py-3 text-sm outline-none focus:border-gold"
              />
            </div>

            {error && <div className="text-sm text-red-500">{error}</div>}
            {info && <div className="text-sm text-royal">{info}</div>}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gold-gradient text-gold-foreground px-4 py-3 rounded-sm text-sm font-medium shadow-gold disabled:opacity-50"
            >
              {loading ? "Aguarde..." : mode === "signin" ? "Entrar" : "Criar conta"}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            {mode === "signin" ? (
              <>
                Ainda não tem acesso?{" "}
                <button onClick={() => setMode("signup")} className="text-gold hover:underline">
                  Criar conta
                </button>
              </>
            ) : (
              <>
                Já tem conta?{" "}
                <button onClick={() => setMode("signin")} className="text-gold hover:underline">
                  Entrar
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
