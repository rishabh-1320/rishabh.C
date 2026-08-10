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
 */
function ColumnShell({ children, className }: { children?: ReactNode; className?: string }) {
  return (
    <div className={cn("flex flex-col items-start p-4", className)}>
      <div className="min-h-px w-full flex-1">{children}</div>
    </div>
  );
}

export function LeftColumn({ children, className }: { children?: ReactNode; className?: string }) {
  return (
    <ColumnShell className={cn("w-[300px] shrink-0", className)}>
      {children}
    </ColumnShell>
  );
}

export function ContentColumn({ children, className }: { children?: ReactNode; className?: string }) {
  return (
    <ColumnShell className={cn("min-w-0 flex-1", className)}>
      {children}
    </ColumnShell>
  );
}

export function RightColumn({ children, className }: { children?: ReactNode; className?: string }) {
  return (
    <ColumnShell className={cn("w-[300px] shrink-0", className)}>
      {children}
    </ColumnShell>
  );
}

export function ThreeColumnBlock({
  children,
  left,
  right,
  columns = true,
  className
}: {
  children?: ReactNode;
  left?: ReactNode;
  right?: ReactNode;
  columns?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("flex items-start justify-center px-12 py-[76px]", className)}>
      {columns ? (
        <div className="flex min-w-0 flex-1 items-start justify-center">
          <LeftColumn>{left}</LeftColumn>
          <ContentColumn>{children}</ContentColumn>
          <RightColumn>{right}</RightColumn>
        </div>
      ) : (
        <div className="min-w-0 flex-1">{children}</div>
      )}
    </div>
  );
}
