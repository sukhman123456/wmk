import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "accent" | "dark" | "outline" | "ghostLight";

const variants: Record<Variant, string> = {
  accent:
    "bg-accent text-accent-foreground hover:brightness-95 shadow-[var(--shadow-card)]",
  dark: "bg-primary text-primary-foreground hover:bg-steel",
  outline:
    "border border-input bg-card text-foreground hover:border-foreground/40 hover:bg-secondary",
  ghostLight:
    "border border-primary-foreground/25 text-primary-foreground hover:bg-primary-foreground/10",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wider transition-all duration-200 active:translate-y-px min-h-12";

export function ActionLink({
  href,
  variant = "accent",
  className,
  children,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a href={href} className={cn(base, variants[variant], className)}>
      {children}
    </a>
  );
}

export function ActionButton({
  variant = "accent",
  className,
  children,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </button>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  invert?: boolean;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow ? (
        <p className={cn("eyebrow", invert && "text-accent")}>{eyebrow}</p>
      ) : null}
      <h2
        className={cn(
          "mt-3 text-3xl leading-[1.1] md:text-[2.75rem]",
          invert ? "text-primary-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed md:text-lg",
            invert ? "text-primary-foreground/75" : "text-muted-foreground",
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
