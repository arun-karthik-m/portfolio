
import React from 'react';
import { motion } from 'framer-motion';

export const ProjectsSection = () => {
  const projects = [
    {
      title: 'Neural Network Visualizer',
      description: 'Interactive 3D visualization of neural networks built with Three.js and TensorFlow.js',
      tech: ['Three.js', 'React', 'TensorFlow.js', 'WebGL'],
      image: '/api/placeholder/600/400',
      demo: '#',
      github: '#',
    },
    {
      title: 'AR Shopping Experience',
      description: 'Augmented reality e-commerce platform with WebXR integration',
      tech: ['WebXR', 'React', 'Node.js', 'MongoDB'],
      image: '/api/placeholder/600/400',
      demo: '#',
      github: '#',
    },
    {
      title: 'Blockchain Portfolio Tracker',
      description: 'Real-time cryptocurrency portfolio tracker with advanced analytics',
      tech: ['React', 'Web3.js', 'Python', 'FastAPI'],
      image: '/api/placeholder/600/400',
      demo: '#',
      github: '#',
    },
    {
      title: 'AI-Powered Code Generator',
      description: 'Machine learning tool that generates code from natural language descriptions',
      tech: ['Python', 'OpenAI API', 'React', 'TypeScript'],
      image: '/api/placeholder/600/400',
      demo: '#',
      github: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-blue-900/10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my latest work in web development, 3D graphics, and emerging technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group glass-effect rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <div className="w-full h-64 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  <motion.div
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.5 }}
                    className="text-white text-6xl"
                  >
                    💻
                  </motion.div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex gap-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                    >
                      Live Demo
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 glass-effect text-white rounded-lg font-semibold border border-white/30 hover:border-white/50 transition-colors"
                    >
                      GitHub
                    </motion.button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
