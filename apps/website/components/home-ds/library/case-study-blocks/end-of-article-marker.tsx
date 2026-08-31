import { cn } from "@packages/ds-ui";

/**
 * Figma "end-of-article-marker" (node 573:9329) — circle, triangle, square in a
 * centred row, closing the article before the "next projects" block. All three
 * shapes are Figma's `canvas/muted` #BFB3A3.
 *
 * The circle and triangle come out of Figma as image assets served from a
 * localhost dev server; they're drawn here instead (border-radius and an SVG
 * polygon) so nothing depends on that server at build time.
 *
 * Purely decorative — hidden from assistive tech.
 */
export function EndOfArticleMarker({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("flex w-full items-center justify-center gap-5 overflow-clip py-8", className)}
    >
      <span className="size-[14px] shrink-0 rounded-full bg-ds-canvas-muted" />
      <svg
        className="h-[14px] w-[16px] shrink-0"
        viewBox="0 0 16 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Figma insets the triangle 6.7% each side and 25% from the bottom of its box. */}
        <path d="M8 0 L15 10.5 L1 10.5 Z" className="fill-ds-canvas-muted" />
      </svg>
      <span className="size-[13px] shrink-0 bg-ds-canvas-muted" />
    </div>
  );
}
