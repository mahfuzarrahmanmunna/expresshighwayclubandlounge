"use client";

import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function TheInnSection() {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Refined spring for a more responsive, "heavy" luxury feel
  const smooth = useSpring(scrollYProgress, { 
    stiffness: prefersReducedMotion ? 1000 : 100, 
    damping: prefersReducedMotion ? 100 : 30, 
    mass: 0.5 
  });

  // 1. ARCHITECTURAL PANEL MORPH (0 to 0.15 - Quick rise, smooth ease)
  const panelY = useTransform(smooth, [0, 0.15], prefersReducedMotion ? ["0%", "0%"] : ["100%", "0%"]);
  const panelRadius = useTransform(smooth, [0, 0.15], prefersReducedMotion ? ["0px", "0px"] : ["15vh", "0px"]);
  const panelShadow = useTransform(
    smooth, 
    [0, 0.15], 
    prefersReducedMotion 
      ? ["0px 0px 0px 0px rgba(0,0,0,0)", "0px 0px 0px 0px rgba(0,0,0,0)"] 
      : ["0px -50px 120px 20px rgba(0,0,0,0.9)", "0px 0px 0px 0px rgba(0,0,0,0)"]
  );

  // 2. CINEMATIC BACKGROUND IMAGE (0.05 to 1.0 - Continuous luxury motion)
  const imageClip = useTransform(smooth, [0.05, 0.25], prefersReducedMotion ? ["inset(0% 0 0 0)", "inset(0% 0 0 0)"] : ["inset(100% 0 0 0)", "inset(0% 0 0 0)"]);
  const imageScale = useTransform(smooth, prefersReducedMotion ? [0, 1] : [0.05, 0.25, 1], prefersReducedMotion ? [1, 1] : [1.3, 1.1, 1.25]);
  const imageBlur = useTransform(smooth, [0.05, 0.3], prefersReducedMotion ? ["blur(0px)", "blur(0px)"] : ["blur(20px)", "blur(0px)"]);
  const imageY = useTransform(smooth, [0.15, 1], prefersReducedMotion ? ["0%", "0%"] : ["0%", "5%"]);

  // 3. DYNAMIC TEXT CONTRAST (Transitions from dim bronze to bright gold/white)
  const textColor = useTransform(smooth, [0.15, 0.3], ["#3A322C", "#F5F3EE"]);
  const labelColor = useTransform(smooth, [0.15, 0.3], ["#3A322C", "#C5A059"]);
  const lineColor = useTransform(smooth, [0.15, 0.3], ["rgba(245,243,238,0.05)", "rgba(245,243,238,0.2)"]);
  const ghostNumberColor = useTransform(smooth, [0.15, 0.3], ["rgba(245,243,238,0.02)", "rgba(245,243,238,0.05)"]);

  // 4. EDITORIAL CONTENT ANIMATIONS (Staggered luxury reveals)
  const topBarOpacity = useTransform(smooth, [0.15, 0.25], prefersReducedMotion ? [1, 1] : [0, 1]);
  const topBarY = useTransform(smooth, [0.15, 0.25], prefersReducedMotion ? [0, 0] : [-20, 0]);
  const topLineScale = useTransform(smooth, [0.15, 0.3], prefersReducedMotion ? [1, 1] : [0, 1]);

  // Staggered Headline Mask Reveals
  const headlineMaskY1 = useTransform(smooth, prefersReducedMotion ? [0, 1] : [0.2, 0.35], prefersReducedMotion ? ["0%", "0%"] : ["110%", "0%"]);
  const headlineMaskY2 = useTransform(smooth, prefersReducedMotion ? [0, 1] : [0.25, 0.4], prefersReducedMotion ? ["0%", "0%"] : ["110%", "0%"]);

  const paragraphOpacity = useTransform(smooth, prefersReducedMotion ? [0, 1] : [0.3, 0.45], prefersReducedMotion ? [1, 1] : [0, 1]);
  const paragraphY = useTransform(smooth, prefersReducedMotion ? [0, 1] : [0.3, 0.45], prefersReducedMotion ? [0, 0] : [30, 0]);

  const pillarsOpacity = useTransform(smooth, prefersReducedMotion ? [0, 1] : [0.35, 0.5], prefersReducedMotion ? [1, 1] : [0, 1]);
  const pillarsY = useTransform(smooth, prefersReducedMotion ? [0, 1] : [0.35, 0.5], prefersReducedMotion ? [0, 0] : [40, 0]);

  return (
    <div ref={ref} className="relative z-40 h-[300vh] -mt-[100vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* Centering Wrapper for the Panel */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          
          {/* Architectural Panel - Rich Dark Onyx */}
          <motion.div
            style={{ 
              y: panelY, 
              width: "100vw",
              height: "100vh",
              borderRadius: panelRadius,
              boxShadow: panelShadow
            }}
            className="relative overflow-hidden flex flex-col bg-[#0B0B0D]"
          >
            
            {/* Deep Ambient Lighting for the Onyx State */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(197,160,89,0.08),transparent_60%)] pointer-events-none" />
            <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(26,22,18,1),transparent_70%)] pointer-events-none" />

            {/* Cinematic Image Reveal Layer */}
            <motion.div 
              style={{ clipPath: imageClip }} 
              className="absolute inset-0 z-0"
            >
              <motion.div 
                style={{ scale: imageScale, filter: imageBlur, y: imageY }} 
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src="https://images.unsplash.com/photo-1566073727765-25c947c5f7a6?q=80&w=2000&auto=format&fit=crop"
                  alt="The Inn at Express Highway Club"
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                />
                {/* Refined, cleaner cinematic gradients for dark mode readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0D]/70 via-transparent to-transparent" />
              </motion.div>
            </motion.div>

            {/* LUXURY EDITORIAL LAYOUT GRID */}
            <div className="relative z-10 flex flex-col h-full w-full px-6 sm:px-8 md:px-12 lg:px-24 py-6 md:py-12 lg:py-16 justify-between">
              
              {/* Top Bar: Asymmetric Header */}
              <motion.div 
                style={{ opacity: topBarOpacity, y: topBarY }}
                className="flex flex-col gap-3 md:gap-4 w-full"
              >
                <div className="flex justify-between items-start w-full">
                  <motion.span 
                    style={{ color: labelColor }} 
                    className="text-[9px] sm:text-[10px] md:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase font-light whitespace-nowrap"
                  >
                    04 — The Inn
                  </motion.span>
                  
                  <div className="flex items-center gap-3 md:gap-4">
                    <motion.div 
                      className="w-8 md:w-12 h-px hidden sm:block" 
                      style={{ backgroundColor: lineColor }} 
                    />
                    <motion.span 
                      style={{ color: labelColor }} 
                      className="text-sm md:text-lg font-serif tracking-[0.2em] whitespace-nowrap"
                    >
                      EHI
                    </motion.span>
                  </div>
                </div>
                {/* Expanding Luxury Divider */}
                <motion.div 
                  className="w-full h-px" 
                  style={{ backgroundColor: lineColor, scaleX: topLineScale, transformOrigin: "left" }} 
                />
              </motion.div>

              {/* Main Content Area: Split Layout */}
              <div className="flex flex-col gap-6 md:gap-16 w-full max-w-[1600px] mx-auto mt-4 md:mt-0 md:flex-row md:items-end relative">
                
                {/* Massive Ghost Number (Editorial Design Trope) */}
                <motion.span 
                  style={{ color: ghostNumberColor }}
                  className="hidden md:block absolute -top-32 -left-8 font-serif text-[18rem] xl:text-[24rem] leading-none pointer-events-none select-none z-0"
                >
                  04
                </motion.span>

                {/* Headline (Left Side, Massive, Mask Reveal) */}
                <div className="relative z-10 w-full md:w-[65%]">
                  <h2 className="font-serif text-[2rem] sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1] md:leading-[0.95] tracking-[-0.02em] drop-shadow-[0_5px_30px_rgba(0,0,0,0.5)]">
                    <span className="block overflow-hidden mb-1 md:mb-2 pb-[0.15em] md:pb-[0.2em]">
                      <motion.span 
                        style={{ color: textColor, y: headlineMaskY1 }} 
                        className="block"
                      >
                        An Architectural
                      </motion.span>
                    </span>
                    <span className="block overflow-hidden pb-[0.15em] md:pb-[0.2em]">
                      <motion.span 
                        style={{ color: textColor, y: headlineMaskY2 }} 
                        className="block italic font-extralight"
                      >
                        Haven of Rest.
                      </motion.span>
                    </span>
                  </h2>
                </div>

                {/* Right Side: Paragraph & Pillars (Stacked) */}
                <div className="relative z-10 w-full md:w-[35%] flex flex-col gap-8 md:gap-12 md:pb-4">
                  
                  {/* Paragraph */}
                  <motion.div 
                    style={{ opacity: paragraphOpacity, y: paragraphY }}
                  >
                    <motion.p 
                      style={{ color: textColor }} 
                      className="text-xs sm:text-sm md:text-base font-light leading-[1.8] md:leading-[1.9] tracking-wide opacity-80 max-w-md drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
                    >
                      More than a place to stay, The Inn at Express Highway Club is a masterpiece of modern design. We blend architectural sophistication with unparalleled comfort, offering a tranquil retreat for the discerning traveler.
                    </motion.p>
                  </motion.div>

                  {/* Pillars: Elegant horizontal strip on mobile, sophisticated list on desktop */}
                  <motion.div 
                    style={{ opacity: pillarsOpacity, y: pillarsY }}
                    className="flex flex-row md:flex-col justify-between md:justify-start gap-4 md:gap-0 border-t pt-6 md:pt-8"
                  >
                    <motion.div 
                      className="hidden md:block w-full h-px mb-6 absolute left-0" 
                      style={{ backgroundColor: lineColor, width: "calc(100% - 0px)" }} 
                    />
                    
                    {/* 01 SUITES */}
                    <motion.div className="flex flex-col items-center md:flex-row md:items-start gap-2 md:gap-6 md:py-5 md:border-b text-center md:text-left flex-1 md:flex-none" style={{ borderColor: lineColor }}>
                      <motion.span style={{ color: labelColor }} className="text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em]">01</motion.span>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between md:w-full">
                        <motion.h3 style={{ color: textColor }} className="text-[11px] md:text-base font-serif tracking-[0.15em] md:tracking-[0.2em]">SUITES</motion.h3>
                        <motion.p style={{ color: textColor }} className="text-[10px] md:text-sm font-light opacity-70 leading-relaxed max-w-[200px] hidden md:block">Meticulously designed spaces for ultimate privacy.</motion.p>
                      </div>
                    </motion.div>
                    
                    {/* 02 DESIGN */}
                    <motion.div className="flex flex-col items-center md:flex-row md:items-start gap-2 md:gap-6 md:py-5 md:border-b text-center md:text-left flex-1 md:flex-none" style={{ borderColor: lineColor }}>
                      <motion.span style={{ color: labelColor }} className="text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em]">02</motion.span>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between md:w-full">
                        <motion.h3 style={{ color: textColor }} className="text-[11px] md:text-base font-serif tracking-[0.15em] md:tracking-[0.2em]">DESIGN</motion.h3>
                        <motion.p style={{ color: textColor }} className="text-[10px] md:text-sm font-light opacity-70 leading-relaxed max-w-[200px] hidden md:block">A seamless blend of modern art and nature.</motion.p>
                      </div>
                    </motion.div>

                    {/* 03 ATMOSPHERE */}
                    <div className="flex flex-col items-center md:flex-row md:items-start gap-2 md:gap-6 md:py-5 text-center md:text-left flex-1 md:flex-none">
                      <motion.span style={{ color: labelColor }} className="text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em]">03</motion.span>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between md:w-full">
                        <motion.h3 style={{ color: textColor }} className="text-[11px] md:text-base font-serif tracking-[0.15em] md:tracking-[0.2em]">ATMOSPHERE</motion.h3>
                        <motion.p style={{ color: textColor }} className="text-[10px] md:text-sm font-light opacity-70 leading-relaxed max-w-[200px] hidden md:block">A tranquil environment crafted for deep rest.</motion.p>
                      </div>
                    </div>
                  </motion.div>

                </div>

              </div>

            </div>

            {/* Subtle Circular Typography (Ambient) */}
            <motion.div 
              className="absolute top-16 md:top-24 right-6 md:right-16 w-20 h-20 md:w-32 md:h-32 opacity-10 pointer-events-none hidden lg:block z-20"
              animate={{ rotate: 360 }} 
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }} 
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <path id="circlePath" d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
                </defs>
                <motion.text style={{ fill: labelColor }} fontSize="6" letterSpacing="2">
                  <textPath href="#circlePath">
                    THE INN • ARCHITECTURE & REST • THE INN • 
                  </textPath>
                </motion.text>
              </svg>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}