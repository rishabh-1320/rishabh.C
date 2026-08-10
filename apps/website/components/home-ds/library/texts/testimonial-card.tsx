import { Text } from "@packages/ds-ui";
import { ArrowCircleButton } from "../misc/arrow-circle-button";

/**
 * One quote in About's Testimonials pair. Traced from the Figma export: a
 * 56px circular avatar (placeholder grey fill when no photo yet) beside
 * name/role, quote 16px muted leading-normal, gap-48 between quote and the
 * support row, padding pt-48 pb-72 pr-72 (no left padding — asymmetric,
 * flush against the block's own left edge).
 */
export function TestimonialCard({
  quote,
  name,
  role,
  href,
  avatarSrc
}: {
  quote: string;
  name: string;
  role: string;
  href?: string;
  avatarSrc?: string;
}) {
  return (
    <div className="flex flex-col items-start gap-12 border-r border-ds-hairline pr-18 pb-18 pt-12">
      <Text variant="hp-body" className="w-full text-[16px] leading-normal">
        {quote}
      </Text>
      <div className="flex w-full items-center gap-6">
        <div className="size-14 shrink-0 overflow-hidden rounded-full bg-ds-avatar-placeholder">
          {avatarSrc && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={avatarSrc} alt="" className="size-full object-cover" />
          )}
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <Text variant="hp-card-title-sm">{name}</Text>
          <Text variant="hp-meta" className="uppercase !text-ds-hp-muted">
            {role}
          </Text>
        </div>
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`More about ${name}`}>
            <ArrowCircleButton />
          </a>
        ) : (
          <ArrowCircleButton />
        )}
      </div>
    </div>
  );
}
