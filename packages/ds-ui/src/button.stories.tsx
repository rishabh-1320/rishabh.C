import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button, ButtonLink } from "./button";

const meta = {
  title: "ds-ui/Button",
  component: Button,
  argTypes: {
    variant: { control: "select", options: ["primary", "secondary", "ghost"] },
    size: { control: "select", options: ["sm", "md", "lg"] }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: "Get in touch", variant: "primary", size: "md" }
};

export const Secondary: Story = {
  args: { children: "View case study", variant: "secondary", size: "md" }
};

export const Ghost: Story = {
  args: { children: "Cancel", variant: "ghost", size: "md" }
};

export const Small: Story = {
  args: { children: "Small", variant: "primary", size: "sm" }
};

export const Large: Story = {
  args: { children: "Large", variant: "primary", size: "lg" }
};

export const AsLink: StoryObj<typeof ButtonLink> = {
  render: (args) => <ButtonLink {...args} />,
  args: { children: "Resume", variant: "primary", size: "md", href: "#" }
};
