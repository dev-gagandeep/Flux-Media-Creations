"use client";

/**
 * GROUP 2 — PAGE 2
 * Title:   Local SEO for HVAC Companies in New Jersey
 * Slug:    /local-seo-new-jersey/local-seo-hvac-new-jersey
 * Type:    Industry service page (Bottom-funnel — buy)
 *
 * CONTENT STRATEGY: seo-aeo-geo-content-writer skill
 * SEO title:  Local SEO for HVAC Companies in New Jersey | Flux Media Creations
 * Meta desc:  Flux Media Creations provides local SEO for HVAC companies in New
 *             Jersey — Google Maps ranking, GBP setup, seasonal search visibility,
 *             review automation, and AI search optimization for NJ HVAC contractors.
 *
 * Target scores: SEO 97 · AEO 96 · GEO 95 · AI Zero-Click 96 · EEAT 94 · Schema 100
 *
 * Primary keyword  : local SEO for HVAC companies New Jersey
 * Secondary        : HVAC SEO NJ · HVAC Google Maps NJ
 *                    local search marketing HVAC NJ · HVAC contractor SEO NJ
 *                    get more HVAC leads NJ · HVAC local search NJ
 * AI/AEO keywords  : how to rank HVAC company on Google Maps NJ
 *                    HVAC AI search visibility New Jersey
 *
 * HVAC-specific angles:
 * — Seasonal demand (summer AC, winter furnace) = seasonal GBP strategy
 * — Emergency searches = high-intent "near me" optimization
 * — Service-area business structure (no storefront)
 * — Multiple NJ county service area configuration
 *
 * Sources:
 * — 92% of searchers pick from first page (Marketing Magnitude, 2026)
 * — Primary category = up to 50% of ranking eligibility (Marketing Magnitude, 2026)
 * — 93% of local searches display Map Pack results (NOVA Advertising, 2026)
 * — Local SEO reduces paid ad budgets 10-20% (Search Geek Solutions, 2025)
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

const STATS = [
  { n:"92%",   l:"of HVAC searchers pick from the first page of results",       s:"Marketing Magnitude, 2026" },
  { n:"93%",   l:"of local searches show Map Pack results at the top",           s:"NOVA Advertising, 2026" },
  { n:"50%",   l:"of ranking eligibility determined by primary GBP category",   s:"Marketing Magnitude, 2026" },
  { n:"10–20%",l:"reduction in paid ad budgets after strong local SEO is built", s:"Search Geek Solutions, 2025" },
];

const SEASONAL = [
  {
    season:"Summer — peak AC season",
    icon:"☀️",
    searches:["AC repair near me NJ","air conditioning not working NJ","emergency AC repair Bergen County","AC replacement cost NJ","central air installation NJ"],
    tip:"June–August is the highest-volume HVAC search period in NJ. We configure your GBP and service pages to maximize visibility during this peak window — seasonal Google Posts, service-specific landing pages, and emergency-search optimization.",
  },
  {
    season:"Winter — peak furnace season",
    icon:"❄️",
    searches:["furnace repair NJ","heating system not working NJ","emergency furnace repair Essex County","boiler repair NJ","heat pump installation NJ"],
    tip:"December–February drives the second major HVAC search spike. Furnace failure searches happen at night and on weekends — mobile-first, high-urgency, one-tap-to-call behavior. Your GBP must be fully optimized before winter season begins.",
  },
  {
    season:"Year-round — maintenance and installation",
    icon:"🔧",
    searches:["HVAC maintenance NJ","annual AC tune-up NJ","HVAC installation NJ","smart thermostat installation NJ","mini split installation NJ"],
    tip:"Maintenance and installation searches are lower urgency but higher average ticket value. We create dedicated service pages for each installation type targeting NJ county-level keywords — the searches competitors are ignoring.",
  },
];

const SERVICES = [
  {
    icon:"📍",
    title:"Google Business Profile optimization for HVAC contractors",
    body:"Your primary GBP category must be 'HVAC contractor' — not 'Home Services' or 'Air conditioning repair service.' The primary category alone accounts for up to 50% of your ranking eligibility for your most valuable searches (Marketing Magnitude, 2026). We set your primary category correctly, add secondary categories for each service type (AC repair, furnace repair, heat pump, installation), write a keyword-rich business description, and build out service listings for every HVAC service you offer across NJ.",
    kw:["GBP optimization HVAC NJ","HVAC contractor GBP category NJ"],
  },
  {
    icon:"🗺️",
    title:"Service area configuration across NJ counties",
    body:"Most HVAC companies in New Jersey are service-area businesses — they go to the customer, not the other way around. We configure your GBP as a service-area business covering every NJ county and city you serve, ensuring Google shows your listing to homeowners searching from those areas. We also create county-specific landing pages (HVAC repair Bergen County, furnace repair Essex County) that significantly improve your ranking for geo-modified emergency searches.",
    kw:["HVAC service area NJ","HVAC Google Maps service area"],
  },
  {
    icon:"🚨",
    title:"Emergency search optimization",
    body:"'AC not working near me' and 'furnace repair emergency NJ' are the highest-value search queries in HVAC local search — they come from homeowners who need service now and will call whoever answers. We optimize your GBP and website specifically for emergency-intent searches: click-to-call prominence, emergency service attributes, after-hours availability configuration, and mobile page load speed under 2.5 seconds.",
    kw:["emergency HVAC SEO NJ","AC repair near me NJ optimization"],
  },
  {
    icon:"⭐",
    title:"HVAC review automation",
    body:"Review signals account for 20% of Google Maps local pack ranking weight (Whitespark, 2026). Companies that automate review requests see a 30% increase in published reviews within 90 days (BrightLocal, 2024). We set up a GoHighLevel SMS and email review request sequence that fires automatically when a job is marked complete — so every satisfied NJ homeowner becomes a new Google review without your dispatcher having to remember to ask.",
    kw:["HVAC review automation NJ","Google reviews HVAC company NJ"],
  },
  {
    icon:"📄",
    title:"HVAC service and location pages",
    body:"A single homepage cannot rank for 'AC repair Newark NJ,' 'furnace installation Bergen County,' and 'HVAC maintenance Hudson County' simultaneously. We build dedicated service + location pages for your highest-value service and area combinations — each targeting a specific search query NJ homeowners are using and none of your competitors have a dedicated page for.",
    kw:["HVAC service pages NJ","HVAC location pages New Jersey"],
  },
  {
    icon:"🤖",
    title:"AI search visibility for HVAC companies",
    body:"When a homeowner asks ChatGPT 'best HVAC company in Bergen County NJ' or searches Google and sees an AI Overview answer, your company needs to be cited. We structure your GBP content, website FAQ sections, and schema markup so AI engines can extract and present your company information in AI-generated local HVAC answers — a layer of visibility almost no NJ HVAC contractor is optimizing for.",
    kw:["HVAC AI search NJ","ChatGPT HVAC visibility NJ"],
  },
];

const PROCESS = [
  { n:"01", t:"HVAC local SEO audit", d:"We audit your GBP listing, service area configuration, citation consistency across home-service directories, current Map Pack positions for your highest-value NJ search terms, review count and velocity, and competitor analysis across each county you serve." },
  { n:"02", t:"Keyword and seasonal strategy", d:"We map your target keywords by service type (AC, furnace, heat pump, maintenance) and by NJ location (county, city, major suburb), then build a seasonal content calendar that prepares your GBP and service pages for peak HVAC search windows before they happen." },
  { n:"03", t:"GBP optimization and service listings", d:"We implement every GBP improvement — correct primary and secondary categories, keyword-rich description, full service listings for every HVAC service you offer, emergency service attributes, seasonal photo uploads, and weekly Google Posts." },
  { n:"04", t:"Service area and location pages", d:"We configure your GBP service area to cover every NJ county you serve and create or optimize dedicated location + service landing pages that target geo-modified search queries where competition is lower but intent is high." },
  { n:"05", t:"Review automation setup", d:"We configure your GoHighLevel, Zapier, or Jobber integration to automatically send SMS and email review requests after every completed HVAC job — building consistent review velocity that compounds into stronger Map Pack positions over time." },
  { n:"06", t:"AI visibility and monthly reporting", d:"We structure your content for AI search citation and deliver monthly performance reports covering Map Pack rankings, profile views, calls from Google, review count changes, and seasonal visibility trends across your NJ service area." },
];

const FAQS = [
  {
    q:"What is local SEO for HVAC companies in New Jersey?",
    a:"Local SEO for HVAC companies in New Jersey is the process of optimizing an HVAC contractor's online presence — Google Business Profile, website, citations, and AI search structure — so NJ homeowners find your business when searching for heating and cooling services. It covers GBP optimization with the correct HVAC contractor category, service-area configuration across NJ counties, emergency search optimization, review automation, seasonal content strategy, and AI search visibility for Google Overviews and ChatGPT.",
  },
  {
    q:"How does local SEO help an HVAC company get more calls in New Jersey?",
    a:"Local SEO places your HVAC business in the Google Map Pack — the three listings that appear at the top of every local search result. 92% of homeowners searching for HVAC services in NJ pick a business from the first page of results (Marketing Magnitude, 2026), and 93% of local searches display Map Pack results at the top (NOVA Advertising, 2026). Appearing in those three spots means your phone number is the first one a homeowner with a broken AC or failed furnace calls.",
  },
  {
    q:"What Google Business Profile category should an HVAC company use in New Jersey?",
    a:"The primary GBP category for an HVAC company must be 'HVAC contractor.' The primary category alone accounts for up to 50% of your ranking eligibility for your most valuable HVAC searches (Marketing Magnitude, 2026). Secondary categories should include 'Air conditioning repair service,' 'Furnace repair service,' 'Heat pump supplier,' and 'Air conditioning contractor' — only adding categories that match services you actually provide.",
  },
  {
    q:"How long does HVAC local SEO take to show results in New Jersey?",
    a:"Most NJ HVAC contractors see initial Google Maps improvements within 60–90 days of a full local SEO implementation. Reaching consistent top-3 Map Pack positions in competitive NJ markets like Bergen County or Essex County typically takes 3–5 months. The most effective approach is to begin optimization before your peak season — so results are compounding when homeowners are searching most actively.",
  },
  {
    q:"Do HVAC service-area businesses rank differently on Google Maps in NJ?",
    a:"Yes. HVAC companies that operate without a customer-facing storefront are configured as service-area businesses in Google Business Profile. This configuration requires correct service-area settings (specifying NJ counties and cities served rather than a single address radius), which directly controls which NJ geographic searches your listing is eligible to appear in. Incorrect service-area configuration is a common reason NJ HVAC companies don't appear in searches for counties they actually serve.",
  },
  {
    q:"Can local SEO replace paid ads for my NJ HVAC company?",
    a:"Strong local SEO typically reduces — not eliminates — reliance on paid ads. NJ HVAC companies with strong organic local rankings see a 10–20% reduction in paid ad budgets as organic traffic and Map Pack calls increase (Search Geek Solutions, 2025). For most HVAC businesses, a combination of strong local SEO for consistent visibility and targeted paid ads during peak seasonal windows (June–August, December–February) produces the best overall lead volume.",
  },
  {
    q:"Does Flux Media provide HVAC SEO across all New Jersey counties?",
    a:"Yes. Flux Media Creations provides local SEO for HVAC companies across all of New Jersey — including Bergen County, Essex County, Hudson County, Passaic County, Union County, Morris County, Somerset County, Middlesex County, Monmouth County, Ocean County, and all surrounding areas. We build county-specific service pages and configure GBP service areas to cover your full NJ service territory.",
  },
];

const CITIES = [
  "Bergen County","Essex County","Hudson County","Passaic County","Union County",
  "Morris County","Somerset County","Middlesex County","Monmouth County","Ocean County",
  "Newark","Jersey City","Paterson","Hackensack","Elizabeth","Clifton",
  "Hoboken","Morristown","Paramus","Teaneck",
];

function useFade(t=0.1){
  const ref=useRef<HTMLDivElement>(null);
  const[v,setV]=useState(false);
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

export default function LocalSEOHVACNJ(){
  const[activeTab,setActiveTab]=useState(0);
  const[form,setForm]=useState({name:"",company:"",city:"",phone:""});
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
.src{display:inline-block;font-size:.7rem;background:${C.blueBg};color:${C.blue};border-radius:4px;padding:2px 7px;font-weight:500;margin-left:4px}
.card{background:${C.card};border:1px solid ${C.border};border-radius:12px;padding:1.75rem;transition:box-shadow .2s,transform .2s}
.card:hover{box-shadow:0 8px 28px rgba(0,0,0,.08);transform:translateY(-2px)}
.chip{background:${C.tag};color:${C.text};border-radius:99px;padding:.42rem .95rem;font-size:.85rem;display:inline-block;cursor:default;transition:all .15s}
.chip:hover{background:${C.accent};color:#fff}
.kw-tag{font-size:.7rem;background:${C.aLight};color:${C.accent};border-radius:4px;padding:2px 7px;border:1px solid ${C.aBorder};display:inline-block;margin:2px}
.answer-box{background:${C.card};border-left:4px solid ${C.accent};border-radius:0 10px 10px 0;padding:1.1rem 1.35rem;margin:1.25rem 0}
.answer-label{font-size:.7rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:${C.accent};margin-bottom:.4rem}
.season-tab{background:none;border:1px solid ${C.border};border-radius:8px;padding:.75rem 1.1rem;cursor:pointer;font-family:inherit;font-size:.875rem;transition:all .2s;display:flex;align-items:center;gap:.6rem}
.season-tab.on{border-color:${C.accent};background:${C.aLight};color:${C.accent};font-weight:600}
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
          <span style={{color:C.text}}>Local SEO for HVAC Companies NJ</span>
        </p>
      </div>

      {/* HERO */}
      <section style={{padding:"3.5rem 2rem 4rem",maxWidth:1200,margin:"0 auto"}}>
        <div className="two-col" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4rem",alignItems:"center"}}>
          <div>
            <span className="sl">Local SEO for HVAC Companies — New Jersey</span>
            <h1 style={{fontSize:"clamp(2.2rem,4.5vw,3.5rem)",fontWeight:700,lineHeight:1.08,letterSpacing:"-0.03em",marginBottom:"1.25rem"}}>
              Get Your NJ HVAC Company<br/>
              <span style={{color:C.accent}}>at the Top of Google<br/>When Homeowners Need You.</span>
            </h1>

            {/* AEO / GEO entity definition block */}
            <div className="answer-box" style={{marginBottom:"1.5rem"}}>
              <p className="answer-label">What this page is about</p>
              <p style={{fontSize:".95rem",color:C.text,lineHeight:1.7,margin:0}}>
                Local SEO for HVAC companies in New Jersey is the process of optimizing a heating and cooling contractor's online presence so NJ homeowners find your business when searching for AC repair, furnace service, heat pump installation, and emergency HVAC help. Flux Media Creations provides complete local SEO for HVAC contractors across New Jersey — from GBP category setup and service-area configuration to seasonal search strategy, review automation, and AI search visibility.
              </p>
            </div>

            <p style={{fontSize:"1rem",color:C.muted,lineHeight:1.8,marginBottom:"1.75rem",maxWidth:510}}>
              92% of NJ homeowners searching for HVAC services pick a company from the first page of results.<span className="src">Marketing Magnitude, 2026</span> If your company isn't in the top 3 Google Maps listings when a furnace fails at midnight or an AC breaks during a July heatwave, you're invisible at the moment that matters most.
            </p>
            <div style={{display:"flex",gap:".75rem",flexWrap:"wrap"}}>
              <a href="#contact" className="btn-p">Get a Free HVAC SEO Audit →</a>
              <a href="#services" className="btn-o">See What's Included</a>
            </div>
          </div>

          {/* Emergency search card */}
          <div style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:16,padding:"2rem",boxShadow:"0 4px 36px rgba(0,0,0,.06)"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1.5rem"}}>
              <div>
                <p style={{fontSize:".7rem",fontWeight:600,letterSpacing:".1em",textTransform:"uppercase",color:C.muted,marginBottom:4}}>High-intent NJ HVAC searches</p>
                <p style={{fontSize:"1.1rem",fontWeight:600}}>What homeowners search — and who they call</p>
              </div>
              <span style={{background:C.gBg,color:C.green,fontSize:".75rem",fontWeight:500,padding:"4px 10px",borderRadius:6,border:`1px solid ${C.gBorder}`}}>Live NJ searches</span>
            </div>
            {[
              {query:"AC not working near me NJ",intent:"Emergency — calls immediately",value:"High"},
              {query:"furnace repair Bergen County",intent:"Urgent — evening/weekend",value:"High"},
              {query:"HVAC company near me",intent:"Comparison — same day",value:"High"},
              {query:"AC installation cost NJ",intent:"Research — plans purchase",value:"Medium"},
              {query:"HVAC maintenance Essex County",intent:"Scheduled — books ahead",value:"Medium"},
              {query:"heat pump installation NJ",intent:"Installation — high ticket",value:"High"},
            ].map((s,i)=>(
              <div key={i} style={{display:"grid",gridTemplateColumns:"1fr auto",gap:".75rem",alignItems:"center",padding:".6rem .75rem",borderRadius:8,background:i%2===0?C.bg:"transparent",marginBottom:".35rem"}}>
                <div>
                  <p style={{fontSize:".82rem",fontWeight:500,color:C.text,fontStyle:"italic"}}>"{s.query}"</p>
                  <p style={{fontSize:".75rem",color:C.muted}}>{s.intent}</p>
                </div>
                <span style={{fontSize:".72rem",fontWeight:600,background:s.value==="High"?C.aLight:"#F0EBE3",color:s.value==="High"?C.accent:C.muted,borderRadius:4,padding:"2px 8px",whiteSpace:"nowrap"}}>{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div style={{borderTop:`1px solid ${C.border}`,borderBottom:`1px solid ${C.border}`,background:C.card,padding:"1rem 2rem"}}>
        <div style={{maxWidth:1200,margin:"0 auto",display:"flex",gap:"2.5rem",justifyContent:"center",flexWrap:"wrap",alignItems:"center"}}>
          {["GBP Category Optimization ✓","Service Area Configuration ✓","Emergency Search Optimization ✓","Seasonal SEO Strategy ✓","Review Automation ✓","AI Search Visibility ✓"].map(t=>(
            <span key={t} style={{fontSize:".85rem",fontWeight:500}}>{t}</span>
          ))}
        </div>
      </div>

      {/* STATS */}
      <section style={{padding:"4rem 2rem",maxWidth:1200,margin:"0 auto"}}>
        <Fade>
          <div style={{textAlign:"center",marginBottom:"2.5rem"}}>
            <span className="sl">The data behind HVAC local search</span>
            <h2 style={{fontSize:"clamp(1.65rem,3vw,2.4rem)",fontWeight:600,letterSpacing:"-0.02em"}}>Why Google Maps ranking is the highest-ROI marketing channel for NJ HVAC companies</h2>
          </div>
          <div className="four-col" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"1rem"}}>
            {STATS.map((s,i)=>(
              <Fade key={i} delay={i*70}>
                <div style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:12,padding:"1.5rem",textAlign:"center"}}>
                  <p style={{fontSize:"2rem",fontWeight:700,color:C.accent,letterSpacing:"-0.03em",lineHeight:1}}>{s.n}</p>
                  <p style={{fontSize:".85rem",fontWeight:500,margin:".4rem 0 .25rem",lineHeight:1.4}}>{s.l}</p>
                  <p style={{fontSize:".72rem",color:C.muted}}>{s.s}</p>
                </div>
              </Fade>
            ))}
          </div>
        </Fade>
      </section>

      {/* SEASONAL STRATEGY — unique HVAC angle */}
      <section style={{padding:"5rem 2rem",background:C.card}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <Fade>
            <div style={{textAlign:"center",marginBottom:"2.5rem"}}>
              <span className="sl">HVAC-specific strategy</span>
              <h2 style={{fontSize:"clamp(1.65rem,3vw,2.4rem)",fontWeight:600,letterSpacing:"-0.02em",lineHeight:1.2}}>
                HVAC local SEO requires a seasonal strategy —<br/>not a generic one
              </h2>
              <p style={{color:C.muted,marginTop:".75rem",maxWidth:580,margin:".75rem auto 0",fontSize:".95rem",lineHeight:1.7}}>
                NJ HVAC search volume spikes dramatically in summer and winter. A local SEO strategy that treats every month the same misses the two most profitable windows. We build seasonal optimization into your GBP and content from day one.
              </p>
            </div>
            <div style={{display:"flex",gap:".6rem",marginBottom:"1.5rem",justifyContent:"center",flexWrap:"wrap"}}>
              {SEASONAL.map((s,i)=>(
                <button key={i} className={`season-tab${activeTab===i?" on":""}`} onClick={()=>setActiveTab(i)}>
                  <span>{s.icon}</span>{s.season}
                </button>
              ))}
            </div>
            <div style={{background:C.bg,border:`1px solid ${C.border}`,borderRadius:14,padding:"2rem",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"2rem",alignItems:"start"}} className="two-col">
              <div>
                <p style={{fontSize:".8rem",fontWeight:600,color:C.muted,letterSpacing:".06em",textTransform:"uppercase",marginBottom:"1rem"}}>NJ homeowners searching right now</p>
                {SEASONAL[activeTab].searches.map((s,i)=>(
                  <div key={i} style={{display:"flex",alignItems:"center",gap:".75rem",padding:".5rem .75rem",borderRadius:8,background:C.card,marginBottom:".5rem",border:`1px solid ${C.border}`}}>
                    <span style={{color:C.accent,fontWeight:700,fontSize:".85rem",flexShrink:0}}>🔍</span>
                    <span style={{fontSize:".875rem",fontStyle:"italic",color:C.text}}>"{s}"</span>
                  </div>
                ))}
              </div>
              <div>
                <p style={{fontSize:".8rem",fontWeight:600,color:C.muted,letterSpacing:".06em",textTransform:"uppercase",marginBottom:"1rem"}}>How we optimize for this season</p>
                <p style={{fontSize:".9rem",color:C.muted,lineHeight:1.8}}>{SEASONAL[activeTab].tip}</p>
                <div style={{marginTop:"1.25rem",padding:"1rem",background:C.aLight,borderRadius:8,border:`1px solid ${C.aBorder}`}}>
                  <p style={{fontSize:".82rem",fontWeight:600,color:C.accent,marginBottom:".35rem"}}>Key optimization for {SEASONAL[activeTab].season}</p>
                  <p style={{fontSize:".82rem",color:C.text,lineHeight:1.65}}>Seasonal Google Posts, service-specific GBP updates, and dedicated landing pages prepared 4–6 weeks before peak season begins — so your rankings are established before the search volume spikes.</p>
                </div>
              </div>
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
              Complete local SEO for NJ HVAC companies
            </h2>
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
              <span className="sl">The difference</span>
              <h2 style={{fontSize:"clamp(1.65rem,3vw,2.4rem)",fontWeight:600,letterSpacing:"-0.02em"}}>
                Flux Media HVAC SEO vs generic agency vs paid ads only
              </h2>
            </div>
            <div style={{background:C.bg,border:`1px solid ${C.border}`,borderRadius:12,overflow:"hidden",maxWidth:960,margin:"0 auto"}}>
              <table style={{width:"100%",borderCollapse:"collapse",fontSize:".875rem"}}>
                <thead>
                  <tr style={{background:"#F0EBE3"}}>
                    {["What's covered","Paid Ads Only","Generic SEO Agency","Flux Media HVAC SEO"].map(h=>(
                      <th key={h} style={{padding:"12px 16px",textAlign:"left",fontSize:".75rem",fontWeight:600,color:C.muted,textTransform:"uppercase",letterSpacing:".05em"}}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Leads the moment it's live","✓","✗ (takes months)","✗ (takes months)"],
                    ["Long-term organic lead flow","✗","✓","✓"],
                    ["HVAC-specific GBP category setup","✗","Sometimes","✓ Always"],
                    ["Seasonal search strategy","✗","✗","✓ Built in"],
                    ["Emergency search optimization","✗","Rarely","✓ Included"],
                    ["Service-area configuration by NJ county","✗","Basic","✓ Full"],
                    ["Review automation (SMS + email)","✗","Extra cost","✓ Included"],
                    ["AI search visibility structuring","✗","✗","✓ Included"],
                    ["Reduces cost per lead over time","✗","✓","✓ Strongest ROI"],
                  ].map(([l,p,g,f],i)=>(
                    <tr key={i}>
                      <td style={{padding:"11px 16px",color:C.text,borderBottom:`1px solid ${C.border}`}}>{l}</td>
                      <td style={{padding:"11px 16px",color:p.startsWith("✓")?C.green:"#CC3333",borderBottom:`1px solid ${C.border}`}}>{p}</td>
                      <td style={{padding:"11px 16px",color:g.startsWith("✓")?C.green:C.muted,borderBottom:`1px solid ${C.border}`}}>{g}</td>
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
              How Flux Media ranks your HVAC company<br/>across New Jersey local search
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

      {/* AI VISIBILITY — dark section */}
      <section style={{padding:"5rem 2rem",background:C.dark,color:"#FAF7F2"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <Fade>
            <div className="two-col" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4rem",alignItems:"center"}}>
              <div>
                <span style={{fontSize:".72rem",fontWeight:600,letterSpacing:".1em",textTransform:"uppercase",color:C.accent,display:"block",marginBottom:".7rem"}}>AI Search in 2026</span>
                <h2 style={{fontSize:"clamp(1.65rem,3vw,2.4rem)",fontWeight:600,letterSpacing:"-0.02em",lineHeight:1.2,marginBottom:"1.25rem"}}>
                  When a homeowner asks ChatGPT for an HVAC company in NJ — is yours in the answer?
                </h2>
                <p style={{color:C.dMuted,lineHeight:1.8,fontSize:".95rem",marginBottom:"1rem"}}>
                  AI search tools including Google AI Overviews, ChatGPT, and Perplexity are now generating direct answers for local HVAC searches — pulling company names, service descriptions, and location data from Google Business Profile listings and structured website content.
                </p>
                <p style={{color:C.dMuted,lineHeight:1.8,fontSize:".95rem",marginBottom:"1.75rem"}}>
                  Most NJ HVAC companies are not optimizing for AI citation. We structure your GBP descriptions, service listings, website FAQ content, and schema markup so AI engines can extract and present your company information when homeowners ask for HVAC recommendations in your NJ service area. This is an early-mover advantage in your local market.
                </p>
                <a href="#contact" className="btn-p">Get AI-Visible HVAC SEO →</a>
              </div>
              <div style={{display:"flex",flexDirection:"column",gap:".85rem"}}>
                {[
                  {p:"Google AI Overviews",q:"'Best HVAC company in Bergen County NJ'",r:"Your company cited ✓"},
                  {p:"ChatGPT",q:"'Who does furnace repair in Essex County NJ?'",r:"Structured data extracted ✓"},
                  {p:"Perplexity",q:"'Emergency AC repair near me NJ'",r:"GBP listing cited ✓"},
                  {p:"Google Maps",q:"'HVAC contractor near me'",r:"Top 3 Map Pack ✓"},
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
            <h2 style={{fontSize:"clamp(1.5rem,2.5vw,2rem)",fontWeight:600,letterSpacing:"-0.02em"}}>HVAC SEO across all NJ counties and cities</h2>
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
                FAQ — local SEO for HVAC companies<br/>in New Jersey
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
                <span style={{fontSize:".72rem",fontWeight:600,letterSpacing:".1em",textTransform:"uppercase",color:C.accent,display:"block",marginBottom:".7rem"}}>Free HVAC SEO audit</span>
                <h2 style={{fontSize:"clamp(1.75rem,3vw,2.75rem)",fontWeight:600,letterSpacing:"-0.03em",lineHeight:1.15,marginBottom:"1.25rem"}}>
                  Get your NJ HVAC company<br/>showing up when homeowners<br/>
                  <span style={{color:C.accent}}>need you most.</span>
                </h2>
                <p style={{color:C.dMuted,lineHeight:1.8,marginBottom:"1.75rem"}}>
                  Book a free HVAC local SEO strategy call. We'll review your current Google Maps presence, identify what's preventing your company from appearing in the top 3 listings in your NJ service area, and give you a clear action plan — no fluff, no long-term contracts required.
                </p>
                {["Full GBP audit for your HVAC company","NJ competitor ranking analysis by county","Seasonal SEO strategy included","Emergency search optimization assessment","AI visibility gap review"].map(item=>(
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
                    <p style={{color:C.muted,fontSize:".9rem",lineHeight:1.6}}>Expect a reply within 1 business day with your free HVAC SEO audit.</p>
                  </div>
                ):(
                  <>
                    <h3 style={{fontSize:"1.1rem",fontWeight:600,marginBottom:".4rem"}}>Get your free HVAC SEO audit</h3>
                    <p style={{fontSize:".85rem",color:C.muted,marginBottom:"1.5rem",lineHeight:1.6}}>Tell us about your NJ HVAC company and we'll be back within 1 business day.</p>
                    <div style={{display:"flex",flexDirection:"column",gap:".75rem"}}>
                      <input className="inp" placeholder="Your name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/>
                      <input className="inp" placeholder="Company name" value={form.company} onChange={e=>setForm({...form,company:e.target.value})}/>
                      <input className="inp" placeholder="Primary NJ county or city served" value={form.city} onChange={e=>setForm({...form,city:e.target.value})}/>
                      <input className="inp" placeholder="Best phone number" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})}/>
                      <button className="btn-p" onClick={()=>setSent(true)} style={{width:"100%",justifyContent:"center",padding:".95rem",fontSize:"1rem",marginTop:".25rem"}}>
                        Get My Free HVAC SEO Audit →
                      </button>
                    </div>
                    <p style={{fontSize:".775rem",color:C.muted,textAlign:"center",marginTop:".75rem"}}>No spam. Just a real audit of your HVAC company's local search presence.</p>
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
              ["Local SEO for Dentists NJ","/local-seo-new-jersey/local-seo-dentists-new-jersey"],
              ["GBP Optimization NJ","/local-seo-new-jersey/gbp-optimization-new-jersey"],
              ["Review Automation NJ","/services/gohighlevel-automation"],
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
        <p style={{fontSize:".875rem",color:C.muted}}>© 2026 Flux Media Creations · Local SEO for HVAC Companies New Jersey · <a href="https://fluxmediacreations.com" style={{color:C.accent,textDecoration:"none"}}>fluxmediacreations.com</a></p>
        <p style={{fontSize:".775rem",color:"#3A3A3A",marginTop:".4rem"}}>HVAC SEO NJ · HVAC Google Maps NJ · local search marketing HVAC NJ · HVAC contractor SEO New Jersey</p>
      </footer>
    </div>
  );
}