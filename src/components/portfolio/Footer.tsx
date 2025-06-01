
import React from 'react';
import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-gray-800/50">
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left mb-6 md:mb-0"
          >
            <h3 className="text-2xl font-orbitron font-bold gradient-text mb-2">
              &lt;DEV/&gt;
            </h3>
            <p className="text-gray-400">
              Crafting the future, one line of code at a time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-6"
          >
            <div className="flex space-x-4">
              {['📧', '💼', '🐦', '📷'].map((icon, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center border border-blue-500/30 hover:border-blue-400 transition-all duration-300"
                >
                  {icon}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8 pt-8 border-t border-gray-800/50"
        >
          <p className="text-gray-500">
            © 2024 Alex Developer. All rights reserved. Built with ❤️ and lots of ☕
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
