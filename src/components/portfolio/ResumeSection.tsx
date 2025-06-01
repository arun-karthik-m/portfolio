
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Star, Download, MapPin, Calendar } from 'lucide-react';

export const ResumeSection = () => {
  const experiences = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      type: 'Full-time',
      description: 'Leading development of cutting-edge web applications using React, Node.js, and emerging technologies. Managed a team of 5 developers and delivered 15+ successful projects.',
      achievements: [
        'Increased application performance by 40%',
        'Led migration to microservices architecture',
        'Mentored 3 junior developers'
      ],
      skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'MongoDB']
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency Pro',
      location: 'New York, NY',
      period: '2020 - 2022',
      type: 'Full-time',
      description: 'Specialized in creating interactive user interfaces and 3D web experiences for premium clients. Collaborated with design teams to deliver pixel-perfect implementations.',
      achievements: [
        'Built 20+ responsive web applications',
        'Implemented WebGL-based 3D experiences',
        'Improved user engagement by 60%'
      ],
      skills: ['Vue.js', 'Three.js', 'WebGL', 'GSAP', 'Sass']
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Labs',
      location: 'Austin, TX',
      period: '2019 - 2020',
      type: 'Full-time',
      description: 'Built responsive web applications and contributed to full-stack development projects. Gained expertise in modern JavaScript frameworks and backend technologies.',
      achievements: [
        'Developed 10+ web applications',
        'Reduced load times by 35%',
        'Implemented CI/CD pipelines'
      ],
      skills: ['JavaScript', 'Python', 'Django', 'PostgreSQL', 'Docker']
    },
  ];

  const education = [
    {
      degree: 'Master of Computer Science',
      school: 'Tech University',
      location: 'California, USA',
      period: '2017 - 2019',
      type: 'Masters Degree',
      description: 'Specialized in Computer Graphics and Human-Computer Interaction. Graduated with a 3.9 GPA.',
      achievements: [
        'Thesis: "Advanced WebGL Rendering Techniques"',
        'Dean\'s List for 4 consecutive semesters',
        'Research published in ACM Digital Library'
      ],
      courses: ['Computer Graphics', 'Machine Learning', 'Web Technologies', 'HCI Design']
    },
    {
      degree: 'Bachelor of Software Engineering',
      school: 'State University',
      location: 'Texas, USA',
      period: '2013 - 2017',
      type: 'Bachelor Degree',
      description: 'Graduated Magna Cum Laude with focus on Web Technologies and Software Architecture.',
      achievements: [
        'Magna Cum Laude graduate (GPA: 3.8)',
        'President of Computer Science Society',
        'Winner of Annual Hackathon 2016'
      ],
      courses: ['Data Structures', 'Software Architecture', 'Database Systems', 'Web Development']
    },
  ];

  const certifications = [
    { name: 'AWS Certified Solutions Architect', year: '2023' },
    { name: 'Google Cloud Professional Developer', year: '2022' },
    { name: 'MongoDB Certified Developer', year: '2021' },
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

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                  <Award className="w-4 h-4 text-white" />
                </div>
                Certifications
              </h3>
              
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-effect p-4 rounded-lg border border-green-500/20 hover:border-green-500/40 transition-all duration-300"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium text-sm">{cert.name}</span>
                      <span className="text-green-400 font-semibold text-sm">{cert.year}</span>
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
