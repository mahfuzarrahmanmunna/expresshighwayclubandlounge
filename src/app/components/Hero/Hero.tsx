"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.4, delayChildren: 0.8 },
  },
};

const maskRevealVariants = {
  hidden: { y: "110%", opacity: 0, filter: "blur(10px)" },
  show: (i: number) => ({
    y: "0%", opacity: 1, filter: "blur(0px)",
    transition: { duration: 1.6, ease: smoothEase, delay: i * 0.3 }
  }),
};

const fadeUpBlurVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  show: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 1.4, ease: smoothEase }
  },
};

export default function Hero() {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const backgroundY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? ["0%", "0%"] : ["0%", "15%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [1, 1] : [1.1, 1.25]);
  const textY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? ["0%", "0%"] : ["0%", "-20%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.35, 0.85], prefersReducedMotion ? [1, 1, 1] : [1, 1, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], prefersReducedMotion ? [0, 0, 0] : [0, 0.3, 0.7]);

  return (
    <section ref={ref} className="relative h-[200vh] w-full bg-[#0B0B0D] z-0 isolate">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        <motion.div style={{ y: backgroundY, scale: backgroundScale }} className="absolute inset-0 z-0">
          <motion.div
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1.1 }}
            transition={{ duration: 3.5, ease: smoothEase }}
            className="relative h-full w-full"
          >
            <Image src="/banner/Express-Highway-Inn-New-Model-Design.jpg" alt="Express Highway Inn Club Lounge" fill priority sizes="100vw" className="object-cover object-center w-full h-full" />
          </motion.div>
        </motion.div>

        <motion.div style={{ opacity: overlayOpacity }} className="absolute inset-0 z-10 bg-[#0B0B0D] pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 z-10 h-3/4 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/70 to-transparent pointer-events-none" />
        <motion.div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_rgba(197,160,89,0.08),transparent_70%)] pointer-events-none" animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
        <div className="absolute inset-y-0 left-0 z-10 w-1/3 hidden md:block bg-gradient-to-r from-[#0B0B0D]/60 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 z-10 w-1/3 hidden md:block bg-gradient-to-l from-[#0B0B0D]/60 to-transparent pointer-events-none" />
        <div className="absolute inset-0 z-20 opacity-[0.04] pointer-events-none mix-blend-overlay" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }} />

        <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none">
          <motion.div initial={{ x: "-50%", opacity: 0 }} animate={{ x: "150%", opacity: [0, 0.4, 0.4, 0] }} transition={{ duration: 3.5, ease: smoothEase, delay: 1.5 }} className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-[#C5A059]/15 to-transparent blur-3xl" />
        </div>

        <motion.div style={{ y: textY, opacity: textOpacity }} className="absolute inset-0 top-0 h-screen w-full flex flex-col items-center justify-center text-center px-6 z-30">
          <motion.div variants={containerVariants} initial="hidden" animate="show" className="max-w-4xl w-full flex flex-col items-center">
            <motion.div variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }} className="flex items-center justify-center gap-8 mb-12">
              <motion.div variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 1.2, ease: smoothEase } } }} className="w-16 h-px bg-[#987D3E] origin-right" />
              <motion.span variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: smoothEase } } }} className="text-[#C5A059] text-[10px] md:text-xs tracking-[0.4em] sm:tracking-[0.5em] uppercase font-sans font-light whitespace-nowrap">Express Highway Inn</motion.span>
              <motion.div variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 1.2, ease: smoothEase } } }} className="w-16 h-px bg-[#987D3E] origin-left" />
            </motion.div>

            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] text-[#F5F3EE] leading-[0.95] tracking-[-0.03em] mb-12 drop-shadow-[0_5px_30px_rgba(0,0,0,0.5)]">
              <span className="block overflow-hidden mb-2 pb-2">
                <motion.span variants={maskRevealVariants} custom={0} className="block">WHERE THE JOURNEY</motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span variants={maskRevealVariants} custom={1} className="block italic font-light text-[#C5A059]">MEETS MODERN LUXURY.</motion.span>
              </span>
            </h1>

            <motion.p variants={fadeUpBlurVariants} className="text-[#F5F3EE]/80 text-base md:text-lg max-w-xl mb-14 font-light leading-[1.9] tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              An elevated destination for refined stays, exceptional dining, private gatherings, and moments worth remembering.
            </motion.p>

            <motion.div variants={fadeUpBlurVariants} className="flex flex-col sm:flex-row gap-5 items-center">
              <button className="group relative overflow-hidden bg-[#C5A059] text-[#0B0B0D] px-12 py-4 text-[10px] tracking-[0.3em] uppercase font-medium transition-colors duration-500 hover:text-[#0B0B0D] border border-[#C5A059]">
                <span className="relative z-10">Discover the Experience</span>
                <div className="absolute inset-0 bg-[#987D3E] translate-x-[-100%] transition-transform duration-500 ease-out group-hover:translate-x-0"></div>
              </button>
              <button className="group flex items-center gap-4 px-12 py-4 text-[10px] tracking-[0.3em] uppercase font-light text-[#F5F3EE] transition-all duration-500 hover:text-[#C5A059]">
                Explore the Lounge
                <span className="relative w-6 h-px bg-[#F5F3EE] transition-all duration-500 group-hover:w-10 group-hover:bg-[#C5A059]">
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-r border-b border-[#F5F3EE] group-hover:border-[#C5A059] rotate-45"></span>
                </span>
              </button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.0, duration: 1.5, ease: smoothEase }}>
          <span className="text-[#987D3E] text-[9px] tracking-[0.4em] uppercase">Scroll</span>
          <div className="relative w-px h-16 bg-[#F5F3EE]/20 overflow-hidden">
            <motion.div className="absolute top-0 left-0 w-full h-full bg-[#C5A059]" animate={{ y: ["-100%", "100%"] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 3.0 }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}