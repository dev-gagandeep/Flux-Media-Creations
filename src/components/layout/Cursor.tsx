"use client";

import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const supportsFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!supportsFinePointer) return;

    document.documentElement.classList.add("has-custom-cursor");
    const interactiveSelector = "a, button, input, textarea, select, [role='button'], [data-cursor='hover']";

    const moveCursor = () => {
      cursor.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0) translate(-50%, -50%)`;
      rafRef.current = null;
    };

    const onMouseMove = (e: MouseEvent) => {
      positionRef.current = { x: e.clientX, y: e.clientY };
      if (rafRef.current === null) {
        rafRef.current = window.requestAnimationFrame(moveCursor);
      }
      setIsVisible(true);
      setIsHovering(Boolean((e.target as Element | null)?.closest(interactiveSelector)));
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseDown = () => setIsPressed(true);
    const onMouseUp = () => setIsPressed(false);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      if (rafRef.current !== null) window.cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  const size = isHovering ? 34 : 16;

  return (
    <div
      ref={cursorRef}
      className="fixed left-0 top-0 pointer-events-none z-[10000] hidden rounded-full border-2 md:block"
      aria-hidden="true"
      style={{
        width: size,
        height: size,
        borderColor: "var(--flux)",
        background: isHovering ? "rgba(255, 92, 53, 0.14)" : "transparent",
        opacity: isVisible ? 1 : 0,
        scale: isPressed ? 0.75 : 1,
        transition: "width 160ms ease, height 160ms ease, opacity 160ms ease, scale 120ms ease, background-color 160ms ease",
        willChange: "transform, width, height, opacity",
      }}
    />
  );
}
