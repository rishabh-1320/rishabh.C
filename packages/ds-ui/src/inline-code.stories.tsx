import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { InlineCode } from "./inline-code";
import { Text } from "./text";

const meta = {
  title: "ds-ui/InlineCode",
  component: InlineCode
} satisfies Meta<typeof InlineCode>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "npm run dev:website" }
};

export const InProse: Story = {
  render: () => (
    <Text variant="body">
      Run <InlineCode>npm run dev:website</InlineCode> from the repo root to start the dev server.
    </Text>
  )
};
