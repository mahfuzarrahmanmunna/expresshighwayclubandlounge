"use client";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { navigation } from "../../data/navigation";

gsap.registerPlugin(useGSAP);

export default function FullscreenMenu({ menuOpen, setMenuOpen }: { menuOpen: boolean, setMenuOpen: (v: boolean) => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [activeImage, setActiveImage] = useState(navigation[0].image);

  useGSAP(() => {
    if (menuOpen) {
      gsap.to(containerRef.current, { clipPath: "inset(0% 0% 0% 0%)", duration: 0.8, ease: "expo.out" });
      gsap.from(".menu-item", { 
        y: 100, 
        opacity: 0, 
        stagger: 0.08, 
        duration: 0.8, 
        ease: "power3.out", 
        delay: 0.2 
      });
    } else {
      gsap.to(containerRef.current, { clipPath: "inset(0% 0% 100% 0%)", duration: 0.6, ease: "expo.inOut" });
    }
  }, [menuOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [setMenuOpen]);

  const handleHover = (href: string, image: string) => {
    setActiveImage(image);
    gsap.to(imageRef.current, { opacity: 1, scale: 1, duration: 0.6, ease: "power3.out" });
  };

  const handleLeave = () => {
    gsap.to(imageRef.current, { opacity: 0, scale: 0.85, duration: 0.4, ease: "power3.out" });
  };

  return (
    <div 
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full z-[90] bg-warm-black"
      style={{ clipPath: menuOpen ? "inset(0% 0% 0% 0%)" : "inset(0% 0% 100% 0%)" }}
    >
      {/* Hidden WebGL Wave is visible through this transparent overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-warm-black via-warm-black/95 to-warm-black/80" />
      
      {/* Floating Parallax Image */}
      <div className="absolute right-20 top-1/2 -translate-y-1/2 w-[400px] h-[500px] overflow-hidden hidden lg:block pointer-events-none">
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
              <span className="text-sm text-champagne/50 font-sans">{item.number}</span>
              <a href={item.href} data-cursor="GO" className="font-serif text-warm-ivory hover:text-champagne transition-colors duration-300 text-[clamp(2.5rem,8vw,7rem)] leading-[1.1] tracking-tight">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        
        <div className="absolute bottom-8 right-8 text-[10px] uppercase tracking-[0.3em] text-muted-text">
          Express Highway Club
        </div>
      </div>
    </div>
  );
}

import { useEffect } from "react"; // Fix import for useEffect