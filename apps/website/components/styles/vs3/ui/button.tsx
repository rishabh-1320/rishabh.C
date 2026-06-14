import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "./cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-vs3-pill font-vs3-sans font-medium " +
  "transition-[transform,background-color,box-shadow,border-color] duration-[var(--vs3-dur-fast)] " +
  "ease-[var(--vs3-ease-out-quart)] focus-visible:outline-none focus-visible:ring-2 " +
  "focus-visible:ring-vs3-accent focus-visible:ring-offset-2 focus-visible:ring-offset-vs3-surface-page " +
  "active:translate-y-px";

const VARIANT: Record<Variant, string> = {
  primary: "bg-vs3-accent text-vs3-on-ink hover:bg-vs3-accent-hover hover:-translate-y-0.5 shadow-vs3-card",
  secondary:
    "bg-transparent text-vs3-ink ring-1 ring-inset ring-vs3-border-strong hover:bg-vs3-surface-sunken hover:-translate-y-0.5",
  ghost: "bg-transparent text-vs3-ink hover:bg-vs3-surface-sunken"
};

const SIZE: Record<Size, string> = {
  sm: "text-vs3-body-sm px-4 py-2",
  md: "text-vs3-body px-5 py-2.5",
  lg: "text-vs3-lead px-7 py-3.5"
};

type Common = { children: ReactNode; variant?: Variant; size?: Size; className?: string };

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: Common & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(BASE, VARIANT[variant], SIZE[size], className)} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: Common & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={cn(BASE, VARIANT[variant], SIZE[size], className)} {...props}>
      {children}
    </a>
  );
}
