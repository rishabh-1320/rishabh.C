import type { LogoItem } from "@/lib/types";
import { Text, cn } from "@packages/ds-ui";

/**
 * A "<heading> / row of logos" strip. Powers both the Metrics section's
 * client-logo row (small real wordmarks, left-aligned) and Skill's AI-tool
 * row (larger tiles, centered) — one layout, two sizes/alignments, so
 * neither drifts independently. Renders a real image when `src` is present,
 * else falls back to styled text (metrics tile: full name; AI tile: initial).
 */
export function LogoStrip({
  heading,
  logos,
  size = "sm",
  align = "center",
  className
}: {
  heading?: string;
  logos: LogoItem[];
  size?: "sm" | "lg";
  align?: "left" | "center";
  className?: string;
}) {
  const isLeft = align === "left";

  return (
    <div className={cn("flex flex-col gap-6", isLeft ? "items-start" : "items-center", className)}>
      {heading && (
        <Text variant={isLeft ? "hp-body" : "hp-lede"} className={cn("w-full", isLeft ? "" : "text-center")}>
          {heading}
        </Text>
      )}
      <div
        className={cn(
          "flex items-center",
          // Left-aligned rows (metrics logos, AI-workflow tools) fit on one row,
          // evenly spread edge-to-edge; centered rows wrap with a fixed gap.
          isLeft ? "w-full flex-nowrap justify-between gap-6" : "flex-wrap justify-center gap-10"
        )}
      >
        {logos.map((logo) =>
          logo.src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              className={size === "lg" ? "h-8 w-auto opacity-70" : "h-8 w-auto shrink-0 opacity-70"}
            />
          ) : size === "lg" ? (
            <div
              key={logo.name}
              className="flex size-24 shrink-0 items-center justify-center rounded-ds-card border border-ds-hairline bg-ds-surface-paper md:size-32"
            >
              <Text variant="hp-card-title" className="text-ds-nav-muted">
                {logo.name.charAt(0)}
              </Text>
            </div>
          ) : (
            <Text key={logo.name} variant="hp-card-title" className="text-ds-nav-muted opacity-70">
              {logo.name}
            </Text>
          )
        )}
      </div>
    </div>
  );
}
