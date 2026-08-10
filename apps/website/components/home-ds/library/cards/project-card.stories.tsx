import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ProjectCard } from "./project-card";
import { explorationImages } from "../../images";

const meta = {
  title: "home-ds/library/cards/ProjectCard",
  component: ProjectCard
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    image: explorationImages["ai-audit-tool"],
    alt: "AI Audit Tool",
    tags: ["AI", "Enterprise"],
    title: "AI Audit Tool",
    description: "A working internal tool that surfaces anomalies in dense compliance datasets.",
    href: "#"
  }
};

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-6">
      <ProjectCard
        image={explorationImages["ai-audit-tool"]}
        alt="AI Audit Tool"
        tags={["AI", "Enterprise"]}
        title="AI Audit Tool"
        description="A working internal tool that surfaces anomalies in dense compliance datasets."
        href="#"
      />
      <ProjectCard
        image={explorationImages["ai-shopping"]}
        alt="AI Shopping Assistant"
        tags={["AI", "Voice"]}
        title="AI Shopping Assistant"
        description="A speech-to-speech assistant that turns vague shopping intent into a clean checkout."
        href="#"
      />
      <ProjectCard
        image={explorationImages["whitelabel-starter"]}
        alt="Whitelabel Component Starter"
        tags={["Design System", "UI Kit"]}
        title="Whitelabel Component Starter"
        description="A starter kit of 40+ themable components."
        href="#"
      />
    </div>
  )
};
