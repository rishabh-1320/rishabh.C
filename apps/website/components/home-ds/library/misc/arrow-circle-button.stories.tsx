import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ArrowCircleButton } from "./arrow-circle-button";

const meta = {
  title: "home-ds/library/misc/ArrowCircleButton",
  component: ArrowCircleButton
} satisfies Meta<typeof ArrowCircleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
