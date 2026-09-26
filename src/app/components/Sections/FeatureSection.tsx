"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

gsap.registerPlugin(useGSAP);

export default function FeatureSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
      },
    });

    // 1. Gold line draw + UI elements
    tl.fromTo(".feature-line", 
      { scaleX: 0 }, 
      { scaleX: 1, duration: 1.2, ease: "expo.out" }, 
      0
    )
    .fromTo(".feature-ui", 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" }, 
      0.2
    );

    // 2. Headline line-by-line reveal
    if (headlineRef.current) {
      const split = new SplitType(headlineRef.current, { types: "lines" });
      tl.fromTo(split.lines, 
        { yPercent: 120, opacity: 0 }, 
        { yPercent: 0, opacity: 1, duration: 1.4, stagger: 0.15, ease: "expo.out" }, 
        0.3
      );
    }

    // 3. Body paragraphs fade in
    tl.fromTo(bodyRef.current?.children || [], 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }, 
      1.2
    );

    // 4. Image clip-path reveal
    tl.fromTo(imageWrapRef.current, 
      { clipPath: "inset(100% 0% 0% 0%)" }, 
      { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5, ease: "expo.out" }, 
      0.5
    )
    .fromTo(imageRef.current, 
      { scale: 1.4 }, 
      { scale: 1.05, duration: 1.8, ease: "power3.out" }, 
      0.5
    );

    // 5. Subtle Scroll Parallax for Image
    gsap.to(imageRef.current, {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: imageWrapRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

  }, []);

  return (
    <section 
      ref={containerRef} 
      id="experience" 
      className="relative w-full min-h-screen py-32 md:py-40 overflow-hidden bg-soft-black"
    >
      {/* Architectural grid background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to right, #F5F1E8 1px, transparent 1px)",
          backgroundSize: "80px 100%",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 md:px-10 lg:px-16">
        
        {/* Top UI Metadata */}
        <div className="flex items-center justify-between mb-16 md:mb-24">
          <div className="flex items-center gap-3">
            <div className="feature-line h-px w-12 bg-champagne origin-left" />
            <span className="feature-ui text-[10px] uppercase tracking-[0.3em] text-muted-text">
              The Experience
            </span>
          </div>
          <span className="feature-ui hidden md:block text-[10px] uppercase tracking-[0.3em] text-muted-text">
            02 / 06
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-6 lg:col-start-1">
            <h2 
              ref={headlineRef}
              className="font-serif text-[clamp(3rem,8vw,7.5rem)] leading-[0.9] tracking-[-0.04em] text-warm-ivory"
            >
              <span className="block">Where Relaxation</span>
              <span className="block pl-[4vw] text-champagne/90">meets luxury.</span>
            </h2>

            <div ref={bodyRef} className="mt-12 max-w-lg space-y-6">
              <p className="text-[1.05rem] leading-relaxed text-muted-text md:text-lg">
                Express Highway Club & Lounge offers a sanctuary for those who appreciate the finer things in life. From meticulously curated interiors to bespoke concierge services, every detail is crafted to provide an atmosphere of uncompromising elegance and comfort.
              </p>
              <p className="text-[1.05rem] leading-relaxed text-muted-text/80 md:text-lg">
                Whether you are seeking a quiet space to unwind after a long journey or an exclusive venue to entertain distinguished guests, our facilities are designed to elevate every moment. Experience a standard of hospitality where your relaxation is our only priority.
              </p>
            </div>

            {/* Editorial Detail Line */}
            <div className="mt-12 flex items-center gap-4 group cursor-pointer w-fit">
              <span className="text-[11px] uppercase tracking-[0.3em] text-warm-ivory group-hover:text-champagne transition-colors">
                Explore Facilities
              </span>
              <div className="relative w-10 h-px bg-warm-ivory/30 group-hover:bg-champagne transition-colors">
                <span className="absolute right-0 top-1/2 -translate-y-1/2 text-champagne translate-x-[12px] group-hover:translate-x-[16px] transition-transform duration-300">↗</span>
              </div>
            </div>
          </div>

          {/* Right Visual Column */}
          <div className="lg:col-span-5 lg:col-start-8 relative">
            {/* Floating UI Badge over the image */}
            <div className="feature-ui absolute -left-6 top-8 z-20 border border-champagne/30 bg-warm-black/80 backdrop-blur-xl p-4 shadow-2xl hidden md:block">
              <div className="text-[9px] uppercase tracking-[0.28em] text-muted-text mb-1">Signature Lounge</div>
              <div className="text-sm font-medium text-warm-ivory">Private & Exclusive</div>
            </div>

            <div 
              ref={imageWrapRef}
              className="relative aspect-[3/4] w-full overflow-hidden border border-warm-ivory/10 will-change-transform"
            >
              <img 
                ref={imageRef}
                src="/images/experience-lounge.jpg" // Replace with your actual image
                alt="Express Highway Lounge Interior"
                className="w-full h-full object-cover will-change-transform"
                style={{ filter: "grayscale(15%) contrast(1.1) brightness(0.85)" }}
              />
              {/* Subtle gradient overlay for cinematic blend */}
              <div className="absolute inset-0 bg-gradient-to-t from-soft-black/80 via-transparent to-transparent" />
              
              {/* Image footer metadata */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end z-10">
                <div className="text-[9px] uppercase tracking-[0.3em] text-warm-ivory/70">
                  Architectural Harmony
                </div>
                <div className="text-[9px] uppercase tracking-[0.3em] text-warm-ivory/70">
                  2026
                </div>
              </div>
            </div>

            {/* Background geometric accent */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 border border-champagne/10 -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}