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
/**
 * Horizontal inset from the vertical rails (Figma "Homepage final" grid):
 * section-title rows inset 48 (`wide`), card rows inset 24 (`gutter`, the
 * default), and the methodology grid runs flush to the rails (`none`).
 */
type BlockPadX = "gutter" | "wide" | "none";

const WIDTH_CLASS: Record<BlockWidth, string> = {
  hp: "max-w-ds-hp",
  wide: "max-w-ds-hp-wide"
};

const PAD_CLASS: Record<BlockPad, string> = {
  "open-top": "pt-18 pb-6",
  "open-bottom": "pt-6 pb-18",
  // Section-title rhythm from Figma: 140px above the eyebrow/title, 48px below.
  both: "pt-35 pb-12",
  joint: "py-6",
  none: ""
};

const PADX_CLASS: Record<BlockPadX, string> = {
  gutter: "px-6",
  wide: "px-12",
  none: "px-0"
};

/**
 * L4 — the column-width frame. Always the same max-width as every other
 * Block on the page, so its vertical hairlines land on the same x and read
 * as one continuous line when Blocks stack (across SectionRows, across
 * Sections). Owns the asymmetric padding rhythm + the inner gutter.
 */
export function Block({
  children,
  width = "hp",
  border = "x",
  pad = "both",
  padX = "gutter",
  className
}: {
  // Optional: a Block with no children is a legitimate empty rail-bounded
  // spacer (Figma has these between sections — e.g. the AI-workflow gap).
  children?: ReactNode;
  width?: BlockWidth;
  border?: BlockBorder;
  pad?: BlockPad;
  padX?: BlockPadX;
  className?: string;
}) {
  return (
    <div className={cn("w-full", WIDTH_CLASS[width], border === "x" && "border-x border-ds-hairline")}>
      <div className={cn(PADX_CLASS[padX], PAD_CLASS[pad], className)}>{children}</div>
    </div>
  );
}
