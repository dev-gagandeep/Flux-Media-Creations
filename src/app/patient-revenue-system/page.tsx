import { safeJsonLd } from "@/lib/json-ld";
import PatientRevenueSystemPage from "@/components/patient-revenue/PatientRevenueSystemPage";
import { generateMeta } from "@/lib/seo";
import { SITE } from "@/lib/constants";

export const metadata = generateMeta({
  absoluteTitle: "Patient Revenue System | Healthcare Growth by Flux",
  description: "A Patient Revenue System connects discovery, booking, and follow-up so clinics stop losing patients after the first call. See how Flux builds it.",
  socialTitle: "The Patient Revenue System: Why Getting More Patients Isn't the Real Problem",
  socialDescription: "Most clinics don't have a demand problem, they have a connection problem. Here's how Flux connects discovery, communication, booking, and follow-up into one system.",
  twitterTitle: "What Is a Patient Revenue System?",
  twitterDescription: "Clinics lose more patients to slow response and disconnected systems than to lack of demand. Here's the system that fixes it.",
  path: "/patient-revenue-system",
});

const faqs = [
  ["What is a Patient Revenue System?", "A Patient Revenue System is a connected set of tools and workflows that carries a patient from first search through to becoming a returning patient, covering discovery, enquiry capture, communication, booking, and follow-up as one system instead of separate, disconnected tools."],
  ["How can clinics get more patient appointments?", "The fastest gains usually come from fixing the response gap rather than adding more traffic: responding to missed calls within a minute, replying to form submissions the same day, and following up automatically with patients who showed interest but didn't book."],
  ["Why do healthcare clinics lose leads?", "Most commonly because enquiries arrive through several channels that aren't connected to one system, so some enquiries are missed entirely, and there's no consistent, fast follow-up for the ones that are caught."],
  ["How does AI help healthcare practices?", "Used well, AI can handle immediate, low-judgment tasks like responding to a missed call or drafting a follow-up message, freeing staff for the parts of patient communication that need a human."],
  ["What is the difference between healthcare marketing and a Patient Revenue System?", "Healthcare marketing focuses on generating traffic and leads. A Patient Revenue System covers the full journey after that lead arrives, including response speed, booking conversion, and post-visit follow-up."],
  ["How does appointment automation help clinics?", "Automated booking, reminders, and follow-up reduce the number of steps between interest and a confirmed appointment, and they reduce no-shows by keeping patients informed without relying on staff to manually track and remind each one."],
];

const schemas = [
  { "@context": "https://schema.org", "@type": "Organization", name: "Flux Media Creations", url: SITE.url, description: "Flux builds connected patient revenue systems for healthcare clinics, combining discovery, communication, booking, and follow-up into one system." },
  { "@context": "https://schema.org", "@type": "WebPage", name: "Patient Revenue System", url: `${SITE.url}/patient-revenue-system`, description: "A Patient Revenue System connects patient discovery, capture, communication, appointment conversion, and continuity into one connected system for healthcare clinics.", isPartOf: { "@type": "WebSite", url: SITE.url } },
  { "@context": "https://schema.org", "@type": "Service", name: "Patient Revenue System", provider: { "@type": "Organization", name: "Flux Media Creations" }, description: "A connected system for healthcare clinics combining patient discovery, enquiry capture, communication, appointment booking, and follow-up automation.", serviceType: "Healthcare Growth System", areaServed: "United States" },
  { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE.url }, { "@type": "ListItem", position: 2, name: "Patient Revenue System", item: `${SITE.url}/patient-revenue-system` }] },
  { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) },
  { "@context": "https://schema.org", "@type": "ItemList", name: "The Five Layers of a Patient Revenue System", itemListElement: ["Patient Discovery Intelligence", "Patient Capture System", "Patient Communication System", "Appointment Conversion System", "Patient Continuity System"].map((name, index) => ({ "@type": "ListItem", position: index + 1, name })) },
];

export default function Page() {
  return <>{schemas.map((schema) => <script key={safeJsonLd(schema)} type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }} />)}<PatientRevenueSystemPage /></>;
}
