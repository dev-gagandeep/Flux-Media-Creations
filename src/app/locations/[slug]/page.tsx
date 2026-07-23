import { safeJsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE } from "@/lib/constants";
import { generateMeta } from "@/lib/seo";
import LocationLandingPage from "../_components/LocationLandingPage";
import { canadaContent, indiaContent, LocationRouteContent } from "../locationContent";

type LocationPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const CONTENT: Record<string, LocationRouteContent> = {
  canada: canadaContent,
  india: indiaContent,
};

export function generateStaticParams() {
  return Object.keys(CONTENT).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = CONTENT[slug];

  if (!content) {
    return generateMeta({ title: "Locations", path: "/locations" });
  }

  return generateMeta({
    absoluteTitle: content.metaTitle,
    description: content.metaDescription,
    path: content.path,
  });
}

export default async function LocationDetailPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const content = CONTENT[slug];

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }} />
      <LocationLandingPage content={content} />
    </>
  );
}
