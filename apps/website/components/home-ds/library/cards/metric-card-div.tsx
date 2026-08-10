import { Text, cn } from "@packages/ds-ui";
import { AnimatedCounter } from "../../site-components/scroll/animated-counter";

export type MetricCardDivVariant = "default" | "divider" | "panel";

/**
 * Figma "metric-card-div" — a number+label stat.
 *  - `divider` (Figma's "Property 1=Variant2") adds a right hairline + its
 *    own padding, used when several sit edge-to-edge inside a zero-padding
 *    ContentBlock (the homepage stats row, 4-up, last card's border landing
 *    exactly on the ContentBlock's own edge).
 *  - `panel` — same padding/gap as `divider` but no border and grows to
 *    fill (flex-1) — the case-study metrics row (node 480:4071), 3-up,
 *    equal width, no dividers between cards.
 */
export function MetricCardDiv({
  value,
  label,
  variant = "default",
  animate = true,
  className
}: {
  value: string;
  label: string;
  variant?: MetricCardDivVariant;
  animate?: boolean;
  className?: string;
}) {
  const isDivider = variant === "divider";
  const isPanel = variant === "panel";
  return (
    <div
      className={cn(
        "flex flex-col items-start",
        isDivider
          ? "gap-12 border-r border-ds-hairline px-12 pb-18 pt-12"
          : isPanel
            ? "flex-1 gap-12 px-12 pb-18 pt-12"
            : "justify-center gap-2",
        className
      )}
    >
      <Text variant="hp-metric" as="span" className="leading-none">
        {animate ? <AnimatedCounter value={value} /> : value}
      </Text>
      <Text variant="hp-label" as="span">
        {label}
      </Text>
    </div>
  );
}
