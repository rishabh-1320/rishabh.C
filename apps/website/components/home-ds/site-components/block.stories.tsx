import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Block } from "./block";

const meta = {
  title: "home-ds/site-components/Block (legacy)",
  component: Block,
  argTypes: {
    width: { control: "select", options: ["hp", "wide"] },
    border: { control: "select", options: ["x", "none"] },
    pad: { control: "select", options: ["open-top", "open-bottom", "both", "joint", "none"] },
    padX: { control: "select", options: ["gutter", "wide", "none"] }
  }
} satisfies Meta<typeof Block>;

export default meta;
type Story = StoryObj<typeof meta>;

const Content = () => <div className="bg-ds-surface-sunken p-4 text-ds-ink">Block content</div>;

export const Default: Story = {
  args: { width: "hp", border: "x", pad: "both", padX: "gutter", children: <Content /> }
};

export const NoBorder: Story = {
  args: { ...Default.args, border: "none" }
};

export const OpenTop: Story = {
  args: { ...Default.args, pad: "open-top" }
};
