"use client";

import type { HomeContent } from "@/lib/types";

export function KineticAbout({ about }: { about: HomeContent["about"] }) {
  return (
    <section
      id="about"
      style={{
        background: "var(--surface-muted)",
        color: "var(--text-primary)",
        padding: "120px 32px",
        borderBottom: "1px solid var(--border-default)"
      }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <header style={{ marginBottom: 80 }}>
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
            §06 — Colophon
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
            {about.heading}
            <span style={{ color: "#FF4D1A" }}>.</span>
          </h2>
        </header>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr",
            gap: 64,
            marginBottom: 96
          }}
          className="kinetic-about-grid"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {about.bio.map((p, i) => (
              <p
                key={i}
                style={{
                  fontSize: i === 0 ? "clamp(22px, 2vw, 28px)" : "clamp(17px, 1.4vw, 19px)",
                  lineHeight: 1.5,
                  fontFamily: "var(--font-body)",
                  color: i === 0 ? "var(--text-primary)" : "var(--text-secondary)",
                  margin: 0,
                  fontStyle: i === 0 ? "normal" : "normal"
                }}
              >
                {p}
              </p>
            ))}
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 24,
                fontStyle: "italic",
                color: "var(--text-primary)",
                margin: 0,
                paddingTop: 16,
                borderTop: "1px solid var(--border-default)"
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
                  borderBottom: "1px solid var(--border-default)",
                  borderTop: i === 0 ? "1px solid var(--border-default)" : "none"
                }}
              >
                <span
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--text-secondary)",
                    display: "block",
                    marginBottom: 6
                  }}
                >
                  {s.category}
                </span>
                <span style={{ fontSize: 15, lineHeight: 1.5, fontFamily: "var(--font-body)" }}>{s.items}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 42,
              fontStyle: "italic",
              fontWeight: 400,
              margin: 0,
              marginBottom: 32,
              color: "var(--text-primary)"
            }}
          >
            Trajectory.
          </h3>
          <ol
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              borderTop: "1px solid var(--border-default)"
            }}
          >
            {about.experiences.map((exp, i) => (
              <li
                key={exp.company}
                style={{
                  display: "grid",
                  gridTemplateColumns: "120px 1fr 2fr",
                  gap: 32,
                  padding: "32px 0",
                  borderBottom: "1px solid var(--border-default)",
                  alignItems: "flex-start"
                }}
                className="kinetic-trajectory-row"
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 40,
                    fontStyle: "italic",
                    color: "#FF4D1A",
                    lineHeight: 1
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h4
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 32,
                      fontWeight: 400,
                      margin: 0,
                      letterSpacing: "-0.02em"
                    }}
                  >
                    {exp.company}
                  </h4>
                  <span
                    style={{
                      fontSize: 13,
                      color: "var(--text-secondary)",
                      fontFamily: "var(--font-body)"
                    }}
                  >
                    {exp.period}
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {exp.description && (
                    <p style={{ fontSize: 16, lineHeight: 1.55, fontFamily: "var(--font-body)", margin: 0 }}>
                      {exp.description}
                    </p>
                  )}
                  {exp.projects?.map((proj) => (
                    <div
                      key={proj.name}
                      style={{
                        padding: "10px 0",
                        borderTop: "1px dashed var(--border-default)"
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: 19,
                          fontStyle: "italic",
                          color: "var(--text-primary)"
                        }}
                      >
                        {proj.name}
                      </span>
                      <span
                        style={{
                          fontSize: 12,
                          color: "var(--text-muted)",
                          marginLeft: 12,
                          fontFamily: "var(--font-body)"
                        }}
                      >
                        {proj.period}
                      </span>
                      <p style={{ fontSize: 14, lineHeight: 1.5, color: "var(--text-secondary)", margin: "4px 0 0" }}>
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

      <style jsx>{`
        @media (max-width: 809.98px) {
          .kinetic-about-grid { grid-template-columns: 1fr; gap: 32px; }
          .kinetic-trajectory-row { grid-template-columns: 1fr; gap: 12px; }
        }
      `}</style>
    </section>
  );
}
