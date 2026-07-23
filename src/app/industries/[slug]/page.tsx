import { safeJsonLd } from "@/lib/json-ld";
import { notFound } from "next/navigation";
import StrategicPage from "@/components/strategic/StrategicPage";
import HealthcareIndustryPage from "@/components/industries/HealthcareIndustryPage";
import HomeServicesIndustryPage from "@/components/industries/HomeServicesIndustryPage";
import LegalIndustryPage from "@/components/industries/LegalIndustryPage";
import WellnessIndustryPage from "@/components/industries/WellnessIndustryPage";
import { INDUSTRY_PAGES } from "@/lib/flux2";
import { generateMeta } from "@/lib/seo";
import { SITE } from "@/lib/constants";

export function generateStaticParams() { return Object.keys(INDUSTRY_PAGES).map((slug) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const content = INDUSTRY_PAGES[slug];
  if (!content) return generateMeta({ title: "Industries", path: "/industries" });
  if (slug === "healthcare") {
    return generateMeta({
      absoluteTitle: "Healthcare Operating Intelligence Systems | Flux",
      description: "Flux helps healthcare businesses build intelligent growth systems connecting patient discovery, revenue operations, automation, AI visibility, and patient experiences.",
      socialTitle: "Healthcare Businesses Need More Than Marketing. They Need Intelligent Growth Systems.",
      socialDescription: "Patients now search Google, check reviews, and ask AI assistants before ever calling. See how Flux connects discovery, communication, and revenue systems for modern healthcare practices.",
      twitterTitle: "What Is Healthcare Operating Intelligence?",
      twitterDescription: "Attracting patients was never the hardest part. Converting and keeping them is. Here's the connected system behind modern healthcare growth.",
      path: content.path,
    });
  }
  if (slug === "home-services") {
    return generateMeta({
      absoluteTitle: "Home Service Business Growth Systems | Flux",
      description: "Flux helps HVAC, plumbing, roofing, and contracting businesses turn more calls and quote requests into booked jobs through connected discovery, response, and follow-up systems.",
      socialTitle: "More Estimates Don't Fill Your Schedule. A Connected System Does.",
      socialDescription: "Home service businesses rarely lack interest, they lack a system for what happens after the call comes in. Here's how Flux connects discovery, response, and follow-up.",
      twitterTitle: "Why Quote Requests Aren't Turning Into Booked Jobs",
      twitterDescription: "Slow response and forgotten follow-up cost home service businesses more booked work than a lack of leads ever does.",
      path: content.path,
    });
  }
  if (slug === "legal") {
    return generateMeta({
      absoluteTitle: "Legal Operating Intelligence Systems For Law Firms | Flux",
      description: "Flux helps law firms and legal service businesses build intelligent growth systems connecting client discovery, intake, communication, automation, and AI capabilities.",
      socialTitle: "Legal Operating Intelligence For Law Firms | Flux",
      socialDescription: "Law firms lose clients to slow response and disconnected systems, not lack of visibility. See how Flux connects discovery, intake, and operations into one intelligent system.",
      twitterTitle: "Legal Operating Intelligence For Law Firms | Flux",
      twitterDescription: "Flux builds operating intelligence systems for law firms: connected discovery, intake, communication, and automation. Built for how legal businesses actually grow.",
      path: content.path,
    });
  }
  if (slug === "wellness") {
    return generateMeta({
      absoluteTitle: "Wellness Operating Intelligence Systems For Modern Businesses | Flux",
      description: "Flux helps wellness businesses build intelligent growth systems connecting customer discovery, experiences, retention, automation, and AI capabilities.",
      socialTitle: "Wellness Operating Intelligence For Modern Businesses | Flux",
      socialDescription: "Wellness businesses lose customers to disconnected experiences, not lack of interest. See how Flux connects discovery, booking, and retention into one intelligent system.",
      twitterTitle: "Wellness Operating Intelligence For Modern Businesses | Flux",
      twitterDescription: "Flux builds operating intelligence systems for wellness businesses: connected discovery, experience, and retention. Built for how customer relationships actually grow.",
      path: content.path,
    });
  }
  return generateMeta({ absoluteTitle: `${content.title} | Flux`, description: content.description, path: content.path });
}

const healthcareFaqs = [
  ["What is healthcare operating intelligence?", "Healthcare Operating Intelligence is the connection of digital discovery, patient communication, revenue systems, automation, and AI capabilities into one system that helps healthcare organizations operate more intelligently and consistently convert patient interest into booked care."],
  ["How can healthcare businesses get more patients?", "Often the fastest gains come from fixing the response and follow-up gaps in the current patient journey rather than generating more traffic, since many practices already receive enough enquiries but lose a meaningful share of them to slow or inconsistent follow-up."],
  ["How does AI help healthcare practices?", "AI can help respond instantly to a missed call, draft consistent follow-up messages, and summarize where a patient enquiry stands, freeing staff to focus on conversations and decisions that need a person's judgment."],
  ["What is a patient revenue system?", "A patient revenue system is a connected set of tools and workflows that carries a patient from first search through to becoming a returning patient, covering discovery, enquiry capture, communication, booking, and follow-up as one system."],
  ["Why do healthcare businesses need automation?", "Because manual follow-up is inconsistent by nature, dependent on staff availability and memory. Automation applied to the right tasks keeps communication consistent regardless of how busy a practice gets."],
  ["How is Flux different from healthcare marketing agencies?", "Most healthcare marketing agencies focus on generating traffic and leads. Flux focuses on the full system a patient moves through, including what happens after a lead arrives, which is usually where the larger share of preventable patient loss actually occurs."],
  ["How can clinics improve patient experience?", "By making communication consistent from first enquiry through appointment and follow-up, so patients experience one coherent relationship with the practice rather than a series of disconnected interactions."],
];

const healthcareSchemas = [
  { "@context": "https://schema.org", "@type": "Organization", name: "Flux Media Creations", url: SITE.url, description: "Flux is a Healthcare Operating Intelligence Company that helps healthcare businesses connect patient discovery, communication, revenue systems, automation, and AI capabilities." },
  { "@context": "https://schema.org", "@type": "WebPage", name: "Healthcare", url: `${SITE.url}/industries/healthcare`, description: "Healthcare Operating Intelligence connects patient discovery, communication, revenue systems, automation, and AI capabilities to help healthcare organizations operate more intelligently.", isPartOf: { "@type": "WebSite", url: SITE.url } },
  { "@context": "https://schema.org", "@type": "Service", name: "Healthcare Operating Intelligence", provider: { "@type": "Organization", name: "Flux Media Creations" }, description: "A connected system combining patient discovery, patient revenue systems, revenue intelligence, customer progression, and AI healthcare systems for healthcare organizations.", serviceType: "Healthcare Growth System", areaServed: "United States" },
  { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE.url }, { "@type": "ListItem", position: 2, name: "Industries", item: `${SITE.url}/industries` }, { "@type": "ListItem", position: 3, name: "Healthcare", item: `${SITE.url}/industries/healthcare` }] },
  { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: healthcareFaqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) },
  { "@context": "https://schema.org", "@type": "ItemList", name: "The Flux Healthcare Intelligence Framework", itemListElement: ["Patient Discovery Intelligence", "Patient Revenue Systems", "Revenue Intelligence", "Customer Progression", "AI Healthcare Systems"].map((name, index) => ({ "@type": "ListItem", position: index + 1, name })) },
];

