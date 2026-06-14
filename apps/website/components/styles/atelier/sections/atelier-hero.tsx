import type { HeroContent } from "@/lib/types";

export function AtelierHero({ hero }: { hero: HeroContent }) {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        padding: "180px 40px 96px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "var(--surface-base)",
        overflow: "hidden"
      }}
    >
      <svg
        aria-hidden="true"
        width="0"
        height="0"
        style={{ position: "absolute" }}
      >
        <defs>
          <filter id="atelierGrain">
            <feTurbulence baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
            <feColorMatrix values="0 0 0 0 0.1 0 0 0 0 0.09 0 0 0 0 0.08 0 0 0 0.06 0" />
            <feComposite in2="SourceGraphic" operator="in" />
          </filter>
        </defs>
      </svg>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          filter: "url(#atelierGrain)",
          opacity: 0.5,
          mixBlendMode: "multiply",
          pointerEvents: "none"
        }}
      />

      <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", width: "100%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            fontSize: 12,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            marginBottom: 64
          }}
        >
          <span>Portfolio — Vol. I · MMXXVI</span>
          <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", textTransform: "none", letterSpacing: 0, fontSize: 18 }}>
            № 00 — Opening
          </span>
        </div>

        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(56px, 9vw, 132px)",
            lineHeight: 0.98,
            letterSpacing: "-0.02em",
            fontWeight: 400,
            margin: 0,
            color: "var(--text-primary)",
            maxWidth: 1180
          }}
        >
          A studio of one,
          <br />
          designing the{" "}
          <span style={{ fontStyle: "italic", color: "#A85838" }}>quietly</span> complex.
        </h1>

        <div
          style={{
            marginTop: 72,
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: 48,
            alignItems: "end"
          }}
          className="atelier-hero-grid"
        >
          <p
            style={{
              fontSize: "clamp(18px, 1.8vw, 22px)",
              lineHeight: 1.7,
              color: "var(--text-secondary)",
              fontFamily: "var(--font-body)",
              maxWidth: 620,
              margin: 0
            }}
          >
            {hero.subLine}{" "}
            <span style={{ fontStyle: "italic", color: "var(--text-primary)" }}>
              I design what nothing off-the-shelf can solve — and ship it in the code that runs in production.
            </span>
          </p>
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: 0,
              borderTop: "1px solid var(--border-default)"
            }}
          >
            {hero.metrics.map((m, i) => (
              <li
                key={m}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 16,
                  padding: "14px 0",
                  borderBottom: "1px solid var(--border-default)"
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontSize: 28,
                    color: "#A85838",
                    minWidth: 48
                  }}
                >
                  {String(i + 1).padStart(2, "0")}.
                </span>
                <span
                  style={{
                    fontSize: 17,
                    fontFamily: "var(--font-body)",
                    color: "var(--text-primary)"
                  }}
                >
                  {m}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        style={{
          position: "relative",
          maxWidth: 1280,
          margin: "0 auto",
          width: "100%",
          marginTop: 96,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: 24,
          borderTop: "1px solid var(--border-default)",
          fontSize: 13,
          color: "var(--text-muted)",
          fontFamily: "var(--font-body)",
          flexWrap: "wrap",
          gap: 16
        }}
      >
        <span style={{ fontStyle: "italic", fontFamily: "var(--font-display)", fontSize: 18, color: "var(--text-primary)" }}>
          Scroll, slowly.
        </span>
        <span>Bangalore · IST (UTC +5:30) · Open to work</span>
      </div>
    </section>
  );
}
