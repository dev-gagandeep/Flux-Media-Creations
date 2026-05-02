import Link from "next/link";
import { LOCATION_PAGES, SITE, NAV_LINKS, SERVICES, TOOLS } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream" itemScope itemType="https://schema.org/WPFooter">
      {/* Big CTA row */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 border-b border-cream/10">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div className="max-w-xl">
            <p className="text-sm text-cream/50 mb-3 tracking-widest uppercase">Ready to grow?</p>
            <h2
              className="font-display text-4xl md:text-6xl font-semibold leading-none"
              style={{ letterSpacing: "-0.03em" }}
            >
              Let's build something{" "}
              <span style={{ color: "var(--flux)" }}>remarkable</span>.
            </h2>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 flex items-center gap-3 px-8 py-4 rounded-full font-medium text-ink transition-all duration-300 hover:scale-105 hover:gap-5"
            style={{ background: "var(--flux)", color: "white" }}
          >
            Start a project
            <span className="text-xl">→</span>
          </Link>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <span className="font-display text-2xl font-semibold" style={{ letterSpacing: "-0.03em" }}>
            Flux<span style={{ color: "var(--flux)" }}>.</span>
          </span>
          <p className="mt-4 text-sm text-cream/50 leading-relaxed max-w-[220px]">
            Websites and automation systems for businesses that can't afford to lose a single lead.
          </p>
          <div className="mt-6 flex gap-4">
            <a href={`mailto:${SITE.email}`} className="text-xs text-cream/40 hover:text-flux transition-colors">
              Email
            </a>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-cream/40 hover:text-flux transition-colors"
            >
              WhatsApp
            </a>
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-cream/40 hover:text-flux transition-colors"
            >
              Instagram
            </a>
            <a
              href={SITE.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-cream/40 hover:text-flux transition-colors"
            >
              Portfolio
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-xs text-cream/30 uppercase tracking-widest mb-5">Navigate</p>
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-cream/60 hover:text-cream transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <p className="text-xs text-cream/30 uppercase tracking-widest mb-5">Services</p>
          <ul className="flex flex-col gap-3">
            {SERVICES.map((service) => (
              <li key={service.slug}>
                <Link href={service.href} className="text-sm text-cream/60 hover:text-cream transition-colors">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs text-cream/30 uppercase tracking-widest mb-5">Contact</p>
          <ul className="flex flex-col gap-4">
            <li>
              <p className="text-xs text-cream/30 mb-1">Email</p>
              <a href={`mailto:${SITE.email}`} className="text-sm text-cream/70 hover:text-flux transition-colors break-all">
                {SITE.email}
              </a>
            </li>
            <li>
              <p className="text-xs text-cream/30 mb-1">WhatsApp</p>
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-cream/70 hover:text-flux transition-colors"
              >
                {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <p className="text-xs text-cream/30 mb-1">Serving</p>
              <p className="text-sm text-cream/70">US clients — worldwide</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Locations links */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-8 border-t border-cream/10">
        <p className="text-xs text-cream/30 uppercase tracking-widest mb-4">Locations we target</p>
        <div className="flex flex-wrap gap-x-5 gap-y-3">
          <Link href="/locations" className="text-sm text-cream/60 hover:text-cream transition-colors">
            All locations
          </Link>
          <Link href="/web-development-ai-automation-new-york" className="text-sm text-cream/60 hover:text-cream transition-colors">
            New York, NY
          </Link>
          <Link href="/web-development-automation-new-jersey" className="text-sm text-cream/60 hover:text-cream transition-colors">
            New Jersey, USA
          </Link>
          {LOCATION_PAGES.map((location) => (
            <Link key={location.slug} href={`/locations/${location.slug}`} className="text-sm text-cream/60 hover:text-cream transition-colors">
              {location.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Tools marquee */}
      <div className="border-t border-cream/10 py-5 overflow-hidden">
        <div className="flex marquee-track whitespace-nowrap select-none">
          {[...TOOLS, ...TOOLS].map((tool, i) => (
            <span key={i} className="inline-flex items-center gap-6 text-xs text-cream/25 uppercase tracking-widest mr-8">
              {tool}
              <span style={{ color: "var(--flux)" }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 border-t border-cream/10">
        <p className="text-xs text-cream/25">
          © {year} {SITE.name}. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link href="/privacy" className="text-xs text-cream/25 hover:text-cream/50 transition-colors">
            Privacy policy
          </Link>
          <Link href="/terms" className="text-xs text-cream/25 hover:text-cream/50 transition-colors">
            Terms of service
          </Link>
        </div>
      </div>
    </footer>
  );
}
