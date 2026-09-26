"use client";
import { useRef } from "react";
import { gsap } from "gsap";

export default function MenuButton({ menuOpen, setMenuOpen }: { menuOpen: boolean, setMenuOpen: (v: boolean) => void }) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const circleRef = useRef<HTMLSpanElement>(null);
  const arrowRef = useRef<HTMLSpanElement>(null);

  // Magnetic effect
  const onMouseMove = (e: React.MouseEvent) => {
    const btn = btnRef.current!;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.4, ease: "power3.out" });
    gsap.to(circleRef.current, { x: x * 0.5, y: y * 0.5, duration: 0.4, ease: "power3.out" });
  };

  const onMouseLeave = () => {
    gsap.to(btnRef.current, { x: 0, y: 0, duration: 0.4, ease: "elastic.out(1, 0.3)" });
    gsap.to(circleRef.current, { x: 0, y: 0, duration: 0.4, ease: "elastic.out(1, 0.3)" });
  };

  return (
    <button 
      ref={btnRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={() => setMenuOpen(!menuOpen)}
      data-cursor="OPEN"
      className="flex items-center gap-3 group"
      aria-label={menuOpen ? "Close navigation" : "Open navigation"}
    >
      <span className={`text-[11px] uppercase tracking-[0.2em] transition-colors ${menuOpen ? "text-champagne" : "text-warm-ivory"}`}>
        {menuOpen ? "Close" : "Menu"}
      </span>
      <div className="relative w-8 h-8 flex items-center justify-center">
        <span ref={circleRef} className="absolute w-2 h-2 rounded-full bg-champagne transition-all duration-500 group-hover:scale-150" 
          style={{ transform: menuOpen ? "scale(0)" : "scale(1)" }}
        />
        {/* Abstract Plus/Close icon */}
        <div className="absolute w-4 h-4 flex flex-col justify-center items-center">
          <span className={`block w-3 h-px bg-champagne transition-all duration-300 ${menuOpen ? "rotate-45 w-3" : "w-2"}`} />
          <span className={`block w-3 h-px bg-champagne mt-[2px] transition-all duration-300 ${menuOpen ? "-rotate-45 w-3 -mt-[3px]" : "w-2"}`} />
        </div>
      </div>
    </button>
  );
}