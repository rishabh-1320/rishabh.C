import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { homeContent } from "@/lib/site-content";
import { Marquee } from "./marquee";
import { AiToolTile } from "../library/ai-tools/ai-tool-tile";

const meta = {
  title: "home-ds/site-components/Marquee",
  component: Marquee
} satisfies Meta<typeof Marquee>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Marquee>
      {homeContent.aiWorkflow.tools.map((tool) => (tool.icon ? <AiToolTile key={tool.name} name={tool.name} icon={tool.icon} /> : null))}
    </Marquee>
  )
};
