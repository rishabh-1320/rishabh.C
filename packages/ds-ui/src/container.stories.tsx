import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Container } from "./layout";

const meta = {
  title: "ds-ui/layout/Container",
  component: Container,
  argTypes: {
    width: { control: "select", options: ["content", "prose", "hp", "hp-wide"] }
  }
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

const Content = () => <div className="bg-ds-surface-sunken p-4 text-ds-ink">Container content, width-constrained</div>;

export const ContentWidth: Story = { args: { width: "content", children: <Content /> } };
export const ProseWidth: Story = { args: { width: "prose", children: <Content /> } };
export const HpWidth: Story = { args: { width: "hp", children: <Content /> } };
