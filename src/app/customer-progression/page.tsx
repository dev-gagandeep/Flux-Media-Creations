import { safeJsonLd } from "@/lib/json-ld";
import CustomerProgressionPage from "@/components/customer-progression/CustomerProgressionPage";
import { generateMeta } from "@/lib/seo";
import { SITE } from "@/lib/constants";

export const metadata = generateMeta({
  absoluteTitle: "Customer Progression Systems | Improve Customer Journeys | Flux",
  description: "Flux builds customer progression systems that help businesses improve follow-up, customer journeys, communication, conversion, and long-term relationships.",
  socialTitle: "Getting Attention Was Never the Hard Part. Customer Progression Is.",
  socialDescription: "Most businesses lose customers after the first interaction, not before it. Here's how Flux connects communication, workflows, and intelligence to keep customers moving forward.",
  twitterTitle: "What Is Customer Progression?",
  twitterDescription: "More leads won't fix a business that can't move the leads it already has forward. Here's the system that does.",
  path: "/customer-progression",
});

const faqItems = [
  ["What is Customer Progression?", "Customer Progression is the process and system businesses use to help customers move from initial awareness through engagement, conversion, and into a long-term relationship, instead of stalling out after the first interaction."],
  ["Why do businesses lose leads after generating enquiries?", "Because most businesses put their effort into generating the enquiry and very little into what happens afterward: response speed, follow-up consistency, and visibility into where a specific customer stands in their decision."],
  ["How does Customer Progression improve conversions?", "By making sure every enquiry is captured, responded to quickly, and followed up with consistently, based on where that customer actually is in their journey, rather than relying on manual effort that varies by who happens to be available."],
  ["Is Customer Progression the same as CRM?", "No. A CRM stores customer information and logs activity. Customer Progression uses that information, along with communication and workflow automation, to actively move a customer forward through their journey."],
  ["How does AI improve customer journeys?", "AI can help understand where a conversation stands, prioritize which opportunities need attention first, and support fast, consistent communication, particularly for straightforward responses that do not require a judgment call from a person."],
  ["What businesses need customer progression systems?", "Any business generating enquiries through more than one channel, such as calls, forms, and messages, where a slow or inconsistent follow-up would mean losing a customer who was otherwise ready to move forward."],
  ["How does automation improve customer relationships?", "By making sure follow-up happens consistently regardless of staff workload, so customers do not experience gaps in communication simply because the business got busy."],
];
const schemas = [
  { "@context": "https://schema.org", "@type": "Organization", name: "Flux Media Creations", url: SITE.url, description: "Flux builds customer progression systems that help businesses move customers from enquiry to conversion to long-term relationship through connected communication, workflows, and intelligence." },
  { "@context": "https://schema.org", "@type": "WebPage", name: "Customer Progression", url: `${SITE.url}/customer-progression`, description: "Customer Progression is the process and system businesses use to help customers move from initial awareness through engagement, conversion, and long-term relationships.", isPartOf: { "@type": "WebSite", url: SITE.url } },
  { "@context": "https://schema.org", "@type": "Service", name: "Customer Progression System", provider: { "@type": "Organization", name: "Flux Media Creations" }, description: "A connected system that helps businesses improve customer journeys through communication, automation, intelligence, and workflow design.", serviceType: "Customer Journey Management System", areaServed: "United States" },
  { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE.url }, { "@type": "ListItem", position: 2, name: "Solutions", item: `${SITE.url}/solutions` }, { "@type": "ListItem", position: 3, name: "Customer Progression", item: `${SITE.url}/customer-progression` }] },
  { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) },
  { "@context": "https://schema.org", "@type": "ItemList", name: "The Flux Customer Progression Framework", itemListElement: ["Capture Intelligence", "Response Intelligence", "Journey Intelligence", "Progression Workflows", "Relationship Intelligence"].map((name, index) => ({ "@type": "ListItem", position: index + 1, name })) },
];
export default function Page() { return <>{schemas.map((schema) => <script key={safeJsonLd(schema)} type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }} />)}<CustomerProgressionPage /></>; }
