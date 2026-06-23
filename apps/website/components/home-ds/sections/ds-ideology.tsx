import type { IdeologyPrinciple } from "@/lib/types";
import { Section, Container, Text, Eyebrow, Card } from "@packages/ds-ui";

type Surface = "cream" | "outline";

function PrincipleCard({
  p,
  surface,
  className
}: {
  p: IdeologyPrinciple;
  surface: Surface;
  className?: string;
}) {
  return (
    <Card surface={surface} pad="lg" radius="rounded-ds-2xl" className={`flex flex-col gap-3 ${className ?? ""}`}>
      <Text variant="display" as="span" className="text-ds-accent text-ds-h2">
        {p.id}
      </Text>
      <Text variant="h3">{p.title}</Text>
      <Text variant="body-sm">{p.description}</Text>
    </Card>
  );
}

export function DsIdeology({
  heading,
  principles
}: {
  heading: string;
  principles: IdeologyPrinciple[];
}) {
  // PDF surface pattern: 01 & 04 filled (cream), 02 & 03 outline.
  const surfaceFor = (i: number): Surface => (i === 0 || i === 3 ? "cream" : "outline");
  const [top, bottom] = [principles.slice(0, 2), principles.slice(2)];

  return (
    <Section bg="page" pad="lg" id="ideology">
      <Container>
        <Eyebrow dot className="mb-10">Process &amp; Principles</Eyebrow>

        {/* Mobile / tablet — stacked flow */}
        <div className="md:hidden">
          <div className="grid gap-5 sm:grid-cols-2">
            {top.map((p, i) => (
              <PrincipleCard key={p.id} p={p} surface={surfaceFor(i)} />
            ))}
          </div>
          <div className="py-12 text-center">
            <Text variant="display">{heading}</Text>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {bottom.map((p, i) => (
              <PrincipleCard key={p.id} p={p} surface={surfaceFor(i + 2)} />
            ))}
          </div>
        </div>

        {/* Desktop — radial composition: center ring + 4 corner cards */}
        <div className="relative mx-auto hidden min-h-[42rem] max-w-[64rem] md:block">
          {/* center ring */}
          <div className="absolute left-1/2 top-1/2 grid h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-ds-pill border border-ds-border-strong text-center">
            <Text variant="display">{heading}</Text>
          </div>

          {/* 01 top-left */}
          <PrincipleCard
            p={principles[0]}
            surface={surfaceFor(0)}
            className="absolute left-0 top-0 w-[20rem]"
          />
          {/* 02 top-right */}
          <PrincipleCard
            p={principles[1]}
            surface={surfaceFor(1)}
            className="absolute right-0 top-0 w-[20rem]"
          />
          {/* 03 bottom-right */}
          <PrincipleCard
            p={principles[2]}
            surface={surfaceFor(2)}
            className="absolute bottom-0 right-0 w-[20rem]"
          />
          {/* 04 bottom-left */}
          <PrincipleCard
            p={principles[3]}
            surface={surfaceFor(3)}
            className="absolute bottom-0 left-0 w-[20rem]"
          />
        </div>
      </Container>
    </Section>
  );
}
