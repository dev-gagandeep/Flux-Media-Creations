const faqs = [
  {
    q: "Do you only work with US businesses?",
    a: "Our primary focus is US healthcare clinics, home service businesses, and real estate professionals — but we work with clients in Canada and the UK too. All communication is in English via email, WhatsApp, or video call. Time zone is never an issue; we structure every project around clear milestones and async communication.",
  },
  {
    q: "How long does a WordPress website project take?",
    a: "A WordPress-only site takes 7–10 business days. A full WordPress + GoHighLevel growth system takes 14–21 days. We set clear milestones at the start of every project so you always know exactly where things stand.",
  },
  {
    q: "Do I need my own GoHighLevel account?",
    a: "Yes. The GoHighLevel Starter plan is $97/month and you'll own your account directly. We set up everything — pipelines, automations, A2P SMS registration, review workflows — and hand it over fully configured. We can also recommend a reseller option that can reduce your monthly cost.",
  },
  {
    q: "What do I need to provide to get started?",
    a: "Domain access, any existing brand assets (logo, colors), a brief about your services and target clients, and access to any tools you're already using. We handle the rest — including copywriting direction, design, development, and automation setup.",
  },
  {
    q: "Can you redesign my existing WordPress website?",
    a: "Absolutely. We audit your current site, identify what's hurting your conversions and rankings, and rebuild it properly. We migrate all existing content, preserve your SEO history where possible, and improve on everything that wasn't working.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes. All project work is 50% upfront and 50% on launch. Monthly maintenance retainers are billed monthly with no long-term contract required.",
  },
  {
    q: "What makes Flux Media Creations different from other WordPress agencies?",
    a: "Two things. First — we specialize exclusively in conversion-focused sites for US healthcare and service businesses, so we understand your industry's specific needs. Second — every project includes GoHighLevel CRM setup, so your site doesn't just look good, it actively captures and follows up with every lead automatically.",
  },
];

export default function FAQSection() {
  return (
    <section className="section max-w-[1400px] mx-auto">
      <div className="mb-12">
        <p className="text-sm uppercase tracking-widest text-ink/30 mb-4">Common questions</p>
        <h2 className="font-display font-semibold text-3xl md:text-5xl max-w-3xl leading-tight" style={{ letterSpacing: "-0.03em" }}>
          Everything you need to know before we start.
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        {faqs.map((faq) => (
          <div key={faq.q} className="rounded-3xl border border-ink/8 bg-white p-6">
            <p className="font-medium text-base mb-3">{faq.q}</p>
            <p className="text-sm text-ink/55 leading-7">{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}