import { safeJsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import ClinicsPage from "@/components/clinics/ClinicsPage";
import { generateMeta } from "@/lib/seo";
import { SITE, SOCIAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = generateMeta({
  absoluteTitle: "Recover Lost Patient Opportunities With Flux Healthcare Systems",
  description: "Flux helps healthcare clinics convert more patient enquiries into appointments with connected systems for discovery, communication, booking, follow-up, and AI visibility.",
  socialTitle: "Turn More Patient Enquiries Into Booked Appointments | Flux",
  socialDescription: "Healthcare clinics lose opportunities when patient journeys break. Flux builds connected revenue systems that improve discovery, response, booking, and follow-up.",
  path: "/clinics",
});

const faqItems = [
  ["What is a patient revenue system?", "A patient revenue system connects how patients discover a healthcare clinic, submit enquiries, communicate with the practice, schedule appointments, receive follow-up, and continue their relationship with the clinic."],
  ["Why do healthcare clinics lose patient enquiries?", "Many clinics lose opportunities because patient journeys are disconnected. Missed calls, delayed responses, unclear booking processes, and inconsistent follow-up can prevent interested patients from becoming appointments."],
  ["How can AI help healthcare clinics?", "AI can support healthcare clinics by improving communication, assisting with patient enquiries, organizing information, supporting follow-up workflows, and helping teams respond more consistently."],
  ["Is Flux a healthcare marketing agency?", "Flux goes beyond traditional healthcare marketing by building connected intelligence systems that improve patient discovery, conversion, communication, and operational efficiency."],
];

const schemas = [
  { "@context": "https://schema.org", "@type": "WebPage", name: "Patient Revenue Systems for Healthcare Clinics", url: `${SITE.url}/clinics`, description: "Flux helps healthcare clinics convert more patient enquiries into appointments through connected systems for discovery, communication, booking, follow-up, and AI visibility." },
  { "@context": "https://schema.org", "@type": "Organization", name: "Flux", url: SITE.url, description: "Flux is an Operating Intelligence Company that builds connected growth systems for service businesses, helping organizations improve customer discovery, conversion, automation, and operational intelligence.", sameAs: SOCIAL_LINKS.map(link => link.href) },
  { "@context": "https://schema.org", "@type": "Service", name: "Patient Revenue System", description: "A connected growth system for healthcare clinics that improves patient discovery, enquiry capture, communication, appointment conversion, follow-up, and retention.", provider: { "@type": "Organization", name: "Flux" }, serviceType: "Healthcare Growth System", areaServed: { "@type": "Place", name: "United States" }, audience: { "@type": "Audience", audienceType: "Healthcare clinics and appointment-based practices" } },
  { "@context": "https://schema.org", "@type": "Offer", name: "Patient Revenue System Assessment", description: "Assessment and roadmap to identify gaps in patient discovery, response, conversion, and follow-up.", seller: { "@type": "Organization", name: "Flux" } },
  { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE.url }, { "@type": "ListItem", position: 2, name: "Healthcare", item: `${SITE.url}/industries/healthcare` }, { "@type": "ListItem", position: 3, name: "Patient Revenue System", item: `${SITE.url}/clinics` }] },
  { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
  { "@context": "https://schema.org", "@type": "Person", name: SITE.founder, jobTitle: "Founder of Flux", url: `${SITE.url}/about`, image: `${SITE.url}/images/gagan-deep.jpg`, worksFor: { "@type": "Organization", name: "Flux", url: SITE.url }, sameAs: SOCIAL_LINKS.map(link => link.href) },
  { "@context": "https://schema.org", "@type": "ItemList", name: "Flux Patient Revenue System Components", itemListElement: ["AI Discovery", "Digital Headquarters", "Revenue Intelligence", "Customer Progression"].map((name, index) => ({ "@type": "ListItem", position: index + 1, name })) },
];

export default function Page() {
  return <>{schemas.map((schema) => <script key={safeJsonLd(schema)} type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }} />)}<ClinicsPage /></>;
}
