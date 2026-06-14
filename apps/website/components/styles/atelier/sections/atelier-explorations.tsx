import type { AIExplorationCard } from "@/lib/types";

export function AtelierExplorations({
  heading,
  intro,
  explorations
}: {
  heading: string;
  intro: string;
  explorations: AIExplorationCard[];
}) {
  return (
    <section
      style={{
        background: "var(--surface-soft)",
        padding: "160px 40px",
        borderBottom: "1px solid var(--border-default)"
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <header style={{ marginBottom: 96, maxWidth: 820 }}>
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
            № 05 · Marginalia
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
            Things made on the{" "}
            <span style={{ fontStyle: "italic", color: "#A85838" }}>side</span>.
          </h2>
          <p
            style={{
              marginTop: 24,
              fontSize: 17,
              lineHeight: 1.65,
              color: "var(--text-secondary)",
              fontFamily: "var(--font-body)"
            }}
          >
            {intro}
          </p>
        </header>

        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 0,
            borderTop: "1px solid var(--border-default)",
            borderLeft: "1px solid var(--border-default)"
          }}
        >
          {explorations.map((exp, i) => (
            <li
              key={exp.id}
              data-cursor-preview={exp.image}
              data-cursor-label="Peek"
              style={{
                padding: "32px",
                borderRight: "1px solid var(--border-default)",
                borderBottom: "1px solid var(--border-default)",
                display: "flex",
                flexDirection: "column",
                gap: 16,
                minHeight: 280
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 12,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)"
                }}
              >
                <span style={{ color: exp.status === "Archived" ? "var(--text-muted)" : "#A85838" }}>· {exp.status}</span>
                <span>{exp.year}</span>
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 26,
                  lineHeight: 1.15,
                  letterSpacing: "-0.01em",
                  fontWeight: 400,
                  margin: 0,
                  color: "var(--text-primary)"
                }}
              >
                {exp.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 15,
                  lineHeight: 1.65,
                  color: "var(--text-secondary)",
                  margin: 0,
                  flex: 1
                }}
              >
                {exp.description}
              </p>
              <div
                style={{
                  marginTop: "auto",
                  paddingTop: 12,
                  borderTop: "1px solid var(--border-default)",
                  fontSize: 12,
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  color: "var(--text-muted)"
                }}
              >
                Built with {exp.builtWith.join(", ")}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
