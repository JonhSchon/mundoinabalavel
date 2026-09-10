import { useState, type ReactNode } from "react";
import { Lock, Check, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRequestAccess } from "@/hooks/useAccess";

type Props = {
  productId: string;
  productName: string;
  pending?: boolean;
  trigger?: ReactNode;
};

export function RequestAccessDialog({ productId, productName, pending, trigger }: Props) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const request = useRequestAccess();
  const sent = request.isSuccess || pending;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger ?? (
          <button className="inline-flex items-center gap-2 rounded-sm border border-gold/40 bg-primary/20 px-5 py-3 text-sm text-gold hover:bg-primary/30 transition">
            <Lock className="h-4 w-4" /> {sent ? "Pedido enviado" : "Pedir liberação"}
          </button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-xl">{productName}</DialogTitle>
          <DialogDescription>
            Já comprou este produto? Envie o pedido de liberação — o Instituto confirma e o acesso aparece aqui.
          </DialogDescription>
        </DialogHeader>

        {sent ? (
          <div className="rounded-sm border border-gold/40 bg-gold/10 p-4 text-sm text-foreground flex items-start gap-3">
            <Check className="h-4 w-4 text-gold mt-0.5" />
            <span>Pedido registrado. Você receberá a liberação assim que for aprovado.</span>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              request.mutate({ productId, message });
            }}
            className="space-y-4"
          >
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">
                Comprovação ou observação (opcional)
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                placeholder="Ex.: comprei em 12/08 pelo e-mail joao@empresa.com"
                className="mt-1 w-full rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold"
              />
            </div>
            {request.error && (
              <p className="text-sm text-destructive">
                {request.error instanceof Error ? request.error.message : "Erro ao enviar"}
              </p>
            )}
            <button
              type="submit"
              disabled={request.isPending}
              className="w-full bg-gold-gradient text-gold-foreground px-4 py-3 rounded-sm text-sm font-medium disabled:opacity-50 inline-flex items-center justify-center gap-2"
            >
              {request.isPending && <Loader2 className="h-4 w-4 animate-spin" />} Enviar pedido
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
