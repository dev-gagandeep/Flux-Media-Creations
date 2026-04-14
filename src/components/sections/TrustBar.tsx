export default function TrustBar() {
  return (
    <section className="section pt-0 max-w-[1400px] mx-auto">
      <div className="rounded-3xl border border-ink/8 bg-white px-6 py-7 md:px-8 md:py-8">
        <p className="text-xs uppercase tracking-widest text-ink/35 mb-4">Trusted by service businesses across</p>
        <p className="font-display text-xl md:text-2xl font-semibold leading-tight mb-3" style={{ letterSpacing: "-0.02em" }}>
          New Jersey · Atlanta · Los Angeles · United States · Canada · United Kingdom
        </p>
        <p className="text-sm md:text-base text-ink/55 leading-relaxed max-w-4xl">
          From pain management clinics in NJ to phone repair shops in Atlanta — we've built sites that turn visitors into booked appointments.
        </p>
      </div>
    </section>
  );
}