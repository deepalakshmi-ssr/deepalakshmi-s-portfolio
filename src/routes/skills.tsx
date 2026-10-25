import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageTransition, Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { buttonVariants } from "@/components/ui/button";
import { profile, skillGroups } from "@/data/content";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: `Skills | ${profile.fullName}` },
      {
        name: "description",
        content:
          "Technical skills of Deepalakshmi Sakthi Sabari Raman — programming languages, web development, core concepts, AI tooling and everyday tools.",
      },
      { property: "og:title", content: `Skills | ${profile.fullName}` },
      {
        property: "og:description",
        content: "Languages, frameworks, concepts and tools — organised by how they're actually used.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SkillsPage,
});

function SkillsPage() {
  return (
    <PageTransition>
      <section className="mx-auto max-w-6xl px-5 pb-24 pt-32 sm:px-8 sm:pt-36">
        <SectionHeading
          eyebrow="Technical skills"
          title="A toolbox built for real work"
          description="Skills taken straight from my resume and experience — grouped by how they're actually used, without inflated proficiency claims."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.07} className={i === 4 ? "md:col-span-2 lg:col-span-1" : undefined}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-8 rounded-full bg-brand-gradient" />
                  <h2 className="font-display text-base font-bold text-foreground">{group.category}</h2>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <p className="mt-5 flex-1 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">
                  {group.context}
                </p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.4}>
            <div className="bg-brand-gradient flex h-full flex-col justify-center rounded-2xl p-7 text-primary-foreground shadow-card">
              <h2 className="font-display text-lg font-bold">Skills in action</h2>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/85">
                The clearest proof of skill is what gets built with it. See the projects where these tools came together.
              </p>
              <Link
                to="/projects"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-white transition-all hover:gap-2.5"
              >
                Explore projects <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-16 text-center" delay={0.1}>
          <Link to="/experience" className={buttonVariants({ variant: "outline", size: "lg" })}>
            SEE HOW I'VE APPLIED THEM
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </PageTransition>
  );
}
