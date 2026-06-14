import type { AIExplorationCard } from "@/lib/types";

const STATUS_COLOR: Record<AIExplorationCard["status"], string> = {
  Live: "#5EEAD4",
  Prototype: "#A78BFA",
  Archived: "#6B6E78"
};

export function SpatialExplorations({
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
        position: "relative",
        padding: "140px 24px",
        background: "var(--surface-base)",
        borderBottom: "1px solid var(--border-subtle)"
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <header
          style={{
            marginBottom: 64,
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr",
            gap: 32,
            alignItems: "end"
          }}
          className="spatial-explore-header"
        >
          <div>
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
              §05 · Side projects
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
              {heading}.
            </h2>
          </div>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.55,
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
            gap: 16
          }}
        >
          {explorations.map((exp) => (
            <li
              key={exp.id}
              style={{
                position: "relative",
                padding: 0,
                borderRadius: "var(--radius-2xl)",
                border: "1px solid var(--border-default)",
                background: "linear-gradient(180deg, rgba(20,22,28,0.7), rgba(10,11,15,0.5))",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column"
              }}
            >
              <div style={{ position: "relative", aspectRatio: "16 / 9", overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={exp.image}
                  alt={exp.title}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "brightness(0.7) saturate(1.1)"
                  }}
                />
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.6) 100%)`
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    top: 14,
                    left: 14,
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    padding: "4px 10px",
                    borderRadius: 999,
                    background: "rgba(0,0,0,0.6)",
                    color: STATUS_COLOR[exp.status],
                    border: `1px solid ${STATUS_COLOR[exp.status]}66`
                  }}
                >
                  · {exp.status}
                </span>
                <span
                  style={{
                    position: "absolute",
                    bottom: 14,
                    right: 14,
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    letterSpacing: "0.16em",
                    color: "var(--text-muted)"
                  }}
                >
                  {exp.year}
                </span>
              </div>

              <div style={{ padding: "24px 24px 28px", display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 21,
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                    margin: 0,
                    color: "var(--text-primary)",
                    lineHeight: 1.18
                  }}
                >
                  {exp.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--text-secondary)", margin: 0 }}>
                  {exp.description}
                </p>
                <div style={{ marginTop: "auto", display: "flex", flexWrap: "wrap", gap: 6, paddingTop: 12 }}>
                  {exp.builtWith.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                        letterSpacing: "0.08em",
                        padding: "3px 8px",
                        borderRadius: 6,
                        background: "rgba(255,255,255,0.04)",
                        color: "var(--text-secondary)",
                        border: "1px solid var(--border-subtle)"
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        @media (max-width: 809.98px) {
          .spatial-explore-header { grid-template-columns: 1fr; gap: 20px; }
        }
      `}</style>
    </section>
  );
}
