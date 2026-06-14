import Link from "next/link";
import type { WorkCard } from "@/lib/types";
import { Section, Container, Stack, Text, Eyebrow, Card, Tag } from "../ui";
import type { TagColor } from "../ui";
import { workImages, fallbackImage } from "../images";

const TAG_CYCLE: TagColor[] = ["blue", "amber", "purple", "green"];

export function Vs3Work({ heading, works }: { heading: string; works: WorkCard[] }) {
  const featured = works.filter((w) => w.active);

  return (
    <Section bg="page" pad="lg" id="work">
      <Container>
        <Stack gap="lg" className="mb-12 max-w-vs3-prose">
          <Eyebrow>Selected work</Eyebrow>
          <Text variant="h1">{heading}</Text>
        </Stack>

        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((work, i) => {
            const body = (
              <Card surface="raised" pad="none" radius="rounded-vs3-2xl" hover className="h-full overflow-hidden">
                <div className="aspect-[16/10] w-full overflow-hidden bg-vs3-surface-sunken">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={workImages[work.id] ?? fallbackImage}
                    alt={work.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[var(--vs3-dur-slow)] ease-[var(--vs3-ease-out-expo)] group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-col gap-4 p-6">
                  <div className="flex flex-wrap gap-2">
                    {work.tags.slice(0, 3).map((t, ti) => (
                      <Tag key={t} color={TAG_CYCLE[(i + ti) % TAG_CYCLE.length]}>
                        {t}
                      </Tag>
                    ))}
                  </div>
                  <Text variant="h2" as="h3">
                    {work.title}
                  </Text>
                  <Text variant="body-sm">{work.description}</Text>
                  <div className="mt-2 flex items-center justify-between">
                    <Text variant="caption" as="span" className="font-vs3-mono">
                      {work.company || "Personal"} · {work.year || "—"}
                    </Text>
                    <Text variant="caption" as="span" className="font-vs3-mono text-vs3-accent">
                      {work.ctaLabel} →
                    </Text>
                  </div>
                </div>
              </Card>
            );
            return work.href ? (
              <Link key={work.id} href={work.href} className="group block">
                {body}
              </Link>
            ) : (
              <div key={work.id} className="group block">
                {body}
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
