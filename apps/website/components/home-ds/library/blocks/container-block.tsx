import type { ReactNode } from "react";
import { cn } from "@packages/ds-ui";

/**
 * Figma "container-block" — the outer full-width wrapper (px-120 on desktop),
 * optionally bordered top+bottom. Always wraps exactly one ContentBlock.
 */
export function ContainerBlock({
  children,
  borderLines = false,
  className
}: {
  children: ReactNode;
  borderLines?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("flex w-full justify-center px-6 md:px-[120px]", borderLines && "border-y border-ds-hairline", className)}>
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
