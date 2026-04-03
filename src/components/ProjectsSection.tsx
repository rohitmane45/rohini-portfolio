import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, ExternalLink, Code2, ArrowRight } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  impact?: string;
  featured: boolean;
  color: string;
};

const ProjectsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedId, setSelectedId] = useState(1);

  const projects: Project[] = [
    {
      id: 1,
      title: 'N8N Automation Agent for Call Centers',
      shortDescription: 'A production-ready automation agent that streamlines BPO/call center workflows',
      description: 'Designed and implemented an n8n-based agent that automates call center/BPO workflows by integrating telephony APIs (Twilio, Amazon Connect), AI speech/text, and CRM—enabling secure, streamlined, and intelligent client interactions.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
      technologies: ['n8n', 'Twilio', 'Amazon Connect', 'AI/ML', 'REST APIs'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true,
      color: '#667eea',
      impact: 'Reduced manual BPO workload by ~40% with intelligent automation'
    },
    {
      id: 2,
      title: 'AetherChat Platform',
      shortDescription: 'Production-ready scalable chat system with AI-driven conversations',
      description: 'A production-ready, horizontally scalable chat system delivering AI-driven conversations, robust user management, and a cleanly decoupled backend–frontend architecture—perfect for learning, rapid prototyping, or evolving into an enterprise-grade conversational platform.',
      image: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=600&h=400&fit=crop',
      technologies: ['AI/ML', 'Chat System', 'Scalable Architecture', 'Backend/Frontend'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true,
      color: '#ff6b6b'
    },
    {
      id: 3,
      title: 'Rapid Intensification for Tropical Cyclone',
      shortDescription: 'Deep learning framework for predicting tropical cyclone intensification',
      description: 'Built a deep learning framework focused on rapid intensification (RI) prediction for tropical cyclones by fusing oceanic, atmospheric, and satellite signals, improving lead-time insights for early warning and operational decision support.',
      image: '/images/cyclone pic.jpg',
      technologies: ['Deep Learning', 'Tropical Cyclone RI', 'Satellite Data', 'Neural Networks'],
      githubUrl: 'https://github.com/rohitmane45/Rapid-Intensification-RI-For-Tropical-Cyclone-Tracking-System',
      liveUrl: '#',
      featured: true,
      color: '#ff6b6b',
      impact: 'Strengthened early-warning confidence with multi-signal modeling'
    },
    {
      id: 4,
      title: 'Movie Success Prediction',
      shortDescription: 'ML pipeline for predicting movie box office performance',
      description: 'Developed a machine learning pipeline to predict movie performance using historical metadata, genre trends, release timing, and cast-related signals to support data-driven production and marketing decisions.',
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&h=400&fit=crop',
      technologies: ['Machine Learning', 'Feature Engineering', 'Pandas', 'scikit-learn'],
      githubUrl: 'https://github.com/rohitmane45/Movie-Success-Prediction-and-Sentiment-Study',
      liveUrl: '#',
      featured: true,
      color: '#f59e0b'
    }
  ];

  const isValidUrl = (url: string) => /^https?:\/\//.test(url);
  const selectedProject = projects.find((p) => p.id === selectedId) || projects[0];

  return (
    <section id="projects" className="py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header - Enhanced */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--neuro-text-primary)] mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-[var(--neuro-text-secondary)] max-w-3xl mx-auto leading-relaxed">
            Innovative solutions combining AI, automation, and modern web technologies to solve real-world challenges
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Left: Project Cards - Enhanced */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            {projects.map((project, idx) => (
              <motion.button
                key={project.id}
                onClick={() => setSelectedId(project.id)}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full text-left transition-all duration-300 rounded-xl p-6 border-l-4 backdrop-blur-sm ${
                  selectedId === project.id
                    ? 'bg-white/60 dark:bg-slate-900/60 border-l-[var(--neuro-accent)] shadow-lg'
                    : 'bg-white/40 dark:bg-slate-900/20 border-l-transparent hover:border-l-[var(--neuro-accent)]'
                }`}
                style={selectedId === project.id ? { borderColor: `${project.color} !important` } : {}}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center shadow-md"
                    style={{ backgroundColor: `${project.color}20`, color: project.color }}
                  >
                    <Code2 className="w-6 h-6" />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-[var(--neuro-text-primary)] text-lg mb-1 line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[var(--neuro-text-secondary)] line-clamp-2">
                      {project.shortDescription}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Right: Project Details - Enhanced */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            key={selectedProject.id}
            className="space-y-6"
          >
            {/* Project Image - Enhanced */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="rounded-xl overflow-hidden h-64 shadow-2xl border-2 border-slate-200 dark:border-slate-700"
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  const target = e.currentTarget;
                  // Prevent infinite loop if fallback is also missing.
                  target.onerror = null;
                  target.src = '/images/n8n-automation-agent.png';
                }}
              />
            </motion.div>

            {/* Title & Description - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-3xl font-serif font-bold text-[var(--neuro-text-primary)] mb-3">
                {selectedProject.title}
              </h3>
              <p className="text-base text-[var(--neuro-text-secondary)] leading-relaxed">
                {selectedProject.description}
              </p>
            </motion.div>

            {/* Impact - Enhanced */}
            {selectedProject.impact && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-gradient-to-r from-[var(--neuro-accent)]/10 to-[var(--neuro-accent)]/5 backdrop-blur-sm border border-[var(--neuro-accent)]/30 rounded-xl p-5 border-l-4"
                style={{ borderLeftColor: `var(--neuro-accent)` }}
              >
                <div className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-[var(--neuro-accent)] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[var(--neuro-accent)] text-sm mb-1">Key Impact</p>
                    <p className="text-sm text-[var(--neuro-text-secondary)]">{selectedProject.impact}</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Technologies - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <p className="text-xs font-semibold text-[var(--neuro-text-primary)] mb-4 tracking-widest uppercase">Technology Stack</p>
              <div className="flex flex-wrap gap-3">
                {selectedProject.technologies.map((tech, idx) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="px-4 py-2 bg-gradient-to-r from-[var(--neuro-accent)]/5 to-[var(--neuro-accent)]/10 border border-[var(--neuro-accent)]/20 text-[var(--neuro-accent)] rounded-full text-sm font-semibold hover:border-[var(--neuro-accent)]/40 transition-all duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Action Buttons - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex gap-4 pt-2"
            >
              {isValidUrl(selectedProject.githubUrl) && (
                <motion.a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[var(--neuro-accent)] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </motion.a>
              )}
              {isValidUrl(selectedProject.liveUrl) && (
                <motion.a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border-2 border-[var(--neuro-accent)] text-[var(--neuro-accent)] rounded-xl font-semibold hover:bg-[var(--neuro-accent)]/5 hover:shadow-lg transition-all duration-300"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </motion.a>
              )}
            </motion.div>
          </motion.div>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <motion.a
            href="https://github.com/rohinikale2525?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-white dark:bg-slate-900 border-2 border-[var(--neuro-accent)] text-[var(--neuro-accent)] rounded-lg font-semibold hover:bg-[var(--neuro-accent)]/5 transition-all duration-300"
          >
            View More Projects
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
