import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Gallery } from "./gallery";

const meta = {
  title: "ds-ui/Gallery",
  component: Gallery
} satisfies Meta<typeof Gallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    images: [
      { src: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80&auto=format&fit=crop", alt: "Workspace" },
      { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format&fit=crop", alt: "Sketching" },
      { src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80&auto=format&fit=crop", alt: "Desk setup" }
    ]
  }
};
