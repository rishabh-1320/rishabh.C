import type { HomeContent } from "@/lib/types";
import { Section, Container, Stack, Text, Eyebrow, Card, IconBadge } from "../ui";

const DOT = ["bg-vs3-viz-blue", "bg-vs3-viz-amber", "bg-vs3-viz-purple", "bg-vs3-viz-green", "bg-vs3-viz-pink"];

export function Vs3Workflow({ aiWorkflow }: { aiWorkflow: HomeContent["aiWorkflow"] }) {
  return (
    <Section bg="sunken" pad="lg" id="workflow">
      <Container>
        <Stack gap="lg" className="mb-12 max-w-vs3-prose">
          <Eyebrow>Workflow</Eyebrow>
          <Text variant="h1">{aiWorkflow.heading}, unified under one graph.</Text>
          <Text variant="lead">{aiWorkflow.intro}</Text>
        </Stack>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {aiWorkflow.tools.map((tool, i) => (
            <Card key={tool.name} surface="raised" pad="md" radius="rounded-vs3-lg" hover className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <IconBadge>{tool.name.charAt(0)}</IconBadge>
                <span className={`h-2 w-2 rounded-vs3-pill ${DOT[i % DOT.length]}`} aria-hidden="true" />
              </div>
              <Text variant="h3">{tool.name}</Text>
              <Text variant="body-sm">{tool.description}</Text>
            </Card>
          ))}
        </div>

        <Card surface="outline" pad="md" radius="rounded-vs3-lg" className="mt-6">
          <Text variant="body-sm" className="font-vs3-mono">
            {aiWorkflow.closingLine}
          </Text>
        </Card>
      </Container>
    </Section>
  );
}
