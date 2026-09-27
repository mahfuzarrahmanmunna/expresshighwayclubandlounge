"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const smoothEase = [0.22, 1, 0.36, 1] as const;

// Container and Item variants for staggered reveal
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: smoothEase },
  },
};

/* ── Data (Kept outside component to prevent re-renders) ── */
const affiliations = [
  { num: "01", name: "Real Estate & Housing Association of Bangladesh", logo: "/images/affiliation/rehab.png" },
  { num: "02", name: "Federation of Bangladesh Chambers of Commerce & Industry (FBCCI)", logo: "/images/affiliation/fbcci.png" },
  { num: "03", name: "Bangladesh Reconditioned Vehicles Importers & Dealers Assoc. (BARVIDA)", logo: "/images/affiliation/barvia.png" },
  { num: "04", name: "Bangladesh Arm's Dealer and Importer Association", logo: "/images/affiliation/bad.png" },
  { num: "05", name: "Bangladesh PABX Association", logo: "/images/affiliation/pabx.png" },
  { num: "06", name: "Bangladesh LPG Autogas Station Owner’s Association", logo: "/images/affiliation/lpg.png" },
  { num: "07", name: "Bangladesh Volleyball Federation (AD-Hoc Community)", logo: "/images/affiliation/bvf.png" },
  { num: "08", name: "Barisal Bulls", logo: "/images/affiliation/barishalbulls.png" },
  { num: "09", name: "Barisal Club (1864)", logo: "/images/affiliation/lis.png" },
  { num: "10", name: "Bangladesh Premier League (BPL)", logo: "/images/affiliation/bpl.png" },
  { num: "11", name: "Mercedes-Benz", logo: "/images/affiliation/mercedes.png" },
  { num: "12", name: "Chartered Institute of Procurement & Supply UK (CIPS)", logo: "/images/affiliation/cips.png" },
  { num: "13", name: "Directorate General Defence Purchase (DGDP)", logo: "/images/affiliation/dgdp.png" },
  { num: "14", name: "Shooter's Shooting Club", logo: "/images/affiliation/shoot.png" },
  { num: "15", name: "Express Highway Club And Lounge", logo: "/images/affiliation/EHCl.png" },
  { num: "16", name: "Bangladesh Archery Federation", logo: "/images/affiliation/Archery.png" },
  { num: "17", name: "Sampan Golf Academy", logo: "/images/affiliation/Sampan Golf Academy.png" },
];

export default function Affiliations() {
  return (
    <section className="relative z-10 w-full bg-[#F7F5F0] py-24 md:py-32 overflow-hidden">
      
      {/* --- Background Atmosphere --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft Sunlight from Top Right */}
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[radial-gradient(circle_at_80%_0%,_rgba(216,195,154,0.12),transparent_35%)]" />
        {/* Giant Ghost Typography */}
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[16rem] sm:text-[24rem] md:text-[32rem] text-[#0B0B0D] whitespace-nowrap pointer-events-none select-none leading-none opacity-[0.025]">
          TRUST
        </span>
        {/* Fine Grain Texture */}
        <div className="absolute inset-0 opacity-[0.015] mix-blend-multiply" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        
        {/* --- Section Header --- */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: smoothEase }}
            className="flex flex-col gap-6 max-w-2xl"
          >
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#0B0B0D] leading-[0.9] tracking-[-0.02em] font-normal">
              A Network of <br/>
              <span className="italic font-extralight text-[#0B0B0D]/60">Trust.</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: smoothEase, delay: 0.1 }}
            className="text-[#0B0B0D]/50 text-sm md:text-base font-light leading-[1.9] tracking-wide max-w-sm md:mt-4 md:text-right"
          >
            Our commitment to excellence is recognized by leading national and international bodies. We partner with the best to ensure unparalleled standards.
          </motion.p>
        </div>

        {/* --- Architectural Seamless Grid --- */}
        {/* Changed to lg:grid-cols-5 for 5 cards per row on large screens */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-[#0B0B0D]/10 border border-[#0B0B0D]/10"
        >
          {affiliations.map((item, i) => (
            <motion.div
              key={`${item.num}-${i}`}
              variants={itemVariants}
              className="group relative bg-[#F7F5F0] aspect-[5/4] flex flex-col items-center justify-center p-6 md:p-8 overflow-hidden"
            >
              {/* Subtle Gold Backdrop on Hover */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(197,160,89,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"></div>
              
              {/* Architectural Index */}
              <span className="absolute top-4 left-4 text-[#0B0B0D]/20 group-hover:text-[#C5A059] text-[9px] tracking-[0.3em] font-light transition-colors duration-500 z-10">
                {item.num}
              </span>

              {/* Logo Wrapper - Extremely slow, elegant scale */}
              <div className="relative w-full h-10 md:h-14 flex items-center justify-center mb-6 z-10">
                <Image
                  src={item.logo}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 20vw"
                  loading="lazy"
                  className="object-contain transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                />
              </div>

              {/* Name - Elegant, larger text size, centered at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center z-10">
                <div className="overflow-hidden">
                  {/* Increased text size to text-[11px] sm:text-xs lg:text-sm and relaxed tracking slightly */}
                  <p className="text-[11px] sm:text-xs lg:text-sm leading-snug font-light tracking-[0.05em] text-[#0B0B0D]/40 group-hover:text-[#0B0B0D]/70 transition-colors duration-500 line-clamp-2">
                    {item.name}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}