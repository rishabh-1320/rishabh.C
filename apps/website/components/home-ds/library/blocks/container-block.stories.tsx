import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ContainerBlock } from "./container-block";

const meta = {
  title: "home-ds/library/blocks/ContainerBlock",
  component: ContainerBlock
} satisfies Meta<typeof ContainerBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

const Placeholder = () => (
  <div className="flex h-24 items-center justify-center bg-ds-surface-sunken text-ds-hp-muted">content</div>
);

export const Default: Story = {
  args: { borderLines: false, children: <Placeholder /> }
};

export const WithBorderLines: Story = {
  args: { borderLines: true, children: <Placeholder /> }
};
