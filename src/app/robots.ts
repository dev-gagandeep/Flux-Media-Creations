import { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/book-a-call",
    },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
