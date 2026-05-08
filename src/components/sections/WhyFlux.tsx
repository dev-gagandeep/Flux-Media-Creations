const blocks = [
  {
    title: "Combine all questions",
    body: "You can integrate your GoHighLevel pipeline with website forms, calls, chat requests, and booking actions so every inquiry lands in one organized system.",
  },
  {
    title: "Reply before the competition",
    body: "Trigger automated SMS and email follow-up in seconds, so your business responds while the lead is still interested.",
  },
  {
    title: "Catch up on missed calls",
    body: "Missed call text back setup sends an instant message when your team is unavailable, giving the prospect an easy way to book or continue the conversation.",
  },
  {
    title: "Schedule more appointments",
    body: "Automated appointment booking lets prospects pick a time, receive reminders, and helps reduce no-shows.",
  },
  {
    title: "Follow every step",
    body: "Your team can see where each lead came from, what they asked for, and what stage they are at inside the pipeline.",
  },
];

export default function WhyFlux() {
  return (
    <section className="bg-ink px-6 py-24 text-cream md:px-10 md:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-xs uppercase tracking-widest text-cream/30 mb-5">Automation division</p>
          <h2 className="font-display font-semibold text-4xl md:text-6xl leading-none" style={{ letterSpacing: "0" }}>
            Designed for automation. Created to <span className="text-flux">regain lost leads.</span>
          </h2>
          <p className="mt-6 max-w-xl text-sm md:text-base leading-7 text-cream/50">
            Most businesses don&apos;t lose leads because their offer is weak. They lose leads because of slow response time, inconsistent follow-up, and a CRM that is not connected to the website.
          </p>
          <p className="mt-4 max-w-xl text-sm md:text-base leading-7 text-cream/50">
            That&apos;s what our GoHighLevel systems are designed to fix. We link lead sources such as forms, calls, chats, calendars, and landing pages to the workflows that help your team move quickly.
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
