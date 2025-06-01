
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Palette, Zap, Globe, Cpu } from 'lucide-react';

export const AboutSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend',
      skills: [
        { name: 'React/Next.js', level: 95, color: 'from-blue-500 to-cyan-500' },
        { name: 'TypeScript', level: 90, color: 'from-blue-600 to-blue-400' },
        { name: 'Three.js/WebGL', level: 85, color: 'from-purple-500 to-pink-500' },
      ]
    },
    {
      icon: Database,
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 88, color: 'from-green-500 to-emerald-500' },
        { name: 'Python', level: 82, color: 'from-yellow-500 to-orange-500' },
        { name: 'PostgreSQL', level: 80, color: 'from-indigo-500 to-purple-500' },
      ]
    },
    {
      icon: Palette,
      title: 'Design',
      skills: [
        { name: 'UI/UX Design', level: 85, color: 'from-pink-500 to-rose-500' },
        { name: 'Figma', level: 80, color: 'from-violet-500 to-purple-500' },
        { name: 'Adobe Creative', level: 75, color: 'from-red-500 to-pink-500' },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold gradient-text mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate about creating digital experiences that bridge the gap between 
            imagination and reality through code.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
              <p className="text-gray-300 leading-relaxed">
                With over 5 years of experience in full-stack development, I specialize in 
                creating immersive web applications that push the boundaries of what's possible 
                in the browser. My passion lies in combining cutting-edge technologies with 
                intuitive design to deliver exceptional user experiences.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">What I Do</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Frontend Development', icon: Globe },
                  { name: 'Backend Architecture', icon: Database },
                  { name: '3D Web Experiences', icon: Cpu },
                  { name: 'UI/UX Design', icon: Palette }
                ].map((item, index) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-4 rounded-lg border border-blue-500/30 interactive"
                  >
                    <item.icon className="w-6 h-6 text-blue-400 mb-2" />
                    <span className="text-blue-300 font-semibold text-sm">{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center lg:text-left">Technical Expertise</h3>
            
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.2 }}
                className="glass-effect p-6 rounded-xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg">
                    <category.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white">{category.title}</h4>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-blue-400 font-semibold">{skill.level}%</span>
                      </div>
                      
                      <div className="h-2 bg-gray-800/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse" />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
