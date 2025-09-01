// src/components/Amenities.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Amenities = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }}
    );

    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(card,
        { opacity: 0, x: -50 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.8, 
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  const amenities = [
    { title: "Near Educational Institutions", icon: "🎓", description: "Top schools and colleges nearby" },
    { title: "Close to Hospitals", icon: "🏥", description: "24/7 healthcare facilities accessible" },
    { title: "Flexible EMI Options", icon: "💳", description: "Easy payment plans available" },
    { title: "Modern Infrastructure", icon: "🏗️", description: "Quality construction standards" },
    { title: "Prime Locations", icon: "📍", description: "Strategic locations in Thiruvallur" },
    { title: "Quality Construction", icon: "🏠", description: "Durable and sustainable building" }
  ];

  return (
// src/components/Amenities.jsx
<section ref={sectionRef} id="amenities" className="px-4 py-20">      <div className="container mx-auto">
        <h2 className="mb-12 text-4xl font-bold text-center">Premium Amenities</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {amenities.map((amenity, index) => (
            <div 
              key={index} 
              ref={el => cardsRef.current[index] = el}
              className="p-6 transition-all duration-300 transform bg-purple-800 bg-opacity-50 rounded-xl backdrop-blur-sm hover:bg-opacity-70 hover:-translate-y-2"
            >
              <div className="mb-4 text-4xl">{amenity.icon}</div>
              <h3 className="mb-2 text-xl font-semibold">{amenity.title}</h3>
              <p className="text-purple-200">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;