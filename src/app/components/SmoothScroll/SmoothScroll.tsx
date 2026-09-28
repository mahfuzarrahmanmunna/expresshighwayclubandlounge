"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    // 1. Initialize Lenis with optimized luxury settings
    const lenis = new Lenis({
      // Use 'lerp' for continuous, buttery interpolation (ignores duration)
      lerp: 0.08,           // 0.05 to 0.1 is the sweet spot for luxury feel. Lower = smoother/heavier.
      smoothWheel: true,    // MUST be true to enable smooth scrolling for mouse users
      wheelMultiplier: 1,   // 1 is natural speed. Increase to 1.2 if it feels too slow.
      touchMultiplier: 1.5, // Slightly faster for touch devices
      // easing is removed because lerp handles the easing naturally
    });


    // 3. Standard requestAnimationFrame loop
    let rafId: number;
    const loop = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);

    // 4. Cleanup
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
