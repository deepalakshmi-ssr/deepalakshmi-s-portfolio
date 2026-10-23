import { Github, Linkedin, Code2 } from "lucide-react";
import { profile, socials } from "@/data/content";
import { cn } from "@/lib/utils";

const icons: Record<string, typeof Github> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  LeetCode: Code2,
};

type SocialLinksProps = {
  className?: string;
  variant?: "icon" | "label";
};

export function SocialLinks({ className, variant = "icon" }: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      {socials.map((s) => {
        const Icon = icons[s.label] ?? Code2;
        if (variant === "label") {
          return (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <Icon className="h-4 w-4" strokeWidth={2} />
              {s.label}
            </a>
          );
        }
        return (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${s.label} profile of ${profile.fullName} (opens in a new tab)`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary hover:shadow-card"
          >
            <Icon className="h-4.5 w-4.5" strokeWidth={2} />
          </a>
        );
      })}
    </div>
  );
}
