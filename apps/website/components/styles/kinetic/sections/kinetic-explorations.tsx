"use client";

import type { AIExplorationCard } from "@/lib/types";

export function KineticExplorations({
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
        background: "var(--surface-base)",
        color: "var(--text-primary)",
        padding: "120px 32px",
        borderBottom: "1px solid var(--border-default)"
      }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <header
          style={{
            marginBottom: 80,
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr",
            gap: 48,
            alignItems: "end"
          }}
          className="kinetic-explore-header"
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
              §05 — Margins
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(48px, 7vw, 104px)",
                lineHeight: 0.95,
                fontWeight: 400,
                letterSpacing: "-0.02em",
                margin: 0
              }}
            >
              {heading.split(" ")[0]}{" "}
              <span style={{ fontStyle: "italic", color: "#FF4D1A" }}>
                {heading.split(" ").slice(1).join(" ")}
              </span>
            </h2>
          </div>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.5,
              fontFamily: "var(--font-body)",
              color: "var(--text-secondary)",
              margin: 0
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
            borderTop: "1px solid var(--border-default)",
            borderLeft: "1px solid var(--border-default)"
          }}
        >
          {explorations.map((exp, i) => (
            <li
              key={exp.id}
              style={{
                borderRight: "1px solid var(--border-default)",
                borderBottom: "1px solid var(--border-default)",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                gap: 16
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--text-secondary)"
                }}
              >
                <span
                  style={{
                    background:
                      exp.status === "Live"
                        ? "#FF4D1A"
                        : exp.status === "Prototype"
                        ? "var(--text-primary)"
                        : "transparent",
                    color:
                      exp.status === "Archived"
                        ? "var(--text-muted)"
                        : "var(--surface-base)",
                    border:
                      exp.status === "Archived"
                        ? "1px solid var(--border-default)"
                        : "none",
                    padding: "3px 10px"
                  }}
                >
                  {exp.status}
                </span>
                <span>{exp.year}</span>
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 28,
                  lineHeight: 1.1,
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                  margin: 0
                }}
              >
                {exp.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.55,
                  fontFamily: "var(--font-body)",
                  color: "var(--text-secondary)",
                  margin: 0
                }}
              >
                {exp.description}
              </p>

              <div
                style={{
                  marginTop: "auto",
                  paddingTop: 16,
                  borderTop: "1px solid var(--border-default)",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 8,
                  fontSize: 12,
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-body)"
                }}
              >
                {exp.builtWith.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      border: "1px solid var(--border-default)",
                      padding: "2px 8px"
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        @media (max-width: 809.98px) {
          .kinetic-explore-header {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
      `}</style>
    </section>
  );
}
