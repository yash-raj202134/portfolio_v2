import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Linkedin, Github, Code2, ExternalLink } from 'lucide-react';
import { socialLinks, contactInfo } from '../data/portfolioData';

const quickLinks = [
  { name: 'About Me', href: '#about' },
  { name: 'Curriculum Vitae', href: '/cv.html' },
  { name: 'Projects', href: '#projects' },
  { name: 'Blog', href: '#blog' },
  { name: 'Papers', href: '#papers' },
  { name: 'Contact', href: '#contact' },
  { name: 'Analytics', href: 'https://visitcount.itsvg.in/analytics/yash' }
];

const socialIcons = [
  { name: 'Instagram', icon: Instagram, href: socialLinks.instagram },
  { name: 'Facebook', icon: Facebook, href: socialLinks.facebook },
  { name: 'Twitter', icon: Twitter, href: socialLinks.twitter },
  { name: 'GitHub', icon: Github, href: socialLinks.github },
  { name: 'LinkedIn', icon: Linkedin, href: socialLinks.linkedin }
];

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="glass-footer text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Code2 className="w-6 h-6 text-blue-400" />
              About
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              I'm Yash Raj, a Computer Science Engineer specializing in Machine Learning and Data Science. Passionate about developing innovative solutions and continuously learning new technologies.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors">
                <Phone className="w-4 h-4" />
                <span>{contactInfo.phone}</span>
              </li>
              <li>
                <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>{contactInfo.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-4 h-4 mt-1" />
                <span>Delhi, India</span>
              </li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-gray-400 hover:text-blue-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                    {!link.href.startsWith('#') && <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-6">Follow Me</h3>
            <div className="flex flex-wrap gap-3 mb-8">
              {socialIcons.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 hover:bg-blue-500/30 hover:border-blue-500/60 hover:text-blue-300 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  title={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>

            {/* Newsletter */}
            <form
              action="https://formspree.io/f/xnqevjng"
              method="POST"
              className="space-y-3"
            >
              <input
                type="email"
                name="email"
                placeholder="Subscribe to newsletter"
                required
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors text-sm"
              />
              <motion.button
                type="submit"
                className="w-full px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Yash Raj. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
