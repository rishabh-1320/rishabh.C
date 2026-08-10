import type { CaseStudyData } from "./case-study-types";

/**
 * HR Analytics Dashboard — restructured from the real, previously-published
 * narrative into the new Figma template's chapter shape. No content was
 * invented to fill template slots: this project has no clean before/after
 * metric (the original copy says so directly), so `stats` is omitted rather
 * than padded with a made-up number.
 */
export const dashboardCaseStudy: CaseStudyData = {
  metadataTitle: "HR Analytics Dashboard — Timelabs | Rishabh Choudhary",
  metadataDescription:
    "How I redesigned the Timelabs HRMS admin dashboard into an analytics platform that surfaces attendance patterns and workforce insights for enterprise leaders.",

  hero: {
    tags: ["Data", "Enterprise", "2023–2024"],
    title: "An HR analytics dashboard for an HRMS industry leader",
    accent: "HR analytics dashboard",
    subtitle:
      "Timelabs is an HRMS used by large enterprises. Its admin dashboard showed plenty of data but didn't help anyone decide anything. I redesigned it into an attendance and workforce analytics dashboard that surfaces patterns, not just numbers — when people actually show up, who's likely to take leave when, and how the workforce breaks down across departments, shifts, and branches. It shipped. Leaders use it. And the interesting part wasn't the charts — it was figuring out which numbers mattered, how to show them, and getting them to actually work in code."
  },

  chapters: [
    {
      id: "problem",
      heading: { eyebrow: "Problem", title: "The problem" },
      paragraphs: [
        "Timelabs already had an admin dashboard. The data was all there — comprehensive, technically complete. But it was a wall of numbers. Leaders had to sit with it and do the analysis themselves. Nobody opens a dashboard to do homework.",
        "The company wanted a redesign that did the thinking for the leader. Open it, see what's happening with your workforce, decide something."
      ]
    },
    {
      id: "stakeholders",
      heading: { eyebrow: "Process", title: "Working with stakeholders (and no users)" },
      paragraphs: [
        "Honest framing: there was no user research on this project. No interviews, no workshops, no card sorting. It was requirements-driven — the CEO, CTO, and PMs knew the HRMS space and brought a list of what they wanted.",
        "So my evidence base was different. When we disagreed on what a KPI should be or how to show it, we'd look at how comparable products solved it, search for conventions, and pressure-test the logic. Competitive analysis instead of user testing.",
        "The CEO was the hardest to align with — not because he was wrong, but because he kept changing his mind. We revisited KPIs multiple times before landing on each one.",
        "Here's the thing about attendance: people don't follow their shift times. They have their own rhythms. The real job of this dashboard was to surface those hidden patterns — the gap between the schedule and reality. The CEO pushed for this and he was right to."
      ]
    },
    {
      id: "kpis",
      heading: { eyebrow: "Process", title: "Picking what to measure" },
      paragraphs: [
        "The brief was \"show everything useful.\" So the initial KPI list was huge — every attendance, workforce, device, and demographic metric you could think of.",
        "That's a trap. A dashboard that shows everything helps with nothing. The real work was filtering: which numbers drive a decision, and which are just noise dressed up as insight.",
        "I narrowed it through iteration — putting KPIs in, seeing if they earned their place, cutting the ones that didn't. No formal framework. Trial, error, and judgment."
      ],
      checklist: {
        title: "What survived broke into clear groups:",
        items: [
          "Real-time — who's expected, who's present, who's absent",
          "Workforce — active, inactive, unmapped, recent joiners and leavers",
          "Patterns — attendance trends, leave patterns, working hours",
          "Demographics — gender, age, experience, employment type"
        ]
      }
    },
    {
      id: "charts",
      heading: { eyebrow: "Execution", title: "Choosing the right chart for each number" },
      paragraphs: ["Once I knew what to show, the question became how. A few decisions worth calling out:"],
      steps: [
        {
          title: "Attendance Trends → a dot plot",
          description:
            "Instead of a single arrival time or a simple bar, I plotted every employee's arrival as a dot, grouped by department, across the morning hours. Now you can see the spread — which departments cluster early, which trickle in, where the late tail sits. That's the pattern the CEO wanted. A bar chart would've flattened it into an average and hidden the truth."
        },
        {
          title: "Head Count → a table, not a pie",
          description:
            "The obvious choice for \"employees per branch\" is a pie chart. But this dashboard was built for large enterprises — 15, 20+ departments and branches. A pie chart falls apart past 9 or 10 slices. So head count became a clean table with numbers you can actually read and compare."
        },
        {
          title: "Working Hours → a smoothened area chart",
          description:
            "Daily working hours bounce around. A raw line was jagged and hard to read at a glance, so I smoothed it into an area chart that shows the trend without the noise."
        },
        {
          title: "Ratios → donuts. Comparisons → bars.",
          description:
            "Gender, employment type, worker type — simple part-to-whole, so donuts. Workforce summary and leave status, where you're comparing groups across departments — grouped and stacked bars."
        }
      ]
    },
    {
      id: "engineering",
      heading: { eyebrow: "Execution", title: "Making it real (the part most case studies skip)" },
      paragraphs: [
        "Designing the dashboard was half the job. Getting it to actually work was the other half — and that meant sitting with two different engineers."
      ],
      steps: [
        {
          title: "The data engineer",
          description:
            "Most of these KPIs weren't single numbers sitting in a database. They were combinations — multiple data points processed through SQL to produce one figure. The engineer kept hitting the same wall: which data points to mix, and how. So we worked through it together, KPI by KPI, defining exactly what each number was made of and what got it there."
        },
        {
          title: "The frontend developer",
          description:
            "The charts were built with the right visualizations, but the interactions and responsiveness were off. So I sat with the developer and walked through how each chart should behave — how it reacts to more data, how it holds up across screen sizes."
        }
      ]
    },
    {
      id: "qa-bug",
      heading: { eyebrow: "Execution", title: "The bug I caught in QA" },
      paragraphs: [
        "One of those behaviors broke in a way that proves the whole point about responsiveness.",
        "I designed the dashboard for large enterprises with many departments. When the developer loaded dummy data into the Workforce Summary bar chart, a department-heavy dataset made the bars overlap — labels and values turned into an unreadable smear.",
        "I caught it in QA, sat with the developer, and we fixed it: give each bar a minimum width and spacing, then let the chart scroll horizontally past the fold instead of cramming everything into view. The chart stays readable no matter how many departments you throw at it."
      ]
    },
    {
      id: "outcome",
      heading: { eyebrow: "Outcome", title: "Where it landed" },
      paragraphs: [
        "The dashboard shipped. Leaders use it to read their workforce at a glance instead of doing the analysis themselves.",
        "I don't have a clean before/after metric to point to — this was a feature inside a larger HRMS, not a standalone experiment. But it shipped, and it's in active use by business leaders today."
      ]
    },
    {
      id: "reflection",
      heading: { eyebrow: "Reflection", title: "What I'd do differently" },
      paragraphs: [
        "Working with the developers taught me something I've carried into every project since: my designs weren't informational enough.",
        "What felt obvious to me — how something should behave, why a chart was built a certain way, what the edge cases were — wasn't obvious to the people building it. I handed off clean screens and assumed the intent came through. It didn't."
      ]
    }
  ],

  closingQuote: {
    label: "Lesson",
    quote:
      "Now I treat handoff as part of the design, not the end of it. More context, more annotation, more \"here's why.\" Design isn't done when the Figma file looks right. It's done when the thing ships the way you meant it to."
  }
};
