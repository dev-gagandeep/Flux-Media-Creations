import { safeJsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  absoluteTitle: "WordPress Website Design for Service Businesses",
  description:
    "Get a fast, SEO-friendly WordPress website built to convert visitors into leads. Custom design for clinics, home services, real estate, and local brands.",
  path: "/services/wordpress-website-build",
});

const trustHighlights = [
  "Custom WordPress Website Design",
  "Mobile accelerated layout",
  "SEO-ready structure",
  "Quick load layout",
  "Lead forms",
  "Appointment booking sections",
  "GoHighLevel CRM integration",
  "For clinics, home services, real estate, and local businesses",
];

const leadLossSigns = [
  "Visitors come to your site but do not contact you.",
  "Your website looks dated or out of sync with your present-day brand.",
  "Your pages are not ranking for important services.",
  "Your website is slow on mobile.",
  "Your contact forms are broken or hard to find.",
  "Your calls to action are weak or unclear.",
  "Your service pages are too brief.",
  "Your website is not integrated with your CRM.",
  "You are paying for ads, but driving traffic to a bad landing experience.",
  "Your competitors appear more credible online.",
];

const solutionPillars = [
  {
    title: "Search engine visibility",
    body: "Your website should have a clear structure that helps Google understand your services, locations, industries, and expertise. We build pages with SEO-friendly headings, metadata, image alt text, internal links, clean navigation, and service-focused content.",
    bullets: ["Page structure", "SEO headings", "Service content", "Internal links", "Metadata", "Image alt text"],
  },
  {
    title: "User trust",
    body: "Visitors decide quickly whether your business looks credible. Your website needs solid messaging, real services, work examples, testimonials, easy contact paths, and a professional design.",
    bullets: ["Who you help", "What you provide", "What makes you different", "Proof of work", "Contact options", "What happens next"],
  },
  {
    title: "Lead conversion",
    body: "A website should clearly tell visitors what to do next. We build call buttons, contact forms, quote sections, booking links, sticky CTAs, service cards, and lead capture paths that can connect to a CRM.",
    bullets: ["Call buttons", "Contact forms", "Quote requests", "Booking links", "Sticky CTAs", "CRM paths"],
  },
];

const constructItems = [
  "Custom homepage design",
  "Service pages",
  "Industry pages",
  "Location pages",
  "Contact page",
  "About page",
  "Blog creation",
  "Trust and proof sections",
  "Landing pages",
  "Appointment booking sections",
  "Lead capture forms",
  "Click-to-call buttons",
  "WhatsApp buttons",
  "Google Maps embeds",
  "Review and testimonial sections",
  "FAQ sections",
  "SEO metadata",
  "Technical SEO basics",
  "Mobile and tablet compatibility",
  "Speed-oriented design",
  "GoHighLevel form or CRM connector",
];

const audienceBlocks = [
  {
    title: "Healthcare Clinics",
    body: "We create websites for clinics and healthcare providers that want to build patient trust, explain services clearly, support appointment requests, and look professional online.",
    bestFor: ["Pain management clinics", "Vein clinics", "Orthopedic clinics", "Chiropractor offices", "Physical therapy clinics", "Wellness clinics", "Specialty medical practices"],
    note: "A healthcare website should help patients feel informed and confident. It should clearly explain treatments, providers, locations, insurance or appointment information, and next steps.",
    href: "/healthcare-website-crm",
  },
  {
    title: "Home Service Companies",
    body: "Home service customers compare companies before making a choice. Your website needs to build trust quickly and make it easy to request a quote.",
    bestFor: ["HVAC contractors", "Plumbers", "Roofing contractors", "Electricians", "Cleaning firms", "Repair services", "Contractors", "Local service providers"],
    note: "We create home service websites with service pages, location sections, quote forms, emergency CTAs, trust badges, review sections, and clear calls to action.",
    href: "/industries#home-services",
  },
  {
    title: "Real Estate Agents",
    body: "Real estate websites need property-specific content, lead capture, strong personal branding, and local authority.",
    bestFor: ["Real estate agents", "Estate agents", "Brokers", "Property consultants", "Investor-focused professionals", "Local real estate teams"],
    note: "We can build websites with buyer pages, seller pages, home valuation CTAs, neighborhood content, lead forms, and CRM-connected inquiry flows.",
    href: "/industries#real-estate",
  },
  {
    title: "Consultants, Coaches, and Local Brands",
    body: "If you sell expertise for a living, your website needs to show your value clearly. We help service providers build websites that establish authority and lead to discovery calls.",
    bestFor: ["Consultants", "Coaches", "Agencies", "Local brands", "Appointment-based services", "Professional service providers"],
    note: "The site should explain your offer, show credibility, answer objections, and make it easy to book a call or send an inquiry.",
    href: "/contact",
  },
];

