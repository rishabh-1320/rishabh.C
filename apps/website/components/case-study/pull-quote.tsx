import { Text } from "@packages/ds-ui";

/**
 * Dark editorial panel, two columns on desktop: a small label on the left,
 * a larger emphasized line on the right. Traced from the Figma blog
 * reference (figma.com/blog) — there the same pattern serves both a
 * "pull quote before a major section" and a "/tip" supplementary note, so
 * it's built as one component with an optional `label` rather than two.
 * Reuses the site's existing dark-section tokens (same family as the CTA).
 */
export function PullQuote({ label = "Note", quote }: { label?: string; quote: string }) {
  return (
    <div className="ds-inverted rounded-ds-shell bg-ds-surface-ink px-6 py-8 md:px-10 md:py-10">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-[140px_1fr] md:gap-8">
        <Text variant="hp-label" className="!text-ds-accent">
          {label}
        </Text>
        <Text variant="hp-bio" as="p" className="!text-ds-on-ink">
          {quote}
        </Text>
      </div>
    </div>
  );
}
