import type { ReactNode } from "react";
import { cn } from "./cn";

type Surface = "raised" | "cream" | "sunken" | "outline";
type Pad = "none" | "sm" | "md" | "lg";

const SURFACE: Record<Surface, string> = {
  raised: "bg-surface-raised border border-[color:var(--border-subtle)] shadow-card-rest",
  cream: "bg-surface-cream border border-[color:var(--border-subtle)]",
  sunken: "bg-surface-soft border border-[color:var(--border-subtle)]",
  outline: "bg-transparent border border-[color:var(--border-default)]"
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
  radius = "rounded-xl",
  hover = false,
  className
}: {
  children: ReactNode;
  surface?: Surface;
  pad?: Pad;
  radius?: "rounded-lg" | "rounded-xl" | "rounded-2xl";
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
          "transition-[transform,box-shadow] duration-[var(--dur-default)] ease-[var(--ease-out-quart)] hover:-translate-y-1 hover:shadow-card-hover",
        className
      )}
    >
      {children}
    </div>
  );
}
