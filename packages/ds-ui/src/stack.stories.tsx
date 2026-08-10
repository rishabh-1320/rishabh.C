import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Stack } from "./layout";

const meta = {
  title: "ds-ui/layout/Stack",
  component: Stack,
  argTypes: {
    gap: { control: "select", options: ["xs", "sm", "md", "lg", "xl"] }
  }
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

const Item = ({ n }: { n: number }) => <div className="rounded-ds-md bg-ds-surface-sunken p-3 text-ds-ink">Item {n}</div>;

export const Default: Story = {
  args: { gap: "md", children: [<Item key={1} n={1} />, <Item key={2} n={2} />, <Item key={3} n={3} />] }
};

export const Loose: Story = {
  args: { gap: "xl", children: [<Item key={1} n={1} />, <Item key={2} n={2} />] }
};
