import { safeJsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { generateMeta } from "@/lib/seo";
import LocationLandingPage from "@/app/locations/_components/LocationLandingPage";
import { locationContent } from "@/app/locations/locationContent";

const content = locationContent.newYork;

export const metadata: Metadata = generateMeta({
  absoluteTitle: content.metaTitle,
  description: content.metaDescription,
  path: content.path,
});

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: content.h1,
  provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
  serviceType: "WordPress Website Design, GoHighLevel Automation, SEO and Business Workflow Automation",
  areaServed: { "@type": "Place", name: content.locationName },
  description: content.serviceDescription,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: content.faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function NewYorkLocationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }} />
      <LocationLandingPage content={content} />
    </>
  );
}
