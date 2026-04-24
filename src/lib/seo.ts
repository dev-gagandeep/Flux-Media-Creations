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
  image = "/og-image.jpg",
}: SeoProps = {}): Metadata {
  const fullTitle = absoluteTitle ?? (title ? `${title} | ${SITE.name}` : `${SITE.name} — ${SITE.tagline}`);
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
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
        "max-video-preview": 0,
        "max-image-preview": "none",
        "max-snippet": 0,
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
  "@type": "ProfessionalService",
  name: "Flux Media Creations",
  url: "https://www.fluxmediacreations.com/",
  logo: "https://www.fluxmediacreations.com/wp-content/uploads/flux-logo.png",
  description:
    "Flux Media Creations builds conversion-first WordPress websites, GoHighLevel CRM automations, and integrated growth systems for US businesses that can't afford to lose a single lead.",
  slogan: "Websites & Automation That Work While You Sleep",
  foundingDate: "2022",
  email: "contact@fluxmediacreations.com",
  telephone: "+916284957892",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+916284957892",
    contactType: "customer support",
    availableLanguage: "English",
    areaServed: ["US", "GB", "CA", "IN"],
  },
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
        price: "800",
        priceCurrency: "USD",
        url: "https://www.fluxmediacreations.com/services/full-growth-system",
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
  sameAs: ["https://wa.me/916284957892", "https://gagandeep.space", SITE.instagramUrl],
};

export const schemaHomeFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does Flux Media Creations offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Flux Media Creations offers WordPress website design and development, GoHighLevel CRM automation, Full Growth Systems (WordPress + GHL combined), Airtable business hubs, Make/Zapier automation, monthly maintenance, and Search Visibility Engine services for US businesses.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a WordPress website cost at Flux Media Creations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WordPress website builds start from $500. This includes a custom Figma design, mobile-first development, SEO setup, and a PageSpeed score of 90+. Pricing varies based on the scope of the project.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Full Growth System?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Full Growth System is Flux Media Creations' most popular package, starting at $800. It combines a WordPress website with GoHighLevel automation - fully integrated so every form submission triggers instant follow-up, appointment booking, and SMS reminders.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build a website with Flux Media Creations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Projects typically complete within 2 weeks. The process includes a free discovery call, Figma design approval, simultaneous WordPress build and GHL setup, full testing across 5 browsers and mobile, and then launch with DNS, SSL, and a recorded walkthrough.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with US-based businesses only?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Flux Media Creations primarily serves US clients but also works with businesses in the United Kingdom, Canada, and India. All communication is in English and projects are delivered remotely.",
      },
    },
    {
      "@type": "Question",
      name: "What industries does Flux Media Creations specialize in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Flux Media Creations specializes in healthcare clinics (pain management, vein centers, orthopedic practices), home services businesses, real estate agents, and beauty & wellness brands.",
      },
    },
    {
      "@type": "Question",
      name: "What is GoHighLevel automation and why do I need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GoHighLevel (GHL) is a CRM and automation platform. Flux Media Creations sets up pipelines, missed call text-back, appointment booking, SMS reminders, and review generation - so your business responds to every lead instantly, even after hours.",
      },
    },
    {
      "@type": "Question",
      name: "What happens after my website launches?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every project includes 30 days of direct post-launch support and a recorded walkthrough so you can make changes independently. Ongoing monthly maintenance plans are also available from $150/month.",
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
