import type { Config } from "tailwindcss";
import baseConfig from "../website/tailwind.config.ts";

// Reuses the website's actual theme (every `ds-*` token mapping) so the two
// never drift apart — only `content` differs, pointed at this package's
// relative paths into the real component locations.
const config: Config = {
  ...baseConfig,
  content: [
    "../website/app/**/*.{ts,tsx}",
    "../website/components/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}",
    "../../packages/ds-ui/src/**/*.{ts,tsx}",
    "./.storybook/**/*.{ts,tsx}"
  ]
};

export default config;
