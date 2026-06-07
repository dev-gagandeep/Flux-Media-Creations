import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { generateMeta } from "@/lib/seo";
import GBPSetupNJClient from "./GBPSetupNJClient";

export const metadata: Metadata = generateMeta({
  absoluteTitle: "Google Business Profile Setup New Jersey | Flux Media",
  description:
    "Flux Media Creations sets up your Google Business Profile in New Jersey from scratch — claim, verify, categories, services, photos, and AI search visibility.",
  path: "/local-seo-new-jersey/google-business-profile-setup-new-jersey",
});

const faqs = [
  {
    q: "What is Google Business Profile setup?",
    a: "Google Business Profile setup is the process of claiming, verifying, and fully building your free Google listing so your New Jersey business appears in Google Maps, local search results, and AI-generated answers. It covers category selection, service listings, photos, service areas, and AI visibility configuration.",
  },
  {
    q: "How long does Google Business Profile setup take in New Jersey?",
    a: "GBP setup is typically complete within 3 to 5 business days. Google verification adds 1 to 14 days depending on the method available to your business type. Most New Jersey businesses begin seeing Map Pack improvements within 30 to 60 days of full setup.",
  },
  {
    q: "Can I set up a Google Business Profile myself?",
    a: "Yes, you can create a basic Google listing yourself in about 15 minutes. The issue is that a basic listing is not enough to rank in the New Jersey Map Pack. Professional setup helps avoid category, service listing, photo, and service-area mistakes from the start.",
  },
  {
    q: "What is the difference between GBP setup and GBP optimization?",
    a: "Setup is the foundation: claiming, verifying, and fully building your Google listing from scratch. Optimization is the ongoing process of improving and growing that listing over time through posts, photos, reviews, Q&A, service updates, and performance tracking.",
  },
  {
    q: "Can a New Jersey service-area business get a Google Business Profile without a physical address?",
    a: "Yes. Service-area businesses in New Jersey, including contractors, HVAC companies, plumbers, and mobile services, are eligible for a Google Business Profile. The listing can be configured to hide the home address while showing all NJ service areas.",
  },
  {
    q: "Will my GBP listing help me show up in ChatGPT and Google AI Overviews?",
    a: "Yes. Google AI Overviews and AI assistants retrieve local business data from Google Business Profile listings, citations, and structured content when generating local answers. A correctly set-up GBP is the foundation for AI-generated local search visibility.",
  },
  {
    q: "How much does Google Business Profile setup cost in New Jersey?",
    a: "Google Business Profile itself is free. Professional setup pricing varies based on your market, business type, and scope of work. Flux Media Creations gives a clear itemized quote based on your specific New Jersey business situation.",
  },
  {
    q: "Does Flux Media handle GBP setup across all of New Jersey?",
    a: "Yes. Flux Media Creations provides Google Business Profile setup across New Jersey, including Newark, Jersey City, Paterson, Hoboken, Trenton, Camden, Paramus, Bergen County, Essex County, Morris County, Middlesex County, Hudson County, and Monmouth County.",
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  description:
    "Flux Media Creations is a digital marketing and automation agency providing Google Business Profile setup, local SEO, website design, and AI search optimization for local businesses across New Jersey.",
  areaServed: [
    { "@type": "State", name: "New Jersey" },
    { "@type": "City", name: "Newark" },
    { "@type": "City", name: "Jersey City" },
    { "@type": "AdministrativeArea", name: "Bergen County" },
    { "@type": "AdministrativeArea", name: "Essex County" },
  ],
  sameAs: [
    "https://linkedin.com/company/flux-media-creations",
    "https://www.facebook.com/fluxmediacreations/",
    "https://www.instagram.com/fluxmediacreations/",
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Google Business Profile Setup New Jersey",
  provider: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
  },
  serviceType: "Google Business Profile Setup, Google Maps Listing Creation, Local Listing Setup",
  areaServed: {
    "@type": "State",
    name: "New Jersey",
  },
  description:
    "Flux Media Creations provides Google Business Profile setup for New Jersey small businesses, including claiming, verification, category setup, business descriptions, service listings, photos, service-area configuration, and AI search visibility foundations.",
  url: `${SITE.url}/local-seo-new-jersey/google-business-profile-setup-new-jersey`,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE.url,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Local SEO New Jersey",
      item: `${SITE.url}/local-seo-new-jersey`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Google Business Profile Setup New Jersey",
      item: `${SITE.url}/local-seo-new-jersey/google-business-profile-setup-new-jersey`,
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to set up a Google Business Profile for a New Jersey business",
  description:
    "A professional Google Business Profile setup process for New Jersey small businesses.",
  step: [
    ["Business claim and verification", "Claim and verify your GBP through phone, video, postcard, or instant verification."],
    ["Business category selection", "Assign the correct primary and secondary categories based on New Jersey market competitor research."],
    ["Complete profile build-out", "Fill every available field, including hours, attributes, description, phone, website, and accessibility information."],
    ["Keyword-rich business description", "Write a 750-character description with service keywords, service area, and customer benefit."],
    ["Service and product listings", "Build every service listing with keyword-optimized descriptions."],
    ["Service area configuration", "Set the New Jersey cities and counties the business serves."],
    ["Photo setup", "Upload business photos across key profile photo categories."],
    ["AI search visibility foundation", "Structure the listing for Google AI Overviews and ChatGPT citation readiness."],
  ].map(([name, text], index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name,
    text,
  })),
};

export default function GoogleBusinessProfileSetupNewJerseyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <GBPSetupNJClient />
    </>
  );
}
