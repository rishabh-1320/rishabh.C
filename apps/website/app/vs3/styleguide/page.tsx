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
  StatCallout,
  LogoWall
} from "@/components/styles/vs3/ui";

export const metadata = {
  title: "vs3 — Styleguide",
  robots: { index: false, follow: false }
};

const COLOR_TOKENS: Array<[string, string]> = [
  ["--vs3-color-surface-page", "surface / page"],
  ["--vs3-color-surface-sunken", "surface / sunken"],
  ["--vs3-color-surface-tint", "surface / tint"],
  ["--vs3-color-surface-ink", "surface / ink"],
  ["--vs3-color-ink", "ink"],
  ["--vs3-color-accent", "accent"],
  ["--vs3-color-viz-blue", "viz / blue"],
  ["--vs3-color-viz-amber", "viz / amber"],
  ["--vs3-color-viz-purple", "viz / purple"],
  ["--vs3-color-viz-green", "viz / green"],
  ["--vs3-color-viz-pink", "viz / pink"]
];

const TYPE_VARIANTS = [
  "display",
  "h1",
  "h2",
  "h3",
  "lead",
  "body",
  "body-sm",
  "caption",
  "eyebrow",
  "stat"
] as const;

const RADII: Array<[string, string]> = [
  ["rounded-vs3-sm", "sm"],
  ["rounded-vs3-md", "md"],
  ["rounded-vs3-lg", "lg"],
  ["rounded-vs3-xl", "xl"],
  ["rounded-vs3-2xl", "2xl"],
  ["rounded-vs3-pill", "pill"]
];

function Swatch({ token, label }: { token: string; label: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="h-16 w-full rounded-vs3-md border border-vs3-border" style={{ background: `var(${token})` }} />
      <Text variant="caption" as="span">
        {label}
      </Text>
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Stack gap="lg">
      <div className="flex flex-col gap-2">
        <Eyebrow>{title}</Eyebrow>
        <Divider />
      </div>
      {children}
    </Stack>
  );
}

export default function Vs3StyleguidePage() {
  return (
    <div className="vs3-root bg-vs3-surface-page" data-hide-site-header data-hide-status-bar>
      <Section bg="page" pad="md" className="pt-16">
        <Container>
          <Stack gap="sm">
            <Text variant="display">vs3 — Styleguide</Text>
            <Text variant="lead" className="max-w-vs3-prose">
              Every token and primitive on one page. Isolated `--vs3-*` namespace;
              nothing shared with the rest of the app. If this is consistent, the
              site is consistent.
            </Text>
            <div className="pt-2">
              <TextLink href="/vs3">← Back to the homepage</TextLink>
            </div>
          </Stack>
        </Container>
      </Section>

      <Section bg="page" pad="md">
        <Container>
          <Stack gap="xl">
            <Block title="Color tokens">
              <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-5">
                {COLOR_TOKENS.map(([token, label]) => (
                  <Swatch key={token} token={token} label={label} />
                ))}
              </div>
            </Block>

            <Block title="Tags">
              <div className="flex flex-wrap gap-3">
                <Tag color="accent">Accent</Tag>
                <Tag color="blue">Blue</Tag>
                <Tag color="amber">Amber</Tag>
                <Tag color="purple">Purple</Tag>
                <Tag color="green">Green</Tag>
                <Tag color="outline">Outline</Tag>
              </div>
            </Block>

            <Block title="Type scale (locked presets)">
              <div className="flex flex-col gap-5">
                {TYPE_VARIANTS.map((v) => (
                  <div key={v} className="flex flex-col gap-1 border-b border-vs3-border pb-5">
                    <Text variant="caption" as="span" className="font-vs3-mono">
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
            </Block>

            <Block title="Stat callouts">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                <StatCallout value="+19%" label="velocity" />
                <StatCallout value="60 days" label="to value" />
                <StatCallout value="2,000,000+" label="events" />
                <StatCallout value="20,000+" label="engineers" />
              </div>
            </Block>

            <Block title="Cards">
              <div className="grid gap-5 md:grid-cols-4">
                {(["raised", "tint", "sunken", "outline"] as const).map((s) => (
                  <Card key={s} surface={s} pad="md" radius="rounded-vs3-xl">
                    <Text variant="h3">{s}</Text>
                    <Text variant="body-sm">surface=&quot;{s}&quot;</Text>
                  </Card>
                ))}
              </div>
            </Block>

            <Block title="Rows">
              <Card surface="raised" pad="md" radius="rounded-vs3-xl">
                {[0, 1, 2].map((i) => (
                  <Row
                    key={i}
                    first={i === 0}
                    lead={
                      <>
                        <IconBadge>{String.fromCharCode(65 + i)}</IconBadge>
                        <Text variant="h3" as="span">
                          List row {i + 1}
                        </Text>
                      </>
                    }
                    trail={
                      <Text variant="caption" as="span" className="font-vs3-mono">
                        meta
                      </Text>
                    }
                  />
                ))}
              </Card>
            </Block>

            <Block title="Radius scale">
              <div className="flex flex-wrap gap-6">
                {RADII.map(([cls, label]) => (
                  <div key={cls} className="flex flex-col items-center gap-2">
                    <div className={`h-16 w-16 border border-vs3-border bg-vs3-accent-soft ${cls}`} />
                    <Text variant="caption" as="span">
                      {label}
                    </Text>
                  </div>
                ))}
              </div>
            </Block>

            <Block title="Logo wall">
              <LogoWall names={["Chestnut", "Cricmac", "Omny", "Signal", "Timelabs"]} />
            </Block>
          </Stack>
        </Container>
      </Section>
    </div>
  );
}
