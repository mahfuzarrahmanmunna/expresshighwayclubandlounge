"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export default function Footer() {
  const socials = [
    {
      name: "Instagram",
      href: "#",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/expresshighwayinn",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/sampangroup/",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
    },
    {
      name: "X",
      href: "#",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-4 h-4">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.93l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
        </svg>
      ),
    },
  ];

  const exploreLinks = [
    { label: "Club & Lounge", href: "#club" },
    { label: "Membership", href: "#membership" },
    { label: "Sampan Group", href: "https://www.sampangroup.com.bd/" },
  ];

  return (
    <footer className="relative z-10 w-full bg-[#F7F5F0] border-t border-[#0B0B0D]/10 overflow-hidden">
      
      {/* --- Architectural Background Atmosphere --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Fine Grain Texture */}
        <div className="absolute inset-0 opacity-[0.015] mix-blend-multiply" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
        
        {/* --- Refined 12-Column Layout --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20 md:mb-16">
          
          {/* Column 1: Brand (Cols 1-5) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: smoothEase }}
            className="md:col-span-5 flex flex-col gap-8"
          >
            {/* Logo Implementation */}
            <div className="relative w-[140px] h-[45px] md:w-[160px] md:h-[50px]">
              <Image
                src="/logo/logo.png"
                alt="Express Highway Inn Logo"
                fill
                sizes="(max-width: 768px) 140px, 160px"
                className="object-contain object-left"
                priority
              />
            </div>
            
            <div className="flex flex-col gap-2 text-[#0B0B0D]/60 text-sm font-light leading-[1.9] tracking-wide max-w-xs">
              <span className="text-[#0B0B0D] font-normal tracking-wide">Express Highway Inn Club & Lounge</span>
              <span>Sampan Highway Inn</span>
              <span>Dhaka–Sylhet Highway, Bangladesh</span>
            </div>
            <p className="text-[#0B0B0D]/40 text-xs font-light leading-[1.8] tracking-wide italic max-w-[16rem]">
              Membership enquiries confirmed by the Sampan Group team.
            </p>
          </motion.div>

          {/* Column 2: Explore (Cols 6-8) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: smoothEase, delay: 0.1 }}
            className="md:col-span-3 flex flex-col gap-6"
          >
            <span className="text-[#987D3E] text-[9px] tracking-[0.4em] uppercase font-light">
              Explore
            </span>
            <ul className="flex flex-col gap-4">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group relative text-[#0B0B0D]/60 hover:text-[#C5A059] text-sm font-light tracking-wide transition-colors duration-300 w-fit"
                  >
                    {link.label}
                    <div className="absolute left-0 -bottom-1 w-0 h-px bg-[#C5A059] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full"></div>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Connect & Contact (Cols 9-12) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: smoothEase, delay: 0.2 }}
            className="md:col-span-4 flex flex-col gap-6 md:items-end"
          >
            <span className="text-[#987D3E] text-[9px] tracking-[0.4em] uppercase font-light">
              Connect
            </span>
            
            {/* Social Icons Row */}
            <div className="flex flex-wrap gap-3 md:justify-end">
              {socials.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative text-[#0B0B0D]/60 hover:text-[#C5A059] transition-colors duration-300 flex items-center justify-center w-10 h-10 border border-[#0B0B0D]/10 rounded-full hover:border-[#C5A059]/40"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Static Contact Details Block */}
            <div className="flex flex-col gap-5 md:items-end md:text-right mt-4 max-w-[280px]">
              {/* Visit Us */}
              <div className="flex flex-col gap-1">
                <span className="block text-[#987D3E] text-[9px] tracking-[0.3em] uppercase font-light">
                  Visit us
                </span>
                <p className="text-[#0B0B0D]/60 text-xs font-light leading-[1.8] tracking-wide">
                  Head Office: Sampan 21st Century, House-284, Block-B Road-1/A, Bashundhara, Dhaka-1229, Bangladesh.
                </p>
              </div>

              {/* Office Hours */}
              <div className="flex flex-col gap-1">
                <span className="block text-[#987D3E] text-[9px] tracking-[0.3em] uppercase font-light">
                  Office hours
                </span>
                <p className="text-[#0B0B0D]/60 text-xs font-light leading-[1.8] tracking-wide">
                  10:00 AM - 06:00 PM
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* --- Refined Entities Bar --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-8 border-y border-[#0B0B0D]/10">
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-6 gap-y-3 text-[#0B0B0D]/40 text-[9px] tracking-[0.2em] uppercase font-light">
            <a href="https://www.sampangroup.com.bd/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] transition-colors duration-300">Sampan Group</a>
            <div className="hidden sm:block w-px h-3 bg-[#0B0B0D]/20"></div>
            <a href="https://lshs.co.uk/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] transition-colors duration-300">LSHS</a>
            <div className="hidden sm:block w-px h-3 bg-[#0B0B0D]/20"></div>
            <a href="https://www.sampangroup.com.bd/our-divisions/hospitality-highway-travel/sampan-agro-golf-resort" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] transition-colors duration-300 text-center">Sampan Agro & Golf Resort</a>
            <div className="hidden sm:block w-px h-3 bg-[#0B0B0D]/20"></div>
            <a href="https://www.expresshighwayinn.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] transition-colors duration-300">Express Highway Inn</a>
          </div>
        </div>

        {/* --- Bottom Legal Bar --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
          <span className="text-[#0B0B0D]/40 text-[9px] tracking-[0.2em] uppercase font-light">
            © 2024 Express Highway Club & Lounge
          </span>
          <div className="flex gap-6 md:gap-8">
            <a href="#" className="text-[#0B0B0D]/40 hover:text-[#C5A059] text-[9px] tracking-[0.2em] uppercase font-light transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-[#0B0B0D]/40 hover:text-[#C5A059] text-[9px] tracking-[0.2em] uppercase font-light transition-colors duration-300">
              Terms
            </a>
            <a href="#" className="text-[#0B0B0D]/40 hover:text-[#C5A059] text-[9px] tracking-[0.2em] uppercase font-light transition-colors duration-300">
              Membership Terms
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}