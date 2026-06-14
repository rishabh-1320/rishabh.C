import { cn } from "./cn";

export type GalleryImage = { src: string; alt: string };

/**
 * Gallery — a cluster of distinct images (About section). Each image is its
 * own shot; the grid just arranges them on a shared radius + gap.
 */
export function Gallery({ images, className }: { images: GalleryImage[]; className?: string }) {
  return (
    <div className={cn("grid grid-cols-2 gap-3 sm:grid-cols-3", className)}>
      {images.map((img, i) => (
        <div
          key={img.src}
          className={cn(
            "overflow-hidden rounded-ds-lg bg-ds-surface-sunken",
            i === 0 && "col-span-2 sm:col-span-1 sm:row-span-2"
          )}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img.src}
            alt={img.alt}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
