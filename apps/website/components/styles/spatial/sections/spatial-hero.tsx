"use client";

import dynamic from "next/dynamic";
import type { HeroContent } from "@/lib/types";

const SpatialScene = dynamic(
  () => import("../spatial-scene").then((m) => m.SpatialScene),
  { ssr: false, loading: () => null }
);

export function SpatialHero({ hero }: { hero: HeroContent }) {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        padding: "180px 24px 96px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
        background: "var(--surface-base)"
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "var(--spatial-mesh-1)",
          pointerEvents: "none",
          zIndex: 0
        }}
      />
      <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
        <SpatialScene />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1280,
          margin: "0 auto",
          width: "100%"
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--text-secondary)",
            padding: "8px 14px",
            border: "1px solid var(--border-subtle)",
            borderRadius: 999,
            background: "rgba(255,255,255,0.03)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            marginBottom: 36
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#5EEAD4",
              boxShadow: "0 0 10px #5EEAD4"
            }}
          />
          B2B · Enterprise · Design Engineer
        </span>

        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(40px, 7.4vw, 100px)",
            lineHeight: 1.02,
            letterSpacing: "-0.035em",
            fontWeight: 600,
            margin: 0,
            maxWidth: 1180,
            color: "var(--text-primary)"
          }}
        >
          I design{" "}
          <span
            style={{
              background:
                "linear-gradient(120deg, #5EEAD4 0%, #A78BFA 50%, #FFD580 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent"
            }}
          >
            complex B2B enterprise software.
          </span>
          <br />
          Then I use AI to ship it in production code.
        </h1>

        <p
          style={{
            fontSize: "clamp(17px, 1.6vw, 21px)",
            lineHeight: 1.55,
            color: "var(--text-secondary)",
            margin: "32px 0 0",
            maxWidth: 720
          }}
        >
          {hero.subLine}
        </p>

        <div
          style={{
            marginTop: 56,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 16,
            maxWidth: 980
          }}
        >
          {hero.metrics.map((m, i) => (
            <div
              key={m}
              style={{
                padding: "20px 20px 22px",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--border-default)",
                background: "rgba(20,22,28,0.55)",
                backdropFilter: "blur(20px) saturate(180%)",
                WebkitBackdropFilter: "blur(20px) saturate(180%)",
                position: "relative",
                overflow: "hidden"
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: -1,
                  background:
                    i === 0
                      ? "radial-gradient(circle at 20% 0%, rgba(94,234,212,0.20), transparent 60%)"
                      : i === 1
                      ? "radial-gradient(circle at 80% 0%, rgba(167,139,250,0.20), transparent 60%)"
                      : i === 2
                      ? "radial-gradient(circle at 20% 100%, rgba(255,213,128,0.18), transparent 60%)"
                      : "radial-gradient(circle at 80% 100%, rgba(94,234,212,0.18), transparent 60%)",
                  pointerEvents: "none"
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)"
                }}
              >
                0{i + 1}
              </span>
              <p
                style={{
                  margin: "6px 0 0",
                  fontSize: 18,
                  lineHeight: 1.3,
                  color: "var(--text-primary)",
                  fontWeight: 500
                }}
              >
                {m}
              </p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 48, display: "flex", gap: 14, flexWrap: "wrap" }}>
          <a
            href="#works"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "12px 22px",
              borderRadius: 999,
              background: "var(--brand-lime)",
              color: "var(--surface-base)",
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              letterSpacing: "0.06em",
              fontWeight: 600,
              boxShadow: "0 0 32px rgba(187,244,81,0.32)"
            }}
          >
            See the work →
          </a>
          <a
            href="#about"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "12px 22px",
              borderRadius: 999,
              border: "1px solid var(--border-default)",
              background: "rgba(255,255,255,0.04)",
              color: "var(--text-primary)",
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              letterSpacing: "0.06em"
            }}
          >
            About
          </a>
        </div>
      </div>
    </section>
  );
}
