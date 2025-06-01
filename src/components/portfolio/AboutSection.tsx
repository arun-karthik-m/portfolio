import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Laptop, 
  Palette, 
  Terminal, 
  Server, 
  Cloud, 
  Layout 
} from 'lucide-react';

export const AboutSection = () => {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)'],
      icon: Code,
      color: 'from-blue-500 to-cyan-400'
    },
    {
      category: 'Frameworks/Libraries',
      skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Bootstrap'],
      icon: Laptop,
      color: 'from-purple-500 to-pink-400'
    },
    {
      category: 'Design & UI',
      skills: ['Responsive Design', 'Figma (Basic)', 'CSS Animations'],
      icon: Palette,
      color: 'from-pink-500 to-rose-400'
    },
    {
      category: 'Tools',
      skills: ['Git','Cursor', 'Vercel', 'Loveable.dev'],
      icon: Terminal,
      color: 'from-green-500 to-emerald-400'
    },
    {
      category: 'Backend Basics',
      skills: ['REST APIs(basic)', 'Node.js (basic)', 'MySQL', 'Firebase'],
      icon: Server,
      color: 'from-indigo-500 to-purple-400'
    },
    {
      category: 'Deployment',
      skills: ['Vercel', 'Netlify', 'GitHub Pages'],
      icon: Cloud,
      color: 'from-orange-500 to-red-500'
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-pink-900/20" />
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-orbitron font-bold gradient-text mb-6"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid gap-8 mb-16">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-effect p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
              <h3 className="text-3xl font-bold gradient-text mb-6">Digital Craftsman</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Creative and performance-driven Front-End Developer with a strong grasp of HTML, CSS, JavaScript, and modern web development frameworks. Known for translating design concepts into responsive, accessible, and visually compelling interfaces. Adept at leveraging tools like Loveable.dev, Cursor, Vercel to enhance development efficiency and project delivery. Possess a solid foundation in coding and a passion for creating seamless user experiences. Thrive in collaborative environments and bring a unique blend of technical precision, design intuition, and problem-solving to every project.
              </p>
            </div>

            {/* Skills Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="glass-effect p-6 rounded-xl border border-purple-500/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Code className="w-6 h-6 mr-3 text-yellow-400" />
                  Skills
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skillCategories.map((category, index) => (
                    <motion.div
                      key={category.category}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="glass-effect p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      <div className={`w-12 h-12 mb-4 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{category.category}</h3>
                      <ul className="space-y-2 text-gray-300">
                        {category.skills.map((skill) => (
                          <li key={skill} className="flex items-center">
                            <span className="mr-2 text-blue-400">•</span>
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
