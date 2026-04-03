import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Users, Code, Calendar, ArrowRight, TrendingUp, Award } from 'lucide-react';

type Experience = {
  id: number;
  title: string;
  organization: string;
  period: string;
  duration: string;
  type: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  description: string;
  achievements: string[];
  scope?: string;
  teamSize?: string;
  keyMetrics?: { label: string; value: string }[];
  skills?: string[];
};

const ExperienceSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences: Experience[] = [
    {
      id: 1,
      title: 'Data Science Intern',
      organization: 'CodeWithHarry',
      period: 'Present',
      duration: '6+ months',
      type: 'Internship',
      icon: Briefcase,
      color: '#667eea',
      description: 'Hands-on internship covering Python, Pandas, NumPy, statistics, and end-to-end data science projects.',
      scope: 'Cross-functional learning across data pipelines',
      teamSize: 'Self-led with mentorship',
      keyMetrics: [
        { label: 'Projects Completed', value: '8+' },
        { label: 'Skills Acquired', value: '15+' }
      ],
      skills: ['Python', 'Pandas', 'NumPy', 'Data Visualization'],
      achievements: [
        'End-to-end data science projects from concept to deployment',
        'Advanced preprocessing and feature engineering techniques'
      ]
    },
    {
      id: 2,
      title: 'Katalyst India Scholar',
      organization: 'Katalyst India',
      period: 'Present',
      duration: '8+ months',
      type: 'Scholarship',
      icon: Award,
      color: '#4ecdc4',
      description: 'Women in STEM leadership program with mentorship and corporate exposure from industry leaders.',
      scope: 'Women in STEM leadership development',
      teamSize: '200+ scholars cohort',
      keyMetrics: [
        { label: 'Mentors', value: '3+' },
        { label: 'Corporate Visits', value: '5+' }
      ],
      skills: ['Leadership', 'Women Empowerment', 'Career Growth'],
      achievements: [
        'Leadership development through strategic thinking programs',
        '1:1 mentorship from senior industry leaders'
      ]
    },
    {
      id: 3,
      title: 'Business Associate',
      organization: 'Health-Tech Startup',
      period: 'Present',
      duration: '3+ months',
      type: 'Professional',
      icon: Briefcase,
      color: '#ff6b6b',
      description: 'Leading cross-functional team in health-tech, driving product operations and go-to-market strategy.',
      scope: 'Product operations & go-to-market strategy',
      teamSize: '10-12 member team',
      keyMetrics: [
        { label: 'Team Members Led', value: '10-12' },
        { label: 'Initiatives Driven', value: '8+' }
      ],
      skills: ['Team Leadership', 'Product Management', 'Operations', 'GTM Strategy'],
      achievements: [
        'Led cross-functional team and product operations strategy',
        'Drove digital presence and marketing initiatives'
      ]
    },
    {
      id: 4,
      title: 'Technical Member',
      organization: 'Byteminds NGO',
      period: '2024',
      duration: '12 months',
      type: 'Volunteer',
      icon: Code,
      color: '#43e97b',
      description: 'Technical education and mentorship for students through social awareness initiatives.',
      scope: 'Tech education & community outreach',
      teamSize: '50+ students impacted',
      keyMetrics: [
        { label: 'Students Taught', value: '50+' },
        { label: 'Sessions Conducted', value: '20+' }
      ],
      skills: ['Teaching', 'Community Engagement', 'Mentorship'],
      achievements: [
        'Delivered coding education to underserved student population',
        'Continuous mentorship and tech-enabled social impact'
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--neuro-text-primary)] mb-4">
            Experience & Roles
          </h2>
          <p className="text-lg text-[var(--neuro-text-secondary)] max-w-2xl mx-auto">
            A diverse journey through internships, scholarships, leadership, and community engagement
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group"
              >
                <motion.div 
                  className="bg-gradient-to-r from-white/60 to-white/40 dark:from-slate-900/40 dark:to-slate-900/20 rounded-xl p-6 md:p-8 border border-slate-200/60 dark:border-slate-700/60 hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
                  style={{
                    borderLeftWidth: '4px',
                    borderLeftColor: exp.color,
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
                  }}
                  whileHover={{ boxShadow: '0 16px 40px rgba(102, 126, 234, 0.15)' }}
                >
                  {/* Header - Enhanced */}
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg"
                      style={{ backgroundColor: `${exp.color}20`, border: `2px solid ${exp.color}40` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: exp.color }} />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-[var(--neuro-text-primary)] group-hover:text-[var(--neuro-accent)] transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-sm font-semibold" style={{ color: exp.color }}>
                        {exp.organization}
                      </p>
                    </div>
                  </div>

                  {/* Description - Enhanced */}
                  <p className="text-sm text-[var(--neuro-text-secondary)] mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Type Badge - Enhanced */}
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className="inline-block px-3 py-1 text-xs font-semibold rounded-full border-2"
                      style={{
                        backgroundColor: `${exp.color}15`,
                        color: exp.color,
                        borderColor: `${exp.color}40`,
                      }}
                    >
                      {exp.type}
                    </motion.span>
                    <span className="text-xs text-[var(--neuro-text-secondary)]">
                      {exp.duration}
                    </span>
                  </div>

                  {/* Achievements - Enhanced */}
                  <div className="space-y-2 mb-4">
                    {exp.achievements.map((achievement, idx) => (
                      <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, x: -5 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -5 }}
                        transition={{ delay: index * 0.1 + idx * 0.05 }}
                        className="flex items-start gap-2"
                      >
                        <ArrowRight className="w-4 h-4 text-[var(--neuro-accent)] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[var(--neuro-text-secondary)]">
                          {achievement}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Skills - Enhanced */}
                  {exp.skills && exp.skills.length > 0 && (
                    <div className="pt-4 border-t border-slate-200/50 dark:border-slate-700/30">
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, idx) => (
                          <motion.span
                            key={idx}
                            whileHover={{ scale: 1.08, y: -1 }}
                            className="text-xs px-3 py-1.5 rounded-full font-medium transition-all duration-300"
                            style={{
                              backgroundColor: `${exp.color}18`,
                              color: exp.color,
                              border: `1.5px solid ${exp.color}35`
                            }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Summary Section - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-white/60 to-white/40 dark:from-slate-900/40 dark:to-slate-900/20 rounded-xl p-8 md:p-10 border border-slate-200/60 dark:border-slate-700/60 hover:shadow-lg transition-all duration-300 backdrop-blur-sm"
        >
          <div className="flex items-start gap-4 mb-4">
            <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
              <TrendingUp className="w-6 h-6 text-[var(--neuro-accent)] flex-shrink-0 mt-1" />
            </motion.div>
            <h3 className="text-2xl font-bold text-[var(--neuro-text-primary)]">
              My Journey
            </h3>
          </div>
          <p className="text-[var(--neuro-text-secondary)] leading-relaxed font-medium">
            I'm driven by growth, impact, and learning. From leading teams in health-tech to developing data science skills at CodeWithHarry, 
            from mentorship through Katalyst to giving back through tech education at Byteminds—every role has shaped my vision 
            of combining technology with social impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
