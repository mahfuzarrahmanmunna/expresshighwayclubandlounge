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
      const scrollY = e.scroll || 0;
      const velocity = e.velocity || 0;

      // Toggle compact navbar
      setScrolled(scrollY > 50);
      
      // Smart hide/reveal based on velocity and scroll position
      if (scrollY > 300 && velocity > 1.5) {
        setHidden(true);
      } else if (velocity < -1.5 || scrollY < 300) {
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
    .from(centerRef.current, { 
      opacity: 0, 
      y: 20, 
      duration: 0.8, 
      ease: "power3.out" 
    }, "-=0.7")
    .from(".nav-item", { 
      opacity: 0, 
      y: 20, 
      duration: 0.8, 
      stagger: 0.1, 
      ease: "power3.out" 
    }, "-=0.6")
    .from(".nav-line", { 
      scaleX: 0, 
      duration: 1, 
      ease: "power3.out" 
    }, "-=0.4");
  });

  return (
    <>
      <Cursor />
      <WebGLBackground />
      <header 
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] 
        ${
          scrolled 
            ? "bg-[#0B0B0D]/70 backdrop-blur-xl border-b border-[#C5A059]/15 py-4" 
            : "bg-transparent py-6 md:py-8"
        } 
        ${hidden ? "-translate-y-full" : "translate-y-0"}`}
      >
        <div className="flex items-center justify-between px-6 md:px-12 lg:px-16">
          
          {/* Left: Logo */}
          <div ref={logoRef} className="flex items-center">
            <Logo />
          </div>

          {/* Center: Architectural Descriptor */}
          <div 
            ref={centerRef} 
            className="hidden lg:flex flex-col items-center text-[9px] uppercase tracking-[0.4em] text-[#F5F3EE]/50 leading-tight font-sans font-light"
          >
            <span>Express Highway</span>
            <span className="text-[#C5A059] mt-1">Club & Lounge</span>
            <div className="nav-line w-8 h-px bg-[#C5A059]/40 mt-3 origin-center" />
          </div>

          {/* Right: Nav Items */}
          <div className="flex items-center gap-6 md:gap-8">
            <button 
              className="nav-item group relative hidden md:block text-[10px] uppercase tracking-[0.3em] text-[#F5F3EE]/80 hover:text-[#C5A059] transition-colors duration-300 font-light font-sans"
              data-cursor="VIEW"
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore
              {/* Subtle underline expand on hover */}
              <div className="absolute left-0 -bottom-1.5 w-0 h-px bg-[#C5A059] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full"></div>
            </button>
            <MenuButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          </div>
        </div>
      </header>
      <FullscreenMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
}