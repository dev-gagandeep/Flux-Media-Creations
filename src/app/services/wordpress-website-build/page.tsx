import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: "Custom WordPress Website Design for Healthcare & Service Businesses",
  description:
    "We design and build custom WordPress websites for US healthcare clinics, home service businesses, and real estate professionals. Mobile-first, SEO-ready, PageSpeed 90+. Delivered in 7-10 days.",
  path: "/services/wordpress-website-build",
});

const heroStats = [
  { number: "7-10 Days", label: "WordPress-only delivery timeline" },
  { number: "90+", label: "PageSpeed score on every build" },
  { number: "100%", label: "Mobile-first, tested on all devices" },
  { number: "Figma-first", label: "Full design approval before any code" },
];

const problems = [
  {
    title: "Slow load speeds killing your rankings",
    body: "Most WordPress sites built with bloated page builders load in 4-6 seconds. Google demotes slow sites. Visitors leave. You pay for a site that works against you. Every site we build hits PageSpeed 90+ on both desktop and mobile.",
  },
  {
    title: "No keyword strategy - invisible on Google",
    body: "A site that does not target the words your customers search for will never rank, no matter how good it looks. We research and implement your target keywords into every page, heading, and meta tag from day one.",
  },
  {
    title: "No CRM connection - leads falling through the cracks",
    body: "Most web agencies deliver a site and walk away. Your contact form submits to an inbox that nobody monitors. We connect every WordPress site we build to an automated CRM follow-up system so every lead gets an instant response.",
  },
];

const includedDesign = [
  {
    title: "Custom Figma design - every page",
    body: "Before we write a single line of code, every page of your site is designed in Figma. You review, give feedback, and approve. What you approve is exactly what gets built. No surprises.",
  },
  {
    title: "Elementor Pro development",
    body: "Built with Elementor Pro on a clean, fast WordPress foundation. Lightweight, maintainable, and easy for you to update after handover.",
  },
  {
    title: "Mobile-first, fully responsive",
    body: "Every element designed for mobile before desktop. Tested on iOS and Android across real devices, not just browser emulators.",
  },
  {
    title: "PageSpeed 90+ on desktop and mobile",
    body: "Image optimization, lazy loading, CSS/JS minification, Cloudflare CDN configuration, and caching setup - all included. Your site will load fast from day one.",
  },
  {
    title: "Conversion-focused page structure",
    body: "Every page is structured to move visitors toward one action - a call, a booking, or a form submission. Strategic CTAs, trust signals, and social proof placed where they convert.",
  },
];

const includedSeo = [
  {
    title: "On-page SEO - every page optimized",
    body: "Target keyword in H1, meta title, meta description, image alt text, and URL slug. Rank Math SEO configured and optimized for every page on your site.",
  },
  {
    title: "Schema markup",
    body: "Organization schema, Service schema, and FAQ schema implemented and submitted. Rich result eligibility from day one.",
  },
  {
    title: "Google Analytics 4 + Search Console setup",
    body: "We set up and verify both tools so you can track traffic, rankings, and conversions from the moment your site goes live.",
  },
  {
    title: "XML sitemap submitted",
    body: "Your Rank Math sitemap generated and submitted to Google Search Console on launch day - so Google indexes your new site immediately.",
  },
  {
    title: "SSL + hosting configuration",
    body: "We handle your domain DNS, SSL certificate, and hosting setup. Your site goes live securely with zero downtime.",
  },
  {
    title: "30 days post-launch support",
    body: "Direct access to us via WhatsApp and email for 30 days after launch. No ticket queue. No waiting. If something needs adjusting, we adjust it.",
  },
];

