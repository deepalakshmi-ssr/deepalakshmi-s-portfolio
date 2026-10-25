import { createFileRoute } from "@tanstack/react-router";
import { ProjectDetail } from "@/components/ProjectDetail";
import { profile, projects } from "@/data/content";

const project = projects.find((p) => p.slug === "agrimate")!;

export const Route = createFileRoute("/projects/agrimate")({
  head: () => ({
    meta: [
      { title: `AgriMate — AI-Based Smart Farming | ${profile.shortName}` },
      {
        name: "description",
        content:
          "AgriMate is an AI-based smart farming web application with weather forecasting, soil guidance, crop recommendations, pest alerts, market prices and a 5-language voice assistant.",
      },
      { property: "og:title", content: `AgriMate — AI-Based Smart Farming | ${profile.shortName}` },
      {
        property: "og:description",
        content: "Weather, soil, crops, pest alerts and market prices — with a multilingual AI voice assistant for rural users.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AgrimatePage,
});

function AgrimatePage() {
  return <ProjectDetail project={project} />;
}
