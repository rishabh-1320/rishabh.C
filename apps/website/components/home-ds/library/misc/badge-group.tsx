import { cn } from "@packages/ds-ui";
import { MinimalBadge } from "./minimal-badge";

/**
 * Figma "Badge Group" (node 569:7897) — a 24px-gapped row of the bare
 * uppercase chip, used above a Visual Block's caption.
 *
 * The chip itself is `MinimalBadge tone="bare"`, which is already pixel-equal
 * to Figma's `Badge` (node 404:3300): p-0.5 = 2px, rounded-ds-tag = 4px,
 * 12px uppercase, tracking -0.025em = -0.3px at 12px, text-ds-hp-muted =
 * #A5A19C. Figma specifies 1.1 line-height, but 12px is under 20px, so the
 * house rule's 1.4 wins — `MinimalBadge` sets it and no override belongs here.
 */
export function BadgeGroup({ items, className }: { items: string[]; className?: string }) {
  if (items.length === 0) return null;

  return (
    <div className={cn("flex items-center gap-6", className)}>
      {items.map((item) => (
        <MinimalBadge key={item} tone="bare">
          {item}
        </MinimalBadge>
      ))}
    </div>
  );
}
