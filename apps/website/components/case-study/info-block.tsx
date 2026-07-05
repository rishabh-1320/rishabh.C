import { Text } from "@packages/ds-ui";

export function InfoBlock({ title, value }: { title: string; value: string }) {
  return (
    <div>
      <Text variant="hp-meta" as="p" className="uppercase tracking-wide">
        {title}
      </Text>
      <Text variant="hp-body" as="p" className="mt-2 text-ds-heading">
        {value}
      </Text>
    </div>
  );
}
