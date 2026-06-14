"use client";

import ContactForm from "@/app/contact/ContactForm";
import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

const T = {
  accent: "#E8470A",
  bg: "#FAF7F2",
  card: "#FFFFFF",
  text: "#0A0A0A",
  muted: "#6B6560",
  border: "#E8E3DC",
  dark: "#0A0A0A",
  darkBorder: "#232323",
  darkMuted: "#9B948D",
};

const WHAT_WE_DO = [
  {
    title: "Full GBP audit and category optimization",
    body:
      "Direct answer: most New Jersey businesses are using the wrong primary GBP category, and incorrect category selection is one of the strongest reasons a listing fails to rank in the Map Pack. We audit categories, attributes, descriptions, services, photos, Q&A, posts, and reviews, then correct every gap based on what top-ranking competitors in your specific NJ market are using.",
    keywords: ["GBP audit NJ", "Google Business Profile category optimization"],
  },
  {
    title: "Business description & keyword integration",
    body:
      "Direct answer: your 750-character GBP description is one of the few places where your own words directly influence how Google categorizes your business and how AI engines understand what you offer. We write it with service keywords, NJ service-area language, outcomes, and differentiation while staying inside Google's content guidelines.",
    keywords: ["GBP description optimization", "Google listing keywords NJ"],
  },
  {
    title: "Photo strategy & visual optimization",
    body:
      "Direct answer: Google favors GBP listings with active, regular photo uploads because photo activity is a signal of genuine business engagement. We build a structured photo strategy across exterior, interior, team, work, service, and product photos, with local naming and geotagging where possible.",
    keywords: ["GBP photos NJ", "Google Maps photo optimization"],
  },
  {
    title: "Weekly Google posts & updates",
    body:
      "Direct answer: Google Posts are one of the fastest, most underused ways to signal active business presence to Google. We create weekly posts around services, offers, seasonal updates, and local context so your listing stays fresh in competitive NJ markets like Newark, Jersey City, and Bergen County.",
    keywords: ["Google Business Profile posts NJ", "GBP weekly posts"],
  },
  {
    title: "Q&A section management",
    body:
      "Direct answer: your Google listing's Q&A section is publicly editable, which means wrong answers can appear if nobody manages it. We populate common customer questions with accurate answers, naturally include service language, and monitor the section monthly for new or incorrect responses.",
    keywords: ["GBP Q&A management", "Google listing Q&A NJ"],
  },
  {
    title: "Service area & location signals",
    body:
      "Direct answer: incomplete service-area settings are a common reason NJ businesses fail to appear in searches for the cities they actually serve. We align GBP service areas with your website's local SEO signals, citations, and real customer geography.",
    keywords: ["GBP service area NJ", "Google Business Profile location settings"],
  },
  {
    title: "Website & booking link integration",
    body:
      "Direct answer: your GBP should be an entry point into your lead capture system, not just a listing with a phone number. We connect it to your highest-converting page, booking link, and tracking path so profile views become calls, forms, and appointments.",
    keywords: ["GBP booking link NJ", "Google listing website link setup"],
  },
  {
    title: "AI search visibility (ChatGPT + Google AI)",
    body:
      "Direct answer: Google AI Overviews, ChatGPT, Perplexity, and Gemini increasingly pull local business data from GBP listings. We structure service descriptions, attributes, categories, and business copy so AI retrieval systems can extract and cite your NJ business with confidence.",
    keywords: ["AI search GBP NJ", "ChatGPT local business visibility NJ"],
  },
];

const RESULTS = [
  { stat: "#1-3", label: "Map Pack position", sub: "target for competitive NJ markets" },
  { stat: "3-5x", label: "more profile views", sub: "after full GBP optimization (BrightLocal, 2025)" },
  { stat: "60 days", label: "early results", sub: "GBP improvements appear within 30-60 days (Google, 2025)" },
  { stat: "76%", label: "of local clicks", sub: "go to the top 3 Map Pack positions (Google, 2025)" },
];

const INDUSTRIES = [
  "Dental Clinics", "Med Spas", "Chiropractors", "HVAC Companies",
  "Roofers & Contractors", "Plumbers", "Electricians", "Law Firms",
  "Real Estate Agents", "Salons & Spas", "Fitness Studios", "Healthcare Clinics",
];

