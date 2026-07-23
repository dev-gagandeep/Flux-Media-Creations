import type { Metadata } from "next";
import { PUBLIC_PROFILES, SITE, SOCIAL_LINKS } from "./constants";

interface SeoProps {
  title?: string;
  absoluteTitle?: string;
  description?: string;
  path?: string;
  image?: string;
  socialTitle?: string;
  socialDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
}

function normalizeTitle(title: string) {
  return title
    .replace(/\s*[|—-]\s*Flux Media Creations\s*$/i, "")
    .replace(/\s*[|—-]\s*Flux\s*$/i, "")
    .trim();
}

function normalizeAbsoluteTitle(title: string) {
  return title
    .replace(/\s*\|\s*Flux\s*(?=\|\s*Flux Media Creations\s*$)/i, "")
    .replace(/(\s*[|—-]\s*Flux Media Creations)(?:\s*[|—-]\s*Flux Media Creations)+\s*$/i, "$1")
    .trim();
}

function normalizeDescription(description: string) {
  if (description.length <= 165) {
    return description;
  }

  const clipped = description.slice(0, 162);
  const lastSpace = clipped.lastIndexOf(" ");
  return `${clipped.slice(0, lastSpace > 120 ? lastSpace : 162).trimEnd()}...`;
}

export function generateMeta({
  title,
  absoluteTitle,
  description = SITE.description,
  path = "",
  image = "/og-image.svg",
  socialTitle,
  socialDescription,
  twitterTitle,
  twitterDescription,
}: SeoProps = {}): Metadata {
  const fullTitle = absoluteTitle ? normalizeAbsoluteTitle(absoluteTitle) : title ? `${normalizeTitle(title)} | ${SITE.name}` : `${SITE.name} — ${SITE.tagline}`;
  const metaDescription = normalizeDescription(description);
  const url = `${SITE.url}${path}`;
  const shareTitle = socialTitle ?? fullTitle;
  const shareDescription = normalizeDescription(socialDescription ?? description);
  return {
    title: fullTitle,
    description: metaDescription,
    metadataBase: new URL(SITE.url),
    manifest: "/manifest.webmanifest",
    alternates: { canonical: url },
    openGraph: {
      title: shareTitle,
      description: shareDescription,
      url,
      siteName: SITE.name,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: shareTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: twitterTitle ?? shareTitle,
      description: normalizeDescription(twitterDescription ?? socialDescription ?? description),
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
  };
}

export const schemaOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE.url}/#organization`,
  name: "Flux",
  alternateName: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/og-image.svg`,
  description: "Flux is an Operating Intelligence Company that builds connected growth systems for service businesses.",
  foundingLocation: {
    "@type": "Country",
    name: "United States",
  },
  slogan: "Operating Intelligence for Service Businesses",
  foundingDate: "2022",
  founder: {
    "@type": "Person",
    name: SITE.founder,
    url: `${SITE.url}/about`,
  },
  email: SITE.email,
  telephone: SITE.phone,
  knowsAbout: ["Operating Intelligence", "Revenue Intelligence", "Customer Progression", "AI Discovery", "Patient Revenue Systems"],
  sameAs: [`https://wa.me/${SITE.whatsapp}`, ...SOCIAL_LINKS.map((link) => link.href), ...PUBLIC_PROFILES],
};

export const schemaWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  name: "Flux",
  alternateName: SITE.name,
  url: SITE.url,
  publisher: { "@id": `${SITE.url}/#organization` },
};

export const schemaHomePage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE.url}/#webpage`,
  name: "Flux | Operating Intelligence Company for Service Businesses",
  url: SITE.url,
  description: SITE.description,
  isPartOf: {
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
  },
  about: {
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    alternateName: SITE.shortName,
    description: SITE.description,
    knowsAbout: ["Operating Intelligence", "Revenue Intelligence", "Customer Progression", "AI Discovery", "Patient Revenue Systems"],
    areaServed: ["United States", "Canada", "United Kingdom", "India"],
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "Service",
        position: 1,
        name: "Market Presence Intelligence",
      },
      {
        "@type": "Service",
        position: 2,
        name: "Digital Headquarters",
      },
      {
        "@type": "Service",
        position: 3,
        name: "Revenue Intelligence",
      },
      {
        "@type": "Service",
        position: 4,
        name: "Customer Progression",
      },
      {
        "@type": "Service",
        position: 5,
        name: "AI Workforce Systems",
      },
    ],
  },
};

