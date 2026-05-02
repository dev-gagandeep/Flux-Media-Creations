"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { BLOG_POSTS, LOCATION_PAGES, PROCESS_STEPS, SERVICES, SERVICE_PAGES, SITE, WORK_PROJECTS } from "@/lib/constants";

type JsonLd = Record<string, unknown>;

const STATIC_LOCATION_LANDING_SCHEMAS: Record<string, { name: string; area: string; path: string }> = {
  "/web-development-ai-automation-new-york": {
    name: "Flux Media Creations New York",
    area: "New York, United States",
    path: "/web-development-ai-automation-new-york",
  },
  "/web-development-automation-new-jersey": {
    name: "Flux Media Creations New Jersey",
    area: "New Jersey, United States",
    path: "/web-development-automation-new-jersey",
  },
};

function toAbsolute(path: string): string {
  if (!path || path === "/") return SITE.url;
  return `${SITE.url}${path}`;
}

function toTitle(segment: string): string {
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function toWorkSlug(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function getWebPageSchema(pathname: string): JsonLd {
  const segments = pathname.split("/").filter(Boolean);
  const routeName = segments.length ? toTitle(segments[segments.length - 1]) : "Home";

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${routeName} | ${SITE.name}`,
    url: toAbsolute(pathname),
    isPartOf: {
      "@type": "WebSite",
      name: SITE.name,
      url: SITE.url,
    },
  };
}

function getBreadcrumbSchema(pathname: string): JsonLd {
  const segments = pathname.split("/").filter(Boolean);
  const crumbs = [
    { name: "Home", item: SITE.url },
    ...segments.map((segment, index) => {
      const itemPath = `/${segments.slice(0, index + 1).join("/")}`;
      return {
        name: toTitle(segment),
        item: toAbsolute(itemPath),
      };
    }),
  ];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.item,
    })),
  };
}

function getRouteSpecificSchemas(pathname: string): JsonLd[] {
  const schemas: JsonLd[] = [];

  if (pathname === "/about") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: `About ${SITE.name}`,
      url: toAbsolute(pathname),
      mainEntity: {
        "@type": "ProfessionalService",
        name: SITE.name,
        url: SITE.url,
      },
    });
  }

  if (pathname === "/contact") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: `Contact ${SITE.name}`,
      url: toAbsolute(pathname),
      mainEntity: {
        "@type": "ProfessionalService",
        name: SITE.name,
        email: SITE.email,
        telephone: SITE.phone,
      },
    });
  }

  if (pathname === "/process") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How Flux Media Creations Delivers Projects",
      description: "Step-by-step process from discovery to launch and support.",
      step: PROCESS_STEPS.map((step) => ({
        "@type": "HowToStep",
        name: step.title,
        text: step.description,
      })),
    });
  }

  if (pathname === "/services") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Services",
      url: toAbsolute(pathname),
      mainEntity: {
        "@type": "ItemList",
        itemListElement: SERVICES.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: toAbsolute(service.href),
          name: service.title,
        })),
      },
    });
  }

  if (pathname.startsWith("/services/") && pathname.split("/").length === 3) {
    const slug = pathname.split("/")[2];
    const service = SERVICE_PAGES.find((item) => item.slug === slug);

    if (service) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.title,
        serviceType: service.serviceType,
        description: service.outcome,
        url: toAbsolute(pathname),
        provider: {
          "@type": "ProfessionalService",
          name: SITE.name,
          url: SITE.url,
        },
      });
    }
  }

  if (pathname === "/blog") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Blog",
      name: `${SITE.name} Blog`,
      url: toAbsolute(pathname),
      blogPost: BLOG_POSTS.map((post) => ({
        "@type": "BlogPosting",
        headline: post.title,
        url: toAbsolute(`/blog/${post.slug}`),
      })),
    });
  }

  if (pathname.startsWith("/blog/") && pathname.split("/").length === 3) {
    const slug = pathname.split("/")[2];
    const post = BLOG_POSTS.find((item) => item.slug === slug);

    if (post) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        author: {
          "@type": "Person",
          name: post.author,
        },
        publisher: {
          "@type": "Organization",
          name: SITE.name,
          url: SITE.url,
        },
        image: toAbsolute(post.cover),
        mainEntityOfPage: toAbsolute(pathname),
      });
    }
  }

  if (pathname === "/work") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Work Portfolio",
      url: toAbsolute(pathname),
      mainEntity: {
        "@type": "ItemList",
        itemListElement: WORK_PROJECTS.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: project.title,
          url: toAbsolute(`/work/${toWorkSlug(project.title)}`),
        })),
      },
    });
  }

  if (pathname.startsWith("/work/") && pathname.split("/").length === 3) {
    const slug = pathname.split("/")[2];
    const project = WORK_PROJECTS.find((item) => toWorkSlug(item.title) === slug);

    if (project) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: `${project.title} Case Study`,
        description: project.description,
        url: toAbsolute(pathname),
        about: project.tags,
      });
    }
  }

  if (pathname === "/industries") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Industries We Serve",
      url: toAbsolute(pathname),
    });
  }

  if (pathname === "/locations") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Locations",
      url: toAbsolute(pathname),
      mainEntity: {
        "@type": "ItemList",
        itemListElement: LOCATION_PAGES.map((location, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: location.label,
          url: toAbsolute(`/locations/${location.slug}`),
        })),
      },
    });
  }

  if (pathname.startsWith("/locations/") && pathname.split("/").length === 3) {
    const slug = pathname.split("/")[2];
    const location = LOCATION_PAGES.find((item) => item.slug === slug);

    if (location) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Place",
        name: location.label,
        description: location.summary,
        url: toAbsolute(pathname),
      });
    }
  }

  if (pathname === "/privacy" || pathname === "/terms") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: pathname === "/privacy" ? "Privacy Policy" : "Terms of Service",
      url: toAbsolute(pathname),
    });
  }

  const locationLanding = STATIC_LOCATION_LANDING_SCHEMAS[pathname];

  if (locationLanding) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: locationLanding.name,
      url: toAbsolute(locationLanding.path),
      areaServed: locationLanding.area,
      parentOrganization: {
        "@type": "Organization",
        name: SITE.name,
        url: SITE.url,
      },
    });
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Service",
      name: `Web Development and Automation in ${locationLanding.area}`,
      provider: {
        "@type": "Organization",
        name: SITE.name,
        url: SITE.url,
      },
      areaServed: locationLanding.area,
      url: toAbsolute(locationLanding.path),
    });
  }

  return schemas;
}

export default function RouteSchemas() {
  const pathname = usePathname();

  const schemas = useMemo(() => {
    if (!pathname) return [];

    const jsonLd: JsonLd[] = [getWebPageSchema(pathname), getBreadcrumbSchema(pathname), ...getRouteSpecificSchemas(pathname)];

    return jsonLd;
  }, [pathname]);

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={`${pathname ?? "route"}-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
