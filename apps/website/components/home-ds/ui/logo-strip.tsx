import { Text, cn } from "@packages/ds-ui";

/**
 * A centered "<heading> / row of names" strip. Powers both the Metrics
 * section's client-logo row (small text wordmarks) and Skill's AI-tool row
 * (larger tiles) — one layout, two sizes, so neither drifts independently.
 */
export function LogoStrip({
  heading,
  items,
  size = "sm",
  className
}: {
  heading: string;
  items: string[];
  size?: "sm" | "lg";
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col items-center gap-6", className)}>
      <Text variant="hp-lede" className="w-full text-center">
        {heading}
      </Text>
      <div className={cn("flex flex-wrap items-center justify-center", size === "lg" ? "gap-10" : "gap-10")}>
        {items.map((name) =>
          size === "lg" ? (
            <div
              key={name}
              className="flex size-24 items-center justify-center rounded-ds-card border border-ds-hairline bg-ds-surface-paper md:size-32"
            >
              <Text variant="hp-card-title" className="text-ds-nav-muted">
                {name.charAt(0)}
              </Text>
            </div>
          ) : (
            <Text key={name} variant="hp-card-title" className="text-ds-nav-muted opacity-70">
              {name}
            </Text>
          )
        )}
      </div>
    </div>
  );
}
