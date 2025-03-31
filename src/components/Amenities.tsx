import React from 'react';
import { Wifi, Car, Clock, Utensils, Home, Trees, Coffee, MapPin } from 'lucide-react';

const amenities = [
  {
    icon: <Wifi className="w-6 h-6" />,
    title: 'Free Wi-Fi',
    description: 'Stay connected with complimentary Wi-Fi'
  },
  {
    icon: <Car className="w-6 h-6" />,
    title: 'Free Parking',
    description: 'Convenient on-site parking for guests'
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: '24/7 Front Desk',
    description: 'Always available to assist you'
  },
  {
    icon: <Utensils className="w-6 h-6" />,
    title: 'Simple Breakfast',
    description: 'Start your day with a light breakfast'
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: 'Clean Rooms',
    description: 'Well-maintained, comfortable spaces'
  },
  {
    icon: <Trees className="w-6 h-6" />,
    title: 'Garden Area',
    description: 'Peaceful outdoor seating area'
  },
  {
    icon: <Coffee className="w-6 h-6" />,
    title: 'Work Space',
    description: 'Desk and chair in every room'
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Central Location',
    description: 'Easy access to local attractions'
  }
];

const Amenities = () => {
  return (
    <section id="amenities" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Amenities
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Essential comforts for a pleasant stay
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-lg transition-transform hover:scale-105"
            >
              <div className="text-primary mb-4">{amenity.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {amenity.title}
              </h3>
              <p className="text-gray-600 text-sm">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;