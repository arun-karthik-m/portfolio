
import React from 'react';
import { motion } from 'framer-motion';

export const ResumeSection = () => {
  const experiences = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'TechCorp Inc.',
      period: '2022 - Present',
      description: 'Leading development of cutting-edge web applications using React, Node.js, and emerging technologies.',
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency Pro',
      period: '2020 - 2022',
      description: 'Specialized in creating interactive user interfaces and 3D web experiences for premium clients.',
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Labs',
      period: '2019 - 2020',
      description: 'Built responsive web applications and contributed to full-stack development projects.',
    },
  ];

  const education = [
    {
      degree: 'Master of Computer Science',
      school: 'Tech University',
      period: '2017 - 2019',
      description: 'Specialized in Computer Graphics and Human-Computer Interaction.',
    },
    {
      degree: 'Bachelor of Software Engineering',
      school: 'State University',
      period: '2013 - 2017',
      description: 'Graduated Magna Cum Laude with focus on Web Technologies.',
    },
  ];

  return (
    <section id="resume" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold gradient-text mb-6">
            Resume
          </h2>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
          >
            Download Full Resume
          </motion.button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-12 flex items-center">
              <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-4" />
              Experience
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 to-purple-500" />
                  <div className="absolute left-0 top-6 w-3 h-3 bg-blue-500 rounded-full transform -translate-x-1/2" />
                  
                  <div className="ml-8 glass-effect p-6 rounded-xl hover:scale-105 transition-transform duration-300">
                    <h4 className="text-xl font-bold text-white mb-2">{exp.title}</h4>
                    <p className="text-blue-400 font-semibold mb-2">{exp.company}</p>
                    <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-12 flex items-center">
              <span className="w-2 h-8 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full mr-4" />
              Education
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 to-blue-500" />
                  <div className="absolute left-0 top-6 w-3 h-3 bg-purple-500 rounded-full transform -translate-x-1/2" />
                  
                  <div className="ml-8 glass-effect p-6 rounded-xl hover:scale-105 transition-transform duration-300">
                    <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                    <p className="text-purple-400 font-semibold mb-2">{edu.school}</p>
                    <p className="text-gray-400 text-sm mb-3">{edu.period}</p>
                    <p className="text-gray-300">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
