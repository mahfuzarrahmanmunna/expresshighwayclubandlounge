"use client";

import { motion } from "framer-motion";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export default function Footer() {
  const links = [
    { label: "Experience", href: "#experience" },
    { label: "Membership", href: "#membership" },
    { label: "Facilities", href: "#facilities" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative z-10 w-full bg-[#F7F5F0] border-t border-[#0B0B0D]/10 overflow-hidden">
      
      {/* --- Background Atmosphere --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Giant Ghost Typography */}
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[10rem] sm:text-[16rem] md:text-[24rem] text-[#0B0B0D] whitespace-nowrap pointer-events-none select-none leading-none opacity-[0.02]">
          EHI
        </span>
        {/* Fine Grain Texture */}
        <div className="absolute inset-0 opacity-[0.015] mix-blend-multiply" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        
        {/* --- Main Split Layout --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 mb-16 md:mb-24">
          
          {/* Left Column: Brand */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: smoothEase }}
            className="flex flex-col gap-6"
          >
            <h3 className="font-serif text-3xl md:text-4xl text-[#0B0B0D] tracking-[0.1em] font-normal">
              EHI
            </h3>
            <p className="text-[#0B0B0D]/50 text-sm font-light leading-[1.9] tracking-wide max-w-xs">
              Express Highway Club & Lounge. A sanctuary for the modern traveler.
            </p>
          </motion.div>

          {/* Right Column: Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: smoothEase, delay: 0.1 }}
            className="flex flex-col md:items-end gap-6"
          >
            <div className="flex flex-col md:items-end gap-4">
              <span className="text-[#987D3E] text-[9px] tracking-[0.4em] uppercase font-light">
                Navigation
              </span>
              <div className="flex flex-wrap md:justify-end gap-x-8 gap-y-4">
                {links.map((link) => (
                  <a 
                    key={link.label} 
                    href={link.href} 
                    className="group relative text-[#0B0B0D]/60 hover:text-[#C5A059] text-[10px] tracking-[0.3em] uppercase font-light transition-colors duration-300"
                  >
                    {link.label}
                    {/* Subtle underline expand on hover */}
                    <div className="absolute left-0 -bottom-1 w-0 h-px bg-[#C5A059] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full"></div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* --- Bottom Bar --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-[#0B0B0D]/10">
          <span className="text-[#0B0B0D]/40 text-[9px] tracking-[0.2em] uppercase font-light">
            © 2024 Express Highway Club & Lounge
          </span>
          <div className="flex gap-8">
            <a href="#" className="text-[#0B0B0D]/40 hover:text-[#C5A059] text-[9px] tracking-[0.2em] uppercase font-light transition-colors duration-300">
              Privacy
            </a>
            <a href="#" className="text-[#0B0B0D]/40 hover:text-[#C5A059] text-[9px] tracking-[0.2em] uppercase font-light transition-colors duration-300">
              Terms
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}