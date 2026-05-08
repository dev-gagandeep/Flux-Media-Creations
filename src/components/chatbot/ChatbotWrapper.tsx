"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const FluxChat = dynamic(() => import("./FluxChat"), {
  ssr: false,
  loading: () => null,
});

export default function ChatbotWrapper() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const load = () => setShouldLoad(true);
    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    if ("requestIdleCallback" in window && typeof window.requestIdleCallback === "function") {
      idleId = window.requestIdleCallback(load, { timeout: 3500 });
    } else {
      timeoutId = setTimeout(load, 2500);
    }

    return () => {
      if (idleId !== undefined && "cancelIdleCallback" in window && typeof window.cancelIdleCallback === "function") {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId !== undefined) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return shouldLoad ? <FluxChat /> : null;
}
