"use client";

import { useEffect, useRef } from "react";
import Cursor from "@/components/layout/Cursor";
import PageTransition from "@/components/ui/PageTransition";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export default function RootLayoutClient({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    let lenis: any;
    async function initLenis() {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (isMobile || prefersReducedMotion) return;

      const { default: Lenis } = await import("@studio-freight/lenis");
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });
      lenisRef.current = lenis;

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }
    initLenis();
    return () => { lenis?.destroy(); };
  }, []);

  return (
    <div>
      <Cursor />
      <Nav />
      <PageTransition>
        <main>{children}</main>
      </PageTransition>
      <Footer />
    </div>
  );
}
