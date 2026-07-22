"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function StickyCTA() {
  const pathname = usePathname();
  const strategicRoutes = new Set([
    "/operating-intelligence",
    "/philosophy",
    "/the-problem",
    "/solutions",
    "/patient-revenue-system",
    "/revenue-intelligence",
    "/customer-progression",
    "/ai-discovery",
    "/business-intelligence-audit",
    "/industries/healthcare",
    "/industries/home-services",
    "/industries/legal",
    "/industries/wellness",
  ]);

  if (pathname === "/contact" || pathname === "/book-a-call" || pathname === "/student-portfolio" || strategicRoutes.has(pathname)) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-4 z-[45] px-4 md:bottom-6 md:px-6 pointer-events-none">
      <div className="mx-auto flex max-w-[720px] items-center justify-between gap-4 rounded-xl border border-ink/10 bg-cream/95 p-3 shadow-[0_18px_70px_rgba(13,13,13,0.18)] backdrop-blur-md pointer-events-auto md:p-4">
        <div className="min-w-0">
          <p className="font-display text-base font-semibold leading-tight text-ink md:text-xl" style={{ letterSpacing: "-0.02em" }}>
            How connected is your operating system?
          </p>
          <p className="mt-1 hidden text-sm leading-5 text-ink/55 sm:block">
            Measure discovery, capture, progression, connection, and revenue visibility.
          </p>
        </div>
        <Link
          href="/business-intelligence-audit"
          className="shrink-0 rounded-lg px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--flux-dark)] md:px-5"
          style={{ background: "var(--flux)" }}
        >
          Measure Your Score →
        </Link>
      </div>
    </div>
  );
}
