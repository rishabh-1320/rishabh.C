import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { homeContent } from "@/lib/site-content";
import { AiToolTile } from "./ai-tool-tile";

const meta = {
  title: "home-ds/library/ai-tools/AiToolTile",
  component: AiToolTile
} satisfies Meta<typeof AiToolTile>;

export default meta;
type Story = StoryObj<typeof meta>;

const tool = homeContent.aiWorkflow.tools[0];

export const Default: Story = {
  args: { name: tool.name, icon: tool.icon! }
};

export const Row: Story = {
  render: () => (
    <div className="flex gap-6 pt-12">
      {homeContent.aiWorkflow.tools.map((t) => (t.icon ? <AiToolTile key={t.name} name={t.name} icon={t.icon} /> : null))}
    </div>
  )
};
