/**
 * @packages/ds-ui — the canonical design system.
 *
 * The complete build vocabulary: token-only primitives + the token source.
 * Feature sections import ONLY from here (plus next/link + React). They never
 * set raw colors, sizes, radii, or font values; those live exclusively in these
 * primitives, which consume only the `--ds-*` tokens. The drift-lint script
 * (apps/website/scripts/check-drift-ds.mjs) enforces this.
 */
export { tokensToCss, dsTokens } from "./tokens";
export { cn } from "./cn";
export { Text } from "./text";
export type { TextVariant } from "./text";
export { Button, ButtonLink } from "./button";
export { Tag } from "./tag";
export type { TagColor } from "./tag";
export { Section, Container, Stack } from "./layout";
export { TextLink } from "./misc";
export { InlineCode } from "./inline-code";
export { Gallery } from "./gallery";
export type { GalleryImage } from "./gallery";
