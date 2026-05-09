import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/constants";
import { generateMeta } from "@/lib/seo";
import TextReveal from "@/components/ui/TextReveal";

export const metadata: Metadata = generateMeta({
  absoluteTitle: "Blog | WordPress, GoHighLevel & Lead Generation Playbooks for Service Businesses",
  description:
    "Practical guides on WordPress website design, GoHighLevel automation, healthcare website SEO, missed-call recovery, appointment booking, and lead generation systems for service businesses.",
  path: "/blog",
});

const FEATURED_BLOG_POSTS = [
  {
    slug: "healthcare-website-design-clinic-conversions",
    title: "Healthcare Website Design: What Every Clinic Needs to Convert Visitors Into Appointments",
    excerpt:
      "A practical clinic website design guide covering patient journeys, trust signals, local SEO structure, appointment booking, and GoHighLevel CRM automation.",
    date: "2026-05-08",
    readTime: "12 min read",
    category: "Healthcare Growth Systems",
    author: "Gagan Deep",
  },
];

const learnItems = [
  ["Website strategy", "Learn how to structure a WordPress website so visitors understand your services, trust your business, and know exactly what to do next."],
  ["GoHighLevel automation", "See how CRM pipelines, SMS follow-up, email workflows, booking calendars, and missed-call text-back can help you respond faster without adding more manual work."],
  ["Healthcare website design", "Explore patient-focused website structures for clinics, pain management practices, vein treatment centers, orthopedic practices, wellness providers, and medical service brands."],
  ["Local SEO and search visibility", "Understand how service pages, location pages, FAQs, schema, Google Business Profile optimization, and review systems help businesses appear in search, maps, and AI-driven results."],
  ["Lead generation systems", "Learn how to connect forms, calls, chats, calendars, ads, and landing pages into one organized follow-up system."],
];

const categoryIntros = [
  ["Website Design", "A website should do more than look professional. It should explain your offer, answer buyer questions, build trust, and guide visitors toward a call, form submission, or appointment request. These guides cover conversion-focused WordPress website design for clinics, home service businesses, real estate professionals, and local service brands."],
  ["GoHighLevel Automation", "GoHighLevel can manage leads, automate follow-up, send reminders, recover missed calls, organize pipelines, and help teams book more appointments. These articles show how to use GHL as a practical business system instead of just another marketing tool."],
  ["Healthcare Growth Systems", "Healthcare websites need clear service pages, provider trust, patient-friendly language, appointment pathways, local SEO structure, and fast follow-up. These guides focus on building digital systems for clinics that want to turn patient interest into scheduled visits."],
  ["Local SEO and Search Visibility", "Search has expanded beyond traditional Google rankings. Service businesses now need visibility across Google Search, Google Maps, review platforms, directories, and AI-powered answer engines. These guides explain how to build a stronger discovery system."],
];

