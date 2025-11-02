'use client';

import { useEffect, useRef } from 'react';
import {
  initHeroAnimations,
  initParallaxEffect,
  initScrollIndicator,
  createFloatingAnimation,
} from '@/lib/animations/gsap-utils';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize hero animations
    const timeline = initHeroAnimations();

    // Initialize parallax effect
    const cleanupParallax = initParallaxEffect(heroRef.current);

    // Initialize scroll indicator animation
    const scrollIndicator = initScrollIndicator();

    // Floating animation for decorative elements
    createFloatingAnimation('.floating-element-1', 4);
    createFloatingAnimation('.floating-element-2', 5);
    createFloatingAnimation('.floating-element-3', 3.5);

    // Cleanup function
    return () => {
      timeline.kill();
      scrollIndicator.kill();
      if (cleanupParallax) cleanupParallax();
    };
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Animated background elements - subtle and modern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft gradient orbs for depth */}
        <div className="floating-element-1 parallax-element absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/8 rounded-full blur-3xl" />
        <div className="floating-element-2 parallax-slow absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-purple-400/6 rounded-full blur-3xl" />
        <div className="floating-element-3 parallax-element absolute top-1/3 right-1/3 w-80 h-80 bg-cyan-400/5 rounded-full blur-3xl" />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,black_20%,transparent_80%)]" />
      </div>

      {/* Main content - centered name */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Main heading - Large and centered */}
        <h1 className="hero-title">
          <span className="block text-[clamp(3rem,12vw,10rem)] font-black tracking-tighter leading-[0.9] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-600 bg-clip-text text-transparent">
            Oscar
          </span>
          <span className="block text-[clamp(3rem,12vw,10rem)] font-black tracking-tighter leading-[0.9] mt-2 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-500 bg-clip-text text-transparent">
            Valdivieso
          </span>
        </h1>

        {/* Minimal decorative line */}
        <div className="hero-description mt-12 mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
      </div>

      {/* Scroll indicator - minimal */}
      <button
        onClick={scrollToContent}
        className="hero-scroll-indicator absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer group"
        aria-label="Scroll to content"
      >
        <div className="w-6 h-10 rounded-full border-2 border-gray-300 group-hover:border-gray-400 flex items-start justify-center p-2 transition-colors">
          <div className="w-1.5 h-1.5 bg-gray-400 group-hover:bg-gray-600 rounded-full animate-bounce" />
        </div>
      </button>
    </div>
  );
}
