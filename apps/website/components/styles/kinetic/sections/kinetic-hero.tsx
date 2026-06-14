"use client";

import { useEffect, useRef, useState } from "react";
import type { HeroContent } from "@/lib/types";

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function KineticHero({ hero }: { hero: HeroContent }) {
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const [marqueeReady, setMarqueeReady] = useState(false);

  useEffect(() => {
    const target = headlineRef.current?.querySelector("[data-scramble]") as HTMLElement | null;
    if (!target) return;
    const finalText = target.dataset.scramble || "";
    let frame = 0;
    let raf = 0;
    const totalFrames = 28;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      target.textContent = finalText;
      return;
    }

    const tick = () => {
      frame += 1;
      const progress = frame / totalFrames;
      const revealed = Math.floor(finalText.length * progress);
      let out = "";
      for (let i = 0; i < finalText.length; i += 1) {
        if (i < revealed || finalText[i] === " ") {
          out += finalText[i];
        } else {
          out += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        }
      }
      target.textContent = out;
      if (frame < totalFrames) {
        raf = requestAnimationFrame(tick);
      } else {
        target.textContent = finalText;
        setMarqueeReady(true);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        padding: "140px 32px 80px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "var(--surface-base)",
        color: "var(--text-primary)",
        borderBottom: "1px solid var(--border-default)",
        overflow: "hidden"
      }}
    >
      <div style={{ position: "relative", zIndex: 2 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 48,
            fontSize: 12,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--text-secondary)"
          }}
        >
          <span>Portfolio · 2026 · Index 00</span>
          <span>B2B · Enterprise · Design Engineer</span>
        </div>

        <h1
          ref={headlineRef}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(64px, 14vw, 220px)",
            lineHeight: 0.88,
            fontWeight: 400,
            letterSpacing: "-0.03em",
            margin: 0,
            color: "var(--text-primary)"
          }}
        >
          <span data-scramble="Designs that ship.">Designs that ship.</span>
        </h1>

        <div
          style={{
            marginTop: 56,
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr",
            gap: 48,
            alignItems: "end",
            maxWidth: 1400
          }}
          className="kinetic-hero-grid"
        >
          <p
            style={{
              fontSize: "clamp(20px, 2.2vw, 28px)",
              lineHeight: 1.35,
              maxWidth: 720,
              margin: 0,
              fontFamily: "var(--font-body)",
              color: "var(--text-primary)"
            }}
          >
            {hero.subLine}
          </p>
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
              fontSize: 13,
              fontFamily: "var(--font-body)",
              borderTop: "1px solid var(--border-default)",
              paddingTop: 16
            }}
          >
            {hero.metrics.map((m, i) => (
              <li
                key={m}
                style={{
                  display: "flex",
                  gap: 10,
                  alignItems: "baseline",
                  color: "var(--text-primary)"
                }}
              >
                <span style={{ fontFamily: "var(--font-display)", fontSize: 22, color: "#FF4D1A" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: -40,
          top: 120,
          fontFamily: "var(--font-display)",
          fontSize: "clamp(240px, 36vw, 540px)",
          color: "#FF4D1A",
          opacity: 0.08,
          lineHeight: 1,
          pointerEvents: "none",
          fontStyle: "italic",
          letterSpacing: "-0.04em"
        }}
      >
        00
      </div>

      <Marquee active={marqueeReady} />

      <style jsx>{`
        @media (max-width: 809.98px) {
          .kinetic-hero-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
      `}</style>
    </section>
  );
}

function Marquee({ active }: { active: boolean }) {
  const words = [
    "B2B",
    "Systems",
    "Design Engineer",
    "Enterprise",
    "Insurance",
    "HRMS",
    "Dashboards",
    "AI in production",
    "Bangalore · IST"
  ];
  const stream = [...words, ...words, ...words];
  return (
    <div
      style={{
        position: "relative",
        marginTop: 80,
        borderTop: "1px solid var(--border-default)",
        borderBottom: "1px solid var(--border-default)",
        padding: "16px 0",
        overflow: "hidden",
        whiteSpace: "nowrap",
        opacity: active ? 1 : 0,
        transition: "opacity 600ms cubic-bezier(0.19,1,0.22,1)"
      }}
    >
      <div
        style={{
          display: "inline-flex",
          gap: 48,
          animation: "kineticMarquee 36s linear infinite",
          fontFamily: "var(--font-display)",
          fontSize: 28,
          letterSpacing: "-0.01em"
        }}
      >
        {stream.map((w, i) => (
          <span key={`${w}-${i}`} style={{ display: "inline-flex", alignItems: "center", gap: 48 }}>
            {w}
            <span style={{ color: "#FF4D1A" }}>✺</span>
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes kineticMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
        @media (prefers-reduced-motion: reduce) {
          div > div { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
