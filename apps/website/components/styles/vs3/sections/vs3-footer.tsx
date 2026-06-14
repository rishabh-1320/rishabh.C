import type { HomeContent } from "@/lib/types";
import { Section, Container, Stack, Text, ButtonLink, Divider } from "../ui";
import { GraphVisual } from "../webgl/graph-visual";

export function Vs3Footer({
  footer,
  resumeUrl,
  footerNote
}: {
  footer: HomeContent["footer"];
  resumeUrl: string;
  footerNote: string;
}) {
  return (
    <Section bg="ink" pad="lg" id="contact" className="relative overflow-hidden">
      {/* Footer WebGL visual, faded behind the CTA */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <GraphVisual frame="fill" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-vs3-surface-ink-veil" />

      <Container className="relative">
        <Stack gap="lg" className="items-center text-center">
          <Text variant="display" className="max-w-[18ch]">
            The design partner for the <span className="text-vs3-accent">AI era</span> of B2B.
          </Text>
          <Text variant="lead" className="max-w-vs3-prose">
            {footer.closingLine}
          </Text>
          <div className="flex flex-wrap justify-center gap-3">
            <ButtonLink href={`mailto:${footer.email}`} variant="primary" size="lg">
              {footer.email}
            </ButtonLink>
            <ButtonLink href={footer.linkedinUrl} variant="secondary" size="lg">
              LinkedIn ↗
            </ButtonLink>
            <ButtonLink href={resumeUrl} variant="secondary" size="lg">
              Résumé ↗
            </ButtonLink>
          </div>
        </Stack>

        <Divider className="my-12" />

        <div className="relative flex flex-col items-center justify-between gap-3 md:flex-row">
          <Text variant="caption" as="span" className="font-vs3-mono">
            {footerNote}
          </Text>
          <Text variant="caption" as="span" className="font-vs3-mono">
            {footer.location}
          </Text>
        </div>
      </Container>
    </Section>
  );
}
