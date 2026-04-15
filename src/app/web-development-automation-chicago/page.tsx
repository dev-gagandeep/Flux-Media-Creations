import { Metadata } from "next";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: "High-Converting Web Design & GoHighLevel Agency in Chicago | Flux Media",
  description: "Scale your Chicago B2B or healthcare firm with Flux Media Creations. We deliver elite WordPress development, GEO-driven SEO, and automated GoHighLevel CRM pipelines across Chicagoland.",
  path: "/web-development-automation-chicago",
});

export default function ChicagoPage() {
  return (
    <main className="bg-white">
      <section className="relative h-screen flex items-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1600&h=900&fit=crop" alt="Chicago Downtown Skyline" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/60 to-transparent"></div>
        <div className="relative container mx-auto px-4 flex justify-end">
          <div className="max-w-2xl">
            <div className="inline-block mb-6 text-sm font-medium text-flux bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-2">Chicago, Illinois</div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-white">Driving Revenue for Chicago's Leading Businesses Through Automated Digital Infrastructure</h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">In the highly competitive Midwest market, your website must be an active revenue generator. We engineer blazing-fast WordPress sites and deploy sophisticated GoHighLevel CRM systems.</p>
            <button style={{ background: "var(--flux)", color: "white" }} className="inline-flex px-8 py-4 rounded-full font-semibold hover:opacity-90 transition text-lg">
              Claim Your Chicago Growth Blueprint
            </button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-lg text-ink/70 leading-relaxed">Chicago is the economic powerhouse of the Midwest. From massive healthcare networks and legal firms in The Loop to sprawling B2B industrial sectors in suburbs like Naperville, the digital environment is unforgiving. Flux Media Creations specializes in high-end digital engineering building advanced architectures intrinsically linked to powerful CRM automations.</p>
        </div>
      </section>

      <section className="section bg-ink/2 rounded-3xl">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Enterprise Services for Chicago</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Performance-Driven Web Development", description: "Chicago-tough digital assets. WordPress & Elementor creating highly secure, incredibly fast websites optimized for US market standards." },
              { title: "GoHighLevel CRM & Complex Sales Pipelines", description: "Automated brains for long sales cycles or clinics requiring detailed intake with multi-stage lead qualification." },
              { title: "Airtable Operational Data Syncing", description: "Bring order to data chaos. Seamlessly connect front-end lead generation to customized Airtable databases for real-time views." },
              { title: "Strategic SEO & AI Search Visibility", description: "Aggressive entity-based optimization ensuring recognition as definitive authority on Google Maps, organic search, and AI overviews." },
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
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Flux for Chicago</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Expertise in High-Ticket Conversion", description: "Understand Chicago corporate and medical buyer psychology. UI/UX architected to build rapid trust and facilitate deals." },
              { title: "Platform Mastery", description: "Deploy absolute best-in-class platforms weaving them into single, cohesive, highly reliable digital ecosystem." },
              { title: "Frictionless Compliance & Security", description: "Healthcare and financial clients benefit from architectures built with security, privacy, and industry compliance top of mind." },
              { title: "Relentless Focus on ROI", description: "Success measured purely by metrics impacting your bottom line: reduced CPA, increased show rates, administrative hours saved." },
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
          <h3 className="text-3xl font-bold mb-6">Chicago's Competitive Market Reality</h3>
          <p className="text-ink/70 leading-relaxed mb-6">Chicago is a city of high standards and fierce competition. Buyers do research and expect operational excellence. Businesses cannot afford leaky sales funnels or slow response times. Whether operating a specialized spine care clinic or logistics firm near O'Hare, our systems adapt to your reality.</p>
          <p className="text-ink/70 leading-relaxed">By deploying our automated architectures, every potential client in Chicagoland receives immediate, highly professional response—establishing your authority before competitors open their inbox.</p>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Chicago Enterprise Process</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: "1", title: "Market & Competitor Audit", desc: "Chicagoland search landscape analysis" },
              { step: "2", title: "Silo Architecture & UI Design", desc: "URL structure + conversion-first design" },
              { step: "3", title: "GoHighLevel Engineering", desc: "CRM pipelines + automation logic" },
              { step: "4", title: "Database Integration & QA", desc: "Airtable wiring + stress testing" },
              { step: "5", title: "Deployment & Authority Scaling", desc: "GEO/SEO execution for dominance" },
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
          <h2 className="text-3xl font-bold mb-8 text-center">Results: B2B Financial Consultancy</h2>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-lg mb-3 text-flux">Problem</h4>
              <p className="text-ink/70">Decent web traffic but abysmal conversion rate. Generic contact form producing unqualified leads with sales team wasting 20 hours/week on tire-kickers.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-3 text-flux">Solution</h4>
              <p className="text-ink/70">Redesigned site with distinct service silos. Replaced generic forms with GoHighLevel automated qualification flow. Prospects answer 3 questions then routed to calendar or educational email sequence.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-3 text-flux">Outcome</h4>
              <p className="text-ink/70"><strong>Qualified appointments up 55%</strong> | <strong>Sales team reclaimed 20 hours/week</strong> | <strong>Digital revenue increased 30% in 4 months</strong>.</p>
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
                  { feature: "Lead Qualification", generic: "❌", freelance: "❌", flux: "✅" },
                  { feature: "Data Integration", generic: "⚠️", freelance: "❌", flux: "✅" },
                  { feature: "Compliance & Security", generic: "⚠️", freelance: "❌", flux: "✅" },
                  { feature: "ROI Tracking", generic: "❌", freelance: "❌", flux: "✅" },
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
          <h2 className="text-4xl font-bold text-center mb-16">What Chicago Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Michael O'Donnell", title: "Financial Services, River North", quote: "Qualified leads up 55%. Sales team finally closing high-net-worth deals instead of handling noise." },
              { name: "Dr. Priya Patel", title: "Specialized Medical Clinic, North Shore", quote: "Patient intake completely streamlined. Our show rate improved dramatically with automated reminders." },
              { name: "James Anderson", title: "B2B Logistics, near O'Hare", quote: "Lead response automation handles our complexity. We went from reactive to proactive overnight." },
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
              { question: "Do you have experience with specialized clinics or medical branding?", answer: "Yes, we have extensive experience architecting authoritative digital identities and patient acquisition systems for healthcare and specialized clinics." },
              { question: "Why is GoHighLevel superior to separate email, calendar, and CRM?", answer: "GoHighLevel eliminates software bloat and integration errors. Single platform = faster automation, more reliability, lower monthly expenses." },
              { question: "How does Generative Engine Optimization help Chicago businesses?", answer: "As search evolves, executives and patients increasingly use AI to research services. GEO ensures your website data structures AI models understand your expertise." },
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
          <h2 className="text-4xl font-bold mb-6">Stop competing with outdated tools in a modern market.</h2>
          <p className="text-lg mb-8 text-white/90">Elevate your Chicago business with digital infrastructure that actively generates revenue.</p>
          <button style={{ background: "white", color: "var(--flux)" }} className="inline-flex px-8 py-4 rounded-full font-semibold hover:opacity-90 transition text-lg">
            Book Your Chicago Systems Audit Today
          </button>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "Do you have experience with specialized clinics?", acceptedAnswer: { "@type": "Answer", text: "Yes, we have extensive experience architecting digital identities and patient acquisition for healthcare clinics." } }, { "@type": "Question", name: "Why is GoHighLevel superior?", acceptedAnswer: { "@type": "Answer", text: "Single platform eliminates software bloat, integration errors, slower automation, and reduces monthly expenses." } }, { "@type": "Question", name: "How does GEO help Chicago businesses?", acceptedAnswer: { "@type": "Answer", text: "GEO ensures AI models understand your expertise and recommend you to people researching services." } }] }) }} />
    </main>
  );
}
