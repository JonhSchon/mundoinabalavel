import { createFileRoute } from "@tanstack/react-router";
import { FileText, Download, FileSpreadsheet, BookOpen } from "lucide-react";

export const Route = createFileRoute("/app/materiais")({
  component: MateriaisPage,
});

const docs = [
  { icon: FileText, t: "Dicionário Farma — DDD, PMB, Close-up, Grelha", d: "PDF · 1.8 MB", cat: "Código" },
  { icon: FileSpreadsheet, t: "Template de LinkedIn KAM-ready", d: "DOCX · 240 KB", cat: "Algoritmo" },
  { icon: BookOpen, t: "E-book: Como o ATS te tritura (e como driblar)", d: "PDF · 6.4 MB", cat: "Algoritmo" },
  { icon: FileText, t: "Script — Simulação de propaganda médica", d: "PDF · 420 KB", cat: "Blindagem" },
  { icon: FileSpreadsheet, t: "Planilha — Mapa de 50 GDs e Regionais", d: "XLSX · 380 KB", cat: "Networking" },
  { icon: BookOpen, t: "Cases — Recolocados em multinacional top 10", d: "PDF · 8.1 MB", cat: "Provas" },
];

function MateriaisPage() {
  return (
    <div className="px-6 lg:px-10 py-10 max-w-6xl">
      <div className="text-xs uppercase tracking-[0.25em] text-royal mb-3">Biblioteca da Irmandade</div>
      <h1 className="font-display text-4xl md:text-5xl text-foreground">Arsenal do mentorado</h1>
      <p className="mt-3 text-muted-foreground">Dicionário do setor, templates prontos, scripts de simulação e cases de quem já entrou.</p>

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