const industryBlocks = [
  {
    title: "WordPress Website Design for Healthcare Clinics",
    body: "We design WordPress websites for pain management clinics, vein treatment centers, orthopedic practices, telehealth providers, and multi-specialty medical groups across the United States - with a concentration in New Jersey, New York, and California.",
    body2:
      "A healthcare website needs to do more than list your services. It needs to build patient trust in the first 5 seconds, make appointment booking frictionless, and comply with HIPAA-safe data handling requirements for intake forms.",
    points: [
      "Custom provider directory and physician profile pages",
      "Online appointment booking integration",
      "HIPAA-safe patient intake forms",
      "Telehealth and patient portal integration pages",
      "Insurance and accepted plans pages",
      "Location pages for multi-clinic practices",
      "Local SEO optimized for \"near me\" patient searches",
    ],
  },
  {
    title: "WordPress Website Design for Home Service Businesses",
    body: "HVAC companies, plumbers, electricians, roofers, landscapers, and cleaning services need WordPress websites that turn local search traffic into booked jobs. We build fast, mobile-first sites that rank for service area keywords and make it easy for customers to call or book online.",
    points: [
      "Service area landing pages targeting local keywords",
      "Online booking and quote request forms",
      "Before/after photo galleries",
      "Emergency service CTAs optimized for mobile",
      "Google review integration",
      "Google Maps and local schema markup",
    ],
  },
  {
    title: "WordPress Website Design for Real Estate Agents and Brokers",
    body: "Real estate professionals need websites that showcase listings, capture buyer and seller leads, and build personal brand authority. We build WordPress sites with IDX integration, automated lead capture, and GoHighLevel CRM connection - so leads are followed up instantly, not hours later.",
    points: [
      "IDX property search and listing pages",
      "Neighborhood guide and market report pages",
      "Lead capture forms connected to CRM",
      "Agent bio and credibility pages",
      "Automated buyer and seller follow-up integration",
      "Mobile-optimized property showcase",
    ],
  },
  {
    title: "WordPress Website Design for Med Spas and Wellness Clinics",
    body: "Med spas, aesthetics clinics, salons, and wellness studios need websites that reflect their brand, showcase their treatments, and make booking effortless. We build visually polished WordPress sites with online booking integration and automated client communication workflows.",
    points: [
      "Treatment and service showcase pages",
      "Online booking system integration",
      "Before/after gallery pages",
      "Membership and package pages",
      "Client testimonial and review sections",
      "Automated appointment reminder integration",
    ],
  },
];

const timeline = [
  {
    title: "Day 1-2: Discovery and content brief",
    body: "We gather everything we need - your brand assets, service list, target keywords, competitor references, and design preferences. You fill out a structured brief. We ask questions. By the end of day 2 we have everything to start designing.",
  },
  {
    title: "Day 2-4: Figma design",
    body: "Every page designed in Figma. Homepage, service pages, about, contact, and any additional pages included in your project. You receive a Figma share link to review and leave comments. We implement your feedback and get written approval before building.",
  },
  {
    title: "Day 4-8: WordPress development",
    body: "Approved Figma designs are built pixel-perfect in WordPress with Elementor Pro. You get access to a staging URL to review the live build as it progresses. All SEO configuration, schema markup, and analytics setup happens during this stage.",
  },
  {
    title: "Day 8-9: QA and testing",
    body: "Every form tested. Every link checked. Every page tested on Chrome, Safari, Firefox, Edge, iOS, and Android. PageSpeed tested on both desktop and mobile. Any issues fixed before you see the final version.",
  },
  {
    title: "Day 10: Launch",
    body: "DNS migration, SSL configuration, and hosting setup handled by us. Your site goes live. You receive a full recorded Loom walkthrough of every page, the WordPress admin, and how to make basic edits yourself. 30 days of direct support begins.",
  },
];

const portfolio = [
  {
    client: "MVM Health - Pain Management Platform",
    location: "New Jersey, US",
    built:
      "Custom multi-specialty healthcare WordPress site with provider directory, patient portal pages, telehealth integration, and full GoHighLevel automation for missed call recovery. PageSpeed 94.",
    href: "/work/mvm-health",
  },
  {
    client: "Vascura Pain & Vein - Specialty Clinic",
    location: "New Jersey, US",
    built:
      "WordPress website for pain and vein treatment clinic. Custom design, appointment booking integration, insurance portal, and instant GHL lead follow-up.",
    href: "/work/vascura-pain-vein",
  },
  {
    client: "EC Bone & Joint - Orthopedic Practice",
    built:
      "Orthopedic practice website with custom WordPress design, individual procedure pages, provider profiles, and local SEO optimization.",
    href: "/work/ec-bone-joint",
  },
  {
    client: "Phone Repair Decatur - Local Service Business",
    location: "Atlanta, GA",
    built:
      "Mobile phone repair shop website with online booking, repair tracker, and local SEO - ranked on Google Maps for repair searches in Atlanta.",
    href: "/work/phone-repair-decatur",
  },
];

