import { cn } from "@packages/ds-ui";

/**
 * The small uppercase chip used across the homepage. Traced from the Figma
 * export, there are three distinct treatments — all Inter, weight 400,
 * uppercase, muted #a5a19c (except `filled`):
 *  - `bare`    card tags (Product Design / DASHBOARD): p-[2px], no bg, no pill.
 *  - `outline` timeline project pills (Omny / Signal): px-2.5 py-1, no bg.
 *  - `filled`  the "CURRENT" badge: px-2.5 py-1 on accent-wash, accent text.
 */
export function MinimalBadge({
  children,
  tone = "bare",
  className
}: {
  children: React.ReactNode;
  tone?: "bare" | "outline" | "filled";
  className?: string;
}) {
  const TONE: Record<"bare" | "outline" | "filled", string> = {
    bare: "p-0.5 text-ds-hp-muted",
    outline: "px-2.5 py-1 text-ds-hp-muted",
    filled: "px-2.5 py-1 bg-ds-accent-wash text-ds-accent"
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-ds-tag font-ds-inter text-[12px] font-normal uppercase leading-none tracking-[-0.025em]",
        TONE[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
