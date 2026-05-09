import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { generateMeta } from "@/lib/seo";
import ContactForm from "./ContactForm";

export const metadata: Metadata = generateMeta({
  absoluteTitle: "Contact Flux Media Creations | WordPress Website & GoHighLevel Automation Agency",
  description:
    "Contact Flux Media Creations for WordPress website design, GoHighLevel setup, CRM automation, missed-call text-back, appointment booking, and lead generation systems for service businesses.",
  path: "/contact",
});

const helpItems = [
  ["WordPress website design", "Custom WordPress websites built for speed, mobile experience, SEO structure, trust, and lead generation."],
  ["GoHighLevel setup and automation", "CRM pipelines, calendars, forms, missed-call text-back, SMS workflows, email follow-up, reminders, review requests, and reporting."],
  ["Website + CRM growth systems", "A complete system where your website captures demand and GoHighLevel manages the follow-up."],
  ["Healthcare website and automation systems", "Clinic websites, service pages, appointment booking flows, intake pathways, patient follow-up, and healthcare-focused SEO structure."],
  ["Local SEO and search visibility", "Service page mapping, location pages, on-page SEO, schema, Google Maps visibility, and content planning."],
  ["Maintenance and optimization", "Ongoing WordPress updates, GHL workflow monitoring, speed improvements, content edits, and conversion fixes."],
];

const fitItems = [
  "Healthcare clinics that need more patient inquiries and faster follow-up",
  "Home service businesses that miss calls or lose quote requests",
  "Real estate professionals who need buyer and seller lead capture",
  "Beauty and wellness brands that need booking automation",
  "Professional service businesses that need a stronger website and CRM",
  "Small teams that want automation without building a large admin department",
];

const faqs = [
  ["Do I need a new website or just GoHighLevel?", "It depends on where leads are being lost. If your website is outdated, unclear, slow, or not ranking, you may need a better WordPress structure first. If you already get inquiries but lose them because of slow response time, missed calls, or poor follow-up, GoHighLevel automation may be the better first step."],
  ["Can you connect my existing WordPress website to GoHighLevel?", "Yes. Forms, calls, calendars, landing pages, and lead sources can be connected to GoHighLevel so inquiries enter your CRM pipeline and trigger the correct follow-up workflows."],
  ["Do you work with clients outside India?", "Yes. Flux Media Creations serves US clients and worldwide businesses, with target regions including the United States, Canada, the United Kingdom, New Jersey, New York, and India."],
  ["What should I send before contacting you?", "Send your website link if you have one, your business type, your main services, the problem you want to fix, and whether you need website design, GoHighLevel setup, automation, SEO, or a complete growth system."],
  ["Can you help healthcare clinics?", "Yes. Healthcare is a core focus, including pain clinics, vein clinics, orthopedic practices, telehealth providers, wellness providers, and specialty practices."],
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

export default function ContactPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="section pt-32 md:pt-36 pb-16 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 items-start">
          <div>
            <p className="text-sm uppercase tracking-widest text-flux font-semibold mb-5">Contact Flux Media Creations</p>
            <h1 className="font-display font-semibold text-4xl md:text-6xl max-w-5xl mb-6" style={{ letterSpacing: "-0.035em" }}>
              Let&apos;s build a website and CRM system that turns more visitors into leads.
            </h1>
            <div className="space-y-5 text-base md:text-lg text-ink/58 leading-8 max-w-3xl">
              <p>
                Tell us what you are trying to build, fix, or improve. We help service businesses create WordPress websites, GoHighLevel CRM systems, automation workflows, booking funnels, and lead-generation systems that capture inquiries and follow up before prospects go cold.
              </p>
              <p>
                Whether you need a new website, a GoHighLevel setup, missed-call text-back, appointment booking automation, healthcare website structure, local SEO improvements, or a complete website plus CRM growth system, we will review your situation and recommend the clearest next step.
              </p>
              <p>
                We work with healthcare clinics, home service companies, real estate professionals, wellness brands, professional service businesses, and local teams that depend on fast response times and consistent follow-up.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="#project-form" className="inline-flex items-center gap-3 rounded-full bg-flux px-6 py-4 text-sm font-semibold uppercase tracking-wide text-white">
                Send your project details <span aria-hidden="true">-&gt;</span>
              </Link>
              <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-full border border-ink/15 px-6 py-4 text-sm font-semibold uppercase tracking-wide text-ink">
                Message us on WhatsApp
              </a>
            </div>
          </div>
          <div id="project-form">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="section-sm bg-blush">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-xs uppercase tracking-[0.22em] text-flux font-semibold mb-4">What we can help with</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {helpItems.map(([title, body]) => (
              <article key={title} className="rounded-3xl border border-ink/10 bg-white p-6">
                <h2 className="font-display text-xl font-semibold mb-3">{title}</h2>
                <p className="text-sm text-ink/60 leading-7">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-10">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-flux font-semibold mb-4">Who this is for</p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight mb-5" style={{ letterSpacing: "-0.03em" }}>
              Built for businesses that depend on booked calls, appointments, quotes, and inbound leads.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {fitItems.map((item) => (
              <div key={item} className="rounded-2xl border border-ink/10 bg-white px-4 py-4 text-sm text-ink/65">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm bg-ink text-cream">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-flux font-semibold mb-4">After you contact us</p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight mb-6" style={{ letterSpacing: "-0.03em" }}>
              What happens next?
            </h2>
          </div>
          <div className="space-y-5 text-cream/65 leading-8">
            <p>First, we review your website, services, current lead flow, and the problem you are trying to solve. If you already have a website or CRM, we look for the gaps that may be costing you leads.</p>
            <p>Next, we reply with the clearest recommendation. That may be a new WordPress website, a GoHighLevel setup, a landing page, a missed-call recovery workflow, a local SEO structure, or a complete website plus CRM system.</p>
            <p>If the fit is right, we send a simple proposal with scope, timeline, pricing, and next steps. If we believe you should fix something smaller first, we will tell you that too.</p>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-flux font-semibold mb-4">Why businesses contact Flux</p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight mb-6" style={{ letterSpacing: "-0.03em" }}>
              Your website and CRM should not operate separately.
            </h2>
          </div>
          <div className="space-y-5 text-ink/60 leading-8">
            <p>When they are disconnected, leads fall through the cracks. A visitor fills out a form, calls after hours, clicks a booking link, or sends a message, but if the follow-up is slow, the opportunity can disappear.</p>
            <p>We build systems where the website, forms, phone calls, calendars, CRM pipelines, SMS replies, email follow-up, and reporting work together. That means fewer missed inquiries, faster response times, and a clearer path from visitor to booked call.</p>
            <p>Your project is handled by one team, from strategy and website structure to WordPress development, GoHighLevel setup, automation testing, and post-launch support.</p>
          </div>
        </div>
      </section>

      <section className="section-sm bg-blush">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs uppercase tracking-[0.22em] text-flux font-semibold mb-4">Contact page FAQ</p>
          <div className="grid md:grid-cols-2 gap-5">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group rounded-2xl border border-ink/10 bg-white p-6">
                <summary className="cursor-pointer list-none font-display text-lg font-semibold group-open:text-flux">{question}</summary>
                <p className="mt-4 text-sm text-ink/60 leading-7">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