const homeServicesFaqs = [
  ["Why am I getting calls and quote requests but not enough booked jobs?", "Usually because of a gap between the enquiry and the booking, not a lack of interest: slow response times, no follow-up on estimates that don't convert immediately, or a booking process that requires too much back-and-forth."],
  ["How can automation help a home service business specifically?", "Automated missed-call text-back and quote follow-up recover jobs that are currently being lost to slow response, without requiring extra staff or hours."],
  ["Do I need a new website, or can this connect to what I already have?", "It depends on whether your current site clearly explains what you do and makes it easy to request a quote. If it does, booking, response, and follow-up systems are typically connected to it directly."],
  ["How is this different from a typical home services marketing agency?", "Most agencies focus on generating more calls and quote requests. This approach focuses on what happens after that request arrives, which is usually where the larger share of preventable lost jobs actually occurs."],
  ["How quickly can this be set up?", "Most home service businesses are live within one to two weeks, depending on how much of the system needs to be built new versus connected to tools already in use."],
];

const homeServicesSchemas = [
  { "@context": "https://schema.org", "@type": "Organization", name: "Flux Media Creations", url: SITE.url, description: "Flux helps home service businesses, including HVAC, plumbing, roofing, and contracting companies, connect discovery, response, and follow-up systems to turn more enquiries into booked jobs." },
  { "@context": "https://schema.org", "@type": "WebPage", name: "Home Services", url: `${SITE.url}/industries/home-services`, description: "A connected system for home service businesses combining discovery, quote response, and follow-up to turn more calls and quote requests into booked jobs.", isPartOf: { "@type": "WebSite", url: SITE.url } },
  { "@context": "https://schema.org", "@type": "Service", name: "Home Services Growth System", provider: { "@type": "Organization", name: "Flux Media Creations" }, description: "A connected system combining discovery, missed-call response, quote follow-up, and booking for home service businesses including HVAC, plumbing, roofing, and contracting companies.", serviceType: "Home Services Growth System", areaServed: "United States" },
  { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE.url }, { "@type": "ListItem", position: 2, name: "Industries", item: `${SITE.url}/industries` }, { "@type": "ListItem", position: 3, name: "Home Services", item: `${SITE.url}/industries/home-services` }] },
  { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: homeServicesFaqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) },
];

