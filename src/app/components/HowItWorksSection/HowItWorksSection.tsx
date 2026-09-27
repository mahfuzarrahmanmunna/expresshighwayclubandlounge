"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    num: "01",
    title: "Enquire",
    description: "Submit the membership form below, or call our team directly to discuss your preferred tier.",
  },
  {
    num: "02",
    title: "Verify",
    description: "Our team confirms your details and preferred membership tier, then prepares your card.",
  },
  {
    num: "03",
    title: "Activate",
    description: "Receive your membership card and start using the Club & Lounge on your very next stop.",
  },
];

export default function HowItWorksSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Subtle parallax for the ghost typography
  const ghostX = useTransform(scrollYProgress, [0, 1], ["10%", "-15%"]);
  // Architectural line draw
  const lineScaleX = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const lineOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

  const containerVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: smoothEase },
    },
  };

  return (
    <section 
      ref={containerRef} 
      className="relative z-10 w-full bg-[#F7F5F0] py-24 md:py-32 overflow-hidden"
    >
      
      {/* --- Architectural Background Atmosphere --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft Ambient Light */}
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-[radial-gradient(circle_at_80%_0%,_rgba(216,195,154,0.08),transparent_50%)]" />
        
        {/* Giant Ghost Typography - Positioned outside viewport edge */}
        <motion.span 
          style={{ x: ghostX }}
          className="absolute top-1/2 left-0 -translate-y-1/2 font-serif text-[20rem] sm:text-[30rem] md:text-[40rem] text-[#0B0B0D] whitespace-nowrap pointer-events-none select-none leading-none opacity-[0.02]"
        >
          PROCESS
        </motion.span>
        
        {/* Fine Grain Texture */}
        <div className="absolute inset-0 opacity-[0.012] mix-blend-multiply" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        
        {/* --- Editorial Header --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 mb-24 md:mb-32">
          
          {/* Left: Headline */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: smoothEase }}
            className="flex flex-col gap-8"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-[#C5A059]" />
              <span className="text-[#987D3E] text-[10px] tracking-[0.45em] uppercase font-sans font-light whitespace-nowrap">
                03 — How It Works
              </span>
            </div>
            <h2 className="font-serif text-[clamp(3rem,7vw,5.5rem)] text-[#0B0B0D] leading-[0.95] tracking-[-0.02em] font-normal">
              Three steps <br/>
              <span className="italic font-extralight text-[#0B0B0D]/70">to your card.</span>
            </h2>
          </motion.div>
          
          {/* Right: Supporting Copy */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: smoothEase, delay: 0.15 }}
            className="flex flex-col items-start md:items-end md:text-right gap-6 md:pt-4"
          >
            <span className="text-[#8E8A82] text-[10px] tracking-[0.4em] uppercase font-sans font-light whitespace-nowrap">
              Membership Journey
            </span>
            <p className="text-[#0B0B0D]/60 text-sm md:text-base font-sans font-light leading-[1.9] tracking-wide max-w-sm">
              Securing your membership is a seamless, considered process designed for the modern traveler. No unnecessary formalities, just exclusive access.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-[#C5A059] text-[10px] tracking-[0.3em] font-sans font-light">01 / 03</span>
              <div className="w-1 h-1 rounded-full bg-[#0B0B0D]/30"></div>
              <span className="text-[#0B0B0D]/40 text-[10px] tracking-[0.3em] font-sans font-light uppercase">Est. Experience</span>
            </div>
          </motion.div>
        </div>

        {/* --- Desktop Architectural Timeline --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="hidden md:grid grid-cols-3 gap-8 relative pt-4"
        >
          {/* The Blueprint Line */}
          <motion.div 
            style={{ scaleX: lineScaleX, opacity: lineOpacity, transformOrigin: "left" }}
            className="absolute top-0 left-0 right-0 h-px bg-[#C5A059]/40 z-0"
          ></motion.div>

          {steps.map((step) => (
            <motion.div 
              key={step.num} 
              variants={itemVariants}
              className="group relative flex flex-col pt-12"
            >
              {/* Node on the Line */}
              <div className="absolute top-0 left-0 -translate-y-1/2 w-4 h-4 rounded-full bg-[#F7F5F0] border border-[#C5A059] flex items-center justify-center z-10 transition-all duration-500 group-hover:shadow-[0_0_0_4px_rgba(197,160,89,0.1)]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059] transition-all duration-500 group-hover:scale-150"></div>
              </div>

              {/* Massive Ghost Number */}
              <span className="font-serif text-[8rem] xl:text-[10rem] leading-none text-[#0B0B0D]/[0.08] pointer-events-none select-none transition-opacity duration-700 group-hover:text-[#0B0B0D]/[0.12] -mb-6">
                {step.num}
              </span>

              {/* Content */}
              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <h3 className="font-serif text-2xl md:text-3xl text-[#0B0B0D] tracking-wide font-normal transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1">
                    {step.title}
                  </h3>
                  <span className="text-[#8E8A82] text-[10px] tracking-[0.3em] uppercase font-sans font-light">
                    {step.num} / Verify
                  </span>
                </div>
                {/* Gold Indicator Line */}
                <div className="w-10 h-px bg-[#C5A059]/40 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-16 group-hover:bg-[#C5A059]"></div>
                <p className="text-[#0B0B0D]/50 text-sm md:text-base font-sans font-light leading-[1.9] tracking-wide max-w-xs transition-opacity duration-500 group-hover:text-[#0B0B0D]/70">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* --- Mobile Vertical Timeline --- */}
        <div className="md:hidden relative pl-8">
          {/* Vertical Blueprint Line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-[#0B0B0D]/10"></div>

          <div className="flex flex-col gap-16">
            {steps.map((step, i) => (
              <motion.div 
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: smoothEase, delay: i * 0.1 }}
                className="relative"
              >
                {/* Node on the Line */}
                <div className="absolute -left-8 top-1 -translate-x-1/2 w-4 h-4 rounded-full bg-[#F7F5F0] border border-[#C5A059] flex items-center justify-center z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></div>
                </div>

                {/* Ghost Number */}
                <span className="font-serif text-[6rem] leading-none text-[#0B0B0D]/[0.08] pointer-events-none select-none absolute -top-8 -left-2 z-0">
                  {step.num}
                </span>

                {/* Content */}
                <div className="relative z-10 flex flex-col gap-3 mt-4">
                  <h3 className="font-serif text-2xl text-[#0B0B0D] tracking-wide font-normal">
                    {step.title}
                  </h3>
                  <div className="w-10 h-px bg-[#C5A059]/50"></div>
                  <p className="text-[#0B0B0D]/50 text-sm font-sans font-light leading-[1.9] tracking-wide max-w-xs">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}