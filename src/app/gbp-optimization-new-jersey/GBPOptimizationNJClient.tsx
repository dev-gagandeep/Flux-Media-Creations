"use client";

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
    title: "Full GBP audit & category optimization",
    body:
      "Most NJ businesses are using the wrong primary category — and it's costing them Map Pack positions. We audit your entire profile, fix your primary and secondary categories, and make sure every field Google uses for local ranking is filled correctly.",
    keywords: ["GBP audit NJ", "Google Business Profile category optimization"],
  },
  {
    title: "Business description & keyword integration",
    body:
      "Your GBP description is one of the most under-optimized local SEO assets in New Jersey. We write a conversion-focused, keyword-rich description that communicates your service, service area, and value proposition to both Google and your customers.",
    keywords: ["GBP description optimization", "Google listing keywords NJ"],
  },
  {
    title: "Photo strategy & visual optimization",
    body:
      "Google ranks businesses with regular, high-quality photos higher in local results. We set up a photo upload strategy covering team photos, work photos, location photos, and service photos — all geotagged and named for NJ local search signals.",
    keywords: ["GBP photos NJ", "Google Maps photo optimization"],
  },
  {
    title: "Weekly Google posts & updates",
    body:
      "Google Posts are one of the fastest ways to signal to Google that your business is active. We create and schedule weekly posts — offers, updates, events — that keep your profile fresh and improve your visibility in competitive NJ markets.",
    keywords: ["Google Business Profile posts NJ", "GBP weekly posts"],
  },
  {
    title: "Q&A section management",
    body:
      "The Q&A section of your Google listing is publicly editable — anyone can add questions and incorrect answers. We monitor, populate, and manage your Q&A section so it works for your business, not against it.",
    keywords: ["GBP Q&A management", "Google listing Q&A NJ"],
  },
  {
    title: "Service area & location signals",
    body:
      "We configure your service area settings, add all relevant NJ cities and counties, and build the location signals that help Google understand exactly where to show your business — whether you serve one town or all of New Jersey.",
    keywords: ["GBP service area NJ", "Google Business Profile location settings"],
  },
  {
    title: "Website & booking link integration",
    body:
      "We connect your GBP to your website, appointment booking page, and phone tracking number — creating a seamless path from Google search to booked call. Every click counts.",
    keywords: ["GBP booking link NJ", "Google listing website link setup"],
  },
  {
    title: "AI search visibility (ChatGPT + Google AI)",
    body:
      "Google AI Overviews and ChatGPT now pull local business data directly from Google Business Profile. We structure your GBP so your NJ business gets cited in AI-generated answers — an edge that most local competitors haven't even heard of yet.",
    keywords: ["AI search GBP NJ", "ChatGPT local business visibility NJ"],
  },
];

const RESULTS = [
  { stat: "#1-3", label: "Map Pack position", sub: "target for competitive NJ markets" },
  { stat: "3-5x", label: "more profile views", sub: "after full GBP optimization" },
  { stat: "60 days", label: "early results", sub: "GBP improvements appear within 30-60 days" },
  { stat: "76%", label: "of local clicks", sub: "go to the top 3 Map Pack positions" },
];

const INDUSTRIES = [
  "Dental Clinics", "Med Spas", "Chiropractors", "HVAC Companies",
  "Roofers & Contractors", "Plumbers", "Electricians", "Law Firms",
  "Real Estate Agents", "Salons & Spas", "Fitness Studios", "Healthcare Clinics",
];

