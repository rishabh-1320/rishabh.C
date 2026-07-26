import { Text } from "@packages/ds-ui";
import { ArrowCircleButton } from "./arrow-circle-button";

/**
 * One quote in About's Testimonials pair. Traced from the Figma export: no
 * per-card quote glyph and no divider (the big quote marks live at the block
 * corners); just the quote (16px muted), then name (20px heading) / role
 * (12px uppercase muted) with an optional arrow. Padding pt-24 pb-72 px-48.
 */
export function TestimonialCard({ quote, name, role, href }: { quote: string; name: string; role: string; href?: string }) {
  return (
    <div className="flex flex-col gap-6 px-12 pb-18 pt-6">
      <Text variant="hp-body" className="text-[16px]">
        {quote}
      </Text>
      <div className="flex items-start justify-between gap-6">
        <div className="flex flex-col gap-1">
          <Text variant="hp-card-title-sm">{name}</Text>
          <Text variant="hp-meta" className="uppercase !text-ds-hp-muted">
            {role}
          </Text>
        </div>
        {href && <ArrowCircleButton />}
      </div>
    </div>
  );
}
