import { cn } from "@packages/ds-ui";

/**
 * The small uppercase chip used across the homepage and case studies. Traced
 * from the Figma export, there are four distinct treatments — all Inter,
 * weight 400, uppercase:
 *  - `bare`        card tags (Product Design / DASHBOARD): p-[2px], no bg, no pill, muted #a5a19c.
 *  - `accent-bare` case-study hero tags (Product Design / Design System / 2026):
 *                  same p-[2px] shape as `bare`, but accent-orange text (node 480:4296).
 *  - `outline`     timeline project pills (Omny / Signal): px-2.5 py-1, no bg, muted.
 *  - `filled`      the "CURRENT" badge: px-2.5 py-1 on accent-wash, accent text.
 */
export function MinimalBadge({
  children,
  tone = "bare",
  className
}: {
  children: React.ReactNode;
  tone?: "bare" | "accent-bare" | "outline" | "filled";
  className?: string;
}) {
  const TONE: Record<"bare" | "accent-bare" | "outline" | "filled", string> = {
    bare: "p-0.5 text-ds-hp-muted",
    "accent-bare": "p-0.5 text-ds-accent",
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
