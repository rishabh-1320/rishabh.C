import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { DotConnect } from "./dot-connect";

const meta = {
  title: "home-ds/library/blocks/DotConnect",
  component: DotConnect
} satisfies Meta<typeof DotConnect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Corners: Story = {
  render: () => (
    <div className="relative h-24 w-64 border border-ds-hairline">
      <DotConnect side="left" />
      <DotConnect side="right" />
    </div>
  )
};

export const OnInk: Story = {
  render: () => (
    <div className="relative h-24 w-64 border border-ds-hairline-dark bg-ds-surface-ink">
      <DotConnect side="left" dark />
      <DotConnect side="right" dark />
    </div>
  )
};
