import { gsap } from 'gsap';

/**
 * Initialize GSAP animations for hero section elements
 */
export const initHeroAnimations = () => {
  const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

  // Animate hero elements with stagger effect
  timeline
    .fromTo(
      '.hero-title',
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out' }
    )
    .fromTo(
      '.hero-subtitle',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      '-=0.6'
    )
    .fromTo(
      '.hero-description',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      '-=0.4'
    )
    .fromTo(
      '.hero-cta',
      { y: 30, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 0.6 },
      '-=0.3'
    )
    .fromTo(
      '.hero-scroll-indicator',
      { opacity: 0 },
      { opacity: 1, duration: 0.5 },
      '-=0.2'
    );

  return timeline;
};

/**
 * Create floating animation for 
 *  elements
 */
export const createFloatingAnimation = (selector: string, duration: number = 3) => {
  return gsap.to(selector, {
    y: '+=20',
    duration,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true,
  });
};

/**
 * Parallax effect on mouse move
 */
export const initParallaxEffect = (containerRef: HTMLElement | null) => {
  if (!containerRef) return;

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    const xPos = (clientX / innerWidth - 0.5) * 2;
    const yPos = (clientY / innerHeight - 0.5) * 2;

    gsap.to('.parallax-element', {
      x: xPos * 30,
      y: yPos * 30,
      duration: 0.5,
      ease: 'power2.out',
    });

    gsap.to('.parallax-slow', {
      x: xPos * 15,
      y: yPos * 15,
      duration: 0.8,
      ease: 'power2.out',
    });
  };

  containerRef.addEventListener('mousemove', handleMouseMove);

  return () => containerRef.removeEventListener('mousemove', handleMouseMove);
};

/**
 * Scroll indicator bounce animation
 */
export const initScrollIndicator = () => {
  return gsap.to('.hero-scroll-indicator', {
    y: 10,
    duration: 0.8,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true,
  });
};
