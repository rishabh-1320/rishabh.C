import type { CaseStudyData } from "./case-study-types";

/**
 * Arksaber (whitelabel design system) — restructured from the real,
 * previously-published narrative into the new Figma template's chapter
 * shape. The old copy used inline `<InlineCode>` spans for token names
 * (e.g. `button/primary/fill/resting`) mid-paragraph; the new chapter
 * schema's paragraphs are plain strings (matching every other case study —
 * none of them use rich inline formatting either), so token names appear
 * as plain text here. No values were changed, only the styling is gone.
 * No content was invented: this is a proof of concept with no adoption
 * metrics (the original copy says so directly), so `stats` is omitted.
 */
export const arksaberCaseStudy: CaseStudyData = {
  metadataTitle: "Arksaber — Whitelabel Design System | Rishabh Choudhary",
  metadataDescription:
    "A whitelabel design system built end to end — designed in Figma, shipped as React and Tailwind components, themeable across brands.",

  hero: {
    tags: ["Design System", "Code", "Personal project"],
    title: "Arksaber — a whitelabel design system, built from Figma to code",
    accent: "whitelabel design system",
    subtitle:
      "Arksaber is a whitelabel design system I built end to end — designed in Figma, then built as real React and Tailwind components, themeable across brands. Most design systems stop at Figma and hand off a spec. This one ships as code. Same components, same token names — swap the values, and the whole system re-skins for a new brand. I built the code with AI, working from my own tokens and designs. It's a proof of concept: two brands, the core component set, running in Storybook."
  },

  chapters: [
    {
      id: "why",
      heading: { eyebrow: "Motivation", title: "Why I built it" },
      paragraphs: [
        "I kept hitting the same gap. Design systems live in Figma. Products live in code. And the space between them is where consistency quietly dies — values get re-typed, states get missed, the build drifts from the design.",
        "So I set a constraint: don't call it done at handoff. Call it done when it runs.",
        "Arksaber was my way to prove I could own the whole loop — design the system, define the tokens, and build the actual components — and keep the two in lockstep. Whitelabel made it harder on purpose: if the architecture is right, one system should dress up as many brands without touching a single component."
      ]
    },
    {
      id: "tokens",
      heading: { eyebrow: "Architecture", title: "The architecture: tokens that name themselves" },
      paragraphs: [
        "The system rests on tokens, and the naming is doing the heavy lifting.",
        "Every token reads as component / variant / property / state. So button/primary/fill/resting is the fill color of a primary button at rest. button/secondary/content/disabled is the text color of a disabled secondary button. You can read a token and know exactly where it lives.",
        "It's not just color. Spacing and type are tokenized too — spacing/button/gap (8px), size/label-md (14px), family/label-md (Inter). Nothing in a component is a magic number; everything points back to a named decision.",
        "Why this matters: this is the layer that makes whitelabel work. The component never hard-codes a color. It asks for a token. So re-skinning a brand isn't a redesign — it's a new set of values behind the same names."
      ],
      checklist: {
        title: "A few real ones:",
        items: [
          "button/primary/fill/resting → #3b82f6",
          "button/primary/fill/hover → #2563eb",
          "button/secondary/content/resting → #2563eb",
          "button/secondary/outline/resting → #e5e5e5"
        ]
      }
    },
    {
      id: "whitelabel",
      heading: { eyebrow: "Architecture", title: "The whitelabel engine" },
      paragraphs: [
        "Two brands, one system.",
        "Because every component pulls from tokens, theming a second brand means changing the token values — not the components. The button doesn't know what brand it's in. It just knows it needs button/primary/fill/resting, whatever that resolves to.",
        "That's the whole trick, and it's why the naming had to be disciplined first. Get the token layer right, and theming becomes a config change instead of a rebuild."
      ]
    },
    {
      id: "components",
      heading: { eyebrow: "Execution", title: "Component anatomy: every state, on purpose" },
      paragraphs: [
        "I designed components as full state machines, not happy-path snapshots.",
        "The Button covers two classes — primary and secondary — across resting, hover, active, and focus, plus a disabled treatment for each. The Input Field is more demanding: five states (resting, focus, hover, active, error), each in filled and empty, plus disabled — twelve variants in all. There's a Hint component for default, error, and success messages, an icon set, and a Modal with its own header and footer.",
        "Atoms, molecules, organisms — buttons and inputs up through composed pieces like the modal."
      ]
    },
    {
      id: "figma-to-code",
      heading: { eyebrow: "Execution", title: "Figma to code: closing the loop" },
      paragraphs: [
        "Here's the part most systems skip.",
        "The Figma components weren't a spec to interpret later — they were the source the code was built from. The variant structure carried straight across.",
        "One-to-one. The way I structured the component in Figma is the way you call it in React. No translation drift."
      ],
      checklist: {
        title: "The variant structure carried straight across:",
        items: [
          "In Figma, the Button has three axes — Class (primary/secondary), State (resting/hover/active/focus), and Disable.",
          "In code, those became the React props — propClass, state, disable — plus icon, iconLeft, iconRight, and text."
        ]
      }
    },
    {
      id: "ai-workflow",
      heading: { eyebrow: "Process", title: "How I worked with AI" },
      paragraphs: [
        "AI built the codebase. I directed it.",
        "I fed it two things: my token definitions as JSON, and the Figma designs themselves through Figma's MCP. From there, AI generated the CSS tokens and wrote the React components to match the designs — variant by variant, state by state.",
        "My job wasn't typing the code. It was the architecture and the judgment: naming the tokens so they'd theme cleanly, defining the variant model, and checking the output against the design until it matched. AI moved fast; I decided what \"correct\" meant.",
        "This is the workflow I keep coming back to — AI to accelerate the build, me to own the system it's building."
      ]
    },
    {
      id: "outcome",
      heading: { eyebrow: "Outcome", title: "Where it landed" },
      paragraphs: [
        "Arksaber runs in Storybook today — the core components, themeable across two brands, as real code.",
        "It's a proof of concept, and I'll call it that honestly: it's not an enterprise system with adoption metrics. What it proves is the thing I set out to prove — that I can own the full loop from token to component to code, keep design and build in parity, and architect for whitelabel from the ground up.",
        "The next steps are obvious: more components, a hosted Storybook, and docs. But the spine — the token architecture and the design-to-code parity — is already standing."
      ]
    }
  ]
};
