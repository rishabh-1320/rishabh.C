import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { MinimalBadge } from "./minimal-badge";

const meta = {
  title: "home-ds/library/misc/MinimalBadge",
  component: MinimalBadge,
  argTypes: {
    tone: { control: "select", options: ["bare", "outline", "filled"] }
  }
} satisfies Meta<typeof MinimalBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Bare: Story = { args: { children: "Design System", tone: "bare" } };
export const Outline: Story = { args: { children: "Primelis", tone: "outline" } };
export const Filled: Story = { args: { children: "Current", tone: "filled" } };
