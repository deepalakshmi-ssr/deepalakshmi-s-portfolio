import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2 } from "lucide-react";
import { PageTransition, Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { buttonVariants } from "@/components/ui/button";
import { experience, profile } from "@/data/content";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: `Experience | ${profile.fullName}` },
      {
        name: "description",
        content:
          "Experience of Deepalakshmi Sakthi Sabari Raman — ReactJS development intern at Odisoft Technologies, frontend intern at LearnTricks EduTech, and Internshala Student Partner.",
      },
      { property: "og:title", content: `Experience | ${profile.fullName}` },
      {
        property: "og:description",
        content: "Internships and hands-on experience in ReactJS, frontend development and community engagement.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <PageTransition>
      <section className="mx-auto max-w-6xl px-5 pb-24 pt-32 sm:px-8 sm:pt-36">
        <SectionHeading
          eyebrow="Experience"
          title="Learning by building, professionally"
          description="Internships and roles where I applied my skills on real work — kept accurate to what each role involved."
        />

        <div className="relative mx-auto mt-16 max-w-3xl">
          <div aria-hidden="true" className="absolute left-[1.4rem] top-2 bottom-2 w-px bg-border sm:left-[2.15rem]" />

          <ol className="space-y-10">
            {experience.map((item, i) => (
              <Reveal as="li" key={item.role} delay={i * 0.08} className="relative pl-14 sm:pl-24">
                <span className="bg-brand-gradient absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-2xl text-primary-foreground shadow-card sm:left-3 sm:h-12 sm:w-12">
                  <Building2 className="h-5 w-5" />
                </span>
                <div className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h2 className="font-display text-xl font-bold text-foreground">{item.role}</h2>
                    <span className="text-xs font-bold tracking-wide text-primary uppercase">
                      {item.period ? `${item.period}${item.duration ? ` · ${item.duration}` : ""}` : item.duration}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-muted-foreground">{item.organisation}</p>
                  <ul className="mt-4 space-y-2.5">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-4">
                    {item.skills.map((skill) => (
                      <span key={skill} className="rounded-full bg-accent px-3 py-1 text-[0.6875rem] font-semibold text-accent-foreground">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal className="mt-16 text-center" delay={0.1}>
          <p className="text-sm text-muted-foreground">Curious how this experience shows up in my work?</p>
          <Link to="/projects" className={buttonVariants({ className: "mt-5", size: "lg" })}>
            EXPLORE MY PROJECTS
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </PageTransition>
  );
}
