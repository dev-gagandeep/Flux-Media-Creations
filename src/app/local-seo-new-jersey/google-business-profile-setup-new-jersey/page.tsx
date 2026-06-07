import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { generateMeta } from "@/lib/seo";
import GBPSetupNJClient from "./GBPSetupNJClient";

export const metadata: Metadata = generateMeta({
  absoluteTitle: "Google Business Profile Setup New Jersey",
  description:
    "Google Business Profile setup for New Jersey small businesses that need a claimed, verified, fully built Google Maps listing with categories, services, photos, and AI-ready local search signals.",
  path: "/local-seo-new-jersey/google-business-profile-setup-new-jersey",
});

const faqs = [
  {
    q: "What is Google Business Profile and why does a New Jersey small business need it?",
    a: "Google Business Profile is the free Google listing that helps a business appear on Google Maps and in local search results. For New Jersey small businesses, it is one of the most important local SEO assets because it supports Map Pack visibility, calls, directions, reviews, and local discovery.",
  },
  {
    q: "Can I set up a Google Business Profile myself?",
    a: "You can create a basic listing yourself, but many businesses leave important ranking fields incomplete. Professional setup helps with categories, verification, service listings, descriptions, photos, service areas, and profile structure from day one.",
  },
  {
    q: "How long does Google Business Profile setup take?",
    a: "The initial setup and optimization work can usually be completed within 3 to 5 business days. Google verification timing depends on the method Google requires and can range from instant verification to 1 to 14 days.",
  },
  {
    q: "What is the difference between GBP setup and GBP optimization?",
    a: "GBP setup is the foundation: claiming, verifying, and building the listing from scratch. GBP optimization is the ongoing improvement of an existing listing with categories, posts, photos, reviews, Q&A, service updates, and ranking signals.",
  },
  {
    q: "Can a service-area business without a storefront get a Google Business Profile in New Jersey?",
    a: "Yes. Many service-area businesses can use Google Business Profile without showing a storefront address. The listing needs to be configured correctly around the New Jersey cities and counties the business serves.",
  },
  {
    q: "Can GBP setup help with ChatGPT and Google AI visibility?",
    a: "Yes. A properly structured Google Business Profile gives AI systems clearer local business data, including categories, services, descriptions, attributes, and service-area information.",
  },
];

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
    "Claim and verify the Google Business Profile.",
    "Choose the correct primary and secondary business categories.",
    "Complete the profile with hours, attributes, phone, website, and booking links.",
    "Write a keyword-rich business description.",
    "Add services, products, photos, and service-area details.",
    "Structure the profile for Google Maps and AI search visibility.",
  ].map((text, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    text,
  })),
};

export default function GoogleBusinessProfileSetupNewJerseyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <GBPSetupNJClient />
    </>
  );
}
