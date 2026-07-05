import type { ReactNode } from "react";
import { Text } from "@packages/ds-ui";

type SubCardProps = {
  title?: string;
  children: ReactNode;
  className?: string;
};

/**
 * Inner card used inside case study sections — for step breakdowns,
 * sub-points, decision cards, etc. Flat 8px/hairline chrome, matching the
 * homepage's card language (no shadow, no legacy rounded-2xl).
 */
export function SubCard({ title, children, className }: SubCardProps) {
  return (
    <div
      className={`space-y-3 rounded-ds-card border border-ds-hairline bg-ds-surface-paper p-5 md:p-6 ${className ?? ""}`}
    >
      {title ? (
        <Text variant="hp-subtitle" as="h3">
          {title}
        </Text>
      ) : null}
      {children}
    </div>
  );
}
