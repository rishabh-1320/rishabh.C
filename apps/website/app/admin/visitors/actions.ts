"use server";

import { revalidatePath } from "next/cache";
import { addExclusion, removeExclusion } from "@/lib/visitor-log";

/**
 * "This is me" on a row. Tagging the visitor id covers that exact browser
 * forever; tagging the /16 prefix covers every address the ISP hands that
 * network next, which is the part a cookie could never do.
 */
export async function markAsMine(formData: FormData) {
  const visitorId = String(formData.get("visitorId") ?? "");
  const ip = String(formData.get("ip") ?? "");
  const scope = String(formData.get("scope") ?? "visitor");
  const label = String(formData.get("label") ?? "") || null;

  if (scope === "network" && ip) {
    const prefix = ip.includes(".") ? ip.split(".").slice(0, 2).join(".") + "." : ip;
    await addExclusion("ip_prefix", prefix, label ? `Network of ${label}` : "Tagged from dashboard");
  } else if (visitorId && visitorId !== "null") {
    await addExclusion("visitor_id", visitorId, label ? `Device: ${label}` : "Tagged from dashboard");
  } else if (ip) {
    await addExclusion("ip", ip, "Tagged from dashboard (no visitor id on this row)");
  }

  revalidatePath("/admin/visitors");
}

export async function unmark(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  if (id) await removeExclusion(id);
  revalidatePath("/admin/visitors");
}
