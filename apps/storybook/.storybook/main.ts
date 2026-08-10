import type { StorybookConfig } from "@storybook/nextjs-vite";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import tailwindConfig from "../tailwind.config.ts";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string) {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}

const websiteRoot = join(dirname(fileURLToPath(import.meta.url)), "../../website");

// Stories are co-located next to the components they document, in
// apps/website and packages/ds-ui — not centralized in this package.
const config: StorybookConfig = {
  stories: [
    "../../website/components/**/*.stories.@(ts|tsx)",
    "../../../packages/ds-ui/src/**/*.stories.@(ts|tsx)"
  ],
  addons: [
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-vitest"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@storybook/addon-mcp")
  ],
  framework: getAbsolutePath("@storybook/nextjs-vite"),
  staticDirs: [join(websiteRoot, "public")],
  async viteFinal(viteConfig) {
    viteConfig.resolve ??= {};
    viteConfig.resolve.alias = {
      ...(viteConfig.resolve.alias ?? {}),
      "@": websiteRoot
    };
    // Explicit, rather than relying on postcss.config.mjs auto-discovery —
    // Vite's builder wasn't picking it up (globals.css physically lives in
    // apps/website, several directories away from this config file).
    viteConfig.css ??= {};
    viteConfig.css.postcss = {
      plugins: [tailwindcss(tailwindConfig), autoprefixer()]
    };
    return viteConfig;
  }
};
export default config;
