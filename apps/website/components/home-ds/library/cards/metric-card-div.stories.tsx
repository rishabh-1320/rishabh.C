import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { MetricCardDiv } from "./metric-card-div";

const meta = {
  title: "home-ds/library/cards/MetricCardDiv",
  component: MetricCardDiv,
  argTypes: {
    variant: { control: "select", options: ["default", "divider"] }
  }
} satisfies Meta<typeof MetricCardDiv>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { value: "5", label: "Products shipped", variant: "default", animate: false }
};

export const Divider: Story = {
  args: { value: "100k+", label: "Users reached", variant: "divider", animate: false }
};

export const StatsRow: Story = {
  render: () => (
    <div className="grid grid-cols-4">
      <MetricCardDiv value="5" label="Products shipped" variant="divider" animate={false} />
      <MetricCardDiv value="5" label="Industry domains" variant="divider" animate={false} />
      <MetricCardDiv value="100k+" label="Users reached" variant="divider" animate={false} />
      <MetricCardDiv value="3 yrs" label="Designing B2B" variant="divider" animate={false} />
    </div>
  )
};