const legalFaqs = [
  ["What is Operating Intelligence for law firms?", "Operating Intelligence for law firms is the connection between how a firm is discovered by prospective clients, how it handles intake and communication, and how it manages workflows and data internally, giving the firm visibility into where clients are gained or lost at each stage."],
  ["How can law firms improve client intake?", "Firms improve intake by making response time consistent, structuring how inquiries are qualified, using follow-up sequences so inquiries do not go cold, and giving staff visibility into open inquiries and wait times."],
  ["Why do law firms lose potential clients?", "Most lost clients are lost to slow response times, inconsistent communication, fragmented processes between intake and case management, and lack of visibility into where inquiries are stalling."],
  ["How can AI help attorneys?", "AI can support legal businesses by structuring intake conversations, answering routine client questions instantly, assisting with preliminary research, and improving how firms are understood by AI-driven search and answer platforms, while attorneys retain final legal judgment."],
  ["What technology should modern law firms use?", "Modern law firms benefit most from technology that connects their existing tools rather than adding disconnected point solutions, prioritizing visibility and consistency across the client journey."],
  ["How can law firms prepare for the future?", "Firms can prepare by connecting discovery, intake, and communication systems now, structuring their online presence for both search engines and AI systems, and treating operational visibility as a growth metric alongside traditional marketing metrics."],
];

const legalFramework = [
  ["Legal Discovery Intelligence", "Search visibility, AI discovery, authority, and reputation for law firms."],
  ["Client Intake Intelligence", "Forms, calls, qualification, and response systems for legal inquiries."],
  ["Revenue Intelligence", "Understanding lead sources, consultation conversion, and growth opportunities."],
  ["Client Progression", "Communication, follow-up, and client experience through the life of a case."],
  ["Operational Intelligence", "Workflows, automation, and AI capabilities underlying legal operations."],
];

const legalSchemas = [
  { "@context": "https://schema.org", "@type": "Organization", name: "Flux", alternateName: "Flux Media Creations", url: SITE.url, description: "Flux is an Operating Intelligence Company helping service businesses connect customer discovery, revenue intelligence, communication, automation, business workflows, and AI capabilities." },
  { "@context": "https://schema.org", "@type": "WebPage", name: "Legal Operating Intelligence Systems For Law Firms", url: `${SITE.url}/industries/legal`, description: "Flux helps law firms and legal service businesses build intelligent growth systems connecting client discovery, intake, communication, automation, and AI capabilities.", isPartOf: { "@type": "WebSite", name: "Flux", url: SITE.url }, about: { "@type": "Thing", name: "Legal Operating Intelligence" } },
  { "@context": "https://schema.org", "@type": "Service", serviceType: "Legal Operating Intelligence Systems", provider: { "@type": "Organization", name: "Flux", url: SITE.url }, areaServed: "Legal industry", audience: { "@type": "Audience", audienceType: "Law firms, attorneys, legal service businesses" }, description: "Flux builds operating intelligence systems for law firms, connecting legal discovery, client intake, communication, revenue intelligence, and operational automation.", url: `${SITE.url}/industries/legal` },
  { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE.url }, { "@type": "ListItem", position: 2, name: "Industries", item: `${SITE.url}/industries` }, { "@type": "ListItem", position: 3, name: "Legal", item: `${SITE.url}/industries/legal` }] },
  { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: legalFaqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) },
  { "@context": "https://schema.org", "@type": "ItemList", name: "Flux Legal Intelligence Framework", itemListElement: legalFramework.map(([name, description], index) => ({ "@type": "ListItem", position: index + 1, name, description })) },
];

