import type { ReactNode } from "react";
import { cn } from "@packages/ds-ui";

/**
 * A horizontally-scrolling row (Testimonials): clips at the parent
 * ContentBlock's own edge (its standard 48px padding), letting a card that
 * doesn't fit sit half-hidden until scrolled — matching the Figma instance,
 * which clips inside the content-block's normal padding rather than
 * extending full-bleed to the page rails. No padding of its own; the parent
 * ContentBlock supplies it. Children own their own fixed width + `shrink-0`.
 */
export function RailScrollRow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className="overflow-x-auto">
      <div className={cn("flex w-max", className)}>{children}</div>
    </div>
  );
}
