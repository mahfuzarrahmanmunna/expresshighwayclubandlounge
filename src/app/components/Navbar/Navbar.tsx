"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
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

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const velocity = Math.abs(window.scrollY - (handleScroll.lastY ?? scrollY));
      handleScroll.lastY = scrollY;

      setScrolled(scrollY > 40);

      if (scrollY > 260 && velocity > 1.4) {
        setHidden(true);
      } else if (velocity < 1 || scrollY < 180) {
        setHidden(false);
      }
    };

    handleScroll.lastY = 0;
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(logoRef.current, {
      opacity: 0,
      scale: 0.96,
      filter: "blur(8px)",
      y: 18,
      duration: 0.96,
      ease: "power3.out",
    })
      .from(
        centerRef.current,
        {
          opacity: 0,
          y: 16,
          duration: 0.75,
          ease: "power3.out",
        },
        "-=0.6"
      )
      .from(
        ".nav-item",
        {
          opacity: 0,
          y: 18,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .from(
        ".nav-line",
        {
          scaleX: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.3"
      );
  });

  return (
    <>
      <Cursor />
      <WebGLBackground />
      <header
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-100 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${
          scrolled
            ? "bg-[#0B0B0D]/70 backdrop-blur-xl border-b border-[#C5A059]/15 py-4"
            : "bg-transparent py-6 md:py-8"
        }
        ${hidden ? "-translate-y-full" : "translate-y-0"}`}
      >
        <div className="flex items-center justify-between px-6 md:px-12 lg:px-16">
          <div ref={logoRef} className="flex items-center">
            <Logo />
          </div>

          <div
            ref={centerRef}
            className="hidden lg:flex flex-col items-center text-[9px] uppercase tracking-[0.4em] text-[#F5F3EE]/50 leading-tight font-sans font-light"
          >
            <span>Express Highway</span>
            <span className="text-[#C5A059] mt-1">Club & Lounge</span>
            <div className="nav-line w-8 h-px bg-[#C5A059]/40 mt-3 origin-center" />
          </div>

          <div className="flex items-center gap-6 md:gap-8">
            <button
              className="nav-item group relative hidden md:block text-[10px] uppercase tracking-[0.3em] text-[#F5F3EE]/80 hover:text-[#C5A059] transition-colors duration-300 font-light font-sans"
              data-cursor="VIEW"
              onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore
              <div className="absolute left-0 -bottom-1.5 w-0 h-px bg-[#C5A059] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full" />
            </button>
            <MenuButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          </div>
        </div>
      </header>
      <FullscreenMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
}