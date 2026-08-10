import type { ReactNode } from "react";
import { Text, cn } from "@packages/ds-ui";

/**
 * Figma "Work-philosophy-card" — icon (in an 8px-padded, rounded-8 box, the
 * one detail the previous PrincipleCard implementation was missing), title,
 * description. Self-contained border-r + padding, so it's placed directly
 * inside a zero-padding ContentBlock (its own border lands on the block's
 * right edge for the last card in a row).
 */
export function WorkPhilosophyCard({
  icon,
  title,
  description,
  className
}: {
  icon?: ReactNode;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div className={cn("flex h-full flex-col items-start gap-[86px] border-r border-ds-hairline px-6 pb-18 pt-12", className)}>
      <div className="flex items-center justify-center rounded-ds-card p-2 text-ds-hp-muted">{icon}</div>
      <div className="flex flex-col gap-4">
        <Text variant="hp-card-title-sm">{title}</Text>
        <Text variant="hp-label" className="normal-case">{description}</Text>
      </div>
    </div>
  );
}
