import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { HRule } from "./h-rule";

const meta = {
  title: "home-ds/site-components/HRule",
  component: HRule
} satisfies Meta<typeof HRule>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-96">
      <HRule />
    </div>
  )
};

export const WithDots: Story = {
  render: () => (
    <div className="w-96">
      <HRule dots />
    </div>
  )
};

export const DarkWithDots: Story = {
  render: () => (
    <div className="w-96 bg-ds-surface-ink p-4">
      <HRule dark dots />
    </div>
  )
};
