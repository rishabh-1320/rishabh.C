import type { HomeContent } from "@/lib/types";

export function SpatialAbout({ about }: { about: HomeContent["about"] }) {
  return (
    <section
      id="about"
      style={{
        position: "relative",
        padding: "140px 24px",
        background: "var(--surface-base)",
        borderBottom: "1px solid var(--border-subtle)",
        overflow: "hidden"
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "var(--spatial-mesh-1)",
          opacity: 0.5,
          pointerEvents: "none"
        }}
      />
      <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto" }}>
        <header style={{ marginBottom: 80 }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              display: "block",
              marginBottom: 18
            }}
          >
            §06 · Background
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 5.4vw, 72px)",
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
              fontWeight: 600,
              margin: 0,
              color: "var(--text-primary)"
            }}
          >
            {about.heading}.
          </h2>
        </header>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr",
            gap: 48,
            marginBottom: 80
          }}
          className="spatial-about-grid"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {about.bio.map((p, i) => (
              <p
                key={i}
                style={{
                  fontSize: i === 0 ? "clamp(18px, 1.7vw, 22px)" : "clamp(15px, 1.3vw, 17px)",
                  lineHeight: 1.55,
                  color: i === 0 ? "var(--text-primary)" : "var(--text-secondary)",
                  margin: 0
                }}
              >
                {p}
              </p>
            ))}
            <div
              style={{
                marginTop: 8,
                padding: "20px 24px",
                borderRadius: "var(--radius-xl)",
                border: "1px solid var(--border-default)",
                background:
                  "linear-gradient(180deg, rgba(94,234,212,0.10), rgba(167,139,250,0.06))",
                display: "flex",
                alignItems: "center",
                gap: 12
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#5EEAD4",
                  boxShadow: "0 0 12px #5EEAD4"
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#5EEAD4"
                }}
              >
                Currently
              </span>
              <span style={{ fontSize: 15, color: "var(--text-primary)" }}>{about.currentlyLine}</span>
            </div>
          </div>

          <div
            style={{
              padding: "28px",
              borderRadius: "var(--radius-2xl)",
              border: "1px solid var(--border-default)",
              background: "linear-gradient(180deg, rgba(20,22,28,0.7), rgba(10,11,15,0.5))",
              display: "flex",
              flexDirection: "column",
              gap: 18
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
              Skills
            </span>
            {about.skills.map((s) => (
              <div key={s.category} style={{ borderTop: "1px solid var(--border-subtle)", paddingTop: 14 }}>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    letterSpacing: "0.16em",
                    color: "#A78BFA",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: 4
                  }}
                >
                  {s.category}
                </span>
                <span style={{ fontSize: 14, lineHeight: 1.55, color: "var(--text-secondary)" }}>{s.items}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              display: "block",
              marginBottom: 22
            }}
          >
            Trajectory
          </span>
          <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
            {about.experiences.map((exp, i) => (
              <li
                key={exp.company}
                style={{
                  position: "relative",
                  padding: "28px 28px",
                  borderRadius: "var(--radius-xl)",
                  border: "1px solid var(--border-default)",
                  background: "linear-gradient(180deg, rgba(20,22,28,0.6), rgba(10,11,15,0.4))",
                  display: "grid",
                  gridTemplateColumns: "minmax(160px, 200px) 1fr",
                  gap: 28
                }}
                className="spatial-trajectory-row"
              >
                <div>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      letterSpacing: "0.18em",
                      color: "#FFD580",
                      textTransform: "uppercase",
                      display: "block",
                      marginBottom: 6
                    }}
                  >
                    0{i + 1}
                  </span>
                  <h4
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 22,
                      fontWeight: 600,
                      margin: 0,
                      marginBottom: 4,
                      letterSpacing: "-0.02em",
                      color: "var(--text-primary)"
                    }}
                  >
                    {exp.company}
                  </h4>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                      color: "var(--text-muted)"
                    }}
                  >
                    {exp.period}
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {exp.description && (
                    <p
                      style={{
                        fontSize: 15,
                        lineHeight: 1.55,
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
                      style={{
                        padding: "8px 0",
                        borderTop: "1px solid var(--border-subtle)"
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: 11,
                          letterSpacing: "0.14em",
                          color: "#5EEAD4",
                          textTransform: "uppercase"
                        }}
                      >
                        {proj.name}
                      </span>
                      <span style={{ fontSize: 12, color: "var(--text-muted)", marginLeft: 10 }}>{proj.period}</span>
                      <p style={{ fontSize: 14, color: "var(--text-secondary)", margin: "4px 0 0" }}>{proj.description}</p>
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
          .spatial-about-grid { grid-template-columns: 1fr; gap: 32px; }
          .spatial-trajectory-row { grid-template-columns: 1fr; gap: 12px; }
        }
      `}</style>
    </section>
  );
}
