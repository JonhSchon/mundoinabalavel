import { courses } from "@/lib/courses";

export type Product = { id: string; name: string; kind: "Curso" | "Mentoria" | "Palestra" | "Assessment" };

/** Catálogo único de produtos que podem ser liberados por aluno. */
export const products: Product[] = [
  ...courses.map((c) => ({
    id: c.id,
    name: c.title,
    kind: (c.type === "Curso" ? "Curso" : c.type === "Mentoria" ? "Mentoria" : "Palestra") as Product["kind"],
  })),
  { id: "mentoria-1a1", name: "Mentoria de Carreira 1:1 · 3 meses", kind: "Mentoria" },
  { id: "pharma-readiness-index", name: "Pharma Readiness Index™", kind: "Assessment" },
  { id: "kam-strategic-audit", name: "KAM Strategic Audit™", kind: "Assessment" },
  { id: "access-intelligence", name: "Access Intelligence Assessment™", kind: "Assessment" },
];

export const productName = (id: string) => products.find((p) => p.id === id)?.name ?? id;
