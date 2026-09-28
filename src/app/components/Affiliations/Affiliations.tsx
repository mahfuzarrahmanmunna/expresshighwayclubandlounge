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
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-[#0B0B0D]/10 border border-[#0B0B0D]/10"
        >
          
          {/* 01 */}
          <motion.div variants={itemVariants} className="group relative bg-[#F7F5F0] aspect-[5/4] flex flex-col items-center justify-center p-6 md:p-8 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(197,160,89,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"></div>
            <span className="absolute top-4 left-4 text-[#0B0B0D]/20 group-hover:text-[#C5A059] text-[9px] tracking-[0.3em] font-light transition-colors duration-500 z-10">01</span>
            <div className="relative w-full h-10 md:h-14 flex items-center justify-center mb-6 z-10">
              <Image src="/images/affiliation/rehab.png" alt="Real Estate & Housing Association of Bangladesh" fill sizes="(max-width: 768px) 50vw, 20vw" loading="lazy" className="object-contain transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center z-10">
              <div className="overflow-hidden">
                <p className="text-[11px] sm:text-xs lg:text-sm leading-snug font-light tracking-[0.05em] text-[#0B0B0D]/40 group-hover:text-[#0B0B0D]/70 transition-colors duration-500 line-clamp-2">
                  Real Estate & Housing Association of Bangladesh
                </p>
              </div>
            </div>
          </motion.div>

          {/* 02 */}
          <motion.div variants={itemVariants} className="group relative bg-[#F7F5F0] aspect-[5/4] flex flex-col items-center justify-center p-6 md:p-8 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(197,160,89,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"></div>
            <span className="absolute top-4 left-4 text-[#0B0B0D]/20 group-hover:text-[#C5A059] text-[9px] tracking-[0.3em] font-light transition-colors duration-500 z-10">02</span>
            <div className="relative w-full h-10 md:h-14 flex items-center justify-center mb-6 z-10">
              <Image src="/images/affiliation/fbcci.png" alt="Federation of Bangladesh Chambers of Commerce & Industry (FBCCI)" fill sizes="(max-width: 768px) 50vw, 20vw" loading="lazy" className="object-contain transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center z-10">
              <div className="overflow-hidden">
                <p className="text-[11px] sm:text-xs lg:text-sm leading-snug font-light tracking-[0.05em] text-[#0B0B0D]/40 group-hover:text-[#0B0B0D]/70 transition-colors duration-500 line-clamp-2">
                  Federation of Bangladesh Chambers of Commerce & Industry (FBCCI)
                </p>
              </div>
            </div>
          </motion.div>

          {/* 03 */}
          <motion.div variants={itemVariants} className="group relative bg-[#F7F5F0] aspect-[5/4] flex flex-col items-center justify-center p-6 md:p-8 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(197,160,89,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"></div>
            <span className="absolute top-4 left-4 text-[#0B0B0D]/20 group-hover:text-[#C5A059] text-[9px] tracking-[0.3em] font-light transition-colors duration-500 z-10">03</span>
            <div className="relative w-full h-10 md:h-14 flex items-center justify-center mb-6 z-10">
              <Image src="/images/affiliation/barvia.png" alt="Bangladesh Reconditioned Vehicles Importers & Dealers Assoc. (BARVIDA)" fill sizes="(max-width: 768px) 50vw, 20vw" loading="lazy" className="object-contain transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center z-10">
              <div className="overflow-hidden">
                <p className="text-[11px] sm:text-xs lg:text-sm leading-snug font-light tracking-[0.05em] text-[#0B0B0D]/40 group-hover:text-[#0B0B0D]/70 transition-colors duration-500 line-clamp-2">
                  Bangladesh Reconditioned Vehicles Importers & Dealers Assoc. (BARVIDA)
                </p>
              </div>
            </div>
          </motion.div>

          {/* 04 */}
          <motion.div variants={itemVariants} className="group relative bg-[#F7F5F0] aspect-[5/4] flex flex-col items-center justify-center p-6 md:p-8 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(197,160,89,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"></div>
            <span className="absolute top-4 left-4 text-[#0B0B0D]/20 group-hover:text-[#C5A059] text-[9px] tracking-[0.3em] font-light transition-colors duration-500 z-10">04</span>
            <div className="relative w-full h-10 md:h-18 flex items-center justify-center mb-6 z-10">
              <Image src="/images/affiliation/bad.png" alt="Bangladesh Arm's Dealer and Importer Association" fill sizes="(max-width: 768px) 50vw, 20vw" loading="lazy" className="object-contain transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center z-10">
              <div className="overflow-hidden">
                <p className="text-[11px] sm:text-xs lg:text-sm leading-snug font-light tracking-[0.05em] text-[#0B0B0D]/40 group-hover:text-[#0B0B0D]/70 transition-colors duration-500 line-clamp-2">
                  Bangladesh Arm's Dealer and Importer Association
                </p>
              </div>
            </div>
          </motion.div>

          {/* 05 */}
          <motion.div variants={itemVariants} className="group relative bg-[#F7F5F0] aspect-[5/4] flex flex-col items-center justify-center p-6 md:p-8 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(197,160,89,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"></div>
            <span className="absolute top-4 left-4 text-[#0B0B0D]/20 group-hover:text-[#C5A059] text-[9px] tracking-[0.3em] font-light transition-colors duration-500 z-10">05</span>
            <div className="relative w-full h-10 md:h-18 flex items-center justify-center mb-6 z-10">
              <Image src="/images/affiliation/pabx.png" alt="Bangladesh PABX Association" fill sizes="(max-width: 768px) 50vw, 20vw" loading="lazy" className="object-contain transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center z-10">
              <div className="overflow-hidden">
                <p className="text-[11px] sm:text-xs lg:text-sm leading-snug font-light tracking-[0.05em] text-[#0B0B0D]/40 group-hover:text-[#0B0B0D]/70 transition-colors duration-500 line-clamp-2">
                  Bangladesh PABX Association
                </p>
              </div>
            </div>
          </motion.div>

          {/* 06 */}
          <motion.div variants={itemVariants} className="group relative bg-[#F7F5F0] aspect-[5/4] flex flex-col items-center justify-center p-6 md:p-8 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(197,160,89,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"></div>
            <span className="absolute top-4 left-4 text-[#0B0B0D]/20 group-hover:text-[#C5A059] text-[9px] tracking-[0.3em] font-light transition-colors duration-500 z-10">06</span>
            <div className="relative w-full h-10 md:h-14 flex items-center justify-center mb-6 z-10">
              <Image src="/images/affiliation/lpg.png" alt="Bangladesh LPG Autogas Station Owner’s Association" fill sizes="(max-width: 768px) 50vw, 20vw" loading="lazy" className="object-contain transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center z-10">
              <div className="overflow-hidden">
                <p className="text-[11px] sm:text-xs lg:text-sm leading-snug font-light tracking-[0.05em] text-[#0B0B0D]/40 group-hover:text-[#0B0B0D]/70 transition-colors duration-500 line-clamp-2">
                  Bangladesh LPG Autogas Station Owner’s Association
                </p>
              </div>
            </div>
          </motion.div>

          {/* 07 */}
          <motion.div variants={itemVariants} className="group relative bg-[#F7F5F0] aspect-[5/4] flex flex-col items-center justify-center p-6 md:p-8 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(197,160,89,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"></div>
            <span className="absolute top-4 left-4 text-[#0B0B0D]/20 group-hover:text-[#C5A059] text-[9px] tracking-[0.3em] font-light transition-colors duration-500 z-10">07</span>
            <div className="relative w-full h-10 md:h-18 flex items-center justify-center mb-6 z-10">
              <Image src="/images/affiliation/bvf.png" alt="Bangladesh Volleyball Federation (AD-Hoc Community)" fill sizes="(max-width: 768px) 50vw, 20vw" loading="lazy" className="object-contain transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center z-10">
              <div className="overflow-hidden">
                <p className="text-[11px] sm:text-xs lg:text-sm leading-snug font-light tracking-[0.05em] text-[#0B0B0D]/40 group-hover:text-[#0B0B0D]/70 transition-colors duration-500 line-clamp-2">
                  Bangladesh Volleyball Federation (AD-Hoc Community)
                </p>
              </div>
            </div>
          </motion.div>

          {/* 08 */}
          <motion.div variants={itemVariants} className="group relative bg-[#F7F5F0] aspect-[5/4] flex flex-col items-center justify-center p-6 md:p-8 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(197,160,89,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"></div>
            <span className="absolute top-4 left-4 text-[#0B0B0D]/20 group-hover:text-[#C5A059] text-[9px] tracking-[0.3em] font-light transition-colors duration-500 z-10">08</span>
            <div className="relative w-full h-10 md:h-18 flex items-center justify-center mb-6 z-10">
              <Image src="/images/affiliation/barishalbulls.png" alt="Barisal Bulls" fill sizes="(max-width: 768px) 50vw, 20vw" loading="lazy" className="object-contain transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center z-10">
              <div className="overflow-hidden">
                <p className="text-[11px] sm:text-xs lg:text-sm leading-snug font-light tracking-[0.05em] text-[#0B0B0D]/40 group-hover:text-[#0B0B0D]/70 transition-colors duration-500 line-clamp-2">
                  Barisal Bulls
                </p>
              </div>
            </div>
          </motion.div>

          {/* 09 */}
          <motion.div variants={itemVariants} className="group relative bg-[#F7F5F0] aspect-[5/4] flex flex-col items-center justify-center p-6 md:p-8 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(197,160,89,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"></div>
            <span className="absolute top-4 left-4 text-[#0B0B0D]/20 group-hover:text-[#C5A059] text-[9px] tracking-[0.3em] font-light transition-colors duration-500 z-10">09</span>
            <div className="relative w-full h-10 md:h-18 flex items-center justify-center mb-6 z-10">
              <Image src="/images/affiliation/lis.png" alt="Barisal Club (1864)" fill sizes="(max-width: 768px) 50vw, 20vw" loading="lazy" className="object-contain transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center z-10">
              <div className="overflow-hidden">
                <p className="text-[11px] sm:text-xs lg:text-sm leading-snug font-light tracking-[0.05em] text-[#0B0B0D]/40 group-hover:text-[#0B0B0D]/70 transition-colors duration-500 line-clamp-2">
                  Barisal Club (1864)
                </p>
              </div>
            </div>
          </motion.div>

          {/* 10 */}
          <motion.div variants={itemVariants} className="group relative bg-[#F7F5F0] aspect-[5/4] flex flex-col items-center justify-center p-6 md:p-8 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(197,160,89,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"></div>
            <span className="absolute top-4 left-4 text-[#0B0B0D]/20 group-hover:text-[#C5A059] text-[9px] tracking-[0.3em] font-light transition-colors duration-500 z-10">10</span>
            <div className="relative w-full h-10 md:h-18 flex items-center justify-center mb-6 z-10">
              <Image src="/images/affiliation/bpl.png" alt="Bangladesh Premier League (BPL)" fill sizes="(max-width: 768px) 50vw, 20vw" loading="lazy" className="object-contain transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center z-10">
              <div className="overflow-hidden">
                <p className="text-[11px] sm:text-xs lg:text-sm leading-snug font-light tracking-[0.05em] text-[#0B0B0D]/40 group-hover:text-[#0B0B0D]/70 transition-colors duration-500 line-clamp-2">
                  Bangladesh Premier League (BPL)
                </p>
              </div>
            </div>
          </motion.div>

          {/* 11 */}
          <motion.div variants={itemVariants} className="group relative bg-[#F7F5F0] aspect-[5/4] flex flex-col items-center justify-center p-6 md:p-8 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(197,160,89,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"></div>
            <span className="absolute top-4 left-4 text-[#0B0B0D]/20 group-hover:text-[#C5A059] text-[9px] tracking-[0.3em] font-light transition-colors duration-500 z-10">11</span>
            <div className="relative w-full h-10 md:h-18 flex items-center justify-center mb-6 z-10">
              <Image src="/images/affiliation/mercedes.png" alt="Mercedes-Benz" fill sizes="(max-width: 768px) 50vw, 20vw" loading="lazy" className="object-contain transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center z-10">
              <div className="overflow-hidden">
                <p className="text-[11px] sm:text-xs lg:text-sm leading-snug font-light tracking-[0.05em] text-[#0B0B0D]/40 group-hover:text-[#0B0B0D]/70 transition-colors duration-500 line-clamp-2">
                  Mercedes-Benz
                </p>
              </div>
            </div>
          </motion.div>

          {/* 12 */}
          <motion.div variants={itemVariants} className="group relative bg-[#F7F5F0] aspect-[5/4] flex flex-col items-center justify-center p-6 md:p-8 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(197,160,89,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"></div>
            <span className="absolute top-4 left-4 text-[#0B0B0D]/20 group-hover:text-[#C5A059] text-[9px] tracking-[0.3em] font-light transition-colors duration-500 z-10">12</span>
            <div className="relative w-full h-10 md:h-14 flex items-center justify-center mb-6 z-10">
              <Image src="/images/affiliation/cips.png" alt="Chartered Institute of Procurement & Supply UK (CIPS)" fill sizes="(max-width: 768px) 50vw, 20vw" loading="lazy" className="object-contain transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center z-10">
              <div className="overflow-hidden">
                <p className="text-[11px] sm:text-xs lg:text-sm leading-snug font-light tracking-[0.05em] text-[#0B0B0D]/40 group-hover:text-[#0B0B0D]/70 transition-colors duration-500 line-clamp-2">
                  Chartered Institute of Procurement & Supply UK (CIPS)
                </p>
              </div>
            </div>
          </motion.div>

          {/* 13 */}
          <motion.div variants={itemVariants} className="group relative bg-[#F7F5F0] aspect-[5/4] flex flex-col items-center justify-center p-6 md:p-8 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(197,160,89,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"></div>
            <span className="absolute top-4 left-4 text-[#0B0B0D]/20 group-hover:text-[#C5A059] text-[9px] tracking-[0.3em] font-light transition-colors duration-500 z-10">13</span>
            <div className="relative w-full h-10 md:h-18 flex items-center justify-center mb-6 z-10">
              <Image src="/images/affiliation/dgdp.png" alt="Directorate General Defence Purchase (DGDP)" fill sizes="(max-width: 768px) 50vw, 20vw" loading="lazy" className="object-contain transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center z-10">
              <div className="overflow-hidden">
                <p className="text-[11px] sm:text-xs lg:text-sm leading-snug font-light tracking-[0.05em] text-[#0B0B0D]/40 group-hover:text-[#0B0B0D]/70 transition-colors duration-500 line-clamp-2">
                  Directorate General Defence Purchase (DGDP)
                </p>
              </div>
            </div>
          </motion.div>

          {/* 14 */}
          <motion.div variants={itemVariants} className="group relative bg-[#F7F5F0] aspect-[5/4] flex flex-col items-center justify-center p-6 md:p-8 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(197,160,89,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"></div>
            <span className="absolute top-4 left-4 text-[#0B0B0D]/20 group-hover:text-[#C5A059] text-[9px] tracking-[0.3em] font-light transition-colors duration-500 z-10">14</span>
            <div className="relative w-full h-10 md:h-14 flex items-center justify-center mb-6 z-10">
              <Image src="/images/affiliation/shoot.png" alt="Shooter's Shooting Club" fill sizes="(max-width: 768px) 50vw, 20vw" loading="lazy" className="object-contain transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center z-10">
              <div className="overflow-hidden">
                <p className="text-[11px] sm:text-xs lg:text-sm leading-snug font-light tracking-[0.05em] text-[#0B0B0D]/40 group-hover:text-[#0B0B0D]/70 transition-colors duration-500 line-clamp-2">
                  Shooter&apos;s Shooting Club
                </p>
              </div>
            </div>
          </motion.div>

          {/* 15 */}
          <motion.div variants={itemVariants} className="group relative bg-[#F7F5F0] aspect-[5/4] flex flex-col items-center justify-center p-6 md:p-8 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(197,160,89,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"></div>
            <span className="absolute top-4 left-4 text-[#0B0B0D]/20 group-hover:text-[#C5A059] text-[9px] tracking-[0.3em] font-light transition-colors duration-500 z-10">15</span>
            <div className="relative w-full h-10 md:h-19 flex items-center justify-center mb-6 z-10">
              <Image src="/images/affiliation/EHCl.png" alt="Express Highway Club And Lounge" fill sizes="(max-width: 768px) 50vw, 20vw" loading="lazy" className="object-contain transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center z-10">
              <div className="overflow-hidden">
                <p className="text-[11px] sm:text-xs lg:text-sm leading-snug font-light tracking-[0.05em] text-[#0B0B0D]/40 group-hover:text-[#0B0B0D]/70 transition-colors duration-500 line-clamp-2">
                  Express Highway Club And Lounge
                </p>
              </div>
            </div>
          </motion.div>

          {/* 16 */}
          <motion.div variants={itemVariants} className="group relative bg-[#F7F5F0] aspect-[5/4] flex flex-col items-center justify-center p-6 md:p-8 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(197,160,89,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"></div>
            <span className="absolute top-4 left-4 text-[#0B0B0D]/20 group-hover:text-[#C5A059] text-[9px] tracking-[0.3em] font-light transition-colors duration-500 z-10">16</span>
            <div className="relative w-full h-10 md:h-18 flex items-center justify-center mb-6 z-10">
              <Image src="/images/affiliation/Archery.png" alt="Bangladesh Archery Federation" fill sizes="(max-width: 768px) 50vw, 20vw" loading="lazy" className="object-contain transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center z-10">
              <div className="overflow-hidden">
                <p className="text-[11px] sm:text-xs lg:text-sm leading-snug font-light tracking-[0.05em] text-[#0B0B0D]/40 group-hover:text-[#0B0B0D]/70 transition-colors duration-500 line-clamp-2">
                  Bangladesh Archery Federation
                </p>
              </div>
            </div>
          </motion.div>

          {/* 17 */}
          <motion.div variants={itemVariants} className="group relative bg-[#F7F5F0] aspect-[5/4] flex flex-col items-center justify-center p-6 md:p-8 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(197,160,89,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"></div>
            <span className="absolute top-4 left-4 text-[#0B0B0D]/20 group-hover:text-[#C5A059] text-[9px] tracking-[0.3em] font-light transition-colors duration-500 z-10">17</span>
            <div className="relative w-full h-10 md:h-18 flex items-center justify-center mb-6 z-10">
              <Image src="/images/affiliation/Sampan Golf Academy.png" alt="Sampan Golf Academy" fill sizes="(max-width: 768px) 50vw, 20vw" loading="lazy" className="object-contain transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center z-10">
              <div className="overflow-hidden">
                <p className="text-[11px] sm:text-xs lg:text-sm leading-snug font-light tracking-[0.05em] text-[#0B0B0D]/40 group-hover:text-[#0B0B0D]/70 transition-colors duration-500 line-clamp-2">
                  Sampan Golf Academy
                </p>
              </div>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}