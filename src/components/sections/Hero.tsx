"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Hero() {
  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-[86vh] px-6 md:px-10 pt-28 md:pt-32 pb-20 bg-blush/45">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[1.12fr_0.88fr] gap-12 xl:gap-20 items-center">
        <div>
          <motion.p
            variants={fadeUp} initial="initial" animate="animate"
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs font-semibold uppercase tracking-widest text-flux mb-5"
          >
            Strategic digital engineering
          </motion.p>

          <motion.h1
            className="font-display font-semibold leading-[0.96] max-w-4xl"
            style={{ fontSize: "clamp(3.15rem, 7vw, 7.2rem)", letterSpacing: "0" }}
          >
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                The Future of
              </motion.span>
            </span>
            <span className="block overflow-hidden text-flux">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                Digital Infrastructure
              </motion.span>
            </span>
          </motion.h1>

          <motion.div
            variants={fadeUp} initial="initial" animate="animate"
            transition={{ delay: 0.48, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6"
          >
            <p className="text-base md:text-lg text-ink/55 leading-relaxed max-w-2xl">
              We architect high-performance WordPress websites, organic SEO foundations, and GoHighLevel automation systems for service businesses that need cleaner acquisition, faster follow-up, and measurable growth.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <MagneticButton>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wide transition-all duration-300 hover:gap-4"
                  style={{ background: "var(--flux)", color: "white", boxShadow: "0 18px 45px rgba(255,92,53,0.22)" }}
                >
                  Start a project
                  <span>→</span>
                </Link>
              </MagneticButton>
              <Link
                href="/work"
                className="inline-flex items-center justify-center rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-ink/70 transition-colors hover:border-ink/35 hover:text-ink"
              >
                Explore work
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.58, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative ml-auto w-full max-w-[520px]"
        >
          <div className="relative aspect-[0.88] overflow-hidden rounded-[1.65rem] border border-ink/10 bg-ink shadow-[0_30px_90px_rgba(255,92,53,0.16)]">
            <Image
              src="/images/blog/wordpress-dashboard.png"
              alt="Analytics dashboard preview for a conversion-focused website system"
              fill
              priority
              className="object-cover grayscale contrast-125"
              sizes="(max-width: 1024px) 100vw, 520px"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-ink/10 to-ink/50" />
          </div>
          <div className="absolute -bottom-6 -left-5 hidden rounded-2xl border border-ink/8 bg-white px-5 py-4 shadow-[0_20px_60px_rgba(13,13,13,0.12)] md:block">
            <p className="text-xs uppercase tracking-widest text-ink/35">System stack</p>
            <p className="mt-1 text-sm font-semibold text-ink/75">SEO + WordPress + GoHighLevel</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
