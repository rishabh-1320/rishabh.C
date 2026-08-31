import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { VisualPair } from "./visual-pair";

const meta = {
  title: "home-ds/library/case-study-blocks/VisualPair",
  component: VisualPair,
  parameters: { layout: "fullscreen" }
} satisfies Meta<typeof VisualPair>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Figma default (node 578:21799) — both wells as placeholders, captions on. */
export const Default: Story = {
  args: {
    leftCaption: "Lorem ipsum the caption of the image will come here",
    rightCaption: "Lorem ipsum the caption of the image will come here"
  }
};

export const NoCaptions: Story = { args: {} };

export const WithMedia: Story = {
  args: {
    left: <div className="size-full bg-ds-mockup-bg" />,
    right: <div className="size-full bg-ds-surface-mist" />,
    leftCaption: "Before",
    rightCaption: "After"
  }
};
