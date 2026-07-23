"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, MoveRight } from "lucide-react";
import { SITE } from "@/lib/constants";

type NavItem = { name: string; href: string; note?: string };
type NavGroup = { label: string; href?: string; items: NavItem[] };

const solutions: NavItem[] = [
  { name: "Patient Revenue System", href: "/patient-revenue-system", note: "Healthcare discovery through long-term relationship" },
  { name: "Patient Revenue System for Clinics", href: "/clinics", note: "Recover patient enquiry and appointment leakage" },
  { name: "Revenue Intelligence", href: "/revenue-intelligence", note: "Connect marketing, sales, CRM, and revenue signals" },
  { name: "AI Discovery", href: "/ai-discovery", note: "Visibility across Google and AI recommendation systems" },
  { name: "Customer Progression", href: "/customer-progression", note: "Move every enquiry toward the right next action" },
  { name: "Implementation Services", href: "/services", note: "Website, CRM, SEO, and automation delivery" },
];

const groups: NavGroup[] = [
  { label: "Why Flux", items: [
    { name: "Operating Intelligence", href: "/operating-intelligence", note: "The connected foundation behind modern growth" },
    { name: "The Problem", href: "/the-problem", note: "Why disconnected tools quietly lose opportunity" },
    { name: "Our Philosophy", href: "/philosophy", note: "The principles behind intelligent businesses" },
  ] },
  { label: "Industries", href: "/industries", items: [
    { name: "Healthcare", href: "/industries/healthcare" },
    { name: "Home Services", href: "/industries/home-services" },
    { name: "Legal", href: "/industries/legal" },
    { name: "Wellness", href: "/industries/wellness" },
  ] },
  { label: "Assessment", items: [
    { name: "Business Intelligence Audit", href: "/business-intelligence-audit", note: "Measure discovery, journey, revenue, systems, and AI readiness" },
  ] },
  { label: "Insights", href: "/blog", items: [
    { name: "AI Search", href: "/blog?category=ai-search", note: "AI visibility, search, entities, and discovery" },
    { name: "Business Intelligence", href: "/blog?category=business-intelligence", note: "Connected systems, automation, and revenue operations" },
    { name: "Healthcare Growth", href: "/blog?category=healthcare-growth", note: "Patient journeys, clinic visibility, and conversion" },
  ] },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => { const y = window.scrollY; setScrolled(y > 40); setHidden(y > lastY.current && y > 120); lastY.current = y; };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { setMobileOpen(false); setOpenMenu(null); }, [pathname]);

  const active = (items: NavItem[]) => items.some(item => pathname === item.href.split("?")[0] || pathname.startsWith(`${item.href.split("?")[0]}/`));
  const close = () => setOpenMenu(null);

  return <>
    <motion.header animate={{ y: hidden && !mobileOpen ? -100 : 0 }} transition={{ duration: .4, ease: [0.16, 1, .3, 1] }} className="fixed inset-x-0 top-0 z-50 transition-colors" style={{ background: scrolled ? "rgba(243,244,241,.92)" : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", borderBottom: scrolled ? "1px solid rgba(13,13,13,.08)" : "none" }}>
      <div className="mx-auto flex h-16 max-w-[1500px] items-center justify-between px-5 md:h-20 md:px-9">
        <Link href="/" className="font-display text-2xl font-semibold tracking-[-.03em]">Flux<span className="text-flux">.</span></Link>
        <nav className="hidden items-center gap-5 lg:flex">
          <DesktopMenu label="Solutions" items={solutions} open={openMenu === "Solutions"} active={active(solutions)} wide onOpen={() => setOpenMenu("Solutions")} onClose={close} />
          {groups.map(group => <DesktopMenu key={group.label} {...group} open={openMenu === group.label} active={active(group.items)} onOpen={() => setOpenMenu(group.label)} onClose={close} />)}
          <Link href="/about" className={`nav-link text-sm font-medium ${pathname === "/about" ? "active" : ""}`}>Company</Link>
        </nav>
        <div className="flex items-center gap-4"><Link href="/business-intelligence-audit" className="hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white shadow-[0_8px_30px_rgba(6,7,10,.16)] transition-all hover:scale-105 xl:flex">Measure your score →</Link><button onClick={() => setMobileOpen(!mobileOpen)} className="flex flex-col gap-1.5 p-2 lg:hidden" aria-label="Toggle menu"><motion.span animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 8 : 0 }} className="h-0.5 w-6 bg-ink" /><motion.span animate={{ opacity: mobileOpen ? 0 : 1 }} className="h-0.5 w-6 bg-ink" /><motion.span animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -8 : 0 }} className="h-0.5 w-6 bg-ink" /></button></div>
      </div>
    </motion.header>
    <AnimatePresence>{mobileOpen ? <motion.div initial={{ opacity: 0, x: "100%" }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: "100%" }} transition={{ duration: .4, ease: [0.16, 1, .3, 1] }} className="fixed inset-0 z-40 overflow-y-auto bg-cream px-7 pb-10 pt-24 lg:hidden"><div className="border-t border-ink/15">{[{ label: "Solutions", href: "/solutions", items: solutions }, ...groups].map(group => <MobileMenu key={group.label} {...group} open={openMenu === group.label} toggle={() => setOpenMenu(openMenu === group.label ? null : group.label)} />)}<Link href="/about" className="block border-b border-ink/15 py-5 font-display text-3xl font-medium">Company</Link></div><Link href="/business-intelligence-audit" className="flux-button flux-button-red mt-8 w-full justify-center">Measure your score</Link><div className="mt-10 border-t border-ink/15 pt-6"><p className="text-xs uppercase tracking-widest text-ink/40">Say hello</p><a href={`mailto:${SITE.email}`} className="mt-2 block text-lg font-medium">{SITE.email}</a></div></motion.div> : null}</AnimatePresence>
  </>;
}

