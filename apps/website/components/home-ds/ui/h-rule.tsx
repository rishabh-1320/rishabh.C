import { cn } from "@packages/ds-ui";

/**
 * L2-owned full-bleed horizontal divider — spans the entire section width
 * (unlike Block's column-width verticals), so it crosses both vertical
 * hairlines and reads as a ledger intersection, matching the export.
 */
export function HRule({ className, dark = false }: { className?: string; dark?: boolean }) {
  return <div className={cn("h-px w-full", dark ? "bg-ds-hairline-dark" : "bg-ds-hairline", className)} />;
}
