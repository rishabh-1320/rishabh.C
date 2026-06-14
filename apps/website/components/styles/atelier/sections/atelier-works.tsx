"use client";

import Link from "next/link";
import type { WorkCard } from "@/lib/types";

export function AtelierWorks({ heading, works }: { heading: string; works: WorkCard[] }) {
  return (
    <section
      id="works"
      style={{
        background: "var(--surface-muted)",
        padding: "160px 40px",
        borderBottom: "1px solid var(--border-default)"
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <header
          style={{
            marginBottom: 120,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 32,
            alignItems: "end"
          }}
          className="atelier-works-header"
        >
          <div>
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
              № 03 · Plates
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
              {heading.split(" ")[0]}{" "}
              <span style={{ fontStyle: "italic", color: "#A85838" }}>
                {heading.split(" ").slice(1).join(" ")}
              </span>
            </h2>
          </div>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.7,
              color: "var(--text-secondary)",
              fontFamily: "var(--font-body)",
              margin: 0
            }}
          >
            A small set of long projects. Each one was years, not weeks. Pointer over a plate to peek.
          </p>
        </header>

        <ol
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: 0
          }}
        >
          {works.map((w, i) => {
            const row = (
              <li
                key={w.id}
                data-cursor-preview={w.image}
                data-cursor-label={w.active ? "Read" : "Soon"}
                style={{
                  display: "grid",
                  gridTemplateColumns: "90px 1fr auto",
                  gap: 48,
                  padding: "44px 0",
                  borderTop: i === 0 ? "1px solid var(--border-default)" : "none",
                  borderBottom: "1px solid var(--border-default)",
                  alignItems: "baseline",
                  cursor: w.active && w.href ? "pointer" : "default",
                  transition: "padding 700ms cubic-bezier(0.19,1,0.22,1), background 700ms cubic-bezier(0.19,1,0.22,1)"
                }}
                className="atelier-work-row"
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontSize: 36,
                    color: "#A85838",
                    lineHeight: 1
                  }}
                >
                  Pl. {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(26px, 3vw, 40px)",
                      lineHeight: 1.1,
                      letterSpacing: "-0.02em",
                      fontWeight: 400,
                      margin: 0,
                      marginBottom: 14,
                      color: "var(--text-primary)"
                    }}
                  >
                    {w.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 16,
                      lineHeight: 1.7,
                      color: "var(--text-secondary)",
                      fontFamily: "var(--font-body)",
                      margin: 0,
                      maxWidth: 720
                    }}
                  >
                    {w.description}
                  </p>
                  <div
                    style={{
                      marginTop: 18,
                      display: "flex",
                      gap: 18,
                      flexWrap: "wrap",
                      fontSize: 13,
                      color: "var(--text-muted)",
                      fontFamily: "var(--font-body)"
                    }}
                  >
                    <span>{w.role}</span>
                    <span style={{ color: "var(--border-strong)" }}>·</span>
                    <span>{w.year || "—"}</span>
                    <span style={{ color: "var(--border-strong)" }}>·</span>
                    <span>{w.company || "Personal"}</span>
                  </div>
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontSize: 22,
                    color: w.active ? "#A85838" : "var(--text-muted)",
                    whiteSpace: "nowrap"
                  }}
                >
                  {w.active && w.href ? "Read →" : "Soon"}
                </span>
              </li>
            );
            if (w.active && w.href) {
              return (
                <Link
                  key={w.id}
                  href={w.href}
                  style={{ display: "block", color: "inherit", textDecoration: "none" }}
                >
                  {row}
                </Link>
              );
            }
            return row;
          })}
        </ol>
      </div>

      <style>{`
        @media (max-width: 809.98px) {
          .atelier-works-header { grid-template-columns: 1fr; gap: 16px; }
          .atelier-work-row { grid-template-columns: 1fr; gap: 12px; }
        }
      `}</style>
    </section>
  );
}
