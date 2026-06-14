import type { HomeContent } from "@/lib/types";

export function SpatialFooter({
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
        position: "relative",
        padding: "140px 24px 56px",
        background: "var(--surface-base)",
        overflow: "hidden"
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 0%, rgba(94,234,212,0.16), transparent 50%), radial-gradient(circle at 50% 100%, rgba(167,139,250,0.14), transparent 50%)",
          pointerEvents: "none"
        }}
      />
      <div style={{ position: "relative", maxWidth: 1180, margin: "0 auto", textAlign: "center" }}>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            display: "block",
            marginBottom: 28
          }}
        >
          §07 · Get in touch
        </span>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(40px, 7vw, 96px)",
            lineHeight: 1.02,
            letterSpacing: "-0.035em",
            fontWeight: 600,
            margin: 0,
            color: "var(--text-primary)"
          }}
        >
          Got something{" "}
          <span
            style={{
              background:
                "linear-gradient(120deg, #5EEAD4 0%, #A78BFA 50%, #FFD580 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent"
            }}
          >
            complex
          </span>{" "}
          to design?
        </h2>
        <p
          style={{
            fontSize: "clamp(17px, 1.6vw, 20px)",
            color: "var(--text-secondary)",
            margin: "20px auto 48px",
            maxWidth: 600
          }}
        >
          {footer.closingLine}
        </p>

        <div
          style={{
            display: "inline-flex",
            gap: 14,
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          <a
            href={`mailto:${footer.email}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "14px 26px",
              borderRadius: 999,
              background: "var(--brand-lime)",
              color: "var(--surface-base)",
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              letterSpacing: "0.06em",
              fontWeight: 600,
              boxShadow: "0 0 36px rgba(187,244,81,0.36)"
            }}
          >
            {footer.email} →
          </a>
          <a
            href={footer.linkedinUrl}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "14px 26px",
              borderRadius: 999,
              border: "1px solid var(--border-default)",
              background: "rgba(255,255,255,0.04)",
              color: "var(--text-primary)",
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              letterSpacing: "0.06em"
            }}
          >
            LinkedIn ↗
          </a>
          <a
            href={resumeUrl}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "14px 26px",
              borderRadius: 999,
              border: "1px solid var(--border-default)",
              background: "rgba(255,255,255,0.04)",
              color: "var(--text-primary)",
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              letterSpacing: "0.06em"
            }}
          >
            Résumé ↗
          </a>
        </div>

        <div
          style={{
            marginTop: 80,
            paddingTop: 24,
            borderTop: "1px solid var(--border-subtle)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.16em",
            color: "var(--text-muted)",
            textTransform: "uppercase",
            flexWrap: "wrap",
            gap: 12
          }}
        >
          <span>{footerNote}</span>
          <span>{footer.location}</span>
        </div>
      </div>
    </footer>
  );
}
