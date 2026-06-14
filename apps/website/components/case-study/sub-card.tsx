import type { ReactNode } from "react";
import { Card, Text } from "@packages/ds-ui";

type SubCardProps = {
  title?: string;
  children: ReactNode;
  /** Defaults to `h3`. (The ds type scale has a single small-heading role.) */
  titleSize?: "h3" | "h4";
  className?: string;
};

/**
 * Inner card used inside case study sections — for step breakdowns,
 * sub-points, decision cards, etc.
 */
export function SubCard({ title, children, className }: SubCardProps) {
  return (
    <Card surface="raised" pad="md" className={`space-y-3 ${className ?? ""}`}>
      {title ? (
        <Text variant="h3" as="h3">
          {title}
        </Text>
      ) : null}
      {children}
    </Card>
  );
}
