import type { ReactNode } from "react";
import { cn } from "@packages/ds-ui";
import { CATEGORY, type CategoryTone } from "./category-tone";
import { TextContainerCase } from "../texts/text-container-case";
import { VisualBlock } from "./visual-block";

/**
 * Figma "side-text" (node 573:8042) — a marginal column: category eyebrow,
 * section title, a visual, then a short paragraph. Sized by its parent (the
 * symbol's `w-[426px]` is the canvas frame, and the block is `w-full` inside).
 *
 * **Every part is optional.** The assembled template (node 573:8093) instances
 * this eight times in six different combinations — eyebrow+title, title only,
 * title+body, title+visual+body, eyebrow+body, and the full four — by toggling
 * each child's visibility. Modelling that as four independent optional props is
 * what lets one component cover all of them.
 *
 * The visual is its own case: the full-variant instances show `VisualBlock`'s
 * placeholder well with no real media in it, so `showVisual` exists to render
 * the well without passing a child. Passing `visual` implies it.
 */
export function SideText({
  eyebrow,
  title,
  body,
  visual,
  showVisual = false,
  category = "blue",
  className
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
  /** The real media for the nested Visual Block. Implies `showVisual`. */
  visual?: ReactNode;
  /** Render the Visual Block's placeholder well even with no `visual` passed. */
  showVisual?: boolean;
  category?: CategoryTone;
  className?: string;
}) {
  const withVisual = Boolean(visual) || showVisual;

  return (
    <div className={cn("flex w-full flex-col items-start gap-4 overflow-clip", className)}>
      {eyebrow && (
        <TextContainerCase type="Eyebrow" className={CATEGORY[category].eyebrow}>
          {eyebrow}
        </TextContainerCase>
      )}
      {title && <TextContainerCase type="Section Title">{title}</TextContainerCase>}
      {withVisual && <VisualBlock>{visual}</VisualBlock>}
      {body && <TextContainerCase type="Prose">{body}</TextContainerCase>}
    </div>
  );
}
