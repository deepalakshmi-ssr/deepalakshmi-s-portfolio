import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, align = "center", className }: SectionHeadingProps) {
  return (
    <Reveal className={cn("max-w-2xl", align === "center" ? "mx-auto text-center" : "text-left", className)}>
      <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-accent px-4 py-1.5 text-xs font-bold tracking-[0.14em] text-accent-foreground uppercase">
        {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl font-bold text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
        {title}
      </h2>
      {description ? <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem]">{description}</p> : null}
    </Reveal>
  );
}
