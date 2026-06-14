import type { ReactNode } from "react";
import { cn } from "./cn";
import { Text } from "./text";

export function Divider({ className }: { className?: string }) {
  return <hr className={cn("border-0 border-t border-vs3-border", className)} />;
}

/** Eyebrow — mono uppercase label with a leading dot (technical feel). */
export function Eyebrow({
  children,
  dot = true,
  className
}: {
  children: ReactNode;
  dot?: boolean;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      {dot && <span className="h-1.5 w-1.5 rounded-vs3-pill bg-vs3-accent" aria-hidden="true" />}
      <Text variant="eyebrow" as="span">
        {children}
      </Text>
    </span>
  );
}

export function TextLink({
  children,
  href,
  className
}: {
  children: ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "font-vs3-sans text-vs3-body font-medium text-vs3-accent underline decoration-vs3-accent-soft underline-offset-4 transition-colors duration-[var(--vs3-dur-fast)] hover:decoration-vs3-accent",
        className
      )}
    >
      {children}
    </a>
  );
}

/** IconBadge — small rounded tile holding a logo letter / mark. */
export function IconBadge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex h-9 w-9 flex-none items-center justify-center rounded-vs3-md bg-vs3-surface-sunken font-vs3-mono text-vs3-body-sm font-medium text-vs3-ink",
        className
      )}
      aria-hidden="true"
    >
      {children}
    </span>
  );
}
