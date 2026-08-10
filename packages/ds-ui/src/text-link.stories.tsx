import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TextLink } from "./misc";

const meta = {
  title: "ds-ui/TextLink",
  component: TextLink
} satisfies Meta<typeof TextLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "View case study", href: "#" }
};
