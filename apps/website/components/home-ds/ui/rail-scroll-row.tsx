import type { ReactNode } from "react";
import { cn } from "@packages/ds-ui";

/**
 * A horizontally-scrolling row whose visible window is clipped exactly at the
 * column rails, not at a padded gutter — matching Figma (AI Explorations,
 * Testimonials): the trailing visible card is cut in half by the rail line,
 * and any further cards sit fully hidden behind it.
 *
 * Mechanism: `overflow-x-auto` sits on a `padX="none"` Block, so its clipping
 * box is exactly the rail-to-rail width (no inner padding to inset the crop).
 * The 24px gutter inset for the FIRST card lives inside the scrolling content
 * itself (`px-6` on the flex row) instead of on the clipping box, so it
 * doesn't shrink the visible window — only the on-load starting offset.
 * Children own their own fixed width + `shrink-0`.
 */
export function RailScrollRow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className="overflow-x-auto">
      <div className={cn("flex w-max px-6", className)}>{children}</div>
    </div>
  );
}
