import React from 'react';
import { motion } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const PollutionCauses = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Visual Separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent mb-12"></div>

        <div className="lg:text-center">
          <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-green-400 sm:text-4xl">
            Major Causes of Air Pollution
          </h2>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-700/90 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300 flex items-center group"
            >
              <div className="w-32 h-32 mr-6 relative">
                {/* Cigarette Image */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10">
                  <svg width="60" height="20" viewBox="0 0 60 20">
                    {/* Cigarette Body (White) */}
                    <rect x="10" y="8" width="40" height="4" fill="#FFFFFF" rx="1" />
                    {/* Filter (Orange) */}
                    <rect x="50" y="8" width="10" height="4" fill="#FFA500" rx="1" />
                    {/* Ash (Grey) */}
                    <rect x="5" y="8" width="5" height="4" fill="#A9A9A9" rx="1" />
                  </svg>
                </div>
                {/* Smoke Animation */}
                <div className="absolute inset-0 -translate-x-4">
                  <DotLottieReact
                    src="https://lottie.host/a038a346-7176-4004-a8e8-71b7f3f6186d/0MzbLZ8LUm.lottie"
                    loop
                    autoplay
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white group-hover:text-red-400 transition-colors">Cigarette Smoking</h3>
                <p className="mt-2 text-sm text-gray-300">
                  A significant source of indoor air pollution, releasing harmful chemicals and particulate matter.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-700/90 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 flex items-center group"
            >
              <div className="w-40 h-40 mr-6 relative">
                {/* Industrial Emissions Animation */}
                <div className="absolute inset-0">
                  <DotLottieReact
                    src="https://lottie.host/30b33797-5ff8-49ce-a158-fe1ff5666c77/SvkVWoVxLu.lottie"
                    loop
                    autoplay
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors">Industrial Emissions</h3>
                <p className="mt-2 text-sm text-gray-300">
                  Factories and power plants releasing pollutants and greenhouse gases into the atmosphere.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-700/90 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg hover:shadow-yellow-500/10 transition-all duration-300 flex items-center group"
            >
              <div className="w-32 h-32 mr-6 relative">
                {/* Firewood Animation */}
                <div className="absolute inset-0">
                  <DotLottieReact
                    src="https://lottie.host/30b1c901-513c-4d25-8546-550ae2c3f062/IfIfSRT2zO.lottie"
                    loop
                    autoplay
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors">Firewood Burning</h3>
                <p className="mt-2 text-sm text-gray-300">
                  Traditional biomass burning contributing to particulate matter and carbon emissions.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-700/90 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 flex items-center group"
            >
              <div className="w-40 h-40 mr-6 relative">
                {/* Vehicle Emissions Animation */}
                <div className="absolute inset-0">
                  <DotLottieReact
                    src="https://lottie.host/c8b65030-c0c8-477f-9cf4-e22667a8d8b2/d8wuot5gah.lottie"
                    loop
                    autoplay
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">Vehicle Emissions</h3>
                <p className="mt-2 text-sm text-gray-300">
                  Transportation sources releasing nitrogen oxides and particulate matter into the air.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PollutionCauses;
