import { Text, cn } from "@packages/ds-ui";

/**
 * Figma "text-container" — a centered title + optional supporting line.
 * Note the supporting line is sentence-case in Figma (unlike title-container's
 * uppercase eyebrow/support pair), hence `normal-case` overriding hp-label's
 * default uppercase.
 */
export function TextContainer({ title, supporting, className }: { title: string; supporting?: string; className?: string }) {
  return (
    <div className={cn("flex flex-col items-center justify-center gap-4 text-center", className)}>
      <Text variant="hp-card-title" as="p">
        {title}
      </Text>
      {supporting && (
        <Text variant="hp-label" as="p" className="normal-case">
          {supporting}
        </Text>
      )}
    </div>
  );
}
