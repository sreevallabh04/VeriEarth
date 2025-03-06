import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Active Monitoring Sites', value: '1,234' },
  { label: 'Environmental Reports', value: '45.6K' },
  { label: 'Countries Covered', value: '89' },
  { label: 'Data Points Collected', value: '2.3M' },
];

const Stats = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gray-800/90 backdrop-blur-sm py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-green-400">{stat.value}</div>
              <div className="mt-2 text-sm text-white">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Stats;
