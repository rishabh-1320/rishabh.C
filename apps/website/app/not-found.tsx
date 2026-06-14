import { ButtonLink, Container, Section, Text } from "@packages/ds-ui";

export default function NotFound() {
  return (
    <div className="ds-root">
      <Section>
        <Container className="text-center">
          <Text variant="eyebrow" as="p">404</Text>
          <Text variant="h1" as="h1" className="mt-3">Page not found</Text>
          <Text variant="lead" as="p" className="mt-3">This route is not configured yet.</Text>
          <div className="mt-8 flex justify-center">
            <ButtonLink href="/">Back Home</ButtonLink>
          </div>
        </Container>
      </Section>
    </div>
  );
}
