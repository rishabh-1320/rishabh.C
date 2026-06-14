import type { ReactNode } from "react";
import { cn } from "./cn";

/**
 * Row — a list line with leading content + trailing meta, divider above.
 * Used for Experience and Works lists so every row shares one rhythm.
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
    "group flex items-center justify-between gap-4 py-5 border-t border-[color:var(--border-default)]",
    first && "border-t-0",
    interactive &&
      "transition-colors duration-[var(--dur-fast)] ease-[var(--ease-out-quart)] hover:bg-surface-soft -mx-4 px-4 rounded-lg",
    className
  );

  const inner = (
    <>
      <div className="flex min-w-0 items-center gap-3">{lead}</div>
      {trail && <div className="flex flex-none items-center gap-3">{trail}</div>}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {inner}
      </a>
    );
  }
  return <div className={classes}>{inner}</div>;
}
