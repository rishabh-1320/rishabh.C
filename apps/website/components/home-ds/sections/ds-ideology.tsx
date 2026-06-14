import type { IdeologyPrinciple } from "@/lib/types";
import { Section, Container, Text, Eyebrow, Card } from "@packages/ds-ui";

export function DsIdeology({
  heading,
  principles
}: {
  heading: string;
  principles: IdeologyPrinciple[];
}) {
  return (
    <Section bg="page" pad="lg" id="ideology">
      <Container>
        <div className="mb-12 flex flex-col gap-3">
          <Eyebrow dot>How I think</Eyebrow>
          <Text variant="h2" className="max-w-ds-prose">
            {heading}
          </Text>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {principles.map((p, i) => (
            <Card
              key={p.id}
              surface={i % 3 === 0 ? "cream" : "outline"}
              pad="lg"
              radius="rounded-ds-2xl"
              className="flex flex-col gap-4"
            >
              <Text variant="display" as="span" className="text-ds-accent">
                {p.id}
              </Text>
              <Text variant="h3">{p.title}</Text>
              <Text variant="body">{p.description}</Text>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
