// Retention / cleanup for visitor_logs. Run via `pnpm db:prune -- [options]`.
//
//   --localhost        delete rows written by a local dev server
//   --bots             delete rows classified as bots
//   --older-than=365   delete rows older than N days
//   --apply            actually delete (without it, this only reports)
//
// Defaults to a dry run because the classification flags already hide these
// rows from the dashboard — deleting is only about disk, never about accuracy.
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL);
const args = process.argv.slice(2);
const has = (f) => args.includes(f);
const olderThan = Number(args.find((a) => a.startsWith("--older-than="))?.split("=")[1] ?? 0);
const apply = has("--apply");

const clauses = [];
if (has("--localhost")) clauses.push("is_local = true");
if (has("--bots")) clauses.push("is_bot = true");
if (olderThan > 0) clauses.push(`created_at < now() - interval '${olderThan} days'`);

if (clauses.length === 0) {
  console.log("Nothing selected. Pass --localhost, --bots and/or --older-than=N.");
  process.exit(0);
}

const where = clauses.join(" OR ");
const [{ count }] = await sql.query(`SELECT COUNT(*)::int AS count FROM visitor_logs WHERE ${where}`, []);

if (!apply) {
  console.log(`Dry run: ${count} rows match (${where}). Re-run with --apply to delete.`);
  process.exit(0);
}

await sql.query(`DELETE FROM visitor_logs WHERE ${where}`, []);
console.log(`Deleted ${count} rows.`);
