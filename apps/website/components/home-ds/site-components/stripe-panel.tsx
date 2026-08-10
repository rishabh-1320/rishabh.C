import type { ReactNode } from "react";
import { cn } from "@packages/ds-ui";

const STRIPE_LAYER =
  "repeating-linear-gradient(90deg, var(--ds-color-stripe-line) 0, var(--ds-color-stripe-line) 1px, transparent 1px, transparent 12px)";

/**
 * A subtly pinstriped overlay — powers the hero's lower blue-wash area. The
 * stripe is a repeating-linear-gradient built from a single token
 * (--ds-color-stripe-line), so no raw value ever appears in a section file.
 *
 * The stripes + gradient wash render on their own absolutely-positioned
 * layer behind `children`, masked to fade in gradually from the panel's top
 * edge — putting the mask on the panel itself would cut off with a hard
 * rectangular edge right where the panel starts, and would also fade the
 * top of whatever's in `children` (the hero image sits only ~24px below
 * that edge). Keeping the wash on its own layer means the fade never
 * touches `children` — it stays fully crisp.
 *
 * `background` is an optional second CSS `background-image` layer (e.g. a
 * `linear-gradient(...)` built from `var(--ds-color-*)` refs) drawn BELOW the
 * stripes in the same property.
 */
export function StripePanel({
  children,
  className,
  background
}: {
  children: ReactNode;
  className?: string;
  background?: string;
}) {
  return (
    <div className={cn("relative", className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_340px)]"
        style={{ backgroundImage: background ? `${STRIPE_LAYER}, ${background}` : STRIPE_LAYER }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