const pricing = [
  {
    tier: "Starter Site",
    price: "from $500",
    bestFor: "Small service businesses, solo practitioners, local shops",
    items: [
      "Up to 5 pages (Home, About, Services, Contact + 1 additional)",
      "Custom Figma design",
      "Elementor Pro build",
      "On-page SEO - all pages",
      "Google Analytics 4 + Search Console setup",
      "SSL + hosting configuration",
      "Mobile-first, PageSpeed 90+",
      "30 days post-launch support",
    ],
  },
  {
    tier: "Growth Site (Most Popular)",
    price: "from $800",
    bestFor: "Healthcare clinics, home service businesses, multi-service companies",
    items: [
      "Up to 10 pages",
      "Custom Figma design - all pages",
      "Elementor Pro build",
      "On-page SEO - all pages + schema markup",
      "Blog setup and first 3 posts structured",
      "Contact form + appointment booking integration",
      "Google Analytics 4 + Search Console + sitemap",
      "SSL + hosting configuration",
      "PageSpeed 90+ on desktop and mobile",
      "30 days post-launch support",
    ],
  },
  {
    tier: "Full Growth System (Best Value)",
    price: "from $1,300",
    bestFor: "Businesses that want their website and CRM working together",
    items: [
      "Everything in Growth Site",
      "GoHighLevel CRM setup and configuration",
      "Missed call text-back automation",
      "Lead form -> CRM -> SMS follow-up connection",
      "Appointment booking with automated reminders",
      "A2P SMS registration handled",
      "Review generation workflow",
      "Full recorded handover walkthrough",
      "30 days direct WhatsApp support",
    ],
  },
];

const faqs = [
  {
    q: "How long does a WordPress website build take?",
    a: "A Starter site (up to 5 pages) takes 7-10 business days from signed contract to live site. A Growth site (up to 10 pages) takes 10-14 days. A Full Growth System with GoHighLevel integration takes 14-21 days. We set clear milestones on day one so you always know the exact timeline.",
  },
  {
    q: "Do you use page builders or custom code?",
    a: "We build with Elementor Pro on a clean WordPress foundation. Elementor Pro gives us design flexibility while keeping your site lightweight, fast, and easy for you to update after handover. We avoid bloated plugin stacks that slow sites down. Where custom functionality is needed, we write clean code.",
  },
  {
    q: "Will my WordPress site rank on Google?",
    a: "Every site we build includes full on-page SEO - target keywords in H1, meta title, meta description, image alt text, URL slugs, and internal linking structure. We also set up Rank Math, submit your XML sitemap to Google Search Console, and implement schema markup for rich results. This gives your site the best possible technical foundation for ranking. Organic rankings take time - typically 3-6 months to see meaningful movement - but the foundation will be correct from day one.",
  },
  {
    q: "Can you redesign my existing WordPress website?",
    a: "Yes. We audit your current site, identify what is hurting your rankings and conversions, and rebuild it properly. We migrate all existing content and preserve your SEO history where possible. If you are happy with your current hosting and domain setup, we can work within that environment.",
  },
  {
    q: "Will I be able to update the site myself after launch?",
    a: "Yes. You receive a full recorded Loom video walkthrough after launch showing you how to update text, images, and content in WordPress and Elementor. You will not be dependent on us for basic changes - but we are available during your 30-day support window if you need help.",
  },
  {
    q: "Do you build e-commerce websites?",
    a: "Our focus is lead-generation and service websites - not product e-commerce. If your goal is selling physical products online via WooCommerce, we can discuss whether we are the right fit on a discovery call.",
  },
  {
    q: "Do you offer WordPress maintenance after launch?",
    a: "Yes. Our Monthly Maintenance plan ($150/mo) covers WordPress core updates, security scans, daily backups, speed monitoring, and content updates. You get direct access to us - no support ticket system.",
  },
  {
    q: "What do I need to provide to get started?",
    a: "Your domain access credentials, any existing brand assets (logo, brand colors, fonts if you have them), a brief description of your services and target clients, and any reference sites you like the look and feel of. We guide you through a structured brief on the discovery call - you do not need to have everything figured out before we talk.",
  },
];

export default function WordPressWebsiteBuildPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="section pt-40 md:pt-48 pb-16 max-w-[1400px] mx-auto">
        <p className="text-sm text-ink/45 mb-6">
          <Link href="/services" className="hover:text-flux transition-colors">Services</Link>
          <span className="mx-2">→</span>
          <span>WordPress Website Build</span>
        </p>
        <p className="text-sm uppercase tracking-widest text-ink/30 mb-5">Custom WordPress Web Design</p>
        <h1 className="font-display font-semibold text-4xl md:text-6xl max-w-5xl leading-tight mb-6" style={{ letterSpacing: "-0.03em" }}>
          WordPress Website Design That Captures Leads and Converts Visitors Into Clients
        </h1>
        <p className="text-base md:text-lg text-ink/55 max-w-4xl leading-relaxed mb-10">
          We build custom WordPress websites for healthcare clinics, home service businesses, and real estate professionals across the United States, Canada, and the United Kingdom. Every site is designed in Figma first, built with Elementor Pro, optimized to PageSpeed 90+, and connected directly to your CRM follow-up system - so visitors do not just browse, they book.
        </p>
        <div className="flex flex-wrap gap-3 mb-12">
          <Link href="/contact" className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-medium" style={{ background: "var(--flux)", color: "white" }}>
            Start your WordPress project
            <span>→</span>
          </Link>
          <Link href="/work" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border border-ink/15 hover:border-ink/40 transition-colors">
            See our work
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {heroStats.map((item) => (
            <div key={item.label} className="rounded-2xl border border-ink/8 bg-white p-5">
              <p className="font-display font-semibold text-2xl md:text-3xl" style={{ color: "var(--flux)", letterSpacing: "-0.03em" }}>
                {item.number}
              </p>
              <p className="text-sm text-ink/55 mt-2 leading-6">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-sm max-w-[1400px] mx-auto pt-0">
        <p className="text-sm uppercase tracking-widest text-ink/30 mb-4">The problem with most WordPress websites</p>
        <h2 className="font-display font-semibold text-3xl md:text-5xl max-w-4xl leading-tight mb-10" style={{ letterSpacing: "-0.03em" }}>
          A beautiful website that nobody finds - and nobody books - is not an asset. It is an expense.
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {problems.map((item) => (
            <article key={item.title} className="rounded-3xl border border-ink/10 bg-white p-7">
              <h3 className="font-display text-2xl font-semibold mb-4" style={{ letterSpacing: "-0.02em" }}>{item.title}</h3>
              <p className="text-sm text-ink/60 leading-7">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section max-w-[1400px] mx-auto">
        <p className="text-sm uppercase tracking-widest text-ink/30 mb-4">What is included</p>
        <h2 className="font-display font-semibold text-3xl md:text-5xl max-w-4xl leading-tight mb-5" style={{ letterSpacing: "-0.03em" }}>
          Everything in a Flux Media Creations WordPress build - no hidden extras.
        </h2>
        <p className="text-base text-ink/50 max-w-4xl leading-relaxed mb-10">
          This is not a template dropped onto your domain. Every WordPress website we design and build is custom - built specifically for your business, your industry, and your customers.
        </p>
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-ink/10 bg-white p-8">
            <p className="text-xs uppercase tracking-widest text-ink/35 mb-5">Design & Build</p>
            <div className="space-y-6">
              {includedDesign.map((item) => (
                <div key={item.title}>
                  <h3 className="font-medium mb-2">✦ {item.title}</h3>
                  <p className="text-sm text-ink/60 leading-7">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-ink/10 bg-white p-8">
            <p className="text-xs uppercase tracking-widest text-ink/35 mb-5">SEO & Technical</p>
            <div className="space-y-6">
              {includedSeo.map((item) => (
                <div key={item.title}>
                  <h3 className="font-medium mb-2">✦ {item.title}</h3>
                  <p className="text-sm text-ink/60 leading-7">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section max-w-[1400px] mx-auto">
        <p className="text-sm uppercase tracking-widest text-ink/30 mb-4">Built for your industry</p>
        <h2 className="font-display font-semibold text-3xl md:text-5xl max-w-4xl leading-tight mb-5" style={{ letterSpacing: "-0.03em" }}>
          We do not build generic websites. We build WordPress sites for businesses like yours.
        </h2>
        <p className="text-base text-ink/50 max-w-4xl leading-relaxed mb-10">
          We have delivered WordPress websites across these industries - and we understand the specific design requirements, compliance needs, and lead flow challenges each one involves.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {industryBlocks.map((block) => (
            <article key={block.title} className="rounded-3xl border border-ink/10 bg-white p-7">
              <h3 className="font-display text-2xl font-semibold mb-4" style={{ letterSpacing: "-0.02em" }}>{block.title}</h3>
              <p className="text-sm text-ink/60 leading-7 mb-4">{block.body}</p>
              {block.body2 && <p className="text-sm text-ink/60 leading-7 mb-4">{block.body2}</p>}
              <ul className="space-y-2">
                {block.points.map((point) => (
                  <li key={point} className="text-sm text-ink/65 leading-7 flex gap-2">
                    <span style={{ color: "var(--flux)" }}>•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section max-w-[1400px] mx-auto">
        <p className="text-sm uppercase tracking-widest text-ink/30 mb-4">How a WordPress project works</p>
        <h2 className="font-display font-semibold text-3xl md:text-5xl max-w-4xl leading-tight mb-10" style={{ letterSpacing: "-0.03em" }}>
          From first call to live site in 7-10 days. Here is exactly how.
        </h2>
        <div className="space-y-5">
          {timeline.map((step, idx) => (
            <div key={step.title} className="rounded-3xl border border-ink/10 bg-white p-7 md:p-8 grid md:grid-cols-[90px_1fr] gap-4">
              <div className="font-display text-2xl" style={{ color: "var(--flux)", letterSpacing: "-0.02em" }}>
                0{idx + 1}
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-ink/60 leading-7">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section max-w-[1400px] mx-auto">
        <p className="text-sm uppercase tracking-widest text-ink/30 mb-4">Recent WordPress projects</p>
        <h2 className="font-display font-semibold text-3xl md:text-5xl max-w-4xl leading-tight mb-10" style={{ letterSpacing: "-0.03em" }}>
          WordPress websites we have designed and built for US businesses.
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {portfolio.map((item) => (
            <article key={item.client} className="rounded-3xl border border-ink/10 bg-white p-7">
              <p className="font-medium mb-2">Client: {item.client}</p>
              {item.location && <p className="text-sm text-ink/45 mb-3">Location: {item.location}</p>}
              <p className="text-sm text-ink/60 leading-7 mb-4">What we built: {item.built}</p>
              <Link href={item.href} className="text-sm font-medium hover:text-flux transition-colors" style={{ color: "var(--flux)" }}>
                View case study →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section max-w-[1400px] mx-auto">
        <p className="text-sm uppercase tracking-widest text-ink/30 mb-4">Investment</p>
        <h2 className="font-display font-semibold text-3xl md:text-5xl max-w-4xl leading-tight mb-5" style={{ letterSpacing: "-0.03em" }}>
          Simple, transparent WordPress website pricing.
        </h2>
        <p className="text-base text-ink/50 max-w-3xl leading-relaxed mb-10">
          No hidden fees. No surprise add-ons. Every tier below includes everything listed - design, development, SEO setup, and 30 days of support.
        </p>

        <div className="grid lg:grid-cols-3 gap-6">
          {pricing.map((tier) => (
            <article key={tier.tier} className="rounded-3xl border border-ink/10 bg-white p-7">
              <p className="text-xs uppercase tracking-widest text-ink/35 mb-2">{tier.tier}</p>
              <p className="font-display text-4xl font-semibold mb-2" style={{ color: "var(--flux)", letterSpacing: "-0.03em" }}>{tier.price}</p>
              <p className="text-sm text-ink/55 mb-5">Best for: {tier.bestFor}</p>
              <ul className="space-y-2">
                {tier.items.map((item) => (
                  <li key={item} className="text-sm text-ink/60 leading-7 flex gap-2">
                    <span style={{ color: "var(--flux)" }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="text-sm text-ink/55 mt-8 leading-7">
          All projects are 50% upfront, 50% on launch. Payment plans available. Book a free discovery call for a custom quote based on your specific requirements.
        </p>
      </section>

      <section className="section max-w-[1400px] mx-auto">
        <p className="text-sm uppercase tracking-widest text-ink/30 mb-4">WordPress website questions</p>
        <h2 className="font-display font-semibold text-3xl md:text-5xl max-w-4xl leading-tight mb-10" style={{ letterSpacing: "-0.03em" }}>
          Questions we get asked before every project.
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((item) => (
            <article key={item.q} className="rounded-3xl border border-ink/10 bg-white p-7">
              <h3 className="font-medium mb-2">{item.q}</h3>
              <p className="text-sm text-ink/60 leading-7">{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-sm max-w-[1400px] mx-auto">
        <div className="rounded-3xl bg-ink text-cream p-8 md:p-12 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight mb-4" style={{ letterSpacing: "-0.03em" }}>
            Ready to build a WordPress website that actually brings in leads?
          </h2>
          <p className="text-sm md:text-base text-cream/75 max-w-3xl mx-auto leading-7 mb-8">
            Book a free 30-minute discovery call. We will review your current site (if you have one), identify what is costing you leads, and map out exactly what needs to be built. Most clients have a live site within 10 days of signing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 mb-6">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium" style={{ background: "var(--flux)", color: "white" }}>
              Book your free discovery call
              <span>→</span>
            </Link>
            <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium border border-cream/35 text-cream/90">
              WhatsApp us now
            </a>
          </div>
          <p className="text-xs text-cream/55 max-w-4xl mx-auto">
            Serving healthcare clinics, home service businesses, and real estate professionals across the United States, Canada, and the United Kingdom. Delivered by one dedicated team - not outsourced.
          </p>
        </div>
      </section>
    </>
  );
}
