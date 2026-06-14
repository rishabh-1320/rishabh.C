import type { HomeContent } from "@/lib/types";

export function KineticAiWorkflow({ aiWorkflow }: { aiWorkflow: HomeContent["aiWorkflow"] }) {
  return (
    <section
      style={{
        background: "var(--text-primary)",
        color: "var(--surface-base)",
        padding: "120px 32px",
        borderBottom: "1px solid var(--text-primary)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto", position: "relative" }}>
        <header style={{ marginBottom: 80 }}>
          <span
            style={{
              fontSize: 12,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "rgba(244,241,234,0.6)",
              display: "block",
              marginBottom: 24
            }}
          >
            §04 — Workflow
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(48px, 8vw, 120px)",
              lineHeight: 0.95,
              fontWeight: 400,
              letterSpacing: "-0.02em",
              margin: 0,
              maxWidth: 1100
            }}
          >
            {aiWorkflow.heading.split(" ").slice(0, -1).join(" ")}{" "}
            <span style={{ fontStyle: "italic", color: "#FF4D1A" }}>
              {aiWorkflow.heading.split(" ").slice(-1)[0]}
            </span>
            <span style={{ color: "#FF4D1A" }}>.</span>
          </h2>
          <p
            style={{
              marginTop: 32,
              fontSize: "clamp(18px, 2vw, 24px)",
              lineHeight: 1.4,
              maxWidth: 760,
              fontFamily: "var(--font-body)",
              color: "rgba(244,241,234,0.84)"
            }}
          >
            {aiWorkflow.intro}
          </p>
        </header>

        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            borderTop: "1px solid rgba(244,241,234,0.18)"
          }}
        >
          {aiWorkflow.tools.map((tool, i) => (
            <li
              key={tool.name}
              style={{
                borderBottom: "1px solid rgba(244,241,234,0.18)",
                borderRight: i < aiWorkflow.tools.length - 1 ? "1px solid rgba(244,241,234,0.18)" : "none",
                padding: "32px 24px 32px 0",
                display: "flex",
                flexDirection: "column",
                gap: 12
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 20,
                  color: "#FF4D1A",
                  fontStyle: "italic"
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 32,
                  lineHeight: 1,
                  fontWeight: 400,
                  margin: 0,
                  letterSpacing: "-0.02em"
                }}
              >
                {tool.name}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.55,
                  fontFamily: "var(--font-body)",
                  color: "rgba(244,241,234,0.7)",
                  margin: 0
                }}
              >
                {tool.description}
              </p>
            </li>
          ))}
        </ul>

        <p
          style={{
            marginTop: 56,
            fontFamily: "var(--font-display)",
            fontSize: "clamp(22px, 2.4vw, 32px)",
            fontStyle: "italic",
            lineHeight: 1.3,
            maxWidth: 1000,
            color: "rgba(244,241,234,0.88)"
          }}
        >
          “{aiWorkflow.closingLine}”
        </p>
      </div>
    </section>
  );
}
