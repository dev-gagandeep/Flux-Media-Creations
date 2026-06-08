import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { generateMeta } from "@/lib/seo";
import LocalSEODentistsNJClient from "./LocalSEODentistsNJClient";

export const metadata: Metadata = generateMeta({
  absoluteTitle: "Local SEO for Dentists in New Jersey | Flux Media Creations",
  description:
    "Flux Media Creations provides local SEO for dental practices in New Jersey, including Google Maps ranking, GBP optimization, AI search visibility, and patient review automation.",
  path: "/local-seo-new-jersey/local-seo-dentists-new-jersey",
});

const faqs = [
  ["What is local SEO for dentists in New Jersey?", "Local SEO for dentists in New Jersey is the process of optimizing a dental practice's online presence to appear in Google Maps, the local Map Pack, and AI-generated local search results when nearby patients search for dental services."],
  ["How long does local SEO take to show results for a dental practice?", "Most NJ dental practices see initial Google Maps improvements within 60 to 90 days of a full local SEO implementation. More competitive Map Pack terms usually take 4 to 6 months of consistent optimization."],
  ["What Google Business Profile category should a dentist use in New Jersey?", "The primary Google Business Profile category for a dental practice should be Dentist. Secondary categories should reflect actual services such as Cosmetic dentist, Pediatric dentist, Emergency dental service, or Dental implants periodontist."],
  ["How many Google reviews does a dental practice need to rank in New Jersey?", "Most NJ dental markets need a strong base of reviews and steady review velocity. Consistent new Google reviews, strong ratings, and review responses all support Map Pack performance."],
  ["Can local SEO help my dental practice show up in ChatGPT and Google AI Overviews?", "Yes. AI search systems use clear business entities, Google Business Profile data, structured website content, FAQs, reviews, and schema to understand and cite local dental practices."],
  ["Does my dental practice need a separate SEO page for each procedure?", "Dedicated service pages for high-value procedures such as dental implants, Invisalign, emergency dentistry, and cosmetic dentistry usually perform better than a single generic services page."],
  ["What NJ cities does Flux Media Creations serve for dental SEO?", "Flux Media Creations provides local SEO for dental practices across New Jersey, including Newark, Jersey City, Hoboken, Hackensack, Montclair, Morristown, Bergen County, Essex County, Hudson County, and nearby markets."],
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Local SEO for Dentists in New Jersey",
  provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
  serviceType: "Dental SEO, Local SEO, Google Maps SEO, Google Business Profile Optimization",
  areaServed: { "@type": "State", name: "New Jersey" },
  description:
    "Flux Media Creations provides local SEO for dental practices in New Jersey, including Google Business Profile optimization, dental website SEO, citations, patient review automation, and AI search visibility.",
  url: `${SITE.url}/local-seo-new-jersey/local-seo-dentists-new-jersey`,
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
  name: "How Flux Media Creations improves local SEO for NJ dental practices",
  step: [
    "Local SEO audit",
    "Keyword and competitor research",
    "Google Business Profile and on-page optimization",
    "Citation building and NAP cleanup",
    "Patient review automation setup",
    "AI visibility structuring",
  ].map((name, index) => ({ "@type": "HowToStep", position: index + 1, name })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Local SEO New Jersey", item: `${SITE.url}/local-seo-new-jersey` },
    { "@type": "ListItem", position: 3, name: "Local SEO for Dentists New Jersey", item: `${SITE.url}/local-seo-new-jersey/local-seo-dentists-new-jersey` },
  ],
};

export default function LocalSEODentistsNewJerseyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <LocalSEODentistsNJClient />
    </>
  );
}
