"use client";

import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const addHoverListeners = () => {
      const els = document.querySelectorAll("a, button, [data-cursor='hover'], .service-card, .work-card");
      els.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovering(true));
        el.addEventListener("mouseleave", () => setIsHovering(false));
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    addHoverListeners();

    let animFrame: number;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      cursorX = lerp(cursorX, mouseX, 0.1);
      cursorY = lerp(cursorY, mouseY, 0.1);
      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
      animFrame = requestAnimationFrame(animate);
    };
    animFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <>
      {/* Large follower circle */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
        style={{ willChange: "transform" }}
      >
        <div
          className="w-10 h-10 rounded-full border border-ink -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
          style={{
            transform: `translate(-50%, -50%) scale(${isHovering ? 2.5 : isClicking ? 0.8 : 1})`,
            background: isHovering ? "var(--flux)" : "transparent",
            borderColor: "#FF5C35",
            mixBlendMode: isHovering ? "normal" : "difference",
          }}
        />
      </div>
      {/* Small dot — instant */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[10000] hidden md:block"
        style={{ willChange: "transform" }}
      >
        <div
          className="w-1.5 h-1.5 rounded-full bg-ink -translate-x-1/2 -translate-y-1/2"
          style={{
            background: "#FF5C35",
            transform: `translate(-50%, -50%) scale(${isClicking ? 0.5 : 1})`,
            transition: "transform 0.15s ease",
            mixBlendMode: isHovering ? "normal" : "difference",
          }}
        />
      </div>
    </>
  );
}
