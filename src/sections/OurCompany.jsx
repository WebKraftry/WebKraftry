import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const OurCompany = () => {
  const containerRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        end: "bottom 30%",
        scrub: 1.5, // Smooth scrubbing effect
        markers: false, // Set to true to debug
      }
    });

    // Column animations
    tl.from(leftColRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
    .from(rightColRef.current, {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.5") // Overlap with previous animation
    .from(ctaRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.2)"
    }, "-=0.3");

    return () => {
      tl.kill(); // Cleanup
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="border-t text-white border-white bg-gradient-to-r from-purple-900 to-purple-400 relative z-10 py-16 px-4 flex flex-col items-center rounded-lg shadow-lg overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
        {/* Left Column */}
        <div 
          ref={leftColRef}
          className="flex paraFont-900 flex-col justify-center"
        >
          <p className="text-sm text-purple-300 stroke-2 uppercase mb-2">Our Company</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            WebKraftry Private Limited is your trusted source in Development Company in Ghaziabad, India
          </h2>
        </div>
        
        {/* Right Column */}
        <div 
          ref={rightColRef}
          className="flex bona-regular text-purple-300 items-center"
        >
          <p className="text-lg leading-relaxed">
            WebKraftry Pvt is a privately owned <strong className="text-white">Development company in Ghaziabad, India </strong> 
            and IT Services business formed in 2025. Today we're proud 
            to boast a strong team of <strong className="text-white">Web development</strong>and <strong className="text-white">SEO Optimization </strong> 
            who thrive on rolling up their sleeves and solving your IT problems and meeting your business needs.
          </p>
        </div>
      </div>

      {/* CTA */}
      <p 
        ref={ctaRef}
        className="text-lg paraFont-900 text-slate-300 mt-8 text-center max-w-3xl mx-auto px-4"
      >
        Stop wasting time and money on technology. <strong className="text-white">Explore our development company in Ghaziabad, India.</strong>
      </p>
    </div>
  );
};

export default OurCompany;