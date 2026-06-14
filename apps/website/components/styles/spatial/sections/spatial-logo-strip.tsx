"use client";

import type { LogoItem } from "@/lib/types";

export function SpatialLogoStrip({ heading, logos }: { heading: string; logos: LogoItem[] }) {
  return (
    <section
      style={{
        background: "var(--surface-soft)",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
        padding: "32px 24px",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          flexWrap: "wrap"
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--text-muted)"
          }}
        >
          {heading}
        </span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 36,
            flexWrap: "wrap"
          }}
        >
          {logos.map((logo) => (
            <span
              key={logo.name}
              style={{
                fontSize: 17,
                letterSpacing: "-0.01em",
                color: "var(--text-secondary)",
                fontWeight: 500,
                transition: "color 240ms cubic-bezier(0.19,1,0.22,1)"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {logo.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
