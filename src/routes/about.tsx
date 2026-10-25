import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Target } from "lucide-react";
import { PageTransition, Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { buttonVariants } from "@/components/ui/button";
import { about, education, images, profile } from "@/data/content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About | ${profile.fullName}` },
      {
        name: "description",
        content:
          "About Deepalakshmi Sakthi Sabari Raman — AI & Data Science engineering student at Sri Eshwar College of Engineering, her education, interests and goals.",
      },
      { property: "og:title", content: `About | ${profile.fullName}` },
      {
        property: "og:description",
        content: "Who I am, what I study, and the goals that drive my work in technology.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageTransition>
      {/* ---------- Portrait + introduction ---------- */}
      <section className="mx-auto max-w-6xl px-5 pb-8 pt-32 sm:px-8 sm:pt-36">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal y={32}>
            <div className="relative mx-auto max-w-sm lg:sticky lg:top-28">
              <div aria-hidden="true" className="absolute -inset-4 rounded-[2rem] bg-brand-gradient opacity-15 blur-2xl" />
              <div className="group relative overflow-hidden rounded-[2rem] border border-border bg-card p-2 shadow-lift">
                <img
                  src={images.portrait}
                  alt={`Portrait of ${profile.fullName}`}
                  className="aspect-[4/4.6] w-full rounded-[1.6rem] object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <span className="glass absolute bottom-6 left-6 rounded-full border border-border px-4 py-2 text-xs font-bold text-foreground shadow-card">
                {profile.roleLabel}
              </span>
            </div>
          </Reveal>

          <div>
            <Reveal y={16}>
              <span className="inline-flex items-center rounded-full border border-primary/15 bg-accent px-4 py-1.5 text-xs font-bold tracking-[0.14em] text-accent-foreground uppercase">
                About me
              </span>
              <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.15] text-foreground sm:text-5xl">
                Turning curiosity into <span className="text-gradient">working solutions.</span>
              </h1>
            </Reveal>
            <div className="mt-7 space-y-5">
              {about.introduction.map((paragraph, i) => (
                <Reveal key={i} delay={0.08 * i}>
                  <p className="text-base leading-[1.75] text-muted-foreground sm:text-[1.0625rem]">{paragraph}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.35} className="mt-9 flex flex-wrap gap-2.5">
              {about.interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  {interest}
                </span>
              ))}
            </Reveal>

            <Reveal delay={0.45} className="mt-9 flex flex-wrap gap-3.5">
              <Link to="/projects" className={buttonVariants({ size: "lg" })}>
                SEE MY PROJECTS
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className={buttonVariants({ variant: "outline", size: "lg" })}>
                GET IN TOUCH
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Education ---------- */}
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <SectionHeading
            eyebrow="Education"
            title="A strong academic foundation"
            description="Consistent performance across school and college, with a focus on artificial intelligence and data science."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {education.map((item, i) => (
              <Reveal key={`${item.institution}-${item.period}`} delay={i * 0.1}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span className="text-xs font-bold tracking-[0.12em] text-primary uppercase">{item.period}</span>
                  <h3 className="mt-3 font-display text-lg font-bold leading-snug text-foreground">{item.institution}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{item.credential}</p>
                  <div className="mt-5 border-t border-border pt-4">
                    <span className="font-display text-2xl font-extrabold text-primary">{item.score}</span>
                    <p className="mt-1 text-xs text-muted-foreground">{item.scoreNote}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Goals ---------- */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <Reveal className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-card sm:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(82,103,232,0.14),transparent_70%)]"
          />
          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
            <span className="bg-brand-gradient flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-primary-foreground shadow-card">
              <Target className="h-6 w-6" />
            </span>
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">Where I'm headed</h2>
              <p className="mt-3 max-w-3xl text-base leading-[1.75] text-muted-foreground">
                My goal is to become a capable technology professional who contributes to meaningful products —
                combining what I learn in artificial intelligence and data science with hands-on engineering, so the
                things I build genuinely help the people who use them.
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </PageTransition>
  );
}
