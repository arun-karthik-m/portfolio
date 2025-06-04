
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Star, Download, MapPin, Calendar } from 'lucide-react';

export const ResumeSection = () => {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Grafixui',
      location: 'Chennai, Tamil Nadu, India · Remote',
      period: 'Nov 2024 - Jan 2025',
      type: 'Internship',
      description: 'Developed and deployed scalable web applications. Designed responsive UIs and worked on FrontEnd. Optimized website performance and collaborated with a team.',
      achievements: [
        'Developed and deployed scalable web applications',
        'Designed responsive user interfaces',
        'Optimized website performance',
        'Collaborated with team members'
      ],
      skills: ['JavaScript', 'React', 'HTML', 'CSS', 'Node.js', 'MongoDB', 'Git', 'Responsive Design', 'UI/UX', 'Performance Optimization', 'Team Collaboration', 'Deployment Strategies']
    },
    {
      title: 'Frontend Developer',
      company: 'New Technology Institution',
      location: 'Coimbatore, Tamil Nadu, India · Hybrid',
      period: 'Jun 2024',
      type: 'Internship',
      description: 'Built interactive web interfaces using React, HTML, CSS, and JavaScript. Learned and applied UI/UX principles in live projects.',
      achievements: [
        'Developed interactive web interfaces',
        'Applied UI/UX principles in real projects',
        'Worked with modern frontend technologies'
      ],
      skills: ['JavaScript', 'React', 'HTML', 'CSS', 'UI/UX', 'Front-End Development']
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Technology - BTech, Computer Science',
      school: 'SRM IST Chennai',
      location: 'Chennai, India',
      period: 'Jun 2023 - May 2027',
      type: 'Bachelor\'s Degree',
      description: 'Pursuing Bachelor\'s degree in Computer Science with focus on Software Development and Emerging Technologies.',
      achievements: [
        'Finalist in national-level hackathons for AI-powered and frontend-driven solutions.',
        'Built scalable MVPs using React, Tailwind, and MySQL under tight deadlines.',
        'Recognized for innovation, UI/UX excellence, and team collaboration.'
      ]
    }
  ];

  return (
    <section id="resume" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-pink-900/20" />
      <div className="absolute inset-0 cyber-grid opacity-5" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-orbitron font-bold gradient-text mb-6"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
          >
            Resume
          </motion.h2>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl font-semibold text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            <Download className="w-5 h-5" />
            Download Full Resume
          </motion.button>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Experience Section */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                Professional Experience
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
                    <div className="absolute left-5 top-16 bottom-0 w-px bg-gradient-to-b from-blue-500 to-purple-500 opacity-30" />
                    <div className="absolute left-5 top-12 w-2 h-2 bg-blue-500 rounded-full transform -translate-x-1/2" />
                    
                    <div className="ml-12 glass-effect p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-[1.02]">
                      <div className="flex flex-wrap items-start justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-white mb-1">{exp.title}</h4>
                          <p className="text-blue-400 font-semibold text-lg">{exp.company}</p>
                          <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {exp.period}
                            </span>
                          </div>
                        </div>
                        <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                          {exp.type}
                        </span>
                      </div>
                      
                      <p className="text-gray-300 mb-4">{exp.description}</p>
                      
                      <div className="space-y-3">
                        <div>
                          <h5 className="text-white font-semibold mb-2 flex items-center">
                            <Award className="w-4 h-4 mr-2 text-yellow-400" />
                            Key Achievements
                          </h5>
                          <ul className="text-gray-300 text-sm space-y-1">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start">
                                <Star className="w-3 h-3 text-yellow-400 mt-1 mr-2 flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 pt-2">
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded text-xs border border-purple-500/30"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Education & Certifications Sidebar */}
          <div className="lg:col-span-5 space-y-8">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                Education
              </h3>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-effect p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                  >
                    <div className="mb-4">
                      <h4 className="text-lg font-bold text-white mb-1">{edu.degree}</h4>
                      <p className="text-purple-400 font-semibold">{edu.school}</p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-3">{edu.description}</p>
                    
                    <div className="space-y-2">
                      <h5 className="text-white font-semibold text-sm flex items-center">
                        <Award className="w-4 h-4 mr-2 text-yellow-400" />
                        Highlights
                      </h5>
                      <ul className="text-gray-300 text-xs space-y-1">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <Star className="w-3 h-3 text-yellow-400 mt-0.5 mr-1 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};
