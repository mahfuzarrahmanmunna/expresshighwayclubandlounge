"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Logo from "./Logo";
import MenuButton from "./MenuButton";
import FullscreenMenu from "./FullscreenMenu";

gsap.registerPlugin(useGSAP);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let lastScrollTop = 0;
    
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const scrollDiff = currentScroll - lastScrollTop;

      // Set background state
      setScrolled(currentScroll > 40);

      // Hide on scroll down, show on scroll up
      if (currentScroll > 300 && scrollDiff > 2) {
        setHidden(true);
      } else if (scrollDiff < -2 || currentScroll < 300) {
        setHidden(false);
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    tl.from(logoRef.current, {
      opacity: 0,
      scale: 0.95,
      filter: "blur(12px)",
      y: 20,
      duration: 1.2,
    })
    .from(
      centerRef.current,
      {
        opacity: 0,
        y: 15,
        filter: "blur(8px)",
        duration: 1,
      },
      "-=0.8"
    )
    .from(
      ".nav-item",
      {
        opacity: 0,
        y: 18,
        duration: 0.8,
        stagger: 0.1,
      },
      "-=0.7"
    )
    .from(
      ".nav-line",
      {
        scaleX: 0,
        duration: 1.2,
        ease: "power2.inOut",
      },
      "-=0.6"
    );
  });

  return (
    <>
      <header
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] overflow-hidden
        ${
          scrolled
            ? "bg-[#0B0B0D]/80 backdrop-blur-xl border-b border-[#C5A059]/15 py-4 shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
            : "bg-transparent py-6 md:py-8"
        }
        ${hidden ? "-translate-y-full pointer-events-none" : "translate-y-0"}`}
      >
        {/* Subtle top radial glow for luxury atmosphere */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[100%] bg-[radial-gradient(ellipse_at_top,_rgba(197,160,89,0.08),transparent_60%)] pointer-events-none" />

        <div className="relative flex items-center justify-between w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
          
          {/* Left: Logo */}
          <div ref={logoRef} className="flex items-center z-20">
            <Logo />
          </div>

          {/* Center: Elegant Typography Crest */}
          <div
            ref={centerRef}
            className="hidden lg:flex flex-col items-center text-center leading-none z-20 pointer-events-none"
          >
            <span className="block text-[8px] uppercase tracking-[0.5em] text-[#F5F3EE]/50 mb-2 font-sans font-light">
              Express Highway
            </span>
            <span className="block font-serif text-[14px] italic tracking-[0.15em] text-[#C5A059] mb-3 font-normal">
              Club & Lounge
            </span>
            <div className="nav-line w-12 h-px bg-gradient-to-r from-transparent via-[#C5A059]/60 to-transparent origin-center" />
          </div>

          {/* Right: Navigation Actions */}
          <div className="flex items-center gap-8 md:gap-12 z-20">
            <button
              className="nav-item group relative hidden md:flex items-center gap-2.5 text-[10px] uppercase tracking-[0.35em] text-[#F5F3EE]/70 hover:text-[#F5F3EE] transition-colors duration-500 font-sans font-light"
              data-cursor="VIEW"
              onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span className="relative pb-1">
                Explore
                {/* Elegant underline grows from left */}
                <span className="absolute left-0 bottom-0 w-full h-px bg-[#C5A059] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              </span>
              {/* Small luxury indicator dot */}
              <span className="w-[3px] h-[3px] rounded-full bg-[#C5A059] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </button>
            
            <div className="nav-item">
              <MenuButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            </div>
          </div>
        </div>
      </header>
      
      <FullscreenMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
}