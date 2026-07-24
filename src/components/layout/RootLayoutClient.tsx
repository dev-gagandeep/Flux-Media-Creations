"use client";

import { useEffect, useRef } from "react";
import PageTransition from "@/components/ui/PageTransition";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import StickyCTA from "@/components/layout/StickyCTA";
import SmartPopup from "@/components/layout/SmartPopup";

export default function RootLayoutClient({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    let lenis: any;
    let frameId: number | undefined;
    let disposed = false;
    async function initLenis() {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (isMobile || prefersReducedMotion) return;

      const { default: Lenis } = await import("@studio-freight/lenis");
      if (disposed) return;
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });
      lenisRef.current = lenis;

      function raf(time: number) {
        lenis.raf(time);
        frameId = requestAnimationFrame(raf);
      }
      frameId = requestAnimationFrame(raf);
    }
    initLenis();
    return () => {
      disposed = true;
      if (frameId !== undefined) cancelAnimationFrame(frameId);
      lenis?.destroy();
    };
  }, []);

  return (
    <div>
      <Nav />
      <PageTransition>
        <main>{children}</main>
      </PageTransition>
      <Footer />
      <StickyCTA />
      <SmartPopup />
    </div>
  );
}
