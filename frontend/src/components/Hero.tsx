import React from 'react';
import { Link } from 'react-router-dom';
import { Map } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="flex items-center h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">VeriEarth</span>
            <span className="block text-green-400">Environmental Intelligence</span>
          </h1>
          <p className="mt-3 text-base text-gray-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Real-time pollution monitoring and detection powered by satellite imagery and AI. Making environmental data accessible, transparent, and actionable.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <Link
                to="/dashboard"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
              >
                <Map className="w-5 h-5 mr-2" />
                View Live Data
              </Link>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <Link
                to="/about"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-transparent hover:bg-gray-800 md:py-4 md:text-lg md:px-10 border-green-400"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
