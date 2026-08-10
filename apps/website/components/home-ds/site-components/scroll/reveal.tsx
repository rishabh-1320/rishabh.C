"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Scroll-triggered fade-up. Children mount visible for SSR / no-JS; on the
 * client they arm to a hidden state and reveal once they enter the viewport
 * (IntersectionObserver, threshold 0.07). Mirrors the Figma "Add scroll
 * interactions" export. Honors prefers-reduced-motion by revealing instantly.
 *
 * Lives outside the ds drift-scanned `sections/` tree, so the raw px / cubic
 * timing values below are allowed; sections consume it token-free.
 */
export function Reveal({
  children,
  className,
  delay = 0
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [armed, setArmed] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || typeof IntersectionObserver === "undefined") {
      setRevealed(true);
      return;
    }

    setArmed(true);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.07, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const hidden = armed && !revealed;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: hidden ? 0 : 1,
        transform: hidden ? "translateY(32px)" : "translateY(0)",
        transition:
          "opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
        transitionDelay: `${delay}ms`,
        willChange: hidden ? "opacity, transform" : undefined
      }}
    >
      {children}
    </div>
  );
}
