import type { HomeContent } from "@/lib/types";

const ACCENTS = ["#5EEAD4", "#A78BFA", "#FFD580", "#BBF451", "#FF8C7A"];

export function SpatialAiWorkflow({ aiWorkflow }: { aiWorkflow: HomeContent["aiWorkflow"] }) {
  return (
    <section
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
          opacity: 0.6,
          pointerEvents: "none"
        }}
      />
      <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto" }}>
        <header style={{ marginBottom: 64, maxWidth: 920 }}>
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
            §04 · Toolchain
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
            {aiWorkflow.heading}.
          </h2>
          <p
            style={{
              fontSize: "clamp(17px, 1.6vw, 21px)",
              lineHeight: 1.5,
              color: "var(--text-secondary)",
              margin: "24px 0 0",
              maxWidth: 720
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
            gap: 16
          }}
        >
          {aiWorkflow.tools.map((tool, i) => (
            <li
              key={tool.name}
              style={{
                position: "relative",
                padding: "26px 24px",
                borderRadius: "var(--radius-xl)",
                border: "1px solid var(--border-default)",
                background:
                  "linear-gradient(180deg, rgba(20,22,28,0.7), rgba(10,11,15,0.5))",
                backdropFilter: "blur(20px) saturate(180%)",
                WebkitBackdropFilter: "blur(20px) saturate(180%)",
                overflow: "hidden"
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: -1,
                  background: `radial-gradient(circle at 0% 0%, ${ACCENTS[i % ACCENTS.length]}1A, transparent 70%)`,
                  pointerEvents: "none"
                }}
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 14
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: ACCENTS[i % ACCENTS.length],
                    boxShadow: `0 0 12px ${ACCENTS[i % ACCENTS.length]}`
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)"
                  }}
                >
                  0{i + 1}
                </span>
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 22,
                  fontWeight: 600,
                  margin: 0,
                  marginBottom: 8,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.01em"
                }}
              >
                {tool.name}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.55,
                  color: "var(--text-secondary)",
                  margin: 0
                }}
              >
                {tool.description}
              </p>
            </li>
          ))}
        </ul>

        <div
          style={{
            marginTop: 56,
            padding: "28px 32px",
            borderRadius: "var(--radius-2xl)",
            border: "1px solid var(--border-default)",
            background:
              "linear-gradient(180deg, rgba(20,22,28,0.7), rgba(10,11,15,0.5))",
            backdropFilter: "blur(18px) saturate(180%)",
            WebkitBackdropFilter: "blur(18px) saturate(180%)",
            display: "flex",
            gap: 20,
            alignItems: "flex-start",
            flexWrap: "wrap"
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#5EEAD4",
              paddingTop: 4
            }}
          >
            $ workflow
          </span>
          <p
            style={{
              flex: 1,
              minWidth: 240,
              margin: 0,
              fontSize: 17,
              lineHeight: 1.5,
              color: "var(--text-primary)"
            }}
          >
            {aiWorkflow.closingLine}
          </p>
        </div>
      </div>
    </section>
  );
}
