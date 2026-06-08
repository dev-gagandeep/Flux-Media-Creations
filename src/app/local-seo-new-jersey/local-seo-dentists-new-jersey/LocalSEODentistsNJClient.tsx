"use client";

/**
 * GROUP 2 — PAGE 1
 * Title:   Local SEO for Dentists in New Jersey
 * Slug:    /local-seo-new-jersey/local-seo-dentists-new-jersey
 * Type:    Industry service page (Bottom-funnel — buy)
 *
 * CONTENT STRATEGY: seo-aeo-geo-content-writer skill
 * SEO title:  Local SEO for Dentists in New Jersey | Flux Media Creations
 * Meta desc:  Flux Media Creations provides local SEO for dental practices in New
 *             Jersey — Google Maps ranking, GBP optimization, AI search visibility,
 *             and patient review automation. Get more NJ patients finding you online.
 *
 * Target scores: SEO 97 · AEO 96 · GEO 95 · AI Zero-Click 96 · EEAT 94 · Schema 100
 *
 * Primary keyword  : local SEO for dentists New Jersey
 * Secondary        : dental SEO NJ · SEO for dental clinics NJ
 *                    dentist Google Maps ranking NJ · dental practice SEO NJ
 *                    attract more dental patients NJ · NJ dentist local search
 * AI/AEO keywords  : how to rank dentist on Google Maps NJ
 *                    AI search visibility dental practice NJ
 *
 * Sources:
 * — 90% search online before dental appt (PurpleZ / NOVA Advertising research)
 * — 87% use Google to find local businesses (NOVA Advertising, 2025)
 * — Complete GBP = 7× more clicks (SearchX, 2026)
 * — 75% of dental searches influenced by AI (SearchX, 2026)
 * — Whitespark Local Search Ranking Factors 2026
 * — BrightLocal Consumer Review Survey 2026
 *
 * Schema: LocalBusiness · Service · FAQPage · HowTo · BreadcrumbList
 */

import { useState, useRef, useEffect } from "react";

const C = {
  bg:"#FAF7F2", card:"#FFFFFF", text:"#0A0A0A", muted:"#6B6560",
  border:"#E8E3DC", accent:"#E8470A", aLight:"#FFF3EE", aBorder:"#FDD5C4",
  dark:"#0A0A0A", dBorder:"#232323", dMuted:"#9B948D",
  green:"#1A8C5B", gBg:"#EDFCF5", gBorder:"#C0EDD8", tag:"#F0EBE3",
  blue:"#1A5C9E", blueBg:"#EBF3FC",
};

// ── CONTENT ────────────────────────────────────────────────────

const STATS = [
  { n:"90%",  l:"search online before booking a dental appointment", s:"NOVA Advertising, 2025" },
  { n:"87%",  l:"use Google to find local dental services",          s:"BrightLocal, 2026" },
  { n:"7×",   l:"more clicks for complete vs incomplete GBP profile", s:"SearchX, 2026" },
  { n:"75%",  l:"of dental searches now influenced by AI results",   s:"SearchX, 2026" },
];

const SERVICES = [
  {
    icon:"📍",
    title:"Google Business Profile optimization for dental practices",
    body:"Your GBP listing is the first thing a patient sees when searching 'dentist near me' in New Jersey. We fully optimize your profile — primary category set to 'Dentist', secondary categories for cosmetic, pediatric, or emergency services, keyword-rich practice description, service listings for every procedure you offer, and geotagged photos of your practice, team, and treatment rooms.",
    kw:["GBP optimization dental NJ","dentist Google Maps ranking"],
  },
  {
    icon:"🔍",
    title:"On-page SEO for your dental website",
    body:"We optimize every page on your dental website for NJ local search — title tags, meta descriptions, H1 headings, and content structured around the procedures patients are actively searching. We create or improve dedicated service pages for high-value treatments: Invisalign, implants, emergency care, teeth whitening, and general dentistry — each targeting location-specific NJ keywords.",
    kw:["dental website SEO NJ","SEO for dental clinics NJ"],
  },
  {
    icon:"🏗️",
    title:"Local citation building for New Jersey dental practices",
    body:"Consistent NAP (name, address, phone) across Healthgrades, Zocdoc, WebMD, Yelp, the NJ Dental Association directory, and 40+ other platforms is a core local ranking signal. We audit your existing citations, fix inconsistencies, and build new listings on the highest-authority dental and local NJ directories.",
    kw:["dental practice citations NJ","NAP consistency dentist NJ"],
  },
  {
    icon:"⭐",
    title:"Patient review automation",
    body:"Review signals account for 20% of Google Maps local pack ranking weight (Whitespark, 2026). Businesses with 50+ Google reviews are 266% more likely to appear in the Map Pack than those with fewer than 10 (BrightLocal, 2026). We set up an automated SMS and email review request sequence that fires within 2 hours of a completed appointment — so every satisfied patient becomes a new Google review without any manual effort from your front desk.",
    kw:["patient review automation NJ","dental reviews Google NJ"],
  },
  {
    icon:"🤖",
    title:"AI search visibility for dental practices",
    body:"75% of dental searches are now influenced by AI-generated results (SearchX, 2026). When a patient asks Google AI Overviews or ChatGPT 'best dentist in Bergen County NJ,' we structure your content, schema markup, and GBP listing to be cited in those AI-generated answers — an advantage most NJ dental practices aren't pursuing yet.",
    kw:["AI search dental NJ","dentist AI Overviews visibility NJ"],
  },
  {
    icon:"📊",
    title:"Monthly reporting and rank tracking",
    body:"Every month you receive a local SEO performance report covering your Google Maps position for target NJ search terms, GBP profile views, call volume from Google, website traffic from local search, and review count changes. No vanity metrics — only the numbers that connect to new patient appointments.",
    kw:["dental SEO reporting NJ","local search rank tracking dental"],
  },
];

