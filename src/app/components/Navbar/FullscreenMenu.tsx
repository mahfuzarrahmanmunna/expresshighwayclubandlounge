"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { navigation } from "../../data/navigation";

gsap.registerPlugin(useGSAP);

export default function FullscreenMenu({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: (v: boolean) => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [activeImage, setActiveImage] = useState(navigation[0].image);

  useGSAP(() => {
    if (!containerRef.current) return;

    if (menuOpen) {
      gsap.to(containerRef.current, { clipPath: "inset(0% 0% 0% 0%)", duration: 0.7, ease: "power3.out" });
      gsap.from(".menu-item", {
        y: 96,
        opacity: 0,
        stagger: 0.06,
        duration: 0.75,
        ease: "power3.out",
        delay: 0.18,
      });
    } else {
      gsap.to(containerRef.current, { clipPath: "inset(0% 0% 100% 0%)", duration: 0.55, ease: "power2.inOut" });
    }
  }, [menuOpen]);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [setMenuOpen]);

  const handleHover = (_href: string, image: string) => {
    setActiveImage(image);
    if (imageRef.current) {
      gsap.to(imageRef.current, { opacity: 1, scale: 1, duration: 0.45, ease: "power3.out" });
    }
  };

  const handleLeave = () => {
    if (imageRef.current) {
      gsap.to(imageRef.current, { opacity: 0, scale: 0.9, duration: 0.35, ease: "power2.out" });
    }
  };

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full z-90 bg-[#120F0E]"
      style={{ clipPath: menuOpen ? "inset(0% 0% 0% 0%)" : "inset(0% 0% 100% 0%)" }}
    >
      <div className="absolute inset-0 bg-linear-to-r from-[#120F0E] via-[#120F0E]/95 to-[#120F0E]/80" />

      <div className="absolute right-20 top-1/2 -translate-y-1/2 w-100 h-125 overflow-hidden hidden lg:block pointer-events-none">
        <img
          ref={imageRef}
          src={activeImage}
          alt="Menu Preview"
          className="w-full h-full object-cover opacity-0"
          style={{ filter: "brightness(0.8) contrast(1.1)" }}
        />
      </div>

      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-12 lg:px-16">
        <ul>
          {navigation.map((item) => (
            <li
              key={item.href}
              className="menu-item flex items-baseline gap-6 group cursor-pointer"
              onMouseEnter={() => handleHover(item.href, item.image)}
              onMouseLeave={handleLeave}
              onClick={() => setMenuOpen(false)}
            >
              <span className="text-sm text-[#D9B77F]/60 font-sans">{item.number}</span>
              <a href={item.href} data-cursor="GO" className="font-serif text-[#F5F3EE] hover:text-[#D9B77F] transition-colors duration-300 text-[clamp(2.5rem,8vw,7rem)] leading-[1.1] tracking-tight">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="absolute bottom-8 right-8 text-[10px] uppercase tracking-[0.3em] text-[#C7C0B2]">
          Express Highway Club
        </div>
      </div>
    </div>
  );
}