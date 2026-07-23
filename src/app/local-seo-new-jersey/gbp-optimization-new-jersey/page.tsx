import { safeJsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { generateMeta } from "@/lib/seo";
import GBPOptimizationNJClient from "./GBPOptimizationNJClient";

export const metadata: Metadata = generateMeta({
  absoluteTitle: "Google Business Profile Optimization NJ | Flux Media",
  description:
    "Flux Media Creations optimizes Google Business Profiles for New Jersey businesses — Map Pack ranking, weekly posts, AI search visibility, review management, and GBP audit.",
  path: "/local-seo-new-jersey/gbp-optimization-new-jersey",
});

const faqs = [
  {
    q: "What is Google Business Profile optimization?",
    a: "Google Business Profile optimization is the ongoing process of improving your GBP listing to rank higher in Google Maps, the local Map Pack, and AI-generated search answers. It includes fixing category errors, writing keyword-rich service listings, uploading regular photos, posting weekly updates, managing reviews, and structuring your listing for AI search visibility.",
  },
  {
    q: "How long does GBP optimization take to show results in New Jersey?",
    a: "Most New Jersey businesses see measurable Map Pack improvements within 30 to 60 days of a full GBP optimization. Dense markets like Newark and Jersey City may take 45 to 90 days. Ongoing optimization compounds over time as monthly management strengthens profile activity and local relevance.",
  },
  {
    q: "Can GBP optimization help my business show up in ChatGPT and Google AI Overviews?",
    a: "Yes. In 2026, Google AI Overviews and AI assistants can pull local business data directly from GBP signals such as categories, service descriptions, attributes, and business descriptions. A fully optimized GBP is one of the strongest foundations for AI search visibility for NJ local businesses.",
  },
  {
    q: "Do I need a physical location to benefit from GBP optimization in New Jersey?",
    a: "No. Service-area businesses that operate across NJ without a customer-facing storefront can benefit from GBP optimization. We optimize service area settings, service listings, and location signals around the New Jersey cities and counties the business serves.",
  },
  {
    q: "How is Flux Media's GBP optimization different from a general SEO agency?",
    a: "Most SEO agencies treat GBP as a checkbox. Flux Media Creations treats GBP optimization as an active local ranking system with competitor analysis, category fixes, weekly Google Posts, monthly Q&A management, structured photo strategy, AI visibility structuring, and performance reporting.",
  },
  {
    q: "How much does GBP optimization cost for a New Jersey business?",
    a: "GBP optimization pricing varies based on New Jersey market competition, number of listings, and monthly work scope. Flux Media Creations builds custom optimization packages and provides a clear quote after the free GBP audit.",
  },
  {
    q: "Is GBP optimization a one-time service or ongoing?",
    a: "GBP optimization is ongoing. Google uses activity signals such as post frequency, photo uploads, and review response rate as local ranking factors. A listing optimized once and then left inactive can lose Map Pack positions to actively managed competitors.",
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
    "Flux Media Creations is a digital marketing agency providing Google Business Profile optimization, local SEO, AI search visibility, and growth systems for local businesses across New Jersey.",
  areaServed: [
    { "@type": "State", name: "New Jersey" },
    { "@type": "City", name: "Newark" },
    { "@type": "City", name: "Jersey City" },
    { "@type": "AdministrativeArea", name: "Bergen County" },
    { "@type": "AdministrativeArea", name: "Essex County" },
    { "@type": "AdministrativeArea", name: "Middlesex County" },
  ],
  sameAs: [
    "https://linkedin.com/company/flux-media-creations",
    "https://www.facebook.com/fluxmediacreations/",
    "https://www.instagram.com/fluxmediacreations/",
    "https://x.com/fluxmediacrt_",
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  description:
    "Digital marketing and automation agency providing local SEO, GBP optimization, website design, and AI search visibility for local businesses.",
  contactPoint: {
    "@type": "ContactPoint",
    email: SITE.email,
    contactType: "Customer Service",
  },
  sameAs: localBusinessSchema.sameAs,
};

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }} />
      <GBPOptimizationNJClient />
    </>
  );
}
