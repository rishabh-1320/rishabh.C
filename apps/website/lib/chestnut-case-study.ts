import type { CaseStudyData } from "./case-study-types";

/**
 * Chestnut — populated from the real, previously-published narrative
 * (audited, factual), restructured into the new Figma template's chapter
 * shape. No content was invented to fill template slots: chapters the real
 * story doesn't support (e.g. a standalone "Soul" reflection) are simply
 * omitted rather than padded with placeholder copy.
 */
export const chestnutCaseStudy: CaseStudyData = {
  metadataTitle: "Standardizing Chestnut — Insurance SaaS Design System | Rishabh Choudhary",
  metadataDescription:
    "How I audited an entire insurance SaaS product, rebuilt its UX into one standardized system, shipped the design system in code, and designed a complex in-context variable creation feature.",

  hero: {
    tags: ["Product Design", "Design System", "2025–2026"],
    title: "Standardizing Chestnut, from inconsistent UX to a design system in code",
    accent: "design system in code",
    subtitle:
      "Chestnut is a producer performance management platform for the insurance world. I audited the entire product, catalogued every inconsistency, and rebuilt it into one standardized system — then shipped that system in code instead of Figma files."
  },

  stats: [
    { value: "30–40%", label: "fewer UX inconsistencies across the product" },
    { value: "20–25%", label: "less design-to-dev rework" }
  ],

  chapters: [
    {
      id: "what-chestnut-is",
      heading: { eyebrow: "Context", title: "First, what Chestnut actually is" },
      sideCards: [
        { label: "Carrier", text: "The insurance company itself — the one underwriting the policy." },
        { label: "IMO", text: "Independent Marketing Organization — a middleman between the carrier and the producers who sell policies." },
        { label: "Producer", text: "The agent who actually sells the policy to a real customer." }
      ],
      paragraphs: [
        "Insurance gets sold through middlemen. An insurance company rarely sells a policy directly to you. They sell through carriers, agencies, and IMOs.",
        "Those middlemen hire producers (agents) who sell the policies to real customers.",
        "Chestnut is the software those middlemen use to manage their producers — tracking compliance, payouts, and performance. Day-to-day, it's used by admins and managers, not the agents themselves.",
        "The terminology — carriers, producers, IMOs — is the language the clients use. I had to learn it to design for it."
      ]
    },
    {
      id: "problem",
      heading: { eyebrow: "Audit", title: "The problem: a product at war with itself" },
      pullQuote: {
        label: "Insight",
        quote: "That inconsistency is what made it hard to use. Every screen quietly asked the user to relearn it."
      },
      paragraphs: [
        "Chestnut wasn't broken. It wasn't outdated. It was inconsistent. You could feel it just using the thing. Nothing was technically wrong, but nothing agreed with anything else.",
        "That inconsistency is what made it hard to use. Every screen quietly asked the user to relearn it."
      ],
      checklist: {
        title: "What I found:",
        items: [
          "The same button showed up in five different styles",
          "Tables were designed a dozen different ways",
          "The same action — applying a filter, setting a condition — behaved differently depending on where you were"
        ]
      }
    },
    {
      id: "audit",
      heading: { eyebrow: "Process", title: "The audit: cataloguing the chaos" },
      pullQuote: { label: "Insight", quote: "You can't fix inconsistency you haven't measured." },
      paragraphs: [
        "You can't fix inconsistency you haven't measured. So I went through the entire product and documented every variation of every element — every button and every version of the \"same\" button, every table and table header, every navigation pattern.",
        "Then interactions: how many different ways did the product let you do the same thing — apply a filter, set a condition? More than there should've been. I recorded all of them.",
        "By the end, the mess wasn't a feeling anymore. It was a documented list — every component and every pattern, in one place."
      ]
    },
    {
      id: "unified-system",
      heading: { eyebrow: "Execution", title: "The goal and the system" },
      paragraphs: [
        "With every inconsistency catalogued, the job got clear: collapse all those variations into one standardized set of components and patterns — and make them better than the originals. Not \"pick one of the five buttons.\" Design the right button, the right table, the right filter pattern — once.",
        "I rebuilt the core components from the ground up — buttons, tables, headers, and their states — plus the interaction patterns that tied them together. One source of truth for how Chestnut should look and behave."
      ]
    },
    {
      id: "shipping-in-code",
      heading: { eyebrow: "Execution", title: "Shipping the system in code" },
      sideCards: [
        { label: "Bonsai", text: "Chestnut's own design system — built on Chestnut's existing shadcn-based front-end, shipped in code instead of Figma files." }
      ],
      paragraphs: [
        "Here's where I changed how I work. Normally a designer hands off Figma files and hopes the build matches. I didn't want that gap. So instead of delivering the system in Figma, I built it in code.",
        "This is where AI earns its place in my workflow. Prototyping and shipping in code used to be slow — in Figma you place every frame, component, and pixel by hand. With AI, I prompt and the agent builds. It's faster, and more importantly, it closes the gap between what I design and what ships. The design system stopped being a picture of components. It became the components.",
        "What that looked like:"
      ],
      steps: [
        { title: "Set up a Storybook", description: "To visualize every component in isolation." },
        { title: "Built out a proper component library", description: "A real, reusable set — not a one-off screen at a time." },
        {
          title: "Started from Chestnut's shadcn-based front-end",
          description: "A head start, but the components weren't complete or built the way we needed."
        },
        { title: "Modified them into Chestnut's own design system: Bonsai", description: "Once Bonsai existed, I started delivering my designs in code instead of Figma." }
      ]
    },
    {
      id: "setup",
      heading: { eyebrow: "Part 02", title: "The setup" },
      sideCards: [
        { label: "Payment logic", text: "The formula that determines what a producer gets paid, assembled from variables like premium, agent code, and persistency rate." }
      ],
      paragraphs: [
        "Remember what Chestnut does: it works out what insurance producers get paid.",
        "Admins build that math as payment logic — a formula assembled from variables. A variable might be a policy field, a producer attribute, or a calculated value that combines several of them. Premium, agent code, policy year, a persistency rate — these are the building blocks of a payout.",
        "So configuring payment logic is one of the highest-stakes things you can do in the product. Get it wrong and a producer gets paid the wrong amount — real money, at scale. The people doing it are admins who know the platform, the variables, and the insurance industry cold."
      ]
    },
    {
      id: "dead-end",
      heading: { eyebrow: "Part 02", title: "The dead end" },
      pullQuote: { label: "The tension", quote: "Easy entry, but a rigorous flow. That was the line to walk." },
      paragraphs: [
        "Here's the moment that broke the flow. You're deep in building a payment logic. You reach for a variable — and it doesn't exist yet. Maybe it's a brand-new attribute. Maybe it's a value that combines several others.",
        "In the old world, you had one option: stop, leave, and lose your work. Go to Settings → Variables, pick a type, create it, then come back and rebuild your payment logic.",
        "For the most careful task in the product, the tool forced a detour at the worst possible moment.",
        "This is what made it interesting — two pulls, working against each other. Make it easier: kill the detour, let people create a variable right where they need it. Don't make it careless: variable creation is risky, the name has to match the system, the logic has to be right — this is no place for a sloppy shortcut.",
        "Easy entry, but a rigorous flow. That was the line to walk."
      ]
    },
    {
      id: "flow",
      heading: { eyebrow: "Part 02", title: "The door, and the flow behind it" },
      paragraphs: [
        "I didn't invent a new place to go. I used the one the admin was already standing in.",
        "When you build payment logic, you type a variable name and a filtered list of suggestions appears — standard type-ahead the admins use constantly. I added one thing, pinned to the bottom of that list: \"+ New variable.\"",
        "Why this, and not some big new entry point: it rides a behavior people already have — nothing new to learn. It appears exactly when it's needed — mid-search, mid-thought. And the payment logic stays open behind it — no lost work.",
        "The humble part of the feature is humble on purpose. The door is small and familiar. It's what's behind it that does the heavy lifting.",
        "Clicking \"+ New variable\" opens a stepped, guided flow — because authoring one of these is genuinely complex, and a blank form would be dangerous."
      ]
      // The 4-step guided flow renders between two mockups mid-chapter (not
      // just after paragraphs like every other chapter), so it's composed
      // directly in the page rather than through this generic `steps` slot.
    },
    {
      id: "preview",
      heading: { eyebrow: "Part 02", title: "The preview: seeing before you commit" },
      paragraphs: [
        "This was my call, and it's the part I'm most sure about.",
        "When the stakes are this high, the admin shouldn't have to imagine the outcome — they should see it. So Step 4 ends in a live preview: apply the configuration, and Chestnut shows real producers (by NPN) with their actual persistency values.",
        "Before you create the variable that will feed someone's payout, you watch what it produces. It turns an act of faith into an act of confirmation."
      ]
    },
    {
      id: "part2-outcome",
      heading: { eyebrow: "Part 02", title: "How it was built, and where it landed" },
      paragraphs: [
        "I designed the entire flow — all four steps, every state.",
        "The analytic variable type itself was new. Engineering created it, and I was in from the start, designing the experience around it as it took shape. It worked well enough that it was later added to Settings too — the same creation flow, now living in both places.",
        "I built on Bonsai (the design system from Part 1) wherever I could, but this feature pushed past it. Several pieces had to be custom: the variable-type cards, the second set of radio selectors, and a few more — patterns Bonsai didn't have yet.",
        "I worked closely with the Chestnut PM through design, then with the engineers through the build — largely making sure the design decisions survived into the shipped product.",
        "It shipped, and it's live. The full flow — the in-context trigger, the four steps, the preview — is in the product.",
        "The dead end is gone. An admin who hits a missing variable no longer leaves, no longer loses their work, and no longer flies blind. They create exactly what they need, see it work, and keep going."
      ]
    }
  ]
};
