import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TextContainerCase } from "./text-container-case";

const meta = {
  title: "home-ds/library/texts/TextContainerCase",
  component: TextContainerCase
} satisfies Meta<typeof TextContainerCase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Title: Story = { args: { type: "Title", children: "Text goes here" } };
export const H1: Story = { args: { type: "H1", children: "Text goes here" } };
export const H2: Story = { args: { type: "H2", children: "Text goes here" } };
export const H3: Story = { args: { type: "H3", children: "Text goes here" } };
export const H4: Story = { args: { type: "H4", children: "Text goes here" } };
export const Subtitle: Story = { args: { type: "Subtitle", children: "Text goes here" } };
export const Body: Story = { args: { type: "Body", children: "Text goes here" } };
export const BodySmall: Story = { args: { type: "Body Small", children: "Text goes here" } };
export const Caption: Story = { args: { type: "Caption", children: "Text goes here" } };
export const Quote: Story = { args: { type: "Quote", children: "Text goes here" } };
