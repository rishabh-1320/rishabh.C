import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { EndOfArticleMarker } from "./end-of-article-marker";

const meta = {
  title: "home-ds/library/case-study-blocks/EndOfArticleMarker",
  component: EndOfArticleMarker,
  parameters: { layout: "fullscreen" }
} satisfies Meta<typeof EndOfArticleMarker>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Figma node 573:9329 — circle, triangle, square in canvas/muted. */
export const Default: Story = {};
