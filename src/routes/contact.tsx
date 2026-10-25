import { createFileRoute } from "@tanstack/react-router";
import { Code2, ExternalLink, Github, Linkedin, Mail, Phone } from "lucide-react";
import { PageTransition, Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { VideoBackground } from "@/components/VideoBackground";
import { buttonVariants } from "@/components/ui/button";
import { profile, videos } from "@/data/content";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact | ${profile.fullName}` },
      {
        name: "description",
        content:
          "Contact Deepalakshmi Sakthi Sabari Raman — reach out about collaborations, internships and building meaningful technology.",
      },
      { property: "og:title", content: `Contact | ${profile.fullName}` },
      {
        property: "og:description",
        content: "Let's build something meaningful — get in touch by email or phone.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const channels = [
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      Icon: Mail,
      note: "Best for detailed messages",
    },
    {
      label: "Phone",
      value: profile.phone,
      href: profile.phoneHref,
      Icon: Phone,
      note: "For quick conversations",
    },
  ];

  const profiles = [
    { label: "GitHub", href: profile.github, Icon: Github },
    { label: "LinkedIn", href: profile.linkedin, Icon: Linkedin },
    { label: "LeetCode", href: profile.leetcode, Icon: Code2 },
  ];

  return (
    <PageTransition>
      <section className="mx-auto max-w-6xl px-5 pb-24 pt-32 sm:px-8 sm:pt-36">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build Something Meaningful."
          description="I'm always interested in learning, collaborating, exploring new ideas, and working on technology that creates real-world impact."
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2">
          {channels.map((channel, i) => (
            <Reveal key={channel.label} delay={i * 0.08}>
              <a
                href={channel.href}
                className="group flex h-full items-start gap-5 rounded-2xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="bg-brand-gradient flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-primary-foreground shadow-card">
                  <channel.Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-lg font-bold text-foreground">{channel.label}</span>
                  <span className="mt-1 block truncate text-sm font-semibold text-primary">{channel.value}</span>
                  <span className="mt-2 block text-xs text-muted-foreground">{channel.note}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto mt-6 grid max-w-4xl gap-4 sm:grid-cols-3">
          {profiles.map((p, i) => (
            <Reveal key={p.label} delay={0.15 + i * 0.07}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <p.Icon className="h-4.5 w-4.5" />
                </span>
                <span className="flex-1 font-display text-sm font-bold text-foreground">{p.label}</span>
                <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-12 max-w-4xl text-center" delay={0.2}>
          <p className="text-sm text-muted-foreground">
            Prefer to start right away? A short email works best — I usually reply within a day.
          </p>
          <a href={`mailto:${profile.email}`} className={cn("mt-5", buttonVariants({ size: "lg" }))}>
            SEND ME AN EMAIL
            <Mail className="h-4 w-4" />
          </a>
        </Reveal>
      </section>

      {/* ---------- Cinematic closing ---------- */}
      <section className="relative">
        <div className="relative flex min-h-[20rem] items-center justify-center overflow-hidden sm:min-h-[24rem]">
          <VideoBackground
            src={videos.contact}
            overlayClassName="bg-[radial-gradient(ellipse_at_center,rgba(13,20,48,0.5),rgba(13,20,48,0.85))]"
          />
          <div className="relative z-10 mx-auto max-w-2xl px-5 py-16 text-center sm:px-8">
            <Reveal>
              <p className="font-display text-2xl font-bold text-white sm:text-3xl">
                Building meaningful technology — one idea at a time.
              </p>
              <p className="mt-4 text-sm text-white/75">Thank you for visiting my portfolio.</p>
            </Reveal>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
