import { createFileRoute } from "@tanstack/react-router";
import { ProjectDetail } from "@/components/ProjectDetail";
import { profile, projects } from "@/data/content";

const project = projects.find((p) => p.slug === "hirereadyai")!;

export const Route = createFileRoute("/projects/hirereadyai")({
  head: () => ({
    meta: [
      { title: `HireReady AI — Smart Hiring & Evaluation Platform | ${profile.shortName}` },
      {
        name: "description",
        content:
          "HireReady AI automates candidate evaluation through AI-based interviews, coding assessments and analytics dashboards.",
      },
      { property: "og:title", content: `HireReady AI — Smart Hiring Platform | ${profile.shortName}` },
      {
        property: "og:description",
        content: "AI interviews, coding assessments and analytics that cut screening time and track student progress.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HireReadyPage,
});

function HireReadyPage() {
  return <ProjectDetail project={project} />;
}
