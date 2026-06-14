/**
 * The design system — single source of truth.
 *
 * Every visual value the site can use lives here, once. The token object is
 * flattened to `--ds-*` CSS custom properties by `tokensToCss()` and injected
 * once at the app root (apps/website/app/layout.tsx) onto `:root`. The Tailwind
 * `ds-*` namespace (tailwind-preset.ts) references these same variable names —
 * so primitives stay readable while values never duplicate.
 *
 * This is the ONLY canonical token namespace. The legacy `:root` tokens and the
 * quarantined experiment themes (vs3, signature, …) keep their own namespaces
 * and never collide with `--ds-*`. New designs extend this file, never fork it.
 */

export const dsTokens = {
  color: {
    // Surfaces — warm whites + peach, deep ink
    "surface-page": "#FCFBF9",
    "surface-raised": "#FFFFFF",
    "surface-sunken": "#F4F1EC",
    "surface-cream": "#F7E7DA",
    "surface-ink": "#1E1515",
    "surface-nav": "rgba(255, 255, 255, 0.82)", // translucent pill nav (backdrop-blur)

    // Text — warm near-black
    "ink": "#1E1515",
    "ink-soft": "rgba(30, 21, 21, 0.72)",
    "ink-muted": "rgba(30, 21, 21, 0.50)",
    "on-ink": "#FCFBF9",

    // Accent — signature orange
    "accent": "#E06C41",
    "accent-hover": "#CC5D34",
    "accent-soft": "#FBE4D8",

    // Status — availability indicator
    "positive": "#34C759",

    // Borders
    "border": "rgba(30, 21, 21, 0.10)",
    "border-strong": "rgba(30, 21, 21, 0.22)",
    "border-subtle": "rgba(30, 21, 21, 0.06)",

    // Tag pairs (playful pastels)
    "tag-lilac-bg": "#E9E4FB",
    "tag-lilac-fg": "#5B4B9E",
    "tag-peach-bg": "#FBE4D8",
    "tag-peach-fg": "#B5532C",
    "tag-mint-bg": "#DDEFE6",
    "tag-mint-fg": "#2F7355",
    "tag-sky-bg": "#DEEAF4",
    "tag-sky-fg": "#2C6486"
  },

  // 4-based spacing — the rationalization of the reference's messy values
  space: {
    "1": "4px",
    "2": "8px",
    "3": "12px",
    "4": "16px",
    "5": "24px",
    "6": "32px",
    "7": "48px",
    "8": "64px",
    "9": "96px",
    "10": "128px"
  },

  radius: {
    sm: "8px",
    md: "14px",
    lg: "24px",
    xl: "32px",
    "2xl": "44px",
    pill: "999px"
  },

  font: {
    serif: '"Fraunces", "Times New Roman", Georgia, serif',
    sans: '"Hanken Grotesk", "Inter", "Segoe UI", sans-serif',
    script: '"Caveat Brush", "Comic Sans MS", cursive'
  },

  // Locked type presets — size / line-height / weight / tracking per role.
  // Consumed by the Text primitive so a size can never pair with a wrong lh.
  type: {
    display: { size: "60px", lh: "1.04", weight: "400", tracking: "-0.02em", family: "serif" },
    h1: { size: "47px", lh: "1.08", weight: "400", tracking: "-0.02em", family: "serif" },
    h2: { size: "36px", lh: "1.12", weight: "400", tracking: "-0.01em", family: "serif" },
    h3: { size: "22px", lh: "1.3", weight: "600", tracking: "-0.01em", family: "sans" },
    lead: { size: "20px", lh: "1.5", weight: "400", tracking: "0em", family: "sans" },
    body: { size: "16px", lh: "1.6", weight: "400", tracking: "0em", family: "sans" },
    "body-sm": { size: "14px", lh: "1.55", weight: "400", tracking: "0em", family: "sans" },
    caption: { size: "13px", lh: "1.5", weight: "500", tracking: "0em", family: "sans" },
    eyebrow: { size: "12px", lh: "1.4", weight: "600", tracking: "0.18em", family: "sans" },
    script: { size: "22px", lh: "1.2", weight: "400", tracking: "0em", family: "script" }
  },

  // Mobile display overrides (applied via the :root media block in tokensToCss)
  typeMobile: {
    display: "40px",
    h1: "36px",
    h2: "28px"
  },

  shadow: {
    card: "0 1px 2px rgba(30,21,21,0.03), 0 8px 24px -8px rgba(30,21,21,0.08)",
    "card-hover": "0 2px 6px rgba(30,21,21,0.05), 0 18px 48px -12px rgba(30,21,21,0.16)",
    nav: "0 2px 8px rgba(30,21,21,0.06), 0 12px 32px -12px rgba(30,21,21,0.12)"
  },

  motion: {
    "ease-out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
    "ease-out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
    "dur-fast": "180ms",
    "dur-default": "360ms",
    "dur-slow": "640ms"
  },

  layout: {
    "container": "1088px",
    "prose": "680px"
  }
} as const;

