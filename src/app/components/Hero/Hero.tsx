"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.4, delayChildren: 0.8 },
  },
};

const maskRevealVariants = {
  hidden: { y: "110%", opacity: 0, filter: "blur(12px)" },
  show: (i: number) => ({
    y: "0%", opacity: 1, filter: "blur(0px)",
    transition: { duration: 1.8, ease: smoothEase, delay: i * 0.3 }
  }),
};

const fadeUpBlurVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(12px)" },
  show: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 1.6, ease: smoothEase }
  },
};

export default function Hero() {
  return (
    <section className="relative h-screen w-full bg-[#0B0B0D] z-0 isolate overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: smoothEase }}
          className="relative h-full w-full"
        >
          <Image src="/banner/Express-Highway-Inn-New-Model-Design.jpg" alt="Express Highway Inn Club Lounge" fill priority sizes="100vw" className="object-cover object-center w-full h-full" />
        </motion.div>
      </div>

      <div className="absolute inset-0 z-10 bg-[#0B0B0D]/45" />
      <div className="absolute inset-x-0 bottom-0 z-10 h-2/3 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/80 to-transparent" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_rgba(11,11,13,0.15),transparent_60%)]" />
      <div className="absolute inset-0 z-20 opacity-[0.04] mix-blend-overlay" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }} />

      <div className="relative z-30 flex h-full w-full items-center justify-center px-6 text-center">
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="max-w-5xl w-full flex flex-col items-center">
          <motion.div variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }} className="flex items-center justify-center gap-8 mb-10 md:mb-12">
            <motion.div variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 0.9, ease: smoothEase } } }} className="w-12 md:w-16 h-px bg-[#C5A059] origin-right" />
            <motion.span variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: smoothEase } } }} className="text-[#C5A059] text-[10px] md:text-xs tracking-[0.4em] sm:tracking-[0.5em] uppercase font-sans font-light whitespace-nowrap">
              Membership & Access
            </motion.span>
            <motion.div variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 0.9, ease: smoothEase } } }} className="w-12 md:w-16 h-px bg-[#C5A059] origin-left" />
          </motion.div>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] text-[#F5F3EE] leading-[0.95] tracking-[-0.03em] mb-8 md:mb-10 drop-shadow-[0_8px_24px_rgba(0,0,0,0.5)]">
            <span className="block overflow-hidden mb-2 md:mb-3">
              <motion.span variants={maskRevealVariants} custom={0} className="block">Join the club.</motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span variants={maskRevealVariants} custom={1} className="block italic font-extralight text-[#C5A059]">Own the highway.</motion.span>
            </span>
          </h1>

          <motion.p variants={fadeUpBlurVariants} className="text-[#F5F3EE]/75 text-sm md:text-lg max-w-2xl mb-10 md:mb-14 font-light leading-[1.8] tracking-wide">
            Membership to Express Highway Inn Club & Lounge unlocks every facility at Sampan Highway Inn - for you, your family, and your business travel, every time you&apos;re on the road.
          </motion.p>

          <motion.div variants={fadeUpBlurVariants} className="flex flex-col sm:flex-row gap-4 md:gap-5 items-center">
            <button className="group cursor-pointer relative overflow-hidden bg-[#C5A059] text-[#0B0B0D] px-8 md:px-12 py-3.5 md:py-4 text-[10px] tracking-[0.3em] uppercase font-medium transition-colors duration-300 hover:text-[#0B0B0D] border border-[#C5A059] shadow-[0_10px_30px_-10px_rgba(197,160,89,0.5)]">
              <span className="relative z-10">Start your membership</span>
              <div className="absolute inset-0 bg-[#987D3E] translate-x-[-100%] transition-transform duration-500 ease-out group-hover:translate-x-0" />
            </button>

            <button className="group cursor-pointer flex items-center gap-4 px-8 md:px-12 py-3.5 md:py-4 text-[10px] tracking-[0.3em] uppercase font-light text-[#F5F3EE] transition-all duration-300 hover:text-[#C5A059]">
              See what&apos;s included
              <span className="relative w-6 h-px bg-[#F5F3EE] transition-all duration-300 group-hover:w-10 group-hover:bg-[#C5A059]">
                <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-r border-b border-[#F5F3EE] group-hover:border-[#C5A059] rotate-45" />
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-3 md:gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6, duration: 1.2, ease: smoothEase }}>
        <span className="text-[#C5A059] text-[9px] tracking-[0.4em] uppercase">Scroll</span>
        <div className="relative w-px h-12 md:h-16 bg-[#F5F3EE]/20 overflow-hidden">
          <motion.div className="absolute top-0 left-0 w-full h-full bg-[#C5A059]" animate={{ y: ["-100%", "100%"] }} transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }} />
        </div>
      </motion.div>
    </section>
  );
}