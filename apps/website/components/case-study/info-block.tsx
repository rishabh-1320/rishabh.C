import { Text } from "@packages/ds-ui";

export function InfoBlock({ title, value }: { title: string; value: string }) {
  return (
    <div>
      <Text variant="eyebrow" as="p">
        {title}
      </Text>
      <p className="mt-2 font-ds-sans text-ds-body leading-relaxed text-ds-ink">{value}</p>
    </div>
  );
}
