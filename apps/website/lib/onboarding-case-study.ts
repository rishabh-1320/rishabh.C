import type { CaseStudyData } from "./case-study-types";

/**
 * HRMS Candidate Onboarding — restructured from the real, previously-
 * published narrative into the new Figma template's chapter shape. No
 * content was invented: this project has no quantified before/after metric
 * in the original copy (just "onboarding got faster"), so `stats` is
 * omitted rather than padded with a made-up number.
 */
export const onboardingCaseStudy: CaseStudyData = {
  metadataTitle: "HRMS Candidate Onboarding Redesign — Timelabs | Rishabh Choudhary",
  metadataDescription:
    "How I rebuilt a digital candidate onboarding flow from an admin-panel nobody used into a self-service guided experience candidates could actually complete on their own.",

  hero: {
    tags: ["UX", "Enterprise", "2024–2025"],
    title: "Rebuilding digital candidate onboarding for HRMS, from old to new",
    accent: "old to new",
    subtitle:
      "Timelabs had a digital candidate onboarding flow. Almost nobody used it. Candidates found it confusing, so HR ran onboarding manually — defeating the whole point of a digital flow. I rebuilt it into a clear, guided, self-service experience where candidates always know where they are, what's done, and what's next. It shipped, and onboarding got faster. HR went from doing the work to approving it."
  },

  chapters: [
    {
      id: "problem",
      heading: { eyebrow: "Problem", title: "The problem: a digital flow nobody used" },
      paragraphs: [
        "The onboarding flow already existed. It just didn't work as an experience.",
        "It was built like an admin panel — tasks in tables, dense forms, manual document uploads. For a new hire on day one, it was confusing. They couldn't tell where they stood.",
        "So candidates avoided it. And when candidates don't self-serve, the work doesn't disappear — it lands on HR, who completed onboarding by hand for every new hire. A digital product that created manual work."
      ],
      checklist: {
        title: "What a new hire couldn't tell:",
        items: ["Where they were in the process", "What was done", "What was still pending", "What to do next"]
      }
    },
    {
      id: "what-i-fixed",
      heading: { eyebrow: "Scope", title: "What I had to fix (and what I didn't)" },
      paragraphs: [
        "The capabilities were already there. Mobile and email verification, document upload, document parsing — all of it existed.",
        "The features weren't the problem. The experience was.",
        "So this was never about adding features. It was about answering one question on every screen: where am I, and what happens next?"
      ]
    },
    {
      id: "discovery",
      heading: { eyebrow: "Discovery", title: "Discovery: learning from the best onboarding flows" },
      paragraphs: [
        "There was no research budget — this was requirements-driven. So I built my evidence base from references.",
        "I studied how mature products handle account setup, verification, and documents — Zoho, Gusto, and others. How they show progress, handle verification, manage uploads, and close out completion. That became my playbook for what \"good\" looked like."
      ]
    },
    {
      id: "redesign",
      heading: { eyebrow: "Solution", title: "The redesign: from admin panel to guided journey" },
      paragraphs: ["I rebuilt onboarding around two ideas — clarity and self-service."],
      steps: [
        {
          title: "Always know where you stand",
          description:
            "A persistent progress tracker — \"X of 12 completed,\" a percentage, the deadline, days left. Every step shows its status: done, pending, or next."
        },
        {
          title: "One clear path",
          description:
            "The dense forms became a guided, step-by-step flow: verification → personal info → documents → policies → orientation → review & sign. Each step is one focused task, not a wall of fields."
        },
        {
          title: "Self-service by default",
          description:
            "Everything HR used to do by hand, the candidate now does — verify, fill, upload. HR's job shrank to a final approval."
        },
        {
          title: "Small wins along the way",
          description:
            "Completion moments (\"Good Job Filling Verification\") keep momentum and make a long process feel doable."
        }
      ]
    },
    {
      id: "process",
      heading: { eyebrow: "Process", title: "How I worked through it" },
      paragraphs: [
        "As the sole designer, I brainstormed and iterated over ~2–3 weeks, working from the outside in:",
        "Then I partnered with developers to build it."
      ],
      checklist: {
        title: "The four stages:",
        items: [
          "Layout first — the onboarding home and overall structure; exploring the visual language and step model",
          "Then components — the verification/OTP cards, every state mapped (empty, error, re-enter, success)",
          "Then details — text fields, and the full range of upload states (uploading, reupload, file too large, unsupported, error)",
          "Then the refined flow — pulling it together with parsing, per-section progress, and completion moments"
        ]
      }
    },
    {
      id: "outcome",
      heading: { eyebrow: "Outcome", title: "Where it landed" },
      paragraphs: [
        "The redesign shipped, and onboarding got faster.",
        "The biggest shift wasn't visual — it was who does the work. Candidates could finally self-serve, so HR moved from completing onboarding to approving it. The digital flow started doing the job it was built for."
      ]
    }
  ]
};
