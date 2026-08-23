import type { Metadata } from "next";
import { safeJsonLd } from "@/lib/json-ld";
import { SITE } from "@/lib/constants";
import ReportPageClient from "./ReportPageClient";

const path = "/reports/service-business-website-growth-report-2026";
const title = "2026 Service Business Website Growth Report";
const description = "Discover the latest website, SEO, automation, and conversion strategies helping service businesses attract more customers and grow online in 2026.";
const image = "/images/reports/service-business-growth-report-og.png";

export const metadata: Metadata = {
  title: `${title} | Flux Media Creations`,
  description,
  alternates: { canonical: `${SITE.url}${path}` },
  openGraph: { title, description: "Learn how service businesses can transform their website into a customer growth system using modern design, SEO, automation, and conversion strategies.", url: `${SITE.url}${path}`, type: "article", images: [{ url: image, width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  author: { "@type": "Organization", name: "Flux Media Creations", url: SITE.url },
  publisher: { "@type": "Organization", name: "Flux Media Creations", url: SITE.url },
  datePublished: "2026-08-22",
  dateModified: "2026-08-22",
  image: `${SITE.url}${image}`,
  description,
  mainEntityOfPage: `${SITE.url}${path}`,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Reports", item: `${SITE.url}/reports` },
    { "@type": "ListItem", position: 3, name: title, item: `${SITE.url}${path}` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    ["Why does a service business need a modern website?", "A modern website helps businesses build trust, improve visibility, capture enquiries, and create a better customer journey."],
    ["What should a service business website include?", "A strong website should include clear messaging, service pages, trust signals, conversion opportunities, and SEO foundations."],
    ["Can a website help generate more customers?", "Yes. A strategically designed website can attract visitors, build confidence, capture leads, and support business growth."],
  ].map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
};

export default function ReportPage() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(articleSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }} /><ReportPageClient /></>;
}
