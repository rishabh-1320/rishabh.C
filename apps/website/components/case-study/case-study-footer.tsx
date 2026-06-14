import Link from "next/link";
import { ButtonLink, Container, Divider, Section, Text } from "@packages/ds-ui";
import { homeContent } from "@/lib/site-content";

export function CaseStudyFooter() {
  const { footer, footerNote } = homeContent;

  return (
    <Section bg="ink" pad="lg">
      <Container width="prose">
        <div className="flex flex-col items-center gap-16 text-center">
          <div className="flex flex-col items-center gap-6">
            <Text variant="h2" as="h2">
              {footer.closingLine}
            </Text>
            <ButtonLink href={`mailto:${footer.email}`}>Send an email</ButtonLink>
          </div>

          <div className="flex w-full flex-col items-center justify-between gap-6 md:flex-row md:items-start md:text-left">
            <div className="flex flex-col items-center gap-2 md:items-start">
              <Link
                href={`mailto:${footer.email}`}
                className="font-ds-sans text-ds-body-sm text-ds-ink-soft transition-colors hover:text-ds-ink"
              >
                {footer.email}
              </Link>
              <Link
                href={footer.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="font-ds-sans text-ds-body-sm text-ds-ink-soft transition-colors hover:text-ds-ink"
              >
                LinkedIn
              </Link>
              <span className="font-ds-sans text-ds-body-sm text-ds-ink-muted">{footer.location}</span>
            </div>
          </div>

          <Divider className="w-full" />

          <span className="font-ds-sans text-ds-body-sm text-ds-ink-muted">{footerNote}</span>
        </div>
      </Container>
    </Section>
  );
}
