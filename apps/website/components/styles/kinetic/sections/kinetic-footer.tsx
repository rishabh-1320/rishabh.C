"use client";

import type { HomeContent } from "@/lib/types";

export function KineticFooter({
  footer,
  resumeUrl,
  footerNote
}: {
  footer: HomeContent["footer"];
  resumeUrl: string;
  footerNote: string;
}) {
  return (
    <footer
      style={{
        background: "var(--text-primary)",
        color: "var(--surface-base)",
        padding: "120px 32px 40px",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto", position: "relative" }}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(56px, 12vw, 200px)",
            lineHeight: 0.92,
            fontWeight: 400,
            letterSpacing: "-0.03em",
            margin: 0,
            marginBottom: 64
          }}
        >
          Got something <span style={{ fontStyle: "italic", color: "#FF4D1A" }}>complex</span>
          <br />
          to design?
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 32,
            marginBottom: 96
          }}
          className="kinetic-footer-grid"
        >
          <div>
            <span
              style={{
                fontSize: 11,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "rgba(244,241,234,0.5)",
                display: "block",
                marginBottom: 12
              }}
            >
              Write
            </span>
            <a
              href={`mailto:${footer.email}`}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 3vw, 44px)",
                color: "#FF4D1A",
                textDecoration: "underline",
                textUnderlineOffset: 6,
                textDecorationThickness: "1px"
              }}
            >
              {footer.email}
            </a>
          </div>
          <div>
            <span
              style={{
                fontSize: 11,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "rgba(244,241,234,0.5)",
                display: "block",
                marginBottom: 12
              }}
            >
              Elsewhere
            </span>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              <li>
                <a
                  href={footer.linkedinUrl}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 24,
                    fontStyle: "italic"
                  }}
                >
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a
                  href={resumeUrl}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 24,
                    fontStyle: "italic"
                  }}
                >
                  Résumé ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 24,
            borderTop: "1px solid rgba(244,241,234,0.18)",
            fontSize: 12,
            fontFamily: "var(--font-body)",
            color: "rgba(244,241,234,0.5)",
            flexWrap: "wrap",
            gap: 12
          }}
        >
          <span>{footerNote}</span>
          <span>{footer.location}</span>
        </div>
      </div>

      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: -120,
          right: -40,
          fontFamily: "var(--font-display)",
          fontSize: "clamp(280px, 50vw, 720px)",
          fontStyle: "italic",
          color: "#FF4D1A",
          opacity: 0.16,
          lineHeight: 1,
          pointerEvents: "none",
          letterSpacing: "-0.05em"
        }}
      >
        end.
      </span>

      <style jsx>{`
        @media (max-width: 809.98px) {
          .kinetic-footer-grid { grid-template-columns: 1fr; gap: 24px; }
        }
      `}</style>
    </footer>
  );
}
