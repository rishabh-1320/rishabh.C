import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Text, type TextVariant } from "./text";

const VARIANTS: TextVariant[] = [
  "display",
  "h1",
  "h2",
  "h3",
  "lead",
  "body",
  "body-sm",
  "caption",
  "eyebrow",
  "script",
  "display-script",
  "stat",
  "hp-eyebrow",
  "hp-eyebrow-loose",
  "hp-title",
  "hp-headline",
  "hp-card-title",
  "hp-body",
  "hp-year",
  "hp-bio",
  "hp-meta",
  "hp-caption",
  "hp-subtitle",
  "hp-lede",
  "hp-label",
  "hp-section-title",
  "hp-card-title-lg",
  "hp-card-title-sm",
  "hp-metric",
  "hp-brand",
  "hp-heading",
  "hp-prose"
];

const meta = {
  title: "ds-ui/Text",
  component: Text,
  argTypes: {
    variant: { control: "select", options: VARIANTS }
  }
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: { variant: "body", children: "The quick brown fox jumps over the lazy dog." }
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      {VARIANTS.map((v) => (
        <div key={v} className="flex items-baseline gap-4 border-b border-ds-hairline pb-4">
          <span className="w-40 shrink-0 font-mono text-[11px] text-ds-ink-muted">{v}</span>
          <Text variant={v}>The quick brown fox jumps over the lazy dog.</Text>
        </div>
      ))}
    </div>
  )
};
