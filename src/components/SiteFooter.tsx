import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Code2, Mail } from "lucide-react";
import { navLinks, profile } from "@/data/content";

export function SiteFooter() {
  const year = 2026;
  const socialItems = [
    { label: "GitHub", href: profile.github, Icon: Github },
    { label: "LinkedIn", href: profile.linkedin, Icon: Linkedin },
    { label: "LeetCode", href: profile.leetcode, Icon: Code2 },
    { label: "Email", href: `mailto:${profile.email}`, Icon: Mail },
  ];

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <span className="bg-brand-gradient flex h-10 w-10 items-center justify-center rounded-xl font-display text-sm font-bold text-primary-foreground">
                {profile.monogram}
              </span>
              <span className="font-display text-base font-bold text-foreground">{profile.fullName}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Designed with purpose. Built with curiosity.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-col gap-2.5">
            <span className="text-xs font-bold tracking-[0.14em] text-muted-foreground uppercase">Navigate</span>
            <div className="grid grid-cols-2 gap-x-10 gap-y-2">
              {navLinks.map((link) => (
                <Link key={link.to} to={link.to} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="flex flex-col gap-2.5">
            <span className="text-xs font-bold tracking-[0.14em] text-muted-foreground uppercase">Elsewhere</span>
            <div className="flex flex-col gap-2.5">
              {socialItems.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="inline-flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <span>© {year} {profile.fullName}. All rights reserved.</span>
          <span>AI &amp; Data Science · Sri Eshwar College of Engineering</span>
        </div>
      </div>
    </footer>
  );
}
