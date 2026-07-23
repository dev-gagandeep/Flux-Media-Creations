import { safeJsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import { generateMeta } from "@/lib/seo";
import { SITE } from "@/lib/constants";
import HealthcareClinicBlogClient from "./HealthcareClinicBlogClient";

const slug = "healthcare-website-design-clinic-conversions";
const featureImage = "/images/blog/healthcare-website-design-clinic-conversions.png";
const title = "Healthcare Website Design: What Every Clinic Needs to Convert Visitors Into Appointments";
const description =
  "A practical healthcare website design guide for clinics that want more appointment requests, better trust signals, stronger local SEO, and GoHighLevel CRM automation.";

const FAQS_FOR_SCHEMA = [
  {
    q: "What must every clinic website have?",
    a: "A clinic website needs a clear homepage message, dedicated service pages, provider information, patient trust signals, online appointment booking, mobile-first design, local SEO structure, and multiple easy-to-find contact options.",
  },
  {
    q: "How do I get a healthcare website to convert more visitors into appointments?",
    a: "Focus on the full patient journey: clear service explanations, trust signals, patient reviews, fast mobile load times, strong appointment CTAs above the fold, and CRM-connected forms and calls so every enquiry triggers immediate follow-up.",
  },
  {
    q: "Is WordPress good for healthcare website development?",
    a: "Yes. WordPress is flexible, SEO-friendly, easy to update, and ideal for service pages, blogs, landing pages, and conversion-focused layouts. It also integrates cleanly with booking tools and CRM systems like GoHighLevel.",
  },
  {
    q: "Do clinics really need online appointment booking?",
    a: "Absolutely. Patient self-scheduling removes the single biggest barrier to conversion: the wait. Patients who decide to book often do not want to call during office hours, so booking should capture that intent immediately.",
  },
  {
    q: "What can GoHighLevel do for my clinic?",
    a: "GoHighLevel enables automatic SMS and email follow-up, missed-call text-back, appointment reminders, lead pipeline tracking, staff notifications, and review request automation, all connected directly to your website.",
  },
  {
    q: "What is conversion optimisation for healthcare websites?",
    a: "It is improving your website so a higher percentage of visitors take action, such as calling, submitting a form, booking, or requesting a consultation. It combines design, content, page speed, trust signals, and backend automation.",
  },
  {
    q: "Why is my clinic website losing patient leads?",
    a: "Common causes include confusing design, weak CTAs, poor mobile experience, slow loading, long forms, and delayed or missing follow-up. Any one of these can reduce the number of visitors who become patients.",
  },
  {
    q: "What is the ideal structure for a clinic website?",
    a: "A strong clinic website usually includes Home, About, Provider pages, individual treatment pages, location pages, booking page, reviews, patient resources, and contact. Every page should support both patient decisions and local search.",
  },
];

export const metadata: Metadata = generateMeta({
  absoluteTitle: "Healthcare Website Design for Clinics | Flux Media Creations",
  description,
  path: `/blog/${slug}`,
  image: featureImage,
});

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: title,
  description,
  image: `${SITE.url}${featureImage}`,
  datePublished: "2026-05-08",
  dateModified: "2026-05-08",
  author: {
    "@type": "Person",
    name: SITE.founder,
    url: `${SITE.url}/about`,
  },
  publisher: {
    "@type": "Organization",
    name: SITE.name,
    logo: {
      "@type": "ImageObject",
      url: `${SITE.url}/og-image.svg`,
    },
  },
  mainEntityOfPage: `${SITE.url}/blog/${slug}`,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS_FOR_SCHEMA.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function HealthcareClinicBlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(blogSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }} />
      <HealthcareClinicBlogClient />
    </>
  );
}