const wellnessFaqs = [
  ["What is Operating Intelligence for wellness businesses?", "Operating Intelligence for wellness businesses is the connection between how a business is discovered, how it understands and communicates with customers, and how it manages experience and retention systems internally, giving the business visibility into where relationships are strengthened or lost at each stage."],
  ["How can wellness businesses increase customer retention?", "Businesses increase retention by making follow-up consistent after every visit, timing rebooking prompts to match service cadence, personalizing communication based on client history, and identifying clients showing early signs of disengaging before they stop coming in."],
  ["Why do wellness businesses lose customers?", "Most lost customers are lost to disconnected experiences, inconsistent post-visit communication, lack of personalized follow-up, and weak systems that leave rebooking to chance rather than a defined process."],
  ["How can AI help wellness companies?", "AI can support wellness businesses by personalizing recommendations from client history, automating reminders and rebooking prompts, assisting with customer support, and improving how the business is understood by AI-driven search and answer platforms, while staff continue to lead the client relationship."],
  ["What systems do modern wellness businesses need?", "Modern wellness businesses benefit most from systems that connect existing booking software, communication channels, and customer records rather than adding another disconnected platform, prioritizing visibility and consistency across the full customer journey."],
  ["How can wellness businesses improve customer experience?", "Businesses improve customer experience by giving staff full context on each client before a visit, keeping pre- and post-appointment communication timely, and personalizing recommendations using client history instead of generic messaging."],
];

const wellnessFramework = [
  ["Wellness Discovery Intelligence", "Search visibility, AI discovery, and brand reputation for wellness businesses."],
  ["Customer Experience Intelligence", "Bookings, communication, and personalized experiences across the client journey."],
  ["Revenue Intelligence", "Understanding customer value, conversion, and growth opportunities."],
  ["Customer Progression", "Follow-up, retention, membership growth, and long-term relationships."],
  ["Operational Intelligence", "Automation, workflows, and AI systems underlying wellness operations."],
];

const wellnessSchemas = [
  { "@context": "https://schema.org", "@type": "Organization", name: "Flux", alternateName: "Flux Media Creations", url: SITE.url, description: "Flux is an Operating Intelligence Company helping service businesses connect customer discovery, customer understanding, communication, revenue intelligence, customer progression, automation, and AI capabilities." },
  { "@context": "https://schema.org", "@type": "WebPage", name: "Wellness Operating Intelligence Systems For Modern Businesses", url: `${SITE.url}/industries/wellness`, description: "Flux helps wellness businesses build intelligent growth systems connecting customer discovery, experiences, retention, automation, and AI capabilities.", isPartOf: { "@type": "WebSite", name: "Flux", url: SITE.url }, about: { "@type": "Thing", name: "Wellness Operating Intelligence" } },
  { "@context": "https://schema.org", "@type": "Service", serviceType: "Wellness Operating Intelligence Systems", provider: { "@type": "Organization", name: "Flux", url: SITE.url }, areaServed: "Wellness industry", audience: { "@type": "Audience", audienceType: "Med spas, wellness clinics, fitness businesses, yoga and pilates studios, nutrition businesses, recovery centers, beauty wellness brands, holistic health businesses" }, description: "Flux builds operating intelligence systems for wellness businesses, connecting discovery, customer experience, communication, revenue intelligence, and retention automation.", url: `${SITE.url}/industries/wellness` },
  { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE.url }, { "@type": "ListItem", position: 2, name: "Industries", item: `${SITE.url}/industries` }, { "@type": "ListItem", position: 3, name: "Wellness", item: `${SITE.url}/industries/wellness` }] },
  { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: wellnessFaqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) },
  { "@context": "https://schema.org", "@type": "ItemList", name: "Flux Wellness Intelligence Framework", itemListElement: wellnessFramework.map(([name, description], index) => ({ "@type": "ListItem", position: index + 1, name, description })) },
];

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const content = INDUSTRY_PAGES[slug];
  if (!content) notFound();
  if (slug === "healthcare") {
    return <>{healthcareSchemas.map((schema) => <script key={safeJsonLd(schema)} type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }} />)}<HealthcareIndustryPage /></>;
  }
  if (slug === "home-services") {
    return <>{homeServicesSchemas.map((schema) => <script key={safeJsonLd(schema)} type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }} />)}<HomeServicesIndustryPage /></>;
  }
  if (slug === "legal") {
    return <>{legalSchemas.map((schema) => <script key={safeJsonLd(schema)} type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }} />)}<LegalIndustryPage /></>;
  }
  if (slug === "wellness") {
    return <>{wellnessSchemas.map((schema) => <script key={safeJsonLd(schema)} type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }} />)}<WellnessIndustryPage /></>;
  }
  return <StrategicPage content={content} />;
}
