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
} from "@packages/ds-ui";
import { heroPhoto } from "@/components/home-ds/images";

export const metadata = {
  title: "ds — Styleguide",
  robots: { index: false, follow: false }
};

const COLOR_TOKENS: Array<[string, string]> = [
  ["--ds-color-surface-page", "surface / page"],
  ["--ds-color-surface-raised", "surface / raised"],
  ["--ds-color-surface-sunken", "surface / sunken"],
  ["--ds-color-surface-cream", "surface / cream"],
  ["--ds-color-surface-ink", "surface / ink"],
  ["--ds-color-ink", "ink"],
  ["--ds-color-ink-soft", "ink / soft"],
  ["--ds-color-ink-muted", "ink / muted"],
  ["--ds-color-accent", "accent"],
  ["--ds-color-accent-hover", "accent / hover"],
  ["--ds-color-accent-soft", "accent / soft"],
  ["--ds-color-tag-lilac-bg", "tag / lilac"],
  ["--ds-color-tag-peach-bg", "tag / peach"],
  ["--ds-color-tag-mint-bg", "tag / mint"],
  ["--ds-color-tag-sky-bg", "tag / sky"]
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
  "script"
] as const;

const RADII: Array<[string, string]> = [
  ["rounded-ds-sm", "sm"],
  ["rounded-ds-md", "md"],
  ["rounded-ds-lg", "lg"],
  ["rounded-ds-xl", "xl"],
  ["rounded-ds-2xl", "2xl"],
  ["rounded-ds-pill", "pill"]
];

function Swatch({ token, label }: { token: string; label: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="h-16 w-full rounded-ds-md border border-ds-border"
        style={{ background: `var(${token})` }}
      />
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
        <Eyebrow dot>{title}</Eyebrow>
        <Divider />
      </div>
      {children}
    </Stack>
  );
}

export default function StyleguidePage() {
  return (
    <div className="ds-root bg-ds-surface-page" data-hide-site-header data-hide-status-bar>
      <Section bg="page" pad="md" className="pt-16">
        <Container>
          <Stack gap="sm">
            <Text variant="display">ds — Styleguide</Text>
            <Text variant="lead" className="max-w-ds-prose">
              Every token and primitive on one page. The homepage is built only
              from these pieces, so if this looks consistent, the site is
              consistent. Isolated `--ds-*` namespace; nothing shared with the
              rest of the app.
            </Text>
            <div className="pt-2">
              <TextLink href="/ds">← Back to the homepage</TextLink>
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
                <Tag color="lilac">Lilac</Tag>
                <Tag color="peach">Peach</Tag>
                <Tag color="mint">Mint</Tag>
                <Tag color="sky">Sky</Tag>
                <Tag color="outline">Outline</Tag>
              </div>
            </Block>

            <Block title="Type scale (locked presets)">
              <div className="flex flex-col gap-5">
                {TYPE_VARIANTS.map((v) => (
                  <div key={v} className="flex flex-col gap-1 border-b border-ds-border pb-5">
                    <Text variant="caption" as="span">
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
                  <Card key={s} surface={s} pad="md" radius="rounded-ds-xl">
                    <Text variant="h3">{s}</Text>
                    <Text variant="body-sm">surface=&quot;{s}&quot;</Text>
                  </Card>
                ))}
              </div>
            </Block>

            <Block title="Rows">
              <Card surface="raised" pad="md" radius="rounded-ds-xl">
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
                {RADII.map(([cls, label]) => (
                  <div key={cls} className="flex flex-col items-center gap-2">
                    <div className={`h-16 w-16 border border-ds-border bg-ds-accent-soft ${cls}`} />
                    <Text variant="caption" as="span">
                      {label}
                    </Text>
                  </div>
                ))}
              </div>
            </Block>

            <Block title="PhotoCard">
              <PhotoCard src={heroPhoto} alt="Sample" caption="Drag me" draggable={false} />
            </Block>
          </Stack>
        </Container>
      </Section>
    </div>
  );
}
