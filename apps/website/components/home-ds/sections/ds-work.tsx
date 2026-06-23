import Link from "next/link";
import type { WorkCard } from "@/lib/types";
import { Section, Container, Text, Eyebrow, Card, Tag } from "@packages/ds-ui";
import type { TagColor } from "@packages/ds-ui";
import { workImages, fallbackImage } from "../images";

const TAG_CYCLE: TagColor[] = ["lilac", "peach", "mint", "sky"];

function WorkTags({ work, offset }: { work: WorkCard; offset: number }) {
  return (
    <div className="flex flex-wrap gap-2">
      {work.tags.slice(0, 3).map((t, ti) => (
        <Tag key={t} color={TAG_CYCLE[(offset + ti) % TAG_CYCLE.length]}>
          {t}
        </Tag>
      ))}
    </div>
  );
}

function WorkMeta({ work }: { work: WorkCard }) {
  return (
    <div className="mt-2 flex items-center justify-between">
      <Text variant="caption" as="span">
        {work.company || "Personal"} · {work.year || "—"}
      </Text>
      <Text variant="caption" as="span" className="text-ds-accent">
        {work.ctaLabel} →
      </Text>
    </div>
  );
}

function WorkImage({ work, className }: { work: WorkCard; className?: string }) {
  return (
    <div className={`w-full overflow-hidden bg-ds-surface-sunken ${className ?? ""}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={workImages[work.id] ?? fallbackImage}
        alt={work.title}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-[var(--ds-dur-slow)] ease-[var(--ds-ease-out-expo)] group-hover:scale-[1.03]"
      />
    </div>
  );
}

function linkWrap(work: WorkCard, children: React.ReactNode) {
  return work.href ? (
    <Link key={work.id} href={work.href} className="group block">
      {children}
    </Link>
  ) : (
    <div key={work.id} className="group block">
      {children}
    </div>
  );
}

export function DsWork({ heading, works }: { heading: string; works: WorkCard[] }) {
  const featured = works.filter((w) => w.active);
  const [hero, ...rest] = featured;

  return (
    <Section bg="sunken" pad="lg" id="work">
      <Container>
        <div className="mb-12 flex flex-col gap-3">
          <Eyebrow dot>Selected work</Eyebrow>
          <Text variant="h2">{heading}</Text>
        </div>

        {hero &&
          linkWrap(
            hero,
            <Card
              surface="raised"
              pad="none"
              radius="rounded-ds-2xl"
              hover
              className="mb-6 grid h-full overflow-hidden md:grid-cols-2"
            >
              <WorkImage work={hero} className="aspect-[16/10] md:aspect-auto md:h-full" />
              <div className="flex flex-col justify-center gap-4 p-6 md:p-8">
                <WorkTags work={hero} offset={0} />
                <Text variant="h3">{hero.title}</Text>
                <Text variant="body-sm">{hero.description}</Text>
                <WorkMeta work={hero} />
              </div>
            </Card>
          )}

        <div className="grid gap-6 md:grid-cols-2">
          {rest.map((work, i) =>
            linkWrap(
              work,
              <Card surface="raised" pad="none" radius="rounded-ds-2xl" hover className="h-full overflow-hidden">
                <WorkImage work={work} className="aspect-[16/10]" />
                <div className="flex flex-col gap-4 p-6">
                  <WorkTags work={work} offset={i + 1} />
                  <Text variant="h3">{work.title}</Text>
                  <Text variant="body-sm">{work.description}</Text>
                  <WorkMeta work={work} />
                </div>
              </Card>
            )
          )}
        </div>
      </Container>
    </Section>
  );
}
