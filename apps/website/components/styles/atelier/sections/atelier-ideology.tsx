import type { IdeologyPrinciple } from "@/lib/types";

export function AtelierIdeology({
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
        padding: "160px 40px",
        borderBottom: "1px solid var(--border-default)"
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <header style={{ marginBottom: 96, textAlign: "center" }}>
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
            № 02 · Working notes
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
            On <span style={{ fontStyle: "italic", color: "#A85838" }}>design</span>,
            <br />a small manifesto.
          </h2>
        </header>

        <ol
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: 0,
            counterReset: "atelier-list"
          }}
        >
          {principles.map((p, i) => (
            <li
              key={p.id}
              style={{
                display: "grid",
                gridTemplateColumns: "90px 1fr",
                gap: 48,
                padding: "48px 0",
                borderTop: "1px solid var(--border-default)",
                alignItems: "flex-start"
              }}
              className="atelier-ideology-row"
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontSize: 56,
                  color: "#A85838",
                  lineHeight: 1
                }}
              >
                {String(i + 1).padStart(2, "0")}.
              </span>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(28px, 3vw, 40px)",
                    lineHeight: 1.15,
                    letterSpacing: "-0.02em",
                    fontWeight: 400,
                    margin: 0,
                    marginBottom: 12,
                    color: "var(--text-primary)"
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontSize: 18,
                    lineHeight: 1.7,
                    color: "var(--text-secondary)",
                    margin: 0,
                    maxWidth: 640,
                    fontFamily: "var(--font-body)"
                  }}
                >
                  {p.description}
                </p>
              </div>
            </li>
          ))}
          <li
            style={{
              padding: "32px 0 0",
              borderTop: "1px solid var(--border-default)",
              fontFamily: "var(--font-display)",
              fontSize: 22,
              fontStyle: "italic",
              color: "var(--text-muted)",
              textAlign: "center"
            }}
          >
            — End of notes.
          </li>
        </ol>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .atelier-ideology-row { grid-template-columns: 1fr; gap: 12px; }
        }
      `}</style>
    </section>
  );
}
