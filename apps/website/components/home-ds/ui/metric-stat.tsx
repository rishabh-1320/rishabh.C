import { Text } from "@packages/ds-ui";
import { AnimatedCounter } from "../scroll/animated-counter";

/**
 * One "5 / PRODUCTS SHIPPED" stat, count-up-on-scroll via AnimatedCounter.
 * Figma: 48px number (weight 400, tracking 0) over a 14px uppercase muted
 * label, left-aligned, 8px gap.
 */
export function MetricStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-start gap-2">
      <Text variant="hp-metric" as="span" className="leading-none">
        <AnimatedCounter value={value} />
      </Text>
      <Text variant="hp-label" as="span">
        {label}
      </Text>
    </div>
  );
}
