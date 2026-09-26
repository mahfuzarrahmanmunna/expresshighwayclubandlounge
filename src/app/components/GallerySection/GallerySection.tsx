"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// --- Gallery Data ---
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1542316018-2e9559b4ff08?q=80&w=2000&auto=format&fit=crop",
    alt: "Luxury Lobby Architecture",
    span: "md:col-span-2 md:row-span-2",
    label: "The Grand Lobby",
  },
  {
    src: "https://images.unsplash.com/photo-1551775848-6c8b5c1f9a6b?q=80&w=1200&auto=format&fit=crop",
    alt: "Private Lounge Detail",
    span: "",
    label: "VIP Lounge",
  },
  {
    src: "https://images.unsplash.com/photo-1566073727765-25c947c5f7a6?q=80&w=1200&auto=format&fit=crop",
    alt: "Suite Interior",
    span: "",
    label: "Presidential Suite",
  },
  {
    src: "https://images.unsplash.com/photo-1551105378-78c81115e4a9?q=80&w=1200&auto=format&fit=crop",
    alt: "Dining Hall",
    span: "md:col-span-2",
    label: "Highway Restaurant",
  },
  {
    src: "https://images.unsplash.com/photo-1545558014-9312022d4bbc?q=80&w=1200&auto=format&fit=crop",
    alt: "Wellness Area",
    span: "",
    label: "Wellness & Spa",
  },
  {
    src: "/images/billiards.jpeg",
    alt: "Recreation Room",
    span: "",
    label: "Billiards Room",
  },
];

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null));
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null));
  }, []);

  const closeLightbox = useCallback(() => {
    setActiveIndex(null);
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [activeIndex, closeLightbox, handleNext, handlePrev]);

  return (
    <section className="relative z-10 w-full bg-[#F7F5F0] py-24 md:py-32 overflow-hidden">
      
      {/* --- Background Atmosphere --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft Sunlight from Top Right */}
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[radial-gradient(circle_at_80%_0%,_rgba(216,195,154,0.12),transparent_35%)]" />
        {/* Giant Ghost Typography */}
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[16rem] sm:text-[24rem] md:text-[32rem] text-[#0B0B0D] whitespace-nowrap pointer-events-none select-none leading-none opacity-[0.025]">
          GALLERY
        </span>
        {/* Fine Grain Texture */}
        <div className="absolute inset-0 opacity-[0.015] mix-blend-multiply" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }} />
      </div>

      {/* --- Section Header --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-24">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 md:w-16 h-px bg-[#C5A059]" />
              <span className="text-[#987D3E] text-[10px] md:text-xs tracking-[0.4em] uppercase font-light whitespace-nowrap">
                06 — Gallery
              </span>
            </div>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#0B0B0D] leading-[0.9] tracking-[-0.02em] font-normal">
              Moments in <br/>
              <span className="italic font-extralight text-[#0B0B0D]/60">Frame.</span>
            </h2>
          </div>
          <p className="text-[#0B0B0D]/50 text-sm md:text-base font-light leading-[1.9] tracking-wide max-w-sm md:mt-4 md:text-right">
            A visual journey through the architecture, interiors, and curated experiences of the Express Highway Club & Lounge.
          </p>
        </div>
      </div>

      {/* --- Asymmetric Image Grid --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[220px] md:auto-rows-[280px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
              className={`relative overflow-hidden cursor-pointer group rounded-xl border border-[#0B0B0D]/10 shadow-[0_20px_50px_-20px_rgba(11,11,13,0.15)] ${image.span}`}
              onClick={() => { setDirection(1); setActiveIndex(index); }}
            >
              {/* Image Layer */}
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover object-center transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
              />
              
              {/* Subtle Bottom Gradient for Label Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              
              {/* Hover UI - View Indicator */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="flex items-center gap-3 border border-[#C5A059] px-6 py-2 rounded-full bg-white/70 backdrop-blur-sm">
                  <span className="text-[#0B0B0D] text-[9px] tracking-[0.3em] uppercase font-sans font-medium">View</span>
                  <span className="text-[#C5A059] text-sm">→</span>
                </div>
              </div>

              {/* Label */}
              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-10">
                <span className="text-white text-[10px] md:text-xs tracking-[0.3em] uppercase font-sans font-light drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]">
                  {image.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ==========================================
          PREMIUM IMAGE VIEWER (LIGHTBOX)
          ========================================== */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            // FIX: Increased z-index to z-[9999] so it layers above the global Navbar
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0B0B0D]/95 backdrop-blur-md p-4 md:p-12"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
              className="absolute top-8 right-8 md:top-12 md:right-12 z-[10000] flex items-center gap-3 text-[#F5F3EE]/70 hover:text-[#C5A059] transition-colors duration-300 group"
            >
              <span className="text-[10px] tracking-[0.3em] uppercase font-sans">Close</span>
              <div className="relative w-6 h-6 flex items-center justify-center">
                <span className="absolute w-full h-px bg-current rotate-45"></span>
                <span className="absolute w-full h-px bg-current -rotate-45"></span>
              </div>
            </button>

            {/* Previous Arrow */}
            <button
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-[10000] text-[#F5F3EE]/50 hover:text-[#C5A059] transition-colors duration-300 p-4"
            >
              <span className="text-3xl md:text-4xl font-serif">‹</span>
            </button>

            {/* Image Container */}
            <div className="relative w-full h-full max-w-6xl flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  <Image
                    src={galleryImages[activeIndex].src}
                    alt={galleryImages[activeIndex].alt}
                    fill
                    sizes="100vw"
                    className="object-contain object-center"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next Arrow */}
            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-[10000] text-[#F5F3EE]/50 hover:text-[#C5A059] transition-colors duration-300 p-4"
            >
              <span className="text-3xl md:text-4xl font-serif">›</span>
            </button>

            {/* Caption & Counter */}
            <div className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 z-[10000] flex flex-col items-center gap-2 text-center">
              <span className="text-[#C5A059] text-[10px] tracking-[0.3em] uppercase font-sans font-light">
                {String(activeIndex + 1).padStart(2, '0')} / {String(galleryImages.length).padStart(2, '0')}
              </span>
              <span className="text-[#F5F3EE]/80 text-sm md:text-base font-serif italic tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                {galleryImages[activeIndex].label}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}