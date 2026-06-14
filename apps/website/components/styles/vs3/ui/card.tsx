import type { ReactNode } from "react";
import { cn } from "./cn";

type Surface = "raised" | "tint" | "sunken" | "outline";
type Pad = "none" | "sm" | "md" | "lg";
type Radius = "rounded-vs3-lg" | "rounded-vs3-xl" | "rounded-vs3-2xl";

const SURFACE: Record<Surface, string> = {
  raised: "bg-vs3-surface-raised border border-vs3-border-subtle shadow-vs3-card",
  tint: "bg-vs3-surface-tint border border-vs3-border-subtle",
  sunken: "bg-vs3-surface-sunken border border-vs3-border-subtle",
  outline: "bg-transparent border border-vs3-border"
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
  radius = "rounded-vs3-xl",
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
          "transition-[transform,box-shadow] duration-[var(--vs3-dur-default)] ease-[var(--vs3-ease-out-quart)] hover:-translate-y-1 hover:shadow-vs3-card-hover",
        className
      )}
    >
      {children}
    </div>
  );
}
