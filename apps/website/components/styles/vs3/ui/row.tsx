import type { ReactNode } from "react";
import { cn } from "./cn";

/** Row — a list line with leading content + trailing meta, divider above. */
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
    "group flex items-center justify-between gap-4 border-t border-vs3-border py-5",
    first && "border-t-0",
    interactive &&
      "-mx-4 rounded-vs3-md px-4 transition-colors duration-[var(--vs3-dur-fast)] ease-[var(--vs3-ease-out-quart)] hover:bg-vs3-surface-sunken",
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
