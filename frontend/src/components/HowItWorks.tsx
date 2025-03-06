import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-12 bg-gray-900/90 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-green-400 font-semibold tracking-wide uppercase">How It Works</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Our Process
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative bg-gray-800 p-6 rounded-lg"
            >
              <div className="aspect-w-16 aspect-h-9 rounded-lg bg-gray-700 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
                  alt="Satellite imagery"
                  className="object-cover"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold text-white">Satellite Data Collection</h3>
                <p className="mt-2 text-white">
                  We collect real-time satellite imagery from multiple sources to monitor environmental changes.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative bg-gray-800 p-6 rounded-lg"
            >
              <div className="aspect-w-16 aspect-h-9 rounded-lg bg-gray-700 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1488229297570-58520851e868?auto=format&fit=crop&q=80"
                  alt="AI Analysis"
                  className="object-cover"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold text-white">AI-Powered Analysis</h3>
                <p className="mt-2 text-white">
                  Our advanced AI algorithms analyze the data to detect pollution events and environmental changes.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HowItWorks;
