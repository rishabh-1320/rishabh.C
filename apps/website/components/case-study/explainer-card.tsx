import { Text } from "@packages/ds-ui";

/**
 * A small aside card for the reading grid's right column — a definition, a
 * stat, a short note paired with whatever chapter it sits beside. Light
 * bordered card (not the dark PullQuote treatment; that's for emphasis
 * inline with the text, this is a quieter marginal note). Not sticky/pinned:
 * it's a normal grid cell, so it scrolls in the document flow together with
 * its paired content, never detaching from it.
 */
export function ExplainerCard({ label, text }: { label?: string; text: string }) {
  return (
    <div className="flex flex-col gap-2 rounded-ds-card border border-ds-hairline bg-ds-surface-paper p-5">
      {label && (
        <Text variant="hp-label" className="!text-ds-accent">
          {label}
        </Text>
      )}
      <Text variant="hp-body" className="!text-ds-body-muted">
        {text}
      </Text>
    </div>
  );
}
