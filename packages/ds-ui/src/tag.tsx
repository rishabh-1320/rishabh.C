import type { ReactNode } from "react";
import { cn } from "./cn";

export type TagColor = "lilac" | "peach" | "mint" | "sky" | "outline";

const COLOR: Record<TagColor, string> = {
  lilac: "bg-ds-tag-lilac-bg text-ds-tag-lilac-fg",
  peach: "bg-ds-tag-peach-bg text-ds-tag-peach-fg",
  mint: "bg-ds-tag-mint-bg text-ds-tag-mint-fg",
  sky: "bg-ds-tag-sky-bg text-ds-tag-sky-fg",
  outline: "bg-transparent text-ds-ink-soft ring-1 ring-inset ring-ds-border-strong"
};

export function Tag({
  children,
  color = "lilac",
  className
}: {
  children: ReactNode;
  color?: TagColor;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-ds-pill px-3 py-1 font-ds-sans text-ds-caption font-medium",
        COLOR[color],
        className
      )}
    >
      {children}
    </span>
  );
}
