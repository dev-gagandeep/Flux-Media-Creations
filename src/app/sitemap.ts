import { MetadataRoute } from "next";
import { BLOG_POSTS, LOCATION_PAGES, SERVICE_PAGES, SITE, WORK_PROJECTS } from "@/lib/constants";

function toSlug(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { url: SITE.url, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${SITE.url}/about`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${SITE.url}/services`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${SITE.url}/locations`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${SITE.url}/work`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${SITE.url}/industries`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${SITE.url}/process`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${SITE.url}/blog`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${SITE.url}/contact`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${SITE.url}/web-development-ai-automation-new-york`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${SITE.url}/web-development-automation-new-jersey`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${SITE.url}/digital-automation-agency-toronto`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${SITE.url}/web-development-ghl-automation-mohali`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${SITE.url}/digital-growth-automation-delhi-ncr`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${SITE.url}/web-development-digital-marketing-hoshiarpur`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${SITE.url}/web-development-automation-chicago`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${SITE.url}/digital-growth-agency-london`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${SITE.url}/web-development-automation-chandigarh`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${SITE.url}/privacy`, priority: 0.4, changeFrequency: "yearly" as const },
    { url: `${SITE.url}/terms`, priority: 0.4, changeFrequency: "yearly" as const },
    ...BLOG_POSTS.map((post) => ({
      url: `${SITE.url}/blog/${post.slug}`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
    })),
    ...SERVICE_PAGES.map((service) => ({
      url: `${SITE.url}/services/${service.slug}`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    })),
    ...WORK_PROJECTS.map((project) => ({
      url: `${SITE.url}/work/${toSlug(project.title)}`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
    })),
    ...LOCATION_PAGES.map((location) => ({
      url: `${SITE.url}/locations/${location.slug}`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
    })),
  ];

  return routes.map((route) => ({
    url: route.url,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
