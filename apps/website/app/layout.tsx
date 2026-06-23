import type { Metadata } from "next";
import { tokensToCss } from "@packages/ds-ui";
import { SiteHeader } from "@/components/site-header";
import { StatusBar } from "@/components/status-bar";
import { PageTransition } from "@/components/page-transition";
import { homeContent } from "@/lib/site-content";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rishabh-c.vercel.app";

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
    url: siteUrl,
    images: ["https://framerusercontent.com/images/AqaOpcEcFqtiggHTbjvnqNgu68.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "rishabh's portfolio",
    description: "B2B enterprise product designer. Systems thinker. Uses AI to ship designs in production code.",
    images: ["https://framerusercontent.com/images/AqaOpcEcFqtiggHTbjvnqNgu68.png"]
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
        {/* Signature theme fonts: Fraunces (serif display), Hanken Grotesk (sans), Caveat Brush (handwritten accent) */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400&family=Hanken+Grotesk:wght@400;500;600;700&family=Caveat+Brush&display=swap"
        />
        {/* vs3 theme fonts: Figtree (light refined grotesk display), Inter (body) */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600&family=Inter:wght@400;500;600&display=swap"
        />
      </head>
      <body>
        <a href="#main" className="skip-link">Skip to main content</a>
        <PageTransition>
          <StatusBar text={homeContent.statusBarText} />
          <SiteHeader content={homeContent} />
          <main id="main">{children}</main>
        </PageTransition>
      </body>
    </html>
  );
}
