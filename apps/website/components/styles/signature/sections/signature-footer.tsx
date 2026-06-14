import type { HomeContent } from "@/lib/types";
import { Section, Container, Text, ButtonLink, Divider } from "../ui";

export function SignatureFooter({
  footer,
  resumeUrl,
  footerNote
}: {
  footer: HomeContent["footer"];
  resumeUrl: string;
  footerNote: string;
}) {
  return (
    <Section bg="dark" pad="lg" id="contact">
      <Container>
        <div className="flex flex-col items-center gap-8 text-center">
          <Text variant="display" className="max-w-prose">
            Got something <span className="text-accent">complex</span> to design?
          </Text>
          <Text variant="lead" className="max-w-prose">
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
        </div>

        <Divider className="my-12" />

        <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
          <Text variant="caption" as="span">
            {footerNote}
          </Text>
          <Text variant="caption" as="span">
            {footer.location}
          </Text>
        </div>
      </Container>
    </Section>
  );
}
