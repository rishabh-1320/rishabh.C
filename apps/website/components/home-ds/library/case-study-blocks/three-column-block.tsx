import type { ReactNode } from "react";
import { cn } from "@packages/ds-ui";

/**
 * Figma "content-block" (three-column variant) + "Left column"/"Content
 * column"/"Right Column" — the case-study reading layout, used for real
 * chapter content on the case-study pages. The standalone Figma symbols for
 * these show debug borders (#52525b outer, #120d0d per-column), but the
 * *real* page instances (e.g. node 480:4417) carry no border at all — those
 * colors were documentation-only scaffolding, confirmed by diffing the
 * symbol against a live instance. No borders here as a result.
 *
 * Dimensions are taken from the *instanced* columns inside content-block
 * (node 422:7135), not from the standalone column symbols (422:7113-5). The
 * symbols sit at w-368 on the canvas with no max-width; the instances — the
 * real usage — are w-350 / max-w-350 / min-w-280 with the content column
 * capped at max-w-900. Outer padding is 24px horizontal / 48px vertical — taken
 * from the instances in the assembled template (node 573:8093), which are all
 * `px-24 py-48`; the isolated symbol's uniform `p-24` is a canvas artifact, the
 * same symbol-vs-instance trap as the column widths below.
 *
 * Responsive: Figma only draws the 1200px desktop grid. Three fixed-ish columns
 * cannot fit a narrow viewport — with side columns pinned at 350px and
 * `shrink-0`, a 768px viewport left the *reading* column 24px wide (72px before
 * the Figma-exact widths landed, so this was a latent bug either way, not a new
 * one). Below `lg` the row therefore stacks and the columns go full-width. The
 * `lg` breakpoint is the narrowest that still fits 280 + 280 + a usable content
 * column inside the 24px outer padding.
 */
function ColumnShell({ children, className }: { children?: ReactNode; className?: string }) {
  return (
    <div className={cn("flex flex-col items-start p-3", className)}>
      <div className="min-h-px w-full flex-1">{children}</div>
    </div>
  );
}

export function LeftColumn({ children, className }: { children?: ReactNode; className?: string }) {
  return (
    <ColumnShell className={cn("w-full lg:w-[350px] lg:min-w-[280px] lg:max-w-[350px] lg:shrink-0", className)}>
      {children}
    </ColumnShell>
  );
}

export function ContentColumn({ children, className }: { children?: ReactNode; className?: string }) {
  return (
    <ColumnShell className={cn("w-full min-w-0 lg:max-w-[900px] lg:flex-1", className)}>
      {children}
    </ColumnShell>
  );
}

export function RightColumn({ children, className }: { children?: ReactNode; className?: string }) {
  return (
    <ColumnShell className={cn("w-full lg:w-[350px] lg:min-w-[280px] lg:max-w-[350px] lg:shrink-0", className)}>
      {children}
    </ColumnShell>
  );
}

export function ThreeColumnBlock({
  children,
  left,
  right,
  columns = true,
  className,
  leftClassName,
  contentClassName,
  rightClassName
}: {
  children?: ReactNode;
  left?: ReactNode;
  right?: ReactNode;
  columns?: boolean;
  className?: string;
  leftClassName?: string;
  contentClassName?: string;
  rightClassName?: string;
}) {
  return (
    <div className={cn("flex items-start justify-center px-6 py-12", className)}>
      {columns ? (
        <div className="flex min-w-0 flex-1 flex-col items-start lg:flex-row lg:justify-center">
          <LeftColumn className={leftClassName}>{left}</LeftColumn>
          <ContentColumn className={contentClassName}>{children}</ContentColumn>
          <RightColumn className={rightClassName}>{right}</RightColumn>
        </div>
      ) : (
        <div className="min-w-0 flex-1">{children}</div>
      )}
    </div>
  );
}
