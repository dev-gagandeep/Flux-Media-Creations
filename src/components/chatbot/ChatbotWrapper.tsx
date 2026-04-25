"use client";

import dynamic from "next/dynamic";

const FluxChat = dynamic(() => import("./FluxChat"), {
  ssr: false,
  loading: () => null,
});

export default function ChatbotWrapper() {
  return <FluxChat />;
}
