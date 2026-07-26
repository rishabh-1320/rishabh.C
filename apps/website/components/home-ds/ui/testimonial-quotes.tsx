import type { ReactNode } from "react";

/**
 * Wraps the testimonials pair and hangs the two large decorative quote glyphs
 * at the block corners (open top-left, close bottom-right), matching the Figma
 * export. Glyphs are inset 24px (the standard gutter) since the testimonials
 * row itself now runs padX="none" (full-bleed to the rails) so its horizontal
 * scroll clips exactly at the rail line — see RailScrollRow. Kept in ui/ so
 * the raw glyph size stays out of the drift-linted section files.
 */
export function TestimonialQuotes({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-4 left-6 font-ds-serif text-[40px] leading-none text-ds-hairline"
      >
        &ldquo;
      </span>
      {children}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-6 right-6 font-ds-serif text-[40px] leading-none text-ds-hairline"
      >
        &rdquo;
      </span>
    </div>
  );
}
