"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const facilities = [
  { 
    id: 1, 
    number: "01", 
    name: "VVIP Lounge & Premium Rooms", 
    label: "Exclusive Access", 
    description: "Guaranteed access to the VVIP Lounge and Premium Accommodation Rooms, even during peak travel weekends and holiday rushes.", 
    image: "/images/lounge.jpg" 
  },
  { 
    id: 2, 
    number: "02", 
    name: "Restaurant & Sampan Mart", 
    label: "Dining & Retail", 
    description: "Preferred member rates at the Highway Restaurant and Sampan Mart, on every visit, for you and your travelling party.", 
    image: "/images/restaurant-hall-with-round-square-tables-some-chairs-plants (2).jpg" 
  },
  { 
    id: 3, 
    number: "03", 
    name: "Wellness on the road", 
    label: "Health & Recreation", 
    description: "Salon & Spa, Gym, and Pool access included — a proper reset between legs of a long drive.", 
    image: "/images/spa.jpeg" 
  },
  { 
    id: 4, 
    number: "04", 
    name: "Vehicle care, prioritised", 
    label: "Automotive Support", 
    description: "Priority EV charging, car wash, and towing support, so the car is looked after while you are.", 
    image: "/images/carwash.jpeg" 
  },
  { 
    id: 5, 
    number: "05", 
    name: "Prayer Room & Banking Booth", 
    label: "Essential Services", 
    description: "A quiet, dedicated Prayer Room and a 24/7 CRM Banking Booth, on site whenever you need either.", 
    image: "/images/prayerroom.jpg" 
  },
  { 
    id: 6, 
    number: "06", 
    name: "Billiards, Cards & Bar", 
    label: "Social Entertainment", 
    description: "Billiards, the Card Room, and the Juice & Drinks Bar — somewhere to sit down properly before the next leg.", 
    image: "/images/billiards.jpeg" 
  },
  { 
    id: 7, 
    number: "07", 
    name: "One card, one network", 
    label: "The Sampan Group", 
    description: "A membership recognised across Sampan Group's expanding highway footprint, not just this single property.", 
    image: "/images/clubandlounge.jpeg" 
  },
];

