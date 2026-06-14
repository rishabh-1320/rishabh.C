import type { Metadata } from "next";
import { tokensToCss } from "@/components/styles/vs3/tokens";

export const metadata: Metadata = {
  title: "Rishabh Choudhary — Design intelligence for complex B2B",
  description:
    "A product designer who builds and scales complex B2B enterprise software, then ships it in production code with AI.",
  robots: { index: false, follow: false }
};

/**
 * vs3 route layout. Injects the isolated `--vs3-*` token variables once
 * (from the single source of truth in tokens.ts), scoped to `.vs3-root`.
 * No other route reads or writes these variables.
 */
export default function Vs3Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: tokensToCss() }} />
      {children}
    </>
  );
}