/** Token-flip values for inverted (dark) sections. Only the keys that change. */
const INVERTED: Record<string, string> = {
  "color-ink": "#FCFBF9",
  "color-ink-soft": "rgba(252, 251, 249, 0.72)",
  "color-ink-muted": "rgba(252, 251, 249, 0.55)",
  "color-accent": "#F08A5D",
  "color-accent-soft": "rgba(240, 138, 93, 0.18)",
  "color-border": "rgba(252, 251, 249, 0.15)",
  "color-border-strong": "rgba(252, 251, 249, 0.30)",
  "color-border-subtle": "rgba(252, 251, 249, 0.10)",
  "color-surface-raised": "rgba(252, 251, 249, 0.05)",
  "color-surface-sunken": "rgba(252, 251, 249, 0.06)",
  "color-surface-cream": "rgba(252, 251, 249, 0.08)"
};

/**
 * Flatten the token object into the CSS injected once at the app root. Produces:
 * the base variables on `:root` (inert until an element opts in via `.ds-root`),
 * a mobile type-override block, and the global `.ds-inverted` token-flip block
 * for dark sections — all in the `--ds-*` namespace.
 */
export function tokensToCss(): string {
  const lines: string[] = [];

  for (const [k, v] of Object.entries(dsTokens.color)) lines.push(`--ds-color-${k}: ${v};`);
  for (const [k, v] of Object.entries(dsTokens.space)) lines.push(`--ds-space-${k}: ${v};`);
  for (const [k, v] of Object.entries(dsTokens.radius)) lines.push(`--ds-radius-${k}: ${v};`);
  for (const [k, v] of Object.entries(dsTokens.font)) lines.push(`--ds-font-${k}: ${v};`);
  for (const [k, v] of Object.entries(dsTokens.shadow)) lines.push(`--ds-shadow-${k}: ${v};`);
  for (const [k, v] of Object.entries(dsTokens.motion)) lines.push(`--ds-${k}: ${v};`);
  for (const [k, v] of Object.entries(dsTokens.layout)) lines.push(`--ds-layout-${k}: ${v};`);
  for (const [role, t] of Object.entries(dsTokens.type)) {
    lines.push(`--ds-type-${role}-size: ${t.size};`);
    lines.push(`--ds-type-${role}-lh: ${t.lh};`);
    lines.push(`--ds-type-${role}-weight: ${t.weight};`);
    lines.push(`--ds-type-${role}-tracking: ${t.tracking};`);
  }

  const invertedLines = Object.entries(INVERTED).map(([k, v]) => `--ds-${k}: ${v};`);
  const mobileLines = Object.entries(dsTokens.typeMobile).map(
    ([role, size]) => `--ds-type-${role}-size: ${size};`
  );

  return [
    `:root{${lines.join("")}}`,
    `.ds-inverted{${invertedLines.join("")}}`,
    `@media (max-width: 809px){:root{${mobileLines.join("")}}}`
  ].join("");
}
