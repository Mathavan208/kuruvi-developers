// src/components/Navbar.jsx
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed z-50 w-full px-6 py-4 bg-black bg-opacity-80 backdrop-blur-sm">
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex items-center space-x-2">
          <img 
            src="/assets/images/sparrow-logo.png" 
            alt="Kuruvi Developers Logo" 
            className="w-10 h-10"
          />
          <span className="text-xl font-bold">Kuruvi Developers</span>
        </div>
        
        <div className="hidden space-x-8 md:flex">
          <a href="#hero" className="transition hover:text-purple-300">Home</a>
          <a href="#amenities" className="transition hover:text-purple-300">Amenities</a>
          <a href="#properties" className="transition hover:text-purple-300">Properties</a>
          <a href="#booking" className="transition hover:text-purple-300">Book Now</a>
        </div>
        
        <button 
          className="text-2xl md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="mt-4 space-y-2 md:hidden">
          <a href="#hero" className="block py-2 hover:text-purple-300">Home</a>
          <a href="#amenities" className="block py-2 hover:text-purple-300">Amenities</a>
          <a href="#properties" className="block py-2 hover:text-purple-300">Properties</a>
          <a href="#booking" className="block py-2 hover:text-purple-300">Book Now</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;