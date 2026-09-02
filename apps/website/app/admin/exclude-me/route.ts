import { NextResponse, type NextRequest } from "next/server";
import { addExclusion, VISITOR_COOKIE, VISITOR_EXCLUDE_COOKIE, VISITOR_TTL_SECONDS } from "@/lib/visitor-log";

/**
 * Visiting this (Basic-Auth gated, same as the rest of /admin) marks the current
 * browser as the owner's. It now does two things rather than one:
 *
 *   1. Records a server-side exclusion keyed on the visitor id and the network
 *      prefix. This is retroactive — every row this browser already wrote is
 *      reclassified — and it survives clearing cookies, because the /16 rule
 *      keeps matching after the ISP rotates the address.
 *   2. Still sets the original opt-out cookie, which suppresses the insert
 *      entirely so those rows never get written in the first place.
 *
 * Layer 2 alone was the old behaviour, and it kept missing devices: a cookie
 * lives in exactly one browser on one origin and dies on every cache clear.
 */
export async function GET(request: NextRequest) {
  const visitorId = request.cookies.get(VISITOR_COOKIE)?.value;
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip");

  if (visitorId) await addExclusion("visitor_id", visitorId, "Self-tagged via /admin/exclude-me");
  if (ip && ip.includes(".")) {
    await addExclusion("ip_prefix", ip.split(".").slice(0, 2).join(".") + ".", "Network seen at /admin/exclude-me");
  }

  const response = NextResponse.redirect(new URL("/", request.url));
  response.cookies.set(VISITOR_EXCLUDE_COOKIE, "1", {
    maxAge: VISITOR_TTL_SECONDS,
    path: "/",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax"
  });
  return response;
}
