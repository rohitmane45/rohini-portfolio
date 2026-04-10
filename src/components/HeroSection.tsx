import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const HeroSection: React.FC = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/rohinikale25',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/rohinikale2525',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:kalerohini333@gmail.com',
    },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 pt-32 pb-16 md:pt-40">
      {/* Main Content */}
      <div className="relative z-10 w-full max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          {/* Role Badge - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="inline-block px-6 py-2 rounded-full text-xs font-semibold tracking-widest uppercase backdrop-blur-sm transition-all duration-300"
              style={{
                backgroundColor: 'rgba(102, 126, 234, 0.15)',
                color: 'var(--neuro-accent)',
                border: '1.5px solid rgba(102, 126, 234, 0.3)',
                boxShadow: '0 4px 20px rgba(102, 126, 234, 0.1)',
              }}
            >
              AI Engineer and Data Scientist
            </motion.span>
          </motion.div>

          {/* Profile Image - Circular */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 md:mb-10"
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72 mx-auto">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full rounded-full overflow-hidden shadow-2xl"
                style={{
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
                  border: '8px solid var(--neuro-bg-primary)',
                  backgroundColor: 'var(--neuro-bg-primary)',
                }}
              >
                <img
                  src="/images/rohini image.jpg"
                  alt="Rohini Netaji Kale"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 30%" }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-3"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-[var(--neuro-text-primary)]">
              Rohini Netaji Kale
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-6"
          >
            <p className="text-lg md:text-xl font-medium text-[var(--neuro-text-secondary)]">
              Building Practical AI Products
            </p>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-10 max-w-xl"
          >
            <p className="text-base md:text-lg text-[var(--neuro-text-secondary)] leading-relaxed">
              I craft intelligent digital solutions by combining AI, data science, and machine learning with a strong focus on usability, efficiency, and impact.
            </p>
          </motion.div>

          {/* Action Buttons - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.a
              href="/assets/Rohini_Kale_Resume.pdf"
              download="Rohini_Kale_Resume.pdf"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 rounded-full font-semibold transition-all duration-300"
              style={{
                backgroundColor: 'var(--neuro-accent)',
                color: 'white',
                boxShadow: '0 12px 40px rgba(102, 126, 234, 0.4)',
              }}
            >
              Download Resume
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 rounded-full font-semibold transition-all duration-300 border-2 hover:shadow-lg"
              style={{
                borderColor: 'var(--neuro-accent)',
                color: 'var(--neuro-accent)',
              }}
            >
              Get in Touch
            </motion.button>
          </motion.div>

          {/* Social Links - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex justify-center gap-6"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.label === 'Email' ? '_self' : '_blank'}
                  rel={social.label === 'Email' ? '' : 'noopener noreferrer'}
                  whileHover={{ y: -4, scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border-2 border-transparent hover:border-[var(--neuro-accent)]"
                  style={{
                    backgroundColor: 'rgba(102, 126, 234, 0.1)',
                  }}
                  aria-label={social.label}
                >
                  <Icon className="w-6 h-6 text-[var(--neuro-accent)]" />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <svg className="w-6 h-6 text-[var(--neuro-text-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;
