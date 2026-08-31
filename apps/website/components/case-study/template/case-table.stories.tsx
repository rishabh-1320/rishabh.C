import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CaseTable } from "./case-table";

const meta = {
  title: "case-study/template/CaseTable",
  component: CaseTable,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 900 }}>
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof CaseTable>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Alternatives against a verdict — the "concepts considered" shape. */
export const AlternativesConsidered: Story = {
  args: {
    headers: ["Concept", "What it did", "What I decided"],
    rows: [
      [
        "Dual sidebar",
        "Same-dimension sidebar swaps between portfolio and workspace mode",
        "Liked it, but flagged it as risky — entry depended entirely on a fallible pipeline."
      ],
      [
        "Tab / icon switcher",
        "Brand Portfolio as a tab; switching resolves to a dropdown",
        "Rejected — on switch the first workspace defaulted to All Accounts."
      ],
      [
        "Logo + disabled entry points",
        "Modules disabled until a workspace is chosen; logo returns home",
        "Built from this one and refined it into the final spec."
      ]
    ]
  }
};

/**
 * A criteria matrix — note the empty leading header, which is normal for this
 * shape and renders as a blank corner cell rather than an empty Eyebrow.
 */
export const CriteriaMatrix: Story = {
  args: {
    headers: ["", "Distinct styling", "Muted styling", "Structural placement"],
    rows: [
      ["Reduces accidental clicks", "Partial", "Partial", "Yes"],
      ["Keeps it fully available", "Yes", "Yes", "Yes"],
      ["Survives a “don't decorate, prevent” retest", "No", "No", "Yes"]
    ]
  }
};

export const WithTitle: Story = {
  args: { ...CriteriaMatrix.args, title: "Three approaches, one criterion" }
};
