import type { HomeContent } from "@/lib/types";

export function AtelierAiWorkflow({ aiWorkflow }: { aiWorkflow: HomeContent["aiWorkflow"] }) {
  return (
    <section
      style={{
        background: "var(--surface-base)",
        padding: "160px 40px",
        borderBottom: "1px solid var(--border-default)"
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <header style={{ marginBottom: 80, maxWidth: 820 }}>
          <span
            style={{
              fontSize: 12,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              display: "block",
              marginBottom: 24
            }}
          >
            № 04 · A note on tools
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(40px, 6vw, 84px)",
              lineHeight: 1.04,
              letterSpacing: "-0.02em",
              fontWeight: 400,
              margin: 0,
              color: "var(--text-primary)"
            }}
          >
            On the{" "}
            <span style={{ fontStyle: "italic", color: "#A85838" }}>instruments</span>
            <br />
            I keep at hand.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "clamp(20px, 2vw, 26px)",
              lineHeight: 1.5,
              color: "var(--text-secondary)",
              margin: "32px 0 0"
            }}
          >
            {aiWorkflow.intro}
          </p>
        </header>

        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0
          }}
        >
          {aiWorkflow.tools.map((tool, i) => (
            <li
              key={tool.name}
              style={{
                display: "grid",
                gridTemplateColumns: "60px 200px 1fr",
                gap: 32,
                padding: "32px 0",
                borderTop: i === 0 ? "1px solid var(--border-default)" : "none",
                borderBottom: "1px solid var(--border-default)",
                alignItems: "baseline"
              }}
              className="atelier-workflow-row"
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontSize: 24,
                  color: "#A85838"
                }}
              >
                {String(i + 1).padStart(2, "0")}.
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(24px, 2.4vw, 32px)",
                  fontWeight: 400,
                  margin: 0,
                  letterSpacing: "-0.01em",
                  color: "var(--text-primary)"
                }}
              >
                {tool.name}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 17,
                  lineHeight: 1.65,
                  color: "var(--text-secondary)",
                  margin: 0,
                  maxWidth: 580
                }}
              >
                {tool.description}
              </p>
            </li>
          ))}
        </ul>

        <blockquote
          style={{
            marginTop: 64,
            padding: "48px 0 0",
            fontFamily: "var(--font-display)",
            fontSize: "clamp(22px, 2.4vw, 32px)",
            fontStyle: "italic",
            lineHeight: 1.4,
            color: "var(--text-primary)",
            borderTop: "1px solid var(--border-default)",
            margin: "64px 0 0"
          }}
        >
          “{aiWorkflow.closingLine}”
          <footer
            style={{
              marginTop: 18,
              fontFamily: "var(--font-body)",
              fontStyle: "normal",
              fontSize: 13,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--text-muted)"
            }}
          >
            — Working note, 2026
          </footer>
        </blockquote>
      </div>

      <style>{`
        @media (max-width: 809.98px) {
          .atelier-workflow-row { grid-template-columns: 40px 1fr; gap: 16px; }
          .atelier-workflow-row h3 { grid-column: 1 / -1; }
          .atelier-workflow-row p { grid-column: 1 / -1; }
        }
      `}</style>
    </section>
  );
}
