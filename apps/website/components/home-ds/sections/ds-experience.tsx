import type { HomeContent } from "@/lib/types";
import { Section, Container, Text, Eyebrow, IconBadge, TextLink } from "@packages/ds-ui";

// Token-based tints for the company tiles (orange / blue / green in the PDF).
const TILE_TINT = [
  "bg-ds-tag-peach-bg text-ds-tag-peach-fg",
  "bg-ds-tag-sky-bg text-ds-tag-sky-fg",
  "bg-ds-tag-mint-bg text-ds-tag-mint-fg"
];

export function DsExperience({ about }: { about: HomeContent["about"] }) {
  return (
    <Section bg="page" pad="md" id="experience">
      <Container>
        <div className="mb-10 flex items-end justify-between gap-4">
          <div className="flex flex-col gap-3">
            <Eyebrow dot>Experience</Eyebrow>
            <Text variant="h2">Where I&apos;ve been building</Text>
            <Text variant="body-sm" className="text-ds-ink-muted">
              Products worked on: Premelis · Quixera · Chestnut
            </Text>
          </div>
          <TextLink href="#journey">View all →</TextLink>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {about.experiences.map((exp, i) => (
            <div key={exp.company} className="flex flex-col gap-4">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <IconBadge className={TILE_TINT[i % TILE_TINT.length]}>
                    {exp.company.charAt(0)}
                  </IconBadge>
                  <Text variant="h3" as="span">
                    {exp.company}
                  </Text>
                </div>
                <Text variant="caption" as="span" className="whitespace-nowrap">
                  {exp.period}
                </Text>
              </div>
              <Text variant="body-sm">
                {exp.description ?? exp.projects?.map((p) => p.name).join(" · ") ?? ""}
              </Text>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
