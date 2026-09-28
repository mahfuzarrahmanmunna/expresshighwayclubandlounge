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
      className="relative z-10 w-full bg-[#F7F5F0] py-28 md:py-40 overflow-hidden"
    >
      
      {/* --- Architectural Background Atmosphere --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft Ambient Light */}
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-[radial-gradient(circle_at_80%_0%,_rgba(216,195,154,0.1),transparent_50%)]" />
        
        {/* Giant Ghost Typography */}
        <motion.span 
          style={{ x: ghostX }}
          className="absolute top-1/2 left-0 -translate-y-1/2 font-serif text-[22rem] sm:text-[32rem] md:text-[44rem] text-[#0B0B0D] whitespace-nowrap pointer-events-none select-none leading-none opacity-[0.025]"
        >
          PROCESS
        </motion.span>
        
        {/* Fine Grain Texture */}
        <div className="absolute inset-0 opacity-[0.015] mix-blend-multiply" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        
        {/* --- Editorial Header --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 mb-28 md:mb-40">
          
          {/* Left: Headline */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: smoothEase }}
            className="flex flex-col gap-8"
          >
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
          </motion.div>
        </div>

        {/* --- Desktop Architectural Timeline --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="hidden md:block relative pt-10"
        >
          {/* Base Architectural Line - spans full width */}
          <div className="absolute top-10 left-0 right-0 h-px bg-[#0B0B0D]/10 z-0"></div>
          
          {/* Animated Gold Line Draw - spans full width */}
          <motion.div 
            style={{ scaleX: lineScaleX, opacity: lineOpacity, transformOrigin: "left" }}
            className="absolute top-10 left-0 right-0 h-px bg-[#C5A059] z-0"
          ></motion.div>

          {/*
            Single grid-cols-3 layer - NO gap, NO padding on cells.
            Both the absolutely-positioned node (left-1/2 -translate-x-1/2)
            and the flex-centered content (items-center) resolve to the
            identical center of each 1/3 column.
            Column centers: 1/6, 1/2, 5/6 of the full timeline width.
          */}
          <div className="grid grid-cols-3">
            {steps.map((step) => (
              <motion.div 
                key={step.num} 
                variants={itemVariants}
                className="group relative flex flex-col items-center pt-10"
              >
                {/* Node - centered on the grid cell center, sitting on the line */}
                <div className="absolute top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="relative w-5 h-5 rounded-full bg-[#F7F5F0] border border-[#C5A059] flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_0_0_8px_rgba(197,160,89,0.05)]">
                    <div className="w-2 h-2 rounded-full bg-[#C5A059] transition-transform duration-500 group-hover:scale-125"></div>
                  </div>
                </div>

                {/* Massive Ghost Number */}
                <span className="font-serif text-[9rem] xl:text-[11rem] leading-none text-[#0B0B0D]/[0.04] pointer-events-none select-none transition-all duration-700 group-hover:text-[#0B0B0D]/[0.08] -mb-4 mt-12">
                  {step.num}
                </span>

                {/* Content - centered on the same grid cell center */}
                <div className="relative z-10 flex flex-col items-center gap-4 mt-8 text-center">
                  <div className="flex items-center gap-3 justify-center">
                    <h3 className="font-serif text-2xl md:text-3xl text-[#0B0B0D] tracking-wide font-normal transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1">
                      {step.title}
                    </h3>
                  </div>
                  
                  {/* Gold Indicator Line */}
                  <div className="w-10 h-px bg-[#C5A059]/40 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-20 group-hover:bg-[#C5A059]"></div>
                  
                  <p className="text-[#0B0B0D]/50 text-sm md:text-base font-sans font-light leading-[1.9] tracking-wide max-w-xs transition-colors duration-500 group-hover:text-[#0B0B0D]/70">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* --- Mobile Vertical Timeline --- */}
        <div className="md:hidden flex flex-col gap-4">
          {steps.map((step, i) => (
            <motion.div 
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: smoothEase, delay: i * 0.1 }}
              className="flex gap-8"
            >
              {/* Line & Node Column */}
              <div className="relative flex flex-col items-center w-5">
                {/* Vertical Line */}
                <div className={`absolute w-px bg-[#0B0B0D]/10 ${i === 0 ? 'top-4' : 'top-0'} ${i === steps.length - 1 ? 'bottom-1/2' : 'bottom-0'}`}></div>
                
                {/* Node */}
                <div className="sticky top-4 z-10 w-5 h-5 rounded-full bg-[#F7F5F0] border border-[#C5A059] flex items-center justify-center mt-4">
                  <div className="w-2 h-2 rounded-full bg-[#C5A059]"></div>
                </div>
              </div>

              {/* Content Column */}
              <div className="flex-1 pt-2 pb-12 relative">
                {/* Ghost Number */}
                <span className="font-serif text-[7rem] leading-none text-[#0B0B0D]/[0.05] pointer-events-none select-none absolute -top-12 -left-2 z-0">
                  {step.num}
                </span>

                <div className="relative z-10 flex flex-col gap-3">
                  <h3 className="font-serif text-3xl text-[#0B0B0D] tracking-wide font-normal">
                    {step.title}
                  </h3>
                  <div className="w-10 h-px bg-[#C5A059]"></div>
                  <p className="text-[#0B0B0D]/50 text-sm font-sans font-light leading-[1.9] tracking-wide max-w-xs">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}