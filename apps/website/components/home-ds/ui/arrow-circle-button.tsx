import { cn } from "@packages/ds-ui";

/**
 * The 40px circular arrow-up-right affordance used on every case-study card
 * (Work + Projects). One definition so the circle, border, and icon never
 * drift between card variants.
 */
export function ArrowCircleButton({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "flex size-10 shrink-0 items-center justify-center rounded-full border border-ds-hairline-faint text-ds-accent",
        className
      )}
      aria-hidden="true"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M5 11L11 5M11 5H6M11 5V10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
