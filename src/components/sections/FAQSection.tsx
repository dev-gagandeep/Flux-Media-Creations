const faqs = [
  {
    q: "What is GoHighLevel used for?",
    a: "GoHighLevel is used for lead management, follow-up automation, sending SMS and emails, booking calendars, sales pipeline tracking, requesting reviews, and keeping all customer communication in one place. This is especially useful for service businesses because it organizes follow-up from website inquiries, missed calls, and form submissions.",
  },
  {
    q: "How can clinics automate follow-ups?",
    a: "Clinics can connect website forms, phone calls, and appointment requests to a CRM such as GoHighLevel. From there, instant SMS responses, email confirmations, booking links, internal staff alerts, patient reminders, and reactivation messages can help the clinic respond faster without manually chasing every inquiry.",
  },
  {
    q: "What is a GoHighLevel agency?",
    a: "A GoHighLevel agency installs, customizes, and runs GoHighLevel for businesses. A good agency does more than install software. It builds CRM structure, lead pipelines, automation workflows, booking calendars, missed-call text-back flows, reporting, and integrations that reflect how your business actually sells or books appointments.",
  },
  {
    q: "Who builds GoHighLevel websites for clinics?",
    a: "Flux Media Creations builds GoHighLevel websites for clinics by combining WordPress website design and GoHighLevel CRM automation. This gives clinics a professional patient-facing website and a backend system to capture leads, recover missed calls, automate appointment booking, and follow up faster.",
  },
  {
    q: "What is included in your GoHighLevel setup service?",
    a: "We can assist with CRM setup, lead pipelines, calendars, forms, SMS and email workflows, missed call text back setup, appointment booking automation, review request workflows, notifications, and website integration.",
  },
  {
    q: "Do I need WordPress and GoHighLevel together?",
    a: "You do not always need both, but they work best together when your business depends on online leads. WordPress gives you control over design, SEO, service pages, and content. GoHighLevel handles CRM, automation, scheduling, and follow-up once a visitor becomes a lead.",
  },
  {
    q: "Is this for small business?",
    a: "Yes. GHL CRM automation systems for small businesses are especially useful for companies that do not have a big sales or admin team. Automation allows small teams to respond faster, stay organized, and consistently follow up without doing more manual work.",
  },
  {
    q: "Can you create a lead generation website for a service business?",
    a: "Yes. We create lead generation website systems for service businesses through WordPress, SEO optimized page structure, clear calls to action, contact forms, booking flows, and GoHighLevel automation. The idea is to help visitors understand your offer and act quickly.",
  },
];

export default function FAQSection() {
  return (
    <section className="bg-white px-6 py-24 md:px-10">
      <div className="max-w-[1400px] mx-auto">
      <div className="mb-12">
        <p className="text-xs uppercase tracking-widest text-flux mb-4">FAQ / AEO</p>
        <h2 className="font-display font-semibold text-4xl md:text-6xl max-w-3xl leading-none" style={{ letterSpacing: "0" }}>
          FAQs before we build.
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        {faqs.map((faq) => (
          <div key={faq.q} className="rounded-xl border border-ink/8 bg-blush/35 p-6">
            <p className="font-medium text-base mb-3">{faq.q}</p>
            <p className="text-sm text-ink/55 leading-7">{faq.a}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
