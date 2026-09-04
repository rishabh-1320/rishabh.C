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

    // An element at or above the viewport has been scrolled *past*, not
    // scrolled *to* — it should already be showing. IntersectionObserver only
    // reports threshold crossings it actually samples, so a jump that skips
    // the element entirely (an anchor link, refresh with scroll restoration,
    // a back-nav, an instant scrollTo) never fires and would leave the section
    // stuck at opacity 0 forever. Check the geometry directly, both at arm
    // time and on scroll, and reveal anything the viewport has reached.
    const reached = () => el.getBoundingClientRect().top < window.innerHeight;

    if (reached()) {
      setRevealed(true);
      return;
    }

    setArmed(true);

    let observer: IntersectionObserver | null = null;
    const onScroll = () => {
      if (!reached()) return;
      setRevealed(true);
      cleanup();
    };
    const cleanup = () => {
      observer?.disconnect();
      window.removeEventListener("scroll", onScroll);
    };

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            cleanup();
          }
        });
      },
      { threshold: 0.07, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    window.addEventListener("scroll", onScroll, { passive: true });

    return cleanup;
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
