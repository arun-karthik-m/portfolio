
import React from 'react';
import { motion } from 'framer-motion';
import { scrollToSection } from '@/lib/utils';
import blackholeVideo from '../../videos/blackhole.webm';

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-0">
      {/* Blackhole Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          className="w-full h-full object-cover"
        >
          <source src={blackholeVideo} type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90" />
      </div>
      
      <div className="absolute inset-0 cyber-grid opacity-10 z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center md:grid md:grid-cols-2 gap-6 md:gap-12 relative z-20 pt-8 md:pt-0">
        {/* Name Section - Only shows on mobile */}
        <motion.div 
          className="md:hidden text-center w-full mb-6" /* Added mb-6 for 1.5cm space below */
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ marginTop: '0.5cm' }} /* Reduced from 1.5cm to 0.5cm to move 1cm up */
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-blue-400 font-mono text-sm sm:text-base mb-1"
          >
            Hello, I'm
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="text-3xl sm:text-4xl font-orbitron font-bold glow-text"
          >
            Arun <span className="gradient-text">Karthik</span>
          </motion.h1>
        </motion.div>

        {/* Black Hole Animation - Always centered on mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="h-48 sm:h-64 w-full max-w-md mx-auto md:mx-0 md:h-96 relative mt-0 md:mt-0"
          style={{ marginBottom: '1.5cm' }} /* 1.5cm space below */
        >
          {/* Space for future content or decoration */}
        </motion.div>

        {/* Content Section - Below black hole on mobile, right side on desktop */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="md:col-start-1 md:row-start-1 w-full"
        >
          {/* Only show on desktop */}
          <div className="hidden md:block">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-blue-400 font-mono text-lg mb-4"
            >
              Hello, I'm
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-orbitron font-bold mb-6 glow-text leading-tight"
            >
              Arun
              <br />
              <span className="gradient-text">Karthik</span>
            </motion.h1>
          </div>
          
          <motion.div className="mt-4 md:mt-0">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 md:mb-6 max-w-lg mx-auto md:mx-0 text-center md:text-left"
            >
              Creative Full-Stack Developer crafting immersive digital experiences 
              with cutting-edge technologies and innovative design.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:max-w-md md:max-w-none mx-auto md:mx-0"
            >
              <motion.button
                onClick={() => scrollToSection('projects')}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300 will-change-transform text-sm sm:text-base"
              >
                View My Work
              </motion.button>
              
              <motion.a
                href="/Arun_Karthik_Resume.pdf"
                download="Arun_Karthik_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 py-2.5 sm:py-3 glass-effect rounded-lg font-semibold text-white border border-blue-500/30 hover:border-blue-400 transition-all duration-300 text-sm sm:text-base text-center cursor-pointer"
              >
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
};
