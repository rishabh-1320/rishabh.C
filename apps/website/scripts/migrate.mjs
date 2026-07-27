// One-off/CI migration runner: applies db/migrations/*.sql in order,
// tracking what's already run in a `_migrations` table so re-running is
// always safe. Requires DATABASE_URL — run via `pnpm db:migrate`, which
// loads apps/website/.env.local for the connection string.
import { neon } from "@neondatabase/serverless";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const sql = neon(process.env.DATABASE_URL);
const migrationsDir = path.join(import.meta.dirname, "..", "db", "migrations");

async function main() {
  await sql`CREATE TABLE IF NOT EXISTS _migrations (
    name TEXT PRIMARY KEY,
    applied_at TIMESTAMPTZ NOT NULL DEFAULT now()
  )`;

  const applied = new Set((await sql`SELECT name FROM _migrations`).map((row) => row.name));
  const files = (await readdir(migrationsDir)).filter((f) => f.endsWith(".sql")).sort();

  for (const file of files) {
    if (applied.has(file)) {
      console.log(`skip  ${file} (already applied)`);
      continue;
    }
    const content = await readFile(path.join(migrationsDir, file), "utf8");
    const statements = content.split(";").map((s) => s.trim()).filter(Boolean);
    for (const statement of statements) {
      await sql.query(statement);
    }
    await sql`INSERT INTO _migrations (name) VALUES (${file})`;
    console.log(`apply ${file}`);
  }

  console.log("Migrations up to date.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
