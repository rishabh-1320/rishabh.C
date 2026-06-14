import type { AIExplorationCard } from "@/lib/types";
import { Section, Container, Text, Eyebrow, Card, Tag } from "../ui";
import type { TagColor } from "../ui";

const STATUS_COLOR: Record<AIExplorationCard["status"], TagColor> = {
  Live: "mint",
  Prototype: "lilac",
  Archived: "outline"
};

export function SignatureExplorations({
  heading,
  intro,
  explorations
}: {
  heading: string;
  intro: string;
  explorations: AIExplorationCard[];
}) {
  return (
    <Section bg="page" pad="lg">
      <Container>
        <div className="mb-12 flex flex-col gap-3">
          <Eyebrow dot>On the side</Eyebrow>
          <Text variant="h2">{heading}</Text>
          <Text variant="lead" className="max-w-prose">
            {intro}
          </Text>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {explorations.map((exp) => (
            <Card
              key={exp.id}
              surface="raised"
              pad="md"
              radius="rounded-2xl"
              hover
              className="flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <Tag color={STATUS_COLOR[exp.status]}>{exp.status}</Tag>
                <Text variant="caption" as="span">
                  {exp.year}
                </Text>
              </div>
              <Text variant="h4">{exp.title}</Text>
              <Text variant="body-sm" className="flex-1">
                {exp.description}
              </Text>
              <Text variant="caption" as="span">
                Built with {exp.builtWith.join(", ")}
              </Text>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
