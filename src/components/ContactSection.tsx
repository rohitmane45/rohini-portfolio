import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    const subject = encodeURIComponent(data.subject);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    );
    const mailtoLink = `mailto:kalerohini333@gmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kalerohini333@gmail.com',
      href: 'mailto:kalerohini333@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8329158421',
      href: 'tel:+918329158421',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pune, Maharashtra, India',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/rohinikale2525',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/rohinikale25',
    },
    {
      icon: ExternalLink,
      label: 'Portfolio',
      href: 'https://rohinikale.site',
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 px-4">
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
            Get In Touch
          </h2>
          <p className="text-lg text-[var(--neuro-text-secondary)] max-w-2xl mx-auto">
            Let's collaborate! I'm open to discussing new opportunities, projects, and ideas. Reach out anytime.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-[var(--neuro-text-primary)] mb-4">
                Let's Connect
              </h3>
              <p className="text-[var(--neuro-text-secondary)] leading-relaxed">
                I'm actively seeking internship opportunities, collaboration projects, and freelance work. 
                Whether you have a project idea, job opportunity, or just want to chat about technology, I'd love to hear from you!
              </p>
            </div>

            {/* Contact Cards - Enhanced */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={index}
                    href={info.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 4 }}
                    className="bg-gradient-to-r from-white/50 to-white/30 dark:from-slate-900/40 dark:to-slate-900/20 rounded-xl p-6 border border-slate-200/60 dark:border-slate-700/60 hover:shadow-lg transition-all duration-300 flex items-center gap-4 backdrop-blur-sm"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--neuro-accent)]/20 to-[var(--neuro-accent)]/10 flex items-center justify-center flex-shrink-0 border border-[var(--neuro-accent)]/20"
                    >
                      <Icon className="w-6 h-6 text-[var(--neuro-accent)]" />
                    </motion.div>
                    <div>
                      <p className="text-xs text-[var(--neuro-text-secondary)] tracking-widest uppercase font-semibold">{info.label}</p>
                      <p className="font-semibold text-[var(--neuro-text-primary)]">{info.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Links - Enhanced */}
            <div>
              <h4 className="text-lg font-semibold text-[var(--neuro-text-primary)] mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.15, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--neuro-accent)]/20 to-[var(--neuro-accent)]/10 border-2 border-[var(--neuro-accent)]/30 flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:border-[var(--neuro-accent)]/60"
                      aria-label={social.label}
                    >
                      <Icon className="w-6 h-6 text-[var(--neuro-accent)]" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-[var(--neuro-text-primary)] mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                {...register('name', { required: 'Name is required' })}
                className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-slate-900/30 border border-slate-200/50 dark:border-slate-700/50 text-[var(--neuro-text-primary)] placeholder-[var(--neuro-text-secondary)] focus:outline-none focus:border-[var(--neuro-accent)] focus:ring-2 focus:ring-[var(--neuro-accent)]/10 transition-all duration-300"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-[var(--neuro-text-primary)] mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="your.email@example.com"
                {...register('email', {
                  required: 'Email is required',
                  pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email' }
                })}
                className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-slate-900/30 border border-slate-200/50 dark:border-slate-700/50 text-[var(--neuro-text-primary)] placeholder-[var(--neuro-text-secondary)] focus:outline-none focus:border-[var(--neuro-accent)] focus:ring-2 focus:ring-[var(--neuro-accent)]/10 transition-all duration-300"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-semibold text-[var(--neuro-text-primary)] mb-2">
                Subject
              </label>
              <input
                type="text"
                placeholder="What is this about?"
                {...register('subject', { required: 'Subject is required' })}
                className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-slate-900/30 border border-slate-200/50 dark:border-slate-700/50 text-[var(--neuro-text-primary)] placeholder-[var(--neuro-text-secondary)] focus:outline-none focus:border-[var(--neuro-accent)] focus:ring-2 focus:ring-[var(--neuro-accent)]/10 transition-all duration-300"
              />
              {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-[var(--neuro-text-primary)] mb-2">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Your message here..."
                {...register('message', { required: 'Message is required' })}
                className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-slate-900/30 border border-slate-200/50 dark:border-slate-700/50 text-[var(--neuro-text-primary)] placeholder-[var(--neuro-text-secondary)] focus:outline-none focus:border-[var(--neuro-accent)] focus:ring-2 focus:ring-[var(--neuro-accent)]/10 transition-all duration-300 resize-none"
              />
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
            </div>

            {/* Submit Button - Enhanced */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-3 bg-[var(--neuro-accent)] text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                boxShadow: '0 12px 40px rgba(102, 126, 234, 0.3)',
              }}
            >
              <Send className="w-5 h-5" />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>

            {/* Success Message */}
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-700 rounded-lg text-green-700 dark:text-green-300 text-center"
              >
                ✓ Thank you! Your message has been sent. I'll get back to you soon!
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
