import { NextResponse, type NextRequest } from "next/server";
import { VISITOR_EXCLUDE_COOKIE } from "@/lib/visitor-log";

// Undoes /admin/exclude-me — clears the opt-out cookie so this browser's
// visits start counting again.
export function GET(request: NextRequest) {
  const response = NextResponse.redirect(new URL("/", request.url));
  response.cookies.delete(VISITOR_EXCLUDE_COOKIE);
  return response;
}
