#!/usr/bin/env node
/**
 * Drift guard for the vs3 design system.
 *
 * Feature sections must build ONLY from primitives + the isolated `--vs3-*`
 * tokens. They may never hardcode a color or pixel value. Fails if a feature
 * file contains a raw hex color, rgb()/hsl() literal, or raw `px` value.
 *
 * Exempt (allowed raw values): ui/**, webgl/** (3D coords + material colors),
 * tokens.ts, images.ts, styleguide/**, layout.tsx.
 *
 * Run:  npm run lint:drift:vs3   (from apps/website)
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const here = fileURLToPath(new URL(".", import.meta.url));
const appRoot = join(here, "..");

const SCAN = [
  "components/styles/vs3/sections",
  "components/styles/vs3/vs3-home.tsx",
  "app/vs3/page.tsx"
];

const RULES = [
  { name: "raw hex color", re: /#[0-9a-fA-F]{3,8}\b/ },
  { name: "raw rgb()/rgba() literal", re: /\brgba?\(/ },
  { name: "raw hsl() literal", re: /\bhsl/ },
  { name: "raw px value", re: /\b\d+(\.\d+)?px\b/ }
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
  console.error(`\n✗ vs3 drift guard found ${violations.length} violation(s):\n`);
  for (const v of violations) {
    console.error(`  ${v.file}:${v.line}  [${v.rule}]`);
    console.error(`    ${v.text}`);
  }
  console.error(
    "\nFeature sections must use primitives + vs3 token utilities only.\n" +
      "Move the raw value into a primitive or a token in components/styles/vs3/tokens.ts.\n"
  );
  process.exit(1);
}

console.log(`✓ vs3 drift guard passed — ${files.length} feature file(s) clean, tokens-only.`);