export default function FacilitiesHorizontalSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      section.style.height = "auto";
      track.style.transform = "none";
      track.style.overflowX = "auto";
      track.style.scrollSnapType = "x mandatory";
      return;
    }

    const ctx = gsap.context(() => {
      const images = section.querySelectorAll("img");
      const getScrollAmount = () => track.scrollWidth - window.innerWidth;

      const tween = gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: section, start: "top top", end: () => `+=${getScrollAmount()}`, scrub: 1, pin: true, anticipatePin: 1, invalidateOnRefresh: true,
        },
      });

      if (progressRef.current) {
        gsap.to(progressRef.current, {
          scaleX: 1, ease: "none",
          scrollTrigger: { trigger: section, start: "top top", end: () => `+=${getScrollAmount()}`, scrub: 1 },
        });
      }

      const clouds = section.querySelectorAll(".cloud-layer");
      clouds.forEach((cloud, index) => {
        gsap.to(cloud, { x: index % 2 === 0 ? "15%" : "-15%", duration: 25 + index * 10, repeat: -1, yoyo: true, ease: "sine.inOut" });
      });

      const cardImages = section.querySelectorAll(".card-image");
      cardImages.forEach((img) => {
        gsap.to(img, { x: "-2%", ease: "none", scrollTrigger: { trigger: img, start: "left center", end: "right center", horizontal: false, scrub: 1, containerAnimation: tween } });
      });

      images.forEach((img) => { img.addEventListener("load", () => ScrollTrigger.refresh()); });
      const onResize = () => ScrollTrigger.refresh();
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }, sectionRef);

    const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 200);
    return () => { clearTimeout(refreshTimer); ctx.revert(); };
  }, []);

  return (
    <section ref={sectionRef} className="relative z-30 isolate w-full h-screen bg-[#F7F5F0] overflow-hidden overflow-x-clip" style={{ backgroundImage: "linear-gradient(to bottom, #FCFBF8 0%, #F4F1EA 100%)" }}>
      
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[radial-gradient(circle_at_80%_0%,_rgba(197,160,89,0.13),transparent_35%)]" />
        <div className="cloud-layer absolute top-[5%] left-[-10%] w-[120%] h-[40%] bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.8),transparent_60%)] blur-3xl opacity-60" />
        <div className="cloud-layer absolute top-[30%] left-[-20%] w-[140%] h-[30%] bg-[radial-gradient(ellipse_at_center,_rgba(248,246,240,0.6),transparent_60%)] blur-3xl opacity-50" />
        <div className="cloud-layer absolute bottom-0 left-[-10%] w-[100%] h-[40%] bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.5),transparent_60%)] blur-2xl opacity-40" />
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[18vw] text-[#0B0B0D]/[0.025] whitespace-nowrap pointer-events-none select-none leading-none">THE JOURNEY</span>
      </div>

      <div className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center p-6 md:p-12 pointer-events-none">
        <div className="flex items-center gap-4">
          <span className="w-1.5 h-1.5 bg-[#C5A059] rounded-full" />
          <span className="text-[#0B0B0D]/55 text-[9px] md:text-[10px] tracking-[0.3em] uppercase font-sans font-light">Express Highway Club</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[#0B0B0D]/55 text-[9px] md:text-[10px] tracking-[0.3em] uppercase font-sans font-light">Benefits</span>
          <span className="text-[#C5A059] text-[9px] md:text-[10px] tracking-[0.3em] uppercase font-sans font-light">03 / 07</span>
        </div>
      </div>

      <div className="absolute top-0 left-0 h-full flex items-center z-10 will-change-transform">
        <div ref={trackRef} className="flex items-center gap-8 md:gap-10 pl-6 md:pl-16 pr-[10vw]">
          
          {/* Intro Panel */}
          <div className="flex-shrink-0 w-[85vw] md:w-[50vw] lg:w-[40vw] h-[76vh] md:h-[82vh] flex flex-col justify-center pr-8 md:pr-20 border-r border-[#0B0B0D]/[0.12] relative">
            <div className="absolute top-0 right-8 w-px h-12 bg-[#C5A059]" />
            <div className="flex items-center gap-6 mb-8">
              <div className="w-12 h-px bg-[#C5A059]" />
              <span className="text-[#C5A059] text-[10px] tracking-[0.4em] uppercase font-sans font-light whitespace-nowrap">03 — Membership</span>
            </div>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#0B0B0D] leading-[0.9] tracking-[-0.02em] mb-10 font-normal">
              Why Members <br/> Choose <br/>
              <span className="italic font-light text-[#0B0B0D]/60">Express Highway Inn.</span>
            </h2>
            <p className="text-[#0B0B0D]/50 text-sm md:text-base font-sans font-light leading-[1.9] tracking-wide max-w-sm mb-12">
              Every facility, held for you. A carefully considered collection of privileges designed around every journey.
            </p>
            <div className="flex items-center gap-4 text-[#0B0B0D]/40 text-[9px] tracking-[0.3em] uppercase font-sans">
              Scroll to Explore
              <div className="relative w-px h-16 bg-[#0B0B0D]/10 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-[#C5A059] animate-[scrollDown_2s_ease-in-out_infinite]"></div>
              </div>
            </div>
          </div>

          {/* Cards */}
          {facilities.map((facility, index) => (
            <article key={facility.id} className="group relative flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[33vw] h-[76vh] md:h-[82vh] rounded-[8px] overflow-hidden border border-[#C5A059]/30 shadow-[0_20px_60px_rgba(17,17,17,0.08)] transition-all duration-700 hover:border-[#C5A059]/60 cursor-pointer">
              <div className="card-image absolute inset-0 overflow-hidden">
                <Image src={facility.image} alt={facility.name} fill priority={index === 0} sizes="(max-width: 768px) 85vw, 33vw" className="object-cover object-center transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D]/50 via-transparent to-transparent" />
              <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.25)] pointer-events-none" />
              <span className="absolute bottom-[8%] right-[8%] font-serif text-[8rem] text-[#0B0B0D]/[0.08] leading-none pointer-events-none select-none transition-opacity duration-700 group-hover:text-[#0B0B0D]/[0.12]">{facility.number}</span>
              <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1">
                <div className="flex flex-col gap-2 mb-4">
                  <span className="text-[#C5A059] text-[10px] tracking-[0.4em] uppercase font-sans font-light">{facility.number} <span className="text-white/50">/ {facility.label}</span></span>
                </div>
                <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white tracking-[-0.02em] leading-[0.95] mb-3 font-normal">{facility.name}</h3>
                <p className="text-white/80 text-xs md:text-sm font-sans font-light leading-[1.8] tracking-wide max-w-[320px] opacity-80 group-hover:opacity-100 transition-opacity duration-500">{facility.description}</p>
              </div>
              <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-20 flex items-center gap-3">
                <span className="text-white/60 group-hover:text-[#C5A059] text-[9px] tracking-[0.3em] uppercase font-sans transition-colors duration-500">View</span>
                <span className="text-white/60 group-hover:text-[#C5A059] text-base transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5">→</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 w-[50%] max-w-md flex items-center gap-4 pointer-events-none">
        <span className="text-[#0B0B0D]/40 text-[9px] tracking-[0.3em] font-sans">01</span>
        <div className="relative flex-1 h-px bg-[#0B0B0D]/[0.12] overflow-hidden">
          <div ref={progressRef} className="absolute top-0 left-0 w-full h-full bg-[#C5A059] origin-left scale-x-0" />
        </div>
        <span className="text-[#0B0B0D]/40 text-[9px] tracking-[0.3em] font-sans">07</span>
      </div>
    </section>
  );
}