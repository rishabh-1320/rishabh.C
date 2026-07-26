"use client";

/**
 * GSAP Animation Utilities
 * Centralised setup for GSAP + ScrollTrigger.
 * Import registerGsap() once at the app level, then use the reveal helpers anywhere.
 */

import type { gsap as GsapType } from "gsap";

let gsapInstance: typeof GsapType | null = null;
let registered = false;

/**
 * Lazily loads GSAP + ScrollTrigger and registers the plugin.
 * Safe to call multiple times — runs once.
 */
export async function registerGsap() {
  if (registered) return gsapInstance!;

  const [{ gsap }, { ScrollTrigger }] = await Promise.all([
    import("gsap"),
    import("gsap/ScrollTrigger")
  ]);

  gsap.registerPlugin(ScrollTrigger);

  // Respect reduced-motion preference
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    gsap.globalTimeline.timeScale(100);
  }

  gsapInstance = gsap;
  registered = true;
  return gsap;
}

// ─── Preset animation configs ────────────────────────────────────────────────

export const EASE_OUT_EXPO = "expo.out";

/** Fade + rise from below */
export const fadeUp = {
  from: { opacity: 0, y: 48, willChange: "transform, opacity" },
  to: { opacity: 1, y: 0, duration: 0.9, ease: EASE_OUT_EXPO }
};

/** Fade in only */
export const fadeIn = {
  from: { opacity: 0 },
  to: { opacity: 1, duration: 0.7, ease: "power2.out" }
};

/** Slide in from left */
export const slideInLeft = {
  from: { opacity: 0, x: -64, willChange: "transform, opacity" },
  to: { opacity: 1, x: 0, duration: 0.85, ease: EASE_OUT_EXPO }
};

/** Slide in from right */
export const slideInRight = {
  from: { opacity: 0, x: 64, willChange: "transform, opacity" },
  to: { opacity: 1, x: 0, duration: 0.85, ease: EASE_OUT_EXPO }
};

/** Scale up from slightly smaller */
export const scaleUp = {
  from: { opacity: 0, scale: 0.92, willChange: "transform, opacity" },
  to: { opacity: 1, scale: 1, duration: 0.85, ease: EASE_OUT_EXPO }
};

// ─── ScrollTrigger defaults ───────────────────────────────────────────────────

export const SCROLL_TRIGGER_DEFAULTS = {
  start: "top 88%",
  toggleActions: "play none none none"
} as const;
