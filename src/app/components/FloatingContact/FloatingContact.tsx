"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const contactOptions = [
    {
      name: "Call us",
      href: "tel:+8801906896327",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/8801906896327",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      ),
    },
    {
      name: "Email us",
      href: "mailto:contact@expresshighwayclub.com",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
    },
  ];

  return (
    <div 
      ref={containerRef} 
      className="fixed bottom-6 right-6 z-[9000] flex flex-col items-end gap-4"
    >
      {/* Expandable Contact Options */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-end gap-4"
          >
            {contactOptions.map((option, i) => (
              <motion.a 
                key={option.name}
                href={option.href}
                target={option.href.startsWith("http") ? "_blank" : undefined}
                rel={option.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.8 }}
                transition={{ delay: i * 0.08, duration: 0.4, ease: smoothEase }}
                className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-[#0B0B0D] border border-[#C5A059]/30 shadow-lg text-[#C5A059] hover:bg-[#C5A059] hover:text-[#0B0B0D] transition-colors duration-300"
                aria-label={option.name}
              >
                {option.icon}
                
                {/* Tooltip Label */}
                <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-[#0B0B0D] text-[#F5F3EE] text-[9px] tracking-[0.3em] uppercase px-3 py-2 rounded-md border border-[#C5A059]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                  {option.name}
                </span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.9 }}
        className="relative w-14 h-14 rounded-full bg-[#0B0B0D] border border-[#C5A059]/40 shadow-xl flex items-center justify-center text-[#C5A059] hover:bg-[#C5A059] hover:text-[#0B0B0D] transition-colors duration-300 z-10"
        aria-label={isOpen ? "Close contact options" : "Open contact options"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.svg 
              key="close" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-6 h-6"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.3, ease: smoothEase }}
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </motion.svg>
          ) : (
            <motion.svg 
              key="message" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-6 h-6"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.3, ease: smoothEase }}
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}