"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts a stat up from zero to its target when it scrolls into view, easing
 * out over ~1.1s (matches the Figma "Add scroll interactions" export). Parses
 * the display value so "100k+", "4 yrs" and "5" all animate their numeric part
 * while keeping any prefix/suffix. SSR and reduced-motion render the final
 * value verbatim.
 */
function parseValue(value: string) {
  const match = value.match(/^(\D*)([\d,]+)(.*)$/s);
  if (!match) return null;
  return {
    prefix: match[1],
    target: parseInt(match[2].replace(/,/g, ""), 10),
    suffix: match[3]
  };
}

export function AnimatedCounter({
  value,
  className,
  duration = 1100
}: {
  value: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const parsed = parseValue(value);
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!parsed || prefersReduced || typeof IntersectionObserver === "undefined") return;

    const { prefix, target, suffix } = parsed;
    setDisplay(`${prefix}0${suffix}`);

    let raf = 0;
    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(`${prefix}${Math.round(eased * target)}${suffix}`);
        if (progress < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            run();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
