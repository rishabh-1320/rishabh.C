import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Tag } from "./tag";

const meta = {
  title: "ds-ui/Tag",
  component: Tag,
  argTypes: {
    color: { control: "select", options: ["lilac", "peach", "mint", "sky", "outline"] }
  }
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Lilac: Story = { args: { children: "Design System", color: "lilac" } };
export const Peach: Story = { args: { children: "Enterprise", color: "peach" } };
export const Mint: Story = { args: { children: "Live", color: "mint" } };
export const Sky: Story = { args: { children: "Dashboard", color: "sky" } };
export const Outline: Story = { args: { children: "Archived", color: "outline" } };

export const AllColors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag color="lilac">Design System</Tag>
      <Tag color="peach">Enterprise</Tag>
      <Tag color="mint">Live</Tag>
      <Tag color="sky">Dashboard</Tag>
      <Tag color="outline">Archived</Tag>
    </div>
  )
};