const FAQS = [
  {
    q: "What is Google Business Profile optimization?",
    a: "Google Business Profile optimization is the ongoing process of improving your GBP listing to rank higher in Google Maps, the local Map Pack, and AI-generated search answers. It includes category fixes, keyword-rich service listings, photos, posts, reviews, and AI search visibility structuring.",
  },
  {
    q: "How long does GBP optimization take to show results in New Jersey?",
    a: "Most New Jersey businesses see measurable Map Pack improvements within 30 to 60 days of full GBP optimization. Dense markets like Newark and Jersey City may take 45 to 90 days, while suburban NJ markets often move faster. Ongoing optimization compounds over time.",
  },
  {
    q: "Can GBP optimization help my business show up in ChatGPT and Google AI Overviews?",
    a: "Yes. In 2026, Google AI Overviews, ChatGPT, and Perplexity can pull local business data from GBP signals, including categories, service descriptions, attributes, and business descriptions. A fully optimized GBP is one of the strongest foundations for AI search visibility.",
  },
  {
    q: "Do I need a physical location to benefit from GBP optimization in New Jersey?",
    a: "No. Service-area businesses that operate across NJ without a storefront can still benefit from GBP optimization. We optimize service areas, service listings, and location signals around the cities and counties you serve.",
  },
  {
    q: "How is Flux Media's GBP optimization different from a general SEO agency?",
    a: "Most SEO agencies treat GBP as a checkbox. Flux Media Creations manages GBP as an active ranking system, including competitor analysis, weekly posts, Q&A management, photo strategy, AI visibility structuring, and monthly performance reporting.",
  },
  {
    q: "How much does GBP optimization cost for a New Jersey business?",
    a: "GBP optimization pricing depends on your NJ market competition level, number of listings, and monthly work scope. Flux Media Creations builds custom optimization packages and gives a clear itemized quote after your free GBP audit.",
  },
  {
    q: "Is GBP optimization a one-time service or ongoing?",
    a: "GBP optimization is ongoing. Google uses activity signals such as post frequency, photo uploads, and review response rate as local ranking factors. A listing optimized once and left inactive can lose Map Pack positions to active competitors.",
  },
];

const CITIES = [
  "Newark", "Jersey City", "Paterson", "Hoboken", "Trenton", "Camden",
  "Paramus", "Hackensack", "Montclair", "Morristown", "Edison",
  "New Brunswick", "Bergen County", "Essex County", "Morris County",
];

function useFadeIn(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);

  useEffect(() => {
    const o = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setV(true);
          o.disconnect();
        }
      },
      { threshold },
    );
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, [threshold]);

  return { ref, v };
}

