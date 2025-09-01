// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="px-4 py-8 bg-black">
      <div className="container mx-auto text-center">
        <div className="flex justify-center mb-4 space-x-6">
          <a href="#" className="text-purple-300 transition hover:text-white">Facebook</a>
          <a href="#" className="text-purple-300 transition hover:text-white">Instagram</a>
          <a href="#" className="text-purple-300 transition hover:text-white">LinkedIn</a>
          <a href="#" className="text-purple-300 transition hover:text-white">Twitter</a>
        </div>
        <p>&copy; {new Date().getFullYear()} Kuruvi Developers and Promoters. All rights reserved.</p>
        <p className="mt-2 text-purple-300">Building Dreams in Thiruvallur</p>
      </div>
    </footer>
  );
};

export default Footer;