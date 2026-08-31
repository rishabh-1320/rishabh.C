"use client";

import { useRef, useState } from "react";
import { cn } from "@packages/ds-ui";
import { useMarqueeTooltipVisible } from "../../site-components/marquee";

// Standard hover-intent delay: a cursor just passing over a tile on its way
// elsewhere shouldn't trigger anything — only a deliberate pause does. The
// marquee itself keeps moving for this whole window; it only pauses once
// the tooltip actually commits to showing.
const TOOLTIP_DELAY_MS = 400;

/**
 * One AI-tool badge for the workflow marquee — same bordered-card chrome as
 * LogoStrip's "lg" fallback tile, but sized for a real icon mark (kept at a
 * consistent size regardless of each brand icon's own aspect ratio, so the
 * scrolling row reads as one even rhythm rather than mixed-size logos).
 *
 * Hover shows a small title-only tooltip after a short delay (so briefly
 * passing over a tile doesn't trigger it), and pauses the shared marquee
 * for exactly as long as the tooltip is visible — see Marquee /
 * useMarqueeTooltipVisible. Leaving resumes it immediately, whether or not
 * the tooltip ever actually appeared.
 */
export function AiToolTile({ name, icon }: { name: string; icon: string }) {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const notifyMarquee = useMarqueeTooltipVisible();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      timerRef.current = null;
      setTooltipVisible(true);
      notifyMarquee(true);
    }, TOOLTIP_DELAY_MS);
  };

  const handleMouseLeave = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    // Only notify the marquee if the tooltip had actually committed to
    // showing — a hover that never made it past the delay never paused
    // anything, so there's nothing to resume here either. Read the current
    // value from the closure directly rather than a setState updater —
    // updater functions run during React's render phase, and calling a
    // different component's setter from inside one trips "Cannot update a
    // component while rendering a different component".
    if (tooltipVisible) notifyMarquee(false);
    setTooltipVisible(false);
  };

  return (
    <div
      className="relative flex size-32 shrink-0 items-center justify-center border border-ds-hairline bg-ds-surface-paper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={icon} alt={name} className="size-20 object-contain" />

      <span
        role="tooltip"
        className={cn(
          "pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-ds-control bg-ds-surface-ink px-2.5 py-1 font-ds-inter text-[12px] font-normal leading-[1.4] text-ds-on-ink transition-opacity duration-150",
          tooltipVisible ? "opacity-100" : "opacity-0"
        )}
      >
        {name}
      </span>
    </div>
  );
}
