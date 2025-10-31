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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-background/95"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className="floating-element-1 parallax-element absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="floating-element-2 parallax-slow absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="floating-element-3 parallax-element absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-cyan-500/5 rounded-full blur-3xl" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        {/* Eyebrow text */}
        <div className="hero-subtitle mb-6">
          <span className="inline-block px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 text-sm font-medium">
            Welcome to my portfolio
          </span>
        </div>

        {/* Main heading */}
        <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          <span className="block bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent">
            Hola, soy Oscar Valdivieso
          </span>
        </h1>

        {/* Subheading */}
        <p className="hero-description text-xl sm:text-2xl md:text-3xl text-foreground/70 font-light mb-8 max-w-3xl mx-auto">
          Creative Developer & Designer crafting exceptional digital experiences
        </p>

        {/* Description */}
        <p className="hero-description text-base sm:text-lg text-foreground/60 mb-12 max-w-2xl mx-auto leading-relaxed">
          I build beautiful, performant web applications with modern technologies.
          Passionate about clean code, user experience, and bringing ideas to life.
        </p>

        {/* CTA Buttons */}
        <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group relative px-8 py-4 bg-foreground text-background rounded-full font-semibold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-2xl">
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          <button className="px-8 py-4 bg-transparent border-2 border-foreground/20 text-foreground rounded-full font-semibold text-lg hover:border-foreground/40 hover:bg-foreground/5 transition-all hover:scale-105">
            Get In Touch
          </button>
        </div>

        {/* Social links or tech stack indicators */}
        <div className="hero-cta mt-16 flex gap-6 justify-center items-center text-foreground/40">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm">Available for work</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToContent}
        className="hero-scroll-indicator absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/40 hover:text-foreground/60 transition-colors cursor-pointer"
        aria-label="Scroll to content"
      >
        <span className="text-sm font-medium">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-current rounded-full" />
        </div>
      </button>
    </div>
  );
}
