import type { HomeContent } from "@/lib/types";

export function AtelierFooter({
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
        background: "var(--surface-base)",
        padding: "180px 40px 56px",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
        <span
          style={{
            fontSize: 12,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            display: "block",
            marginBottom: 32
          }}
        >
          № 07 · Closing
        </span>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(48px, 8vw, 132px)",
            lineHeight: 0.98,
            letterSpacing: "-0.02em",
            fontWeight: 400,
            margin: 0,
            color: "var(--text-primary)"
          }}
        >
          Got something{" "}
          <span style={{ fontStyle: "italic", color: "#A85838" }}>complex</span>
          <br />
          to design?
        </h2>
        <p
          style={{
            marginTop: 32,
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: "clamp(20px, 2vw, 26px)",
            color: "var(--text-secondary)",
            margin: "32px auto 0",
            maxWidth: 640,
            lineHeight: 1.5
          }}
        >
          {footer.closingLine}
        </p>

        <div
          style={{
            marginTop: 56,
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12
          }}
        >
          <a
            href={`mailto:${footer.email}`}
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "clamp(28px, 4vw, 56px)",
              color: "#A85838",
              textDecoration: "underline",
              textDecorationThickness: 1,
              textUnderlineOffset: 8,
              letterSpacing: "-0.01em"
            }}
          >
            {footer.email}
          </a>
          <div
            style={{
              display: "inline-flex",
              gap: 32,
              fontFamily: "var(--font-body)",
              fontSize: 14,
              color: "var(--text-secondary)"
            }}
          >
            <a href={footer.linkedinUrl}>LinkedIn ↗</a>
            <a href={resumeUrl}>Résumé ↗</a>
          </div>
        </div>

        <div
          style={{
            marginTop: 120,
            paddingTop: 24,
            borderTop: "1px solid var(--border-default)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 13,
            color: "var(--text-muted)",
            fontFamily: "var(--font-body)",
            flexWrap: "wrap",
            gap: 12
          }}
        >
          <span>{footerNote}</span>
          <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 16 }}>
            — fin.
          </span>
          <span>{footer.location}</span>
        </div>
      </div>
    </footer>
  );
}
