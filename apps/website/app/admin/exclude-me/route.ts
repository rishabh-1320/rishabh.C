import { NextResponse, type NextRequest } from "next/server";
import { VISITOR_EXCLUDE_COOKIE } from "@/lib/visitor-log";

// Visiting this (Basic-Auth gated, same as the rest of /admin) sets a
// long-lived cookie the middleware checks before logging a visit — lets the
// site owner browse their own site without polluting the visitor data.
// Cookie-based rather than IP-based since IPs change across networks/devices;
// this just needs re-visiting once per browser/device.
export function GET(request: NextRequest) {
  const response = NextResponse.redirect(new URL("/", request.url));
  response.cookies.set(VISITOR_EXCLUDE_COOKIE, "1", {
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax"
  });
  return response;
}
