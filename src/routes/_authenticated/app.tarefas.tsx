import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { CheckCircle2, Circle, Clock, ImagePlus, Trash2, X, Check } from "lucide-react";
import { courses } from "@/lib/courses";

export const Route = createFileRoute("/_authenticated/app/tarefas")({
  head: () => ({
    meta: [
      { title: "Missões do Mentorado · Instituto Schonhardt" },
      {
        name: "description",
        content:
          "Cumpra as missões de cada produto do ecossistema, marque como concluída e envie o print da entrega.",
      },
      { property: "og:title", content: "Missões do Mentorado · Instituto Schonhardt" },
      {
        property: "og:description",
        content: "Missões por curso, com marcação de conclusão e envio de print da entrega.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TarefasPage,
});

type Task = { id: string; t: string; due: string; mod: string };

const TASKS_BY_COURSE: Record<string, Task[]> = {
  "jogo-real": [
    { id: "jr-1", t: "Assistir a aula O Pacto Secreto e anotar 3 crenças que vai abandonar", due: "Vence em 2 dias", mod: "Aula 1 · O Pacto Secreto" },
    { id: "jr-2", t: "Escrever em uma frase por que você quer entrar na Indústria Farmacêutica", due: "Vence em 3 dias", mod: "Aula 2 · O Ecossistema Pharma" },
    { id: "jr-3", t: "Listar 5 empresas-alvo do setor e o motivo de cada escolha", due: "Vence em 5 dias", mod: "Aula 3 · O Arsenal" },
  ],
  "retorno-memoravel": [
    { id: "rm-1", t: "Executar o Ritual do Adeus e enviar o print do registro", due: "Vence amanhã", mod: "Módulo 01 · Identidade" },
    { id: "rm-2", t: "Preencher a Auditoria de Competências completa", due: "Vence em 3 dias", mod: "Módulo 01 · Auditoria" },
    { id: "rm-3", t: "Reescrever a headline do LinkedIn no formato KAM-ready", due: "Vence em 4 dias", mod: "Módulo 02 · Re-Branding" },
    { id: "rm-4", t: "Rodar o currículo em um leitor de ATS e corrigir as palavras-chave", due: "Vence em 5 dias", mod: "Módulo 02 · Currículo & ATS" },
    { id: "rm-5", t: "Mapear 10 Gerentes Distritais e Regionais no LinkedIn", due: "Vence em 7 dias", mod: "Módulo 03 · Networking 3.0" },
    { id: "rm-6", t: "Enviar 5 abordagens usando os scripts do Módulo 03", due: "Vence em 8 dias", mod: "Módulo 03 · Scripts de abordagem" },
  ],
  "chave-industria": [
    { id: "kf-1", t: "Montar o glossário pessoal do dialeto de campo (30 termos)", due: "Vence em 3 dias", mod: "Módulo 02 · Dialeto de campo" },
    { id: "kf-2", t: "Blindar CV e LinkedIn com o checklist de branding magnético", due: "Vence em 5 dias", mod: "Módulo 02 · Branding" },
    { id: "kf-3", t: "Simular uma entrevista com RH e gravar em vídeo", due: "Vence em 6 dias", mod: "Módulo 03 · Entrevista com RH" },
    { id: "kf-4", t: "Resolver um Business Case de propaganda médica e enviar o print", due: "Vence em 8 dias", mod: "Módulo 03 · Business Case" },
  ],
  "impacta-10x": [
    { id: "ix-1", t: "Definir sua Proposta Única de Valor (PUV) em 3 linhas", due: "Vence em 2 dias", mod: "Módulo 02 · PUV" },
    { id: "ix-2", t: "Publicar 1 conteúdo de autoridade no LinkedIn", due: "Vence em 4 dias", mod: "Módulo 02 · LinkedIn magnético" },
    { id: "ix-3", t: "Construir seu PDI de 90 dias", due: "Vence em 6 dias", mod: "Módulo 04 · Planejamento & PDI" },
    { id: "ix-4", t: "Gravar um pitch de 90s de venda consultiva", due: "Vence em 7 dias", mod: "Módulo 04 · Fechamento" },
  ],
};

const COURSE_IDS = Object.keys(TASKS_BY_COURSE);
const STORAGE_KEY = "is.tarefas.v1";

type TaskState = { done: boolean; proof?: string };
type Store = Record<string, TaskState>;

function loadStore(): Store {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}") as Store;
  } catch {
    return {};
  }
}

function TarefasPage() {
  const [store, setStore] = useState<Store>({});
  const [hydrated, setHydrated] = useState(false);
  const [active, setActive] = useState<string>(COURSE_IDS[0]);
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    setStore(loadStore());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  }, [store, hydrated]);

  const meta = useMemo(
    () => COURSE_IDS.map((id) => ({ id, course: courses.find((c) => c.id === id) })),
    [],
  );

  const tasks = TASKS_BY_COURSE[active] ?? [];
  const doneCount = tasks.filter((t) => store[t.id]?.done).length;
  const pct = tasks.length ? Math.round((doneCount / tasks.length) * 100) : 0;
  const activeCourse = courses.find((c) => c.id === active);

  function toggle(id: string) {
    setStore((s) => ({ ...s, [id]: { ...s[id], done: !s[id]?.done } }));
  }

  function attach(id: string, file: File) {
    const reader = new FileReader();
    reader.onload = () =>
      setStore((s) => ({ ...s, [id]: { ...s[id], proof: String(reader.result) } }));
    reader.readAsDataURL(file);
  }

  function removeProof(id: string) {
    setStore((s) => ({ ...s, [id]: { ...s[id], proof: undefined } }));
  }

  return (
    <div className="px-6 lg:px-10 py-10 max-w-5xl">
      <div className="text-xs uppercase tracking-[0.25em] text-royal mb-3">Sua jornada de recolocação</div>
      <h1 className="font-display text-4xl md:text-5xl text-foreground">Missões</h1>
      <p className="mt-3 text-muted-foreground">
        Escolha o produto adquirido, cumpra a missão, marque como concluída e anexe o print da entrega.
      </p>

      {/* Seletor de produto */}
      <div className="mt-8 flex flex-wrap gap-2">
        {meta.map(({ id, course }) => {
          const all = TASKS_BY_COURSE[id];
          const done = all.filter((t) => store[t.id]?.done).length;
          const isActive = id === active;
          return (
            <button
              key={id}
              onClick={() => setActive(id)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                isActive
                  ? "border-gold bg-gold text-gold-foreground font-medium"
                  : "border-border bg-card text-muted-foreground hover:border-gold/50 hover:text-foreground"
              }`}
            >
              {course?.title ?? id}
              <span className={`ml-2 text-xs ${isActive ? "opacity-80" : "text-muted-foreground/70"}`}>
                {done}/{all.length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Progresso do produto */}
      <div className="mt-8 rounded-lg border border-border bg-card p-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-gold">Produto</div>
            <div className="font-display text-2xl text-foreground">{activeCourse?.title ?? active}</div>
            {activeCourse?.subtitle && (
              <div className="mt-1 text-sm text-muted-foreground">{activeCourse.subtitle}</div>
            )}
          </div>
          <div className="text-right shrink-0">
            <div className="font-display text-3xl text-gold">{pct}%</div>
            <div className="text-xs text-muted-foreground">
              {doneCount} de {tasks.length} concluídas
            </div>
          </div>
        </div>
        <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-muted">
          <div className="h-full bg-gold-gradient transition-all duration-500" style={{ width: `${pct}%` }} />
        </div>
      </div>

      {/* Lista */}
      <div className="mt-6 space-y-3">
        {tasks.map((t) => (
          <TaskRow
            key={t.id}
            task={t}
            state={store[t.id]}
            onToggle={() => toggle(t.id)}
            onAttach={(f) => attach(t.id, f)}
            onRemoveProof={() => removeProof(t.id)}
            onPreview={(src) => setPreview(src)}
          />
        ))}
      </div>

      {preview && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-background/90 p-6 backdrop-blur"
          onClick={() => setPreview(null)}
        >
          <button
            className="absolute right-6 top-6 p-2 text-muted-foreground hover:text-gold"
            onClick={() => setPreview(null)}
            aria-label="Fechar"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={preview}
            alt="Print da entrega da missão"
            className="max-h-[85vh] max-w-full rounded-lg border border-gold/30"
          />
        </div>
      )}
    </div>
  );
}

function TaskRow({
  task,
  state,
  onToggle,
  onAttach,
  onRemoveProof,
  onPreview,
}: {
  task: Task;
  state?: TaskState;
  onToggle: () => void;
  onAttach: (f: File) => void;
  onRemoveProof: () => void;
  onPreview: (src: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const done = !!state?.done;

  return (
    <div
      className={`rounded-lg border bg-card p-5 transition-colors ${
        done ? "border-royal/50" : "border-border hover:border-gold/50"
      }`}
    >
      <div className="flex items-start gap-4">
        <button
          onClick={onToggle}
          aria-pressed={done}
          aria-label={done ? "Marcar como pendente" : "Marcar como concluída"}
          className="mt-0.5 shrink-0 transition-transform hover:scale-110"
        >
          {done ? (
            <CheckCircle2 className="h-6 w-6 text-royal" />
          ) : (
            <Circle className="h-6 w-6 text-muted-foreground" />
          )}
        </button>

        <button onClick={onToggle} className="flex-1 text-left">
          <div className={`text-foreground ${done ? "line-through opacity-60" : ""}`}>{task.t}</div>
          <div className="mt-1 text-xs text-muted-foreground">{task.mod}</div>
        </button>

        <div className="shrink-0 text-xs flex items-center gap-1.5 text-gold">
          {done ? (
            <>
              <Check className="h-3.5 w-3.5" /> Concluída
            </>
          ) : (
            <>
              <Clock className="h-3.5 w-3.5" /> {task.due}
            </>
          )}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3 pl-10">
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) onAttach(f);
            e.target.value = "";
          }}
        />
        <button
          onClick={() => inputRef.current?.click()}
          className="inline-flex items-center gap-2 rounded-sm border border-gold/40 px-3 py-1.5 text-xs text-gold transition-colors hover:bg-gold hover:text-gold-foreground"
        >
          <ImagePlus className="h-3.5 w-3.5" />
          {state?.proof ? "Trocar print" : "Enviar print da tela"}
        </button>

        {state?.proof ? (
          <div className="flex items-center gap-2">
            <button onClick={() => onPreview(state.proof!)} className="group">
              <img
                src={state.proof}
                alt={`Print da entrega: ${task.t}`}
                className="h-12 w-20 rounded-sm border border-border object-cover transition-colors group-hover:border-gold"
              />
            </button>
            <button
              onClick={onRemoveProof}
              aria-label="Remover print"
              className="p-1.5 text-muted-foreground hover:text-destructive"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <span className="text-xs text-muted-foreground/70">Nenhum print anexado</span>
        )}
      </div>
    </div>
  );
}
