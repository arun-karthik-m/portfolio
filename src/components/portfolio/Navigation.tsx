
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { springConfig, fadeInUp, buttonHover } from '@/lib/animations';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className={`fixed top-0 left-0 right-0 z-[9999] ${
        isScrolled ? 'glass-effect' : 'bg-transparent backdrop-blur-sm'
      }`}
      style={{
        backgroundColor: isScrolled ? 'rgba(15, 23, 42, 0.95)' : 'transparent',
        WebkitBackdropFilter: isScrolled ? 'blur(10px)' : 'none',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        transform: 'translate3d(0,0,0)', // Force GPU acceleration
        willChange: 'transform, backdrop-filter, background-color' // Optimize animations
      }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-orbitron font-bold gradient-text cursor-pointer mr-auto"
            onClick={() => scrollToSection('home')}
          >
            &lt;AK/&gt;
          </motion.div>

          <div className="hidden md:flex items-center space-x-8 mx-auto">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                variants={{
                  ...buttonHover,
                  hover: {
                    ...buttonHover.hover,
                    scale: 1.1,
                    color: '#fff',
                    boxShadow: 'none'
                  }
                }}
                whileHover="hover"
                whileTap="tap"
                onClick={() => scrollToSection(item.id)}
                className={`relative text-sm font-medium will-change-transform ${
                  activeSection === item.id ? 'text-blue-400' : 'text-gray-300'
                }`}
              >
                {item.label}
                <AnimatePresence>
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeTab"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={springConfig}
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                    />
                  )}
                </AnimatePresence>
              </motion.button>
            ))}
          </div>
          <div className="ml-auto"></div>
        </div>
      </div>
    </motion.nav>
  );
};
