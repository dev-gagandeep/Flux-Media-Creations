"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type FaqItem = {
  q: string;
  a: string;
};

export default function HealthcareFaq({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.q}
            className={`rounded-lg border bg-white transition-colors duration-300 ${
              isOpen ? "border-flux/30" : "border-ink/10"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between gap-5 p-6 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-medium text-ink">{item.q}</span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-lg leading-none transition-all duration-300 ${
                  isOpen ? "rotate-45 border-flux bg-flux text-white" : "border-ink/10 text-ink/35"
                }`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="border-t border-ink/8 px-6 pb-6 pt-4 text-sm leading-7 text-ink/65">
                    {item.a}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
