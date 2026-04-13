"use client";

import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export default function TextReveal({
  text,
  className = "",
  delay = 0,
  as: Tag = "h2",
}: TextRevealProps) {
  const words = text.split(" ");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="word-reveal">
          <span
            className="word-inner"
            style={{
              transform: inView ? "translateY(0)" : "translateY(110%)",
              transition: `transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay + i * 0.05}s`,
            }}
          >
            {word}
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  );
}
