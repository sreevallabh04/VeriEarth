import React from 'react';
import { Map, Activity, Database, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Map,
    title: 'Oil Spill Detection',
    description: 'Advanced satellite imagery analysis for real-time oil spill detection and monitoring.'
  },
  {
    icon: Activity,
    title: 'AQI Estimation',
    description: 'Accurate air quality index estimation using multi-spectral satellite data.'
  },
  {
    icon: Database,
    title: 'Interactive Map',
    description: 'User-friendly interface for visualizing and analyzing pollution events.'
  },
  {
    icon: Shield,
    title: 'Blockchain Logging',
    description: 'Immutable record-keeping of pollution events using blockchain technology.'
  }
];

const Features = () => {
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
          <h2 className="text-base text-green-400 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Comprehensive Environmental Monitoring
          </p>
          <p className="mt-4 max-w-2xl text-xl text-white lg:mx-auto">
            Our platform combines cutting-edge technology with user-friendly interfaces to provide accurate and actionable environmental data.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative bg-gray-800 p-6 rounded-lg"
                >
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">{feature.title}</p>
                  <p className="mt-2 ml-16 text-base text-white">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Features;
