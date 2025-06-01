
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeroSection } from '@/components/portfolio/HeroSection';
import { AboutSection } from '@/components/portfolio/AboutSection';
import { ProjectsSection } from '@/components/portfolio/ProjectsSection';
import { ResumeSection } from '@/components/portfolio/ResumeSection';
import { ContactSection } from '@/components/portfolio/ContactSection';
import { Navigation } from '@/components/portfolio/Navigation';
import { Footer } from '@/components/portfolio/Footer';
import { Preloader } from '@/components/portfolio/Preloader';
import { ParticleBackground } from '@/components/portfolio/ParticleBackground';
import { CustomCursor } from '@/components/portfolio/CustomCursor';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Apply dark class to html element
    document.documentElement.classList.add('dark');
    document.body.style.backgroundColor = '#0a0a0a';
    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      clearTimeout(timer);
      document.body.style.cursor = 'auto';
    };
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#0a0a0a';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#ffffff';
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`} style={{ cursor: 'none' }}>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
        <CustomCursor />
        
        <AnimatePresence>
          {isLoading && <Preloader />}
        </AnimatePresence>
        
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative overflow-hidden"
          >
            <ParticleBackground />
            <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            
            <main className="relative z-10">
              <HeroSection />
              <AboutSection />
              <ProjectsSection />
              <ResumeSection />
              <ContactSection />
            </main>
            
            <Footer />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Index;
