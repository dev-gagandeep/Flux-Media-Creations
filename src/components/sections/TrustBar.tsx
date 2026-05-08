export default function TrustBar() {
  return (
    <section className="px-6 py-12 md:px-10 bg-blush/45">
      <div className="max-w-[1400px] mx-auto rounded-xl border border-ink/8 bg-white/80 px-6 py-6 md:px-8">
        <p className="text-xs uppercase tracking-widest text-ink/35 mb-3">Trusted by service businesses across</p>
        <p className="font-display text-xl md:text-2xl font-semibold leading-tight mb-3" style={{ letterSpacing: "0" }}>
          New Jersey · Atlanta · Los Angeles · United States · Canada · United Kingdom
        </p>
        <p className="text-sm md:text-base text-ink/55 leading-relaxed max-w-4xl">
          From pain management clinics in NJ to phone repair shops in Atlanta — we've built sites that turn visitors into booked appointments.
        </p>
      </div>
    </section>
  );
}
