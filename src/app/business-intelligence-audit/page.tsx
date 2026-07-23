import BusinessIntelligenceAuditPage from "@/components/business-intelligence-audit/BusinessIntelligenceAuditPage";
import { generateMeta } from "@/lib/seo";
import { SITE } from "@/lib/constants";

export const metadata = generateMeta({
  absoluteTitle: "Business Intelligence Audit | Find Your Growth Opportunities | Flux",
  description: "Discover where your business loses opportunities with the Flux Business Intelligence Audit. Analyze customer journeys, revenue systems, automation, and AI readiness.",
  socialTitle: "Discover Where Your Business Is Losing Opportunities",
  socialDescription: "Most growth problems aren't marketing problems, they're connection problems. Get your Business Intelligence Score and see exactly where your systems are losing opportunities.",
  twitterTitle: "What's Your Business Intelligence Score?",
  twitterDescription: "A structured assessment of your discovery, customer journey, revenue process, and AI readiness, scored out of 100.",
  path: "/business-intelligence-audit",
});

const faqItems = [
  ["What is a Business Intelligence Audit?", "A Business Intelligence Audit is a structured assessment that evaluates how effectively a company discovers customers, manages the customer journey, converts opportunities, and uses its systems to support growth, resulting in a scored, specific view of where the business is losing revenue."],
  ["How long does the audit take?", "Most businesses complete the assessment questions in under ten minutes. Your score and initial findings are available immediately after submission."],
  ["What does the Business Intelligence Score measure?", "It measures five areas: discovery, customer journey, revenue, operations, and AI readiness."],
  ["Is this only for healthcare businesses?", "No. The audit applies to any service business that depends on enquiries moving through discovery, response, and conversion, including home services, legal, wellness, and other professional services, alongside healthcare."],
  ["How can businesses improve their AI readiness?", "By making sure their digital presence, including structured data, published content, and reviews, is clear and consistent enough for AI search tools to understand and recommend them with confidence."],
  ["What happens after completing the audit?", "You receive your Business Intelligence Score and your business's specific top opportunities immediately, then can book a conversation with Flux to build a roadmap for closing the highest-impact gaps first."],
];
const steps = [
  ["Complete the assessment", "Answer a short set of questions about your business, current tools, and how customers reach you."],
  ["Receive your score", "Get your Business Intelligence Score out of 100, broken down across discovery, customer journey, revenue, operations, and AI readiness."],
  ["Identify your opportunities", "Review the specific factors driving your score and where your business is most likely losing revenue right now."],
  ["Build your roadmap", "Discuss your results with Flux and map out how to close the highest-impact gaps first."],
];
const schemas = [
  { "@context": "https://schema.org", "@type": "Organization", name: "Flux Media Creations", url: SITE.url, description: "Flux is an Operating Intelligence Company that helps service businesses discover customers, convert opportunities, and connect their systems through the Business Intelligence Audit and related solutions." },
  { "@context": "https://schema.org", "@type": "WebPage", name: "Business Intelligence Audit", url: `${SITE.url}/business-intelligence-audit`, description: "A structured assessment that evaluates how effectively a business discovers customers, manages the customer journey, converts opportunities, and uses its systems to support growth.", isPartOf: { "@type": "WebSite", url: SITE.url } },
  { "@context": "https://schema.org", "@type": "Service", name: "Business Intelligence Audit", provider: { "@type": "Organization", name: "Flux Media Creations" }, description: "A scored assessment covering discovery intelligence, customer journey intelligence, revenue intelligence, operational intelligence, and AI readiness, resulting in a specific roadmap of growth opportunities.", serviceType: "Business Assessment", areaServed: "United States" },
  { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE.url }, { "@type": "ListItem", position: 2, name: "Assessment", item: `${SITE.url}/assessment` }, { "@type": "ListItem", position: 3, name: "Business Intelligence Audit", item: `${SITE.url}/business-intelligence-audit` }] },
  { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) },
  { "@context": "https://schema.org", "@type": "HowTo", name: "How the Business Intelligence Audit Works", step: steps.map(([name, text]) => ({ "@type": "HowToStep", name, text })) },
];
export default function Page() { return <>{schemas.map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}<BusinessIntelligenceAuditPage /></>; }
