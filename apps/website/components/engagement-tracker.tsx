"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * Measures how long a page was actually visible and how far down it was read,
 * then ships one beacon when the tab is hidden or the route changes.
 *
 * Clarity already records this client-side, but it is a third-party script that
 * ad blockers and privacy browsers drop; this writes to our own table on the
 * same row as the page view, so dwell time survives for the visitors Clarity
 * never sees and can be filtered by the same owner/bot rules as everything else.
 */
export function EngagementTracker() {
  const pathname = usePathname();
  const startedAt = useRef(0);
  const visibleMs = useRef(0);
  const maxScroll = useRef(0);
  const sent = useRef(false);

  useEffect(() => {
    startedAt.current = Date.now();
    visibleMs.current = 0;
    maxScroll.current = 0;
    sent.current = false;

    const measureScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const pct = scrollable <= 0 ? 100 : ((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100;
      maxScroll.current = Math.max(maxScroll.current, Math.min(100, pct));
    };

    const accumulate = () => {
      if (startedAt.current) visibleMs.current += Date.now() - startedAt.current;
      startedAt.current = 0;
    };

    const send = () => {
      if (sent.current) return;
      accumulate();
      measureScroll();
      if (visibleMs.current < 500) return;
      sent.current = true;
      const payload = JSON.stringify({ path: pathname, dwellMs: visibleMs.current, maxScrollPct: Math.round(maxScroll.current) });
      // sendBeacon survives the page being torn down; fetch does not.
      navigator.sendBeacon?.("/api/engagement", new Blob([payload], { type: "application/json" }));
    };

    const onVisibility = () => {
      if (document.visibilityState === "hidden") send();
      else startedAt.current = Date.now();
    };

    measureScroll();
    window.addEventListener("scroll", measureScroll, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pagehide", send);

    return () => {
      window.removeEventListener("scroll", measureScroll);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pagehide", send);
      send(); // route change unmounts us — record the page we are leaving
    };
  }, [pathname]);

  return null;
}
