import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "./cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-ds-pill font-ds-sans font-semibold " +
  "transition-[transform,background-color,box-shadow,border-color] duration-[var(--ds-dur-fast)] " +
  "ease-[var(--ds-ease-out-quart)] focus-visible:outline-none focus-visible:ring-2 " +
  "focus-visible:ring-ds-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ds-surface-page " +
  "active:translate-y-px";

const VARIANT: Record<Variant, string> = {
  primary:
    "bg-ds-accent text-ds-on-ink hover:bg-ds-accent-hover hover:-translate-y-0.5 shadow-ds-card",
  secondary:
    "bg-transparent text-ds-ink ring-1 ring-inset ring-ds-border-strong hover:bg-ds-surface-sunken hover:-translate-y-0.5",
  ghost: "bg-transparent text-ds-ink hover:bg-ds-surface-sunken"
};

const SIZE: Record<Size, string> = {
  sm: "text-ds-body-sm px-4 py-2",
  md: "text-ds-body px-6 py-3",
  lg: "text-ds-lead px-8 py-4"
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
