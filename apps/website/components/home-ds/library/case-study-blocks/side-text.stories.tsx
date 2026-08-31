import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SideText } from "./side-text";

const meta = {
  title: "home-ds/library/case-study-blocks/SideText",
  component: SideText,
  decorators: [
    (Story) => (
      <div style={{ width: 426 }}>
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof SideText>;

export default meta;
type Story = StoryObj<typeof meta>;

const BODY =
  "Reflecting on the journey, here are the most impactful lessons from building a unified design system across multiple products.";

/** Figma default (node 573:8042) — all four parts. */
export const Default: Story = {
  args: { eyebrow: "Key Learnings", title: "What We Learned", showVisual: true, body: BODY }
};

// The five other combinations the assembled template (573:8093) instances.

export const EyebrowAndTitle: Story = {
  args: { eyebrow: "Key Learnings", title: "What We Learned" }
};

export const TitleOnly: Story = { args: { title: "What We Learned" } };

export const TitleAndBody: Story = { args: { title: "What We Learned", body: BODY } };

export const TitleVisualBody: Story = {
  args: { title: "What We Learned", showVisual: true, body: BODY }
};

export const EyebrowAndBody: Story = { args: { eyebrow: "Key Learnings", body: BODY } };

export const WithMedia: Story = {
  args: { ...Default.args, visual: <div className="size-full bg-ds-mockup-bg" /> }
};
