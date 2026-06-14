#!/usr/bin/env node
/**
 * Drift guard for the canonical design system (ds).
 *
 * Feature sections must build ONLY from the @packages/ds-ui primitives + the
 * `ds-*` token utilities. They may never hardcode a colour, font, or pixel
 * value. This script fails if a scanned file contains a raw hex/rgb()/hsl()
 * colour, a raw `px` value, a literal `font-family`, or a `font-[…]` arbitrary
 * font utility.
 *
 * Scanned (the canonical authoring surface):
 *   - components/home-ds/sections/**   (homepage feature sections)
 *   - components/home-ds/home.tsx      (homepage composition)
 *
 * NOT scanned (allowed to hold tokenised raw values by design):
 *   - the primitive library + token source live in packages/ds-ui (outside this app)
 *   - the styleguide (docs), chrome, and case-study pages have bespoke layout needs
 *
 * Run:  npm run lint:drift:ds   (from apps/website)
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const here = fileURLToPath(new URL(".", import.meta.url));
const appRoot = join(here, "..");

const SCAN = [
  "components/home-ds/sections",
  "components/home-ds/home.tsx"
];

const RULES = [
  { name: "raw hex color", re: /#[0-9a-fA-F]{3,8}\b/ },
  { name: "raw rgb()/rgba() literal", re: /\brgba?\(/ },
  { name: "raw hsl() literal", re: /\bhsl/ },
  { name: "raw px value", re: /\b\d+(\.\d+)?px\b/ },
  { name: "literal font-family", re: /font-family\s*:/ },
  { name: "arbitrary font utility (use font-ds-*)", re: /\bfont-\[/ }
];

function walk(path) {
  const out = [];
  const full = join(appRoot, path);
  let st;
  try {
    st = statSync(full);
  } catch {
    return out;
  }
  if (st.isDirectory()) {
    for (const entry of readdirSync(full)) out.push(...walk(join(path, entry)));
  } else if (/\.(tsx?|jsx?)$/.test(full)) {
    out.push(full);
  }
  return out;
}

const files = SCAN.flatMap(walk);
const violations = [];

for (const file of files) {
  const lines = readFileSync(file, "utf8").split("\n");
  lines.forEach((line, i) => {
    const trimmed = line.trim();
    if (trimmed.startsWith("//") || trimmed.startsWith("*")) return;
    for (const rule of RULES) {
      if (rule.re.test(line)) {
        violations.push({ file: relative(appRoot, file), line: i + 1, rule: rule.name, text: trimmed.slice(0, 100) });
      }
    }
  });
}

if (violations.length) {
  console.error(`\n✗ ds drift guard found ${violations.length} violation(s):\n`);
  for (const v of violations) {
    console.error(`  ${v.file}:${v.line}  [${v.rule}]`);
    console.error(`    ${v.text}`);
  }
  console.error(
    "\nFeature sections must use @packages/ds-ui primitives + ds-* token utilities only.\n" +
      "Move the raw value into a primitive or a token in packages/ds-ui/src/tokens.ts.\n"
  );
  process.exit(1);
}

console.log(`✓ ds drift guard passed — ${files.length} feature file(s) clean, tokens-only.`);
