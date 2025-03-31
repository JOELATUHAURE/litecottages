import React from 'react';
import { Wifi, Coffee, Fan, Bed } from 'lucide-react';

const rooms = [
  {
    title: 'Standard Single Room',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    price: 'From $30/night',
    description: 'Cozy single room with all essential amenities for a comfortable stay.',
    amenities: ['Free Wi-Fi', 'Fan', 'Single Bed', 'Work Desk']
  },
  {
    title: 'Double Room',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    price: 'From $45/night',
    description: 'Spacious room with a comfortable double bed, perfect for couples or solo travelers.',
    amenities: ['Free Wi-Fi', 'Fan', 'Double Bed', 'Work Desk']
  },
  {
    title: 'Twin Room',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    price: 'From $50/night',
    description: 'Practical room with two single beds, ideal for friends or colleagues.',
    amenities: ['Free Wi-Fi', 'Fan', 'Twin Beds', 'Work Desk']
  }
];

const amenityIcons = {
  'Free Wi-Fi': <Wifi size={20} />,
  'Fan': <Fan size={20} />,
  'Single Bed': <Bed size={20} />,
  'Double Bed': <Bed size={20} />,
  'Twin Beds': <Bed size={20} />,
  'Work Desk': <Coffee size={20} />
};

const Rooms = () => {
  return (
    <section id="rooms" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Rooms
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Clean, comfortable rooms at budget-friendly rates
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="relative h-48">
                <img
                  src={room.image}
                  alt={room.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{room.title}</h3>
                  <span className="text-primary font-medium">{room.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <div className="border-t pt-4">
                  <div className="grid grid-cols-2 gap-2">
                    {room.amenities.map((amenity, i) => (
                      <div key={i} className="flex items-center text-gray-600">
                        <span className="mr-2">{amenityIcons[amenity]}</span>
                        <span className="text-sm">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <button className="mt-6 w-full bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors">
                  Check Availability
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;