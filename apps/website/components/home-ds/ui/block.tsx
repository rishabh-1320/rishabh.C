import type { ReactNode } from "react";
import { cn } from "@packages/ds-ui";

type BlockWidth = "hp" | "wide";
type BlockBorder = "x" | "none";
/**
 * The asymmetric vertical rhythm: an opening block is tall on top (72) and
 * short on the bottom (24); the block that follows mirrors that (24/72) so
 * the joint between them reads as one even 48px gap, while the outer edges
 * of the section read as one even 72px. `both` is for a section with a
 * single block; `joint` is for a block sandwiched between two others.
 */
type BlockPad = "open-top" | "open-bottom" | "both" | "joint" | "none";

const WIDTH_CLASS: Record<BlockWidth, string> = {
  hp: "max-w-ds-hp",
  wide: "max-w-ds-hp-wide"
};

const PAD_CLASS: Record<BlockPad, string> = {
  "open-top": "pt-18 pb-6",
  "open-bottom": "pt-6 pb-18",
  both: "py-18",
  joint: "py-6",
  none: ""
};

/**
 * L4 — the column-width frame. Always the same max-width as every other
 * Block on the page, so its vertical hairlines land on the same x and read
 * as one continuous line when Blocks stack (across SectionRows, across
 * Sections). Owns the asymmetric padding rhythm + the inner 24px gutter.
 */
export function Block({
  children,
  width = "hp",
  border = "x",
  pad = "both",
  className
}: {
  children: ReactNode;
  width?: BlockWidth;
  border?: BlockBorder;
  pad?: BlockPad;
  className?: string;
}) {
  return (
    <div className={cn("w-full", WIDTH_CLASS[width], border === "x" && "border-x border-ds-hairline")}>
      <div className={cn("px-6", PAD_CLASS[pad], className)}>{children}</div>
    </div>
  );
}
