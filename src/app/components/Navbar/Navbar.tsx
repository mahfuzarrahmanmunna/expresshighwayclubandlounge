"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";
import Cursor from "./Cursor";
import Logo from "./Logo";
import MenuButton from "./MenuButton";
import FullscreenMenu from "./FullscreenMenu";
import WebGLBackground from "./WebGLBackground";

gsap.registerPlugin(useGSAP);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on("scroll", (e: any) => {
      const scrollY = e.scroll;
      const velocity = e.velocity;

      // Toggle compact navbar
      setScrolled(scrollY > 100);
      
      // Smart hide/reveal based on velocity
      if (scrollY > 200 && velocity > 1.5) {
        setHidden(true);
      } else if (velocity < -1.5 || scrollY < 200) {
        setHidden(false);
      }
    });

    return () => lenis.destroy();
  }, []);

  // Intro Animation Timeline
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(logoRef.current, {
      opacity: 0,
      scale: 0.92,
      filter: "blur(12px)",
      y: 20,
      duration: 1.2,
      ease: "expo.out",
    })
    .from(centerRef.current, { opacity: 0, y: 20, duration: 0.8, ease: "power3.out" }, "-=0.7")
    .from(".nav-item", { opacity: 0, y: 20, duration: 0.8, stagger: 0.1, ease: "power3.out" }, "-=0.6")
    .from(".nav-line", { scaleX: 0, duration: 1, ease: "power3.out" }, "-=0.4");
  });

  return (
    <>
      <Cursor />
      <WebGLBackground />
      <header 
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 
        ${scrolled ? "bg-warm-black/72 backdrop-blur-xl border-b border-champagne/[0.18] py-4" : "py-6 md:py-8"} 
        ${hidden ? "-translate-y-[150%]" : "translate-y-0"}`}
      >
        <div className="flex items-center justify-between px-6 md:px-12 lg:px-16">
          
          {/* Left: Logo */}
          <div ref={logoRef}>
            <Logo />
          </div>

          {/* Center: Descriptor */}
          <div ref={centerRef} className="hidden lg:flex flex-col items-center text-[10px] uppercase tracking-[0.3em] text-muted-text leading-tight">
            <span>Express Highway</span>
            <span>Club & Lounge</span>
            <div className="nav-line w-8 h-px bg-champagne/50 mt-2 origin-left" />
          </div>

          {/* Right: Nav Items */}
          <div className="flex items-center gap-8">
            <button 
              className="nav-item hidden md:block text-[11px] uppercase tracking-[0.2em] text-warm-ivory/80 hover:text-champagne transition-colors"
              data-cursor="VIEW"
              onClick={() => document.getElementById('club')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore
            </button>
            <MenuButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          </div>
        </div>
      </header>
      <FullscreenMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
}