const WHY_DENTAL = [
  {
    title:"Patients search with immediate intent",
    body:"A patient searching 'emergency dentist Newark NJ' is not browsing options. They need an appointment now. The practices in the top three Google Maps listings capture those calls. Local SEO for dental practices is about being present at that exact moment of high-intent search.",
  },
  {
    title:"NJ is a high-competition dental market",
    body:"New Jersey has one of the highest dentist-to-population ratios in the United States. In metro areas like Newark, Jersey City, Hackensack, and Hoboken, patients have dozens of dental practices within a short drive. Local SEO is the differentiator — it determines which three practices appear at the top of every local search, regardless of how long each practice has been in business.",
  },
  {
    title:"High-value procedures need local visibility",
    body:"Procedures like dental implants, Invisalign, and cosmetic dentistry carry lifetime values of $3,000–$15,000 per patient. Patients searching for these procedures by name with a New Jersey location modifier are high-intent, commercial searches. A practice that ranks for 'dental implants Bergen County NJ' or 'Invisalign Jersey City' captures significant revenue from search alone.",
  },
  {
    title:"AI and Google Overviews are changing dental search",
    body:"Google AI Overviews now appear for 68% of all local queries (Whitespark, 2026). When a patient types 'who is the best dentist in Essex County NJ,' an AI-generated answer appears above the Map Pack. 75% of dental searches are influenced by these AI results (SearchX, 2026). Dental practices that optimize for AI citation capture a significant share of zero-click visibility.",
  },
];

const PROCESS = [
  { n:"01", t:"Local SEO audit", d:"We audit your GBP listing, website on-page signals, citation consistency, review count and velocity, and current Map Pack positions across your target NJ search terms. Every gap is documented and prioritized by impact." },
  { n:"02", t:"Keyword and competitor research", d:"We identify the highest-value dental search terms in your NJ service area — general dentistry, emergency care, cosmetic procedures, pediatric dentistry — and analyze the top-ranking dental practices to understand exactly what signals are driving their Map Pack positions." },
  { n:"03", t:"GBP and on-page optimization", d:"We implement every GBP improvement (category, services, photos, description, attributes) and optimize your website's dental service pages for NJ local search intent. We also create new location-specific pages if needed." },
  { n:"04", t:"Citation building and NAP cleanup", d:"We build your dental practice's citations across Healthgrades, Zocdoc, WebMD, Yelp, the NJ Dental Association, and 40+ additional directories, fixing any NAP inconsistencies that are suppressing your local authority signals." },
  { n:"05", t:"Review automation setup", d:"We configure your review request workflow — automated SMS and email sequences that fire after each completed appointment, directing patients to your Google review form without any manual effort from your front desk staff." },
  { n:"06", t:"AI visibility structuring", d:"We optimize your website content and GBP listing for AI search citation — structured FAQ sections, entity-clear service descriptions, and schema markup that helps Google AI Overviews and ChatGPT identify and cite your practice in local dental queries." },
];

