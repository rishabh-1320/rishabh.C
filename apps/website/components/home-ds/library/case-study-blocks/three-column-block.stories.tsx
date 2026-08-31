import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ThreeColumnBlock } from "./three-column-block";
import { TextContainerCase } from "../texts/text-container-case";

const meta = {
  title: "home-ds/library/case-study-blocks/ThreeColumnBlock",
  component: ThreeColumnBlock,
  parameters: { layout: "fullscreen" }
} satisfies Meta<typeof ThreeColumnBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

const Body = () => (
  <TextContainerCase type="Prose">
    The reading column. Capped at 900px so line length stays readable on wide viewports,
    with the two 350px margins holding side content.
  </TextContainerCase>
);

const Note = ({ children }: { children: string }) => (
  <TextContainerCase type="Caption">{children}</TextContainerCase>
);

/** Figma `3 column=Yes` (node 422:7134) — the default reading layout. */
export const ThreeColumn: Story = {
  args: {
    children: <Body />,
    right: <Note>A marginal note in the right column.</Note>
  }
};

/**
 * Both margins empty. Per CASE_STUDY_TEMPLATE.md this stays 3-column rather
 * than collapsing to a full-width slot — matching the real Figma instances.
 */
export const ThreeColumnEmptyMargins: Story = { args: { children: <Body /> } };

/** Figma `3 column=No` (node 422:7136) — reserved for full-bleed visuals. */
export const FullWidth: Story = {
  args: {
    columns: false,
    children: <div className="h-[200px] w-full bg-ds-mockup-bg" />
  }
};
