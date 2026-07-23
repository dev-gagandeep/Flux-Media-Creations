import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const recognition = [
  { name: "Clutch", src: "/images/ecosystem/clutch.png", href: "https://clutch.co/profile/flux-media-creations" },
  { name: "GoodFirms", src: "/images/ecosystem/goodfirms.jpeg", href: "https://www.goodfirms.co/company/flux-media-creations" },
  { name: "Trustpilot", src: "/images/ecosystem/trustpilot.webp", href: "https://www.trustpilot.com/review/fluxmediacreations.com", wide: true },
  { name: "99designs", src: "/images/ecosystem/99designs.png", href: "https://99designs.com/profiles/fluxmediacreations" },
];

const credentials = [
  { name: "Google Partner", src: "/images/ecosystem/google-partner.png", wide: true },
  { name: "Meta Business Partner", src: "/images/ecosystem/meta-business-partner.png", wide: true },
  { name: "HubSpot Solutions Partner", src: "/images/ecosystem/hubspot-partner.webp" },
  { name: "Shopify Partner", src: "/images/ecosystem/shopify-partner.png" },
  { name: "HighLevel Certified Admin", src: "/images/ecosystem/highlevel-certified.png" },
  { name: "HighLevel Course Content 1st Place", src: "/images/ecosystem/highlevel-award.png" },
];

const profiles = [
  ["Sortlist", "https://www.sortlist.com/agency/flux-media-creations"],
  ["Wellfound", "https://wellfound.com/u/gagandeep_flux"],
  ["Medium", "https://medium.com/@fluxmediacreations"],
  ["DEV Community", "https://dev.to/fluxmediacreations"],
  ["Quora", "https://www.quora.com/profile/Flux-Media-Creations"],
  ["GitHub", "https://github.com/flux-media-creations"],
];

export function RecognitionStrip() {
  return (
    <section className="overflow-hidden border-y border-ink/10 bg-white py-5 md:py-6">
      <div className="flux-shell grid items-center gap-4 md:grid-cols-[auto_1fr] md:gap-8">
        <p className="flux-kicker shrink-0 text-ink/45">Find Flux on</p>
        <div className="relative min-w-0 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          <div className="marquee-track flex w-max gap-3 py-1 [animation-direction:reverse]">
            {(["first", "second"] as const).map(copy =>
              recognition.map(item => (
                <a
                key={`${copy}-${item.name}`}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`View Flux on ${item.name}`}
                className="flex h-20 w-[220px] shrink-0 items-center justify-center rounded-2xl border border-ink/10 bg-cream px-6 transition-transform hover:-translate-y-1"
              >
                <Image src={item.src} alt={item.name} width={240} height={90} className={`max-h-12 object-contain ${item.wide ? "w-[160px]" : "w-20"}`} />
              </a>
              )),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AuthorityEcosystem() {
  return (
    <>
      <section className="bg-white px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-10 border-t border-ink/15 pt-5 lg:grid-cols-[.36fr_.64fr]">
            <div>
              <p className="flux-kicker text-flux">Recognized across the web</p>
              <h2 className="mt-7 max-w-xl font-display text-4xl font-semibold leading-[1] tracking-[-.05em] md:text-6xl">
                Independent profiles. Public proof.
              </h2>
              <p className="mt-6 max-w-lg text-base leading-8 text-ink/58">
                Explore client feedback, agency profiles, design work, and published knowledge across established platforms.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {recognition.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View Flux on ${item.name}`}
                  className="group relative flex min-h-[150px] items-center justify-center overflow-hidden rounded-[1.5rem] border border-ink/10 bg-cream p-6 transition-[border-color,box-shadow,transform] hover:-translate-y-1 hover:border-flux/35 hover:shadow-[0_18px_50px_rgba(6,7,10,.09)]"
                >
                  <Image src={item.src} alt={item.name} width={280} height={120} className={`max-h-16 object-contain ${item.wide ? "w-[80%]" : "w-24"}`} />
                  <ArrowUpRight className="absolute right-4 top-4 h-4 w-4 text-ink/25 transition-colors group-hover:text-flux" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-2 border-t border-ink/10 pt-6">
            {profiles.map(([name, href]) => (
              <a key={name} href={href} target="_blank" rel="noreferrer" className="rounded-full border border-ink/15 px-4 py-2 text-xs font-semibold text-ink/55 transition-colors hover:border-flux hover:text-flux">
                {name} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 text-white md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-10 border-t border-white/20 pt-5 lg:grid-cols-[.36fr_.64fr]">
            <div>
              <p className="flux-kicker text-flux">Credentials & program badges</p>
              <h2 className="mt-7 max-w-xl font-display text-4xl font-semibold leading-[1] tracking-[-.05em] md:text-6xl">
                Platform knowledge backed by supplied credentials.
              </h2>
              <p className="mt-6 max-w-lg text-sm leading-7 text-white/50">
                Credential and partner-program marks shown here are the program assets supplied by Flux for its company profile.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {credentials.map((item) => (
                <div key={item.name} className="flex min-h-[190px] items-center justify-center rounded-[1.5rem] border border-white/15 bg-white p-6">
                  <Image src={item.src} alt={item.name} width={300} height={180} className={`max-h-32 object-contain ${item.wide ? "w-[90%]" : "w-32"}`} />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 flex justify-start">
            <Link href="/contact" className="flux-button flux-button-red">Discuss your technology stack <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
