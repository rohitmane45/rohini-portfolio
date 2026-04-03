import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Palette, Rocket, Cloud, Bot, GraduationCap, Calendar, Award } from 'lucide-react';

const AboutSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = [
    { name: 'Python & AI/ML', icon: Code2, color: '#3776ab' },
    { name: 'JavaScript & Web', icon: Palette, color: '#f7df1e' },
    { name: 'Flutter & Mobile', icon: Rocket, color: '#02569b' },
    { name: 'Data Science', icon: Palette, color: '#ff6b35' },
    { name: 'Automation & n8n', icon: Cloud, color: '#ff9900' },
  ];

  const education = [
    {
      degree: 'B.E. AI & Data Science',
      institution: 'Savitribai Phule Pune University',
      year: '2024-2027',
      cgpa: '9.59 CGPA',
      status: 'Current'
    },
    {
      degree: 'Higher Secondary (HSC)',
      institution: 'J.E.SCH. Junior College',
      year: '2023',
      cgpa: '86%'
    }
  ];

  const achievements = [
    { label: 'Data Science Intern', detail: 'CodeWithHarry', icon: Code2 },
    { label: 'Katalyst Scholar', detail: 'Women in STEM', icon: Award },
    { label: 'Business Associate', detail: 'Health-Tech Startup', icon: Rocket },
    { label: 'Technical Member', detail: 'Byteminds NGO', icon: Bot },
  ];

  const techStack = [
    'Python', 'JavaScript', 'Dart', 'Flutter', 'TensorFlow', 'scikit-learn',
    'n8n', 'REST APIs', 'SQL', 'React', 'TypeScript', 'Google Vision'
  ];

  return (
    <section id="about" className="py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--neuro-text-primary)] mb-4">
            About Me
          </h2>
          <p className="text-lg text-[var(--neuro-text-secondary)] max-w-2xl mx-auto">
            Passionate AI/Data Science student passionate about building intelligent solutions that solve real-world problems through automation and machine learning.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Column 1: About Text - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1 space-y-4"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-white/60 to-white/40 dark:from-slate-900/40 dark:to-slate-900/20 rounded-2xl p-6 md:p-8 border border-slate-200/60 dark:border-slate-700/60 hover:shadow-lg transition-all duration-300 backdrop-blur-sm"
            >
              <p className="text-[var(--neuro-text-secondary)] leading-relaxed text-sm md:text-base mb-4">
                I'm a B.E. student in Artificial Intelligence & Data Science at SPPU with a 9.59 CGPA, specializing in building intelligent automation solutions and AI-powered platforms.
              </p>
              <p className="text-[var(--neuro-text-secondary)] leading-relaxed text-sm md:text-base">
                My work spans n8n automation agents, Flutter development with AI integration, deep learning models for weather prediction, and scalable backend architectures.
              </p>
            </motion.div>
          </motion.div>

          {/* Column 2: Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1 space-y-4"
          >
            <h3 className="text-xl font-semibold text-[var(--neuro-text-primary)] mb-6">Education</h3>
            {education.map((edu, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 4 }}
                className="bg-gradient-to-r from-white/50 to-white/30 dark:from-slate-900/40 dark:to-slate-900/20 rounded-xl p-4 border border-left-accent transition-all duration-300 hover:shadow-lg backdrop-blur-sm"
                style={{
                  borderLeft: '4px solid var(--neuro-accent)',
                  borderColor: 'var(--neuro-accent)',
                  borderTop: '1px solid rgba(102, 126, 234, 0.2)',
                  borderRight: '1px solid rgba(102, 126, 234, 0.2)',
                  borderBottom: '1px solid rgba(102, 126, 234, 0.2)',
                }}
              >
                <div className="flex gap-3 mb-2">
                  <GraduationCap className="w-5 h-5 text-[var(--neuro-accent)] flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-[var(--neuro-text-primary)] text-sm md:text-base">
                      {edu.degree}
                    </h4>
                    <p className="text-xs md:text-sm text-[var(--neuro-text-secondary)] mt-1">
                      {edu.institution}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 ml-8 text-xs">
                  <span className="text-[var(--neuro-text-secondary)]">{edu.year}</span>
                  <span className="text-[var(--neuro-accent)] font-semibold">{edu.cgpa}</span>
                  {edu.status && <span className="text-green-600 dark:text-green-400 font-semibold">{edu.status}</span>}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Column 3: Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-1 space-y-4"
          >
            <h3 className="text-xl font-semibold text-[var(--neuro-text-primary)] mb-6">Current Roles</h3>
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="bg-gradient-to-r from-white/50 to-white/30 dark:from-slate-900/40 dark:to-slate-900/20 rounded-xl p-4 border border-left-accent transition-all duration-300 hover:shadow-lg backdrop-blur-sm"
                  style={{
                    borderLeft: '4px solid var(--neuro-accent)',
                    borderColor: 'var(--neuro-accent)',
                    borderTop: '1px solid rgba(102, 126, 234, 0.2)',
                    borderRight: '1px solid rgba(102, 126, 234, 0.2)',
                    borderBottom: '1px solid rgba(102, 126, 234, 0.2)',
                  }}
                >
                  <div className="flex gap-3">
                    <Icon className="w-5 h-5 text-[var(--neuro-accent)] flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <p className="font-semibold text-[var(--neuro-text-primary)] text-sm md:text-base">
                        {achievement.label}
                      </p>
                      <p className="text-xs md:text-sm text-[var(--neuro-text-secondary)]">
                        {achievement.detail}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-[var(--neuro-text-primary)] mb-8 text-center">Core Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.08, y: -4 }}
                  className="bg-gradient-to-br from-white/60 to-white/30 dark:from-slate-900/40 dark:to-slate-900/20 rounded-xl p-6 text-center border border-slate-200/60 dark:border-slate-700/60 hover:shadow-lg transition-all duration-300 backdrop-blur-sm"
                >
                  <motion.div whileHover={{ scale: 1.15, rotate: 5 }} className="mb-3">
                    <Icon className="w-8 h-8 mx-auto" style={{ color: skill.color }} />
                  </motion.div>
                  <p className="font-semibold text-[var(--neuro-text-primary)] text-sm md:text-base">
                    {skill.name}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Tech Stack - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-white/60 to-white/40 dark:from-slate-900/40 dark:to-slate-900/20 rounded-2xl p-8 border border-slate-200/60 dark:border-slate-700/60 hover:shadow-lg transition-all duration-300 backdrop-blur-sm"
        >
          <h3 className="text-xl font-semibold text-[var(--neuro-text-primary)] mb-6">Technology Stack</h3>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.12, y: -2 }}
                className="px-4 py-2 bg-gradient-to-r from-[var(--neuro-accent)]/15 to-[var(--neuro-accent)]/5 text-[var(--neuro-accent)] rounded-full text-sm font-semibold border border-[var(--neuro-accent)]/30 hover:border-[var(--neuro-accent)]/60 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
