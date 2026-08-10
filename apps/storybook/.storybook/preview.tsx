import type { Preview } from "@storybook/nextjs-vite";
import React from "react";
import { tokensToCss } from "@packages/ds-ui";
// Reuse the site's real global stylesheet (fonts, legacy theme vars, the
// canonical `.ds-root` surface class, keyframes) instead of duplicating it.
import "../../website/app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    a11y: {
      test: "todo"
    }
  },
  decorators: [
    (Story) => (
      <>
        {/* Canonical design-system tokens (--ds-*) — same injection app/layout.tsx
            does on :root in production. */}
        <style dangerouslySetInnerHTML={{ __html: tokensToCss() }} />
        <div className="ds-root" style={{ minHeight: "100vh", padding: "2rem" }}>
          <Story />
        </div>
      </>
    )
  ]
};
export default preview;
