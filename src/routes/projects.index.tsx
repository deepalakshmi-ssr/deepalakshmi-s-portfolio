import { createFileRoute } from "@tanstack/react-router";
import { PageTransition } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { profile, projects } from "@/data/content";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: `Projects | ${profile.fullName}` },
      {
        name: "description",
        content:
          "Projects by Deepalakshmi Sakthi Sabari Raman: MOVA (intelligent mobility), HireReady AI (smart hiring platform) and AgriMate (AI-based smart farming).",
      },
      { property: "og:title", content: `Projects | ${profile.fullName}` },
      {
        property: "og:description",
        content: "MOVA, HireReady AI and AgriMate — projects built around real-world problems.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <PageTransition>
      <section className="mx-auto max-w-6xl px-5 pb-24 pt-32 sm:px-8 sm:pt-36">
        <SectionHeading
          eyebrow="Projects"
          title="Real problems, working products"
          description="These are projects I designed and built myself — each one explored in depth on its own page, from problem to solution to what I learned."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
