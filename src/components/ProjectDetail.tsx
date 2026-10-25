import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, Cog, Lightbulb, Puzzle, Target } from "lucide-react";
import { PageTransition, Reveal } from "@/components/Reveal";
import { buttonVariants } from "@/components/ui/button";
import { projects, projectLinks, type Project } from "@/data/content";
import { cn } from "@/lib/utils";

/** Fully-designed detail page for a single project. */
export function ProjectDetail({ project }: { project: Project }) {
  const others = projects.filter((p) => p.slug !== project.slug);
  const link = projectLinks[project.slug];

  const blocks = [
    { Icon: Target, eyebrow: "Problem statement", body: project.problem },
    { Icon: Lightbulb, eyebrow: "Motivation & purpose", body: project.motivation },
    { Icon: Puzzle, eyebrow: "Proposed solution", body: project.solution },
  ];

  return (
    <PageTransition>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden bg-surface">
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute -right-32 -top-32 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(136,117,245,0.16),transparent_65%)]"
          )}
        />
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-32 sm:px-8 sm:pt-36">
          <Reveal y={14}>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" /> All projects
            </Link>
          </Reveal>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Reveal y={10}>
              <span className="rounded-full border border-primary/15 bg-accent px-4 py-1.5 text-xs font-bold tracking-[0.12em] text-accent-foreground uppercase">
                {project.category}
              </span>
            </Reveal>
            {project.status ? (
              <Reveal y={10} delay={0.05}>
                <span className="rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold text-amber-800">{project.status}</span>
              </Reveal>
            ) : null}
          </div>
          <Reveal delay={0.1}>
            <h1 className="mt-5 font-display text-4xl font-extrabold text-foreground sm:text-5xl lg:text-[3.6rem] lg:leading-[1.1]">
              {project.name}
            </h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">{project.intro}</p>
          </Reveal>
          <Reveal delay={0.26} className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-semibold text-foreground">
                {tag}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ---------- Cover image ---------- */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <Reveal y={30}>
          <div className="overflow-hidden rounded-[2rem] border border-border shadow-lift">
            <img
              src={project.image}
              alt={`${project.name} — project cover`}
              className="aspect-[16/8] w-full object-cover"
            />
          </div>
        </Reveal>
      </section>

      {/* ---------- Problem / motivation / solution ---------- */}
      <section className="mx-auto max-w-6xl px-5 pb-6 sm:px-8">
        <div className="space-y-10">
          {blocks.map((block, i) => (
            <Reveal key={block.eyebrow} delay={i * 0.05}>
              <div className="grid gap-5 sm:grid-cols-[15rem_1fr] sm:gap-10">
                <div className="flex items-start gap-3 sm:flex-col sm:gap-3 sm:border-r sm:border-border sm:pr-8">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                    <block.Icon className="h-5 w-5" />
                  </span>
                  <h2 className="font-display text-lg font-bold text-foreground sm:pt-1">{block.eyebrow}</h2>
                </div>
                <p className="max-w-2xl text-base leading-[1.75] text-muted-foreground">{block.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Features ---------- */}
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">Main features</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {project.features.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 0.06}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span className={cn("h-1.5 w-10 rounded-full bg-gradient-to-r", project.accent)} />
                  <h3 className="mt-4 font-display text-base font-bold text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Technologies + contribution ---------- */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <Cog className="h-5 w-5" />
              </span>
              <h2 className="font-display text-2xl font-bold text-foreground">Technologies used</h2>
            </div>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Technologies reflect what the project is documented to use — no more, no less.
            </p>
          </Reveal>

          {project.contribution ? (
            <Reveal delay={0.1}>
              <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card">
                <div
                  aria-hidden="true"
                  className={cn("absolute inset-x-0 top-0 h-1 bg-gradient-to-r", project.accent)}
                />
                <h2 className="font-display text-lg font-bold text-foreground">My contribution</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.contribution}</p>
              </div>
            </Reveal>
          ) : null}
        </div>

        {project.statusNote ? (
          <Reveal className="mt-10" delay={0.05}>
            <p className="rounded-2xl border border-amber-200 bg-amber-50 px-6 py-4 text-sm text-amber-900">
              {project.statusNote}
            </p>
          </Reveal>
        ) : null}
      </section>

      {/* ---------- Other projects ---------- */}
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">Explore the other projects</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {others.map((other, i) => (
              <Reveal key={other.slug} delay={i * 0.08}>
                <Link
                  to={projectLinks[other.slug].to}
                  className="group flex items-center gap-6 rounded-2xl border border-border bg-card p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                >
                  <img
                    src={other.image}
                    alt={`${other.name} cover`}
                    loading="lazy"
                    className="h-20 w-28 shrink-0 rounded-xl object-cover"
                  />
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-lg font-bold text-foreground">{other.name}</span>
                    <span className="mt-1 line-clamp-2 block text-sm text-muted-foreground">{other.shortDescription}</span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 text-center" delay={0.1}>
            <h3 className="font-display text-2xl font-bold text-foreground">Want to talk about this project?</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              I'm happy to walk through the thinking behind {project.name}.
            </p>
            <Link to="/contact" className={cn("mt-6", buttonVariants({ size: "lg" }))}>
              GET IN TOUCH
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
