import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://port-26.vercel.app";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Quarantined experiments + the private coupon page are noindex at the
      // route level too; disallow here as belt-and-suspenders.
      disallow: ["/styles/", "/vs2", "/vs3/", "/styleguide", "/therapist-coupon-ops-b7k3m9"]
    },
    sitemap: `${base}/sitemap.xml`
  };
}
