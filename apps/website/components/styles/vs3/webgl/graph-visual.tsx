"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

const GraphScene = dynamic(() => import("./graph-scene"), { ssr: false, loading: () => null });

/**
 * GraphVisual — wraps the WebGL GraphScene with:
 *  - lazy client-only load (code-split, no SSR)
 *  - prefers-reduced-motion / low-power fallback (static mesh gradient)
 *  - density scaled down on small screens
 *  - self-owned framing (so feature sections carry no raw dimensions)
 * Lives in webgl/ (exempt from drift-lint).
 */
const FALLBACK_BG =
  "radial-gradient(circle at 25% 30%, rgba(59,125,216,0.18), transparent 45%)," +
  "radial-gradient(circle at 75% 25%, rgba(107,95,208,0.16), transparent 45%)," +
  "radial-gradient(circle at 60% 75%, rgba(236,99,65,0.16), transparent 45%)," +
  "radial-gradient(circle at 30% 80%, rgba(43,173,138,0.14), transparent 45%)";

type Frame = "hero" | "panel" | "fill";

const FRAME_CLASS: Record<Frame, string> = {
  hero: "relative w-full overflow-hidden rounded-vs3-2xl border border-vs3-border-subtle bg-vs3-surface-sunken",
  panel: "relative w-full overflow-hidden rounded-vs3-2xl border border-vs3-border-subtle bg-vs3-surface-sunken",
  fill: "absolute inset-0 h-full w-full"
};

const FRAME_STYLE: Record<Frame, CSSProperties> = {
  hero: { height: "clamp(280px, 38vw, 460px)" },
  panel: { height: "clamp(320px, 40vw, 520px)" },
  fill: {}
};

export function GraphVisual({ frame = "panel" }: { frame?: Frame }) {
  const [mode, setMode] = useState<"pending" | "webgl" | "fallback">("pending");
  const [density, setDensity] = useState(1);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lowPower = (navigator.hardwareConcurrency || 8) <= 4;
    if (reduce || lowPower) {
      setMode("fallback");
      return;
    }
    setDensity(window.innerWidth < 810 ? 0.55 : 1);
    setMode("webgl");
  }, []);

  return (
    <div className={FRAME_CLASS[frame]} style={FRAME_STYLE[frame]} aria-hidden="true">
      {mode !== "webgl" ? (
        <div style={{ position: "absolute", inset: 0, background: FALLBACK_BG }} />
      ) : (
        <GraphScene density={density} />
      )}
    </div>
  );
}
