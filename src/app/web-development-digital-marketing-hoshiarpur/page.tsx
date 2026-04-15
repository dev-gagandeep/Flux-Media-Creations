import { Metadata } from "next";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: "Web Design & Digital Marketing Experts in Hoshiarpur | Flux Media Creations",
  description: "Elevate your Hoshiarpur business with Flux Media Creations. We specialize in high-converting web development, NRI service automation, and local SEO for the Doaba region.",
  path: "/web-development-digital-marketing-hoshiarpur",
});

export default function HoshiarpurPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="section pt-10 md:pt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className="inline-block mb-4 text-sm font-medium text-ink/60 border border-ink/20 rounded-full px-4 py-2">
                Hoshiarpur, Punjab
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Local Trust, Global Reach: Web Development & Automation in Hoshiarpur
              </h1>
              <p className="text-lg text-ink/70 mb-8 leading-relaxed">
                Bridging the Gap Between Hoshiarpur's Local Businesses and the Global Market.
              </p>
              <p className="text-base text-ink/60 mb-8 leading-relaxed">
                We build modern, high-converting websites for local enterprises, hospitals, and educational institutions in the Doaba region. Connect with local customers and the NRI diaspora through professional design and instant WhatsApp automation.
              </p>
              <button
                style={{ background: "var(--flux)", color: "white" }}
                className="inline-flex px-8 py-4 rounded-full font-semibold hover:opacity-90 transition"
              >
                Get Your Free Hoshiarpur Digital Consultation
              </button>
            </div>
            <div className="rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=800&fit=crop"
                alt="Hoshiarpur City"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-lg text-ink/70 leading-relaxed">
            Hoshiarpur represents a unique and powerful market. Deeply rooted in tradition but with a massive global reach through the NRI (Non-Resident Indian) diaspora, businesses here require a specialized digital approach. For local hospitals, real estate developers, and service businesses along the Phagwara bypass and city center, having a website that reflects international standards is essential for building trust. Flux Media Creations brings elite-level web development and smart automation to Hoshiarpur, helping local enterprises professionalize their online presence and seamlessly manage inquiries from both local residents and international clients.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Services for Hoshiarpur's Market</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Bespoke Local & International Web Design",
                description: "We utilize WordPress and Elementor to create beautiful, fast, and easy-to-navigate websites. We focus on establishing strong local trust signals for the Hoshiarpur audience while maintaining the polished, high-end aesthetics expected by international clients and NRI investors.",
              },
              {
                title: "Lead Capture & WhatsApp Automation (GoHighLevel)",
                description: "In the Doaba region, direct and personal communication is paramount. We integrate GoHighLevel to power intelligent WhatsApp and SMS automation. When a customer or NRI client inquires on your website, they receive an instant, professional WhatsApp greeting, ensuring they feel valued and attended to immediately.",
              },
              {
                title: "Specialized NRI Service Portals",
                description: "For businesses specifically catering to the diaspora (real estate, legal services, specialized healthcare), we build dedicated portals. These systems make it incredibly easy for international clients to securely book services, schedule virtual consultations, or manage inquiries for their families back home.",
              },
              {
                title: "Google Maps & Local Search Dominance",
                description: "Reputation is everything in Hoshiarpur. We ensure your business ranks at the absolute top of Google Maps and local search results. We optimize your profiles, manage local citations, and ensure your business is easily discoverable across the entire district.",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-ink/10 bg-white p-8 hover:border-flux/30 transition"
              >
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-ink/60 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Choose Flux for Hoshiarpur</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Understanding the Doaba Dynamic",
                description: "We know that marketing in Hoshiarpur requires a delicate balance of deep local respect and modern professionalism. Our copy and design reflect this understanding.",
              },
              {
                title: "Frictionless Communication Systems",
                description: "We don't force your clients to use complicated portals if they prefer WhatsApp. We build systems that meet your clients where they are most comfortable, utilizing automation to manage the backend chaos.",
              },
              {
                title: "Scalable Web Architecture",
                description: "Using Elementor allows us to build a site that can easily grow. Whether you are adding a new hospital wing or a new real estate project, your site can be updated quickly and efficiently.",
              },
              {
                title: "Bridging Time Zones",
                description: "Our GoHighLevel automated pipelines act as your 24/7 receptionist, ensuring that an inquiry coming from Canada or the UK at 3 AM IST receives an immediate, professional response.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-ink/10 bg-white p-8"
              >
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-ink/60 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Relevance */}
      <section className="section-sm">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="rounded-3xl border border-flux/20 bg-gradient-to-br from-flux/5 to-transparent p-10">
            <h3 className="text-2xl font-bold mb-6">Hoshiarpur's Unique Digital Challenge</h3>
            <p className="text-ink/70 leading-relaxed mb-6">
              In Hoshiarpur, word-of-mouth and generational trust drive business. We translate that vital local trust into the digital ecosystem. Whether you operate an established educational institute needing a modern admission portal or a local healthcare facility looking to streamline patient intake, we provide a site that is vastly superior to your local competitors. By ensuring every single inquiry is answered instantly via intelligent automation, we help you solidify your reputation as the most reliable, modern choice in the Doaba region.
            </p>
            <p className="text-sm text-ink/50 font-medium">
              Trust + Technology = Market Leadership in Hoshiarpur.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Hoshiarpur Success Process</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              {
                step: "1",
                title: "Local & Diaspora Market Strategy",
                description: "We analyze your target audience—balancing the needs of local Hoshiarpur residents with the specific search behaviors of the NRI community.",
              },
              {
                step: "2",
                title: "Trust-Centric Web Design",
                description: "Building a WordPress/Elementor site focused on clear navigation, prominent contact methods, and strong authority signals (testimonials, certifications).",
              },
              {
                step: "3",
                title: "WhatsApp & Communication Integration",
                description: "Setting up GoHighLevel to route website leads directly into automated WhatsApp/SMS conversations and centralized team inboxes.",
              },
              {
                step: "4",
                title: "Portal Development & Testing",
                description: "If required, building and rigorously testing secure booking or consultation portals for international clients.",
              },
              {
                step: "5",
                title: "Local SEO & Launch",
                description: "Pushing the site live and optimizing your Google Business Profile to dominate local Hoshiarpur search results.",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="w-12 h-12 rounded-full border-2 border-flux bg-white flex items-center justify-center font-bold text-flux mb-4">
                  {item.step}
                </div>
                <h4 className="font-bold text-sm mb-2">{item.title}</h4>
                <p className="text-xs text-ink/60 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="section-sm">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="rounded-3xl border border-ink/10 bg-white p-10">
            <h3 className="text-2xl font-bold mb-6">Hoshiarpur Case Study: Hospitality & Event Planning</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-ink mb-3">Problem</h4>
                <p className="text-ink/60 leading-relaxed">
                  A well-established local hospitality and event-planning business in Hoshiarpur was overwhelmed with disorganized inquiries coming via phone calls, fragmented WhatsApp messages, and emails—especially from NRIs in Canada looking to book venues for their families back home.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-ink mb-3">Solution</h4>
                <p className="text-ink/60 leading-relaxed">
                  Flux Media Creations centralized their digital presence. We built a stunning, culturally resonant Elementor website featuring a dedicated "NRI Booking & Virtual Tour Portal." We routed all inquiries through a GoHighLevel system that automatically replied via WhatsApp with pricing brochures and a calendar link for virtual consultations.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-ink mb-3">Outcome</h4>
                <p className="text-ink/60 leading-relaxed">
                  The business eliminated their disorganized messaging chaos. They saw a 40% increase in high-ticket international bookings and significantly improved their online reviews due to their rapid, professional response times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="section-sm">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&h=500&fit=crop"
              alt="Hoshiarpur Business Community"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Can you make the website bilingual (English and Punjabi)?",
                answer: "Yes, we can architect your WordPress site to support seamless multi-language capabilities, ensuring your content is accessible to all demographics.",
              },
              {
                question: "How does WhatsApp automation work for my business?",
                answer: "When a user fills out a form on your site, GoHighLevel instantly triggers a customized WhatsApp message to their number, starting a conversation and allowing your staff to seamlessly take over when ready.",
              },
              {
                question: "Do you help with Google My Business (Google Maps) ranking?",
                answer: "Absolutely. Local SEO and Map Pack dominance is a core component of our strategy for Hoshiarpur businesses, ensuring you capture local foot traffic and local search intent.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="rounded-3xl border border-ink/10 bg-white p-8">
                <h3 className="font-bold text-lg mb-3">{faq.question}</h3>
                <p className="text-ink/60 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        style={{ background: "var(--flux)" }}
        className="section text-white text-center"
      >
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Modernize your Hoshiarpur business and connect with clients globally.
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Let's build a digital presence that honors your legacy and accelerates your growth.
          </p>
          <button
            style={{ background: "white", color: "var(--flux)" }}
            className="inline-flex px-8 py-4 rounded-full font-semibold hover:opacity-90 transition"
          >
            Schedule Your Free Strategy Call
          </button>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Can you make the website bilingual (English and Punjabi)?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we can architect your WordPress site to support seamless multi-language capabilities, ensuring your content is accessible to all demographics.",
                },
              },
              {
                "@type": "Question",
                name: "How does WhatsApp automation work for my business?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "When a user fills out a form on your site, GoHighLevel instantly triggers a customized WhatsApp message to their number, starting a conversation and allowing your staff to seamlessly take over when ready.",
                },
              },
              {
                "@type": "Question",
                name: "Do you help with Google My Business (Google Maps) ranking?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely. Local SEO and Map Pack dominance is a core component of our strategy for Hoshiarpur businesses, ensuring you capture local foot traffic and local search intent.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
