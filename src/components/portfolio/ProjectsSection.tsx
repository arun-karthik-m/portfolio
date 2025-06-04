
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { springConfig, fadeInUp, cardHover, buttonHover, staggerContainer } from '@/lib/animations';

export const ProjectsSection = () => {
  const projects = [
    {
      title: 'AI Powered Mock Interview Simulator',
      description: 'An AI-powered mock interview simulator designed to replicate real-world technical and HR interviews with intelligent feedback.Enhances preparation through personalized questions, real-time evaluation, and elegant UI for a seamless experience.',
      tech: ['React', 'Tailwind CSS', 'TypeScript','Vite','Gemini AI'],
      demo: 'simulatehire.vercel.app/',
      github: 'https://github.com/arun-karthik-m/AI-Powered-Mock-Interview-Simulator',
      gradient: 'from-blue-500 via-purple-600 to-purple-900',
      icon: '🤖',
    },
    {
      title: 'Personal Portfolio',
      description: 'A modern personal portfolio showcasing projects, skills, and achievements with an intuitive and responsive design.Built for impact, it reflects my journey as a frontend developer with a flair for UI/UX and a passion for innovation.',
      tech: ['React', 'Tailwind CSS', 'TypeScript'],
      demo: 'https://arunkarthik.vercel.app/',
      github: 'https://github.com/arun-karthik-m/portfolio',
      gradient: 'from-emerald-500 via-teal-600 to-cyan-900',
      icon: '🌐🎨',
    },
  ];

  return (
    <section id="projects" className="py-12 sm:py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-blue-900/10" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold gradient-text mb-4 sm:mb-6">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-2 sm:px-0">
            A showcase of my latest work in web development, 3D graphics, and emerging technologies.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <AnimatePresence>
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={{
                  ...fadeInUp,
                  hover: cardHover.hover
                }}
                custom={index * 0.1}
                viewport={{ once: true, margin: "-50px" }}
                whileHover="hover"
                className="group relative rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 will-change-transform"
              >
              {/* Decorative gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-700`} />
              
              {/* Animated highlight on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10 p-8 h-full flex flex-col">
                {/* Icon and title */}
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    className="text-4xl"
                    animate={{
                      y: [0, -5, 0],
                      transition: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                  >
                    {project.icon}
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {project.title}
                  </h3>
                </div>
                
                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>
                
                {/* Tech stack */}
                <motion.div 
                  className="flex flex-wrap gap-2 mb-6"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={tech}
                      variants={{
                        hidden: { scale: 0.9, opacity: 0 },
                        visible: {
                          scale: 1,
                          opacity: 1,
                          transition: {
                            ...springConfig,
                            delay: i * 0.05
                          }
                        }
                      }}
                      className="px-3 py-1.5 bg-gray-800/50 text-blue-300 rounded-full text-xs font-medium border border-blue-500/20 backdrop-blur-sm will-change-transform"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
                
                {/* Buttons */}
                <div className="flex gap-4 pt-2">
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={buttonHover}
                    whileHover="hover"
                    whileTap="tap"
                    className="px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium text-xs sm:text-sm flex-1 text-center shadow-lg shadow-blue-500/20 will-change-transform"
                  >
                    View Project
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={{
                      ...buttonHover,
                      hover: {
                        ...buttonHover.hover,
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        boxShadow: 'none'
                      }
                    }}
                    whileHover="hover"
                    whileTap="tap"
                    className="px-4 sm:px-5 py-2 sm:py-2.5 bg-gray-800/50 text-white rounded-lg font-medium text-xs sm:text-sm border border-gray-700 flex items-center justify-center gap-2 flex-1 will-change-transform"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>Code</span>
                  </motion.a>
                </div>
              </div>
                            {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500 -z-10" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
