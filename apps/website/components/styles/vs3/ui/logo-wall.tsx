import { cn } from "./cn";
import { Text } from "./text";

/** LogoWall — a row/grid of company lettermarks on a shared rhythm. */
export function LogoWall({ names, className }: { names: string[]; className?: string }) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-px overflow-hidden rounded-vs3-lg border border-vs3-border bg-vs3-border sm:grid-cols-3 md:grid-cols-5",
        className
      )}
    >
      {names.map((name) => (
        <div
          key={name}
          className="flex items-center justify-center bg-vs3-surface-page px-4 py-8"
        >
          <Text variant="h3" as="span" className="text-vs3-ink-muted">
            {name}
          </Text>
        </div>
      ))}
    </div>
  );
}
