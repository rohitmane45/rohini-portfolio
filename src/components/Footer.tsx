import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/rohinikale2525',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/rohinikale25',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:kalerohini333@gmail.com',
      label: 'Email',
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-white/0 dark:from-transparent to-white/50 dark:to-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4 md:col-span-1"
          >
            <h3 className="text-2xl font-serif font-bold text-[var(--neuro-text-primary)]">
              Rohini
            </h3>
            <p className="text-sm text-[var(--neuro-text-secondary)] leading-relaxed">
              Building intelligent automation solutions and AI-powered platforms.
            </p>
            <p className="text-xs text-[var(--neuro-text-secondary)]">
              Let's create something innovative together.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-[var(--neuro-text-primary)]">
              Navigation
            </h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  whileHover={{ x: 6, color: 'var(--neuro-accent)' }}
                  transition={{ duration: 0.2 }}
                  className="block text-sm text-[var(--neuro-text-secondary)] hover:text-[var(--neuro-accent)] transition-colors duration-200"
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>

          {/* Contact Section - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-[var(--neuro-text-primary)]">
              Contact
            </h4>
            <div className="space-y-2 text-sm text-[var(--neuro-text-secondary)]">
              <motion.a
                href="mailto:kalerohini333@gmail.com"
                whileHover={{ x: 4, color: 'var(--neuro-accent)' }}
                className="block hover:text-[var(--neuro-accent)] transition-colors duration-200"
              >
                kalerohini333@gmail.com
              </motion.a>
              <motion.a
                href="tel:+918329158421"
                whileHover={{ x: 4, color: 'var(--neuro-accent)' }}
                className="block hover:text-[var(--neuro-accent)] transition-colors duration-200"
              >
                +91 8329158421
              </motion.a>
              <p>Pune, Maharashtra, India</p>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-[var(--neuro-text-primary)]">
              Follow
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 rounded-lg bg-gradient-to-br from-[var(--neuro-accent)]/20 to-[var(--neuro-accent)]/10 border-2 border-[var(--neuro-accent)]/30 flex items-center justify-center hover:shadow-lg hover:border-[var(--neuro-accent)]/60 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-[var(--neuro-accent)]" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent mb-8 origin-left"
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-center gap-6"
        >
          {/* Copyright */}
          <div className="text-center sm:text-left text-sm text-[var(--neuro-text-secondary)]">
            <p>
              © {currentYear} Rohini Netaji Kale. Crafted with code, coffee, and creativity.
            </p>
          </div>

          {/* Back to Top Button - Enhanced */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-lg bg-gradient-to-br from-[var(--neuro-accent)]/20 to-[var(--neuro-accent)]/10 border-2 border-[var(--neuro-accent)]/30 hover:border-[var(--neuro-accent)]/60 hover:shadow-lg transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 text-[var(--neuro-accent)]" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
