import { cn } from "@packages/ds-ui";

/**
 * L2-owned full-bleed horizontal divider — spans the entire section width
 * (unlike Block's column-width verticals), so it crosses both vertical
 * hairlines and reads as a ledger intersection, matching the export.
 *
 * `dots` renders the Figma "dot-connect" marker at each end — a black dot
 * centered exactly where this rule crosses Block's vertical hairlines, sitting
 * on a page-colored mask (~16px) that hides both crossing lines for ~8px
 * around it. The overlay reproduces SectionRow (flex justify-center,
 * px-4 sm:px-6) + Block's max-w-ds-hp wrapper so the dot's x is provably
 * identical to the hairline x, never independently positioned.
 */
export function HRule({
  className,
  dark = false,
  dots = false
}: {
  className?: string;
  dark?: boolean;
  dots?: boolean;
}) {
  const Dot = ({ side }: { side: "left" | "right" }) => (
    <span
      className={cn(
        "absolute top-1/2 flex size-4 -translate-y-1/2 items-center justify-center rounded-full",
        side === "left" ? "left-0 -translate-x-1/2" : "right-0 translate-x-1/2",
        dark ? "bg-ds-surface-ink" : "bg-ds-hp-page"
      )}
    >
      <span className={cn("size-0.5 rounded-full", dark ? "bg-ds-dot-on-ink" : "bg-ds-dot")} />
    </span>
  );

  return (
    <div className={cn("relative h-px w-full", dark ? "bg-ds-hairline-dark" : "bg-ds-hairline", className)}>
      {dots && (
        <div className="pointer-events-none absolute inset-0 flex justify-center px-4 sm:px-6">
          <div className="relative w-full max-w-ds-hp">
            <Dot side="left" />
            <Dot side="right" />
          </div>
        </div>
      )}
    </div>
  );
}
