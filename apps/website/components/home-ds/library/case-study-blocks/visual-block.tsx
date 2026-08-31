import type { ReactNode } from "react";
import { cn } from "@packages/ds-ui";
import { BadgeGroup } from "../misc/badge-group";
import { TextContainerCase } from "../texts/text-container-case";

/**
 * Figma "Visual Block" (node 572:7926) — a bordered 837:471 media well with an
 * optional caption strip beneath it (badge row + italic caption).
 *
 * Two things are deliberately not copied literally from the Figma export:
 *  - The symbol's `w-[837px]` is the canvas frame width, not a constraint. The
 *    real instance inside `side-text` (node 573:8034) stretches to `w-full`, so
 *    the width comes from the parent here and only the *ratio* is pinned.
 *  - Figma models the caption strip with a `visualOnly` boolean. Here it is
 *    inferred instead: the strip renders when there is something to put in it.
 *
 * The 1px border is Figma's `gray/200` #E4E4E7, which is exactly the existing
 * `ds-hairline` token — reused rather than re-declared.
 */
export function VisualBlock({
  children,
  badges,
  caption,
  className,
  visualClassName
}: {
  /** The real media. When omitted, the Figma "Image / Video" placeholder renders. */
  children?: ReactNode;
  badges?: string[];
  caption?: string;
  className?: string;
  visualClassName?: string;
}) {
  const hasCaption = Boolean(caption) || Boolean(badges && badges.length > 0);

  return (
    <figure className={cn("flex w-full flex-col items-start gap-4", className)}>
      <div
        className={cn(
          "relative flex aspect-[837/471] w-full flex-col items-start overflow-hidden border border-ds-hairline",
          visualClassName
        )}
      >
        {children ?? <MediaPlaceholder />}
      </div>

      {hasCaption && (
        <figcaption className="flex w-full flex-col items-start gap-4">
          {badges && badges.length > 0 && <BadgeGroup items={badges} />}
          {caption && (
            // `as="span"` because this already sits inside the <figcaption>.
            <TextContainerCase type="Figure Caption" as="span" className="w-full">
              {caption}
            </TextContainerCase>
          )}
        </figcaption>
      )}
    </figure>
  );
}

/** Figma "Video cover" (node 572:7921) — the empty-state play button + label. */
function MediaPlaceholder() {
  return (
    <div className="absolute left-1/2 top-1/2 flex w-[119px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-ds-pill bg-ds-media-play-bg py-6 pl-7 pr-6 shadow-ds-media-play">
        {/* Asymmetric padding (28/24) is Figma's optical centering for the glyph. */}
        <span aria-hidden className="w-[20px] font-ds-inter text-[20px] font-normal leading-none text-ds-media-play-glyph">
          ▶
        </span>
      </div>
      <span className="w-full font-ds-inter text-[18px] font-medium leading-none text-ds-media-placeholder">
        Image / Video
      </span>
    </div>
  );
}
