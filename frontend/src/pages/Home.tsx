import React from 'react';
import Hero from '../components/Hero';
import PollutionCauses from '../components/PollutionCauses';
import Features from '../components/Features';
import Stats from '../components/Stats';
import HowItWorks from '../components/HowItWorks';
import CTA from '../components/CTA';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 z-0"
      >
        <div className="absolute inset-0 w-full h-full">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/1851190-uhd_3840_2160_25fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
      </motion.div>

      <div className="relative z-10">
        <div className="pt-16">
          <Hero />
          <PollutionCauses />
          <Features />
          <Stats />
          <HowItWorks />
          <CTA />
        </div>
      </div>
    </div>
  );
};

export default Home;
