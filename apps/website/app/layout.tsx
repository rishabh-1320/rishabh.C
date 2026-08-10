import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { tokensToCss } from "@packages/ds-ui";
import { PageTransition } from "@/components/page-transition";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rishabh-c.vercel.app";
const CLARITY_PROJECT_ID = "xsvkj8z011";

export const metadata: Metadata = {
  title: {
    default: "rishabh's portfolio",
    template: "%s | rishabh"
  },
  description: "B2B enterprise product designer. Systems thinker. Uses AI to ship designs in production code.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "rishabh's portfolio",
    description: "B2B enterprise product designer. Systems thinker. Uses AI to ship designs in production code.",
    type: "website",
    url: siteUrl
    // og:image comes from app/opengraph-image.tsx (self-hosted, generated card)
  },
  twitter: {
    card: "summary_large_image",
    title: "rishabh's portfolio",
    description: "B2B enterprise product designer. Systems thinker. Uses AI to ship designs in production code."
    // twitter:image falls back to app/opengraph-image.tsx
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Canonical design-system tokens (--ds-*) — single source of truth, injected once on :root. */}
        <style dangerouslySetInnerHTML={{ __html: tokensToCss() }} />
        <link
          rel="preload"
          href="https://framerusercontent.com/assets/suQ36PpzxORmpGk06KApyPNrO0.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap"
        />
        {/* Signature theme fonts: Fraunces (serif display), Hanken Grotesk (sans), Caveat (handwritten accent) */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400&family=Hanken+Grotesk:wght@400;500;600;700&family=Caveat:wght@400;500;600;700&display=swap"
        />
        {/* vs3 theme fonts: Figtree (light refined grotesk display), Inter (body) —
            homepage 2026 refresh uses Inter as its primary sans, hence 300/500/600 too */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600&family=Inter:wght@300;400;500;600&display=swap"
        />
      </head>
      <body>
        <a href="#main" className="skip-link">Skip to main content</a>
        <PageTransition>
          <main id="main">{children}</main>
        </PageTransition>
        <Analytics />
        <Script id="ms-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");`}
        </Script>
      </body>
    </html>
  );
}
