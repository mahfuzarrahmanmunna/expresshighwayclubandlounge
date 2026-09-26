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
  const rightMouseRotateX = useTransform(smoothMouseY, [-0.5, 0.5], [2, -2]);
  const rightMouseRotateY = useTransform(smoothMouseX, [-0.5, 0.5], [4, -4]);
  const bgMouseX = useTransform(smoothMouseX, [-0.5, 0.5], ["-10%", "10%"]);
  const bgMouseY = useTransform(smoothMouseY, [-0.5, 0.5], ["-10%", "10%"]);

  const CardVisual = ({ side }: { side: "left" | "right" }) => {
    const isLeft = side === "left";
    return (
      <div className="relative w-full h-full">
        <div className="absolute -inset-4 rounded-3xl bg-[#C5A059] opacity-10 blur-2xl pointer-events-none" />
        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#0B0B0D] border border-[#C5A059]/30" style={{ boxShadow: "0 30px 80px rgba(11,11,13,0.16), 0 10px 30px rgba(11,11,13,0.08)" }}>
          <Image src="/card/Loyality Card Front.webp" alt={isLeft ? "The Signature Membership Card" : "The Life Membership Card"} fill sizes="(max-width: 768px) 90vw, 460px" className="object-contain object-center pointer-events-none z-10" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-[#C5A059]/10 pointer-events-none z-20" />
          <motion.div style={{ x: lightSweepX, opacity: lightSweepOpacity, backgroundImage: "linear-gradient(to right, transparent, #F7F5F0, #C5A059, transparent)" }} className="absolute inset-y-0 w-1/2 blur-xl z-30 pointer-events-none" />
        </div>
      </div>
    );
  };

  const CardContent = ({ side }: { side: "left" | "right" }) => {
    const isLeft = side === "left";
    return (
      <div className={`max-w-md text-center md:text-left ${isLeft ? "md:text-right" : ""}`}>
        <span className="text-[#987D3E] text-[10px] tracking-[0.4em] uppercase mb-4 block">{isLeft ? "By Invitation Only" : "Lifetime Membership"}</span>
        <div className="overflow-hidden mb-4 pb-2">
          <motion.h3 style={{ y: textMaskY }} className="font-serif text-2xl md:text-3xl text-[#0B0B0D] tracking-wide">{isLeft ? "The Signature Card" : "The Life Card"}</motion.h3>
        </div>
        <p className="text-[rgba(11,11,13,0.62)] text-sm md:text-base font-light leading-[1.9] tracking-wide">
          {isLeft ? "A discreet symbol of unparalleled influence. Conferred upon figures of extraordinary standing, this membership grants uncompromised, lifetime access to every facet of the Express Highway Club & Lounge." : "Your enduring passport to elevated travel. Secure a lifetime of exceptional dining, private lounges, and restorative wellness. An investment in perpetual access, designed for the modern journey."}
        </p>
      </div>
    );
  };

  return (
    <div ref={containerRef} className="relative z-20 h-auto md:h-[140vh] w-full bg-[#F7F5F0] overflow-x-hidden">
      <motion.div ref={stickyRef} onMouseMove={handleMouseMove} style={{ y: isDesktop ? globalExitY : 0 }} className="relative md:sticky top-0 h-auto md:h-screen w-full overflow-x-hidden md:overflow-hidden flex flex-col items-center justify-center py-20 md:py-16 [perspective:1400px]">
        
        <motion.div style={{ x: isDesktop ? bgMouseX : 0, y: isDesktop ? bgMouseY : 0 }} className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[80%] h-[50%] bg-[radial-gradient(ellipse_at_center,_rgba(197,160,89,0.07),transparent_70%)]" />
        </motion.div>
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_transparent_50%,_rgba(11,11,13,0.05)_100%)] pointer-events-none" />
        <motion.span style={{ opacity: prefersReducedMotion ? 0.03 : 0.035 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[16rem] sm:text-[22rem] md:text-[30rem] lg:text-[36rem] text-[#987D3E] whitespace-nowrap pointer-events-none select-none leading-none z-0">ACCESS</motion.span>
        <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none mix-blend-multiply" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }} />

        <div className="hidden md:flex flex-col items-center gap-y-8 w-full max-w-6xl px-12 z-10">
          <motion.div style={{ y: headerY, opacity: headerOpacity }} className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-8">
              <div className="w-12 md:w-16 h-px bg-[#987D3E]" />
              <span className="text-[#987D3E] text-[10px] md:text-xs tracking-[0.4em] uppercase font-light whitespace-nowrap">02 — The Membership</span>
              <div className="w-12 md:w-16 h-px bg-[#987D3E]" />
            </div>
            <h2 className="font-serif text-[#0B0B0D] text-[clamp(56px,7vw,110px)] leading-[0.9] tracking-[-0.02em] text-center">
              <span className="block">THE ART OF</span>
              <span className="block bg-gradient-to-r from-[#0B0B0D] to-[#C5A059] bg-clip-text text-transparent">ACCESS.</span>
            </h2>
          </motion.div>

          <motion.div style={{ y: cardsY, opacity: cardsOpacity, scale: cardsScale }} className="grid grid-cols-2 gap-8 w-full [transform-style:preserve-3d] mt-4">
            <div className="flex justify-end [transform-style:preserve-3d]">
              <motion.div style={{ rotateY: -3, rotateZ: -1, transformStyle: "preserve-3d" }} className="w-full max-w-[460px]">
                <motion.div style={{ rotateX: leftMouseRotateX, rotateY: leftMouseRotateY }} className="w-full [transform-style:preserve-3d]">
                  <motion.div className="relative w-full aspect-[1.6/1]" animate={prefersReducedMotion ? {} : { y: [0, -8, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}>
                    <CardVisual side="left" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
            <div className="flex justify-start [transform-style:preserve-3d]">
              <motion.div style={{ rotateY: 3, rotateZ: 1, transformStyle: "preserve-3d" }} className="w-full max-w-[460px]">
                <motion.div style={{ rotateX: rightMouseRotateX, rotateY: rightMouseRotateY }} className="w-full [transform-style:preserve-3d]">
                  <motion.div className="relative w-full aspect-[1.6/1]" animate={prefersReducedMotion ? {} : { y: [0, -8, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}>
                    <CardVisual side="right" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div style={{ y: contentY, opacity: contentOpacity }} className="grid grid-cols-2 gap-8 w-full mt-6">
            <div className="flex justify-end"><CardContent side="left" /></div>
            <div className="flex justify-start"><CardContent side="right" /></div>
          </motion.div>
        </div>

        <div className="flex md:hidden flex-col items-center gap-8 w-full px-5 z-10">
          <motion.div style={{ opacity: headerOpacity, y: headerY }} className="flex flex-col items-center gap-6 mt-4">
            <div className="flex items-center gap-6">
              <div className="w-10 h-px bg-[#987D3E]" />
              <span className="text-[#987D3E] text-[10px] tracking-[0.4em] uppercase font-light whitespace-nowrap">02 — The Membership</span>
              <div className="w-10 h-px bg-[#987D3E]" />
            </div>
            <h2 className="font-serif text-[#0B0B0D] text-[clamp(48px,12vw,72px)] leading-[0.9] tracking-[-0.02em] text-center">
              <span className="block">THE ART OF</span>
              <span className="block bg-gradient-to-r from-[#0B0B0D] to-[#C5A059] bg-clip-text text-transparent">ACCESS.</span>
            </h2>
          </motion.div>
          <motion.div style={{ opacity: cardsOpacity, y: cardsY, scale: cardsScale }} className="w-full max-w-[calc(100vw-40px)]">
            <motion.div className="relative w-full aspect-[1.6/1]" animate={prefersReducedMotion ? {} : { y: [0, -6, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}>
              <CardVisual side="left" />
            </motion.div>
          </motion.div>
          <motion.div style={{ opacity: contentOpacity, y: contentY }} className="max-w-md text-center"><CardContent side="left" /></motion.div>
          <motion.div style={{ opacity: cardsOpacity, y: cardsY, scale: cardsScale }} className="w-full max-w-[calc(100vw-40px)] mt-4">
            <motion.div className="relative w-full aspect-[1.6/1]" animate={prefersReducedMotion ? {} : { y: [0, -6, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
              <CardVisual side="right" />
            </motion.div>
          </motion.div>
          <motion.div style={{ opacity: contentOpacity, y: contentY }} className="max-w-md text-center mb-8"><CardContent side="right" /></motion.div>
        </div>
      </motion.div>
    </div>
  );
}