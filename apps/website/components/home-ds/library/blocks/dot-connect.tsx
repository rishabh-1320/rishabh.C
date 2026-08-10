import { cn } from "@packages/ds-ui";

/**
 * Figma "dot-connect": a 2px dot centered in an 18px hit-box, sitting at
 * bottom-left/bottom-right of every ContentBlock (offset -9px past each
 * edge). Reuses the same --ds-color-dot token HRule's ledger-intersection
 * dots use — same visual signature, different position.
 */
export function DotConnect({ side, dark = false }: { side: "left" | "right"; dark?: boolean }) {
  return (
    <span
      className={cn("pointer-events-none absolute bottom-[-9px] size-[18px]", side === "left" ? "left-[-9px]" : "right-[-9px]")}
    >
      <span
        className={cn(
          "absolute left-1/2 top-1/2 size-0.5 -translate-x-1/2 -translate-y-1/2 rounded-full",
          dark ? "bg-ds-dot-on-ink" : "bg-ds-dot"
        )}
      />
    </span>
  );
}
