import type { IdeologyPrinciple } from "@/lib/types";
import { Section, Container, Stack, Text, Eyebrow } from "../ui";
import { GraphVisual } from "../webgl/graph-visual";

export function Vs3Capability({
  heading,
  principles
}: {
  heading: string;
  principles: IdeologyPrinciple[];
}) {
  return (
    <Section bg="page" pad="lg" id="capability">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <Stack gap="lg">
            <Eyebrow>{heading}</Eyebrow>
            <Text variant="h1">
              Every decision mapped to the system it{" "}
              <span className="text-vs3-accent">ships into</span>.
            </Text>
            <Stack gap="md" as="ul">
              {principles.map((p) => (
                <li key={p.id} className="flex gap-4 border-t border-vs3-border pt-4">
                  <Text variant="eyebrow" as="span" className="pt-1 text-vs3-accent">
                    {p.id}
                  </Text>
                  <div className="flex flex-col gap-1">
                    <Text variant="h3" as="span">
                      {p.title}
                    </Text>
                    <Text variant="body-sm" as="span">
                      {p.description}
                    </Text>
                  </div>
                </li>
              ))}
            </Stack>
          </Stack>

          <GraphVisual frame="panel" />
        </div>
      </Container>
    </Section>
  );
}
