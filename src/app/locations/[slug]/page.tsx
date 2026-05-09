import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE } from "@/lib/constants";
import { generateMeta } from "@/lib/seo";
import LocationLandingPage from "../_components/LocationLandingPage";
import { canadaContent, indiaContent, LocationRouteContent } from "../locationContent";

type LocationPageProps = {
  params: {
    slug: string;
  };
};

const CONTENT: Record<string, LocationRouteContent> = {
  canada: canadaContent,
  india: indiaContent,
};

export function generateStaticParams() {
  return Object.keys(CONTENT).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: LocationPageProps): Metadata {
  const content = CONTENT[params.slug];

  if (!content) {
    return generateMeta({ title: "Locations", path: "/locations" });
  }

  return generateMeta({
    absoluteTitle: content.metaTitle,
    description: content.metaDescription,
    path: content.path,
  });
}

export default function LocationDetailPage({ params }: LocationPageProps) {
  const content = CONTENT[params.slug];

  if (!content) {
    notFound();
  }

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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <LocationLandingPage content={content} />
    </>
  );
}