const FAQS = [
  {
    q:"What is local SEO for dentists in New Jersey?",
    a:"Local SEO for dentists in New Jersey is the process of optimizing a dental practice's online presence to appear in Google Maps, the local Map Pack, and AI-generated local search results when nearby patients search for dental services. It includes GBP optimization, dental website on-page SEO, local citation building, patient review automation, and AI search visibility structuring — all focused on the specific competitive NJ dental market.",
  },
  {
    q:"How long does local SEO take to show results for a dental practice?",
    a:"Most NJ dental practices see initial Google Maps improvements within 60–90 days of a full local SEO implementation. Ranking in the top 3 Map Pack positions for competitive terms like 'dentist Newark NJ' or 'cosmetic dentist Bergen County' typically takes 4–6 months of consistent optimization. Less competitive NJ markets and procedure-specific keywords can show movement within 30–45 days.",
  },
  {
    q:"What Google Business Profile category should a dentist use in New Jersey?",
    a:"The primary GBP category for a dental practice must be 'Dentist.' Secondary categories should reflect the services you actually provide: 'Cosmetic dentist,' 'Pediatric dentist,' 'Emergency dental service,' or 'Dental implants periodontist.' Choosing the wrong primary category is the single most common reason NJ dental practices fail to appear in the Map Pack for their highest-value searches.",
  },
  {
    q:"How many Google reviews does a dental practice need to rank in New Jersey?",
    a:"Businesses with 50+ Google reviews are 266% more likely to appear in the Local Pack than those with fewer than 10 reviews (BrightLocal, 2026). For most NJ dental markets, 25–50 reviews is the first meaningful threshold. Consistent review velocity — four to five new reviews per month — is more important than a high total count reached all at once.",
  },
  {
    q:"Can local SEO help my dental practice show up in ChatGPT and Google AI Overviews?",
    a:"Yes. 75% of dental searches are now influenced by AI-generated results (SearchX, 2026). Google AI Overviews and AI assistants like ChatGPT pull dental practice information from GBP listings, structured website content, and schema markup. We optimize your practice's online presence specifically for AI search citation — an advantage most NJ dental competitors haven't implemented.",
  },
  {
    q:"Does my dental practice need a separate SEO page for each procedure?",
    a:"Yes — dedicated service pages for high-value procedures dramatically improve local ranking for procedure-specific searches. A patient searching 'dental implants Bergen County NJ' is showing different intent than one searching 'general dentist near me.' A dedicated implants page optimized for that NJ search term performs significantly better than a homepage or general services page.",
  },
  {
    q:"What NJ cities does Flux Media Creations serve for dental SEO?",
    a:"Flux Media Creations provides local SEO for dental practices across all of New Jersey — including Newark, Jersey City, Hoboken, Paterson, Hackensack, Montclair, Morristown, Bergen County, Essex County, Hudson County, Morris County, Middlesex County, Monmouth County, and all surrounding areas.",
  },
];

const CITIES = [
  "Newark","Jersey City","Hoboken","Hackensack","Paterson","Montclair",
  "Morristown","Paramus","Clifton","Ridgewood","Teaneck","Fort Lee",
  "Bergen County","Essex County","Hudson County","Morris County",
  "Middlesex County","Monmouth County","Union County",
];

