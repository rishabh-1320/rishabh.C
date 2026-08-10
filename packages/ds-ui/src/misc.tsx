import type { ReactNode } from "react";
import { cn } from "./cn";

/** TextLink — inline accent link with underline. */
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
        "font-ds-sans text-ds-body font-medium text-ds-accent underline decoration-ds-accent-soft underline-offset-4 transition-colors duration-[var(--ds-dur-fast)] hover:decoration-ds-accent",
        className
      )}
    >
      {children}
    </a>
  );
}
