"use client";

import { useEffect, useRef, useState } from "react";

export function AtelierCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const [preview, setPreview] = useState<{ src: string; label: string } | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!hasFinePointer || reduced) return;
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const el = cursorRef.current;
    if (!el) return;
    let raf = 0;
    let tx = -100;
    let ty = -100;
    let cx = -100;
    let cy = -100;

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const tick = () => {
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };

    const checkTarget = (e: PointerEvent) => {
      const target = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-cursor-preview]");
      if (target) {
        const src = target.dataset.cursorPreview || "";
        const label = target.dataset.cursorLabel || "Read";
        setPreview({ src, label });
      } else {
        setPreview(null);
      }
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointermove", checkTarget);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointermove", checkTarget);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 90,
        pointerEvents: "none",
        width: preview ? 160 : 14,
        height: preview ? 160 : 14,
        borderRadius: "50%",
        background: preview ? "transparent" : "#A85838",
        border: preview ? "1px solid rgba(26,24,20,0.4)" : "none",
        overflow: "hidden",
        transition: "width 480ms cubic-bezier(0.19,1,0.22,1), height 480ms cubic-bezier(0.19,1,0.22,1), background 240ms ease",
        mixBlendMode: preview ? "normal" : "multiply",
        boxShadow: preview ? "0 16px 40px rgba(26,24,20,0.18)" : "none"
      }}
    >
      {preview && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={preview.src}
            alt=""
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "sepia(0.18) saturate(0.9)"
            }}
          />
          <span
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-display)",
              fontSize: 18,
              fontStyle: "italic",
              color: "#F0EBE0",
              textShadow: "0 1px 12px rgba(26,24,20,0.45)"
            }}
          >
            {preview.label} →
          </span>
        </>
      )}
    </div>
  );
}
