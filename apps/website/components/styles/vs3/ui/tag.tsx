import type { ReactNode } from "react";
import { cn } from "./cn";

export type TagColor = "accent" | "blue" | "amber" | "purple" | "green" | "outline";

const COLOR: Record<TagColor, string> = {
  accent: "bg-vs3-accent-soft text-vs3-accent",
  blue: "bg-vs3-viz-blue-soft text-vs3-viz-blue",
  amber: "bg-vs3-viz-amber-soft text-vs3-viz-amber",
  purple: "bg-vs3-viz-purple-soft text-vs3-viz-purple",
  green: "bg-vs3-viz-green-soft text-vs3-viz-green",
  outline: "bg-transparent text-vs3-ink-soft ring-1 ring-inset ring-vs3-border-strong"
};

export function Tag({
  children,
  color = "accent",
  className
}: {
  children: ReactNode;
  color?: TagColor;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-vs3-pill px-3 py-1 font-vs3-mono text-vs3-caption font-medium",
        COLOR[color],
        className
      )}
    >
      {children}
    </span>
  );
}
