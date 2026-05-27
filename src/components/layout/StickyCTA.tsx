"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function StickyCTA() {
  const pathname = usePathname();

  if (pathname === "/contact" || pathname === "/book-a-call" || pathname === "/student-portfolio") {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-4 z-[45] px-4 md:bottom-6 md:px-6 pointer-events-none">
      <div className="mx-auto flex max-w-[720px] items-center justify-between gap-4 rounded-xl border border-ink/10 bg-cream/95 p-3 shadow-[0_18px_70px_rgba(13,13,13,0.18)] backdrop-blur-md pointer-events-auto md:p-4">
        <div className="min-w-0">
          <p className="font-display text-base font-semibold leading-tight text-ink md:text-xl" style={{ letterSpacing: "-0.02em" }}>
            Want more leads from your website?
          </p>
          <p className="mt-1 hidden text-sm leading-5 text-ink/55 sm:block">
            Get a free growth review and see what is stopping visitors from becoming booked calls.
          </p>
        </div>
        <Link
          href="/contact"
          className="shrink-0 rounded-lg px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--flux-dark)] md:px-5"
          style={{ background: "var(--flux)" }}
        >
          Get More Leads →
        </Link>
      </div>
    </div>
  );
}
