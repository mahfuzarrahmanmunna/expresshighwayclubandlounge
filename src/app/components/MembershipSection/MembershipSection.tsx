"use client";

import { motion, useScroll, useTransform, useSpring, useReducedMotion, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect, useState, MouseEvent } from "react";

export default function MembershipSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const progress = useSpring(scrollYProgress, { stiffness: 180, damping: 30, mass: 0.25 });

  const headerY = useTransform(progress, [0, 0.1, 0.9, 1], [0, -10, -10, -30]);
  const headerOpacity = useTransform(progress, [0, 0.1, 0.9, 1], [1, 1, 1, 0.8]);

  const cardsY = useTransform(progress, [0, 0.15, 0.9, 1], [30, 0, 0, -20]);
  const cardsOpacity = useTransform(progress, [0, 0.08], [0.85, 1]);
  const cardsScale = useTransform(progress, [0, 0.15], [0.96, 1]);

  const contentY = useTransform(progress, [0.05, 0.2, 0.9, 1], [30, 0, 0, -10]);
  const contentOpacity = useTransform(progress, [0.05, 0.12], [0.75, 1]);
  const textMaskY = useTransform(progress, [0.05, 0.15], ["110%", "0%"]);

  const lightSweepX = useTransform(progress, [0.3, 0.5], ["-150%", "250%"]);
  const lightSweepOpacity = useTransform(progress, [0.3, 0.4, 0.5], [0, 1, 0]);
  const globalExitY = useTransform(progress, [0.85, 1], ["0%", "-4%"]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 150, damping: 20, mass: 0.5 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 150, damping: 20, mass: 0.5 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !isDesktop) return;
    const rect = stickyRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const leftMouseRotateX = useTransform(smoothMouseY, [-0.5, 0.5], [-2, 2]);
  const leftMouseRotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-4, 4]);
  const bgMouseX = useTransform(smoothMouseX, [-0.5, 0.5], ["-10%", "10%"]);
  const bgMouseY = useTransform(smoothMouseY, [-0.5, 0.5], ["-10%", "10%"]);

  // Single Unified Card Visual
  const CardVisual = () => {
    return (
      <div className="relative w-full h-full">
        {/* Ultra-Luxurious Soft Gold Drop Shadow */}
        <div className="absolute -inset-8 rounded-3xl bg-[#C5A059] opacity-20 blur-3xl pointer-events-none" />
        
        {/* Physical Card Frame */}
        <div 
          className="relative w-full h-full rounded-2xl overflow-hidden bg-[#c59f5907] border border-[#C5A059]/40"
          style={{ boxShadow: "0 50px 100px -20px rgba(11,11,13,0.4), 0 30px 60px -30px rgba(197,160,89,0.4)" }}
        >
          <Image
            src="/card/Loyality Card .webp"
            alt="Express Highway Club Membership Card"
            fill
            sizes="(max-width: 768px) 90vw, 500px"
            className="object-contain object-center pointer-events-none z-10"
          />
          
          {/* Subtle Glass/Metallic Edge Treatment */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-[#C5A059]/10 pointer-events-none z-20" />
          
          {/* Light Reflection Sweep */}
          <motion.div
            style={{ 
              x: lightSweepX, 
              opacity: lightSweepOpacity,
              backgroundImage: "linear-gradient(to right, transparent, #F7F5F0, #C5A059, transparent)"
            }}
            className="absolute inset-y-0 w-1/2 blur-xl z-30 pointer-events-none"
          />
        </div>
      </div>
    );
  };

  return (
    <div ref={containerRef} className="relative z-20 h-auto md:h-[140vh] w-full bg-[#F7F5F0] overflow-x-hidden">
      <motion.div 
        ref={stickyRef}
        onMouseMove={handleMouseMove}
        style={{ y: isDesktop ? globalExitY : 0 }}
        className="relative md:sticky top-0 h-auto md:h-screen w-full overflow-x-hidden md:overflow-hidden flex flex-col items-center justify-center py-24 md:py-16 [perspective:1400px]"
      >
        
        {/* --- Architectural Background Atmosphere --- */}
        <motion.div 
          style={{ x: isDesktop ? bgMouseX : 0, y: isDesktop ? bgMouseY : 0 }} 
          className="absolute inset-0 z-0 pointer-events-none"
        >
          {/* Warm Gold Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-[radial-gradient(ellipse_at_center,_rgba(197,160,89,0.1),transparent_70%)]" />
        </motion.div>
        
        {/* Massive Architectural Ghost Number */}
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[30rem] sm:text-[40rem] md:text-[50rem] lg:text-[60rem] text-[#0B0B0D] whitespace-nowrap pointer-events-none select-none leading-none z-0 opacity-[0.03]">
          02
        </span>
        
        {/* Subtle Vignette */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(11,11,13,0.05)_100%)] pointer-events-none" />
        
        {/* Fine Grain Texture */}
        <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none mix-blend-multiply" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }} />

        {/* ==========================================
            EDITORIAL SPLIT LAYOUT
            ========================================== */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 w-full max-w-7xl mx-auto px-6 md:px-12 items-center">
          
          {/* Left Column: Typography & Content */}
          <motion.div 
            style={{ opacity: contentOpacity, y: contentY }}
            className="flex flex-col gap-8 md:pr-8 order-2 md:order-1"
          >
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 md:w-16 h-px bg-[#C5A059]" />
                <span className="text-[#987D3E] text-[10px] md:text-xs tracking-[0.4em] uppercase font-light whitespace-nowrap">
                  02 — The Membership
                </span>
              </div>
              
              <h2 className="font-serif text-[2.5rem] sm:text-6xl md:text-7xl lg:text-8xl text-[#0B0B0D] leading-[0.9] tracking-[-0.02em] font-normal text-center md:text-left">
                <span className="block overflow-hidden mb-2 pb-[0.1em]">
                  <motion.span style={{ y: textMaskY }} className="block">The Art of</motion.span>
                </span>
                <span className="block overflow-hidden pb-[0.1em]">
                  <motion.span style={{ y: textMaskY, delay: 0.2 }} className="block italic font-extralight text-[#0B0B0D]/70">Access.</motion.span>
                </span>
              </h2>
            </div>

            <div className="flex flex-col gap-6 max-w-md mx-auto md:mx-0">
              <p className="text-[rgba(11,11,13,0.6)] text-sm md:text-base font-light leading-[1.9] tracking-wide text-center md:text-left">
                A discreet symbol of unparalleled influence and your enduring passport to elevated travel. Secure a lifetime of exceptional dining, private lounges, and restorative wellness.
              </p>
              
              <div className="flex flex-col gap-2 border-t border-[#0B0B0D]/10 pt-6 text-center md:text-left">
                <span className="text-[#987D3E] text-[10px] tracking-[0.4em] uppercase font-light">
                  Lifetime Membership
                </span>
                <p className="text-[rgba(11,11,13,0.4)] text-xs md:text-sm font-light leading-[1.8] tracking-wide">
                  Recognised across Sampan Highway Inn and the wider Sampan Group network.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: The Display Case (Card) */}
          <motion.div 
            style={{ y: cardsY, opacity: cardsOpacity, scale: cardsScale }} 
            className="w-full max-w-[500px] mx-auto [transform-style:preserve-3d] order-1 md:order-2"
          >
            <motion.div 
              style={{ rotateY: -4, rotateZ: -1, transformStyle: "preserve-3d" }} 
              className="w-full"
            >
              <motion.div 
                style={{ rotateX: leftMouseRotateX, rotateY: leftMouseRotateY }} 
                className="w-full [transform-style:preserve-3d]"
              >
                <motion.div 
                  className="relative w-full aspect-[1.6/1]" 
                  animate={prefersReducedMotion ? {} : { y: [0, -12, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <CardVisual />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>

      </motion.div>
    </div>
  );
}