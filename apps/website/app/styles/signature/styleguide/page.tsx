import {
  Section,
  Container,
  Stack,
  Text,
  Button,
  Tag,
  Card,
  Row,
  Divider,
  Eyebrow,
  TextLink,
  IconBadge,
  PhotoCard
} from "@/components/styles/signature/ui";

export const metadata = {
  title: "Signature — Styleguide"
};

const COLOR_TOKENS = [
  ["--surface-base", "Surface / base"],
  ["--surface-soft", "Surface / soft"],
  ["--surface-muted", "Surface / muted"],
  ["--surface-raised", "Surface / raised"],
  ["--surface-cream", "Surface / cream"],
  ["--surface-dark", "Surface / dark"],
  ["--text-primary", "Text / primary"],
  ["--text-secondary", "Text / secondary"],
  ["--text-muted", "Text / muted"],
  ["--accent", "Accent"],
  ["--accent-hover", "Accent / hover"],
  ["--accent-soft", "Accent / soft"]
];

const TAG_TOKENS = [
  ["--tag-lilac-bg", "Tag lilac"],
  ["--tag-peach-bg", "Tag peach"],
  ["--tag-mint-bg", "Tag mint"],
  ["--tag-sky-bg", "Tag sky"]
];

const TYPE_VARIANTS = [
  "display",
  "h1",
  "h2",
  "h3",
  "h4",
  "lead",
  "body",
  "body-sm",
  "caption",
  "eyebrow",
  "script"
] as const;

const RADII = [
  ["rounded-sm", "8"],
  ["rounded-md", "12"],
  ["rounded-lg", "20"],
  ["rounded-xl", "32"],
  ["rounded-2xl", "44"],
  ["rounded-pill", "999"]
];

const SPACING = [
  ["1", "4"],
  ["2", "8"],
  ["3", "12"],
  ["4", "16"],
  ["6", "24"],
  ["8", "32"],
  ["12", "48"],
  ["16", "64"],
  ["24", "96"]
];

function Swatch({ token, label }: { token: string; label: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="h-16 w-full rounded-lg border border-[color:var(--border-default)]"
        style={{ background: `var(${token})` }}
      />
      <Text variant="caption" as="span">
        {label}
      </Text>
      <Text variant="caption" as="span" className="text-[color:var(--text-muted)]">
        {token}
      </Text>
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Stack gap="lg">
      <div className="flex flex-col gap-2">
        <Eyebrow dot>{title}</Eyebrow>
        <Divider />
      </div>
      {children}
    </Stack>
  );
}

export default function StyleguidePage() {
  return (
    <div className="theme-signature" data-hide-site-header data-hide-status-bar>
      <Section bg="page" pad="md" className="pt-16">
        <Container>
          <Stack gap="xs">
            <Text variant="display">Signature — Styleguide</Text>
            <Text variant="lead" className="max-w-prose">
              The complete token + primitive vocabulary on one page. Every section
              of the site is built from exactly these pieces. If something here
              looks consistent, the site looks consistent — that is the whole point.
            </Text>
            <div className="pt-2">
              <TextLink href="/styles/signature">← Back to the homepage</TextLink>
            </div>
          </Stack>
        </Container>
      </Section>

      <Section bg="page" pad="md">
        <Container>
          <Stack gap="xl">
            <Block title="Color tokens">
              <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-6">
                {COLOR_TOKENS.map(([token, label]) => (
                  <Swatch key={token} token={token} label={label} />
                ))}
              </div>
            </Block>

            <Block title="Tag colors">
              <div className="flex flex-wrap gap-3">
                <Tag color="lilac">Lilac</Tag>
                <Tag color="peach">Peach</Tag>
                <Tag color="mint">Mint</Tag>
                <Tag color="sky">Sky</Tag>
                <Tag color="outline">Outline</Tag>
              </div>
              <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
                {TAG_TOKENS.map(([token, label]) => (
                  <Swatch key={token} token={token} label={label} />
                ))}
              </div>
            </Block>

            <Block title="Type scale (locked presets)">
              <div className="flex flex-col gap-5">
                {TYPE_VARIANTS.map((v) => (
                  <div
                    key={v}
                    className="flex flex-col gap-1 border-b border-[color:var(--border-default)] pb-5"
                  >
                    <Text variant="caption" as="span" className="text-[color:var(--text-muted)]">
                      variant=&quot;{v}&quot;
                    </Text>
                    <Text variant={v}>The quick brown fox — 0123</Text>
                  </div>
                ))}
              </div>
            </Block>

            <Block title="Buttons">
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
            </Block>

            <Block title="Cards">
              <div className="grid gap-5 md:grid-cols-4">
                {(["raised", "cream", "sunken", "outline"] as const).map((s) => (
                  <Card key={s} surface={s} pad="md" radius="rounded-xl">
                    <Text variant="h4">{s}</Text>
                    <Text variant="body-sm">surface=&quot;{s}&quot;</Text>
                  </Card>
                ))}
              </div>
            </Block>

            <Block title="Rows">
              <Card surface="raised" pad="md" radius="rounded-xl">
                {[0, 1, 2].map((i) => (
                  <Row
                    key={i}
                    first={i === 0}
                    lead={
                      <>
                        <IconBadge>{String.fromCharCode(65 + i)}</IconBadge>
                        <Text variant="h4" as="span">
                          List row {i + 1}
                        </Text>
                      </>
                    }
                    trail={
                      <Text variant="caption" as="span">
                        meta
                      </Text>
                    }
                  />
                ))}
              </Card>
            </Block>

            <Block title="Radius scale">
              <div className="flex flex-wrap gap-6">
                {RADII.map(([cls, px]) => (
                  <div key={cls} className="flex flex-col items-center gap-2">
                    <div
                      className={`h-16 w-16 bg-accent-soft border border-[color:var(--border-default)] ${cls}`}
                    />
                    <Text variant="caption" as="span">
                      {px}
                    </Text>
                  </div>
                ))}
              </div>
            </Block>

            <Block title="Spacing scale (Tailwind 4-based)">
              <div className="flex flex-col gap-2">
                {SPACING.map(([step, px]) => (
                  <div key={step} className="flex items-center gap-4">
                    <Text variant="caption" as="span" className="w-16">
                      {px}px
                    </Text>
                    <div className="h-4 bg-accent" style={{ width: `${px}px` }} />
                  </div>
                ))}
              </div>
            </Block>

            <Block title="PhotoCard">
              <PhotoCard
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=480&h=600&fit=crop&q=80"
                alt="Sample"
                caption="Drag me"
                draggable={false}
              />
            </Block>
          </Stack>
        </Container>
      </Section>
    </div>
  );
}
