import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://rishabh-c.vercel.app";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // The rendered case-study template reference — placeholder copy, not content.
      disallow: ["/casestudy/template"]
    },
    sitemap: `${base}/sitemap.xml`
  };
}
