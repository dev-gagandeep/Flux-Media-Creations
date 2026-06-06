import { MetadataRoute } from "next";
import { BLOG_POSTS, LOCATION_PAGES, SERVICE_PAGES, SITE } from "@/lib/constants";

const DEFAULT_LAST_MODIFIED = new Date("2026-05-07");
const BLOG_LAST_MODIFIED = new Date("2026-05-08");
const SERVICE_LAST_MODIFIED = new Date("2026-05-09");
const LOCATION_LAST_MODIFIED = new Date("2026-05-07");

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { url: SITE.url, priority: 1.0, changeFrequency: "weekly" as const, lastModified: DEFAULT_LAST_MODIFIED },
    { url: `${SITE.url}/about`, priority: 0.8, changeFrequency: "monthly" as const, lastModified: DEFAULT_LAST_MODIFIED },
    { url: `${SITE.url}/services`, priority: 0.9, changeFrequency: "monthly" as const, lastModified: SERVICE_LAST_MODIFIED },
    { url: `${SITE.url}/healthcare-website-crm`, priority: 0.9, changeFrequency: "monthly" as const, lastModified: SERVICE_LAST_MODIFIED },
    { url: `${SITE.url}/locations`, priority: 0.8, changeFrequency: "weekly" as const, lastModified: LOCATION_LAST_MODIFIED },
    { url: `${SITE.url}/industries`, priority: 0.8, changeFrequency: "monthly" as const, lastModified: DEFAULT_LAST_MODIFIED },
    { url: `${SITE.url}/process`, priority: 0.7, changeFrequency: "monthly" as const, lastModified: DEFAULT_LAST_MODIFIED },
    { url: `${SITE.url}/blog`, priority: 0.8, changeFrequency: "weekly" as const, lastModified: BLOG_LAST_MODIFIED },
    { url: `${SITE.url}/blog/healthcare-website-design-clinic-conversions`, priority: 0.75, changeFrequency: "monthly" as const, lastModified: BLOG_LAST_MODIFIED },
    { url: `${SITE.url}/contact`, priority: 0.9, changeFrequency: "monthly" as const, lastModified: DEFAULT_LAST_MODIFIED },
    { url: `${SITE.url}/web-development-ai-automation-new-york`, priority: 0.8, changeFrequency: "monthly" as const, lastModified: LOCATION_LAST_MODIFIED },
    { url: `${SITE.url}/web-development-automation-new-jersey`, priority: 0.8, changeFrequency: "monthly" as const, lastModified: LOCATION_LAST_MODIFIED },
    { url: `${SITE.url}/local-seo-new-jersey`, priority: 0.85, changeFrequency: "monthly" as const, lastModified: SERVICE_LAST_MODIFIED },
    { url: `${SITE.url}/local-seo-new-jersey/gbp-optimization-new-jersey`, priority: 0.82, changeFrequency: "monthly" as const, lastModified: SERVICE_LAST_MODIFIED },
    { url: `${SITE.url}/local-seo-new-jersey/gbp-optimization-new-jersey/google-business-profile-setup-new-jersey`, priority: 0.8, changeFrequency: "monthly" as const, lastModified: SERVICE_LAST_MODIFIED },
    { url: `${SITE.url}/privacy`, priority: 0.4, changeFrequency: "yearly" as const, lastModified: DEFAULT_LAST_MODIFIED },
    { url: `${SITE.url}/terms`, priority: 0.4, changeFrequency: "yearly" as const, lastModified: DEFAULT_LAST_MODIFIED },
    ...BLOG_POSTS.map((post) => ({
      url: `${SITE.url}/blog/${post.slug}`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
      lastModified: new Date(post.date || BLOG_LAST_MODIFIED),
    })),
    ...SERVICE_PAGES.map((service) => ({
      url: `${SITE.url}/services/${service.slug}`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
      lastModified: SERVICE_LAST_MODIFIED,
    })),
    ...LOCATION_PAGES.map((location) => ({
      url: `${SITE.url}/locations/${location.slug}`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
      lastModified: LOCATION_LAST_MODIFIED,
    })),
  ];

  const uniqueRoutes = Array.from(new Map(routes.map((route) => [route.url, route])).values());

  return uniqueRoutes.map((route) => ({
    url: route.url,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
