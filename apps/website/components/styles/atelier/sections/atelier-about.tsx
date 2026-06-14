import type { HomeContent } from "@/lib/types";

export function AtelierAbout({ about }: { about: HomeContent["about"] }) {
  return (
    <section
      id="about"
      style={{
        background: "var(--surface-base)",
        padding: "160px 40px",
        borderBottom: "1px solid var(--border-default)"
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <header style={{ marginBottom: 80, textAlign: "center" }}>
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
            № 06 · The author
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
            On the <span style={{ fontStyle: "italic", color: "#A85838" }}>author</span>.
          </h2>
        </header>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr",
            gap: 80,
            marginBottom: 120
          }}
          className="atelier-about-grid"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {about.bio.map((p, i) => (
              <p
                key={i}
                style={{
                  fontSize: i === 0 ? "clamp(22px, 2.2vw, 28px)" : "clamp(17px, 1.5vw, 19px)",
                  lineHeight: i === 0 ? 1.4 : 1.75,
                  color: i === 0 ? "var(--text-primary)" : "var(--text-secondary)",
                  fontFamily: i === 0 ? "var(--font-display)" : "var(--font-body)",
                  fontStyle: i === 0 ? "italic" : "normal",
                  margin: 0,
                  maxWidth: 680,
                  fontWeight: i === 0 ? 400 : 400
                }}
              >
                {p}
              </p>
            ))}
            <p
              style={{
                marginTop: 16,
                paddingTop: 16,
                borderTop: "1px solid var(--border-default)",
                fontSize: 14,
                fontStyle: "italic",
                fontFamily: "var(--font-display)",
                color: "var(--text-primary)",
                margin: "16px 0 0"
              }}
            >
              {about.currentlyLine}
            </p>
          </div>

          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 0 }}>
            {about.skills.map((s, i) => (
              <li
                key={s.category}
                style={{
                  padding: "20px 0",
                  borderTop: i === 0 ? "1px solid var(--border-default)" : "none",
                  borderBottom: "1px solid var(--border-default)"
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontSize: 18,
                    color: "#A85838",
                    display: "block",
                    marginBottom: 6
                  }}
                >
                  {s.category}.
                </span>
                <span
                  style={{
                    fontSize: 15,
                    fontFamily: "var(--font-body)",
                    color: "var(--text-secondary)",
                    lineHeight: 1.7
                  }}
                >
                  {s.items}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "clamp(28px, 3.2vw, 40px)",
              fontWeight: 400,
              margin: 0,
              marginBottom: 48,
              color: "var(--text-primary)",
              textAlign: "center"
            }}
          >
            A short trajectory.
          </h3>
          <ol style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {about.experiences.map((exp, i) => (
              <li
                key={exp.company}
                style={{
                  display: "grid",
                  gridTemplateColumns: "60px 220px 1fr",
                  gap: 32,
                  padding: "32px 0",
                  borderTop: i === 0 ? "1px solid var(--border-default)" : "none",
                  borderBottom: "1px solid var(--border-default)",
                  alignItems: "flex-start"
                }}
                className="atelier-traj-row"
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontSize: 32,
                    color: "#A85838"
                  }}
                >
                  {String(i + 1).padStart(2, "0")}.
                </span>
                <div>
                  <h4
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 28,
                      fontWeight: 400,
                      margin: 0,
                      marginBottom: 4,
                      letterSpacing: "-0.01em",
                      color: "var(--text-primary)"
                    }}
                  >
                    {exp.company}
                  </h4>
                  <span
                    style={{
                      fontSize: 13,
                      fontFamily: "var(--font-body)",
                      color: "var(--text-muted)"
                    }}
                  >
                    {exp.period}
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {exp.description && (
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 16,
                        lineHeight: 1.7,
                        color: "var(--text-secondary)",
                        margin: 0
                      }}
                    >
                      {exp.description}
                    </p>
                  )}
                  {exp.projects?.map((proj) => (
                    <div
                      key={proj.name}
                      style={{ paddingTop: 8, borderTop: "1px solid var(--border-subtle)" }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-display)",
                          fontStyle: "italic",
                          fontSize: 19,
                          color: "var(--text-primary)"
                        }}
                      >
                        {proj.name}
                      </span>
                      <span
                        style={{
                          fontSize: 12,
                          color: "var(--text-muted)",
                          fontFamily: "var(--font-body)",
                          marginLeft: 12
                        }}
                      >
                        {proj.period}
                      </span>
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: 14,
                          lineHeight: 1.65,
                          color: "var(--text-secondary)",
                          margin: "4px 0 0"
                        }}
                      >
                        {proj.description}
                      </p>
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <style>{`
        @media (max-width: 809.98px) {
          .atelier-about-grid { grid-template-columns: 1fr; gap: 40px; }
          .atelier-traj-row { grid-template-columns: 1fr; gap: 12px; }
        }
      `}</style>
    </section>
  );
}
