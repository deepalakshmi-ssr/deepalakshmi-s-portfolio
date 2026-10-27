import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold tracking-wide transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-gradient text-primary-foreground shadow-card hover:shadow-lift hover:-translate-y-0.5 active:translate-y-0",
        violet:
          "bg-violet text-primary-foreground shadow-card hover:shadow-lift hover:-translate-y-0.5 active:translate-y-0",
        outline:
          "border border-border bg-background text-foreground hover:border-primary/40 hover:text-primary hover:-translate-y-0.5 active:translate-y-0",
        ghost: "text-foreground hover:bg-accent hover:text-accent-foreground",
        light:
          "bg-white/12 text-white border border-white/25 backdrop-blur-sm hover:bg-white/20 hover:-translate-y-0.5",
      },
      size: {
        default: "h-10 px-4 text-sm",
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-6 text-sm",
        lg: "h-13 px-8 text-sm",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export { buttonVariants };
