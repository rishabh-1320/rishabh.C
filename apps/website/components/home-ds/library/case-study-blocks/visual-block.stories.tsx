import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { VisualBlock } from "./visual-block";

const meta = {
  title: "home-ds/library/case-study-blocks/VisualBlock",
  component: VisualBlock,
  decorators: [
    // The Figma symbol is 837px wide; the component takes its width from the
    // parent, so the story supplies it.
    (Story) => (
      <div style={{ width: 837 }}>
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof VisualBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Figma default: placeholder media + badge row + caption. */
export const Default: Story = {
  args: {
    badges: ["Title", "Title", "Title"],
    caption: "Lorem ipsum the caption of the image will come here"
  }
};

/** Figma `visualOnly={false}` — the media well alone, as instanced in side-text. */
export const VisualOnly: Story = { args: {} };

export const CaptionWithoutBadges: Story = {
  args: { caption: "The audit spreadsheet: 41 button variants across four products." }
};

export const WithRealMedia: Story = {
  args: {
    caption: "A real child fills the well; the 837:471 ratio is preserved.",
    children: <div className="size-full bg-ds-mockup-bg" />
  }
};
