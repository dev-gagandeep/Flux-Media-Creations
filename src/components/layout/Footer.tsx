import Link from "next/link";
import { LOCATION_PAGES, SITE, NAV_LINKS, SOCIAL_LINKS, TOOLS } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();
  const marqueeTools = TOOLS.flatMap((tool) => [
    { id: `first-${tool}`, label: tool },
    { id: `second-${tool}`, label: tool },
  ]);

  return (
    <footer className="bg-ink text-cream" itemScope itemType="https://schema.org/WPFooter">
      {/* Big CTA row */}
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 py-24 md:py-36 border-b border-cream/10">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div className="max-w-xl">
            <p className="text-sm text-cream/50 mb-3 tracking-widest uppercase">Ready to see the whole system?</p>
            <h2
              className="font-display text-5xl md:text-7xl font-medium leading-[.9]"
              style={{ letterSpacing: "-0.03em" }}
            >
              Build the system your{" "}
              <span style={{ color: "var(--flux)" }}>growth depends on</span>.
            </h2>
          </div>
          <Link
            href="/business-intelligence-audit"
            className="flex-shrink-0 flex items-center gap-3 px-8 py-4 rounded-full font-medium text-ink transition-[color,background-color,border-color,box-shadow,opacity,transform] duration-300 hover:scale-105 hover:gap-5"
            style={{ background: "var(--flux)", color: "white" }}
          >
            Measure your score
            <span className="text-xl">→</span>
          </Link>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 py-20 grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <span className="font-display text-2xl font-semibold" style={{ letterSpacing: "-0.03em" }}>
            Flux<span style={{ color: "var(--flux)" }}>.</span>
          </span>
          <p className="mt-4 text-sm text-cream/50 leading-relaxed max-w-[220px]">
            Connected operating intelligence systems for service businesses.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
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
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-cream/40 hover:text-flux transition-colors"
              >
                {link.label}
              </a>
            ))}
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

        {/* Solutions */}
        <div>
          <p className="text-xs text-cream/30 uppercase tracking-widest mb-5">Solutions</p>
          <ul className="flex flex-col gap-3">
            {[
              ["Patient Revenue System", "/patient-revenue-system"],
              ["Patient Revenue System for Clinics", "/clinics"],
              ["Revenue Intelligence", "/revenue-intelligence"],
              ["Customer Progression", "/customer-progression"],
              ["AI Discovery", "/ai-discovery"],
              ["Implementation Services", "/services"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="text-sm text-cream/60 hover:text-cream transition-colors">{label}</Link>
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
          {marqueeTools.map((tool) => (
            <span key={tool.id} className="inline-flex items-center gap-6 text-xs text-cream/25 uppercase tracking-widest mr-8">
              {tool.label}
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
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
          <a
            href="https://www.designrush.com/agency/website-design-development/in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-cream/25 hover:text-cream/50 transition-colors"
          >
            As seen on DesignRush
          </a>
          <Link href="/the-problem" className="text-xs text-cream/25 hover:text-cream/50 transition-colors">
            The problem
          </Link>
          <Link href="/sitemap.xml" className="text-xs text-cream/25 hover:text-cream/50 transition-colors">
            Sitemap
          </Link>
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
