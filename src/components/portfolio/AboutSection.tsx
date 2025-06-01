
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Palette, Zap, Globe, Cpu, Brain, Rocket } from 'lucide-react';

export const AboutSection = () => {
  const skills = [
    { name: 'React/Next.js', level: 95, category: 'Frontend', icon: Code, color: 'from-blue-500 to-cyan-400' },
    { name: 'TypeScript', level: 90, category: 'Frontend', icon: Code, color: 'from-blue-600 to-indigo-400' },
    { name: 'Three.js/WebGL', level: 85, category: 'Frontend', icon: Cpu, color: 'from-purple-500 to-pink-400' },
    { name: 'Node.js', level: 88, category: 'Backend', icon: Database, color: 'from-green-500 to-emerald-400' },
    { name: 'Python', level: 82, category: 'Backend', icon: Database, color: 'from-yellow-500 to-orange-400' },
    { name: 'PostgreSQL', level: 80, category: 'Backend', icon: Database, color: 'from-indigo-500 to-purple-400' },
    { name: 'UI/UX Design', level: 85, category: 'Design', icon: Palette, color: 'from-pink-500 to-rose-400' },
    { name: 'Figma', level: 80, category: 'Design', icon: Palette, color: 'from-violet-500 to-purple-400' },
  ];

  const highlights = [
    { icon: Rocket, title: '5+ Years', subtitle: 'Experience', color: 'from-blue-500 to-purple-500' },
    { icon: Globe, title: '50+ Projects', subtitle: 'Completed', color: 'from-green-500 to-blue-500' },
    { icon: Brain, title: '20+ Technologies', subtitle: 'Mastered', color: 'from-purple-500 to-pink-500' },
    { icon: Zap, title: '100%', subtitle: 'Client Satisfaction', color: 'from-orange-500 to-red-500' },
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
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-effect p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
              <h3 className="text-3xl font-bold gradient-text mb-6">Digital Craftsman</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                I'm a passionate full-stack developer who bridges the gap between imagination and reality through code. 
                With over 5 years of experience, I specialize in creating immersive web applications that push the 
                boundaries of what's possible in the browser.
              </p>
              <p className="text-gray-400 leading-relaxed">
                My journey began with curiosity about how websites work, and it has evolved into a deep passion for 
                crafting exceptional digital experiences. I believe in the power of clean code, intuitive design, 
                and innovative solutions.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-effect p-6 rounded-xl text-center border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-r ${highlight.color} flex items-center justify-center`}>
                    <highlight.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-1">{highlight.title}</h4>
                  <p className="text-gray-400 text-sm">{highlight.subtitle}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-effect p-6 rounded-xl border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Zap className="w-6 h-6 mr-3 text-yellow-400" />
                Core Technologies
              </h3>
              
              <div className="space-y-4">
                {['Frontend', 'Backend', 'Design'].map((category) => (
                  <div key={category} className="space-y-3">
                    <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wider">{category}</h4>
                    {skills.filter(skill => skill.category === category).map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-2">
                            <skill.icon className="w-4 h-4 text-gray-400" />
                            <span className="text-white font-medium text-sm">{skill.name}</span>
                          </div>
                          <span className="text-blue-400 font-semibold text-sm">{skill.level}%</span>
                        </div>
                        
                        <div className="h-2 bg-gray-800/50 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: index * 0.1 }}
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                          >
                            <div className="absolute inset-0 bg-white/30 animate-pulse" />
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
