import type { Metadata } from "next";
import { SITE } from "./constants";

interface SeoProps {
  title?: string;
  absoluteTitle?: string;
  description?: string;
  path?: string;
  image?: string;
}

export function generateMeta({
  title,
  absoluteTitle,
  description = SITE.description,
  path = "",
  image = "/og-image.svg",
}: SeoProps = {}): Metadata {
  const fullTitle = absoluteTitle ?? (title ? `${title} | ${SITE.name}` : `${SITE.name} — ${SITE.tagline}`);
  const url = `${SITE.url}${path}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE.url),
    manifest: "/manifest.webmanifest",
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

export const schemaHomeAgency = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/og-image.svg`,
  description:
    "Flux Media Creations is a WordPress GoHighLevel agency building conversion-first websites, CRM automation, and integrated growth systems for service businesses.",
  slogan: "Websites & Automation That Work While You Sleep",
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
      telephone: SITE.phone,
      contactType: "customer support",
      availableLanguage: "English",
      areaServed: ["US", "GB", "CA", "IN"],
    },
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
        url: "https://www.fluxmediacreations.com/services/wordpress-website-build",
      },
      {
        "@type": "Offer",
        name: "GoHighLevel Automation",
        description:
          "Full GHL setup: pipelines, missed call text-back, appointment booking, SMS reminders, review generation. A2P verified.",
        price: "300",
        priceCurrency: "USD",
        url: "https://www.fluxmediacreations.com/services/gohighlevel-automation",
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
        url: "https://www.fluxmediacreations.com/services/airtable-business-hub",
      },
      {
        "@type": "Offer",
        name: "Make / Zapier Automation",
        description:
          "Connect any tools: Facebook Lead Ads -> GHL -> Airtable -> Calendar. Multi-platform lead routing built in hours.",
        price: "150",
        priceCurrency: "USD",
        url: "https://www.fluxmediacreations.com/services/make-zapier-automation",
      },
      {
        "@type": "Offer",
        name: "Monthly Maintenance",
        description:
          "WordPress updates, security scans, backups, GHL monitoring, speed checks, content updates. Direct access to us.",
        price: "150",
        priceCurrency: "USD",
        url: "https://www.fluxmediacreations.com/services/monthly-maintenance",
      },
      {
        "@type": "Offer",
        name: "Search Visibility Engine",
        description:
          "A smarter discovery system for search, maps, and AI-driven results. Built to help the right people find you faster.",
        price: "400",
        priceCurrency: "USD",
        url: "https://www.fluxmediacreations.com/services/search-visibility-engine",
      },
    ],
  },
  sameAs: [`https://wa.me/${SITE.whatsapp}`, `https://wa.me/${SITE.whatsappIndia}`, SITE.portfolioUrl, SITE.instagramUrl],
};

export const schemaHomeFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you only work with US businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our main focus is US service businesses, but we also work with clients in Canada and the United Kingdom. All work is delivered in English and we communicate via email, WhatsApp, and video call.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A WordPress-only site takes 7 to 10 business days. A full WordPress plus GoHighLevel growth system takes 14 to 21 days. We set clear milestones at the start of every project.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to buy my own GoHighLevel account?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. GoHighLevel's Starter plan is $97 per month and you own the account directly. We set up everything inside your account and hand it over fully configured.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work with my existing website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We can audit your current site, rebuild it while preserving your content and SEO history, or add specific components like booking systems or lead capture forms to what already exists.",
      },
    },
    {
      "@type": "Question",
      name: "What makes you different from other WordPress agencies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most agencies build a website and move on. We build the website, connect the CRM, configure the automations, and deliver a system that generates and follows up with leads automatically.",
      },
    },
  ],
};

export const schemaHomeReviews = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Flux Media Creations",
  url: "https://www.fluxmediacreations.com/",
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
