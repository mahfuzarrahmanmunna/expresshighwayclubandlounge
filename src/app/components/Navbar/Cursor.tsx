"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return; // Skip on touch
    
    const cursor = cursorRef.current!;
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.4, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.4, ease: "power3" });

    const move = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      
      const target = e.target as HTMLElement;
      const cursorText = target.closest("[data-cursor]")?.getAttribute("data-cursor");
      
      if (cursorText) {
        gsap.to(cursor, { width: 60, height: 60, backgroundColor: "rgba(240, 203, 102, 0.1)", borderColor: "#F0CB66", duration: 0.3 });
        labelRef.current!.innerText = cursorText;
        gsap.to(labelRef.current, { opacity: 1, duration: 0.3 });
      } else {
        gsap.to(cursor, { width: 6, height: 6, backgroundColor: "#F0CB66", borderColor: "transparent", duration: 0.3 });
        gsap.to(labelRef.current, { opacity: 0, duration: 0.3 });
      }
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div ref={cursorRef} className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full border border-transparent -translate-x-1/2 -translate-y-1/2 flex items-center justify-center mix-blend-difference">
      <span ref={labelRef} className="text-[10px] uppercase tracking-widest text-champagne opacity-0"></span>
    </div>
  );
}