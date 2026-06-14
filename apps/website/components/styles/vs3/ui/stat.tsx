"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "./cn";
import { Text } from "./text";

/**
 * StatCallout — big light display number + mono label, with an animated
 * count-up when scrolled into view. Honors prefers-reduced-motion (jumps to
 * the final value). Parses a leading number out of strings like "+19%",
 * "2,000,000+", "60 days" and animates that, preserving prefix/suffix.
 */
export function StatCallout({
  value,
  label,
  className
}: {
  value: string;
  label: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const m = value.match(/^(\D*)([\d,]+(?:\.\d+)?)(.*)$/);
    if (reduce || !m) {
      setDisplay(value);
      return;
    }
    const prefix = m[1];
    const target = parseFloat(m[2].replace(/,/g, ""));
    const suffix = m[3];
    const hasComma = m[2].includes(",");
    const fmt = (n: number) => {
      const v = Math.round(n);
      return hasComma ? v.toLocaleString("en-US") : String(v);
    };

    let raf = 0;
    let started = false;
    const run = (ts: number, t0: number) => {
      const p = Math.min((ts - t0) / 1100, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(`${prefix}${fmt(target * eased)}${suffix}`);
      if (p < 1) raf = requestAnimationFrame((t) => run(t, t0));
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          started = true;
          setDisplay(`${prefix}${fmt(0)}${suffix}`);
          raf = requestAnimationFrame((t) => run(t, t));
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <div ref={ref} className={cn("flex flex-col gap-2", className)}>
      <Text variant="stat" as="span" className="text-vs3-accent">
        {display}
      </Text>
      <Text variant="caption" as="span" className="font-vs3-mono uppercase tracking-[0.1em]">
        {label}
      </Text>
    </div>
  );
}
