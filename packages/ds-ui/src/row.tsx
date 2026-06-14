import type { ReactNode } from "react";
import { cn } from "./cn";

/**
 * Row — a list line with leading content + trailing meta, divider above.
 * Used for Experience and Journey lists so every row shares one rhythm.
 * Renders as a link when href is provided.
 */
export function Row({
  lead,
  trail,
  href,
  first = false,
  interactive = false,
  className
}: {
  lead: ReactNode;
  trail?: ReactNode;
  href?: string;
  first?: boolean;
  interactive?: boolean;
  className?: string;
}) {
  const classes = cn(
    "group flex items-center justify-between gap-4 border-t border-ds-border py-5",
    first && "border-t-0",
    interactive &&
      "-mx-4 rounded-ds-lg px-4 transition-colors duration-[var(--ds-dur-fast)] ease-[var(--ds-ease-out-quart)] hover:bg-ds-surface-sunken",
    className
  );

  const inner = (
    <>
      <div className="flex min-w-0 items-center gap-3">{lead}</div>
      {trail && <div className="flex flex-none items-center gap-3">{trail}</div>}
    </>
  );

  return href ? (
    <a href={href} className={classes}>
      {inner}
    </a>
  ) : (
    <div className={classes}>{inner}</div>
  );
}