const wordpressBenefits = [
  "SEO-optimized service pages",
  "Blog articles",
  "Location landing pages",
  "Custom designs",
  "Plugin integrations",
  "CRM integrations",
  "Booking tools",
  "Analytics",
  "Conversion tracking",
  "Sustainable content growth",
];

const elementorItems = [
  "Custom page design",
  "Simple text and image updates",
  "Reusable design sections",
  "Mobile layout control",
  "Landing pages",
  "Service pages",
  "Conversion-focused sections",
  "Fast page building without custom code for every change",
];

const seoItems = [
  "SEO-friendly page titles",
  "Meta descriptions",
  "Proper H1, H2, and H3 hierarchy",
  "Service keyword mapping",
  "Clean URL structure",
  "Internal links",
  "Image alt tags",
  "Fast loading sections",
  "Mobile-optimized layout",
  "FAQ sections",
  "Local SEO content topics",
  "Schema suggestions",
  "Google Search Console setup instructions",
  "Google Analytics setup help",
];

const conversionItems = [
  "Clear hero message",
  "Strong CTA above the fold",
  "Mobile sticky call button",
  "Contact forms",
  "Request a quote forms",
  "Book appointment buttons",
  "Service cards",
  "Trust paragraphs",
  "Testimonials",
  "Case study connections",
  "FAQ section",
  "Location-specific CTAs",
  "Click-to-call buttons",
  "WhatsApp links",
  "GoHighLevel lead capture forms",
];

const ghlItems = [
  "GoHighLevel connected website forms",
  "Lead alerts",
  "Missed call text back",
  "Appointment reminders",
  "SMS and email follow-up",
  "Sales pipeline monitoring",
  "Automated review requests",
  "Lead reactivation campaigns",
];

const redesignSigns = [
  "Your design looks old.",
  "Your website is difficult to update.",
  "Your mobile layout is weak.",
  "Your content no longer fits your services.",
  "Your pages are not ranking.",
  "Your contact forms are not converting.",
  "Your brand has matured.",
  "You want to connect your website with GoHighLevel.",
  "You want a site that is cleaner, faster, and more professional.",
];

const deliverables = [
  ["Strategy and Planning", "We review your company, offerings, target market, competitors, existing website, and objectives so the website is developed with a clear purpose."],
  ["Website Structure", "We plan your key pages, navigation, service hierarchy, CTA flow, and internal linking structure."],
  ["Custom Design", "We design a modern professional website look that reflects your brand and inspires trust in your target audience."],
  ["WordPress Development", "We build your site using WordPress, a flexible platform that allows for future updates and content growth."],
  ["Mobile Optimization", "Your site is built for mobile, tablet, and desktop devices."],
  ["Page SEO Setup", "We build pages with SEO-friendly titles, headings, metadata, internal links, and content structure."],
  ["Contact and Lead Forms", "We develop forms that allow visitors to request information, book a call, or request a quote."],
  ["CRM and Automation Integration", "We can integrate your WordPress site with GoHighLevel or other automation tools when needed."],
  ["Launch Support", "We help you review, test, and prepare your website for launch."],
];

const processSteps = [
  ["Explore", "We understand your business, services, target market, competitors, website goals, and current pain points."],
  ["Website Strategy", "We plan the page structure, content sections, calls to action, service hierarchy, and conversion flow."],
  ["Content Direction", "We organize your website content around what people are searching for and what they need to know before contacting you."],
  ["Design", "We create a clear, professional design that is on-brand, builds trust, and guides visitors clearly."],
  ["WordPress Build", "We build the website inside WordPress with a flexible and scalable setup."],
  ["SEO Configuration", "We add metadata, internal links, image alt text, page structure, and SEO-friendly headings."],
  ["Test", "We test the website on mobile, tablet, and desktop. We also check forms, links, buttons, layout, and basic functionality."],
  ["Launch", "Once approved, we go live and give you basic training on how to manage it."],
];

const pricingCards = [
  {
    title: "Beginner Site",
    price: "Starting at $500",
    body: "Great for small businesses that want a clean, professional online presence with core pages like homepage, about, services, and contact.",
  },
  {
    title: "Growth Website",
    price: "Custom quotation",
    body: "Best for service businesses that need stronger SEO structure, service pages, conversion sections, lead capture, testimonials, FAQs, and basic SEO setup.",
  },
  {
    title: "Complete Growth Website + CRM",
    price: "Starting at $1,300",
    body: "Great for companies that want a WordPress website connected to GoHighLevel automation, lead capture, pipeline setup, missed call text back, and follow-up workflows.",
    href: "/services/full-growth-system",
  },
];

