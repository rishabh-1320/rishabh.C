import type { ReactNode } from "react";
import { Text } from "@packages/ds-ui";

/**
 * One step in a guided-flow breakdown (e.g. Chestnut's 4-step variable
 * creation). Extracted from an inline component so the 8px/hairline/Inter
 * treatment can't drift between case studies that use it.
 */
export function NumberedStep({ n, title, children }: { n: number; title: string; children: ReactNode }) {
  return (
    <div className="relative">
      <div className="absolute -left-14 top-0 flex h-[38px] w-[38px] items-center justify-center rounded-full bg-ds-accent font-ds-inter text-base font-semibold text-white ring-4 ring-white md:-left-16 md:h-[42px] md:w-[42px]">
        {n}
      </div>

      <div className="rounded-ds-card border border-ds-hairline bg-ds-surface-paper p-5 md:p-6">
        <Text variant="hp-subtitle" as="h4">
          {title}
        </Text>
        <div className="mt-2">{children}</div>
      </div>
    </div>
  );
}
