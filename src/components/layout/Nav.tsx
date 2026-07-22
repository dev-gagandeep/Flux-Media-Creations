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
  const isServicesPath = pathname === "/solutions" || ["/patient-revenue-system", "/clinics", "/revenue-intelligence", "/customer-progression", "/ai-discovery"].includes(pathname);

  const serviceCategories = [
    {
      title: "Core systems",
      body: "Connected operating systems for demand and revenue.",
      items: [
        { name: "Patient Revenue System", href: "/patient-revenue-system", note: "Patient discovery through booked appointment" },
        { name: "Patient Revenue System for Clinics", href: "/clinics", note: "Recover enquiry and appointment leakage" },
        { name: "Revenue Intelligence", href: "/revenue-intelligence", note: "Connect demand, pipeline, and outcomes" },
      ],
    },
    {
      title: "Discovery & progression",
      body: "Help customers find, understand, and move forward.",
      items: [
        { name: "AI Discovery", href: "/ai-discovery", note: "Search, maps, and AI understanding" },
        { name: "Customer Progression", href: "/customer-progression", note: "Connected journeys and workflows" },
      ],
    },
    {
      title: "Implementation",
      body: "Supporting website, CRM, SEO, and automation capabilities.",
      items: [
        { name: "Implementation Services", href: "/services", note: "Website, CRM, SEO, and automation delivery" },
        { name: "Healthcare Website & CRM", href: "/healthcare-website-crm", note: "Existing clinic implementation system" },
      ],
    },
  ];

  const primaryNavLinks = NAV_LINKS.filter((link) => link.href !== "/solutions");

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
          background: scrolled ? "rgba(243,244,241,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(13,13,13,0.08)" : "none",
        }}
      >
        <div className="max-w-[1500px] mx-auto px-5 md:px-9 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span
              className="font-display font-semibold text-2xl tracking-tight"
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
                Solutions
                <span className="text-xs">▾</span>
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-1/2 top-full mt-4 w-[min(920px,calc(100vw-48px))] -translate-x-1/2 rounded-[2rem] border border-ink/10 bg-pulse-light shadow-[0_30px_90px_rgba(6,7,10,0.16)] p-5"
                    role="menu"
                  >
                    <div className="mb-5 flex items-end justify-between gap-6 border-b border-ink/10 pb-4">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-ink/30 mb-1">Operating Intelligence Solutions</p>
                        <p className="text-sm text-ink/55">Choose the connected system that matches the operating problem.</p>
                      </div>
                      <Link
                        href="/solutions"
                        onClick={() => setServicesOpen(false)}
                        className="shrink-0 rounded-lg bg-ink px-4 py-2 text-sm font-medium text-cream transition-colors hover:bg-flux"
                        role="menuitem"
                      >
                        View all solutions
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
                                className="block rounded-xl px-3 py-2.5 transition-colors hover:bg-white"
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
              href="/business-intelligence-audit"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:gap-3"
              style={{
                background: "var(--ink)",
                color: "white",
                boxShadow: "0 8px 30px rgba(6,7,10,0.16)",
              }}
            >
              Measure your score
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
                  {link.href === "/solutions" ? (
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
                              <Link href="/solutions" className="text-base font-medium text-flux">
                                All Solutions
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
