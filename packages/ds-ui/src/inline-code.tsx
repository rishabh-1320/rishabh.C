import type { ReactNode } from "react";
import { cn } from "./cn";

/** InlineCode — inline monospace token for code references in prose. */
export function InlineCode({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <code
      className={cn(
        "inline rounded-ds-sm bg-ds-surface-sunken px-[5px] align-[1px] font-mono text-[0.85em] leading-none text-ds-ink",
        className
      )}
    >
      {children}
    </code>
  );
}
