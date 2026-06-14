import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "./cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-pill font-sans font-semibold " +
  "transition-[transform,background-color,box-shadow,border-color] duration-[var(--dur-fast)] " +
  "ease-[var(--ease-out-quart)] focus-visible:outline-none focus-visible:ring-2 " +
  "focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 " +
  "focus-visible:ring-offset-[color:var(--surface-base)] active:translate-y-px";

const VARIANT: Record<Variant, string> = {
  primary:
    "bg-accent text-[color:var(--text-inverse)] hover:bg-accent-hover hover:-translate-y-0.5 shadow-card-rest",
  secondary:
    "bg-transparent text-[color:var(--text-primary)] ring-1 ring-inset ring-[color:var(--border-strong)] " +
    "hover:bg-surface-soft hover:-translate-y-0.5",
  ghost:
    "bg-transparent text-[color:var(--text-primary)] hover:bg-surface-soft"
};

const SIZE: Record<Size, string> = {
  sm: "text-body-sm px-4 py-2",
  md: "text-body px-6 py-3",
  lg: "text-h4 px-8 py-4"
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
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
}: CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={cn(BASE, VARIANT[variant], SIZE[size], className)} {...props}>
      {children}
    </a>
  );
}
