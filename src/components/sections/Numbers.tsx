const stats = [
  {
    number: "14 days",
    label: "Average time for many WordPress + GoHighLevel builds",
    subtext: "Depending on content, integrations, and scope.",
  },
  {
    number: "90+",
    label: "PageSpeed target for fast, mobile-first sites",
    subtext: "Built to keep people engaged on mobile and desktop.",
  },
  {
    number: "100%",
    label: "Growth systems built with active post-launch automation",
    subtext: "So leads do not get lost in an inbox.",
  },
  {
    number: "4+",
    label: "Years experience",
    subtext: "Building WordPress websites, CRM workflows, and automation systems for service businesses.",
  },
];

export default function Numbers() {
  return (
    <section className="bg-blush/45 px-6 py-24 md:px-10">
      <div className="max-w-[1400px] mx-auto">
      <div className="mb-12">
        <p className="text-xs uppercase tracking-widest text-flux mb-4">By the numbers</p>
        <h2 className="font-display font-semibold text-4xl md:text-6xl max-w-3xl leading-none" style={{ letterSpacing: "0" }}>
          What happens when your website talks to your CRM.
        </h2>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
        {stats.map((item) => (
          <div key={item.label} className="rounded-xl border border-ink/8 bg-white p-6">
            <p className="font-display font-semibold text-4xl md:text-5xl mb-3" style={{ color: "var(--flux)", letterSpacing: "0" }}>
              {item.number}
            </p>
            <p className="font-medium text-sm md:text-base mb-2">{item.label}</p>
            <p className="text-sm text-ink/50 leading-7">{item.subtext}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
