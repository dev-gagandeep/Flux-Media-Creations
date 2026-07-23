import AIDiscoveryPage from "@/components/ai-discovery/AIDiscoveryPage";
import { generateMeta } from "@/lib/seo";
import { SITE } from "@/lib/constants";

export const metadata = generateMeta({
  absoluteTitle: "AI Discovery | AI Search Visibility Systems For Businesses | Flux",
  description: "Flux helps businesses become visible across Google, AI search, ChatGPT, Gemini and emerging discovery platforms through AI discovery systems built for the future of search.",
  socialTitle: "AI Discovery: Getting Found When Search Isn't Just Google Anymore",
  socialDescription: "Customers are asking ChatGPT and Google's AI Overview for recommendations, not just search results. Here's how Flux helps businesses become the answer AI systems give.",
  twitterTitle: "What Is AI Discovery?",
  twitterDescription: "Ranking #1 on Google isn't the whole game anymore. Here's how businesses get recommended by ChatGPT, Gemini, and AI search.",
  path: "/ai-discovery",
});

const faqItems = [
  ["What is AI Discovery?", "AI Discovery is the practice of helping a business become visible and understandable across search engines, AI assistants, and recommendation systems, so it can be found regardless of which one a customer uses to look for it."],
  ["What is AI search optimization?", "AI search optimization is the work of making a business's information clear, consistent, and structured enough that AI systems like ChatGPT, Gemini, and Google's AI Overviews can confidently recommend it in response to a customer's question."],
  ["How is AI Discovery different from SEO?", "Traditional SEO focuses mainly on ranking in search engine results pages. AI Discovery builds on that foundation but extends it to how AI systems understand and recommend a business directly, including in conversations where no traditional results page ever appears."],
  ["How do businesses appear in ChatGPT results?", "By having a clear, consistent digital presence: accurate business information published in structured formats, content that directly answers common customer questions, and a credible reputation reflected in reviews and third-party mentions."],
  ["Will SEO still matter in the AI era?", "Yes. Traditional SEO remains the foundation AI systems draw much of their understanding from. AI Discovery does not replace SEO, it extends it to cover the additional channels where customers are now asking for recommendations directly."],
];

const schemas = [
  { "@context": "https://schema.org", "@type": "Organization", name: "Flux Media Creations", url: SITE.url, description: "Flux helps businesses become visible and understood across search engines, AI assistants, and recommendation systems through AI Discovery systems." },
  { "@context": "https://schema.org", "@type": "WebPage", name: "AI Discovery", url: `${SITE.url}/ai-discovery`, description: "AI Discovery is the practice of helping a business become visible and understandable across search engines, AI assistants, and recommendation systems.", isPartOf: { "@type": "WebSite", url: SITE.url } },
  { "@context": "https://schema.org", "@type": "Service", name: "AI Discovery System", provider: { "@type": "Organization", name: "Flux Media Creations" }, description: "A system that helps businesses become visible and recommendable across Google, AI Overviews, ChatGPT, Gemini, Perplexity, and Maps, through entity, content, reputation, and structured data optimization.", serviceType: "AI Search Visibility System", areaServed: "United States" },
  { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE.url }, { "@type": "ListItem", position: 2, name: "Solutions", item: `${SITE.url}/solutions` }, { "@type": "ListItem", position: 3, name: "AI Discovery", item: `${SITE.url}/ai-discovery` }] },
  { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) },
  { "@context": "https://schema.org", "@type": "ItemList", name: "The Components of AI Discovery", itemListElement: ["Search Intelligence", "Entity Intelligence", "Content Intelligence", "Reputation Intelligence", "Structured Intelligence"].map((name, index) => ({ "@type": "ListItem", position: index + 1, name })) },
];

export default function Page() {
  return <>{schemas.map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}<AIDiscoveryPage /></>;
}
