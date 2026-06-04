"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const lastY = useRef(0);
  const isServicesPath = pathname.startsWith("/services");

  const serviceCategories = [
    {
      title: "Web Development",
      body: "Premium websites and full website plus CRM builds.",
      items: [
        { name: "WordPress Website Build", href: "/services/wordpress-website-build", note: "Custom Figma to WordPress sites" },
        { name: "Full Growth System", href: "/services/full-growth-system", note: "Website and CRM built together" },
        { name: "Healthcare Website & CRM", href: "/healthcare-website-crm", note: "Clinic-focused patient acquisition system" },
      ],
    },
    {
      title: "SEO & Visibility",
      body: "Organic discovery across Google, Maps, and AI search.",
      items: [
        { name: "Search Visibility Engine", href: "/services/search-visibility-engine", note: "SEO, Maps, and AI search visibility" },
        { name: "Local SEO New Jersey", href: "/local-seo-new-jersey", note: "Google Maps, GBP, reviews, and AI search for NJ" },
        { name: "Healthcare SEO Structure", href: "/healthcare-website-crm", note: "Clinic service pages and trust-led SEO" },
      ],
    },
    {
      title: "GoHighLevel & Automation",
      body: "CRM, follow-up, integrations, and operational systems.",
      items: [
        { name: "GoHighLevel Setup & Automation", href: "/services/gohighlevel-automation", note: "Pipelines, SMS, booking, reminders" },
        { name: "Clinic Appointment Booking Automation", href: "/services/clinic-appointment-booking-automation", note: "Clinic forms, reminders, missed-call recovery" },
        { name: "Airtable CRM & Business Hub", href: "/services/airtable-business-hub", note: "Dashboards and internal operations" },
        { name: "Make & Zapier Automation", href: "/services/make-zapier-automation", note: "Tool connections and lead routing" },
        { name: "WordPress & GHL Monthly Maintenance", href: "/services/monthly-maintenance", note: "Ongoing website and workflow support" },
      ],
    },
  ];

  const primaryNavLinks = NAV_LINKS.filter((link) => link.href !== "/services");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > lastY.current && y > 120);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        animate={{ y: hidden && !mobileOpen ? -100 : 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
        style={{
          background: scrolled ? "rgba(250,248,244,0.9)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(13,13,13,0.08)" : "none",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span
              className="font-display font-semibold text-xl tracking-tight"
              style={{ letterSpacing: "-0.03em" }}
            >
              Flux
              <span style={{ color: "var(--flux)" }}>.</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesOpen((open) => !open)}
                className={`nav-link flex items-center gap-1 text-sm font-medium tracking-wide ${
                  isServicesPath ? "active" : ""
                }`}
                aria-haspopup="menu"
                aria-expanded={servicesOpen}
              >
                Services
                <span className="text-xs">▾</span>
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-1/2 top-full mt-4 w-[min(920px,calc(100vw-48px))] -translate-x-1/2 rounded-2xl border border-ink/10 bg-cream shadow-[0_24px_60px_rgba(13,13,13,0.12)] p-5"
                    role="menu"
                  >
                    <div className="mb-5 flex items-end justify-between gap-6 border-b border-ink/10 pb-4">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-ink/30 mb-1">Services</p>
                        <p className="text-sm text-ink/55">Choose the build path that matches your growth problem.</p>
                      </div>
                      <Link
                        href="/services"
                        onClick={() => setServicesOpen(false)}
                        className="shrink-0 rounded-lg bg-ink px-4 py-2 text-sm font-medium text-cream transition-colors hover:bg-flux"
                        role="menuitem"
                      >
                        View all services
                      </Link>
                    </div>
                    <div className="grid gap-4 lg:grid-cols-3">
                      {serviceCategories.map((category) => (
                        <div key={category.title} className="rounded-lg border border-ink/8 bg-white p-4">
                          <h3 className="font-display text-xl font-semibold mb-2" style={{ letterSpacing: "-0.02em" }}>
                            {category.title}
                          </h3>
                          <p className="mb-4 min-h-10 text-xs leading-5 text-ink/45">{category.body}</p>
                          <div className="space-y-1">
                            {category.items.map((item) => (
                              <Link
                                key={item.href + item.name}
                                href={item.href}
                                className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-blush"
                                onClick={() => setServicesOpen(false)}
                                role="menuitem"
                              >
                                <span className="block text-sm font-medium text-ink">{item.name}</span>
                                <span className="mt-0.5 block text-xs leading-5 text-ink/45">{item.note}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {primaryNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link text-sm font-medium tracking-wide ${
                  pathname === link.href ? "active" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:gap-3"
              style={{
                background: "var(--flux)",
                color: "white",
                boxShadow: "0 4px 20px rgba(255,92,53,0.3)",
              }}
            >
              Start a project
              <span className="text-base">→</span>
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 8 : 0 }}
                className="block w-6 h-0.5 bg-ink origin-center transition-all"
              />
              <motion.span
                animate={{ opacity: mobileOpen ? 0 : 1 }}
                className="block w-6 h-0.5 bg-ink"
              />
              <motion.span
                animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -8 : 0 }}
                className="block w-6 h-0.5 bg-ink origin-center"
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-cream flex flex-col overflow-y-auto"
          >
            <div className="flex min-h-full flex-col px-8 pb-10 pt-28 gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 + 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  {link.href === "/services" ? (
                    <div>
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen((open) => !open)}
                        className={`font-display text-4xl font-semibold hover:text-flux transition-colors flex items-center gap-3 ${
                          isServicesPath ? "text-flux" : ""
                        }`}
                        style={{ letterSpacing: "-0.03em" }}
                        aria-expanded={mobileServicesOpen}
                      >
                        {link.label}
                        <span className="text-2xl">▾</span>
                      </button>

                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-5 grid gap-4">
                              <Link href="/services" className="text-base font-medium text-flux">
                                All Services
                              </Link>
                              {serviceCategories.map((category) => (
                                <div key={category.title} className="border-l border-ink/10 pl-4">
                                  <p className="mb-3 text-xs uppercase tracking-widest text-ink/35">{category.title}</p>
                                  <div className="flex flex-col gap-3">
                                    {category.items.map((item) => (
                                      <Link
                                        key={item.href + item.name}
                                        href={item.href}
                                        className="text-base font-medium text-ink/65 hover:text-flux transition-colors"
                                      >
                                        {item.name}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="font-display text-4xl font-semibold hover:text-flux transition-colors"
                      style={{ letterSpacing: "-0.03em" }}
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 pt-8 border-t border-ink/10"
              >
                <p className="text-sm text-ink-muted mb-2">Say hello</p>
                <a href={`mailto:${SITE.email}`} className="text-lg font-medium hover:text-flux transition-colors">
                  {SITE.email}
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
