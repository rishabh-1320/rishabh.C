"use client";

import { useEffect, useRef } from "react";

/**
 * Vertical scroll parallax for the hero: translates its child by
 * `scrollY * speed` while the hero region is still in view, resetting once it
 * has scrolled off (matches the Figma "Add scroll interactions" export —
 * title speed 0.25, dashboard graphic 0.1). Transform is applied via ref so
 * the consuming section stays free of raw px values. Disabled under
 * prefers-reduced-motion.
 */
export function Parallax({
  children,
  speed = 0.2,
  className
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const scrollY = window.scrollY;
      // Only transform while the element is still within a screen of the top.
      if (el.getBoundingClientRect().bottom > 0) {
        el.style.transform = `translateY(${scrollY * speed}px)`;
      } else {
        el.style.transform = "";
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
      el.style.transform = "";
    };
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}
