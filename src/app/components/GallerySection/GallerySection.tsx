"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// --- Gallery Data (24 Luxury Images) ---
const galleryImages = [
  { src: "/images/restaurant-hall-with-round-square-tables-some-chairs-plants (2).jpg", alt: "Luxury Lobby Architecture", span: "md:col-span-2 md:row-span-2", label: "The Grand Lobby" },
  { src: "/images/clubandlounge.jpeg", alt: "Private Lounge Detail", span: "", label: "VIP Lounge" },
  { src: "/images/lounge.jpg", alt: "Suite Interior", span: "", label: "Presidential Suite" },
  { src: "/images/Express-Highway-Inn-New-Model-Design-2.jpg", alt: "Dining Hall", span: "md:col-span-2", label: "Highway Restaurant" },
  { src: "/images/spa.jpeg", alt: "Wellness Area", span: "", label: "Wellness & Spa" },
  { src: "/images/billiards.jpeg", alt: "Recreation Room", span: "", label: "Billiards Room" },
  { src: "/images/emporium.jpeg", alt: "Infinity Pool", span: "md:col-span-2 md:row-span-2", label: "Infinity Pool" },
  { src: "/images/lounge.jpg", alt: "Concierge Desk", span: "", label: "Concierge Desk" },
  { src: "/images/club1.png", alt: "Fine Dining Plating", span: "", label: "Culinary Art" },
  { src: "/images/gym.jpg", alt: "Martini Bar", span: "md:col-span-2", label: "Martini Bar" },
  { src: "/images/prayerroom.jpg", alt: "Prayer Room", span: "", label: "Prayer Room" },
  { src: "/images/Imasge-Edit-6.jpg", alt: "Executive Boardroom", span: "", label: "Boardroom" },
  { src: "/images/Imasge-Edit-1.jpg", alt: "Suite Bathroom", span: "md:col-span-2 md:row-span-2", label: "Marble Bathroom" },
  { src: "/images/carwash.jpeg", alt: "Car Wash", span: "", label: "Auto Car Wash" },
  { src: "/images/Image.jpg", alt: "Nighttime Exterior", span: "", label: "Nighttime Exterior" },
  { src: "/images/Imasge-Edit-12.jpg", alt: "Spa Treatment", span: "md:col-span-2", label: "Spa Treatment" },
  { src: "/images/istockphoto-109727081-612x612.webp", alt: "Lobby Staircase", span: "", label: "Grand Staircase" },
  { src: "/images/rooms.jpg", alt: "Cigar Lounge", span: "", label: "Cigar Lounge" },
  { src: "/images/bar.jpg", alt: "Wine Cellar", span: "md:col-span-2 md:row-span-2", label: "Wine Cellar" },
  { src: "/images/game.jpg", alt: "Games Room", span: "", label: "Games Room" },
  { src: "/images/Elysium_Maisonettes_0014-Edit-1-800x600.jpg", alt: "Bedroom Detail", span: "", label: "Suite Details" },
  { src: "/images/days.jpeg", alt: "Gold Architectural Detail", span: "md:col-span-2", label: "Architectural Details" },
  { src: "/images/evcarcharging.jpeg", alt: "EV Charging Station", span: "", label: "EV Charging" },
  { src: "/images/gym.jpg", alt: "Fitness Center", span: "", label: "Fitness Center" },
];

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);
  
  // Touch Swipe State
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Navigation functions
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

  // Keyboard events for Lightbox
  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden"; // Lock scroll

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto"; // Unlock scroll
    };
  }, [activeIndex, closeLightbox, handleNext, handlePrev]);

  // Touch Swipe Handlers
  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const minSwipeDistance = 50;
    const distance = touchStart - touchEnd;
    
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
  };

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
                06 - Gallery
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
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: (index % 4) * 0.1 }}
              className={`group relative overflow-hidden cursor-pointer rounded-lg border border-[#0B0B0D]/5 hover:border-[#C5A059]/30 transition-all duration-500 shadow-[0_15px_40px_-15px_rgba(11,11,13,0.1)] hover:shadow-[0_25px_60px_-20px_rgba(11,11,13,0.2)] ${image.span}`}
              onClick={() => { setDirection(1); setActiveIndex(index); }}
            >
              {/* Image Layer */}
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover object-center transition-transform duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
              />
              
              {/* Subtle Inner Border Highlight */}
              <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15)] pointer-events-none z-10" />
              
              {/* Subtle Bottom Gradient for Label Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
              
              {/* Label & Indicator */}
              <div className="absolute bottom-5 left-5 md:bottom-6 md:left-6 z-20">
                <span className="text-white text-[10px] md:text-xs tracking-[0.3em] uppercase font-sans font-light drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]">
                  {image.label}
                </span>
                {/* Expanding Gold Line on Hover */}
                <div className="h-px w-0 bg-[#C5A059] mt-2 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-8"></div>
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
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0B0B0D]/96 backdrop-blur-md p-4 md:p-12"
            onClick={closeLightbox}
          >
            {/* Ambient Gold Glow inside Lightbox */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(197,160,89,0.04),transparent_70%)] pointer-events-none z-0"></div>

            {/* Close Button */}
            <button
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
              className="absolute top-8 right-8 md:top-12 md:right-12 z-[10000] flex items-center gap-3 text-[#F5F3EE]/60 hover:text-[#C5A059] transition-colors duration-300 group"
            >
              <span className="text-[10px] tracking-[0.4em] uppercase font-sans font-light">Close</span>
              <div className="relative w-8 h-8 flex items-center justify-center border border-[#F5F3EE]/20 rounded-full group-hover:border-[#C5A059]/50 transition-colors duration-300">
                <span className="absolute w-3 h-px bg-current rotate-45"></span>
                <span className="absolute w-3 h-px bg-current -rotate-45"></span>
              </div>
            </button>

            {/* Previous Arrow (Desktop) */}
            <button
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="hidden md:flex absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-[10000] w-12 h-12 rounded-full border border-[#F5F3EE]/20 hover:border-[#C5A059]/50 text-[#F5F3EE]/60 hover:text-[#C5A059] transition-all duration-300 items-center justify-center group"
              aria-label="Previous image"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            {/* Image Container with Touch Swipe Support */}
            <div 
              className="relative w-full h-full max-w-6xl flex items-center justify-center touch-none z-10" 
              onClick={(e) => e.stopPropagation()}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  <Image
                    src={galleryImages[activeIndex].src}
                    alt={galleryImages[activeIndex].alt}
                    fill
                    sizes="100vw"
                    className="object-contain object-center pointer-events-none"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next Arrow (Desktop) */}
            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="hidden md:flex absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-[10000] w-12 h-12 rounded-full border border-[#F5F3EE]/20 hover:border-[#C5A059]/50 text-[#F5F3EE]/60 hover:text-[#C5A059] transition-all duration-300 items-center justify-center group"
              aria-label="Next image"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>

            {/* Caption & Counter */}
            <div className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 z-[10000] flex flex-col items-center gap-3 text-center">
              <div className="flex items-center gap-3">
                <span className="text-[#C5A059] text-[10px] tracking-[0.4em] uppercase font-sans font-light">
                  {String(activeIndex + 1).padStart(2, '0')}
                </span>
                <div className="w-8 h-px bg-[#F5F3EE]/20"></div>
                <span className="text-[#F5F3EE]/40 text-[10px] tracking-[0.4em] uppercase font-sans font-light">
                  {String(galleryImages.length).padStart(2, '0')}
                </span>
              </div>
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