export const schemaHomeAgency = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  alternateName: SITE.shortName,
  url: SITE.url,
  logo: `${SITE.url}/og-image.svg`,
  description: SITE.description,
  slogan: "Operating Intelligence for Service Businesses",
  foundingDate: "2022",
  email: SITE.email,
  telephone: SITE.phone,
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: SITE.phoneIndia,
      contactType: "customer support",
      availableLanguage: "English",
      areaServed: ["US", "GB", "CA", "IN"],
    },
  ],
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Canada" },
    { "@type": "Country", name: "India" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web & Automation Services",
    itemListElement: [
      {
        "@type": "Offer",
        name: "WordPress Website Build",
        description:
          "Custom-designed, lightning-fast WordPress sites built from Figma to go-live. Mobile-first, SEO-ready, PageSpeed 90+.",
        price: "500",
        priceCurrency: "USD",
        url: `${SITE.url}/services/wordpress-website-build`,
      },
      {
        "@type": "Offer",
        name: "GoHighLevel Automation",
        description:
          "Full GHL setup: pipelines, missed call text-back, appointment booking, SMS reminders, review generation. A2P verified.",
        price: "300",
        priceCurrency: "USD",
        url: `${SITE.url}/services/gohighlevel-automation`,
      },
      {
        "@type": "Offer",
        name: "Full Growth System",
        description:
          "WordPress site + GHL automation fully connected. Every form submission triggers instant follow-up.",
        price: "1300",
        priceCurrency: "USD",
        url: `${SITE.url}/services/full-growth-system`,
      },
      {
        "@type": "Offer",
        name: "Airtable Business Hub",
        description:
          "Custom Airtable CRM, project tracker, and client portal. Automated email triggers and visual dashboards.",
        price: "200",
        priceCurrency: "USD",
        url: `${SITE.url}/services/airtable-business-hub`,
      },
      {
        "@type": "Offer",
        name: "Make / Zapier Automation",
        description:
          "Connect any tools: Facebook Lead Ads -> GHL -> Airtable -> Calendar. Multi-platform lead routing built in hours.",
        price: "150",
        priceCurrency: "USD",
        url: `${SITE.url}/services/make-zapier-automation`,
      },
      {
        "@type": "Offer",
        name: "Monthly Maintenance",
        description:
          "WordPress updates, security scans, backups, GHL monitoring, speed checks, content updates. Direct access to us.",
        price: "150",
        priceCurrency: "USD",
        url: `${SITE.url}/services/monthly-maintenance`,
      },
      {
        "@type": "Offer",
        name: "Search Visibility Engine",
        description:
          "A smarter discovery system for search, maps, and AI-driven results. Built to help the right people find you faster.",
        price: "400",
        priceCurrency: "USD",
        url: `${SITE.url}/services/search-visibility-engine`,
      },
    ],
  },
  sameAs: [`https://wa.me/${SITE.whatsapp}`, ...SOCIAL_LINKS.map((link) => link.href), ...PUBLIC_PROFILES],
};

export const schemaHomeFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Flux?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Flux is an Operating Intelligence Company. It builds connected systems that link how a business is discovered, how its website performs, how customer inquiries are followed up on, and how automation and AI support the team, so these functions work as one coordinated system instead of separate disconnected tools.",
      },
    },
    {
      "@type": "Question",
      name: "Who does Flux help?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Flux works with appointment based service businesses, starting with healthcare clinics and practices, and extending to home services, legal, wellness, and other professional service businesses where fast, consistent follow up determines whether an inquiry becomes a customer.",
      },
    },
    {
      "@type": "Question",
      name: "What problem does Flux solve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Flux solves fragmentation. Most businesses already have a website, a CRM, and marketing running, but these systems do not communicate, which means inquiries get delayed, follow up is inconsistent, and business owners have no clear view of where customers are being lost. Flux connects these systems into one intelligence layer.",
      },
    },
    {
      "@type": "Question",
      name: "How is Flux different from a marketing agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A marketing agency typically delivers isolated services like a website, an ad campaign, or SEO work, without connecting them. Flux builds the connected system underneath these functions, measured by whether inquiries convert into customers, not by how many deliverables were completed.",
      },
    },
    {
      "@type": "Question",
      name: "What is Operating Intelligence?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Operating Intelligence is the coordination of a business's discovery, website, revenue tracking, customer follow up, and automation into a single connected system that improves over time. It replaces fragmented tools with one working infrastructure.",
      },
    },
    {
      "@type": "Question",
      name: "Why do businesses need connected systems instead of separate tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Separate tools create gaps: a website that does not feed the CRM, a CRM that is not followed up on, and data that never gets reviewed. Each gap is a point where a potential customer is lost. Connected systems close those gaps by moving information and follow up automatically between every part of the business.",
      },
    },
    {
      "@type": "Question",
      name: "What is a Business Intelligence Assessment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It is a review Flux conducts of how a business currently handles discovery, response time, follow up, and conversion, identifying where customers are being lost before any system is built or changed.",
      },
    },
  ],
};

export const schemaHomeReviews = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Flux Media Creations",
  url: `${SITE.url}/`,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "2",
  },
  review: [
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Healthcare Client",
      },
      reviewBody:
        "Gagan built our healthcare site in under 2 weeks. The GHL automation he set up catches every missed call - we've recovered patients we would have lost completely.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      publisher: {
        "@type": "Organization",
        name: "Flux Media Creations",
      },
    },
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Medical Practice",
      },
      reviewBody:
        "The website speed and design are exactly what we needed. Our Google ranking improved within the first month. Communication was always clear and fast.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      publisher: {
        "@type": "Organization",
        name: "Flux Media Creations",
      },
    },
  ],
};
