import { cn } from "@packages/ds-ui";
import { CATEGORY, type CategoryTone } from "./category-tone";
import { TextContainerCase } from "../texts/text-container-case";

/**
 * Figma "Text-block" (node 573:8083) — the full-width pull-quote band: a
 * category-tinted panel with a 2px category rule down its left edge, a large
 * centred italic quote, and an optional avatar/name/designation attribution.
 *
 * Distinct from `components/case-study/template/case-pull-quote.tsx` (a small
 * inline label+quote inside a chapter) and from the homepage's
 * `TestimonialCard` (right border, hp-* type, arrow button). Kept separate on
 * purpose rather than adding a third variant to either.
 *
 * Figma's `sideBorder` / `username` booleans map to the `sideBorder` prop and
 * to whether `name` is supplied.
 */
export function TextBlock({
  quote,
  name,
  designation,
  avatarSrc,
  sideBorder = true,
  category = "blue",
  className
}: {
  quote: string;
  name?: string;
  designation?: string;
  avatarSrc?: string;
  sideBorder?: boolean;
  category?: CategoryTone;
  className?: string;
}) {
  const tone = CATEGORY[category];

  return (
    <figure
      className={cn(
        // Figma's 48/72 padding from `md` up; halved below it, where it would
        // otherwise leave a 390px screen only 294px of quote.
        "relative flex w-full flex-col items-center justify-center gap-8 px-6 py-12 md:gap-12 md:px-12 md:py-18",
        tone.wash,
        className
      )}
    >
      {sideBorder && <span aria-hidden className={cn("absolute bottom-0 left-0 top-0 w-0.5", tone.liner)} />}

      <TextContainerCase type="Quote Big" as="blockquote" className="w-full text-center [word-break:break-word]">
        {quote}
      </TextContainerCase>

      {name && (
        <figcaption className="flex items-center gap-6">
          <span className="flex size-14 shrink-0 items-center justify-center overflow-clip rounded-full bg-ds-avatar-placeholder">
            {avatarSrc && <img src={avatarSrc} alt="" className="size-full object-cover" />}
          </span>
          <span className="flex flex-col items-start gap-2 whitespace-nowrap">
            <TextContainerCase type="Eyebrow" as="span">
              {name}
            </TextContainerCase>
            {designation && (
              <TextContainerCase type="Caption" as="span" className="!text-ds-hp-muted">
                {designation}
              </TextContainerCase>
            )}
          </span>
        </figcaption>
      )}
    </figure>
  );
}