const whyFlux = [
  ["Focus on service businesses", "We build for clinics, home services, real estate, and local brands where every lead matters."],
  ["SEO-first architecture", "We plan pages so users and search engines can understand your services clearly."],
  ["Design for conversion", "We create websites that generate calls, forms, bookings, and inquiries."],
  ["WordPress + GoHighLevel knowledge", "We integrate websites with CRM automation, SMS follow-up, appointment reminders, and lead pipelines."],
  ["Founder-led implementation", "You get direct strategy and implementation, not a generic template-based build."],
  ["Hands-on project experience", "Our work includes healthcare, local service, real estate, and business websites built for credibility and lead generation."],
];

const comparisonRows = [
  ["Design", "Standard layout", "Custom brand design"],
  ["SEO", "Basic or missing", "SEO-optimized page structure"],
  ["Content", "Short and vague", "Search-based service content"],
  ["Mobile", "May need adjustments", "Designed for mobile users"],
  ["Lead capture", "Basic contact form", "Forms, CTAs, booking, and CRM options"],
  ["Scalability", "Limited", "Expandable via pages, blogs, and automations"],
  ["Strategy", "Design first", "Search, trust, and conversion first"],
];

const locations = [
  "New Jersey companies",
  "New York companies",
  "Healthcare clinics",
  "Local service businesses",
  "Home service companies",
  "Real estate agents",
  "Agencies and consultants",
  "Multi-location service brands",
  "Remote and appointment-based businesses",
];

const faqs = [
  {
    q: "How much does a WordPress website cost?",
    a: "Our WordPress website design service starts from $500. The final cost depends on the number of pages, design complexity, content requirements, forms, integrations, SEO setup, and whether you need a new website or redesign.",
  },
  {
    q: "Is WordPress good for small business websites?",
    a: "Yes. WordPress is a strong choice for small businesses because it is flexible, scalable, SEO-friendly, and easy to expand with service pages, blog content, forms, booking tools, and CRM integrations.",
  },
  {
    q: "Do you build custom WordPress websites or use templates?",
    a: "We build custom WordPress websites based on your brand, services, audience, and goals. We may use flexible tools like Elementor, but the structure, content flow, and design are planned around your business.",
  },
  {
    q: "Will my WordPress website be SEO-friendly?",
    a: "Yes. We build websites with SEO-friendly structure, proper headings, meta titles, meta descriptions, internal links, image alt text, and service-focused page content.",
  },
  {
    q: "Can you redesign my existing WordPress website?",
    a: "Yes. We can redesign outdated WordPress websites with better design, clearer content, improved mobile layout, stronger calls to action, and better SEO structure.",
  },
  {
    q: "Can you connect my WordPress website to GoHighLevel?",
    a: "Yes. We can connect WordPress forms, landing pages, booking buttons, and lead capture sections to GoHighLevel so your inquiries flow into your CRM automatically.",
  },
  {
    q: "Do you write the website content?",
    a: "Yes. We can help write service-focused, SEO-friendly website content that explains your business clearly and supports organic search visibility.",
  },
  {
    q: "How many pages do I need?",
    a: "Most service businesses need at least a homepage, about page, services page, individual service pages, contact page, and privacy page. For stronger SEO, you may also need industry pages, location pages, blog posts, and trust sections.",
  },
  {
    q: "Will my website work on mobile?",
    a: "Yes. We design WordPress websites to work across desktop, tablet, and mobile devices.",
  },
  {
    q: "Can you add appointment booking to my website?",
    a: "Yes. We can add booking buttons, calendar links, embedded forms, GoHighLevel calendars, or other appointment request options depending on your setup.",
  },
  {
    q: "Do you provide website maintenance after launch?",
    a: "Yes. We can provide ongoing WordPress maintenance, updates, backups, security checks, content updates, and technical support.",
  },
  {
    q: "What makes Flux Media Creations different?",
    a: "Flux Media Creations builds WordPress websites with SEO, conversion, and automation in mind. We do not just design pages. We help create a website system that supports lead capture, trust, search visibility, and follow-up.",
  },
];

const internalLinks = [
  { label: "GoHighLevel Automation", href: "/services/gohighlevel-automation" },
  { label: "Full Growth System", href: "/services/full-growth-system" },
  { label: "Search Visibility Engine", href: "/services/search-visibility-engine" },
  { label: "Monthly Maintenance", href: "/services/monthly-maintenance" },
  { label: "Industries", href: "/industries" },
  { label: "Industries", href: "/industries" },
  { label: "Healthcare Website Design", href: "/healthcare-website-crm" },
  { label: "Contact", href: "/contact" },
];

