import type { HomeContent } from "@/lib/types";
import { Section, Container, Text, Eyebrow, Card, Row, IconBadge } from "../ui";

export function SignatureAiWorkflow({ aiWorkflow }: { aiWorkflow: HomeContent["aiWorkflow"] }) {
  return (
    <Section bg="dark" pad="lg" id="ai">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:gap-16">
          <div className="flex flex-col gap-5">
            <Eyebrow dot>Workflow</Eyebrow>
            <Text variant="h2">{aiWorkflow.heading}</Text>
            <Text variant="lead">{aiWorkflow.intro}</Text>
            <Card surface="outline" pad="md" radius="rounded-xl" className="mt-2">
              <Text variant="body-sm">{aiWorkflow.closingLine}</Text>
            </Card>
          </div>

          <div className="flex flex-col">
            {aiWorkflow.tools.map((tool, i) => (
              <Row
                key={tool.name}
                first={i === 0}
                lead={
                  <>
                    <IconBadge>{tool.name.charAt(0)}</IconBadge>
                    <div className="flex min-w-0 flex-col">
                      <Text variant="h4" as="span">
                        {tool.name}
                      </Text>
                      <Text variant="body-sm" as="span">
                        {tool.description}
                      </Text>
                    </div>
                  </>
                }
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
