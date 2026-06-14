import type { ReactNode } from "react";
import { cn } from "./cn";

type Surface = "raised" | "cream" | "sunken" | "outline";
type Pad = "none" | "sm" | "md" | "lg";
type Radius = "rounded-ds-lg" | "rounded-ds-xl" | "rounded-ds-2xl";

const SURFACE: Record<Surface, string> = {
  raised: "bg-ds-surface-raised border border-ds-border-subtle shadow-ds-card",
  cream: "bg-ds-surface-cream border border-ds-border-subtle",
  sunken: "bg-ds-surface-sunken border border-ds-border-subtle",
  outline: "bg-transparent border border-ds-border"
};

const PAD: Record<Pad, string> = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8"
};

export function Card({
  children,
  surface = "raised",
  pad = "md",
  radius = "rounded-ds-xl",
  hover = false,
  className
}: {
  children: ReactNode;
  surface?: Surface;
  pad?: Pad;
  radius?: Radius;
  hover?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        radius,
        SURFACE[surface],
        PAD[pad],
        hover &&
          "transition-[transform,box-shadow] duration-[var(--ds-dur-default)] ease-[var(--ds-ease-out-quart)] hover:-translate-y-1 hover:shadow-ds-card-hover",
        className
      )}
    >
      {children}
    </div>
  );
}
