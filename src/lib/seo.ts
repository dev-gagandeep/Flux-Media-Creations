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
  description: "Flux connects websites, search visibility, lead capture, CRM, customer follow-up, automation, and business data for service businesses.",
  foundingLocation: {
    "@type": "Place",
    name: "Garhshankar, Punjab, India",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Garhshankar",
    addressRegion: "Punjab",
    addressCountry: "IN",
  },
  slogan: "Operating Intelligence for Service Businesses",
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
    knowsAbout: ["Operating Intelligence", "Website Growth Systems", "Lead Conversion Systems", "Search Growth Systems", "Business Automation Systems"],
    areaServed: ["United States", "Canada", "United Kingdom", "India"],
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "Service",
        position: 1,
        name: "Website Growth System",
      },
      {
        "@type": "Service",
        position: 2,
        name: "Lead Conversion System",
      },
      {
        "@type": "Service",
        position: 3,
        name: "Search Growth System",
      },
      {
        "@type": "Service",
        position: 4,
        name: "Business Automation System",
      },
      {
        "@type": "Service",
        position: 5,
        name: "Complete Growth System",
      },
    ],
  },
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
