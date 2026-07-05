import { Text } from "@packages/ds-ui";

/**
 * Splits the hero headline into alternating "quiet connector" / "dark
 * emphasis" spans, matching Figma's manual span-by-span coloring of
 * "I design {B2B enterprise tools} where {clarity} is the only metric...".
 * `emphasize` is matched case-insensitively and in order; any remainder stays
 * in the quiet tone.
 */
function EmphasizedHeadline({ text, emphasize }: { text: string; emphasize: string[] }) {
  let rest = text;
  const parts: { text: string; strong: boolean }[] = [];

  for (const phrase of emphasize) {
    const idx = rest.toLowerCase().indexOf(phrase.toLowerCase());
    if (idx === -1) continue;
    if (idx > 0) parts.push({ text: rest.slice(0, idx), strong: false });
    parts.push({ text: rest.slice(idx, idx + phrase.length), strong: true });
    rest = rest.slice(idx + phrase.length);
  }
  if (rest) parts.push({ text: rest, strong: false });

  return (
    <>
      {parts.map((p, i) => (
        <span key={i} className={p.strong ? "text-ds-heading" : undefined}>
          {p.text}
        </span>
      ))}
    </>
  );
}

export function HeroTitle({
  name,
  eyebrow,
  headline,
  emphasize
}: {
  name: string;
  eyebrow: string;
  headline: string;
  emphasize: string[];
}) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <Text variant="display-script">
        {name}
        <span className="text-ds-accent">.</span>
      </Text>
      <Text variant="hp-eyebrow-loose">{eyebrow}</Text>
      <Text variant="hp-headline" as="p" className="mx-auto mt-3 w-full max-w-3xl text-balance">
        <EmphasizedHeadline text={headline} emphasize={emphasize} />
      </Text>
    </div>
  );
}
