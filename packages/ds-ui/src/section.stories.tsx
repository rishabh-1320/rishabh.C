import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Section } from "./layout";

const meta = {
  title: "ds-ui/layout/Section",
  component: Section,
  argTypes: {
    bg: { control: "select", options: ["page", "sunken", "cream", "ink", "paper"] },
    pad: { control: "select", options: ["none", "md", "lg"] }
  }
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

const Content = () => <div className="text-ds-ink">Section content</div>;

export const Page: Story = { args: { bg: "page", pad: "lg", children: <Content /> } };
export const Sunken: Story = { args: { bg: "sunken", pad: "lg", children: <Content /> } };
export const Cream: Story = { args: { bg: "cream", pad: "lg", children: <Content /> } };
export const Ink: Story = { args: { bg: "ink", pad: "lg", children: <Content /> } };
export const Paper: Story = { args: { bg: "paper", pad: "lg", children: <Content /> } };