export default function WordPressWebsiteBuildPage() {
  const pageUrl = `${SITE.url}/services/wordpress-website-build`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "WordPress Website Design Service",
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
      telephone: SITE.phone,
      email: SITE.email,
    },
    serviceType: "WordPress Website Design and Development",
    areaServed: ["United States", "Canada", "United Kingdom", "India", "Worldwide"],
    description:
      "Flux Media Creations provides SEO-friendly WordPress website design and development for clinics, home services, real estate professionals, consultants, and local service businesses.",
    url: pageUrl,
    offers: {
      "@type": "Offer",
      price: "500",
      priceCurrency: "USD",
      url: pageUrl,
    },
  };

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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE.url}/services` },
      { "@type": "ListItem", position: 3, name: "WordPress Website Design", item: pageUrl },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }} />

      <main>
        <section className="section pt-32 md:pt-40 max-w-[1400px] mx-auto">
          <p className="mb-6 text-sm text-ink/45">
            <Link href="/services" className="hover:text-flux transition-colors">Services</Link>
            <span className="mx-2">→</span>
            <span>WordPress Website Design</span>
          </p>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="mb-4 text-xs uppercase tracking-widest text-flux">WordPress Website Design Service</p>
              <h1 className="mb-6 max-w-5xl font-display text-4xl font-semibold leading-[1.02] md:text-6xl" style={{ letterSpacing: "-0.03em" }}>
                WordPress Website Design Service for Service Businesses
              </h1>
              <p className="mb-5 max-w-4xl text-lg leading-8 text-ink/62">
                Your website should look professional and more. It needs to explain what you do, build trust quickly, show why people should choose you, and make it easy for visitors to call, book, or fill out a form.
              </p>
              <p className="mb-5 max-w-4xl text-base leading-8 text-ink/58">
                Flux Media Creations builds search engine optimized WordPress websites for service businesses looking to get more leads, better credibility, and a stronger web presence. We build fast, conversion-focused websites for clinics, home service companies, real estate professionals, consultants, local businesses, and growing service brands.
              </p>
              <p className="mb-8 max-w-4xl text-base leading-8 text-ink/58">
                Whether you require a new website, a redesign, or a WordPress site integrated with <Link href="/services/gohighlevel-automation" className="text-flux hover:underline">GoHighLevel automation</Link>, we design your website with one purpose in mind: to convert visitors into actual business opportunities.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex rounded-full bg-flux px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-flux-dark">
                  Get Your WordPress Site Live →
                </Link>
                <a href="#what-we-do" className="inline-flex rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink/72 transition-colors hover:border-ink/35 hover:text-ink">
                  What We Do
                </a>
              </div>
            </div>
            <div className="rounded-lg border border-ink/10 bg-white p-5 shadow-[0_30px_90px_rgba(255,92,53,0.10)]">
              <div className="rounded-lg bg-blush p-5">
                <p className="mb-4 text-xs uppercase tracking-widest text-ink/35">Website growth stack</p>
                <div className="grid gap-3">
                  {trustHighlights.map((item, index) => (
                    <div key={item} className="flex items-center gap-3 rounded-lg border border-ink/8 bg-white p-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-flux text-xs font-semibold text-white">0{index + 1}</span>
                      <span className="text-sm font-medium text-ink/68">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-sm max-w-[1400px] mx-auto">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-lg border border-ink/10 bg-white p-8">
              <p className="mb-4 text-xs uppercase tracking-widest text-flux">Strategy first</p>
              <h2 className="mb-5 font-display text-3xl font-semibold md:text-5xl" style={{ letterSpacing: "-0.03em" }}>
                A website is not just a digital brochure.
              </h2>
              <p className="text-sm leading-7 text-ink/62">
                Many businesses have websites, but not every website grows a business. A bad website can confuse visitors, load slowly, hide important information, or make it difficult to get in touch.
              </p>
            </div>
            <div className="rounded-lg border border-ink/10 bg-white p-8">
              <div className="space-y-4 text-sm leading-7 text-ink/62">
                <p>A healthy WordPress website clearly guides people from search to service page, from service page to trust, and from trust to action.</p>
                <p>At Flux Media Creations, we build WordPress websites with strategy behind each section. Your homepage, service pages, contact forms, calls to action, navigation, content structure, and mobile layout are all designed to support leads, SEO, and long-term growth.</p>
                <p>WordPress is an open-source platform used by creators, small businesses, and enterprises to build flexible websites, according to WordPress.org. Its flexibility makes it a strong choice for businesses that want control, scalability, and search-friendly structure.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section max-w-[1400px] mx-auto">
          <p className="mb-4 text-xs uppercase tracking-widest text-ink/35">Problem domain</p>
          <h2 className="mb-8 max-w-5xl font-display text-3xl font-semibold md:text-5xl" style={{ letterSpacing: "-0.03em" }}>
            Are you losing leads to your website?
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {leadLossSigns.map((item) => (
              <div key={item} className="rounded-lg border border-ink/10 bg-white p-5">
                <span className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-blush text-flux">•</span>
                <p className="text-sm leading-7 text-ink/64">{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-4xl text-base leading-8 text-ink/62">
            A better website can improve how people perceive your business, how search engines understand your services, and how easy it is for visitors to take action.
          </p>
        </section>

        <section id="what-we-do" className="section max-w-[1400px] mx-auto">
          <p className="mb-4 text-xs uppercase tracking-widest text-ink/35">Solution</p>
          <h2 className="mb-5 max-w-5xl font-display text-3xl font-semibold md:text-5xl" style={{ letterSpacing: "-0.03em" }}>
            WordPress website design: search, trust, and conversion oriented.
          </h2>
          <p className="mb-10 max-w-4xl text-base leading-8 text-ink/62">
            We provide a WordPress website design service for businesses that need a professional website with a specific purpose.
          </p>
          <div className="grid gap-5 lg:grid-cols-3">
            {solutionPillars.map((item, index) => (
              <article key={item.title} className="rounded-lg border border-ink/10 bg-white p-6">
                <p className="mb-4 text-xs uppercase tracking-widest text-flux">0{index + 1}</p>
                <h3 className="mb-3 font-display text-2xl font-semibold" style={{ letterSpacing: "-0.02em" }}>{item.title}</h3>
                <p className="mb-5 text-sm leading-7 text-ink/62">{item.body}</p>
                <div className="flex flex-wrap gap-2">
                  {item.bullets.map((bullet) => (
                    <span key={bullet} className="rounded-full border border-flux/10 bg-blush px-3 py-1 text-xs text-ink/62">{bullet}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section max-w-[1400px] mx-auto">
          <p className="mb-4 text-xs uppercase tracking-widest text-ink/35">What we construct</p>
          <h2 className="mb-8 max-w-5xl font-display text-3xl font-semibold md:text-5xl" style={{ letterSpacing: "-0.03em" }}>
            Tailored WordPress websites for expanding service businesses.
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {constructItems.map((item) => (
              <div key={item} className="rounded-lg border border-ink/10 bg-white px-4 py-3 text-sm text-ink/65">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="section max-w-[1400px] mx-auto">
          <p className="mb-4 text-xs uppercase tracking-widest text-ink/35">Who this service is for</p>
          <h2 className="mb-8 max-w-5xl font-display text-3xl font-semibold md:text-5xl" style={{ letterSpacing: "-0.03em" }}>
            Service-based business website design in WordPress.
          </h2>
          <p className="mb-10 max-w-4xl text-base leading-8 text-ink/62">
            This service is perfect for businesses that rely on leads, appointments, calls, quotes, bookings, consultations, or local search visibility.
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            {audienceBlocks.map((block) => (
              <article key={block.title} className="rounded-lg border border-ink/10 bg-white p-6">
                <h3 className="mb-3 font-display text-2xl font-semibold" style={{ letterSpacing: "-0.02em" }}>{block.title}</h3>
                <p className="mb-5 text-sm leading-7 text-ink/62">{block.body}</p>
                <div className="mb-5 grid gap-2 sm:grid-cols-2">
                  {block.bestFor.map((item) => (
                    <span key={item} className="rounded-md bg-cream px-3 py-2 text-xs text-ink/62">{item}</span>
                  ))}
                </div>
                <p className="mb-5 text-sm leading-7 text-ink/58">{block.note}</p>
                <Link href={block.href} className="text-sm font-semibold text-flux hover:underline">See related page →</Link>
              </article>
            ))}
          </div>
        </section>

        <section className="section-sm max-w-[1400px] mx-auto">
          <div className="rounded-lg bg-ink p-8 text-cream md:p-10">
            <p className="mb-4 text-xs uppercase tracking-widest text-cream/45">Why WordPress?</p>
            <h2 className="mb-5 max-w-5xl font-display text-3xl font-semibold md:text-5xl" style={{ letterSpacing: "-0.03em" }}>
              Why WordPress is our favorite pick for service business websites.
            </h2>
            <p className="mb-8 max-w-5xl text-sm leading-7 text-cream/68">
              WordPress is flexible and scalable, making it a strong choice for businesses that want control over their online presence in the long run. Unlike many closed website builders, WordPress gives your business room to grow from a simple service website into landing pages, blog posts, trust sections, advanced forms, automations, memberships, or ecommerce.
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {wordpressBenefits.map((item) => (
                <div key={item} className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-cream/70">{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="section max-w-[1400px] mx-auto">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-lg border border-ink/10 bg-white p-8">
              <p className="mb-4 text-xs uppercase tracking-widest text-flux">Elementor</p>
              <h2 className="mb-5 font-display text-3xl font-semibold md:text-4xl" style={{ letterSpacing: "-0.03em" }}>
                WordPress Elementor website design.
              </h2>
              <p className="mb-6 text-sm leading-7 text-ink/62">
                As a WordPress website builder, I often use Elementor because it offers flexible design options, easy content editing, and clean visual control for business owners. We do not simply install Elementor and place blocks on a page. We create a structured, branded, SEO-savvy website your business can manage after launch.
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                {elementorItems.map((item) => (
                  <span key={item} className="rounded-md bg-cream px-3 py-2 text-xs text-ink/62">{item}</span>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-ink/10 bg-white p-8">
              <p className="mb-4 text-xs uppercase tracking-widest text-flux">SEO foundation</p>
              <h2 className="mb-5 font-display text-3xl font-semibold md:text-4xl" style={{ letterSpacing: "-0.03em" }}>
                SEO structure of a WordPress website.
              </h2>
              <p className="mb-6 text-sm leading-7 text-ink/62">
                We include basic on-page SEO setup in our WordPress website builds so your pages are easier for users and search engines to understand. Google also notes that structured data can help Google understand page content, so service pages, FAQs, local business information, and organization details should be marked up when relevant.
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                {seoItems.map((item) => (
                  <span key={item} className="rounded-md bg-cream px-3 py-2 text-xs text-ink/62">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-sm max-w-[1400px] mx-auto">
          <div className="rounded-lg border border-ink/10 bg-white p-8 md:p-10">
            <p className="mb-4 text-xs uppercase tracking-widest text-flux">Conversion</p>
            <h2 className="mb-5 max-w-5xl font-display text-3xl font-semibold md:text-5xl" style={{ letterSpacing: "-0.03em" }}>
              Designed to inspire visitors to take action.
            </h2>
            <p className="mb-8 max-w-5xl text-base leading-8 text-ink/62">
              A beautiful website is not enough if visitors do not contact you. We design each page to guide visitors to the next step without too much thought.
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {conversionItems.map((item) => (
                <div key={item} className="rounded-lg bg-cream px-4 py-3 text-sm text-ink/65">{item}</div>
              ))}
            </div>
            <p className="mt-8 max-w-4xl text-sm leading-7 text-ink/62">
              For service businesses, the goal is simple: make it easy for the right person to reach out.
            </p>
          </div>
        </section>

        <section className="section-sm max-w-[1400px] mx-auto">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-lg border border-ink/10 bg-white p-8">
              <p className="mb-4 text-xs uppercase tracking-widest text-flux">WordPress + GoHighLevel</p>
              <h2 className="mb-5 font-display text-3xl font-semibold md:text-5xl" style={{ letterSpacing: "-0.03em" }}>
                Integrate GoHighLevel with your WordPress site.
              </h2>
              <p className="text-sm leading-7 text-ink/62">
                The website gets the lead. A CRM lets you follow up. Flux Media Creations can integrate your WordPress site with <Link href="/services/gohighlevel-automation" className="text-flux hover:underline">GoHighLevel automation</Link> so form submissions, calls, booking requests, and inquiries flow into your CRM.
              </p>
            </div>
            <div className="rounded-lg border border-ink/10 bg-white p-8">
              <div className="grid gap-2 sm:grid-cols-2">
                {ghlItems.map((item) => (
                  <span key={item} className="rounded-md bg-blush px-3 py-2 text-xs text-ink/62">{item}</span>
                ))}
              </div>
              <p className="mt-6 text-sm leading-7 text-ink/62">
                This combination is especially powerful for clinics, home service companies, real estate professionals, and appointment-based companies.
              </p>
            </div>
          </div>
        </section>

        <section className="section max-w-[1400px] mx-auto">
          <p className="mb-4 text-xs uppercase tracking-widest text-ink/35">Redesigns</p>
          <h2 className="mb-5 max-w-5xl font-display text-3xl font-semibold md:text-5xl" style={{ letterSpacing: "-0.03em" }}>
            Redesigning WordPress websites for legacy sites.
          </h2>
          <p className="mb-8 max-w-4xl text-base leading-8 text-ink/62">
            Do you have a website that does not work for your business? We can redesign your existing WordPress website with better structure, stronger messaging, improved mobile experience, clearer calls to action, and more SEO-focused content.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {redesignSigns.map((item) => (
              <div key={item} className="rounded-lg border border-ink/10 bg-white px-4 py-3 text-sm text-ink/65">{item}</div>
            ))}
          </div>
          <p className="mt-8 max-w-4xl text-sm leading-7 text-ink/62">
            A redesign is more than a visual refresh. It is a chance to make your website communicate, rank, and convert better.
          </p>
        </section>

        <section className="section max-w-[1400px] mx-auto">
          <p className="mb-4 text-xs uppercase tracking-widest text-ink/35">Deliverables</p>
          <h2 className="mb-8 max-w-5xl font-display text-3xl font-semibold md:text-5xl" style={{ letterSpacing: "-0.03em" }}>
            What do we include in our WordPress website design service?
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {deliverables.map(([title, body]) => (
              <article key={title} className="rounded-lg border border-ink/10 bg-white p-6">
                <h3 className="mb-3 font-display text-xl font-semibold" style={{ letterSpacing: "-0.02em" }}>{title}</h3>
                <p className="text-sm leading-7 text-ink/62">{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section max-w-[1400px] mx-auto">
          <p className="mb-4 text-xs uppercase tracking-widest text-ink/35">Process</p>
          <h2 className="mb-8 max-w-5xl font-display text-3xl font-semibold md:text-5xl" style={{ letterSpacing: "-0.03em" }}>
            Our process for WordPress web design.
          </h2>
          <div className="space-y-4">
            {processSteps.map(([title, body], index) => (
              <div key={title} className="grid gap-5 rounded-lg border border-ink/10 bg-white p-6 md:grid-cols-[64px_1fr]">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-flux text-sm font-semibold text-white">{index + 1}</span>
                <div>
                  <h3 className="mb-2 font-display text-2xl font-semibold" style={{ letterSpacing: "-0.02em" }}>{title}</h3>
                  <p className="text-sm leading-7 text-ink/62">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section max-w-[1400px] mx-auto">
          <p className="mb-4 text-xs uppercase tracking-widest text-ink/35">Pricing</p>
          <h2 className="mb-5 max-w-5xl font-display text-3xl font-semibold md:text-5xl" style={{ letterSpacing: "-0.03em" }}>
            Cost of designing a WordPress website.
          </h2>
          <p className="mb-8 max-w-4xl text-base leading-8 text-ink/62">
            Our WordPress website design service starts at $500. Final price depends on number of pages, content needs, design complexity, forms, integrations, booking features, CRM setup, SEO requirements, and whether you need a new website or redesign.
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            {pricingCards.map((card) => (
              <article key={card.title} className="rounded-lg border border-ink/10 bg-white p-6">
                <p className="mb-3 text-xs uppercase tracking-widest text-flux">{card.title}</p>
                <h3 className="mb-2 font-display text-2xl font-semibold" style={{ letterSpacing: "-0.02em" }}>{card.price}</h3>
                <p className="mb-5 text-sm leading-7 text-ink/62">{card.body}</p>
                {card.href ? <Link href={card.href} className="text-sm font-semibold text-flux hover:underline">Explore this package →</Link> : null}
              </article>
            ))}
          </div>
        </section>

        <section className="section-sm max-w-[1400px] mx-auto">
          <div className="rounded-lg bg-ink p-8 text-cream md:p-10">
            <p className="mb-4 text-xs uppercase tracking-widest text-cream/45">E-E-A-T</p>
            <h2 className="mb-5 max-w-5xl font-display text-3xl font-semibold md:text-5xl" style={{ letterSpacing: "-0.03em" }}>
              Why Flux Media Creations?
            </h2>
            <p className="mb-8 max-w-5xl text-sm leading-7 text-cream/68">
              Flux Media Creations is not just a web design company. We build websites as part of a comprehensive lead generation system. We understand how service businesses get leads from search, website visits, phone calls, forms, booking requests, and follow-up systems.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              {whyFlux.map(([title, body]) => (
                <div key={title} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                  <h3 className="mb-2 font-display text-lg font-semibold">{title}</h3>
                  <p className="text-xs leading-6 text-cream/62">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section max-w-[1400px] mx-auto">
          <p className="mb-4 text-xs uppercase tracking-widest text-ink/35">Comparison</p>
          <h2 className="mb-8 max-w-5xl font-display text-3xl font-semibold md:text-5xl" style={{ letterSpacing: "-0.03em" }}>
            Template website vs custom WordPress site.
          </h2>
          <div className="overflow-hidden rounded-lg border border-ink/10 bg-white">
            <div className="grid grid-cols-3 border-b border-ink/10 bg-blush/60">
              <div className="p-4 text-sm font-semibold text-ink">Feature</div>
              <div className="p-4 text-sm font-semibold text-ink">Basic Template Website</div>
              <div className="p-4 text-sm font-semibold text-ink">Flux WordPress Website</div>
            </div>
            {comparisonRows.map(([feature, template, flux]) => (
              <div key={feature} className="grid grid-cols-3 border-b border-ink/8 last:border-b-0">
                <div className="p-4 text-sm font-medium text-ink/72">{feature}</div>
                <div className="p-4 text-sm text-ink/58">{template}</div>
                <div className="p-4 text-sm text-ink/72">{flux}</div>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-4xl text-sm leading-7 text-ink/62">
            A template can give you a website. A strategic WordPress build gives your business a stronger foundation for growth.
          </p>
        </section>

        <section className="section-sm max-w-[1400px] mx-auto">
          <div className="rounded-lg border border-flux/15 bg-blush p-8 md:p-10">
            <p className="mb-4 text-xs uppercase tracking-widest text-flux">AEO direct answer</p>
            <h2 className="mb-5 font-display text-3xl font-semibold md:text-5xl" style={{ letterSpacing: "-0.03em" }}>
              What is a WordPress web design service?
            </h2>
            <p className="max-w-5xl text-base leading-8 text-ink/65">
              A WordPress website design service is a professional service where a designer or agency plans, designs, builds, and launches a website on WordPress. For service businesses, this usually includes custom page design, mobile optimization, service pages, contact forms, SEO-friendly structure, and lead generation features.
            </p>
          </div>
        </section>

        <section className="section-sm max-w-[1400px] mx-auto">
          <p className="mb-4 text-xs uppercase tracking-widest text-ink/35">Local and national service companies</p>
          <h2 className="mb-5 max-w-5xl font-display text-3xl font-semibold md:text-5xl" style={{ letterSpacing: "-0.03em" }}>
            WordPress website design for local and national service companies.
          </h2>
          <p className="mb-6 max-w-4xl text-base leading-8 text-ink/62">
            Flux Media Creations works with businesses in the United States, Canada, the United Kingdom, India, and around the world. Whether you serve one city or many locations, your website should identify where you work, who you help, and how people can contact you.
          </p>
          <div className="flex flex-wrap gap-2">
            {locations.map((item) => (
              <span key={item} className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm text-ink/62">{item}</span>
            ))}
          </div>
        </section>

        <section className="section max-w-[1400px] mx-auto">
          <p className="mb-4 text-xs uppercase tracking-widest text-ink/35">Internal links</p>
          <div className="rounded-lg border border-ink/10 bg-white p-8">
            <h2 className="mb-5 font-display text-3xl font-semibold" style={{ letterSpacing: "-0.03em" }}>
              Related services and proof paths.
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {internalLinks.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-md bg-cream px-4 py-3 text-sm text-ink/65 transition-colors hover:text-flux">
                  {item.label} →
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section max-w-[1400px] mx-auto">
          <p className="mb-4 text-xs uppercase tracking-widest text-ink/35">FAQs</p>
          <h2 className="mb-8 max-w-5xl font-display text-3xl font-semibold md:text-5xl" style={{ letterSpacing: "-0.03em" }}>
            WordPress website design FAQs.
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {faqs.map((item) => (
              <article key={item.q} className="rounded-lg border border-ink/10 bg-white p-6">
                <h3 className="mb-3 font-display text-xl font-semibold" style={{ letterSpacing: "-0.02em" }}>{item.q}</h3>
                <p className="text-sm leading-7 text-ink/62">{item.a}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-sm max-w-[1400px] mx-auto">
          <div className="rounded-lg bg-ink p-8 text-center text-cream md:p-12">
            <h2 className="mx-auto mb-4 max-w-4xl font-display text-3xl font-semibold md:text-5xl" style={{ letterSpacing: "-0.03em" }}>
              Ready to build a WordPress website that works for your business?
            </h2>
            <p className="mx-auto mb-8 max-w-3xl text-sm leading-7 text-cream/68 md:text-base">
              Your website should help people understand your business, trust your expertise, and take action. Whether you need a new website, a redesign, or a full WordPress + GoHighLevel growth system, we can help you build a stronger foundation for leads, visibility, and long-term growth.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex justify-center rounded-full bg-flux px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-flux-dark">
                Start Your WordPress Website →
              </Link>
              <Link href="/services/full-growth-system" className="inline-flex justify-center rounded-full border border-cream/25 px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-white/10">
                Explore Full Growth System
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