const FAQS = [
  {
    q: "What is Google Business Profile optimization and why does it matter for NJ businesses?",
    a: "Google Business Profile (GBP) optimization is the process of fully completing, configuring, and actively managing your Google listing so it ranks higher in local search results and the Google Map Pack. For New Jersey businesses, this is critical — the Map Pack appears at the very top of local search results and captures over 76% of clicks for local queries.",
  },
  {
    q: "How long does GBP optimization take to show results in New Jersey?",
    a: "Most New Jersey businesses see measurable improvements in profile views, calls, and Map Pack position within 30-60 days of a full GBP optimization. The timeline depends on your market competition — highly competitive areas like Newark and Jersey City may take slightly longer than suburban NJ markets.",
  },
  {
    q: "Can GBP optimization help my business show up in ChatGPT and Google AI Overviews?",
    a: "Yes. In 2026, Google AI Overviews and AI assistants like ChatGPT pull local business data directly from Google Business Profile signals, citations, and structured content. A fully optimized GBP is one of the strongest foundations for AI search visibility — making it more than just a local SEO tool.",
  },
  {
    q: "Do I need a physical location in New Jersey to benefit from GBP optimization?",
    a: "Not necessarily. Service-area businesses that operate across New Jersey without a storefront can still have a Google Business Profile and rank in local results. We configure your service area settings to cover all the NJ cities and counties you serve.",
  },
  {
    q: "How is Flux Media's GBP optimization different from doing it myself?",
    a: "Most business owners set up a basic GBP listing and leave it. That is not optimization. We conduct a full audit, correct category errors, write keyword-integrated descriptions, build a photo strategy, manage Q&A, set up weekly posts, and configure location signals — everything Google uses to decide who ranks in the Map Pack.",
  },
  {
    q: "Does GBP optimization work alongside local SEO?",
    a: "GBP optimization is one of the most powerful components of local SEO — not a separate thing. When combined with on-page SEO, citation building, and review management, a fully optimized GBP dramatically accelerates your overall local search performance in New Jersey.",
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
  const [form, setForm] = useState({ name: "", business: "", city: "", phone: "" });
  const [sent, setSent] = useState(false);

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
            <p style={{ fontSize: "1.05rem", color: T.muted, lineHeight: 1.8, marginBottom: "1.75rem", maxWidth: 520 }}>
              Flux Media Creations provides complete Google Business Profile optimization for New Jersey businesses — covering everything Google uses to decide who shows up in the Map Pack, from category setup and descriptions to weekly posts, photos, and AI search visibility.
            </p>
            <div style={{ display: "flex", gap: ".75rem", flexWrap: "wrap" }}>
              <a href="#contact" className="gbp-btn-primary">Get a Free GBP Audit →</a>
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
                76% of local search clicks go to those top three listings. If your business isn&apos;t there, you&apos;re invisible to the majority of buyers in your NJ market — regardless of how good your service is or how well-designed your website is.
              </p>
              <p style={{ color: T.muted, lineHeight: 1.8 }}>
                A fully optimized Google Business Profile is what determines whether you&apos;re in those three spots. Most NJ businesses have a profile. Very few have an optimized one.
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
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: ".6rem", justifyContent: "center" }}>
            {INDUSTRIES.map((ind) => (
              <span key={ind} className="gbp-chip">{ind}</span>
            ))}
          </div>
        </Fade>
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
                { n: "01", t: "GBP audit", d: "We audit your full Google Business Profile — categories, attributes, description, photos, posts, Q&A, and service listings — and identify every gap costing you Map Pack positions." },
                { n: "02", t: "Competitor analysis", d: "We analyze the top-ranking GBP listings in your NJ market to understand exactly what signals they're using and build a strategy that outperforms them." },
                { n: "03", t: "Full optimization", d: "We implement every improvement: category fixes, keyword-rich description, service listings, photo uploads, Q&A population, attribute setup, and service area configuration." },
                { n: "04", t: "Weekly content", d: "We create and schedule weekly Google Posts — offers, news, updates — to keep your profile active and signal consistency to Google's local ranking algorithm." },
                { n: "05", t: "AI visibility setup", d: "We structure your GBP so it feeds into Google AI Overviews and is more likely to be cited when customers ask ChatGPT or Perplexity for local business recommendations." },
                { n: "06", t: "Monthly reporting", d: "You receive a monthly GBP performance report covering profile views, search queries, direction requests, calls, and Map Pack ranking movement across your NJ service area." },
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
              <div style={{ background: T.bg, borderRadius: 16, padding: "2rem", color: T.text }}>
                {sent ? (
                  <div style={{ textAlign: "center", padding: "2.5rem 0" }}>
                    <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>✓</div>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: 600, marginBottom: ".5rem" }}>Got it — we&apos;ll be in touch!</h3>
                    <p style={{ color: T.muted, fontSize: ".9rem" }}>Expect a reply within 1 business day with your free GBP audit.</p>
                  </div>
                ) : (
                  <>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "1.5rem" }}>Request your free GBP audit</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: ".75rem" }}>
                      <input className="gbp-input" placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                      <input className="gbp-input" placeholder="Business type (e.g. HVAC, Dentist)" value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })} />
                      <input className="gbp-input" placeholder="City in New Jersey" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} />
                      <input className="gbp-input" placeholder="Phone number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                      <button type="button" className="gbp-btn-primary" onClick={() => setSent(true)} style={{ width: "100%", justifyContent: "center", padding: ".95rem", fontSize: "1rem", marginTop: ".25rem" }}>
                        Get My Free GBP Audit →
                      </button>
                    </div>
                    <p style={{ fontSize: ".775rem", color: T.muted, textAlign: "center", marginTop: ".75rem" }}>No spam. Just your free audit results.</p>
                  </>
                )}
              </div>
            </div>
          </Fade>
        </div>
      </section>
    </main>
  );
}
