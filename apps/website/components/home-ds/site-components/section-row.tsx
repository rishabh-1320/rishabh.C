import type { ReactNode } from "react";
import { cn } from "@packages/ds-ui";

/**
 * L3 — centers the content column and owns the flexible side margin (a fixed
 * max column with margins that grow on wide screens and collapse to a small
 * gutter on mobile). Never draws a border; that's Block's job. Every section
 * wraps its Block(s) in one of these so the column is centered identically
 * everywhere on the page.
 */
export function SectionRow({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("flex w-full justify-center px-4 sm:px-6", className)}>{children}</div>;
}
