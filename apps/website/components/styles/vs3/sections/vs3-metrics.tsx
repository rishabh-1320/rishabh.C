import type { HeroContent } from "@/lib/types";
import { Section, Container, Stack, Text, Eyebrow, StatCallout } from "../ui";

/**
 * Metrics — workweave's big light stat callouts. Derives values from the
 * hero metrics where they read as numbers; otherwise renders them as labels.
 */
const DERIVED = [
  { value: "5", label: "SaaS products shipped" },
  { value: "5", label: "regulated domains" },
  { value: "30%", label: "fewer UX inconsistencies" },
  { value: "100,000+", label: "daily users reached" }
];

export function Vs3Metrics({ metrics }: { metrics: HeroContent["metrics"] }) {
  return (
    <Section bg="page" pad="lg" id="metrics">
      <Container>
        <Stack gap="lg" className="mb-12 max-w-vs3-prose">
          <Eyebrow>Impact</Eyebrow>
          <Text variant="h1">Outcomes, not just artifacts.</Text>
        </Stack>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {DERIVED.map((m) => (
            <StatCallout key={m.label} value={m.value} label={m.label} />
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
          {metrics.map((m) => (
            <Text key={m} variant="caption" as="span" className="font-vs3-mono">
              · {m}
            </Text>
          ))}
        </div>
      </Container>
    </Section>
  );
}
