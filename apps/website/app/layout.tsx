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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/*
          Two typefaces, one request. Inter carries the whole site; Caveat is
          used by exactly one text node — the handwritten "Rishabh." in the
          homepage hero (the `display-script` role). This replaced three
          requests that also pulled Fraunces, Hanken Grotesk, Figtree,
          Instrument Serif and JetBrains Mono.
          Weights: 300 (hp-title/year/bio/lede), 400, 500, 600, 700 (Title/H1).
          Italics 400/500 back Figure Caption and the two quote roles — they were
          faux-italic before, since no italic axis was ever requested.
        */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
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
