import { createFileRoute } from "@tanstack/react-router";
import { ProjectDetail } from "@/components/ProjectDetail";
import { profile, projects } from "@/data/content";

const project = projects.find((p) => p.slug === "mova")!;

export const Route = createFileRoute("/projects/mova")({
  head: () => ({
    meta: [
      { title: `MOVA — Intelligent Mobility System | ${profile.shortName}` },
      {
        name: "description",
        content:
          "MOVA is an ongoing intelligent mobility system combining sensors, computer vision and navigation to improve wheelchair safety and accessibility.",
      },
      { property: "og:title", content: `MOVA — Intelligent Mobility System | ${profile.shortName}` },
      {
        property: "og:description",
        content: "Terrain detection, obstacle awareness and wheelchair-friendly navigation in one modular assistive system.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MovaPage,
});

function MovaPage() {
  return <ProjectDetail project={project} />;
}
