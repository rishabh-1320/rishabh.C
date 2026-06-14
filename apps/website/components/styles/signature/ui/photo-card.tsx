"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "./cn";
import { Text } from "./text";

/**
 * PhotoCard — the polaroid. Cream frame, image, handwritten caption.
 * Optionally draggable (spring-back) as a delight detail; drag disables
 * under prefers-reduced-motion and on coarse pointers.
 */
export function PhotoCard({
  src,
  alt,
  caption,
  tilt = -4,
  draggable = true,
  grayscale = true,
  className
}: {
  src: string;
  alt: string;
  caption?: string;
  tilt?: number;
  draggable?: boolean;
  grayscale?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [drag, setDrag] = useState({ x: 0, y: 0, active: false });
  const start = useRef({ x: 0, y: 0 });

  // Compute after mount so server and first client render agree (no hydration mismatch).
  const [canDrag, setCanDrag] = useState(false);
  useEffect(() => {
    if (!draggable) return;
    setCanDrag(
      window.matchMedia("(pointer: fine)").matches &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, [draggable]);

  const onPointerDown = (e: React.PointerEvent) => {
    if (!canDrag) return;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    start.current = { x: e.clientX - drag.x, y: e.clientY - drag.y };
    setDrag((d) => ({ ...d, active: true }));
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.active) return;
    setDrag({ x: e.clientX - start.current.x, y: e.clientY - start.current.y, active: true });
  };
  const onPointerUp = () => setDrag({ x: 0, y: 0, active: false });

  return (
    <div
      ref={ref}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      style={{
        transform: `translate(${drag.x}px, ${drag.y}px) rotate(${tilt}deg)`,
        transition: drag.active ? "none" : "transform var(--dur-slow) var(--ease-out-expo)",
        touchAction: canDrag ? "none" : undefined,
        cursor: canDrag ? (drag.active ? "grabbing" : "grab") : "default"
      }}
      className={cn(
        "inline-flex w-[clamp(220px,28vw,320px)] flex-col gap-4 rounded-2xl bg-surface-cream p-4 pb-6 shadow-card-hover select-none",
        className
      )}
    >
      <div className="overflow-hidden rounded-xl bg-surface-muted">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          draggable={false}
          className={cn("aspect-[4/5] w-full object-cover", grayscale && "grayscale")}
        />
      </div>
      {caption && (
        <Text variant="script" as="span" className="text-center">
          {caption}
        </Text>
      )}
    </div>
  );
}