function DesktopMenu({ label, href, items, open, active, wide = false, onOpen, onClose }: NavGroup & { open: boolean; active: boolean; wide?: boolean; onOpen: () => void; onClose: () => void }) {
  return <div className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}><button type="button" onClick={open ? onClose : onOpen} className={`nav-link flex items-center gap-1 text-sm font-medium ${active ? "active" : ""}`} aria-expanded={open}>{label}<ChevronDown size={13} className={`transition-transform ${open ? "rotate-180" : ""}`} /></button><AnimatePresence>{open ? <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className={`absolute left-1/2 top-full mt-4 -translate-x-1/2 rounded-[1.5rem] border border-ink/10 bg-pulse-light p-4 shadow-[0_30px_90px_rgba(6,7,10,.16)] ${wide ? "w-[min(760px,calc(100vw-48px))]" : "w-[340px]"}`}><div className="mb-3 flex items-center justify-between border-b border-ink/10 px-2 pb-3"><p className="flux-kicker text-ink/35">{label}</p>{href ? <Link href={href} onClick={onClose} className="text-xs font-semibold text-flux">View all</Link> : null}</div><div className={wide ? "grid gap-2 md:grid-cols-2" : "space-y-1"}>{items.map(item => <Link key={item.name} href={item.href} onClick={onClose} className="group block rounded-xl bg-white/60 p-3 transition-colors hover:bg-white"><span className="flex items-center justify-between text-sm font-semibold">{item.name}<MoveRight size={15} className="opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" /></span>{item.note ? <span className="mt-1 block text-xs leading-5 text-ink/45">{item.note}</span> : null}</Link>)}</div></motion.div> : null}</AnimatePresence></div>;
}
function MobileMenu({ label, href, items, open, toggle }: NavGroup & { open: boolean; toggle: () => void }) {
  return <div className="border-b border-ink/15"><button onClick={toggle} className="flex w-full items-center justify-between py-5 text-left font-display text-3xl font-medium">{label}<ChevronDown className={`transition-transform ${open ? "rotate-180" : ""}`} /></button><AnimatePresence>{open ? <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden"><div className="space-y-2 pb-5">{href ? <Link href={href} className="block rounded-xl bg-ink p-4 font-semibold text-white">View all {label}</Link> : null}{items.map(item => <Link key={item.name} href={item.href} className="block rounded-xl bg-white p-4"><span className="font-semibold">{item.name}</span>{item.note ? <span className="mt-1 block text-xs leading-5 text-ink/45">{item.note}</span> : null}</Link>)}</div></motion.div> : null}</AnimatePresence></div>;
}