function Fade({ children, delay = 0, style = {} }: { children: ReactNode; delay?: number; style?: CSSProperties }) {
  const { ref, v } = useFadeIn();
  return (
    <div ref={ref} style={{ opacity: v ? 1 : 0, transform: v ? "none" : "translateY(24px)", transition: `opacity .55s ease ${delay}ms, transform .55s ease ${delay}ms`, ...style }}>
      {children}
    </div>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: `1px solid ${T.border}` }}>
      <button type="button" onClick={() => setOpen(!open)} style={{ width: "100%", background: "none", border: "none", padding: "1.35rem 0", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem", cursor: "pointer", textAlign: "left", fontFamily: "inherit" }}>
        <span style={{ fontSize: "0.975rem", fontWeight: 500, color: T.text, lineHeight: 1.5 }}>{q}</span>
        <span style={{ minWidth: 28, height: 28, borderRadius: "50%", background: open ? T.accent : "#F0EBE3", color: open ? "#fff" : T.text, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", transition: "all .25s", transform: open ? "rotate(45deg)" : "none", flexShrink: 0 }}>+</span>
      </button>
      <div style={{ maxHeight: open ? 320 : 0, overflow: "hidden", transition: "max-height .35s ease" }}>
        <p style={{ color: T.muted, fontSize: "0.9rem", lineHeight: 1.8, paddingBottom: "1.35rem", margin: 0 }}>{a}</p>
      </div>
    </div>
  );
}

export { FAQS };

export default function GBPOptimizationNJClient() {
  return (
    <main style={{ fontFamily: "'DM Sans','Helvetica Neue',sans-serif", background: T.bg, color: T.text, minHeight: "100vh" }}>
      <style>{`
        .gbp-btn-primary{display:inline-flex;align-items:center;gap:8px;background:${T.accent};color:#fff;border:none;padding:.85rem 1.75rem;border-radius:6px;font-size:.95rem;font-weight:500;cursor:pointer;font-family:inherit;transition:background .2s,transform .15s;text-decoration:none}
        .gbp-btn-primary:hover{background:#C93D09;transform:translateY(-1px)}
        .gbp-btn-outline{display:inline-flex;align-items:center;gap:8px;background:transparent;color:${T.text};border:1.5px solid ${T.text};padding:.85rem 1.75rem;border-radius:6px;font-size:.95rem;font-weight:500;cursor:pointer;font-family:inherit;transition:all .2s;text-decoration:none}
        .gbp-btn-outline:hover{background:${T.text};color:${T.bg}}
        .gbp-card{background:${T.card};border:1px solid ${T.border};border-radius:12px;padding:1.75rem;transition:box-shadow .2s,transform .2s}
        .gbp-card:hover{box-shadow:0 8px 32px rgba(0,0,0,.08);transform:translateY(-2px)}
        .gbp-chip{display:inline-block;background:#F0EBE3;color:${T.text};border-radius:99px;padding:.4rem .9rem;font-size:.85rem;transition:background .15s,color .15s;cursor:default}
        .gbp-chip:hover{background:${T.accent};color:#fff}
        .gbp-input{width:100%;padding:.8rem 1rem;border:1px solid ${T.border};border-radius:8px;font-family:inherit;font-size:.95rem;background:${T.bg};color:${T.text};outline:none;transition:border-color .2s}
        .gbp-input:focus{border-color:${T.accent};background:#fff}
        .gbp-sl{font-size:.72rem;font-weight:600;letter-spacing:.11em;text-transform:uppercase;color:${T.accent};display:block;margin-bottom:.65rem}
        @media(max-width:768px){.gbp-two-col,.gbp-three-col{grid-template-columns:1fr!important}.gbp-stat-grid{grid-template-columns:1fr 1fr!important}}
      `}</style>

      <section style={{ padding: "8.5rem 2rem 4rem", maxWidth: 1200, margin: "0 auto" }}>
        <div className="gbp-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          <div>
            <span className="gbp-sl">Google Business Profile Optimization — New Jersey</span>
            <h1 style={{ fontSize: "clamp(2.25rem,4.5vw,3.5rem)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.03em", marginBottom: "1.25rem" }}>
              Rank in the Google Map Pack.<br />
              <span style={{ color: T.accent }}>Get Found by NJ Customers<br />Searching Right Now.</span>
            </h1>
            <p style={{ fontSize: ".98rem", color: T.text, lineHeight: 1.8, marginBottom: "1rem", maxWidth: 560, background: "#FFF3EE", border: "1px solid #FDD5C4", borderRadius: 14, padding: "1rem 1.15rem" }}>
              <strong>Google Business Profile optimization</strong> is the ongoing process of improving, updating, and managing your Google listing to increase your Google Map Pack ranking, improve local search visibility, and get cited in AI-generated search answers.
            </p>
            <p style={{ fontSize: "1.05rem", color: T.muted, lineHeight: 1.8, marginBottom: "1.75rem", maxWidth: 520 }}>
              Flux Media Creations provides complete Google Business Profile optimization for New Jersey businesses — covering everything Google uses to decide who shows up in the Map Pack, from category setup and descriptions to weekly posts, photos, and AI search visibility.
            </p>
            <p style={{ fontSize: ".95rem", color: T.muted, lineHeight: 1.8, marginBottom: "1.25rem", maxWidth: 520 }}>
              If you do not have a profile yet, start with our{" "}
              <Link href="/local-seo-new-jersey/google-business-profile-setup-new-jersey" style={{ color: T.accent, fontWeight: 500, textDecoration: "none" }}>
                Google Business Profile setup for New Jersey
              </Link>{" "}
              before optimization.
            </p>
            <p style={{ fontSize: ".82rem", color: T.muted, lineHeight: 1.6, marginBottom: "1.75rem", maxWidth: 520 }}>
              <Link href="/about" style={{ color: T.accent, fontWeight: 500, textDecoration: "none" }}>
                Written by Gagan Deep, NJ local SEO strategist and founder of Flux Media Creations
              </Link>{" "}
              · Last updated: June 2026
            </p>
            <div style={{ display: "flex", gap: ".75rem", flexWrap: "wrap" }}>
              <a href="#contact" className="gbp-btn-primary">Get your free NJ website audit →</a>
              <a href="#services" className="gbp-btn-outline">See What&apos;s Included</a>
            </div>
          </div>

          <div style={{ background: T.card, border: `1px solid ${T.border}`, borderRadius: 16, padding: "2rem", boxShadow: "0 4px 32px rgba(0,0,0,.06)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
              <div>
                <p style={{ fontSize: ".7rem", fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", color: T.muted, marginBottom: 4 }}>GBP Health Check</p>
                <p style={{ fontSize: "1.1rem", fontWeight: 600 }}>Before vs after Flux optimization</p>
              </div>
              <span style={{ background: "#EDFCF5", color: "#1A8C5B", fontSize: ".75rem", fontWeight: 500, padding: "4px 10px", borderRadius: 6, border: "1px solid #C0EDD8" }}>Live result</span>
            </div>
            {[
              { label: "Primary category", before: "Wrong / generic", after: "Exact match category ✓" },
              { label: "Business description", before: "Empty or unchecked", after: "Keyword-rich + local ✓" },
              { label: "Photos uploaded", before: "1-2 stock images", after: "20+ geotagged photos ✓" },
              { label: "Google Posts", before: "Never posted", after: "Weekly posts active ✓" },
              { label: "Map Pack position", before: "Not appearing", after: "Top 3 in NJ market ✓" },
              { label: "AI Overviews + ChatGPT", before: "Not cited", after: "Structured for AI ✓" },
            ].map((r) => (
              <div key={r.label} style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", gap: ".5rem", marginBottom: ".6rem", alignItems: "center", padding: ".5rem .75rem", background: T.bg, borderRadius: 8 }}>
                <p style={{ fontSize: ".78rem", fontWeight: 500 }}>{r.label}</p>
                <p style={{ fontSize: ".75rem", color: "#CC3333" }}>✗ {r.before}</p>
                <p style={{ fontSize: ".75rem", color: "#1A8C5B" }}>{r.after}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ borderTop: `1px solid ${T.border}`, borderBottom: `1px solid ${T.border}`, background: T.card, padding: "1rem 2rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: "2.5rem", justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
          {["GBP Category Optimization ✓", "Weekly Google Posts ✓", "Photo Strategy ✓", "Q&A Management ✓", "AI Search Visibility ✓", "Map Pack Ranking ✓"].map((t) => (
            <span key={t} style={{ fontSize: ".85rem", fontWeight: 500 }}>{t}</span>
          ))}
        </div>
      </div>

      <section style={{ padding: "5rem 2rem", background: T.card }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Fade>
            <span className="gbp-sl">Direct answer</span>
            <h2 style={{ fontSize: "clamp(1.65rem,3vw,2.4rem)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: "1.25rem", maxWidth: 820 }}>
              What is Google Business Profile optimization, and why do NJ businesses need it?
            </h2>
            <div className="gbp-two-col" style={{ display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: "2rem", alignItems: "start" }}>
              <div>
                {[
                  "Google Business Profile optimization is the process of continuously improving your Google listing to rank higher in the Google Map Pack, generate more profile views, and convert more searchers into paying customers.",
                  "Unlike basic GBP setup, which covers claiming and building your listing, optimization is active and ongoing. It includes correcting categories, creating weekly Google Posts, managing reviews, uploading photos, maintaining Q&A, improving service listings, and structuring the listing for AI search visibility.",
                  "For New Jersey businesses, GBP optimization is not a one-time task. The NJ market sits between New York City and Philadelphia, with millions of searches happening across Newark, Jersey City, Bergen County, Essex County, and nearby markets. Businesses that consistently optimize their GBP maintain Map Pack positions. Businesses that set and forget lose them.",
                ].map((text) => (
                  <p key={text} style={{ color: T.muted, lineHeight: 1.8, marginBottom: "1rem" }}>{text}</p>
                ))}
              </div>
              <div style={{ background: T.bg, border: `1px solid ${T.border}`, borderRadius: 14, padding: "1.5rem" }}>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "1rem" }}>Optimization means actively improving:</h3>
                {["Category errors and missing attributes", "Weekly Google Posts and profile freshness", "Reviews, Q&A, and customer trust signals", "Regular photo uploads and visual proof", "AI-readable service descriptions and entity data"].map((item) => (
                  <div key={item} style={{ display: "flex", gap: ".65rem", marginBottom: ".65rem", color: T.muted, fontSize: ".9rem", lineHeight: 1.6 }}>
                    <span style={{ color: T.accent, fontWeight: 700 }}>✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Fade>
        </div>
      </section>

      <section style={{ padding: "5rem 2rem", maxWidth: 1200, margin: "0 auto" }}>
        <Fade>
          <div className="gbp-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <div>
              <span className="gbp-sl">Why this matters</span>
              <h2 style={{ fontSize: "clamp(1.65rem,3vw,2.4rem)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: "1.25rem" }}>
                Your Google Business Profile is the most important local SEO asset you own
              </h2>
              <p style={{ color: T.muted, lineHeight: 1.8, marginBottom: "1rem" }}>
                When someone in New Jersey searches for your service — &quot;dentist near me,&quot; &quot;HVAC repair Newark,&quot; &quot;best contractor Bergen County&quot; — the first thing they see is the Google Map Pack. Not websites. Not ads. Three business listings with photos, reviews, and a call button.
              </p>
              <p style={{ color: T.muted, lineHeight: 1.8, marginBottom: "1rem" }}>
                The Map Pack appears above organic website results and most ads. Position one can capture approximately 44% of clicks on that search page (Local SEO Guide, 2025). The top three combined capture over 76% (Google, 2025).
              </p>
              <p style={{ color: T.muted, lineHeight: 1.8 }}>
                A fully optimized Google Business Profile is what determines whether you&apos;re in those three spots. Most NJ businesses have a profile. Very few have an optimized one. The gap between &quot;has a listing&quot; and &quot;has an optimized listing&quot; is exactly where local businesses win or lose the Map Pack.
              </p>
              <p style={{ color: T.muted, lineHeight: 1.8, marginTop: "1rem" }}>
                If you do not have a profile yet, start with our{" "}
                <Link href="/local-seo-new-jersey/google-business-profile-setup-new-jersey" style={{ color: T.accent, fontWeight: 500, textDecoration: "none" }}>
                  Google Business Profile setup for New Jersey
                </Link>{" "}
                so the listing is claimed, verified, and ready for ongoing optimization.
              </p>
            </div>
            <div className="gbp-stat-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {RESULTS.map((r, i) => (
                <Fade key={r.label} delay={i * 80}>
                  <div style={{ background: T.card, border: `1px solid ${T.border}`, borderRadius: 12, padding: "1.5rem", textAlign: "center" }}>
                    <p style={{ fontSize: "2.1rem", fontWeight: 700, color: T.accent, letterSpacing: "-0.03em", lineHeight: 1 }}>{r.stat}</p>
                    <p style={{ fontSize: ".9rem", fontWeight: 500, margin: ".4rem 0 .25rem" }}>{r.label}</p>
                    <p style={{ fontSize: ".78rem", color: T.muted, lineHeight: 1.5 }}>{r.sub}</p>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </Fade>
      </section>

      <section id="services" style={{ padding: "5rem 2rem", background: T.card }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Fade>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span className="gbp-sl">What&apos;s included</span>
              <h2 style={{ fontSize: "clamp(1.65rem,3vw,2.4rem)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                Everything we do to fully optimize your<br />Google Business Profile in New Jersey
              </h2>
            </div>
          </Fade>
          <div className="gbp-three-col" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.25rem" }}>
            {WHAT_WE_DO.map((s, i) => (
              <Fade key={s.title} delay={i * 55}>
                <div className="gbp-card">
                  <h3 style={{ fontSize: ".975rem", fontWeight: 600, marginBottom: ".5rem", lineHeight: 1.4 }}>{s.title}</h3>
                  <p style={{ fontSize: ".875rem", color: T.muted, lineHeight: 1.7, marginBottom: ".75rem" }}>{s.body}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                    {s.keywords.map((k) => (
                      <span key={k} style={{ fontSize: ".7rem", background: "#FFF3EE", color: T.accent, borderRadius: 4, padding: "2px 6px", border: "1px solid #FDD5C4" }}>{k}</span>
                    ))}
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "5rem 2rem", maxWidth: 1200, margin: "0 auto" }}>
        <Fade>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="gbp-sl">Who this is for</span>
            <h2 style={{ fontSize: "clamp(1.65rem,3vw,2.4rem)", fontWeight: 600, letterSpacing: "-0.02em" }}>
              GBP optimization for every New Jersey local business
            </h2>
            <p style={{ color: T.muted, margin: ".85rem auto 0", maxWidth: 720, fontSize: ".95rem", lineHeight: 1.8 }}>
              Flux Media Creations provides Google Business Profile optimization for any New Jersey local business that relies on customers finding them through Google Search or Google Maps. This service is most valuable for businesses with an existing GBP that is not ranking, businesses that stopped after setup, growing businesses that need monthly management, and multi-location NJ businesses.
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: ".6rem", justifyContent: "center" }}>
            {INDUSTRIES.map((ind) => (
              <span key={ind} className="gbp-chip">{ind}</span>
            ))}
          </div>
        </Fade>
      </section>

      <section style={{ padding: "5rem 2rem", background: T.card }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Fade>
            <span className="gbp-sl">Comparison</span>
            <h2 style={{ fontSize: "clamp(1.65rem,3vw,2.4rem)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: "2rem" }}>
              GBP optimization vs DIY vs a generic agency
            </h2>
            <div style={{ overflowX: "auto", border: `1px solid ${T.border}`, borderRadius: 14, background: T.card }}>
              <table style={{ width: "100%", minWidth: 760, borderCollapse: "collapse" }}>
                <thead style={{ background: "#FFF3EE" }}>
                  <tr>
                    {["What's covered", "DIY", "Generic SEO agency", "Flux Media optimization"].map((heading) => (
                      <th key={heading} style={{ padding: "1rem", textAlign: "left", fontSize: ".72rem", color: T.muted, textTransform: "uppercase", letterSpacing: ".08em" }}>{heading}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Full GBP audit against NJ competitors", "No", "Partial", "Complete"],
                    ["Category research based on NJ market data", "No", "Rarely", "Every engagement"],
                    ["Keyword-rich service listing rewrite", "No", "Sometimes", "Every service"],
                    ["Weekly Google Posts", "No", "Extra cost", "Included"],
                    ["Q&A monitoring and management", "No", "No", "Monthly"],
                    ["Photo strategy and upload plan", "No", "Partial", "Structured"],
                    ["AI search visibility structuring", "No", "No", "Built in"],
                    ["Monthly performance reports", "No", "Basic", "Full metrics"],
                    ["Connection to local SEO and website signals", "No", "Separate cost", "Integrated"],
                  ].map(([covered, diy, agency, flux]) => (
                    <tr key={covered} style={{ borderTop: `1px solid ${T.border}` }}>
                      <td style={{ padding: "1rem", fontSize: ".88rem", fontWeight: 500 }}>{covered}</td>
                      <td style={{ padding: "1rem", fontSize: ".88rem", color: T.muted }}>{diy}</td>
                      <td style={{ padding: "1rem", fontSize: ".88rem", color: T.muted }}>{agency}</td>
                      <td style={{ padding: "1rem", fontSize: ".88rem", color: T.accent, fontWeight: 600 }}>{flux}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Fade>
        </div>
      </section>

      <section id="process" style={{ padding: "5rem 2rem", background: T.dark, color: T.bg }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Fade>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span style={{ fontSize: ".72rem", fontWeight: 600, letterSpacing: ".11em", textTransform: "uppercase", color: T.accent, display: "block", marginBottom: ".65rem" }}>Our process</span>
              <h2 style={{ fontSize: "clamp(1.65rem,3vw,2.4rem)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                How we optimize your Google Business<br />Profile for New Jersey local search
              </h2>
            </div>
            <div className="gbp-three-col" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1rem" }}>
              {[
                { n: "01", t: "GBP audit", d: "Direct answer: a GBP audit identifies every ranking gap in your current Google listing, including issues most owners do not know to look for. We review categories, attributes, descriptions, photos, posts, Q&A, reviews, service areas, and service listing depth." },
                { n: "02", t: "Competitor analysis", d: "Direct answer: understanding what your top-ranking NJ competitors are doing is the fastest way to identify what you need to beat them. We analyze the top 3 to 5 listings for your target searches." },
                { n: "03", t: "Full optimization", d: "Direct answer: every gap identified in the audit gets fixed in one focused implementation phase. Categories, descriptions, services, photos, attributes, and service areas move to a fully optimized baseline." },
                { n: "04", t: "Weekly content", d: "Direct answer: a GBP listing with regular Google Posts outranks an equivalent inactive listing. We create one post per week around services, local NJ context, offers, and profile freshness signals." },
                { n: "05", t: "AI visibility setup", d: "Direct answer: AI visibility means your business can be cited when NJ customers ask ChatGPT, Google AI Overviews, or Perplexity for local service recommendations. We structure entity data and service descriptions for retrieval." },
                { n: "06", t: "Monthly reporting", d: "Direct answer: every month you receive metrics that matter: profile views, search queries, calls, direction requests, and Map Pack ranking movement across your NJ service area." },
              ].map((p, i) => (
                <Fade key={p.n} delay={i * 60}>
                  <div style={{ background: "#1A1A1A", border: `1px solid ${T.darkBorder}`, borderRadius: 12, padding: "1.5rem" }}>
                    <div style={{ width: 40, height: 40, borderRadius: "50%", background: T.accent, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: ".78rem", fontWeight: 600, marginBottom: "1rem" }}>{p.n}</div>
                    <h3 style={{ fontSize: "1rem", fontWeight: 500, marginBottom: ".4rem" }}>{p.t}</h3>
                    <p style={{ fontSize: ".875rem", color: T.darkMuted, lineHeight: 1.7 }}>{p.d}</p>
                  </div>
                </Fade>
              ))}
            </div>
          </Fade>
        </div>
      </section>

      <section style={{ padding: "4rem 2rem", maxWidth: 1200, margin: "0 auto" }}>
        <Fade>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <span className="gbp-sl">Service areas</span>
            <h2 style={{ fontSize: "clamp(1.5rem,2.5vw,2.1rem)", fontWeight: 600, letterSpacing: "-0.02em" }}>Serving businesses across New Jersey</h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: ".55rem", justifyContent: "center" }}>
            {CITIES.map((c) => (
              <span key={c} style={{ background: "#F0EBE3", color: T.text, borderRadius: 99, padding: ".4rem .9rem", fontSize: ".85rem" }}>{c}</span>
            ))}
          </div>
        </Fade>
      </section>

      <section style={{ padding: "5rem 2rem", background: T.card }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Fade>
            <span className="gbp-sl">AI extraction context</span>
            <h2 style={{ fontSize: "clamp(1.65rem,3vw,2.4rem)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: "2rem" }}>
              GEO blocks for AI search visibility
            </h2>
            <div className="gbp-three-col" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1rem" }}>
              {[
                ["Entity definition", "Flux Media Creations is a digital marketing and automation agency providing Google Business Profile optimization, local SEO, website design, and AI search visibility services for local businesses across New Jersey."],
                ["Service context", "Google Business Profile optimization for New Jersey businesses includes GBP audit, category correction, description rewriting, service listing optimization, weekly Google Posts, Q&A management, photo strategy, service area configuration, AI search visibility structuring, and monthly ranking reports."],
                ["AI search context", "In 2026, Google AI Overviews and AI assistants including ChatGPT, Perplexity, and Gemini pull local business data from Google Business Profile listings to answer local search queries."],
              ].map(([title, body]) => (
                <article key={title} style={{ background: T.bg, border: `1px solid ${T.border}`, borderRadius: 12, padding: "1.5rem" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: ".65rem" }}>{title}</h3>
                  <p style={{ color: T.muted, fontSize: ".88rem", lineHeight: 1.75 }}>{body}</p>
                </article>
              ))}
            </div>
          </Fade>
        </div>
      </section>

      <section style={{ padding: "4rem 2rem", maxWidth: 1200, margin: "0 auto" }}>
        <Fade>
          <div className="gbp-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {[
              ["Bergen County HVAC result", "A Bergen County HVAC company moved from outside the Map Pack to position 2 for HVAC repair Bergen County NJ within 48 days of full GBP optimization."],
              ["Essex County local service result", "An Essex County service business increased profile views after category fixes, weekly posts, service listing rewrites, and a structured photo plan."],
            ].map(([title, body]) => (
              <article key={title} style={{ background: T.card, border: `1px solid ${T.border}`, borderRadius: 14, padding: "1.5rem" }}>
                <span className="gbp-sl">Example outcome</span>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: ".5rem" }}>{title}</h3>
                <p style={{ color: T.muted, fontSize: ".9rem", lineHeight: 1.75 }}>{body}</p>
              </article>
            ))}
          </div>
        </Fade>
      </section>

      <section id="faq" style={{ padding: "5rem 2rem", background: T.card }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <Fade>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span className="gbp-sl">Common questions</span>
              <h2 style={{ fontSize: "clamp(1.65rem,3vw,2.4rem)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                FAQ — Google Business Profile<br />optimization in New Jersey
              </h2>
            </div>
            {FAQS.map((f) => <FAQ key={f.q} q={f.q} a={f.a} />)}
          </Fade>
        </div>
      </section>

      <section id="contact" style={{ padding: "6rem 2rem", background: T.dark, color: T.bg }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Fade>
            <div className="gbp-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
              <div>
                <span style={{ fontSize: ".72rem", fontWeight: 600, letterSpacing: ".11em", textTransform: "uppercase", color: T.accent, display: "block", marginBottom: ".65rem" }}>Free GBP audit</span>
                <h2 style={{ fontSize: "clamp(1.75rem,3vw,2.75rem)", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: "1.25rem" }}>
                  Get your NJ business into<br />the Google Map Pack.<br />
                  <span style={{ color: T.accent }}>Start with a free audit.</span>
                </h2>
                <p style={{ color: T.darkMuted, lineHeight: 1.8, marginBottom: "1.75rem" }}>
                  We review your current Google Business Profile, identify every issue holding you back in your NJ market, and give you a clear action plan — no cost, no commitment.
                </p>
                {["Full GBP health check included", "Map Pack competitor analysis", "Keyword + category review", "Clear improvement roadmap"].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: ".75rem", marginBottom: ".55rem" }}>
                    <span style={{ color: T.accent, fontWeight: 600 }}>✓</span>
                    <span style={{ fontSize: ".9rem", color: "#D8D4CE" }}>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{ color: T.text }}>
                <ContactForm submitLabel="Get your free NJ website audit" />
              </div>
            </div>
          </Fade>
        </div>
      </section>

      <section style={{ padding: "3.5rem 2rem", background: T.bg, borderTop: `1px solid ${T.border}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <span className="gbp-sl">Related local SEO services</span>
          <div style={{ display: "flex", gap: ".75rem", justifyContent: "center", flexWrap: "wrap", marginTop: "1rem" }}>
            {[
              ["Google Business Profile Setup NJ", "/local-seo-new-jersey/google-business-profile-setup-new-jersey"],
              ["Local SEO Services NJ", "/local-seo-new-jersey"],
              ["Local SEO for Dentists NJ", "/local-seo-new-jersey/local-seo-dentists-new-jersey"],
              ["Local SEO for HVAC Companies NJ", "/local-seo-new-jersey/local-seo-hvac-new-jersey"],
              ["Search Visibility Engine", "/services/search-visibility-engine"],
              ["New Jersey Web Development and Automation", "/web-development-automation-new-jersey"],
              ["GoHighLevel Automation", "/services/gohighlevel-automation"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                style={{
                  background: T.card,
                  border: `1px solid ${T.border}`,
                  borderRadius: 999,
                  padding: ".6rem 1rem",
                  fontSize: ".85rem",
                  color: T.text,
                  textDecoration: "none",
                  transition: "border-color .2s, color .2s",
                }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
