import { createFileRoute } from "@tanstack/react-router";
import { SkillPracticePage } from "@/components/study/SkillPracticePage";

export const Route = createFileRoute("/_authenticated/sprechen")({
  component: () => <SkillPracticePage skill="sprechen" />,
});
