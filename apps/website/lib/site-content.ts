import type { HomeContent } from "./types";

export const homeContent: HomeContent = {
  statusBarText: "Open to work · Bangalore, IST (UTC +5:30)",
  siteName: "Rishabh",
  resumeUrl: "https://drive.google.com/file/d/1yuRPDLlRh_Q7rkXvQfxWwoOZYhgisN42/view?usp=drive_link",
  nav: [
    { label: "Work", href: "/#features" },
    { label: "AI Explorations", href: "/#ai-exploration" },
    { label: "About", href: "/#about" }
  ],

  hero: {
    eyebrow: "Product  Designer",
    h1: "I design B2B enterprise tools where clarity is the only metric that matters.",
    subLine: "Bridging the gap between architectural rigor and digital scalability. I design complex workflows for high-stakes environments where clarity is the only metric that matters.",
    metrics: ["5 SaaS products", "5 domains", "3 design systems", "AI in production workflow"],
    image: "https://framerusercontent.com/images/evb8WhW5MaVa23RUApiaX1mK1ic.png?width=2290&height=1474"
  },

  logoStrip: {
    heading: "Product designs where I have contributed",
    logos: [
      { name: "Primelis Market", src: "/logos/primelis-market.svg" },
      { name: "Chestnut", src: "/logos/chestnut.svg" },
      { name: "Timelabs", src: "/logos/timelabs.svg" },
      { name: "Quixera", src: "/logos/quixera.svg" },
      { name: "Primelis Signal", src: "/logos/primelis-signal.svg" }
    ]
  },

  stats: [
    { value: "5", label: "Products shipped" },
    { value: "5", label: "Industry domains" },
    { value: "100k+", label: "Users reached" },
    { value: "3 yrs", label: "Designing B2B" }
  ],

  ideologyHeading: "Thinking in systems",
  ideologyIntro: "Four convictions that shape how I work, from first sketch to production code.",
  ideologyPrinciples: [
    {
      id: "01",
      title: "Design systems, not screens.",
      description: "Any thoughtful system beats a hundred clever tricks.",
      variant: "light",
      icon: "systems"
    },
    {
      id: "02",
      title: "Design isn't done at handoff. It's done at production.",
      description: "The fight for intent is dead. The code is the truth.",
      variant: "brand",
      icon: "production"
    },
    {
      id: "03",
      title: "AI accelerates. Designers decide.",
      description: "AI for layouts. Designers set the work.",
      variant: "blue",
      icon: "ai"
    },
    {
      id: "04",
      title: "Function before friendliness.",
      description: "In B2B, the user is a professional. Power that's usable.",
      variant: "dark",
      icon: "function"
    }
  ],

  worksHeading: "Case studies, end to end",
  works: [
    {
      id: "work-chestnut",
      title: "Standardizing Chestnut, a producer performance platform for insurance",
      description: "Standardized fragmented patterns, owned the design system, and shipped new features. Cut UX inconsistencies by 30–40% and design-to-dev rework by 20–25%.",
      role: "UX Designer",
      year: "2025–2026",
      company: "Tcules",
      href: "/casestudy/chestnut",
      ctaLabel: "View case study",
      active: true,
      tags: ["Product", "B2B", "Design System"],
      metric: "30–40%",
      metricLabel: "fewer UX inconsistencies"
    },
    {
      id: "work-hrms",
      title: "An HR analytics dashboard for an HRMS industry leader",
      description: "Translated vast workforce datasets into a clear, real-time dashboard. Picked the KPIs with stakeholders. Picked the visualizations with the data engineers.",
      role: "UX Designer",
      year: "2023–2024",
      company: "Timelabs",
      ctaLabel: "View case study",
      active: true,
      href: "/casestudy/dashboard",
      tags: ["Dashboard", "Analytics", "Enterprise"],
      metric: "2,000+",
      metricLabel: "employees tracked live"
    },
    {
      id: "work-onboarding",
      title: "Rebuilding digital candidate onboarding for HRMS, from old to new",
      description: "Rebuilt a broken onboarding flow from the ground up. Added new features along the way.",
      role: "UX Designer",
      year: "2024–2025",
      company: "Timelabs",
      ctaLabel: "View case study",
      active: true,
      href: "/casestudy/onboarding",
      tags: ["Onboarding", "HRMS", "Flow"]
    },
    {
      id: "work-design-system",
      title: "A whitelabel design system, built from scratch",
      description: "Built as a side project. Single token architecture, themable for any brand. My take on how systems should scale.",
      role: "Personal project",
      year: "",
      company: "",
      ctaLabel: "View case study",
      active: true,
      href: "/casestudy/design-system",
      tags: ["Design System", "Tokens", "Whitelabel"]
    }
  ],

  aiWorkflow: {
    heading: "AI accelerates. Designers decide.",
    intro: "Use AI for layouts and momentum. The direction still has to come from a human who gives a damn.",
    tools: [
      { name: "Claude", description: "Thinking out loud. Most design decisions get pressure-tested here first.", icon: "/ai-tools/claude.svg" },
      { name: "ChatGPT", description: "Brainstorming and a second opinion on ideas.", icon: "/ai-tools/chatgpt.svg" },
      { name: "Figma Make", description: "Figma to working prototype, without leaving the canvas.", icon: "/ai-tools/figma-make.svg" },
      { name: "v0", description: "Fast React and Tailwind front-ends from prompts.", icon: "/ai-tools/v0.svg" },
      { name: "Lovable", description: "Full-stack prototypes when something needs to actually run.", icon: "/ai-tools/lovable.svg" }
    ],
    closingLine: "In practice: Think in Claude or ChatGPT. Design in Figma. Prototype with Figma Make or v0. Ship with Lovable when it has to actually run."
  },

  aiExplorationsHeading: "AI Explorations",
  aiExplorationsIntro: "Side projects where I push the AI tools further than my day job needs.",
  aiExplorations: [
    {
      id: "ai-audit-tool",
      title: "AI Audit Tool",
      description: "A working internal tool that surfaces anomalies in dense compliance datasets. Audit reviewers see flagged items in under 2 seconds.",
      status: "Live",
      builtWith: ["Claude", "v0"],
      year: 2026,
      ctaLabel: "Try it live",
      active: false,
      tags: ["AI", "Enterprise", "Built with AI"]
    },
    {
      id: "ai-shopping",
      title: "AI Shopping Assistant",
      description: "A speech-to-speech assistant that turns vague shopping intent into a clean checkout. Built end-to-end as a weekend experiment.",
      status: "Prototype",
      builtWith: ["Claude", "Lovable"],
      year: 2025,
      ctaLabel: "View details",
      active: false,
      tags: ["AI", "Voice", "Prototype"]
    },
    {
      id: "whitelabel-starter",
      title: "Whitelabel Component Starter",
      description: "A starter kit of 40+ themable components. Built to test how far token-based theming can scale across brands.",
      status: "Live",
      builtWith: ["Figma", "Tokens Studio"],
      year: 2025,
      ctaLabel: "View kit",
      active: false,
      tags: ["Design System", "UI Kit"]
    },
    {
      id: "spec-diff",
      title: "Spec Diff Tool",
      description: "A small browser tool to compare two Figma versions side by side. Useful when reviewing handoffs.",
      status: "Archived",
      builtWith: ["v0"],
      year: 2024,
      ctaLabel: "GitHub",
      active: false,
      tags: ["Tool", "Personal"]
    }
  ],

  about: {
    heading: "About Me",
    intro: "This is all about me and my career till now, and the work I have done.",
    bio: [
      "Hi, I'm Rishabh. I design complex B2B software for industries like insurance, HRMS, sports academy management, Amazon marketplace optimization, and branded advertising. These products are dense and full of rules. So I build the design patterns they need from scratch.",
      "I think in systems. I use AI to brainstorm, prototype, and sometimes ship code. The goal isn't to use AI everywhere. The goal is to keep what I design close to what gets built."
    ],
    currentlyLine: "Currently at Tcules. Designing Omny and Signal at Primelis, and Cricmax at Quixera.",
    experiences: [
      {
        company: "Tcules",
        period: "2025 – present",
        projects: [
          { name: "Primelis", period: "2026 – present", description: "Designing Omny (Amazon marketplace optimization) and Signal (branded ad optimization)." },
          { name: "Quixera", period: "2026 – present", description: "Designing Cricmax, a sports academy management platform." },
          { name: "Chestnut", period: "2025 – 2026", description: "Designed the legacy modernization of a producer performance management platform for insurance agents." }
        ]
      },
      {
        company: "Cynosure Technologies (Timelabs)",
        period: "2023 – 2025",
        description: "Designed Travel Management, HR Analytics, and Candidate Onboarding. Built a component library for the HRMS product."
      },
      {
        company: "Sports For All",
        period: "2022",
        description: "Designed the National Games Gujarat 2022 website. Reached 100,000+ daily users."
      }
    ],
    testimonials: [
      {
        quote: "PLACEHOLDER — swap for a real quote from a Tcules colleague or stakeholder.",
        name: "Tcules",
        role: "Designation",
        avatarSrc: "https://i.pravatar.cc/150?img=12"
      },
      {
        quote: "PLACEHOLDER — swap for a real quote from a Timelabs colleague or stakeholder.",
        name: "Tcules",
        role: "Designation",
        avatarSrc: "https://i.pravatar.cc/150?img=33"
      },
      {
        quote: "PLACEHOLDER — swap for a real quote from a Primelis or Quixera stakeholder.",
        name: "Tcules",
        role: "Designation",
        avatarSrc: "https://i.pravatar.cc/150?img=47"
      }
    ]
  },

  footer: {
    closingLine: "Five products, five domains, one design system. Let's talk.",
    email: "rishabh1320@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/rishabh-choudhary-43a81b158/",
    location: "Bangalore, IST (UTC +5:30)"
  },
  footerNote: "© 2026 Rishabh Choudhary · All rights reserved."
};
