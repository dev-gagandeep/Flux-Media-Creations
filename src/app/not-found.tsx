import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section pt-32 max-w-[1400px] mx-auto min-h-[70vh] flex flex-col justify-center">
      <p className="font-display font-semibold text-[8rem] leading-none text-ink/5 select-none mb-0" style={{ letterSpacing: "-0.05em" }}>
        404
      </p>
      <h1 className="font-display font-semibold text-3xl md:text-5xl -mt-6 mb-5" style={{ letterSpacing: "-0.03em" }}>
        This page doesn't exist.
      </h1>
      <p className="text-base text-ink/50 max-w-sm mb-8 leading-relaxed">
        It may have moved or been removed. Head back to the homepage or contact us if you think something's broken.
      </p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium transition-all duration-300 hover:gap-3"
          style={{ background: "var(--flux)", color: "white" }}
        >
          Back to home →
        </Link>
        <Link
          href="/contact"
          className="flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium border border-ink/15 hover:border-ink/40 transition-all duration-300"
        >
          Contact us
        </Link>
      </div>
    </section>
  );
}
