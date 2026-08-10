import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { StripePanel } from "./stripe-panel";

const meta = {
  title: "home-ds/site-components/StripePanel",
  component: StripePanel
} satisfies Meta<typeof StripePanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    background: "linear-gradient(to bottom, var(--ds-color-surface-page), var(--ds-color-hero-blue))",
    children: <div className="flex h-64 items-center justify-center text-ds-ink">Content over the pinstripe wash</div>
  }
};
