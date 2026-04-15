import { Metadata } from "next";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: "Premier Web Development & GoHighLevel Agency in Delhi NCR | Flux Media",
  description: "Dominate the competitive Delhi NCR market. We engineer high-authority WordPress websites, AI-driven SEO, and automated CRM pipelines for B2B enterprises and healthcare leaders.",
  path: "/digital-growth-automation-delhi-ncr",
});

export default function DelhiNCRPage() {
  return (
    <main className="bg-white">
      <section className="relative h-screen flex items-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1600&h=900&fit=crop" alt="Delhi NCR Skyline" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/60 to-transparent"></div>
        <div className="relative container mx-auto px-4 flex justify-end">
          <div className="max-w-2xl">
            <div className="inline-block mb-6 text-sm font-medium text-flux bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-2">Delhi NCR, India</div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-white">Engineering Digital Dominance for Delhi NCR's Business Elite</h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">In India's most competitive corporate landscape, average digital presence means invisible. From Cyber City to Noida Sector 62, we build high-performance digital ecosystems and automated GoHighLevel pipelines.</p>
            <button style={{ background: "var(--flux)", color: "white" }} className="inline-flex px-8 py-4 rounded-full font-semibold hover:opacity-90 transition text-lg">Schedule Your Delhi NCR Market Audit</button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-lg text-ink/70 leading-relaxed">The Delhi NCR operates at staggering scale. It's a hyper-competitive hub for multinational corporations, high-end B2B service providers, and world-class medical facilities. In this environment, a standard website is a critical missed opportunity. Flux Media Creations provides sophisticated technical infrastructure to cut through the noise.</p>
        </div>
      </section>

      <section className="section bg-ink/2 rounded-3xl">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Enterprise Solutions for Delhi NCR</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Enterprise-Grade Web Development", description: "WordPress & Elementor building digital fortresses that load in under two seconds with trust-building design for corporate buyers." },
              { title: "Complex Healthcare & B2B CRM", description: "Multi-step sales and intake journeys in GoHighLevel handling high volume from local residents to international patients." },
              { title: "AI-Driven SEO & Entity Optimization", description: "Entity-based optimization ensuring recognition as the authority across entire NCR geography for both Google and AI tools." },
              { title: "Centralized Data Operations", description: "Airtable integration managing lead flow across multiple NCR branch locations with real-time performance tracking." },
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
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Flux for Delhi NCR</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Mastery of High-Volume Architecture", description: "Systems built to handle sudden spikes in traffic and lead volume without breaking." },
              { title: "Prestige-Focused Design Language", description: "UI/UX meticulously crafted to exude corporate authority and premium service quality." },
              { title: "Data-Backed Strategy", description: "Decisions driven by granular NCR market research analyzing top competitors and lead funnel leaks." },
              { title: "End-to-End System Ownership", description: "We own the entire digital pipeline from first SEO click to final automated calendar booking." },
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
          <h3 className="text-3xl font-bold mb-6">Delhi NCR's Unique Market Demands</h3>
          <p className="text-ink/70 leading-relaxed mb-6">Delhi NCR is a premier destination for corporate contracts and specialized medical tourism. Businesses face managing incredibly diverse inquiries from local residents to international patients and investors. Our automated triage systems are engineered for this complexity.</p>
          <p className="text-ink/70 leading-relaxed">We build intelligent routing protocols that instantly qualify leads, direct them appropriately, and maintain professional, high-end image—responding faster than any competitor.</p>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Delhi NCR Enterprise Process</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: "1", title: "NCR Audit", desc: "Landscape analysis across Gurgaon, Noida, Delhi" },
              { step: "2", title: "Brand Architecture", desc: "Visual language + URL silo structure" },
              { step: "3", title: "Intelligent Routing", desc: "GoHighLevel pipelines + lead scoring" },
              { step: "4", title: "Database Integration", desc: "Airtable wiring + stress testing" },
              { step: "5", title: "Authority Scaling", desc: "GEO/SEO execution + dominance" },
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
          <h2 className="text-3xl font-bold mb-8 text-center">Results: Premium Multi-Location Clinic</h2>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-lg mb-3 text-flux">Problem</h4>
              <p className="text-ink/70">Multi-location clinic across South Delhi and Gurgaon struggling with high cost-per-lead and 45% no-show rate for booked consultations.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-3 text-flux">Solution</h4>
              <p className="text-ink/70">Rebuilt digital intake with high-authority WordPress site and specific location pages. Integrated custom GoHighLevel "Instant Booking" system with aggressive SMS/WhatsApp reminders.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-3 text-flux">Outcome</h4>
              <p className="text-ink/70"><strong>35% increase in qualified patient inquiries</strong> | <strong>No-show rate: 45% → 12% in 2 months</strong> | <strong>Daily revenue yield dramatically increased</strong>.</p>
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
                  { feature: "CRM Automation", generic: "❌", freelance: "❌", flux: "✅" },
                  { feature: "Multi-Location Support", generic: "❌", freelance: "❌", flux: "✅" },
                  { feature: "Enterprise Compliance", generic: "⚠️", freelance: "❌", flux: "✅" },
                  { feature: "High-Volume Handling", generic: "⚠️", freelance: "❌", flux: "✅" },
                  { feature: "Real-Time Analytics", generic: "❌", freelance: "❌", flux: "✅" },
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
          <h2 className="text-4xl font-bold text-center mb-16">What Delhi NCR Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Vikram Singh", title: "Financial Services, Connaught Place", quote: "Lead qualification pipeline cut our sales cycles by 40%. We're closing enterprise deals 3x faster." },
              { name: "Dr. Amrita Verma", title: "Northeast Multi-Specialty Clinic", quote: "No-show rates plummeted. The appointment reminders are automatic and professional." },
              { name: "Rahul Gupta", title: "B2B Consulting, Cyber City", quote: "We went from overwhelming manual work to a completely automated sales system. It's like adding a department." },
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
              { question: "Do you serve the entire NCR including Noida and Faridabad?", answer: "Yes, we architect digital systems for enterprises and clinics across entire NCR with multi-location-specific routing." },
              { question: "How do you filter spam leads from the Delhi market?", answer: "Our GoHighLevel systems include advanced bot-protection and custom qualification forms ensuring sales teams speak only to high-intent prospects." },
              { question: "Can you integrate with our existing hospital CRM?", answer: "Yes. We connect seamlessly via webhooks, API connections, and Airtable syncing to push qualified leads into legacy systems." },
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
          <h2 className="text-4xl font-bold mb-6">In Delhi NCR, the business that responds fastest, wins.</h2>
          <p className="text-lg mb-8 text-white/90">Upgrade your digital infrastructure to an automated powerhouse today.</p>
          <button style={{ background: "white", color: "var(--flux)" }} className="inline-flex px-8 py-4 rounded-full font-semibold hover:opacity-90 transition text-lg">
            Secure Your Delhi NCR Market Advantage
          </button>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "Do you serve the entire NCR including Noida and Faridabad?", acceptedAnswer: { "@type": "Answer", text: "Yes, we architect digital systems for enterprises and clinics across entire NCR with multi-location-specific routing." } }, { "@type": "Question", name: "How do you filter spam leads from the Delhi market?", acceptedAnswer: { "@type": "Answer", text: "Our GoHighLevel systems include advanced bot-protection and custom qualification forms ensuring sales teams speak only to high-intent prospects." } }, { "@type": "Question", name: "Can you integrate with our existing hospital CRM?", acceptedAnswer: { "@type": "Answer", text: "Yes. We connect seamlessly via webhooks, API connections, and Airtable syncing to push qualified leads into legacy systems." } }] }) }} />
    </main>
  );
}
