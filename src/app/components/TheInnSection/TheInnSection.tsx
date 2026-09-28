"use client";

import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export default function TheInnSection() {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size for responsive motion values
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Smooth, responsive spring for cinematic scrolling
  const smooth = useSpring(scrollYProgress, { 
    stiffness: 80, 
    damping: 30, 
    mass: 0.5 
  });

  // 1. CINEMATIC PARALLAX (Responsive: subtle on mobile, cinematic on desktop)
  const imageY = useTransform(
    smooth, 
    [0, 1], 
    prefersReducedMotion ? ["0%", "0%"] : (isMobile ? ["0%", "4%"] : ["0%", "15%"])
  );
  const imageScale = useTransform(
    smooth, 
    [0, 1], 
    prefersReducedMotion ? [1, 1] : (isMobile ? [1.03, 1.08] : [1.08, 1.18])
  );
  
  // 2. TEXT PARALLAX & EXIT (Content stays visible, only drifts slightly and fades at the end)
  const textY = useTransform(smooth, [0, 1], prefersReducedMotion ? ["0%", "0%"] : ["0%", "-10%"]);
  const textOpacity = useTransform(smooth, prefersReducedMotion ? [0, 1, 1] : [0, 0.82, 1], prefersReducedMotion ? [1, 1, 1] : [1, 1, 0]);

  return (
    <div 
      ref={ref} 
      className="relative z-30 h-[115vh] sm:h-[125vh] md:h-[140vh] w-full bg-[#0B0B0D] overflow-x-hidden overflow-y-hidden"
    >
      <div className="sticky top-0 h-[100svh] md:h-screen w-full overflow-hidden flex flex-col justify-start md:justify-center">
        
        {/* =========================================
            1. CINEMATIC IMAGE LAYER (Smooth Parallax)
            ========================================= */}
        <motion.div 
          style={{ y: imageY, scale: imageScale }} 
          className="absolute inset-0 z-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1566073727765-25c947c5f7a6?q=80&w=2000&auto=format&fit=crop"
            alt="The Inn at Express Highway Club"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>

        {/* =========================================
            2. CINEMATIC GRADING & READABILITY
            ========================================= */}
        {/* Heavy Left Gradient for Text Readability */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0B0B0D] via-[#0B0B0D]/80 to-transparent pointer-events-none" />
        {/* Bottom Gradient for Grounding */}
        <div className="absolute inset-x-0 bottom-0 z-10 h-1/3 bg-gradient-to-t from-[#0B0B0D] to-transparent pointer-events-none" />
        
        {/* Ambient Gold Atmosphere */}
        <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_top_right,_rgba(197,160,89,0.08),transparent_60%)] pointer-events-none" />
        
        {/* Fine Grain Texture */}
        <div className="absolute inset-0 z-20 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }} />

        {/* =========================================
            3. LUXURY EDITORIAL CONTENT
            ========================================= */}
        <motion.div 
          style={{ y: textY, opacity: textOpacity }}
          // Mobile: justify-start with top padding. Desktop: justify-center.
          // Safe area bottom padding included for mobile.
          className="relative z-30 flex flex-col w-full max-w-[1600px] mx-auto px-5 sm:px-8 md:px-12 lg:px-24 gap-8 md:gap-12 lg:gap-16 pt-24 pb-[calc(2.5rem+env(safe-area-inset-bottom))] md:pt-0 md:pb-0 md:h-full md:flex-row md:items-end"
        >
          
          {/* Left Side: Massive Headline */}
          <div className="relative w-full md:w-[65%]">
            {/* Ghost Number (Desktop Only) */}
            <span className="hidden md:block absolute -top-32 -left-8 font-serif text-[18rem] xl:text-[24rem] leading-none pointer-events-none select-none text-[#F5F3EE]/[0.03]">
              04
            </span>

            {/* Eyebrow */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-4 mb-5 md:mb-6 relative z-10"
            >
              <div className="w-10 md:w-16 h-px bg-[#C5A059]" />
              <span className="text-[#C5A059] text-[10px] md:text-xs tracking-[0.4em] uppercase font-light whitespace-nowrap">
                04 - The Inn
              </span>
            </motion.div>

            {/* Headline */}
            <h2 className="font-serif text-[2.15rem] sm:text-5xl md:text-7xl lg:text-8xl text-[#F5F3EE] leading-[0.95] tracking-[-0.02em] drop-shadow-[0_5px_30px_rgba(0,0,0,0.5)] relative z-10">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className="block mb-1 md:mb-2 pb-[0.1em] md:pb-[0.15em]"
              >
                An Architectural
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="block pb-[0.1em] md:pb-[0.15em] italic font-extralight text-[#F5F3EE]/80"
              >
                Haven of Rest.
              </motion.span>
            </h2>
          </div>

          {/* Right Side: Paragraph & Pillars */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="relative z-10 w-full md:w-[35%] flex flex-col gap-7 md:gap-10 md:pb-4"
          >
            {/* Paragraph */}
            <p className="text-[#F5F3EE]/70 text-sm md:text-base font-light leading-[1.75] md:leading-[1.9] tracking-wide max-w-[90%] md:max-w-md drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              More than a place to stay, The Inn at Express Highway Club is a masterpiece of modern design. We blend architectural sophistication with unparalleled comfort, offering a tranquil retreat for the discerning traveler.
            </p>

            {/* Pillars List */}
            <div className="flex flex-col border-t border-[#F5F3EE]/15 pt-6 md:pt-8">
              {/* 01 SUITES */}
              <div className="flex flex-row items-center justify-between gap-4 md:gap-6 py-4 border-b border-[#F5F3EE]/15">
                <div className="flex items-center gap-4 md:gap-6">
                  <span className="text-[#C5A059] text-[10px] tracking-[0.3em]">01</span>
                  <h3 className="text-[#F5F3EE] text-sm md:text-base font-serif tracking-[0.2em]">SUITES</h3>
                </div>
                {/* Description hidden on mobile for compactness */}
                <p className="text-[#F5F3EE]/50 text-xs md:text-sm font-light hidden md:block max-w-[200px] text-right">Meticulously designed spaces for ultimate privacy.</p>
              </div>
              
              {/* 02 DESIGN */}
              <div className="flex flex-row items-center justify-between gap-4 md:gap-6 py-4 border-b border-[#F5F3EE]/15">
                <div className="flex items-center gap-4 md:gap-6">
                  <span className="text-[#C5A059] text-[10px] tracking-[0.3em]">02</span>
                  <h3 className="text-[#F5F3EE] text-sm md:text-base font-serif tracking-[0.2em]">DESIGN</h3>
                </div>
                <p className="text-[#F5F3EE]/50 text-xs md:text-sm font-light hidden md:block max-w-[200px] text-right">A seamless blend of modern art and nature.</p>
              </div>

              {/* 03 ATMOSPHERE */}
              <div className="flex flex-row items-center justify-between gap-4 md:gap-6 py-4">
                <div className="flex items-center gap-4 md:gap-6">
                  <span className="text-[#C5A059] text-[10px] tracking-[0.3em]">03</span>
                  <h3 className="text-[#F5F3EE] text-sm md:text-base font-serif tracking-[0.2em]">ATMOSPHERE</h3>
                </div>
                <p className="text-[#F5F3EE]/50 text-xs md:text-sm font-light hidden md:block max-w-[200px] text-right">A tranquil environment crafted for deep rest.</p>
              </div>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </div>
  );
}