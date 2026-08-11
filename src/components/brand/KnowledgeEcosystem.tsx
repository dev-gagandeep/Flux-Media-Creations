import Image from "next/image";
import { ArrowUpRight } from "@/components/ui/animated-icons";

const channels = [
  { name: "Medium", src: "/images/ecosystem/medium.svg", href: "https://medium.com/@fluxmediacreations" },
  { name: "99designs", src: "/images/ecosystem/99designs.png", href: "https://99designs.com/profiles/fluxmediacreations" },
];

export default function KnowledgeEcosystem() {
  return (
    <section className="bg-ink py-20 text-white md:py-28">
      <div className="flux-shell">
        <div className="grid gap-10 border-t border-white/20 pt-5 lg:grid-cols-[.42fr_.58fr] lg:items-end">
          <div>
            <p className="flux-kicker text-flux">Communities & publications</p>
            <h2 className="mt-7 max-w-2xl font-display text-[clamp(2.5rem,4vw,4.5rem)] font-medium leading-[.98] tracking-[-.055em]">
              We share knowledge across design and developer communities.
            </h2>
            <div className="mt-7 flex flex-wrap gap-2">
              <a href="https://dev.to/fluxmediacreations" target="_blank" rel="noreferrer" className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white/60 hover:text-white">DEV Community ↗</a>
              <a href="https://www.quora.com/profile/Flux-Media-Creations" target="_blank" rel="noreferrer" className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white/60 hover:text-white">Quora ↗</a>
              <a href="https://github.com/flux-media-creations" target="_blank" rel="noreferrer" className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white/60 hover:text-white">GitHub ↗</a>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {channels.map((item) => (
              <a key={item.name} href={item.href} target="_blank" rel="noreferrer" aria-label={`Open Flux on ${item.name}`} className="group relative flex min-h-[150px] items-center justify-center rounded-[1.5rem] border border-white/15 bg-white p-6 transition-transform hover:-translate-y-1">
                <Image src={item.src} alt={item.name} width={260} height={110} className={`max-h-16 object-contain ${item.name === "99designs" ? "w-20" : "w-[80%]"}`} />
                <ArrowUpRight className="absolute right-4 top-4 h-4 w-4 text-ink/25 group-hover:text-flux" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
