import type { IdeologyPrinciple } from "@/lib/types";

export function KineticIdeology({
  heading,
  principles
}: {
  heading: string;
  principles: IdeologyPrinciple[];
}) {
  return (
    <section
      id="ideology"
      style={{
        background: "var(--surface-base)",
        color: "var(--text-primary)",
        padding: "120px 32px",
        borderBottom: "1px solid var(--border-default)"
      }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 80,
            borderBottom: "1px solid var(--border-default)",
            paddingBottom: 32
          }}
        >
          <div>
            <span
              style={{
                fontSize: 12,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "var(--text-secondary)",
                display: "block",
                marginBottom: 24
              }}
            >
              §02 — Manifesto
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(48px, 8vw, 120px)",
                lineHeight: 0.95,
                fontWeight: 400,
                letterSpacing: "-0.02em",
                margin: 0
              }}
            >
              {heading.split(" ").map((word, i) => (
                <span key={word} style={i === 1 ? { fontStyle: "italic", color: "#FF4D1A" } : {}}>
                  {word}
                  {i === 0 && " "}
                </span>
              ))}
            </h2>
          </div>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 32,
              fontStyle: "italic",
              color: "var(--text-muted)"
            }}
          >
            (Four rules.)
          </span>
        </header>

        <ol
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 0
          }}
        >
          {principles.map((p, i) => (
            <li
              key={p.id}
              style={{
                padding: "48px 32px 56px",
                borderTop: "1px solid var(--border-default)",
                borderLeft: i % 2 === 1 ? "1px solid var(--border-default)" : "none",
                position: "relative",
                background: i === 1 ? "#FF4D1A" : i === 3 ? "var(--text-primary)" : "transparent",
                color: i === 1 ? "var(--surface-base)" : i === 3 ? "var(--surface-base)" : "var(--text-primary)"
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 120,
                  lineHeight: 0.85,
                  margin: 0,
                  fontStyle: "italic",
                  color: i === 1 || i === 3 ? "rgba(244,241,234,0.32)" : "#FF4D1A",
                  marginBottom: 24
                }}
              >
                {p.id}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(28px, 3vw, 40px)",
                  lineHeight: 1.05,
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                  margin: 0,
                  marginBottom: 16
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.5,
                  fontFamily: "var(--font-body)",
                  opacity: i === 1 || i === 3 ? 0.84 : 0.74,
                  margin: 0,
                  maxWidth: 360
                }}
              >
                {p.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
