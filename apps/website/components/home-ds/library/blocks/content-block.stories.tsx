import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ContentBlock } from "./content-block";

const meta = {
  title: "home-ds/library/blocks/ContentBlock",
  component: ContentBlock,
  argTypes: {
    padTop: { control: "select", options: ["content", "title", "both", "none"] },
    padBottom: { control: "select", options: ["content", "both", "none"] }
  }
} satisfies Meta<typeof ContentBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

const Placeholder = () => (
  <div className="flex h-24 items-center justify-center rounded-ds-card bg-ds-surface-sunken text-ds-hp-muted">
    content
  </div>
);

export const Default: Story = {
  args: { padTop: "content", padBottom: "content", bottomBorder: true, padX: true, children: <Placeholder /> }
};

export const TitleSpacing: Story = {
  args: { padTop: "title", padBottom: "content", bottomBorder: true, padX: true, children: <Placeholder /> }
};

export const NoBottomBorder: Story = {
  args: { padTop: "content", padBottom: "content", bottomBorder: false, padX: true, children: <Placeholder /> }
};

export const NoHorizontalPadding: Story = {
  args: { padTop: "content", padBottom: "content", bottomBorder: true, padX: false, children: <Placeholder /> }
};
