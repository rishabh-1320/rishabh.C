import type { ReactNode } from "react";
import { cn } from "@packages/ds-ui";

const STRIPE_LAYER =
  "repeating-linear-gradient(90deg, var(--ds-color-stripe-line) 0, var(--ds-color-stripe-line) 1px, transparent 1px, transparent 12px)";

/** How far the stripes ramp up from nothing at the panel's top edge. */
const FADE_IN_PX = 340;

// ── Cross-fade geometry (crossFade), measured against the homepage ──
// The hero's stripes used to stop dead on the section boundary, which read as
// a hard seam. With `crossFade` the layer instead overhangs the panel and dies
// out on one continuous ramp that straddles the boundary, weighted to the
// section above: the lines are already well faded by the time they cross, and
// only the faint tail lands below.
//
// BLEED_PX overhangs into the social-proof band (100px tall), stopping 24px
// short of the stats block so the tail never crowds the cards. FADE_OUT_PX is
// the whole ramp — 140px of it above the boundary, the remaining 76px below —
// anchored to the layer's bottom via calc() so it survives a change in hero
// height rather than drifting off the seam.
const BLEED_PX = 76;
const FADE_OUT_PX = 216;

/**
 * A subtly pinstriped overlay — powers the hero's lower blue-wash area. The
 * stripe is a repeating-linear-gradient built from a single token
 * (--ds-color-stripe-line), so no raw value ever appears in a section file.
 *
 * The stripes render on their own absolutely-positioned layer behind
 * `children`, masked to fade in gradually from the panel's top edge — putting
 * the mask on the panel itself would cut off with a hard rectangular edge
 * right where the panel starts, and would also fade the top of whatever's in
 * `children` (the hero image sits only ~24px below that edge). Keeping the
 * wash on its own layer means the fade never touches `children` — it stays
 * fully crisp.
 *
 * `background` is an optional second CSS `background-image` layer (e.g. a
 * `linear-gradient(...)` built from `var(--ds-color-*)` refs) drawn BELOW the
 * stripes in the same property.
 *
 * `crossFade` lets the stripes bleed past the panel and fade out across the
 * section boundary instead of stopping at it — see the geometry note above.
 * It lifts the layer above the following section's own background (which
 * paints later in DOM order and would otherwise hide the overhang), so
 * `children` is lifted higher still to keep the hero image above the stripes.
 *
 * Lives outside the ds drift-scanned `sections/` tree, so the raw px values
 * here are allowed; sections consume it token-free.
 */
export function StripePanel({
  children,
  className,
  background,
  crossFade = false
}: {
  children: ReactNode;
  className?: string;
  background?: string;
  crossFade?: boolean;
}) {
  const maskImage = crossFade
    ? `linear-gradient(to bottom, transparent 0px, black ${FADE_IN_PX}px, black calc(100% - ${FADE_OUT_PX}px), transparent 100%)`
    : `linear-gradient(to bottom, transparent 0px, black ${FADE_IN_PX}px)`;

  return (
    <div className={cn("relative", className)}>
      <div
        aria-hidden
        className={cn("pointer-events-none absolute inset-x-0 top-0", crossFade ? "z-10" : "bottom-0")}
        style={{
          ...(crossFade ? { bottom: -BLEED_PX } : null),
          backgroundImage: background ? `${STRIPE_LAYER}, ${background}` : STRIPE_LAYER,
          maskImage,
          WebkitMaskImage: maskImage
        }}
      />
      <div className={cn("relative", crossFade && "z-20")}>{children}</div>
    </div>
  );
}
