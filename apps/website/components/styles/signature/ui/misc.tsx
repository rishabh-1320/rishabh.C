import type { ReactNode } from "react";
import { cn } from "./cn";
import { Text } from "./text";

/** Divider — the only horizontal rule. */
export function Divider({ className }: { className?: string }) {
  return <hr className={cn("border-0 border-t border-[color:var(--border-default)]", className)} />;
}

/** Eyebrow — small uppercase label, optionally with a leading dot. */
export function Eyebrow({
  children,
  dot = false,
  className
}: {
  children: ReactNode;
  dot?: boolean;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      {dot && <span className="h-1.5 w-1.5 rounded-pill bg-accent" aria-hidden="true" />}
      <Text variant="eyebrow" as="span">
        {children}
      </Text>
    </span>
  );
}

/** TextLink — inline accent link with animated underline. */
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
        "font-sans text-body font-medium text-[color:var(--accent)] underline decoration-[color:var(--accent-soft)] underline-offset-4 transition-colors duration-[var(--dur-fast)] hover:decoration-[color:var(--accent)]",
        className
      )}
    >
      {children}
    </a>
  );
}

/** IconBadge — rounded tile holding a logo letter or small mark. */
export function IconBadge({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex h-10 w-10 flex-none items-center justify-center rounded-md bg-surface-soft font-sans text-body font-semibold text-[color:var(--text-primary)]",
        className
      )}
      aria-hidden="true"
    >
      {children}
    </span>
  );
}