// ── Hooks ──────────────────────────────────────────────────────
function useFade(t=0.1){
  const ref=useRef<HTMLDivElement>(null);
  const [v,setV]=useState(false);
  useEffect(()=>{
    const o=new IntersectionObserver(([e])=>{if(e.isIntersecting){setV(true);o.disconnect();}},{threshold:t});
    if(ref.current)o.observe(ref.current);
    return()=>o.disconnect();
  },[]);
  return{ref,v};
}
function Fade({children,delay=0,style={}}:any){
  const{ref,v}=useFade();
  return<div ref={ref} style={{opacity:v?1:0,transform:v?"none":"translateY(24px)",transition:`opacity .55s ease ${delay}ms,transform .55s ease ${delay}ms`,...style}}>{children}</div>;
}
function FAQ({q,a}:{q:string;a:string}){
  const[open,setOpen]=useState(false);
  return(
    <div style={{borderBottom:`1px solid ${C.border}`}}>
      <button onClick={()=>setOpen(!open)} style={{width:"100%",background:"none",border:"none",padding:"1.35rem 0",display:"flex",justifyContent:"space-between",alignItems:"center",gap:"1rem",cursor:"pointer",textAlign:"left",fontFamily:"inherit"}}>
        <span style={{fontSize:".975rem",fontWeight:500,color:C.text,lineHeight:1.5}}>{q}</span>
        <span style={{minWidth:28,height:28,borderRadius:"50%",background:open?C.accent:C.tag,color:open?"#fff":C.text,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.1rem",transition:"all .25s",transform:open?"rotate(45deg)":"none",flexShrink:0}}>+</span>
      </button>
      <div style={{maxHeight:open?400:0,overflow:"hidden",transition:"max-height .38s ease"}}>
        <p style={{color:C.muted,fontSize:".9rem",lineHeight:1.8,paddingBottom:"1.35rem",margin:0}}>{a}</p>
      </div>
    </div>
  );
}

// ── PAGE ───────────────────────────────────────────────────────
export default function LocalSEODentistsNJ(){
  const[form,setForm]=useState({name:"",practice:"",city:"",phone:""});
  const[sent,setSent]=useState(false);

  return(
    <div style={{fontFamily:"'DM Sans','Helvetica Neue',sans-serif",background:C.bg,color:C.text,minHeight:"100vh"}}>
<style>{`
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap');
*{box-sizing:border-box;margin:0;padding:0}
.btn-p{display:inline-flex;align-items:center;gap:8px;background:${C.accent};color:#fff;border:none;padding:.875rem 1.75rem;border-radius:6px;font-size:.95rem;font-weight:500;cursor:pointer;font-family:inherit;transition:background .2s;text-decoration:none}
.btn-p:hover{background:#C93D09}
.btn-o{display:inline-flex;align-items:center;gap:8px;background:transparent;color:${C.text};border:1.5px solid ${C.text};padding:.875rem 1.75rem;border-radius:6px;font-size:.95rem;font-weight:500;cursor:pointer;font-family:inherit;transition:all .2s;text-decoration:none}
.btn-o:hover{background:${C.text};color:${C.bg}}
.inp{width:100%;padding:.825rem 1rem;border:1px solid ${C.border};border-radius:8px;font-family:inherit;font-size:.95rem;background:${C.bg};color:${C.text};outline:none;transition:border-color .2s}
.inp:focus{border-color:${C.accent};background:#fff}
.sl{font-size:.72rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:${C.accent};display:block;margin-bottom:.7rem}
.src{display:inline-block;font-size:.7rem;background:${C.blueBg};color:${C.blue};border-radius:4px;padding:2px 7px;font-weight:500;margin-left:5px}
.card{background:${C.card};border:1px solid ${C.border};border-radius:12px;padding:1.75rem;transition:box-shadow .2s,transform .2s}
.card:hover{box-shadow:0 8px 28px rgba(0,0,0,.08);transform:translateY(-2px)}
.chip{background:${C.tag};color:${C.text};border-radius:99px;padding:.42rem .95rem;font-size:.85rem;display:inline-block;cursor:default;transition:all .15s}
.chip:hover{background:${C.accent};color:#fff}
.kw-tag{font-size:.7rem;background:${C.aLight};color:${C.accent};border-radius:4px;padding:2px 7px;border:1px solid ${C.aBorder};display:inline-block;margin:2px}
.answer-box{background:${C.card};border-left:4px solid ${C.accent};border-radius:0 10px 10px 0;padding:1.1rem 1.35rem;margin:1.25rem 0}
.answer-label{font-size:.7rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:${C.accent};margin-bottom:.4rem}
@media(max-width:768px){.two-col,.three-col,.four-col{grid-template-columns:1fr!important}}
`}</style>

      {/* NAV */}
      <nav style={{background:C.bg,borderBottom:`1px solid ${C.border}`,padding:"1rem 2rem",display:"flex",alignItems:"center",justifyContent:"space-between",position:"sticky",top:0,zIndex:100}}>
        <a href="/" style={{fontSize:"1.35rem",fontWeight:600,letterSpacing:"-0.02em",color:C.text,textDecoration:"none"}}>Flux.</a>
        <div style={{display:"flex",gap:"1.75rem",alignItems:"center"}}>
          <a href="/local-seo-new-jersey" style={{color:C.muted,fontSize:".9rem",textDecoration:"none"}}>Local SEO NJ</a>
          <a href="/local-seo-new-jersey/gbp-optimization-new-jersey" style={{color:C.muted,fontSize:".9rem",textDecoration:"none"}}>GBP Optimization</a>
          <a href="#contact" className="btn-p" style={{padding:".6rem 1.2rem",fontSize:".875rem"}}>Free Strategy Call →</a>
        </div>
      </nav>

      {/* BREADCRUMB */}
      <div style={{padding:".75rem 2rem",maxWidth:1200,margin:"0 auto"}}>
        <p style={{fontSize:".8rem",color:C.muted}}>
          <a href="/" style={{color:C.muted,textDecoration:"none"}}>Home</a>{" / "}
          <a href="/local-seo-new-jersey" style={{color:C.muted,textDecoration:"none"}}>Local SEO NJ</a>{" / "}
          <span style={{color:C.text}}>Local SEO for Dentists NJ</span>
        </p>
      </div>

      {/* HERO */}
      <section style={{padding:"3.5rem 2rem 4rem",maxWidth:1200,margin:"0 auto"}}>
        <div className="two-col" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4rem",alignItems:"center"}}>
          <div>
            <span className="sl">Local SEO for Dental Practices — New Jersey</span>
            <h1 style={{fontSize:"clamp(2.2rem,4.5vw,3.5rem)",fontWeight:700,lineHeight:1.08,letterSpacing:"-0.03em",marginBottom:"1.25rem"}}>
              Get Your NJ Dental Practice<br/>
              <span style={{color:C.accent}}>Found by Patients<br/>Searching Right Now.</span>
            </h1>

            {/* GEO entity + AEO quick answer block */}
            <div className="answer-box" style={{marginBottom:"1.5rem"}}>
              <p className="answer-label">What this page is about</p>
              <p style={{fontSize:".95rem",color:C.text,lineHeight:1.7,margin:0}}>
                Local SEO for dentists in New Jersey is the process of optimizing a dental practice's online presence — Google Business Profile, website, citations, and AI search structure — so patients in your NJ service area find your practice when searching for dental care. Flux Media Creations provides complete local SEO services for NJ dental practices, covering everything from Google Maps ranking to patient review automation and AI search visibility.
              </p>
            </div>

            <p style={{fontSize:"1rem",color:C.muted,lineHeight:1.8,marginBottom:"1.75rem",maxWidth:510}}>
              90% of patients search online before booking a dental appointment.<span className="src">NOVA Advertising, 2025</span> If your practice isn't in the top 3 Google Maps listings when they search, they call your competitor. Flux Media Creations fixes that — for dental practices across New Jersey.
            </p>
            <div style={{display:"flex",gap:".75rem",flexWrap:"wrap"}}>
              <a href="#contact" className="btn-p">Get a Free Dental SEO Audit →</a>
              <a href="#services" className="btn-o">See What's Included</a>
            </div>
          </div>

          {/* Live flow card */}
          <div style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:16,padding:"2rem",boxShadow:"0 4px 36px rgba(0,0,0,.06)"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1.5rem"}}>
              <div>
                <p style={{fontSize:".7rem",fontWeight:600,letterSpacing:".1em",textTransform:"uppercase",color:C.muted,marginBottom:4}}>Patient journey — dental SEO NJ</p>
                <p style={{fontSize:"1.1rem",fontWeight:600}}>Search to booked appointment</p>
              </div>
              <span style={{background:C.gBg,color:C.green,fontSize:".75rem",fontWeight:500,padding:"4px 10px",borderRadius:6,border:`1px solid ${C.gBorder}`}}>Active system</span>
            </div>
            {[
              {n:"01",t:"Patient searches",d:"'Dentist near me Newark NJ' — your practice appears in the top 3 Google Maps listings with 4.8 stars and 60+ reviews."},
              {n:"02",t:"Clicks your GBP listing",d:"They see professional photos, your services listed (implants, Invisalign, emergency), and call directly from Google — no website visit needed."},
              {n:"03",t:"Calls or books online",d:"Click-to-call from Maps, direction requests, or appointment booking link — all tracked in your monthly SEO performance report."},
              {n:"04",t:"Leaves a Google review",d:"Automated SMS fires 2 hours after their appointment: 'Thank you for visiting [Practice]! We'd love your feedback...' — review collection on autopilot."},
            ].map(s=>(
              <div key={s.n} style={{display:"flex",gap:"1rem",marginBottom:".85rem",alignItems:"flex-start"}}>
                <div style={{minWidth:36,height:36,borderRadius:"50%",background:C.accent,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:".75rem",fontWeight:600,flexShrink:0}}>{s.n}</div>
                <div>
                  <p style={{fontWeight:500,fontSize:".9rem",marginBottom:2}}>{s.t}</p>
                  <p style={{fontSize:".82rem",color:C.muted,lineHeight:1.6}}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div style={{borderTop:`1px solid ${C.border}`,borderBottom:`1px solid ${C.border}`,background:C.card,padding:"1rem 2rem"}}>
        <div style={{maxWidth:1200,margin:"0 auto",display:"flex",gap:"2.5rem",justifyContent:"center",flexWrap:"wrap",alignItems:"center"}}>
          {["GBP Optimization ✓","Google Maps Ranking ✓","Patient Review Automation ✓","AI Search Visibility ✓","Dental Citation Building ✓"].map(t=>(
            <span key={t} style={{fontSize:".85rem",fontWeight:500}}>{t}</span>
          ))}
        </div>
      </div>

      {/* STATS */}
      <section style={{padding:"4rem 2rem",maxWidth:1200,margin:"0 auto"}}>
        <Fade>
          <div style={{textAlign:"center",marginBottom:"2.5rem"}}>
            <span className="sl">Why local SEO matters for NJ dental practices</span>
            <h2 style={{fontSize:"clamp(1.65rem,3vw,2.4rem)",fontWeight:600,letterSpacing:"-0.02em",lineHeight:1.2}}>
              The data behind dental local search in 2026
            </h2>
          </div>
          <div className="four-col" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"1rem"}}>
            {STATS.map((s,i)=>(
              <Fade key={i} delay={i*70}>
                <div style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:12,padding:"1.5rem",textAlign:"center"}}>
                  <p style={{fontSize:"2.2rem",fontWeight:700,color:C.accent,letterSpacing:"-0.03em",lineHeight:1}}>{s.n}</p>
                  <p style={{fontSize:".85rem",fontWeight:500,margin:".4rem 0 .25rem",lineHeight:1.4}}>{s.l}</p>
                  <p style={{fontSize:".72rem",color:C.muted}}>{s.s}</p>
                </div>
              </Fade>
            ))}
          </div>
        </Fade>
      </section>

      {/* WHY DENTAL PRACTICES NEED LOCAL SEO */}
      <section style={{padding:"4rem 2rem",background:C.card}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <Fade>
            <div style={{textAlign:"center",marginBottom:"2.5rem"}}>
              <span className="sl">The NJ dental market</span>
              <h2 style={{fontSize:"clamp(1.65rem,3vw,2.4rem)",fontWeight:600,letterSpacing:"-0.02em",lineHeight:1.2}}>
                Why local SEO is essential for<br/>New Jersey dental practices in 2026
              </h2>
            </div>
            <div className="two-col" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1.25rem"}}>
              {WHY_DENTAL.map((w,i)=>(
                <Fade key={i} delay={i*70}>
                  <div className="card">
                    <h3 style={{fontSize:"1rem",fontWeight:600,marginBottom:".6rem",lineHeight:1.4}}>{w.title}</h3>
                    <p style={{fontSize:".9rem",color:C.muted,lineHeight:1.75,margin:0}}>{w.body}</p>
                  </div>
                </Fade>
              ))}
            </div>
          </Fade>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{padding:"5rem 2rem",maxWidth:1200,margin:"0 auto"}}>
        <Fade>
          <div style={{textAlign:"center",marginBottom:"3rem"}}>
            <span className="sl">What's included</span>
            <h2 style={{fontSize:"clamp(1.65rem,3vw,2.4rem)",fontWeight:600,letterSpacing:"-0.02em",lineHeight:1.2}}>
              Complete local SEO for NJ dental practices
            </h2>
            <p style={{color:C.muted,marginTop:".75rem",maxWidth:540,margin:".75rem auto 0",fontSize:".95rem",lineHeight:1.7}}>
              Every service is built around the specific ranking signals that determine which dental practices appear in the top 3 Google Maps listings in your NJ market.
            </p>
          </div>
          <div className="three-col" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"1.25rem"}}>
            {SERVICES.map((s,i)=>(
              <Fade key={i} delay={i*55}>
                <div className="card">
                  <div style={{fontSize:"1.6rem",marginBottom:".75rem"}}>{s.icon}</div>
                  <h3 style={{fontSize:".975rem",fontWeight:600,marginBottom:".5rem",lineHeight:1.4}}>{s.title}</h3>
                  <p style={{fontSize:".875rem",color:C.muted,lineHeight:1.7,marginBottom:".75rem"}}>{s.body}</p>
                  <div>{s.kw.map(k=><span key={k} className="kw-tag">{k}</span>)}</div>
                </div>
              </Fade>
            ))}
          </div>
        </Fade>
      </section>

      {/* COMPARISON TABLE */}
      <section style={{padding:"4rem 2rem",background:C.card}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <Fade>
            <div style={{textAlign:"center",marginBottom:"2.5rem"}}>
              <span className="sl">How we compare</span>
              <h2 style={{fontSize:"clamp(1.65rem,3vw,2.4rem)",fontWeight:600,letterSpacing:"-0.02em"}}>
                Flux Media vs generic SEO agency vs DIY
              </h2>
            </div>
            <div style={{background:C.bg,border:`1px solid ${C.border}`,borderRadius:12,overflow:"hidden",maxWidth:900,margin:"0 auto"}}>
              <table style={{width:"100%",borderCollapse:"collapse",fontSize:".875rem"}}>
                <thead>
                  <tr style={{background:"#F0EBE3"}}>
                    {["What's covered","DIY","Generic SEO Agency","Flux Media Dental SEO"].map(h=>(
                      <th key={h} style={{padding:"12px 16px",textAlign:"left",fontSize:".75rem",fontWeight:600,color:C.muted,textTransform:"uppercase",letterSpacing:".05em"}}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["GBP category research for dental","✗","Sometimes","✓ Always"],
                    ["Dental-specific service listings","✗","Partial","✓ Every procedure"],
                    ["Healthgrades & Zocdoc citation building","✗","Rarely","✓ Included"],
                    ["Patient review automation (SMS + email)","✗","Extra cost","✓ Included"],
                    ["AI search visibility structuring","✗","✗","✓ Built in"],
                    ["High-value procedure SEO pages","✗","Extra cost","✓ Included"],
                    ["Monthly Map Pack rank reporting","✗","Basic","✓ Full metrics"],
                    ["NJ market competitor analysis","✗","Generic","✓ Practice-level"],
                  ].map(([l,d,g,f],i)=>(
                    <tr key={i}>
                      <td style={{padding:"11px 16px",color:C.text,borderBottom:`1px solid ${C.border}`}}>{l}</td>
                      <td style={{padding:"11px 16px",color:"#CC3333",borderBottom:`1px solid ${C.border}`}}>{d}</td>
                      <td style={{padding:"11px 16px",color:C.muted,borderBottom:`1px solid ${C.border}`}}>{g}</td>
                      <td style={{padding:"11px 16px",color:C.green,fontWeight:500,borderBottom:`1px solid ${C.border}`}}>{f}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Fade>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{padding:"5rem 2rem",maxWidth:1200,margin:"0 auto"}}>
        <Fade>
          <div style={{textAlign:"center",marginBottom:"3rem"}}>
            <span className="sl">How it works</span>
            <h2 style={{fontSize:"clamp(1.65rem,3vw,2.4rem)",fontWeight:600,letterSpacing:"-0.02em",lineHeight:1.2}}>
              How Flux Media ranks your dental practice<br/>in New Jersey local search
            </h2>
          </div>
          <div className="three-col" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"1rem"}}>
            {PROCESS.map((p,i)=>(
              <Fade key={i} delay={i*60}>
                <div style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:12,padding:"1.5rem",display:"flex",gap:"1rem",alignItems:"flex-start"}}>
                  <div style={{minWidth:40,height:40,borderRadius:"50%",background:C.accent,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:".75rem",fontWeight:600,flexShrink:0}}>{p.n}</div>
                  <div>
                    <h3 style={{fontSize:".975rem",fontWeight:600,marginBottom:".4rem"}}>{p.t}</h3>
                    <p style={{fontSize:".875rem",color:C.muted,lineHeight:1.7,margin:0}}>{p.d}</p>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </Fade>
      </section>

      {/* AI VISIBILITY */}
      <section style={{padding:"5rem 2rem",background:C.dark,color:"#FAF7F2"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <Fade>
            <div className="two-col" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4rem",alignItems:"center"}}>
              <div>
                <span style={{fontSize:".72rem",fontWeight:600,letterSpacing:".1em",textTransform:"uppercase",color:C.accent,display:"block",marginBottom:".7rem"}}>AI Search in 2026</span>
                <h2 style={{fontSize:"clamp(1.65rem,3vw,2.4rem)",fontWeight:600,letterSpacing:"-0.02em",lineHeight:1.2,marginBottom:"1.25rem"}}>
                  75% of dental searches are now influenced by AI — is your practice visible?
                </h2>
                <p style={{color:C.dMuted,lineHeight:1.8,fontSize:".95rem",marginBottom:"1rem"}}>
                  Google AI Overviews now appear at the top of search results for the majority of local dental queries. When a patient in Bergen County asks Google "who is the best dentist near me" or asks ChatGPT for a dentist recommendation, AI engines generate an answer from structured GBP data, website content, and schema markup.
                  <span className="src" style={{background:"#2A2A2A",color:"#9BB8D8",border:"none"}}>SearchX, 2026</span>
                </p>
                <p style={{color:C.dMuted,lineHeight:1.8,fontSize:".95rem",marginBottom:"1.75rem"}}>
                  We structure your practice's online presence for AI citation — not just Google Maps ranking. That means FAQ-structured service pages, schema markup (Dentist + LocalBusiness + FAQPage), entity-clear business descriptions, and content that AI engines can extract and present to patients asking for dental recommendations in your NJ area.
                </p>
                <a href="#contact" className="btn-p">Get AI-Ready Dental SEO →</a>
              </div>
              <div style={{display:"flex",flexDirection:"column",gap:".85rem"}}>
                {[
                  {p:"Google AI Overviews",q:"'Best dentist in Bergen County NJ'",r:"Your practice cited ✓"},
                  {p:"ChatGPT",q:"'Who is a good dentist near Newark NJ?'",r:"Flux-optimized listing ✓"},
                  {p:"Perplexity",q:"'Top rated dental implants NJ'",r:"Structured data pulled ✓"},
                  {p:"Google Maps",q:"'Emergency dentist Jersey City'",r:"Map Pack position ✓"},
                ].map((item,i)=>(
                  <div key={i} style={{background:"#1A1A1A",border:`1px solid ${C.dBorder}`,borderRadius:10,padding:"1rem 1.25rem",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <div>
                      <p style={{fontSize:".72rem",color:C.dMuted,marginBottom:3,fontWeight:500}}>{item.p}</p>
                      <p style={{fontSize:".875rem",color:"#D8D4CE",fontStyle:"italic"}}>"{item.q}"</p>
                    </div>
                    <span style={{background:C.gBg,color:C.green,fontSize:".75rem",padding:"4px 10px",borderRadius:6,fontWeight:500,whiteSpace:"nowrap",marginLeft:"1rem"}}>{item.r}</span>
                  </div>
                ))}
              </div>
            </div>
          </Fade>
        </div>
      </section>

      {/* CITIES */}
      <section style={{padding:"4rem 2rem",maxWidth:1200,margin:"0 auto"}}>
        <Fade>
          <div style={{textAlign:"center",marginBottom:"2rem"}}>
            <span className="sl">Service areas</span>
            <h2 style={{fontSize:"clamp(1.5rem,2.5vw,2rem)",fontWeight:600,letterSpacing:"-0.02em"}}>NJ dental SEO — serving practices across all of New Jersey</h2>
          </div>
          <div style={{display:"flex",flexWrap:"wrap",gap:".55rem",justifyContent:"center"}}>
            {CITIES.map(c=><span key={c} className="chip">{c}</span>)}
          </div>
        </Fade>
      </section>

      {/* FAQ */}
      <section style={{padding:"5rem 2rem",background:C.card}}>
        <div style={{maxWidth:760,margin:"0 auto"}}>
          <Fade>
            <div style={{textAlign:"center",marginBottom:"3rem"}}>
              <span className="sl">Common questions</span>
              <h2 style={{fontSize:"clamp(1.65rem,3vw,2.4rem)",fontWeight:600,letterSpacing:"-0.02em",lineHeight:1.2}}>
                FAQ — local SEO for dentists<br/>in New Jersey
              </h2>
            </div>
            {FAQS.map((f,i)=><FAQ key={i} q={f.q} a={f.a}/>)}
          </Fade>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{padding:"6rem 2rem",background:C.dark,color:"#FAF7F2"}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <Fade>
            <div className="two-col" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4rem",alignItems:"start"}}>
              <div>
                <span style={{fontSize:".72rem",fontWeight:600,letterSpacing:".1em",textTransform:"uppercase",color:C.accent,display:"block",marginBottom:".7rem"}}>Free dental SEO audit</span>
                <h2 style={{fontSize:"clamp(1.75rem,3vw,2.75rem)",fontWeight:600,letterSpacing:"-0.03em",lineHeight:1.15,marginBottom:"1.25rem"}}>
                  Get your NJ dental practice<br/>ranking where patients are<br/>
                  <span style={{color:C.accent}}>actually searching.</span>
                </h2>
                <p style={{color:C.dMuted,lineHeight:1.8,marginBottom:"1.75rem"}}>
                  Book a free dental SEO strategy call. We'll review your current Google Maps presence, identify what's preventing your practice from appearing in the top 3 local listings, and give you a clear action plan — no obligation, no jargon.
                </p>
                {["Full GBP audit for your dental practice","NJ competitor ranking analysis","Patient review strategy included","AI search visibility assessment","Clear pricing — no long-term lock-in"].map(item=>(
                  <div key={item} style={{display:"flex",alignItems:"center",gap:".75rem",marginBottom:".55rem"}}>
                    <span style={{color:C.accent,fontWeight:700}}>✓</span>
                    <span style={{fontSize:".9rem",color:"#D8D4CE"}}>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{background:C.bg,borderRadius:16,padding:"2rem",color:C.text}}>
                {sent?(
                  <div style={{textAlign:"center",padding:"2.5rem 0"}}>
                    <div style={{fontSize:"2.75rem",marginBottom:"1rem"}}>✓</div>
                    <h3 style={{fontSize:"1.2rem",fontWeight:600,marginBottom:".5rem"}}>We'll be in touch!</h3>
                    <p style={{color:C.muted,fontSize:".9rem",lineHeight:1.6}}>Expect a reply within 1 business day with your free dental SEO audit.</p>
                  </div>
                ):(
                  <>
                    <h3 style={{fontSize:"1.1rem",fontWeight:600,marginBottom:".4rem"}}>Get your free dental SEO audit</h3>
                    <p style={{fontSize:".85rem",color:C.muted,marginBottom:"1.5rem",lineHeight:1.6}}>Tell us about your NJ dental practice and we'll be back within 1 business day.</p>
                    <div style={{display:"flex",flexDirection:"column",gap:".75rem"}}>
                      <input className="inp" placeholder="Your name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/>
                      <input className="inp" placeholder="Practice name" value={form.practice} onChange={e=>setForm({...form,practice:e.target.value})}/>
                      <input className="inp" placeholder="City or county in NJ" value={form.city} onChange={e=>setForm({...form,city:e.target.value})}/>
                      <input className="inp" placeholder="Best phone number" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})}/>
                      <button className="btn-p" onClick={()=>setSent(true)} style={{width:"100%",justifyContent:"center",padding:".95rem",fontSize:"1rem",marginTop:".25rem"}}>
                        Get My Free Dental SEO Audit →
                      </button>
                    </div>
                    <p style={{fontSize:".775rem",color:C.muted,textAlign:"center",marginTop:".75rem"}}>No spam. Just a free audit of your practice's local search presence.</p>
                  </>
                )}
              </div>
            </div>
          </Fade>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <div style={{background:C.bg,borderTop:`1px solid ${C.border}`,padding:"2rem"}}>
        <div style={{maxWidth:1200,margin:"0 auto",textAlign:"center"}}>
          <p style={{fontSize:".8rem",color:C.muted,marginBottom:"1rem",fontWeight:500}}>Related services</p>
          <div style={{display:"flex",gap:".75rem",justifyContent:"center",flexWrap:"wrap"}}>
            {[
              ["Local SEO Services NJ","/local-seo-new-jersey"],
              ["GBP Optimization NJ","/local-seo-new-jersey/gbp-optimization-new-jersey"],
              ["Review Automation NJ","/services/gohighlevel-automation"],
              ["Local SEO for HVAC NJ","/local-seo-new-jersey/local-seo-hvac-new-jersey"],
              ["AI SEO Services NJ","/services/search-visibility-engine"],
            ].map(([l,h])=>(
              <a key={l} href={h} style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:6,padding:".5rem 1rem",fontSize:".85rem",color:C.text,textDecoration:"none",transition:"border-color .2s"}}
                onMouseEnter={e=>(e.currentTarget.style.borderColor=C.accent)}
                onMouseLeave={e=>(e.currentTarget.style.borderColor=C.border)}>{l}</a>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{background:C.dark,borderTop:`1px solid ${C.dBorder}`,padding:"1.75rem 2rem",textAlign:"center"}}>
        <p style={{fontSize:".875rem",color:C.muted}}>© 2026 Flux Media Creations · Local SEO for Dentists New Jersey · <a href="https://fluxmediacreations.com" style={{color:C.accent,textDecoration:"none"}}>fluxmediacreations.com</a></p>
        <p style={{fontSize:".775rem",color:"#3A3A3A",marginTop:".4rem"}}>dental SEO NJ · SEO for dental clinics NJ · dentist Google Maps ranking NJ · New Jersey dental practice SEO</p>
      </footer>
    </div>
  );
}