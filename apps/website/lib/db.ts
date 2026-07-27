import { neon } from "@neondatabase/serverless";

// HTTP-based driver (not a TCP client) — the only kind that works from Edge
// Middleware, which has no raw socket access. Reused across invocations
// within the same edge/serverless instance.
export const sql = neon(process.env.DATABASE_URL!);
