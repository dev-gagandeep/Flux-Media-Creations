const blocks = [
  {
    icon: "⏱",
    title: "One team. No handoffs.",
    body: "Gagan Deep builds every WordPress website and configures every GoHighLevel system we deliver. You speak to the same person from first enquiry to your launch day walkthrough. There is no account manager passing notes between you and a developer in another time zone.",
  },
  {
    icon: "⚡",
    title: "Built to convert, not just look good.",
    body: "A website that gets compliments but does not generate leads is an expense, not an investment. Every page we build has a clear purpose, a specific action, and a path that moves the visitor toward contacting you.",
  },
  {
    icon: "🛡",
    title: "Real results in healthcare and home services.",
    body: "We have built sites for pain management clinics in New Jersey, local service businesses that rank on Google Maps, and GoHighLevel systems that recover missed calls automatically. We know what works in these industries because we have delivered it.",
  },
];

export default function WhyFlux() {
  return (
    <section className="bg-ink px-6 py-24 text-cream md:px-10 md:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-xs uppercase tracking-widest text-cream/30 mb-5">Why businesses choose us</p>
          <h2 className="font-display font-semibold text-4xl md:text-6xl leading-none" style={{ letterSpacing: "0" }}>
            Engineered for <span className="text-flux">Autonomy.</span>
          </h2>
          <p className="mt-6 max-w-xl text-sm md:text-base leading-7 text-cream/50">
            You do not need another agency that disappears after launch. Flux builds the site, connects the CRM, configures the automations, and leaves you with a system your team can actually operate.
          </p>
        </div>

        <div className="grid gap-4">
          {blocks.map((block, index) => (
            <div key={block.title} className="rounded-xl border border-cream/10 bg-cream/[0.04] p-6">
              <div className="flex gap-4">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-flux text-sm font-semibold text-white">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="font-display font-semibold text-2xl leading-tight" style={{ letterSpacing: "0" }}>
                    {block.title}
                  </h3>
                  <p className="mt-2 text-sm text-cream/50 leading-7">{block.body}</p>
                </div>
              </div>
            </div>
          ))}

          <div className="rounded-xl border border-cream/10 bg-[#141414] p-5">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-flux" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
              <span className="ml-2 text-xs text-cream/30">lead-system.ts</span>
            </div>
            <pre className="overflow-x-auto rounded-lg bg-black/35 p-4 text-xs leading-7 text-cream/65">
              <code>{`capture(visitor)
route.to("GoHighLevel")
notify.team("WhatsApp")
followUp.inSeconds(30)
report.sourceToBookedCall()`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
