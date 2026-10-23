import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import type { Project } from "@/data/content";
import { projectLinks } from "@/data/content";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const link = projectLinks[project.slug];

  return (
    <Reveal as="article" delay={index * 0.12} className="group h-full">
      <Link
        to={link.to}
        className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-surface">
          <img
            src={project.image}
            alt={`${project.name} — ${project.category} project`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
          <span className="glass absolute left-4 top-4 rounded-full px-3 py-1 text-[0.6875rem] font-bold tracking-wide text-foreground">
            {project.category}
          </span>
          {project.status ? (
            <span className="absolute right-4 top-4 rounded-full bg-amber-100 px-3 py-1 text-[0.6875rem] font-bold text-amber-800">
              {project.status}
            </span>
          ) : null}
        </div>

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <h3 className="font-display text-2xl font-bold text-foreground">{project.name}</h3>
          <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">{project.shortDescription}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="rounded-full bg-accent px-3 py-1 text-[0.6875rem] font-semibold text-accent-foreground">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
            <span
              className={cn(
                "inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-all group-hover:gap-2.5"
              )}
            >
              Explore Project
              <ArrowUpRight className="h-4 w-4" />
            </span>
            <span className={cn("h-1.5 w-10 rounded-full bg-gradient-to-r", project.accent)} />
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
