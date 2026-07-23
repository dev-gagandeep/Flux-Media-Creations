import { safeJsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { generateMeta } from "@/lib/seo";
import LocalSEOHVACNJClient from "./LocalSEOHVACNJClient";

export const metadata: Metadata = generateMeta({
  absoluteTitle: "Local SEO for HVAC Companies in New Jersey | Flux Media Creations",
  description:
    "Flux Media Creations provides local SEO for HVAC companies in New Jersey, including Google Maps ranking, GBP setup, seasonal search visibility, review automation, and AI search optimization.",
  path: "/local-seo-new-jersey/local-seo-hvac-new-jersey",
});

const faqs = [
  ["What is local SEO for HVAC companies in New Jersey?", "Local SEO for HVAC companies in New Jersey optimizes an HVAC contractor's Google Business Profile, website, citations, reviews, and AI search structure so NJ homeowners can find the company for heating and cooling services."],
  ["How does local SEO help an HVAC company get more calls in New Jersey?", "Local SEO helps HVAC companies appear in the Google Map Pack and local organic results for urgent searches such as AC repair, furnace repair, and HVAC contractor near me."],
  ["What Google Business Profile category should an HVAC company use in New Jersey?", "The primary Google Business Profile category for an HVAC company should be HVAC contractor, with secondary categories matching actual services such as air conditioning repair, furnace repair, and heat pump services."],
  ["How long does HVAC local SEO take to show results in New Jersey?", "Most NJ HVAC contractors see initial Google Maps movement within 60 to 90 days. Competitive county-level Map Pack rankings typically take several months of consistent optimization."],
  ["Do HVAC service-area businesses rank differently on Google Maps in NJ?", "Yes. Service-area businesses need correct Google Business Profile service-area settings, consistent local signals, and location-specific website content to qualify for searches across the NJ counties and cities they serve."],
  ["Can local SEO replace paid ads for my NJ HVAC company?", "Strong local SEO can reduce reliance on paid ads over time, but many HVAC companies use both: SEO for compounding visibility and paid ads during peak summer and winter demand."],
  ["Does Flux Media provide HVAC SEO across all New Jersey counties?", "Yes. Flux Media Creations provides HVAC SEO across New Jersey, including Bergen County, Essex County, Hudson County, Passaic County, Union County, Morris County, Middlesex County, Monmouth County, and Ocean County."],
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Local SEO for HVAC Companies in New Jersey",
  provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
  serviceType: "HVAC SEO, Local SEO, Google Maps SEO, Google Business Profile Optimization",
  areaServed: { "@type": "State", name: "New Jersey" },
  description:
    "Flux Media Creations provides local SEO for HVAC companies in New Jersey, including Google Business Profile optimization, service-area configuration, emergency search optimization, review automation, seasonal SEO, and AI search visibility.",
  url: `${SITE.url}/local-seo-new-jersey/local-seo-hvac-new-jersey`,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  areaServed: [{ "@type": "State", name: "New Jersey" }],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([q, a]) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Flux Media Creations improves local SEO for NJ HVAC companies",
  step: [
    "HVAC local SEO audit",
    "Keyword and seasonal strategy",
    "Google Business Profile optimization and service listings",
    "Service-area and location page setup",
    "Review automation setup",
    "AI visibility and monthly reporting",
  ].map((name, index) => ({ "@type": "HowToStep", position: index + 1, name })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Local SEO New Jersey", item: `${SITE.url}/local-seo-new-jersey` },
    { "@type": "ListItem", position: 3, name: "Local SEO for HVAC Companies New Jersey", item: `${SITE.url}/local-seo-new-jersey/local-seo-hvac-new-jersey` },
  ],
};

export default function LocalSEOHVACNewJerseyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }} />
      <LocalSEOHVACNJClient />
    </>
  );
}
