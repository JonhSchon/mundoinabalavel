import { createFileRoute } from "@tanstack/react-router";
import { FileText, Download, FileSpreadsheet, BookOpen } from "lucide-react";

export const Route = createFileRoute("/app/materiais")({
  component: MateriaisPage,
});

const docs = [
  { icon: FileText, t: "Playbook do KAM — v3", d: "PDF · 4.2 MB", cat: "Playbook" },
  { icon: FileSpreadsheet, t: "Planilha de plano de conta", d: "XLSX · 280 KB", cat: "Template" },
  { icon: BookOpen, t: "E-book: Acesso ao Mercado", d: "PDF · 8.1 MB", cat: "Leitura" },
  { icon: FileText, t: "Script de descoberta", d: "PDF · 320 KB", cat: "Script" },
  { icon: FileSpreadsheet, t: "Calculadora de ROI", d: "XLSX · 410 KB", cat: "Template" },
  { icon: BookOpen, t: "Cases — Hospitais públicos", d: "PDF · 6.4 MB", cat: "Cases" },
];

function MateriaisPage() {
  return (
    <div className="px-6 lg:px-10 py-10 max-w-6xl">
      <div className="text-xs uppercase tracking-[0.25em] text-royal mb-3">Biblioteca</div>
      <h1 className="font-display text-4xl md:text-5xl text-foreground">Materiais de apoio</h1>
      <p className="mt-3 text-muted-foreground">Templates, playbooks, scripts e leituras complementares.</p>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {docs.map(({ icon: Icon, t, d, cat }) => (
          <div key={t} className="group bg-card border border-border rounded-lg p-6 hover:border-gold transition-colors">
            <div className="flex items-start justify-between">
              <Icon className="h-7 w-7 text-royal" strokeWidth={1.5} />
              <span className="text-[10px] uppercase tracking-wider text-gold border border-gold/30 rounded-full px-2.5 py-0.5">
                {cat}
              </span>
            </div>
            <div className="font-display text-lg text-foreground mt-5">{t}</div>
            <div className="text-xs text-muted-foreground mt-1">{d}</div>
            <button className="mt-5 inline-flex items-center gap-2 text-sm text-foreground hover:text-gold transition-colors">
              <Download className="h-4 w-4" /> Baixar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
