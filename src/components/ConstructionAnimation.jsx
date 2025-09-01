// src/components/ConstructionAnimation.jsx
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const WaveEffect = ({ position, isActive, onWaveComplete }) => {
  const waveRef = useRef(null);
  
  useEffect(() => {
    if (isActive && waveRef.current) {
      // Reset wave
      gsap.set(waveRef.current, { 
        scale: 0, 
        opacity: 0.8,
        transformOrigin: "center center"
      });
      
      // Animate wave
      const timeline = gsap.timeline();
      timeline.to(waveRef.current, {
        scale: 4,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        onComplete: () => {
          if (onWaveComplete) onWaveComplete();
        }
      });
    }
  }, [isActive, onWaveComplete]);
  
  return (
    <div 
      ref={waveRef}
      className="absolute border-2 border-purple-400 rounded-full pointer-events-none"
      style={{
        width: '20px',
        height: '20px',
        left: position.x - 10,
        top: position.y - 10,
        zIndex: 1000,
      }}
    />
  );
};

const MapController = ({ activeLocation, setActiveLocation }) => {
  const map = useMap();
  
  useEffect(() => {
    if (activeLocation) {
      // Animate map to zoom in on the active location
      gsap.to(map, {
        zoom: 16,
        duration: 1,
        ease: "power2.inOut",
        onUpdate: () => {
          map.flyTo([activeLocation.lat, activeLocation.lng], map.getZoom(), {
            duration: 0.1
          });
        }
      });
    } else {
      // Reset map view
      gsap.to(map, {
        zoom: 13,
        duration: 1,
        ease: "power2.inOut",
        onUpdate: () => {
          map.flyTo([13.0827, 80.1653], map.getZoom(), {
            duration: 0.1
          });
        }
      });
    }
  }, [activeLocation, map]);
  
  return null;
};

const ConstructionAnimation = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [activeLocation, setActiveLocation] = useState(null);
  const [wavePosition, setWavePosition] = useState({ x: 0, y: 0 });
  const [isWaveActive, setIsWaveActive] = useState(false);
  
  // Property locations in Thiruvallur
  const locations = [
    { 
      id: 1, 
      title: "Premium Plot A", 
      position: [13.0827, 80.1653], 
      description: "Premium residential plot in Thiruvallur West",
      price: "₹45 Lakhs"
    },
    { 
      id: 2, 
      title: "Luxury Villa B", 
      position: [13.1500, 80.2000], 
      description: "Luxury villa in Poonamallee area",
      price: "₹1.2 Crores"
    },
    { 
      id: 3, 
      title: "Residential Plot C", 
      position: [13.1000, 80.1000], 
      description: "Residential plot in Avadi",
      price: "₹35 Lakhs"
    },
    { 
      id: 4, 
      title: "Commercial Space D", 
      position: [13.1200, 80.1800], 
      description: "Commercial space in Thiruvallur Town",
      price: "₹2.5 Crores"
    },
    { 
      id: 5, 
      title: "Apartment Complex E", 
      position: [13.0900, 80.1700], 
      description: "Apartment complex in Pattabiram",
      price: "₹85 Lakhs"
    },
    { 
      id: 6, 
      title: "Farm Land F", 
      position: [13.0500, 80.0500], 
      description: "Agricultural land in Gummidipoondi",
      price: "₹25 Lakhs"
    }
  ];
  
  const handleMarkerHover = (e, location) => {
    const container = e.originalEvent.target.parentElement;
    const rect = container.getBoundingClientRect();
    const x = e.originalEvent.clientX - rect.left;
    const y = e.originalEvent.clientY - rect.top;
    
    setWavePosition({ x, y });
    setIsWaveActive(true);
    setActiveLocation(location);
    
    // Clean up wave animation after completion
    setTimeout(() => {
      setIsWaveActive(false);
    }, 1500);
  };
  
  const handleMarkerLeave = () => {
    setActiveLocation(null);
  };
  
  useEffect(() => {
    // Animate container entrance
    gsap.fromTo(containerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
    
    // Animate text
    gsap.fromTo(textRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, delay: 0.5, ease: "back.out(1.7)" }
    );
  }, []);
  
  return (
    <section ref={containerRef} className="px-4 py-20">
      <div className="container mx-auto">
        <h2 ref={textRef} className="mb-12 text-4xl font-bold text-center">Our Properties in Thiruvallur</h2>
        <div className="relative max-w-4xl mx-auto overflow-hidden shadow-2xl rounded-xl h-96">
          <MapContainer 
            center={[13.0827, 80.1653]} 
            zoom={13} 
            style={{ height: '100%', width: '100%' }}
            className="rounded-xl"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <MapController activeLocation={activeLocation} setActiveLocation={setActiveLocation} />
            
            {locations.map((location) => (
              <Marker 
                key={location.id} 
                position={location.position}
                eventHandlers={{
                  mouseover: (e) => handleMarkerHover(e, location),
                  mouseout: handleMarkerLeave
                }}
              >
                <Popup>
                  <div className="text-center">
                    <h3 className="text-lg font-bold">{location.title}</h3>
                    <p className="text-purple-300">{location.description}</p>
                    <p className="mt-2 font-semibold">{location.price}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
          
          {isWaveActive && (
            <WaveEffect 
              position={wavePosition} 
              isActive={isWaveActive}
              onWaveComplete={() => setIsWaveActive(false)}
            />
          )}
          
          <div className="absolute px-3 py-2 text-sm text-white bg-black bg-opacity-50 rounded-lg bottom-4 left-4">
            Hover over markers to zoom in
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-lg text-purple-300">Interactive map of our premium properties in Thiruvallur</p>
          <p className="mt-2 text-sm text-purple-400">Hover over markers to see details and zoom effect</p>
        </div>
      </div>
    </section>
  );
};

export default ConstructionAnimation;