import { Text } from "@packages/ds-ui";
import { AnimatedCounter } from "../scroll/animated-counter";

/** One "5 / Products shipped" stat, count-up-on-scroll via the shared AnimatedCounter. */
export function MetricStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <Text variant="hp-title" as="span" className="leading-none">
        <AnimatedCounter value={value} />
      </Text>
      <Text variant="hp-eyebrow" as="span">
        {label}
      </Text>
    </div>
  );
}
