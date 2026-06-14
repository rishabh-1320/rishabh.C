import type { LogoItem } from "@/lib/types";

export function AtelierLogoStrip({ heading, logos }: { heading: string; logos: LogoItem[] }) {
  return (
    <section
      style={{
        background: "var(--surface-soft)",
        borderTop: "1px solid var(--border-default)",
        borderBottom: "1px solid var(--border-default)",
        padding: "48px 40px"
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          gap: 64,
          alignItems: "center"
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 22,
            fontStyle: "italic",
            color: "var(--text-secondary)",
            letterSpacing: "-0.01em"
          }}
        >
          {heading}
        </span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 48,
            flexWrap: "wrap"
          }}
        >
          {logos.map((logo) => (
            <span
              key={logo.name}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 24,
                color: "var(--text-primary)",
                letterSpacing: "-0.01em"
              }}
            >
              {logo.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
