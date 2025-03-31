import React from 'react';
import { Home, Clock, Shield } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About Lite Cottages
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A peaceful retreat offering clean, comfortable rooms and essential amenities at budget-friendly rates
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="inline-block p-3 bg-primary rounded-full text-white mb-4">
              <Home size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Comfortable Stay</h3>
            <p className="text-gray-600">
              Clean, well-maintained rooms with all essential amenities
            </p>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="inline-block p-3 bg-primary rounded-full text-white mb-4">
              <Clock size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Service</h3>
            <p className="text-gray-600">
              Round-the-clock front desk and assistance
            </p>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="inline-block p-3 bg-primary rounded-full text-white mb-4">
              <Shield size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Safe & Secure</h3>
            <p className="text-gray-600">
              Secure environment with 24-hour security
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;