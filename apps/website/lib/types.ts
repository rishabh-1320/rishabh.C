export type NavItem = {
  label: string;
  href: string;
};

export type HeroContent = {
  eyebrow: string;
  h1: string;
  subLine: string;
  metrics: string[];
  image: string;
};

export type StatItem = {
  value: string;
  label: string;
};

export type IdeologyPrinciple = {
  id: string;
  title: string;
  description: string;
  variant: "light" | "brand" | "blue" | "dark";
  icon?: "systems" | "production" | "ai" | "function";
};

export type WorkCard = {
  id: string;
  title: string;
  description: string;
  role: string;
  year: string;
  company: string;
  ctaLabel: string;
  active: boolean;
  href?: string;
  tags: string[];
  metric?: string;
  metricLabel?: string;
};

export type AIExplorationCard = {
  id: string;
  title: string;
  description: string;
  status: "Live" | "Prototype" | "Archived";
  builtWith: string[];
  year: number;
  ctaLabel: string;
  active: boolean;
  href?: string;
  tags: string[];
};

export type LogoItem = {
  name: string;
  src?: string;
};

export type AiWorkflowTool = {
  name: string;
  description: string;
  /** Path to the tool's real logo mark in public/ai-tools/. */
  icon?: string;
};

export type ExperienceProject = {
  name: string;
  period: string;
  description: string;
};

export type ExperienceEntry = {
  company: string;
  period: string;
  description?: string;
  projects?: ExperienceProject[];
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  href?: string;
};

export type HomeContent = {
  statusBarText: string;
  siteName: string;
  resumeUrl: string;
  nav: NavItem[];
  hero: HeroContent;
  logoStrip: {
    heading: string;
    logos: LogoItem[];
  };
  stats: StatItem[];
  ideologyHeading: string;
  ideologyIntro: string;
  ideologyPrinciples: IdeologyPrinciple[];
  worksHeading: string;
  works: WorkCard[];
  aiWorkflow: {
    heading: string;
    intro: string;
    tools: AiWorkflowTool[];
    closingLine: string;
  };
  aiExplorationsHeading: string;
  aiExplorationsIntro: string;
  aiExplorations: AIExplorationCard[];
  about: {
    heading: string;
    intro: string;
    bio: string[];
    currentlyLine: string;
    photoSrc?: string;
    experiences: ExperienceEntry[];
    testimonials: Testimonial[];
  };
  footer: {
    closingLine: string;
    email: string;
    linkedinUrl: string;
    location: string;
  };
  footerNote: string;
};
