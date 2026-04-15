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
      <section className="relative h-screen flex items-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1600&h=900&fit=crop" alt="Hoshiarpur City" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/60 to-transparent"></div>
        <div className="relative container mx-auto px-4 flex justify-end">
          <div className="max-w-2xl">
            <div className="inline-block mb-6 text-sm font-medium text-flux bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-2">Hoshiarpur, Punjab</div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-white">Local Trust, Global Reach: Web Development & Automation in Hoshiarpur</h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">We build modern, high-converting websites for local enterprises, hospitals, and educational institutions in the Doaba region. Connect with local customers and the NRI diaspora through professional design.</p>
            <button style={{ background: "var(--flux)", color: "white" }} className="inline-flex px-8 py-4 rounded-full font-semibold hover:opacity-90 transition text-lg">
              Get Your Free Hoshiarpur Digital Consultation
            </button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-lg text-ink/70 leading-relaxed">Hoshiarpur represents a unique market. Deeply rooted in tradition but with massive global reach through the NRI diaspora, businesses require specialized digital approach. For local hospitals, real estate developers, and service businesses, having a website reflecting international standards builds crucial trust.</p>
        </div>
      </section>

      <section className="section bg-ink/2 rounded-3xl">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Services for Hoshiarpur's Market</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Bespoke Local & International Web Design", description: "WordPress & Elementor sites establishing strong local trust signals while maintaining polished aesthetics for international clients and NRI investors." },
              { title: "Lead Capture & WhatsApp Automation", description: "GoHighLevel powered WhatsApp and SMS automation ensuring instant, professional greeting for every customer or NRI client inquiry." },
              { title: "Specialized NRI Service Portals", description: "Dedicated portals for diaspora services making it easy for international clients to book services, schedule consultations, or manage family inquiries." },
              { title: "Google Maps & Local Search Dominance", description: "Ensure your business ranks at top of Google Maps and local search results with profile optimization and local citation management." },
            ].map((service, idx) => (
              <div key={idx} className="rounded-2xl border border-ink/10 bg-white p-8 hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-ink/60 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Flux for Hoshiarpur</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Understanding the Doaba Dynamic", description: "We know Hoshiarpur marketing requires balance of deep local respect and modern professionalism." },
              { title: "Frictionless Communication Systems", description: "We build systems meeting clients where they're comfortable—WhatsApp automation managing backend complexity." },
              { title: "Scalable Web Architecture", description: "Using Elementor allows easy growth whether adding hospital wings or new real estate projects." },
              { title: "Bridging Time Zones", description: "Our GoHighLevel pipelines act as 24/7 receptionist ensuring immediate response to inquiries from Canada/UK at any hour." },
            ].map((item, idx) => (
              <div key={idx} className="rounded-2xl border border-ink/10 bg-white p-8">
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-ink/60 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gradient-to-br from-flux/5 to-transparent rounded-3xl">
        <div className="container mx-auto px-4 max-w-3xl">
          <h3 className="text-3xl font-bold mb-6">Hoshiarpur's Unique Digital Challenge</h3>
          <p className="text-ink/70 leading-relaxed mb-6">In Hoshiarpur, word-of-mouth and generational trust drive business. We translate that vital local trust into the digital ecosystem. Whether you operate an educational institute needing modern admission portal or healthcare facility streamlining patient intake, we provide sites vastly superior to local competitors.</p>
          <p className="text-ink/70 leading-relaxed">By ensuring every inquiry answered instantly via intelligent automation, we help you solidify reputation as the most reliable, modern choice in Doaba region.</p>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Hoshiarpur Success Process</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: "1", title: "Local & Diaspora Strategy", desc: "Analyze local + NRI search behaviors" },
              { step: "2", title: "Trust-Centric Design", desc: "WordPress + authority signals" },
              { step: "3", title: "WhatsApp Integration", desc: "GoHighLevel automation" },
              { step: "4", title: "Portal Development", desc: "International booking portals" },
              { step: "5", title: "Local SEO Launch", desc: "Google Business Profile optimization" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full border-3 border-flux bg-white flex items-center justify-center font-bold text-2xl text-flux mx-auto mb-4">{item.step}</div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-ink/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ink/2 rounded-3xl">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Results: Hospitality & Event Planning</h2>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-lg mb-3 text-flux">Problem</h4>
              <p className="text-ink/70">Overwhelmed with disorganized inquiries from phone calls, fragmented WhatsApp, emails—especially from NRIs in Canada booking venues for family events.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-3 text-flux">Solution</h4>
              <p className="text-ink/70">Built stunning, culturally resonant Elementor site with dedicated "NRI Booking & Virtual Tour Portal." Routed inquiries through GoHighLevel auto-replying via WhatsApp with pricing and calendar link.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-3 text-flux">Outcome</h4>
              <p className="text-ink/70"><strong>Eliminated messaging chaos</strong> | <strong>40% increase in high-ticket international bookings</strong> | <strong>Improved online reviews</strong> due to rapid, professional response.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">How Flux Compares</h2>
          <div className="overflow-x-auto rounded-2xl border border-ink/10">
            <table className="w-full">
              <thead className="bg-ink text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold">Feature</th>
                  <th className="px-6 py-4 text-center font-bold">Generic Agencies</th>
                  <th className="px-6 py-4 text-center font-bold">Freelancers</th>
                  <th className="px-6 py-4 text-center font-bold">Flux Media</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink/10">
                {[
                  { feature: "WhatsApp Automation", generic: "❌", freelance: "❌", flux: "✅" },
                  { feature: "Bilingual Support", generic: "⚠️", freelance: "❌", flux: "✅" },
                  { feature: "NRI Portal Building", generic: "❌", freelance: "❌", flux: "✅" },
                  { feature: "Local SEO", generic: "⚠️", freelance: "❌", flux: "✅" },
                  { feature: "Time-Zone Support", generic: "❌", freelance: "❌", flux: "✅" },
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-ink/2"}>
                    <td className="px-6 py-4 font-semibold text-ink">{row.feature}</td>
                    <td className="px-6 py-4 text-center text-ink/60">{row.generic}</td>
                    <td className="px-6 py-4 text-center text-ink/60">{row.freelance}</td>
                    <td className="px-6 py-4 text-center font-bold text-flux">{row.flux}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section bg-gradient-to-br from-ink to-ink/90 text-white rounded-3xl">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">What Hoshiarpur Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Harjeet Singh", title: "Event Planning Business, Hoshiarpur", quote: "The WhatsApp automation handles NRI clients perfectly. We're closing more international bookings with zero manual work." },
              { name: "Dr. Parminder Kaur", title: "Healthcare Facility", quote: "Admission portal transformed our patient intake. We've cut paperwork by 80%." },
              { name: "Jaswant Kumar", title: "Real Estate Developer, Doaba Region", quote: "Our site finally looks international while respecting local values. NRI inquiries tripled." },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8">
                <p className="text-lg mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-white/70">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { question: "Can you make the website bilingual (English and Punjabi)?", answer: "Yes, we architect WordPress sites supporting seamless multi-language capabilities ensuring content accessibility for all demographics." },
              { question: "How does WhatsApp automation work for my business?", answer: "When users fill forms on your site, GoHighLevel instantly triggers customized WhatsApp messages to their number starting conversations with your staff taking over when ready." },
              { question: "Do you help with Google My Business (Google Maps) ranking?", answer: "Absolutely. Local SEO and Map Pack dominance is core component of our Hoshiarpur strategy ensuring you capture local foot traffic." },
            ].map((faq, idx) => (
              <div key={idx} className="rounded-2xl border border-ink/10 bg-white p-8">
                <h3 className="font-bold text-lg mb-3">{faq.question}</h3>
                <p className="text-ink/60 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--flux)" }} className="section text-white text-center rounded-3xl">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Modernize your Hoshiarpur business and connect with clients globally.</h2>
          <p className="text-lg mb-8 text-white/90">Let's build a digital presence that honors your legacy and accelerates your growth.</p>
          <button style={{ background: "white", color: "var(--flux)" }} className="inline-flex px-8 py-4 rounded-full font-semibold hover:opacity-90 transition text-lg">
            Schedule Your Free Strategy Call
          </button>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "Can you make the website bilingual?", acceptedAnswer: { "@type": "Answer", text: "Yes, we architect WordPress sites supporting seamless multi-language capabilities for all demographics." } }, { "@type": "Question", name: "How does WhatsApp automation work?", acceptedAnswer: { "@type": "Answer", text: "When users fill forms, GoHighLevel triggers customized WhatsApp messages starting conversations your staff can join." } }, { "@type": "Question", name: "Do you help with Google Maps ranking?", acceptedAnswer: { "@type": "Answer", text: "Absolutely. Local SEO and Map Pack dominance is core to our Hoshiarpur strategy." } }] }) }} />
    </main>
  );
}
