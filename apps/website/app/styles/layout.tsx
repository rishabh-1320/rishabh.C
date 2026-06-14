import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visual Directions — Preview",
  description: "Three complete homepage variants for the portfolio overhaul.",
  robots: { index: false, follow: false }
};

export default function StylesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
