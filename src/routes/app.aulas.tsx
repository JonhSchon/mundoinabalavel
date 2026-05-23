import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/app/aulas")({
  beforeLoad: () => {
    throw redirect({ to: "/app/aulas/$courseId", params: { courseId: "retorno-memoravel" } });
  },
});
