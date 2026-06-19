import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";

export const Route = createFileRoute("/_authenticated/app")({
  head: () => ({
    meta: [
      { title: "Área do Mentorado · Schonhardt" },
      { name: "description", content: "Sua jornada de mentoria no Instituto Schonhardt." },
    ],
  }),
  component: AppShell,
});
