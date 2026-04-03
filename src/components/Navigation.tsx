import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const Navigation: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ];

  const isDark = theme === 'dark';

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('hero')}
            className="text-lg font-serif font-bold text-[var(--neuro-text-primary)] transition-colors duration-200"
          >
            Rohini Kale
          </motion.button>

          {/* Desktop Navigation - Centered Pill Shape - Enhanced */}
          <div className="hidden md:flex items-center">
            <motion.div
              className="flex items-center space-x-8 px-8 py-3 rounded-full transition-all duration-300"
              style={{
                backgroundColor: isDark
                  ? (isScrolled ? 'rgba(15, 23, 42, 0.92)' : 'rgba(15, 23, 42, 0.82)')
                  : (isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.9)'),
                backdropFilter: 'blur(20px)',
                border: isDark ? '1px solid rgba(148, 163, 184, 0.3)' : '1px solid rgba(148, 163, 184, 0.35)',
                boxShadow: isDark
                  ? '0 10px 30px rgba(2, 6, 23, 0.35)'
                  : '0 10px 28px rgba(15, 23, 42, 0.12)',
              }}
              whileHover={{ boxShadow: '0 12px 40px rgba(102, 126, 234, 0.15)' }}
            >
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ color: 'var(--neuro-accent)', scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-semibold transition-colors duration-200 whitespace-nowrap"
                  style={{ color: isDark ? '#e2e8f0' : '#334155' }}
                >
                  {item.label}
                </motion.button>
              ))}
            </motion.div>
          </div>

          {/* Theme Toggle - Enhanced */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 rounded-lg transition-all duration-300 border-2 border-transparent hover:border-[var(--neuro-accent)]"
            style={{
              backgroundColor: isDark
                ? (isScrolled ? 'rgba(15, 23, 42, 0.85)' : 'rgba(15, 23, 42, 0.72)')
                : (isScrolled ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0.7)'),
              backdropFilter: 'blur(10px)',
              boxShadow: isDark ? '0 8px 20px rgba(2, 6, 23, 0.3)' : '0 8px 20px rgba(15, 23, 42, 0.1)',
            }}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5 text-[var(--neuro-text-primary)]" />
            ) : (
              <Sun className="w-5 h-5 text-[var(--neuro-text-primary)]" />
            )}
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-all duration-200"
            style={{
              backgroundColor: isDark ? 'rgba(15, 23, 42, 0.82)' : 'rgba(255, 255, 255, 0.95)',
              border: isDark ? '1px solid rgba(148, 163, 184, 0.3)' : '1px solid rgba(148, 163, 184, 0.35)',
              boxShadow: isDark ? '0 8px 20px rgba(2, 6, 23, 0.3)' : '0 8px 20px rgba(15, 23, 42, 0.1)',
            }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-[var(--neuro-text-primary)]" />
            ) : (
              <Menu className="w-5 h-5 text-[var(--neuro-text-primary)]" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden mt-4"
        >
          <div
            className="flex flex-col space-y-1 p-2 rounded-2xl"
            style={{
              backgroundColor: isDark ? 'rgba(15, 23, 42, 0.92)' : 'rgba(255, 255, 255, 0.98)',
              border: isDark ? '1px solid rgba(148, 163, 184, 0.3)' : '1px solid rgba(148, 163, 184, 0.35)',
              boxShadow: isDark ? '0 12px 28px rgba(2, 6, 23, 0.35)' : '0 12px 28px rgba(15, 23, 42, 0.12)',
              backdropFilter: 'blur(14px)',
            }}
          >
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ x: 5 }}
                onClick={() => scrollToSection(item.id)}
                className="text-left px-4 py-2 rounded-xl text-sm font-semibold hover:text-[var(--neuro-accent)] transition-colors duration-200"
                style={{
                  color: isDark ? '#e2e8f0' : '#334155',
                }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;