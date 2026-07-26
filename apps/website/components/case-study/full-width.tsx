import type { ReactNode } from "react";
import { cn } from "@packages/ds-ui";

/**
 * Edge-to-edge on any realistic screen, no rails, no 1200px ledger cap —
 * but capped at 1800px so content stops growing unbounded on ultra-wide
 * monitors (traced from the Figma blog reference: nothing on that page
 * runs truly infinite-width even in its "full width" sections). The cap
 * lives on an INNER wrapper so the outer edge-to-edge padding behavior is
 * unaffected below 1800px.
 */
export function FullWidth({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className="w-full">
      <div className={cn("mx-auto max-w-[1800px] px-6 md:px-12", className)}>{children}</div>
    </div>
  );
}
