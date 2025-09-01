// src/components/Hero.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);
  const logoRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(heroRef.current, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );

    gsap.fromTo(logoRef.current,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 1, delay: 0.3, ease: "back.out(1.7)" }
    );

    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: "power3.out" }
    );

    gsap.fromTo(subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.9, ease: "power3.out" }
    );

    // Floating animation for logo
    gsap.to(logoRef.current, {
      y: 10,
      yoyo: true,
      repeat: -1,
      duration: 2,
      ease: "power1.inOut"
    });
  }, []);

  return (
    // src/components/Hero.jsx
<section ref={heroRef} id="hero" className="relative flex flex-col items-center justify-center h-screen overflow-hidden">  {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: `${Math.random() * 100 + 20}px`,
              height: `${Math.random() * 100 + 20}px`,
              background: `hsl(${Math.random() * 60 + 280}, 70%, 60%)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Sparrow Logo */}
      <div ref={logoRef} className="mb-8">
        <img src="/assets/images/sparrow-logo.png" alt="Kuruvi Developers Logo" className="w-32 h-32" />
      </div>

      {/* Hero Content */}
      <div className="z-10 text-center">
        <h1 ref={titleRef} className="mb-4 text-5xl font-bold md:text-7xl">Kuruvi Developers</h1>
        <p ref={subtitleRef} className="mb-8 text-xl md:text-2xl">Premium Properties in Thiruvallur</p>
        
        {/* Call to Action */}
        <div className="animate-bounce">
          <a href="#properties" className="inline-block px-8 py-3 text-lg font-bold text-white transition-all duration-300 transform bg-purple-600 rounded-full hover:bg-purple-500 hover:scale-105">
            Explore Properties
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;