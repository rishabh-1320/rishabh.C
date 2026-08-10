import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { RailScrollRow } from "./rail-scroll-row";

const meta = {
  title: "home-ds/site-components/RailScrollRow",
  component: RailScrollRow
} satisfies Meta<typeof RailScrollRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <RailScrollRow className="gap-6">
      {[1, 2, 3, 4].map((n) => (
        <div key={n} className="h-40 w-64 shrink-0 rounded-ds-card bg-ds-surface-sunken p-4 text-ds-ink">
          Card {n}
        </div>
      ))}
    </RailScrollRow>
  )
};
