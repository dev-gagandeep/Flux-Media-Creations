import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { generateMeta } from "@/lib/seo";
import GBPOptimizationNJClient from "./GBPOptimizationNJClient";

export const metadata: Metadata = generateMeta({
  absoluteTitle: "Google Business Profile Optimization New Jersey",
  description:
    "Google Business Profile optimization for New Jersey businesses that need better Google Maps rankings, Map Pack visibility, weekly posts, photos, Q&A management, and AI search visibility.",
  path: "/local-seo-new-jersey/gbp-optimization-new-jersey",
});

const faqs = [
  {
    q: "What is Google Business Profile optimization and why does it matter for NJ businesses?",
    a: "Google Business Profile (GBP) optimization is the process of fully completing, configuring, and actively managing your Google listing so it ranks higher in local search results and the Google Map Pack. For New Jersey businesses, this is critical because the Map Pack appears at the very top of local search results and captures high-intent local clicks.",
  },
  {
    q: "How long does GBP optimization take to show results in New Jersey?",
    a: "Most New Jersey businesses see measurable improvements in profile views, calls, and Map Pack position within 30-60 days of a full GBP optimization. The timeline depends on market competition, current profile quality, reviews, citations, and website support.",
  },
  {
    q: "Can GBP optimization help my business show up in ChatGPT and Google AI Overviews?",
    a: "Yes. Google AI Overviews and AI assistants can use local business data from Google Business Profile signals, citations, and structured content. A fully optimized GBP is a strong foundation for AI search visibility.",
  },
  {
    q: "Do I need a physical location in New Jersey to benefit from GBP optimization?",
    a: "Not necessarily. Service-area businesses that operate across New Jersey without a storefront can still use a Google Business Profile and rank in local results when service areas are configured correctly.",
  },
  {
    q: "How is Flux Media's GBP optimization different from doing it myself?",
    a: "Most business owners set up a basic GBP listing and leave it. Flux Media Creations audits category choices, descriptions, photos, Q&A, posts, service areas, links, and local ranking signals so the listing is actively optimized.",
  },
  {
    q: "Does GBP optimization work alongside local SEO?",
    a: "Yes. GBP optimization is one of the strongest parts of local SEO. It works best when combined with service pages, citations, review management, internal links, schema, and a strong website conversion path.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Google Business Profile Optimization New Jersey",
  provider: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
  },
  serviceType: "Google Business Profile Optimization, Google Maps SEO, Local Listing Optimization",
  areaServed: {
    "@type": "State",
    name: "New Jersey",
  },
  description:
    "Flux Media Creations provides Google Business Profile optimization for New Jersey businesses, including category setup, descriptions, posts, photos, Q&A management, service area signals, website links, and AI search visibility.",
  url: `${SITE.url}/local-seo-new-jersey/gbp-optimization-new-jersey`,
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
      name: "Google Business Profile Optimization New Jersey",
      item: `${SITE.url}/local-seo-new-jersey/gbp-optimization-new-jersey`,
    },
  ],
};

export default function GBPOptimizationNewJerseyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <GBPOptimizationNJClient />
    </>
  );
}
