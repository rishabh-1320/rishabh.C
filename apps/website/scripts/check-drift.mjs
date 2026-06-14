#!/usr/bin/env node
/**
 * Drift guard for the Signature design system.
 *
 * Feature sections must build ONLY from primitives + tokens. They may never
 * hardcode a color or pixel value — those belong inside primitives, which
 * consume design tokens. This script fails CI/commits if a feature file
 * contains a raw hex color, an rgb()/hsl() literal, or a raw `px` value.
 *
 * Exempt (allowed to reference tokens / raw values directly):
 *   - the primitive library:      components/styles/signature/ui/**
 *   - the styleguide (docs):       app/styles/signature/styleguide/**
 *   - token definitions live in CSS (globals.css) and are not scanned.
 *
 * Run:  npm run lint:drift   (from apps/website)
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const here = fileURLToPath(new URL(".", import.meta.url));
const appRoot = join(here, "..");

const SCAN = [
  "components/styles/signature/sections",
  "components/styles/signature/signature-home.tsx",
  "app/styles/signature/page.tsx"
];

const RULES = [
  { name: "raw hex color", re: /#[0-9a-fA-F]{3,8}\b/ },
  { name: "raw rgb()/rgba() literal", re: /\brgba?\(/ },
  { name: "raw hsl() literal", re: /\bhsl/ },
  // raw px value — but allow it only when part of a var() fallback, which it never is here
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
    for (const entry of readdirSync(full)) {
      out.push(...walk(join(path, entry)));
    }
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
    // ignore comment-only lines
    const trimmed = line.trim();
    if (trimmed.startsWith("//") || trimmed.startsWith("*")) return;
    for (const rule of RULES) {
      if (rule.re.test(line)) {
        violations.push({
          file: relative(appRoot, file),
          line: i + 1,
          rule: rule.name,
          text: trimmed.slice(0, 100)
        });
      }
    }
  });
}

if (violations.length) {
  console.error(`\n✗ Drift guard found ${violations.length} violation(s):\n`);
  for (const v of violations) {
    console.error(`  ${v.file}:${v.line}  [${v.rule}]`);
    console.error(`    ${v.text}`);
  }
  console.error(
    "\nFeature sections must use primitives + token utilities only.\n" +
      "Move the raw value into a primitive or a token in globals.css.\n"
  );
  process.exit(1);
}

console.log(`✓ Drift guard passed — ${files.length} feature file(s) clean, tokens-only.`);
