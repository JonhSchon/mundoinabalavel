import { ArrowUpRight, ClipboardCheck } from "lucide-react";
import { APPLICATION_FORM_URL } from "@/lib/links";
import { cn } from "@/lib/utils";

/**
 * Botão que envia para o formulário de aplicação individual.
 * Todo acesso a mentoria e assessments passa por aqui primeiro.
 */
export function ApplyFormButton({
  label = "Aplicar pelo formulário",
  variant = "outline",
  className,
}: {
  label?: string;
  variant?: "outline" | "gold";
  className?: string;
}) {
  return (
    <a
      href={APPLICATION_FORM_URL}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "w-full inline-flex items-center justify-center gap-2 rounded-sm px-5 py-2.5 text-sm font-medium transition-colors",
        variant === "gold"
          ? "bg-gold text-gold-foreground hover:bg-gold/90"
          : "border border-gold/40 text-gold hover:bg-gold hover:text-gold-foreground",
        className,
      )}
    >
      {variant === "gold" ? (
        <ArrowUpRight className="h-4 w-4" />
      ) : (
        <ClipboardCheck className="h-4 w-4" />
      )}
      {label}
    </a>
  );
}

/** Aviso padrão: após o formulário, cadastre-se no app. */
export function ApplyFormNote({ className }: { className?: string }) {
  return (
    <p className={cn("text-[11px] text-sidebar-foreground/45 leading-relaxed", className)}>
      Etapa 1 · Preencha o formulário de aplicação. Etapa 2 · Volte e faça seu cadastro no app para
      liberar os materiais. Após a validação da sua aplicação, a contratação é concluída aqui dentro.
    </p>
  );
}
