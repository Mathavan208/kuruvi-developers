// src/components/Booking.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Booking = () => {
  const sectionRef = useRef(null);
  const contactRef = useRef(null);
  const formRef = useRef(null);

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

    gsap.fromTo(contactRef.current,
      { opacity: 0, x: -50 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 1, 
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(formRef.current,
      { opacity: 0, x: 50 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 1, 
        delay: 0.3,
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="px-4 py-20 bg-black bg-opacity-30">
      <div className="container mx-auto">
        <h2 className="mb-12 text-4xl font-bold text-center">Book Your Property</h2>
        
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Contact Information */}
          <div ref={contactRef}>
            <h3 className="mb-6 text-2xl font-bold">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="mr-4 text-2xl">📱</span>
                <div>
                  <p className="font-semibold">Phone Numbers</p>
                  <p>+91 8428422767</p>
                  <p>+91 8428424595</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="mr-4 text-2xl">📍</span>
                <div>
                  <p className="font-semibold">Location</p>
                  <p>Thiruvallur District</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="mr-4 text-2xl">📧</span>
                <div>
                  <p className="font-semibold">Email</p>
                  <p>info@kuruvidevelopers.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Form Integration */}
          <div ref={formRef}>
            <h3 className="mb-6 text-2xl font-bold">Property Booking Form</h3>
            <div className="p-6 bg-purple-800 bg-opacity-50 rounded-xl">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSd.../viewform?embedded=true" 
                width="100%" 
                height="500" 
                frameBorder="0" 
                marginHeight="0" 
                marginWidth="0"
                title="Property Booking Form"
              >
                Loading...
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;