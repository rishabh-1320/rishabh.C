"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { cn } from "@packages/ds-ui";

// 4 identical copies laid end to end, animated by exactly one copy-width
// (-25% of the 4x track — see the `marquee` keyframe in tailwind.config.ts).
// Two copies only loop seamlessly if the container is narrower than a
// single copy; with a small content set (a handful of icons) in a wide
// column, the container can easily be wider than that, exposing blank
// space past the end of the content before it wraps. Four copies keeps
// the track comfortably wider than the container at any realistic width,
// so there's always real content filling the visible window.
const COPIES = 4;

/**
 * Lets any descendant (e.g. AiToolTile) report "my tooltip is now visible" /
 * "no longer visible" without Marquee needing to know about or inject props
 * into the items it renders 4 times over. A counter (not a boolean) so
 * fast hover hand-offs between tiles — leave one, enter the next, in the
 * same tick — never let the count touch zero in between and cause a
 * one-frame flicker back to "running".
 */
const MarqueeTooltipContext = createContext<((visible: boolean) => void) | null>(null);

/** Called by a tile to pause the marquee while its own tooltip is showing. */
export function useMarqueeTooltipVisible() {
  return useContext(MarqueeTooltipContext) ?? (() => {});
}

/**
 * A continuously, slowly scrolling row, clipped to its own container (never
 * escapes past it — `overflow-hidden` right here, not relying on an
 * ancestor). `motion-safe:` skips the animation entirely under
 * prefers-reduced-motion (all copies just sit still). Edges fade via a mask
 * instead of cutting off abruptly. Only the first copy is exposed to
 * assistive tech; the rest are `aria-hidden` duplicates.
 *
 * Pauses (via `animation-play-state`, which freezes the current position
 * rather than resetting it) whenever any descendant tile's tooltip is
 * visible, and resumes the instant it's gone — see useMarqueeTooltipVisible.
 */
export function Marquee({ children, className }: { children: ReactNode; className?: string }) {
  const [visibleCount, setVisibleCount] = useState(0);
  const paused = visibleCount > 0;

  const setTooltipVisible = (visible: boolean) => {
    setVisibleCount((count) => Math.max(0, count + (visible ? 1 : -1)));
  };

  return (
    <div
      className={cn(
        // pt-12: clearance for a tile's tooltip (rendered above it) so it
        // isn't clipped by this same overflow-hidden that clips the
        // horizontal loop — the tooltip needs a non-clipped box to render
        // into on its own axis, not just squeeze under the tile.
        "relative w-full overflow-hidden pt-12 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
        className
      )}
    >
      <div
        className="flex w-max motion-safe:animate-marquee"
        style={paused ? { animationPlayState: "paused" } : undefined}
      >
        <MarqueeTooltipContext.Provider value={setTooltipVisible}>
          {Array.from({ length: COPIES }).map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-10 pr-10" aria-hidden={i === 0 ? undefined : true}>
              {children}
            </div>
          ))}
        </MarqueeTooltipContext.Provider>
      </div>
    </div>
  );
}
