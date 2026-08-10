import type { ReactNode } from "react";
import { cn } from "@packages/ds-ui";
import { DotConnect } from "./dot-connect";

type PadTop = "content" | "title" | "both" | "none";
type PadBottom = "content" | "both" | "none";

// pt-18/pb-18 = 72px, pt-35 = 140px — traced from the actual homepage instances
// (title blocks measure 140 top / 72 bottom; plain content blocks measure a
// symmetric 72/72; a couple of blocks — About's bio+collage — measure a
// symmetric 140/140, hence "both").
const PAD_TOP: Record<PadTop, string> = {
  content: "pt-18",
  title: "pt-35",
  both: "pt-35",
  none: "pt-0"
};
const PAD_BOTTOM: Record<PadBottom, string> = {
  content: "pb-18",
  both: "pb-35",
  none: "pb-0"
};

/**
 * Figma "content-block" — the inner 1200px-wide unit every piece of homepage
 * content sits in: border-x + optional border-b (gray/200), corner
 * dot-connect marks at the bottom edge, and a padding rhythm that varies by
 * what it's introducing (a section title gets more top air than a plain
 * content row). `padX=false` is for children that already carry their own
 * horizontal padding (e.g. the divider-variant MetricCardDiv grid).
 */
export function ContentBlock({
  children,
  bottomBorder = true,
  padTop = "content",
  padBottom = "content",
  padX = true,
  className
}: {
  children?: ReactNode;
  bottomBorder?: boolean;
  padTop?: PadTop;
  padBottom?: PadBottom;
  padX?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative border-x border-ds-hairline",
        bottomBorder && "border-b",
        PAD_TOP[padTop],
        PAD_BOTTOM[padBottom],
        padX && "px-12",
        className
      )}
    >
      {children}
      <DotConnect side="left" />
      <DotConnect side="right" />
    </div>
  );
}
