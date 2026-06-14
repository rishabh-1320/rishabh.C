import type { LogoItem } from "@/lib/types";

export function KineticLogoStrip({ heading, logos }: { heading: string; logos: LogoItem[] }) {
  return (
    <section
      style={{
        background: "var(--text-primary)",
        color: "var(--surface-base)",
        padding: "32px 32px",
        borderBottom: "1px solid var(--text-primary)"
      }}
    >
      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 24
        }}
      >
        <span
          style={{
            fontSize: 12,
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: "rgba(244,241,234,0.6)"
          }}
        >
          {heading}
        </span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
            flexWrap: "wrap"
          }}
        >
          {logos.map((logo, i) => (
            <span
              key={logo.name}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 26,
                letterSpacing: "-0.02em",
                color: "var(--surface-base)",
                display: "inline-flex",
                alignItems: "center",
                gap: 24
              }}
            >
              {logo.name}
              {i < logos.length - 1 && (
                <span style={{ color: "#FF4D1A", fontSize: 14 }}>●</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