const faqs = [
  ["What is a lead generation website?", "A lead generation website is built to attract the right visitors, explain the offer clearly, capture inquiries, and move prospects toward a call, quote request, booking, or appointment. For service businesses, this usually includes strong service pages, local SEO, trust sections, forms, phone CTAs, booking links, and CRM integration."],
  ["Why connect WordPress with GoHighLevel?", "WordPress gives you control over design, SEO, service pages, content, and website ownership. GoHighLevel manages what happens after a visitor becomes a lead, including SMS replies, email follow-up, booking calendars, pipelines, reminders, and missed-call recovery."],
  ["What should a clinic website include?", "A clinic website should include clear service pages, provider information, patient trust signals, appointment CTAs, insurance or intake information, location details, FAQs, reviews, and a fast follow-up system for calls and form submissions."],
  ["How does missed-call text-back help service businesses?", "Missed-call text-back sends an automatic SMS when a business misses a call, giving the prospect a fast way to continue the conversation. GoHighLevel's own documentation describes missed-call text-back as a way to send an automatic message immediately after a missed call."],
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

export default function BlogPage() {
  const posts = [...FEATURED_BLOG_POSTS, ...BLOG_POSTS];

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="section pt-32 md:pt-36 pb-16 max-w-[1200px] mx-auto">
        <p className="text-sm uppercase tracking-widest text-flux font-semibold mb-5">Blog</p>
        <TextReveal
          text="Growth playbooks for websites, automation, and lead generation."
          className="font-display font-semibold text-4xl md:text-6xl max-w-5xl mb-6"
          as="h1"
        />
        <div className="space-y-5 text-base md:text-lg text-ink/58 leading-8 max-w-4xl">
          <p>
            Most business websites do not fail because they look bad. They fail because visitors do not understand the offer fast enough, forms are not connected to a real follow-up system, calls get missed, and leads go cold before anyone responds.
          </p>
          <p>
            The Flux Media Creations blog is built for service businesses that want a better way to turn traffic into booked calls, appointments, and qualified inquiries. Here you will find practical guides on WordPress website design, GoHighLevel setup, CRM automation, local SEO, healthcare website structure, missed-call text-back, appointment booking, and follow-up systems that help small teams respond faster.
          </p>
          <p>
            Whether you run a healthcare clinic, home service company, real estate business, wellness brand, or local service team, these articles are written to help you build a website and CRM system that work together, not separate tools that create more admin work.
          </p>
        </div>
        <Link href="/contact" className="mt-8 inline-flex items-center gap-3 rounded-full bg-flux px-6 py-4 text-sm font-semibold uppercase tracking-wide text-white">
          Get a free website and CRM growth review <span aria-hidden="true">-&gt;</span>
        </Link>
      </section>

      <section className="section-sm">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-xs uppercase tracking-[0.22em] text-flux font-semibold mb-4">What you will learn here</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold max-w-4xl mb-8" style={{ letterSpacing: "-0.03em" }}>
            Practical guides for the parts of growth that directly affect leads.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {learnItems.map(([title, body]) => (
              <article key={title} className="rounded-3xl border border-ink/10 bg-white p-6">
                <h3 className="font-display text-xl font-semibold mb-3">{title}</h3>
                <p className="text-sm text-ink/60 leading-7">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm bg-blush">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-xs uppercase tracking-[0.22em] text-flux font-semibold mb-4">Categories</p>
          <div className="grid md:grid-cols-2 gap-5">
            {categoryIntros.map(([title, body]) => (
              <article key={title} className="rounded-3xl border border-ink/10 bg-white p-6">
                <h2 className="font-display text-2xl font-semibold mb-3">{title}</h2>
                <p className="text-sm text-ink/60 leading-7">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs uppercase tracking-[0.22em] text-flux font-semibold mb-4">Latest articles</p>
          <div className="grid gap-6">
            {posts.map((post) => (
              <article key={post.slug} className="border border-ink/10 rounded-2xl bg-white p-6 md:p-8 hover:border-ink/25 transition-colors">
                <p className="text-xs uppercase tracking-widest text-ink/35 mb-3">{post.category}</p>
                <h2 className="font-display text-2xl md:text-3xl font-semibold mb-3" style={{ letterSpacing: "-0.02em" }}>
                  <Link href={`/blog/${post.slug}`} className="hover:text-flux transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-ink/60 leading-relaxed mb-5">{post.excerpt}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-ink/40">
                  <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                  <span>-</span>
                  <span>{post.readTime}</span>
                  <span>-</span>
                  <span>By {post.author}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm bg-ink text-cream">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 className="font-display text-4xl md:text-6xl font-semibold leading-tight mb-6" style={{ letterSpacing: "-0.035em" }}>
            Want a website that captures leads and follows up automatically?
          </h2>
          <p className="text-lg text-cream/65 leading-8 max-w-3xl mx-auto mb-8">
            If your website is getting traffic but not enough booked calls, the problem may not be the design alone. It may be your page structure, call-to-action flow, CRM setup, missed-call handling, or follow-up timing.
          </p>
          <p className="text-base text-cream/55 leading-8 max-w-3xl mx-auto mb-8">
            Flux Media Creations builds WordPress websites and GoHighLevel automation systems for service businesses that cannot afford to lose leads. We can review your current website, identify the biggest gaps, and show you what to fix first.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-3 rounded-full bg-flux px-6 py-4 text-sm font-semibold uppercase tracking-wide text-white">
              Request a free growth review <span aria-hidden="true">-&gt;</span>
            </Link>
            <Link href="/services/full-growth-system" className="inline-flex items-center gap-3 rounded-full border border-cream/20 px-6 py-4 text-sm font-semibold uppercase tracking-wide text-cream">
              Explore our WordPress + GoHighLevel system
            </Link>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs uppercase tracking-[0.22em] text-flux font-semibold mb-4">FAQ</p>
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
