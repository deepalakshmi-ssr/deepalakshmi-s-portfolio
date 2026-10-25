import { createFileRoute } from "@tanstack/react-router";
import { Award, Code2, ExternalLink, Github, Linkedin, Medal, Trophy } from "lucide-react";
import { PageTransition, Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { achievements, certifications, leetcode, profile, socials } from "@/data/content";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: `Achievements | ${profile.fullName}` },
      {
        name: "description",
        content:
          "Achievements of Deepalakshmi Sakthi Sabari Raman — hackathon wins, competitions, certifications and her LeetCode coding profile.",
      },
      { property: "og:title", content: `Achievements | ${profile.fullName}` },
      {
        property: "og:description",
        content: "Hackathon prizes, competitions, certifications and a 460+ problem LeetCode record.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AchievementsPage,
});

const socialIcons: Record<string, typeof Github> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  LeetCode: Code2,
};

function AchievementsPage() {
  return (
    <PageTransition>
      <section className="mx-auto max-w-6xl px-5 pb-24 pt-32 sm:px-8 sm:pt-36">
        <SectionHeading
          eyebrow="Achievements"
          title="Moments that mark the journey"
          description="Only verified accomplishments — competitions, hackathons, certifications and coding milestones."
        />

        {/* ---------- Awards ---------- */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {achievements.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="flex h-full gap-5 rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-7">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                  {i === 0 ? <Trophy className="h-5 w-5" /> : i === 1 ? <Medal className="h-5 w-5" /> : <Award className="h-5 w-5" />}
                </span>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <h2 className="font-display text-lg font-bold text-foreground">{item.title}</h2>
                    {item.year ? (
                      <span className="text-xs font-bold tracking-wide text-primary uppercase">{item.year}</span>
                    ) : null}
                  </div>
                  {item.organisation ? (
                    <p className="mt-0.5 text-sm font-semibold text-muted-foreground">{item.organisation}</p>
                  ) : null}
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ---------- LeetCode ---------- */}
        <Reveal className="mt-16" delay={0.05}>
          <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-card">
            <div className="grid gap-10 p-8 sm:p-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-accent px-4 py-1.5 text-xs font-bold tracking-[0.14em] text-accent-foreground uppercase">
                  <Code2 className="h-3.5 w-3.5" />
                  Coding profile
                </span>
                <h2 className="mt-5 font-display text-3xl font-bold text-foreground">LeetCode</h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                  Regular problem-solving practice across data structures and algorithms. {leetcode.note}
                </p>
                <a
                  href={profile.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary transition-all hover:gap-3"
                >
                  View LeetCode profile <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                {[
                  { value: leetcode.solved, label: "Problems solved" },
                  { value: leetcode.rating, label: "Max rating" },
                  { value: leetcode.rank, label: "Global rank" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center rounded-2xl border border-border bg-surface p-5 text-center sm:p-6"
                  >
                    <span className="font-display text-xl font-extrabold text-primary sm:text-2xl">{stat.value}</span>
                    <span className="mt-2 text-[0.6875rem] font-semibold leading-tight text-muted-foreground sm:text-xs">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* ---------- Certifications ---------- */}
        <div className="mt-16">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">Certifications</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, i) => (
              <Reveal key={cert.course} delay={i * 0.05}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift">
                  <span className="text-xs font-bold tracking-wide text-primary uppercase">{cert.year}</span>
                  <h3 className="mt-2 flex-1 font-display text-base font-bold leading-snug text-foreground">{cert.course}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{cert.provider}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ---------- Coding profiles ---------- */}
        <div className="mt-16">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">Find me online</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {socials.map((s, i) => {
              const Icon = socialIcons[s.label] ?? Code2;
              return (
                <Reveal key={s.label} delay={i * 0.08}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift"
                  >
                    <span className="bg-brand-gradient flex h-11 w-11 items-center justify-center rounded-xl text-primary-foreground shadow-card">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="flex-1">
                      <span className="block font-display text-sm font-bold text-foreground">{s.label}</span>
                      <span className="block text-xs text-muted-foreground">Open profile</span>
                    </span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
