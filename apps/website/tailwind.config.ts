import type { Config } from "tailwindcss";
import dsPreset from "../../packages/ds-ui/tailwind-preset";

const config: Config = {
  // The canonical `ds-*` namespace comes from the shared design-system package.
  presets: [dsPreset],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}",
    "../../packages/ds-ui/src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          base: "var(--surface-base)",
          soft: "var(--surface-soft)",
          muted: "var(--surface-muted)",
          raised: "var(--surface-raised)",
          cream: "var(--surface-cream)",
          dark: "var(--surface-dark)"
        },
        accent: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)",
          soft: "var(--accent-soft)"
        },
        tag: {
          "lilac-bg": "var(--tag-lilac-bg)",
          "lilac-fg": "var(--tag-lilac-fg)",
          "peach-bg": "var(--tag-peach-bg)",
          "peach-fg": "var(--tag-peach-fg)",
          "mint-bg": "var(--tag-mint-bg)",
          "mint-fg": "var(--tag-mint-fg)",
          "sky-bg": "var(--tag-sky-bg)",
          "sky-fg": "var(--tag-sky-fg)"
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
          inverse: "var(--text-inverse)"
        },
        brand: {
          lime: "var(--brand-lime)",
          "lime-hover": "var(--brand-lime-hover)",
          blue: "var(--brand-blue)",
          warm: "var(--brand-warm)"
        },
        border: {
          default: "var(--border-default)",
          strong: "var(--border-strong)",
          subtle: "var(--border-subtle)"
        },
        // ── vs3 isolated namespace (quarantined; values from components/styles/vs3/tokens.ts) ──
        vs3: {
          "surface-page": "var(--vs3-color-surface-page)",
          "surface-raised": "var(--vs3-color-surface-raised)",
          "surface-sunken": "var(--vs3-color-surface-sunken)",
          "surface-tint": "var(--vs3-color-surface-tint)",
          "surface-ink": "var(--vs3-color-surface-ink)",
          "surface-ink-veil": "var(--vs3-color-surface-ink-veil)",
          "surface-nav": "var(--vs3-color-surface-nav)",
          ink: "var(--vs3-color-ink)",
          "ink-soft": "var(--vs3-color-ink-soft)",
          "ink-muted": "var(--vs3-color-ink-muted)",
          "on-ink": "var(--vs3-color-on-ink)",
          accent: "var(--vs3-color-accent)",
          "accent-hover": "var(--vs3-color-accent-hover)",
          "accent-soft": "var(--vs3-color-accent-soft)",
          "viz-blue": "var(--vs3-color-viz-blue)",
          "viz-amber": "var(--vs3-color-viz-amber)",
          "viz-purple": "var(--vs3-color-viz-purple)",
          "viz-green": "var(--vs3-color-viz-green)",
          "viz-pink": "var(--vs3-color-viz-pink)",
          "viz-blue-soft": "var(--vs3-color-viz-blue-soft)",
          "viz-amber-soft": "var(--vs3-color-viz-amber-soft)",
          "viz-purple-soft": "var(--vs3-color-viz-purple-soft)",
          "viz-green-soft": "var(--vs3-color-viz-green-soft)",
          "viz-pink-soft": "var(--vs3-color-viz-pink-soft)",
          border: "var(--vs3-color-border)",
          "border-strong": "var(--vs3-color-border-strong)",
          "border-subtle": "var(--vs3-color-border-subtle)"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
        "vs3-display": ["var(--vs3-font-display)", "sans-serif"],
        "vs3-sans": ["var(--vs3-font-sans)", "sans-serif"],
        "vs3-mono": ["var(--vs3-font-mono)", "monospace"]
      },
      maxWidth: {
        content: "1088px",
        prose: "680px",
        "vs3-content": "var(--vs3-layout-container)",
        "vs3-prose": "var(--vs3-layout-prose)"
      },
      letterSpacing: {
        "display-tight": "-0.02em",
        "head-tight": "-0.01em",
        eyebrow: "0.18em"
      },
      borderRadius: {
        DEFAULT: "var(--radius-md)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        pill: "var(--radius-pill, 999px)",
        "vs3-sm": "var(--vs3-radius-sm)",
        "vs3-md": "var(--vs3-radius-md)",
        "vs3-lg": "var(--vs3-radius-lg)",
        "vs3-xl": "var(--vs3-radius-xl)",
        "vs3-2xl": "var(--vs3-radius-2xl)",
        "vs3-pill": "var(--vs3-radius-pill)"
      },
      fontSize: {
        display: ["var(--text-display-size)", { lineHeight: "var(--text-display-lh)" }],
        h1: ["var(--text-h1-size)", { lineHeight: "var(--text-h1-lh)" }],
        h2: ["var(--text-h2-size)", { lineHeight: "var(--text-h2-lh)" }],
        h3: ["var(--text-h3-size)", { lineHeight: "var(--text-h3-lh)" }],
        h4: ["var(--text-h4-size)", { lineHeight: "var(--text-h4-lh)" }],
        "display-sm": ["var(--text-display-size-sm)", { lineHeight: "var(--text-display-lh)" }],
        "h1-sm": ["var(--text-h1-size-sm)", { lineHeight: "var(--text-h1-lh)" }],
        "h2-sm": ["var(--text-h2-size-sm)", { lineHeight: "var(--text-h2-lh)" }],
        "h3-sm": ["var(--text-h3-size-sm)", { lineHeight: "var(--text-h3-lh)" }],
        body: ["var(--text-body-size)", { lineHeight: "var(--text-body-lh)" }],
        "body-sm": ["var(--text-body-sm-size)", { lineHeight: "var(--text-body-sm-lh)" }],
        caption: ["var(--text-caption-size)", { lineHeight: "var(--text-caption-lh)" }],
        eyebrow: ["var(--text-eyebrow-size)", { lineHeight: "var(--text-eyebrow-lh)" }],
        "vs3-display": ["var(--vs3-type-display-size)", { lineHeight: "var(--vs3-type-display-lh)" }],
        "vs3-h1": ["var(--vs3-type-h1-size)", { lineHeight: "var(--vs3-type-h1-lh)" }],
        "vs3-h2": ["var(--vs3-type-h2-size)", { lineHeight: "var(--vs3-type-h2-lh)" }],
        "vs3-h3": ["var(--vs3-type-h3-size)", { lineHeight: "var(--vs3-type-h3-lh)" }],
        "vs3-lead": ["var(--vs3-type-lead-size)", { lineHeight: "var(--vs3-type-lead-lh)" }],
        "vs3-body": ["var(--vs3-type-body-size)", { lineHeight: "var(--vs3-type-body-lh)" }],
        "vs3-body-sm": ["var(--vs3-type-body-sm-size)", { lineHeight: "var(--vs3-type-body-sm-lh)" }],
        "vs3-caption": ["var(--vs3-type-caption-size)", { lineHeight: "var(--vs3-type-caption-lh)" }],
        "vs3-eyebrow": ["var(--vs3-type-eyebrow-size)", { lineHeight: "var(--vs3-type-eyebrow-lh)" }],
        "vs3-stat": ["var(--vs3-type-stat-size)", { lineHeight: "var(--vs3-type-stat-lh)" }]
      },
      boxShadow: {
        "card-rest": "var(--shadow-card-rest)",
        "card-hover": "var(--shadow-card-hover)",
        "card-feature": "var(--shadow-card-feature)",
        "nav-card": "var(--shadow-nav-card)",
        "btn-primary": "var(--shadow-btn-primary-rest)",
        "btn-primary-hover": "var(--shadow-btn-primary-hover)",
        "btn-secondary": "var(--shadow-btn-secondary-rest)",
        "btn-secondary-hover": "var(--shadow-btn-secondary-hover)",
        "chip-blue": "var(--shadow-chip-blue)",
        "chip-lime": "var(--shadow-chip-lime)",
        "glass-card": "var(--shadow-glass-card)",
        nav: "var(--shadow-nav)",
        "vs3-card": "var(--vs3-shadow-card)",
        "vs3-card-hover": "var(--vs3-shadow-card-hover)",
        "vs3-nav": "var(--vs3-shadow-nav)"
      },
      transitionTimingFunction: {
        "out-quart": "var(--ease-out-quart)",
        "out-expo": "var(--ease-out-expo)"
      },
      transitionDuration: {
        fast: "200ms",
        DEFAULT: "400ms",
        slow: "700ms",
        reveal: "900ms"
      },
      animation: {
        "fade-up": "fade-up 0.7s var(--ease-out-quart) forwards"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
