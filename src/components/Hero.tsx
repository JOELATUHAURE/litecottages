import React from 'react';
import { ChevronDown } from 'lucide-react';
import lite2Image from '../images/lite2.jpg'; // Import the image



const Hero = () => {
  return (
    <section id="home" className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${lite2Image})`, // Use imported image
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Welcome to Lite Cottages
          </h1>
          <p className="text-xl text-white mb-8">
            Your comfortable and affordable home away from home in Mbarara
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-primary-dark transition-colors">
            Book Your Stay
          </button>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
