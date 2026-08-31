import type { ReactNode } from "react";
import { cn } from "@packages/ds-ui";
import { VisualBlock } from "./visual-block";

/**
 * Figma "Visual Blick" (node 578:21799) — two Visual Blocks side by side in a
 * full-bleed block, 24px apart, each taking half the width. Captions on, badge
 * row off (`badge={false}` on both instances).
 *
 * Stacks below `lg`, matching ThreeColumnBlock — two 837:471 wells side by side
 * on a phone would each be about 170px wide.
 */
export function VisualPair({
  left,
  right,
  leftCaption,
  rightCaption,
  className
}: {
  left?: ReactNode;
  right?: ReactNode;
  leftCaption?: string;
  rightCaption?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex w-full flex-col items-start gap-6 lg:flex-row", className)}>
      <VisualBlock caption={leftCaption} className="min-w-0 lg:flex-1">
        {left}
      </VisualBlock>
      <VisualBlock caption={rightCaption} className="min-w-0 lg:flex-1">
        {right}
      </VisualBlock>
    </div>
  );
}
