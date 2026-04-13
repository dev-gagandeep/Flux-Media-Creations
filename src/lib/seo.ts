import type { Metadata } from "next";
import { SITE } from "./constants";

interface SeoProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}

export function generateMeta({
  title,
  description = SITE.description,
  path = "",
  image = "/og-image.jpg",
}: SeoProps = {}): Metadata {
  const fullTitle = title ? `${title} | ${SITE.name}` : `${SITE.name} — ${SITE.tagline}`;
  const url = `${SITE.url}${path}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE.url),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE.name,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    authors: [{ name: SITE.founder }],
    creator: SITE.founder,
    publisher: SITE.name,
    keywords: [
      "WordPress website development",
      "GoHighLevel automation",
      "healthcare website design",
      "GHL setup NJ",
      "home service website automation",
      "medical clinic website",
      "pain management website",
      "CRM automation",
      "Airtable setup",
      "web developer India US clients",
      "Flux Media Creations",
      "GHL CRM integration",
      "WordPress GHL",
    ],
  };
}

export const schemaOrganization = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  url: SITE.url,
  email: SITE.email,
  telephone: SITE.phone,
  founder: { "@type": "Person", name: SITE.founder },
  description: SITE.description,
  serviceType: ["Web Development", "Marketing Automation", "CRM Setup", "GoHighLevel"],
  areaServed: "US",
  knowsLanguage: ["en"],
  sameAs: ["https://gagandeep.space"],
};

export const schemaWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: SITE.url,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE.url}/work?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export const schemaHomePage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: `${SITE.name} Home`,
  url: SITE.url,
  description:
    "Conversion-focused WordPress websites and GoHighLevel CRM automations for US businesses, built by Flux Media Creations.",
  isPartOf: {
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
  },
  about: {
    "@type": "ProfessionalService",
    name: SITE.name,
    serviceType: ["WordPress Website Development", "GoHighLevel CRM Automation", "Lead Follow-up Systems"],
    areaServed: ["United States", "Canada", "United Kingdom", "India"],
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "Service",
        position: 1,
        name: "WordPress Website Build",
      },
      {
        "@type": "Service",
        position: 2,
        name: "GoHighLevel Automation",
      },
      {
        "@type": "Service",
        position: 3,
        name: "Full Growth System",
      },
      {
        "@type": "Service",
        position: 4,
        name: "Search Visibility Engine",
      },
    ],
  },
};
