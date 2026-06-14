import Link from "next/link";

type Direction = {
  slug: string;
  label: string;
  tagline: string;
  energy: string;
  palette: string;
  motion: string;
  threeD: string;
  accent: string;
  bg: string;
  fg: string;
  border: string;
};

const directions: Direction[] = [
  {
    slug: "kinetic",
    label: "Kinetic Editorial",
    tagline: "A printed magazine that came alive.",
    energy: "Loud",
    palette: "Bone · Ink · Molten orange",
    motion: "Horizontal pinned carousel · Marquee · Scramble",
    threeD: "Selective WebGL (OGL noise ribbon)",
    accent: "#FF4D1A",
    bg: "#F4F1EA",
    fg: "#0A0A0A",
    border: "#0A0A0A"
  },
  {
    slug: "spatial",
    label: "Cinematic Spatial",
    tagline: "Premium B2B for engineers and design leaders.",
    energy: "Polished",
    palette: "Pure black · Cyan · Violet · Amber",
    motion: "Layered Z-depth parallax · Particle field · Glow sweep",
    threeD: "Full R3F centerpiece (icosahedron + transmission)",
    accent: "#5EEAD4",
    bg: "#000000",
    fg: "#FFFFFF",
    border: "rgba(255,255,255,0.18)"
  },
  {
    slug: "atelier",
    label: "Editorial Atelier",
    tagline: "Quiet luxury. The opposite of loud.",
    energy: "Quiet",
    palette: "Cream · Ink · Muted terracotta",
    motion: "Slow reveals · Custom cursor · SVG turbulence",
    threeD: "None — CSS/SVG/GSAP only",
    accent: "#A85838",
    bg: "#F0EBE0",
    fg: "#1A1814",
    border: "rgba(26,24,20,0.18)"
  }
];

export default function StylesLandingPage() {
  return (
    <div
      data-hide-site-header
      data-hide-status-bar
      style={{
        minHeight: "100vh",
        background: "#0A0A0A",
        color: "#F4F1EA",
        padding: "80px 24px",
        fontFamily: "Aileron, Inter, system-ui, sans-serif"
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <header style={{ marginBottom: 56 }}>
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "rgba(244,241,234,0.5)",
              marginBottom: 16
            }}
          >
            Homepage Visual Overhaul · Preview
          </p>
          <h1
            style={{
              fontSize: "clamp(40px, 6vw, 84px)",
              lineHeight: 1.02,
              fontWeight: 600,
              letterSpacing: "-0.03em",
              marginBottom: 20,
              maxWidth: 980
            }}
          >
            Three directions. Pick one — or hybridize.
          </h1>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              color: "rgba(244,241,234,0.72)",
              maxWidth: 720
            }}
          >
            Each direction is a complete homepage build, not a mockup. Walk all three on desktop and mobile, feel the motion, and decide which one becomes the new <code style={{ background: "rgba(244,241,234,0.08)", padding: "2px 8px", borderRadius: 4 }}>/</code>.
          </p>
        </header>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 20
          }}
        >
          {directions.map((d, i) => (
            <Link
              key={d.slug}
              href={`/styles/${d.slug}`}
              style={{
                display: "block",
                background: d.bg,
                color: d.fg,
                border: `1px solid ${d.border}`,
                padding: 32,
                textDecoration: "none",
                minHeight: 420,
                position: "relative",
                overflow: "hidden",
                transition: "transform 360ms cubic-bezier(0.19,1,0.22,1)"
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 24
                }}
              >
                <span
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    opacity: 0.56
                  }}
                >
                  {String(i + 1).padStart(2, "0")} / {d.energy}
                </span>
                <span
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: d.accent,
                    boxShadow: `0 0 24px ${d.accent}80`
                  }}
                />
              </div>

              <h2
                style={{
                  fontSize: 36,
                  lineHeight: 1.05,
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  marginBottom: 12
                }}
              >
                {d.label}
              </h2>
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.5,
                  opacity: 0.7,
                  marginBottom: 32
                }}
              >
                {d.tagline}
              </p>

              <dl style={{ display: "grid", gap: 12, fontSize: 13, lineHeight: 1.5 }}>
                <div>
                  <dt style={{ opacity: 0.5, marginBottom: 2 }}>Palette</dt>
                  <dd style={{ margin: 0 }}>{d.palette}</dd>
                </div>
                <div>
                  <dt style={{ opacity: 0.5, marginBottom: 2 }}>Motion</dt>
                  <dd style={{ margin: 0 }}>{d.motion}</dd>
                </div>
                <div>
                  <dt style={{ opacity: 0.5, marginBottom: 2 }}>3D</dt>
                  <dd style={{ margin: 0 }}>{d.threeD}</dd>
                </div>
              </dl>

              <span
                style={{
                  position: "absolute",
                  right: 24,
                  bottom: 24,
                  fontSize: 12,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  opacity: 0.6
                }}
              >
                Walk it →
              </span>
            </Link>
          ))}
        </div>

        <footer
          style={{
            marginTop: 64,
            paddingTop: 24,
            borderTop: "1px solid rgba(244,241,234,0.08)",
            fontSize: 13,
            color: "rgba(244,241,234,0.5)"
          }}
        >
          Current homepage stays untouched at{" "}
          <Link href="/" style={{ color: "inherit", textDecoration: "underline" }}>
            /
          </Link>{" "}
          until you promote a winner.
        </footer>
      </div>
    </div>
  );
}
