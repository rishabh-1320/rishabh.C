import type { ReactNode } from "react";
import { cn } from "@packages/ds-ui";

type CaseShellProps = {
  children: ReactNode;
  /** Adds the left running-label/TOC column on desktop; single column on mobile. */
  sidebar?: boolean;
  className?: string;
};

/**
 * Case-study reading column — centers content at max-w-1120 with the same
 * gutter as the ds `Container`. Left plain (no vertical hairlines): unlike the
 * homepage's ledger `Block`, a long-form reading page separates sections with
 * whitespace, not column rules. Full-bleed dividers are a plain `<HRule/>`
 * placed as this component's *sibling* in the page, not nested inside it —
 * `.ds-root`'s block-level flow is already full width, so HRule bleeds past
 * this column exactly like it does past `SectionRow` on the homepage.
 */
export function CaseShell({ children, sidebar = false, className }: CaseShellProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1120px] px-5 md:px-8",
        // grid-cols-1 (not a bare `grid`) matters here: Tailwind's grid-cols-N
        // utilities set track sizing to minmax(0,1fr); a plain `grid` leaves
        // the implicit column's minimum at content's max-content width, which
        // let the TOC's horizontal-scroll pill row blow out the whole page on
        // mobile instead of scrolling within its own overflow-x-auto.
        sidebar && "grid grid-cols-1 gap-5 md:grid-cols-[220px_minmax(0,1fr)] md:gap-10",
        className
      )}
    >
      {children}
    </div>
  );
}
