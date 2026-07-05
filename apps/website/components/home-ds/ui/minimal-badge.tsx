import { cn } from "@packages/ds-ui";

/**
 * The small uppercase chip used across the homepage's new identity: case-study
 * tags (DASHBOARD/HRMS), timeline project pills (Omny/Signal), and the filled
 * "CURRENT" badge. One shape (rounded-ds-tag, 12px uppercase) so every chip on
 * the page reads as the same component regardless of which section renders it.
 */
export function MinimalBadge({
  children,
  tone = "outline",
  className
}: {
  children: React.ReactNode;
  tone?: "outline" | "filled";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-ds-tag px-2.5 py-1 font-ds-inter text-[11px] font-semibold uppercase leading-none tracking-wide",
        tone === "filled" ? "bg-ds-accent-wash text-ds-accent" : "font-light text-ds-tag-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
