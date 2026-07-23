import { safeJsonLd } from "@/lib/json-ld";
import RevenueIntelligencePage from "@/components/revenue-intelligence/RevenueIntelligencePage";
import { generateMeta } from "@/lib/seo";
import { SITE } from "@/lib/constants";

export const metadata = generateMeta({
  absoluteTitle: "Revenue Intelligence | Connected Growth Systems by Flux",
  description: "Revenue Intelligence connects your CRM, marketing, and communication data so you can see exactly where opportunities are lost. See how Flux builds it.",
  socialTitle: "Turn Disconnected Business Data Into Revenue Intelligence",
  socialDescription: "Most businesses don't lack data, they lack a connected view of it. Here's how Flux turns scattered systems into revenue intelligence you can act on.",
  twitterTitle: "What Is Revenue Intelligence?",
  twitterDescription: "Your CRM, website, and calls all tell part of the story. Revenue Intelligence connects them so you can see the whole one.",
  path: "/revenue-intelligence",
});

const faqItems = [
  ["What is Revenue Intelligence?", "Revenue Intelligence is the practice of connecting a business's marketing, sales, communication, and CRM data into one understood view of where opportunities come from, how they move, and where they're being lost."],
  ["How is Revenue Intelligence different from CRM?", "A CRM stores contact records and logs activity. Revenue Intelligence connects that data with marketing and communication signals to show the full customer journey and surface where opportunities are actually being lost, not just what activity took place."],
  ["Why do businesses need Revenue Intelligence?", "Because most businesses collect data across several disconnected systems, which makes it difficult to know with confidence where growth is coming from or where it is being lost. Revenue Intelligence connects those systems so decisions can be based on evidence instead of guesswork."],
  ["How can Revenue Intelligence improve revenue?", "By identifying specific points where opportunities are lost, such as slow response times or under-tracked channels, so a business can fix the exact gap causing lost revenue rather than spending more on generating new leads that leak through the same gap."],
  ["Can AI improve revenue operations?", "Yes, when it is used to handle well-defined, repeatable tasks like flagging a stalled lead or summarizing a customer's journey so far, as part of a connected system with human oversight."],
  ["What data does Revenue Intelligence use?", "Website behavior, call logs, form submissions, chat and message history, and CRM activity, connected together rather than reviewed separately."],
];

const schemas = [
  { "@context": "https://schema.org", "@type": "Organization", name: "Flux Media Creations", url: SITE.url, description: "Flux builds connected revenue intelligence and operating systems for service businesses, turning scattered marketing, sales, and CRM data into a single understood view of growth." },
  { "@context": "https://schema.org", "@type": "WebPage", name: "Revenue Intelligence", url: `${SITE.url}/revenue-intelligence`, description: "Revenue Intelligence connects a business's marketing, sales, communication, and CRM data into one understood view of where opportunities come from, how they move, and where they're being lost.", isPartOf: { "@type": "WebSite", url: SITE.url } },
  { "@context": "https://schema.org", "@type": "Service", name: "Revenue Intelligence System", provider: { "@type": "Organization", name: "Flux Media Creations" }, description: "A connected system that brings together marketing, sales, communication, and CRM data to give service businesses a single understood view of where revenue is generated and where it is lost.", serviceType: "Business Revenue Intelligence System", areaServed: "United States" },
  { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE.url }, { "@type": "ListItem", position: 2, name: "Revenue Intelligence", item: `${SITE.url}/revenue-intelligence` }] },
  { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) },
  { "@context": "https://schema.org", "@type": "ItemList", name: "The Flux Revenue Intelligence Framework", itemListElement: ["Signal Collection", "Customer Journey Visibility", "Opportunity Intelligence", "Decision Intelligence"].map((name, index) => ({ "@type": "ListItem", position: index + 1, name })) },
];

export default function Page() {
  return <>{schemas.map((schema) => <script key={safeJsonLd(schema)} type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }} />)}<RevenueIntelligencePage /></>;
}
