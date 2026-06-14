/**
 * vs3 — Single source of truth for the design system (workweave.dev-inspired).
 *
 * Same architecture as vs2 but a fully separate `--vs3-*` namespace and an
 * entirely different visual language: light refined grotesk display, hot coral
 * accent, a muted multi-hue data-viz palette, tighter radii. The token object
 * is flattened to `--vs3-*` custom properties by `tokensToCss()` and injected
 * once at `.vs3-root` (app/vs3/layout.tsx). Tailwind exposes a `vs3-*` utility
 * namespace referencing these names. Nothing else reads or writes `--vs3-*`.
 */

export const vs3Tokens = {
  color: {
    // Surfaces — cool near-whites
    "surface-page": "#FCFCFC",
    "surface-raised": "#FFFFFF",
    "surface-sunken": "#F6F5F3",
    "surface-tint": "#FEF2EA", // faint coral wash
    "surface-ink": "#131313",
    "surface-ink-veil": "rgba(19, 19, 19, 0.55)", // darken over WebGL for text contrast
    "surface-nav": "rgba(252, 252, 252, 0.85)", // translucent sticky nav (backdrop-blur)

    // Text — near-black
    "ink": "#131313",
    "ink-soft": "rgba(26, 21, 18, 0.66)",
    "ink-muted": "rgba(26, 21, 18, 0.44)",
    "on-ink": "#FFFCFA",

    // Accent — hot coral
    "accent": "#EC6341",
    "accent-hover": "#E8532A",
    "accent-soft": "rgba(236, 99, 65, 0.10)",

    // Data-viz hues (the workweave graph palette)
    "viz-blue": "#3B7DD8",
    "viz-amber": "#E8924A",
    "viz-purple": "#6B5FD0",
    "viz-green": "#2BAD8A",
    "viz-pink": "#C95C8E",
    // Soft fills (precomputed alpha — opacity modifiers don't work on var() colors)
    "viz-blue-soft": "rgba(59, 125, 216, 0.10)",
    "viz-amber-soft": "rgba(232, 146, 74, 0.12)",
    "viz-purple-soft": "rgba(107, 95, 208, 0.10)",
    "viz-green-soft": "rgba(43, 173, 138, 0.12)",
    "viz-pink-soft": "rgba(201, 92, 142, 0.10)",

    // Borders
    "border": "rgba(26, 21, 18, 0.10)",
    "border-strong": "rgba(26, 21, 18, 0.20)",
    "border-subtle": "rgba(26, 21, 18, 0.06)"
  },

  // 4-based spacing
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

  // Tighter than vs2 — technical, not pillowy
  radius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    "2xl": "24px",
    pill: "999px"
  },

  font: {
    display: '"Figtree", "Inter", "Helvetica Neue", sans-serif',
    sans: '"Inter", "Helvetica Neue", Arial, sans-serif',
    mono: '"JetBrains Mono", ui-monospace, "SF Mono", monospace'
  },

  // Locked type presets — one light refined grotesk, low weights.
  type: {
    display: { size: "56px", lh: "1.06", weight: "300", tracking: "-0.02em", family: "display" },
    h1: { size: "48px", lh: "1.08", weight: "300", tracking: "-0.02em", family: "display" },
    h2: { size: "34px", lh: "1.15", weight: "400", tracking: "-0.01em", family: "display" },
    h3: { size: "20px", lh: "1.35", weight: "500", tracking: "0em", family: "sans" },
    lead: { size: "20px", lh: "1.5", weight: "400", tracking: "0em", family: "sans" },
    body: { size: "16px", lh: "1.6", weight: "400", tracking: "0em", family: "sans" },
    "body-sm": { size: "14px", lh: "1.55", weight: "400", tracking: "0em", family: "sans" },
    caption: { size: "13px", lh: "1.5", weight: "500", tracking: "0em", family: "sans" },
    eyebrow: { size: "12px", lh: "1.4", weight: "500", tracking: "0.14em", family: "mono" },
    stat: { size: "48px", lh: "1.0", weight: "300", tracking: "-0.02em", family: "display" }
  },

  typeMobile: {
    display: "36px",
    h1: "32px",
    h2: "26px",
    stat: "36px"
  },

  shadow: {
    card: "0 1px 2px rgba(19,19,19,0.04), 0 6px 20px -8px rgba(19,19,19,0.10)",
    "card-hover": "0 2px 6px rgba(19,19,19,0.06), 0 16px 40px -12px rgba(19,19,19,0.18)",
    nav: "0 1px 0 rgba(26,21,18,0.06), 0 8px 28px -14px rgba(19,19,19,0.16)"
  },

  motion: {
    "ease-out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
    "ease-out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
    "dur-fast": "160ms",
    "dur-default": "320ms",
    "dur-slow": "600ms"
  },

  layout: {
    container: "1200px",
    prose: "660px"
  }
} as const;

/** Token-flip values for inverted (dark) sections. */
const INVERTED: Record<string, string> = {
  "color-ink": "#FFFCFA",
  "color-ink-soft": "rgba(255, 252, 250, 0.66)",
  "color-ink-muted": "rgba(255, 252, 250, 0.44)",
  "color-accent": "#F47C5C",
  "color-accent-soft": "rgba(244, 124, 92, 0.16)",
  "color-border": "rgba(255, 252, 250, 0.14)",
  "color-border-strong": "rgba(255, 252, 250, 0.28)",
  "color-border-subtle": "rgba(255, 252, 250, 0.08)",
  "color-surface-raised": "rgba(255, 252, 250, 0.05)",
  "color-surface-sunken": "rgba(255, 252, 250, 0.05)",
  "color-surface-tint": "rgba(244, 124, 92, 0.08)"
};

export function tokensToCss(): string {
  const lines: string[] = [];
  for (const [k, v] of Object.entries(vs3Tokens.color)) lines.push(`--vs3-color-${k}: ${v};`);
  for (const [k, v] of Object.entries(vs3Tokens.space)) lines.push(`--vs3-space-${k}: ${v};`);
  for (const [k, v] of Object.entries(vs3Tokens.radius)) lines.push(`--vs3-radius-${k}: ${v};`);
  for (const [k, v] of Object.entries(vs3Tokens.font)) lines.push(`--vs3-font-${k}: ${v};`);
  for (const [k, v] of Object.entries(vs3Tokens.shadow)) lines.push(`--vs3-shadow-${k}: ${v};`);
  for (const [k, v] of Object.entries(vs3Tokens.motion)) lines.push(`--vs3-${k}: ${v};`);
  for (const [k, v] of Object.entries(vs3Tokens.layout)) lines.push(`--vs3-layout-${k}: ${v};`);
  for (const [role, t] of Object.entries(vs3Tokens.type)) {
    lines.push(`--vs3-type-${role}-size: ${t.size};`);
    lines.push(`--vs3-type-${role}-lh: ${t.lh};`);
    lines.push(`--vs3-type-${role}-weight: ${t.weight};`);
    lines.push(`--vs3-type-${role}-tracking: ${t.tracking};`);
  }
  const invertedLines = Object.entries(INVERTED).map(([k, v]) => `--vs3-${k}: ${v};`);
  const mobileLines = Object.entries(vs3Tokens.typeMobile).map(
    ([role, size]) => `--vs3-type-${role}-size: ${size};`
  );
  return [
    `.vs3-root{${lines.join("")}}`,
    `.vs3-root .vs3-inverted{${invertedLines.join("")}}`,
    `@media (max-width: 809px){.vs3-root{${mobileLines.join("")}}}`
  ].join("");
}
