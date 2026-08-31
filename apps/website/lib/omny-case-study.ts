import type { CaseStudyData } from "./case-study-types";

/**
 * Omny (Primelis Market) — multi-workspace navigation. Transcribed from the
 * supplied working brief; no content invented.
 *
 * `stats` is omitted deliberately: the work was approved and specified for
 * development on 29 June 2026 but has not shipped, so no adoption or
 * cost-savings numbers exist. Session and hour counts are process facts, not
 * outcomes, and would read as padding in the metrics band.
 *
 * The brief's own editorial scaffolding — its `[VISUAL n]` image briefs, the
 * note about review gates, the `[TODO]` on the evidence link, and the
 * `[Suggested addition — confirm or cut]` markers — is not content and does not
 * appear here. The prose inside the "suggested addition" was confirmed for
 * inclusion and lives in the `button` chapter; the bracketed instruction does
 * not.
 */
export const omnyCaseStudy: CaseStudyData = {
  metadataTitle: "Omny Multi-Workspace Navigation — Primelis | Rishabh Choudhary",
  metadataDescription:
    "How I designed away an expensive default login destination without deleting it — three concepts tested against a failure mode, three rounds of suppressing a screen I wasn't allowed to remove, and a requested button I replaced with nothing.",

  hero: {
    tags: ["UX", "B2B SaaS", "2026"],
    title: "Designing against a habit, without removing what triggered it",
    accent: "without removing what triggered it",
    subtitle:
      "Every multi-workspace user at Primelis defaulted into a screen called All Accounts, running an expensive query against the data warehouse on every login — and almost nobody used it. I couldn't delete it. The brief wasn't \"build a new homepage\"; it was change the habit without touching the destination the habit runs through."
  },

  chapters: [
    {
      id: "contradiction",
      heading: { eyebrow: "Problem", title: "The contradiction the brief handed me" },
      paragraphs: [
        "Every multi-workspace user at Primelis defaulted into a screen called All Accounts, running an expensive query against the data warehouse on every login — and almost nobody used it. Everyone immediately switched to one workspace and re-selected scope. That default was costing money for nothing, on every login, at a growing account count.",
        "The obvious fix is to remove the default. I couldn't. All Accounts is the only place internal-access defaults get configured, and it's the only way some customers who deliberately split their brands across workspaces can see a consolidated view. Delete it and I break two things that have nothing to do with the habit I was trying to fix.",
        "So the actual brief wasn't \"build a new homepage.\" It was: change the habit without touching the destination the habit runs through. That's a real contradiction, not a design preference, and it's the shape of every decision below. None of them had a clean answer."
      ]
    },
    {
      id: "concepts",
      heading: { eyebrow: "Decision 1", title: "Which concept survives a pipeline that can fail" },
      paragraphs: [
        "The new landing page pulls from a heavy analytics pipeline that can go down. If I built workspace entry to depend entirely on that pipeline and it failed, the user would be stuck on a broken landing screen with no way into their own product. I had to design against that failure mode from the first concept, not patch it in later.",
        "I brought three concepts to the client.",
        "I chose the third concept because it forces an explicit workspace choice instead of trying to make the risky option bulletproof. It's the least novel of the three — closest to the existing menu, reusing disabled components rather than building new ones — and I gave up the more distinctive \"portfolio mode\" feel of the first concept to get there. In exchange, I removed the single point of failure entirely and shipped a spec with far less new surface area to get wrong."
      ],
      table: {
        headers: ["Concept", "What it did", "What I decided"],
        rows: [
          [
            "Dual sidebar (Notion/Slack-style swap)",
            "Same-dimension sidebar swaps content between \"portfolio mode\" and \"workspace mode\"",
            "I liked it, but flagged it myself as risky — entry into a workspace depended entirely on the fallible pipeline. If it failed, the user had no way in."
          ],
          [
            "Tab/icon switcher",
            "Brand Portfolio as a tab; switching resolves to a dropdown",
            "I rejected this one outright — on switch, the first workspace shown defaulted to All Accounts, which defeats the entire point of killing that default."
          ],
          [
            "Logo + disabled entry points",
            "Modules present but disabled until a workspace is chosen; logo returns home",
            "I built from this one and refined it with the client into the final spec."
          ]
        ]
      }
    },
    {
      id: "suppression",
      heading: { eyebrow: "Decision 2", title: "Suppressing a destination I wasn't allowed to delete" },
      paragraphs: [
        "This is the contradiction from the top of this page, and it took me three rounds to actually resolve — not one.",
        "Search-first access is less discoverable for the handful of people who need it often — ops leads managing cross-workspace defaults, sales setting up new accounts. I accepted that cost. The redesign's target audience is the majority who should never open the screen at all, not the few who still need it.",
        "I was confident the placement fix would cut accidental clicks — that logic held across all three rounds. I was much less sure it fully answers the reliability question raised earlier in the project: the team converged on a single, unified navigation source rather than the redundant fallback path originally scoped, and I haven't seen that consolidated path fail-tested."
      ],
      steps: [
        {
          title: "I differentiated it",
          description:
            "I gave the All Accounts list item a distinct square shape against the circular avatar every workspace uses, plus a small globe icon, on a colored background, so it read as a different kind of thing. The client's read: the shape worked, but strong color still invites a click — the opposite of what I was going for."
        },
        {
          title: "I muted it",
          description:
            "I swapped the strong color for gray. Feedback: better, but it still \"looked labeled\" — still sitting in the list, still an easy target."
        },
        {
          title: "I moved it instead of decorating it",
          description:
            "No amount of styling defeats simple presence in a list you scroll past every day. I sorted the item to the very bottom and made it reachable mainly through search, rather than through visual restraint. The client's implementation contact suggested the placement-and-search approach; I agreed with the reasoning and built it. I hadn't originated that specific move, but it's where the logic of the first two rounds was already pointing — round three just did structurally what rounds one and two were trying to do with color."
        }
      ],
      table: {
        headers: ["", "Distinct styling", "Muted styling", "Structural placement"],
        rows: [
          ["Reduces accidental clicks", "Partial", "Partial", "Yes"],
          ["Keeps it fully available", "Yes", "Yes", "Yes"],
          ["Survives a \"don't decorate, prevent\" retest", "No", "No", "Yes"]
        ]
      }
    },
    {
      id: "button",
      heading: { eyebrow: "Decision 3", title: "Removing a button by choosing not to add one" },
      paragraphs: [
        "The client's CTO asked for a new button, placed above the workspace switcher, to return to the portfolio screen — homepage-style, the way most apps handle it. He raised his own constraint alongside the ask: don't overload the left nav bar, it's already height-constrained.",
        "Instead of building what was asked and separately flagging the height risk, I designed an alternative that solved his own constraint better than his own request did: use the product logo itself as the return-to-home control. No new element added at all.",
        "I presented it by walking through the reasoning — what the requested button would cost in vertical space, and how the logo did the identical job for free. The product manager, who owned the decision by that point, accepted it and couldn't recall why a separate button had been the instinct in the first place. It carried into the final spec.",
        "The tradeoff I gave up here is a future one, not a present one. The logo can't carry a label, a badge, or a counter later without undoing the reason I chose it — if the return-to-home control ever needs to say something, that affordance has nowhere to live. I decided that was an acceptable bet: the height constraint was real today, a labeled affordance was hypothetical."
      ]
    },
    {
      id: "how-built",
      heading: { eyebrow: "Process", title: "How I actually built these screens" },
      paragraphs: [
        "I iterated most of the exploratory versions of these screens — the three concepts, all three All Accounts rounds — in Figma AI rather than building every pass by hand. It was faster and cut a lot of repetitive labor; the output wasn't dev-handoff fidelity, but it was good enough to put in front of the client at each round and get a real reaction.",
        "The screens that actually went to engineering were rebuilt to full fidelity by hand. I didn't route the ideation itself through an LLM — the problem here was well-defined enough that I didn't feel I needed a second opinion to find it."
      ]
    },
    {
      id: "where-it-stands",
      heading: { eyebrow: "Outcome", title: "Where it stands" },
      paragraphs: [
        "The full navigation model — landing behavior, dropdown states, per-tab button visibility (derived from who actually triggers each action, which turned out to be about three people company-wide), the naming refactor, and the three decisions above — was approved by the client and handed to engineering as a development-ready spec on 29 June 2026. It has not shipped. No adoption or cost-savings numbers exist yet, because nothing is live to measure.",
        "What did outlive the mockups: the naming refactor. Primelis's own team now says \"create a workspace,\" not \"create an account,\" in the product settings — \"account\" stayed reserved for actual Amazon connections, exactly as designed. All Accounts, the one place the old word survives, isn't read as a generic plural anymore. It's a specific named destination people refer to by name, not a common noun. The vocabulary change shipped even though the screens haven't."
      ]
    },
    {
      id: "revisit",
      heading: { eyebrow: "Reflection", title: "Revisit conditions" },
      paragraphs: [
        "This resolution holds only as long as All Accounts stays a rare, look-up destination. If usage data later shows people are still landing there often through search, the structural fix didn't work, and the answer isn't more styling — it's a harder intervention, possibly rethinking whether search-first access was the right tradeoff for the ops and sales users who need it regularly.",
        "The All Accounts label collision — the same phrase naming both a table tab state and a workspace destination — was flagged during the project and never resolved in the UI. Whoever builds this should fix the labeling before shipping, not after. It's a small rename now and a support conversation later."
      ]
    }
  ],

  closingQuote: {
    label: "Approach",
    quote:
      "Build the alternative, show why it resolves what the requested version doesn't, and let the reasoning do the persuading rather than arguing the point. The other half matters just as much — if a client still prefers their own version after seeing the case, I drop it. They may be holding context I don't have."
  }
};
