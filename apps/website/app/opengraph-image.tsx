import { ImageResponse } from "next/og";

// Self-hosted link-preview card generated from the live brand (no external
// hotlink). Next injects this as both og:image and twitter:image.
export const alt = "Rishabh — B2B enterprise product designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#FFFFFF",
          padding: "96px",
          fontFamily: "sans-serif"
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: 8,
            color: "#E06C41",
            textTransform: "uppercase"
          }}
        >
          Product Designer
        </div>

        <div style={{ display: "flex", fontSize: 132, fontWeight: 600, color: "#181818", marginTop: 12 }}>
          Rishabh<span style={{ color: "#E06C41" }}>.</span>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", columnGap: 14, rowGap: 6, fontSize: 46, color: "#71717A", marginTop: 28, maxWidth: 1000, lineHeight: 1.3 }}>
          <span>I design</span>
          <span style={{ color: "#181818" }}>B2B enterprise tools</span>
          <span>where</span>
          <span style={{ color: "#181818" }}>clarity</span>
          <span>is the only metric that matters.</span>
        </div>

        <div style={{ display: "flex", fontSize: 24, color: "#A5A19C", marginTop: 48 }}>
          rishabh-c.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
