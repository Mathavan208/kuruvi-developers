// src/App.jsx
import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Amenities from './components/Amenities';
import Properties from './components/Properties';
import ConstructionAnimation from './components/ConstructionAnimation';
import Booking from './components/Booking';
import Footer from './components/Footer';
import './styles/App.css';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-black via-purple-900 to-purple-700">
      <Navbar />
      <Hero />
      <Amenities />
      <Properties />
      <ConstructionAnimation />
      <Booking />
      <Footer />
    </div>
  );
};

export default App;