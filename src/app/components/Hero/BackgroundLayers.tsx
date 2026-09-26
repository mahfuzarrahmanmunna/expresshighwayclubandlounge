"use client";
import { useEffect, useRef } from "react";

export default function BackgroundLayers({ scrollProgress }: { scrollProgress: React.MutableRefObject<number> }) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId = 0;
    const updateGrid = () => {
      if (gridRef.current) {
        const x = scrollProgress.current * -180;
        gridRef.current.style.transform = `translate3d(${x}px, 0, 0)`;
      }
      rafId = requestAnimationFrame(updateGrid);
    };

    updateGrid();
    return () => cancelAnimationFrame(rafId);
  }, [scrollProgress]);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-warm-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(240,203,102,0.12),transparent_30%),radial-gradient(circle_at_72%_28%,rgba(255,255,255,0.06),transparent_26%),radial-gradient(circle_at_50%_80%,rgba(240,203,102,0.06),transparent_34%)]" />

      <div ref={gridRef} className="hero-grid absolute inset-0 opacity-40" />

      <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.04)_38%,transparent_55%)] mix-blend-screen" />

      <div className="absolute left-[7%] top-[15%] h-56 w-56 rounded-full border border-champagne/20 bg-champagne/5 blur-[2px] hero-orbit" />
      <div className="absolute bottom-[10%] right-[8%] h-[26rem] w-[26rem] rounded-full bg-champagne/8 blur-[120px] animate-pulse-slow" />
      <div className="absolute left-1/3 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-warm-ivory/5 blur-[110px]" />

      <svg className="absolute inset-0 h-full w-full opacity-20 mix-blend-overlay" aria-hidden="true">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="table" tableValues="0 0.14" />
          </feComponentTransfer>
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
} 