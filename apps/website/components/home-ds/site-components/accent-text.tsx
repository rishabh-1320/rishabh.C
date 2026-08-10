/**
 * Renders `text` with the first occurrence of `accent` painted in the accent
 * colour — the headline emphasis used across the home sections ("clarity",
 * "systems", "end to end", …). Case-insensitive match; renders plain text when
 * the accent word is absent.
 */
export function AccentText({ text, accent }: { text: string; accent: string }) {
  const idx = accent ? text.toLowerCase().indexOf(accent.toLowerCase()) : -1;
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <span className="text-ds-accent">{text.slice(idx, idx + accent.length)}</span>
      {text.slice(idx + accent.length)}
    </>
  );
}
