/**
 * vs3 imagery — distinct, technical-tone, internet-sourced images (verified to
 * resolve). One per slot, no repeats, and a different set from vs2 to suit
 * workweave's cooler/engineering aesthetic. Keyed by content ids from
 * lib/site-content.ts. Most of vs3's "visuals" are WebGL; these cover the
 * Work + Exploration card photo slots only.
 */

const base = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

export const workImages: Record<string, string> = {
  "work-chestnut": base("1522071820081-009f0129c71c"), // engineering team
  "work-hrms": base("1584291527908-033f4d6542c8"), // data visualization
  "work-onboarding": base("1555066931-4365d14bab8c"), // code on screen
  "work-design-system": base("1644088379091-d574269d422f") // abstract network
};

export const explorationImages: Record<string, string> = {
  "ai-audit-tool": base("1551434678-e076c223a692"), // servers / infra
  "ai-shopping": base("1488590528505-98d2b5aba04b"), // laptop / build
  "whitelabel-starter": base("1607799279861-4dd421887fb3"), // code editor
  "spec-diff": base("1484417894907-623942c8ee29") // code screen
};

export const fallbackImage = base("1517180102446-f3ece451e9d8");
