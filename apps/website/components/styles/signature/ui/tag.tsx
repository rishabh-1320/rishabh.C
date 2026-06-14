import type { ReactNode } from "react";
import { cn } from "./cn";

export type TagColor = "lilac" | "peach" | "mint" | "sky" | "outline";

const COLOR: Record<TagColor, string> = {
  lilac: "bg-tag-lilac-bg text-tag-lilac-fg",
  peach: "bg-tag-peach-bg text-tag-peach-fg",
  mint: "bg-tag-mint-bg text-tag-mint-fg",
  sky: "bg-tag-sky-bg text-tag-sky-fg",
  outline:
    "bg-transparent text-[color:var(--text-secondary)] ring-1 ring-inset ring-[color:var(--border-strong)]"
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
        "inline-flex items-center gap-1.5 rounded-pill px-3 py-1 font-sans text-caption font-medium",
        COLOR[color],
        className
      )}
    >
      {children}
    </span>
  );
}
