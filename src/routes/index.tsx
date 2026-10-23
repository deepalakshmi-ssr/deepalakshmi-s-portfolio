import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowUpRight, Award, Briefcase, GraduationCap, Sparkles } from "lucide-react";
import { PageTransition, Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { SocialLinks } from "@/components/SocialLinks";
import { VideoBackground } from "@/components/VideoBackground";
import { buttonVariants } from "@/components/ui/button";
import { images, profile, projects, videos, achievements, experience } from "@/data/content";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${profile.fullName} | AI & Data Science Portfolio` },
      {
        name: "description",
        content:
          "Portfolio of Deepalakshmi Sakthi Sabari Raman — AI & Data Science engineering student building projects like MOVA, HireReady AI and AgriMate.",
      },
      { property: "og:title", content: `${profile.fullName} | AI & Data Science Portfolio` },
      {
        property: "og:description",
        content: "Building meaningful technology. Exploring ideas. Creating real-world impact.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const floatingKeywords = [
  { label: "AI", className: "left-2 top-10 sm:left-6", delay: "0s" },
  { label: "Data Science", className: "right-0 top-24 sm:right-2", delay: "1.2s" },
  { label: "Software", className: "left-4 bottom-24 sm:left-0", delay: "2.1s" },
  { label: "Innovation", className: "right-4 bottom-10 sm:right-8", delay: "0.6s" },
];

function Index() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <PageTransition>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 right-[-10%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(136,117,245,0.14),transparent_65%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-40 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(82,103,232,0.12),transparent_65%)]"
        />

        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-32 sm:px-8 sm:pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28">
          <div>
            <Reveal y={16}>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-accent px-4 py-1.5 text-xs font-bold tracking-[0.14em] text-accent-foreground uppercase">
                <Sparkles className="h-3.5 w-3.5" />
                {profile.roleLabel}
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.12] text-foreground sm:text-5xl lg:text-[4rem]">
                I turn ideas into <span className="text-gradient">meaningful digital experiences.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {profile.heroParagraph}
              </p>
            </Reveal>
            <Reveal delay={0.3} className="mt-9 flex flex-wrap items-center gap-3.5">
              <Link to="/projects" className={buttonVariants({ size: "lg" })}>
                EXPLORE MY PROJECTS
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/about" className={buttonVariants({ variant: "outline", size: "lg" })}>
                KNOW MORE ABOUT ME
              </Link>
            </Reveal>
            <Reveal delay={0.4} className="mt-9 flex items-center gap-4">
              <span className="text-xs font-bold tracking-[0.14em] text-muted-foreground uppercase">Find me on</span>
              <SocialLinks />
            </Reveal>
          </div>

          <Reveal delay={0.25} y={36}>
            <div className="relative mx-auto max-w-md">
              <div aria-hidden="true" className="absolute -inset-4 rounded-[2rem] bg-brand-gradient opacity-15 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-2 shadow-lift">
                <img
                  src={images.portrait}
                  alt={`Portrait of ${profile.fullName}`}
                  className="aspect-[4/4.4] w-full rounded-[1.6rem] object-cover object-top"
                />
              </div>

              {!prefersReducedMotion
                ? floatingKeywords.map((kw) => (
                    <span
                      key={kw.label}
                      style={{ animationDelay: kw.delay }}
                      className={cn(
                        "float-slow glass absolute rounded-full border border-border px-4 py-2 text-xs font-bold text-foreground shadow-card",
                        kw.className
                      )}
                    >
                      {kw.label}
                    </span>
                  ))
                : floatingKeywords.map((kw) => (
                    <span
                      key={kw.label}
                      className={cn(
                        "glass absolute rounded-full border border-border px-4 py-2 text-xs font-bold text-foreground shadow-card",
                        kw.className
                      )}
                    >
                      {kw.label}
                    </span>
                  ))}

              <div className="glass absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-4 rounded-2xl border border-border px-5 py-3 shadow-lift">
                <span className="font-display text-lg font-extrabold text-primary">{profile.cgpa}</span>
                <span className="text-xs font-semibold leading-tight text-muted-foreground">
                  CGPA
                  <br />
                  {profile.period}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Cinematic statement band ---------- */}
      <section className="relative">
        <div className="relative flex min-h-[22rem] items-center justify-center overflow-hidden sm:min-h-[26rem]">
          <VideoBackground
            src={videos.intro}
            poster={images.mova}
            overlayClassName="bg-[radial-gradient(ellipse_at_center,rgba(13,20,48,0.55),rgba(13,20,48,0.88))]"
          />
          <div className="relative z-10 mx-auto max-w-3xl px-5 py-16 text-center sm:px-8">
            <motion.p
              initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display text-2xl font-bold leading-snug text-white sm:text-3xl lg:text-[2.4rem]"
            >
              "{profile.tagline}"
            </motion.p>
          </div>
        </div>
      </section>

      {/* ---------- Compact overview ---------- */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            align="left"
            eyebrow="Who I am"
            title="More than a student — a builder in the making"
            description="I explore problems, develop solutions, and keep shipping. My work spans assistive technology, AI platforms and agri-tech, alongside internships in frontend development."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <Reveal delay={0.05} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h3 className="mt-4 font-display text-base font-bold text-foreground">Academics</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                B.E. AI &amp; Data Science at {profile.college}, {profile.period} — CGPA {profile.cgpa}.
              </p>
            </Reveal>
            <Reveal delay={0.15} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <Briefcase className="h-6 w-6 text-primary" />
              <h3 className="mt-4 font-display text-base font-bold text-foreground">Experience</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                ReactJS intern at Odisoft, frontend intern at LearnTricks, Internshala Student Partner.
              </p>
            </Reveal>
            <Reveal delay={0.25} className="rounded-2xl border border-border bg-card p-6 shadow-card sm:col-span-2">
              <Award className="h-6 w-6 text-primary" />
              <h3 className="mt-4 font-display text-base font-bold text-foreground">Highlights</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {achievements[0].title} ({achievements[0].year}) · {achievements[1].title} ({achievements[1].year}) · 460+ problems solved on LeetCode.
              </p>
              <Link
                to="/achievements"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-all hover:gap-2.5"
              >
                See all achievements <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Selected projects ---------- */}
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects built around real problems"
            description="Each project started with a practical question — and turned into a product I designed, built and refined."
          />
          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
          <Reveal className="mt-12 text-center" delay={0.1}>
            <Link to="/projects" className={buttonVariants({ variant: "outline", size: "lg" })}>
              VIEW ALL PROJECTS
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------- Featured showcase with live video ---------- */}
      <section className="relative overflow-hidden">
        <div className="relative">
          <VideoBackground
            src={videos.project}
            overlayClassName="bg-[linear-gradient(100deg,rgba(13,20,48,0.92)_20%,rgba(13,20,48,0.55)_70%,rgba(13,20,48,0.35))]"
          />
          <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-5 py-24 sm:px-8 sm:py-28 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <span className="rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold tracking-[0.14em] text-white uppercase backdrop-blur-sm">
                Featured build
              </span>
              <h2 className="mt-5 font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-[2.9rem] lg:leading-[1.15]">
                MOVA — engineering safer, more accessible mobility
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80">
                An ongoing intelligent mobility system combining sensors, computer vision and navigation to improve
                wheelchair safety and accessibility — from terrain detection to mobility risk analysis.
              </p>
              <div className="mt-8 flex flex-wrap gap-3.5">
                <Link
                  to="/projects/mova"
                  className={buttonVariants({ size: "lg", className: "h-12 bg-white text-navy hover:bg-white/90" })}
                >
                  EXPLORE MOVA
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/projects" className={buttonVariants({ variant: "light", size: "lg", className: "h-12" })}>
                  ALL PROJECTS
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Closing CTA ---------- */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <Reveal className="relative overflow-hidden rounded-[2rem] border border-border bg-card px-6 py-14 text-center shadow-card sm:px-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(136,117,245,0.18),transparent_70%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(82,103,232,0.16),transparent_70%)]"
          />
          <h2 className="relative font-display text-3xl font-extrabold text-foreground sm:text-4xl">
            Have an idea worth building?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            {experience.length > 0
              ? "I'm always open to collaborations, internships and conversations about meaningful technology."
              : null}
          </p>
          <Link to="/contact" className={cn("relative mt-8", buttonVariants({ size: "lg" }))}>
            LET'S CONNECT
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </PageTransition>
  );
}
