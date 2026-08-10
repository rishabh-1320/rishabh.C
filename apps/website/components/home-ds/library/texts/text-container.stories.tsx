import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TextContainer } from "./text-container";

const meta = {
  title: "home-ds/library/texts/TextContainer",
  component: TextContainer
} satisfies Meta<typeof TextContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "AI accelerates. Designers decide.",
    supporting: "Use AI for layouts and momentum. The direction still has to come from a human who gives a damn."
  }
};

export const TitleOnly: Story = {
  args: { title: "Testimonials" }
};
