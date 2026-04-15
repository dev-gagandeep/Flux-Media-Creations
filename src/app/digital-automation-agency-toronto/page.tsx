import { Metadata } from "next";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: "Elite Web Development & AI SEO Agency in Toronto | Flux Media Creations",
  description: "Flux Media Creations provides Toronto businesses with premium WordPress development, GoHighLevel automation, and AI-driven SEO strategies for measurable growth.",
  path: "/digital-automation-agency-toronto",
});

export default function TorontoPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="section pt-10 md:pt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className="inline-block mb-4 text-sm font-medium text-ink/60 border border-ink/20 rounded-full px-4 py-2">
                Toronto, Canada
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                High-Converting Web Design & Intelligent CRM Automation in Toronto
              </h1>
              <p className="text-lg text-ink/70 mb-8 leading-relaxed">
                Dominate the Toronto Market with Automated Digital Systems.
              </p>
              <p className="text-base text-ink/60 mb-8 leading-relaxed">
                We build the digital infrastructure that top-tier Canadian companies rely on. Experience blazing-fast Elementor web design coupled with GoHighLevel automation that works 24/7 to capture and convert your ideal clients.
              </p>
              <button
                style={{ background: "var(--flux)", color: "white" }}
                className="inline-flex px-8 py-4 rounded-full font-semibold hover:opacity-90 transition"
              >
                Discuss Your Toronto Digital Strategy
              </button>
            </div>
            <div className="rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=800&fit=crop"
                alt="Toronto Downtown Skyline"
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
            Toronto is a hyper-competitive, fast-paced economic engine. For B2B firms, professional services, and agencies operating in the GTA (Greater Toronto Area), traditional web design is obsolete. Your website must be a dynamic asset that actively qualifies leads and drives sales. Flux Media Creations designs and deploys sophisticated digital ecosystems. We blend aesthetic brilliance with ruthless backend automation, ensuring your business captures maximum market share in Canada's largest digital economy.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Services Designed for Toronto Growth</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Strategic Web Architecture",
                description: "We utilize WordPress and Elementor to build scalable, high-performance websites. Our focus is on clear conversion pathways, mobile-optimized speed, and compelling UI that elevates your brand above Toronto competitors.",
              },
              {
                title: "CRM & Sales Automation",
                description: "Stop letting valuable leads go cold. We integrate GoHighLevel to create seamless sales pipelines. From automated inquiry responses to complex email nurture sequences, we digitize your sales floor.",
              },
              {
                title: "Custom Database Solutions",
                description: "We organize your digital chaos. By deploying Airtable and connecting it to your front-end systems, we create a single source of truth for your lead data, project management, and client onboarding.",
              },
              {
                title: "Next-Gen SEO & Generative Optimization",
                description: "We optimize your brand to win both traditional Google search real estate in the GTA and the \"zero-click\" answers provided by AI engines. We focus on deep semantic relevance and high E-E-A-T signals.",
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Choose Flux for Toronto</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Architecture Over Aesthetics",
                description: "We don't just make things look pretty. We engineer systems designed specifically to capture data, route leads, and generate revenue.",
              },
              {
                title: "Mastery of Modern Tools",
                description: "We bring elite expertise in the precise tools required for modern growth: WordPress, Elementor, GoHighLevel, and Airtable.",
              },
              {
                title: "Frictionless User Experience",
                description: "We design with the Toronto consumer in mind—demanding, time-poor, and expecting immediate, professional interaction.",
              },
              {
                title: "Transparent Analytics",
                description: "You will never guess if our systems are working. We provide clear, trackable metrics on lead flow, conversion rates, and pipeline value.",
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
            <h3 className="text-2xl font-bold mb-6">Why GTA Businesses Choose Flux</h3>
            <p className="text-ink/70 leading-relaxed mb-6">
              Whether you are a financial consultancy in the Financial District or a growing tech service firm in Markham, operational efficiency is the key to scaling in Toronto. The cost of acquiring a lead in the GTA is high; the cost of losing that lead to a slow follow-up is even higher. Our automation architectures ensure that your business is always the first to respond, instantly establishing authority and trust, and moving the prospect seamlessly into your booking calendar.
            </p>
            <p className="text-sm text-ink/50 font-medium">
              We understand the Toronto market. Rapid growth demands precision technology.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Process for Toronto Success</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              {
                step: "1",
                title: "GTA Discovery",
                description: "Analyzing your specific Toronto target market, identifying search intent, and outlining the automation required to win.",
              },
              {
                step: "2",
                title: "Web Design & Build",
                description: "Crafting the front-end using WordPress and Elementor for maximum speed and visual impact.",
              },
              {
                step: "3",
                title: "Pipeline Construction",
                description: "Configuring your GoHighLevel CRM, setting up automated SMS/email triggers, and integrating calendar booking.",
              },
              {
                step: "4",
                title: "Database Integration",
                description: "Wiring your front-end forms directly into structured Airtable bases for flawless team hand-offs.",
              },
              {
                step: "5",
                title: "Optimization & Launch",
                description: "Executing our GEO/SEO protocols and launching your new digital growth engine.",
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
            <h3 className="text-2xl font-bold mb-6">Toronto Case Study: Professional Services Firm</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-ink mb-3">Problem</h4>
                <p className="text-ink/60 leading-relaxed">
                  A Toronto-based professional services firm had high website traffic but an abysmal conversion rate, relying on a generic contact form that took days for the team to process.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-ink mb-3">Solution</h4>
                <p className="text-ink/60 leading-relaxed">
                  We rebuilt their digital presence, implementing targeted Elementor landing pages that fed directly into a GoHighLevel automated calendar booking system.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-ink mb-3">Outcome</h4>
                <p className="text-ink/60 leading-relaxed">
                  The firm saw a 60% reduction in lead-response time and a 40% increase in highly qualified consultations booked, vastly improving their sales pipeline efficiency.
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
              alt="Toronto Business District"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto md:grid-cols-2 space-y-6">
            {[
              {
                question: "How does AI search optimization help a Toronto business?",
                answer: "AI tools are changing how consumers search for services. We structure your site's content so that when a user asks an AI, \"What is the best automated B2B agency in Toronto?\", your brand is cited as the authoritative answer.",
              },
              {
                question: "Can you migrate our existing site to WordPress/Elementor?",
                answer: "Absolutely. We specialize in migrating outdated sites into high-performance, modern architectures without losing your existing SEO value.",
              },
              {
                question: "Is GoHighLevel suitable for Canadian businesses?",
                answer: "Yes, it is fully customizable to handle Canadian compliance, local SMS routing, and specific geographical targeting.",
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
            Stop competing with outdated tools in a modern market.
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Upgrade your digital infrastructure today.
          </p>
          <button
            style={{ background: "white", color: "var(--flux)" }}
            className="inline-flex px-8 py-4 rounded-full font-semibold hover:opacity-90 transition"
          >
            Secure Your Toronto Market Advantage
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
                name: "How does AI search optimization help a Toronto business?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "AI tools are changing how consumers search for services. We structure your site's content so that when a user asks an AI, \"What is the best automated B2B agency in Toronto?\", your brand is cited as the authoritative answer.",
                },
              },
              {
                "@type": "Question",
                name: "Can you migrate our existing site to WordPress/Elementor?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely. We specialize in migrating outdated sites into high-performance, modern architectures without losing your existing SEO value.",
                },
              },
              {
                "@type": "Question",
                name: "Is GoHighLevel suitable for Canadian businesses?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, it is fully customizable to handle Canadian compliance, local SMS routing, and specific geographical targeting.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
