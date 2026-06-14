import { Card, Text } from "@packages/ds-ui";

export function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <Card surface="raised" pad="md">
      <Text variant="h2" as="p">
        {value}
      </Text>
      <Text variant="caption" as="p" className="mt-2">
        {label}
      </Text>
    </Card>
  );
}
