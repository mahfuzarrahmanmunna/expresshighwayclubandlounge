"use client";
import { useRef } from "react";
import { gsap } from "gsap";

export default function MagneticButton({ children, onClick }: { children: React.ReactNode, onClick?: () => void }) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const arrowRef = useRef<HTMLSpanElement>(null);

  const onMouseMove = (e: React.MouseEvent) => {
    const btn = btnRef.current!;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(btn, { x: x * 0.3, y: y * 0.4, duration: 0.8, ease: "power3.out" });
    gsap.to(textRef.current, { x: x * 0.1, y: y * 0.2, duration: 0.8, ease: "power3.out" });
    gsap.to(arrowRef.current, { x: 8, duration: 0.4, ease: "power2.out" });
  };

  const onMouseLeave = () => {
    gsap.to(btnRef.current, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.3)" });
    gsap.to(textRef.current, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.3)" });
    gsap.to(arrowRef.current, { x: 0, duration: 0.4, ease: "power2.out" });
  };

  return (
    <button 
      ref={btnRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      data-cursor="EXPLORE"
      className="relative flex items-center gap-3 px-8 py-4 border border-warm-ivory/30 text-warm-ivory hover:border-champagne transition-colors duration-500 group overflow-hidden"
    >
      {/* Background fill on hover */}
      <span className="absolute inset-0 bg-champagne scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-expo-out"></span>
      
      <span ref={textRef} className="relative z-10 text-[11px] uppercase tracking-[0.3em] font-medium group-hover:text-warm-black transition-colors duration-300">
        {children}
      </span>
      <span ref={arrowRef} className="relative z-10 text-lg group-hover:text-warm-black transition-colors duration-300">↗</span>
    </button>
  );
}