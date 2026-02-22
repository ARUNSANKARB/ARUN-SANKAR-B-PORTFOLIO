import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaCode, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-transparent to-secondary/50">
      <div className="container-custom py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold font-poppins gradient-text mb-2">
              AS
            </h3>
            <p className="text-white/60 text-sm font-inter">
              Java Full Stack Developer | Problem Solver | Code Enthusiast
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-bold font-poppins mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'About', to: 'about' },
                { label: 'Projects', to: 'projects' },
                { label: 'Contact', to: 'contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth
                    duration={500}
                    className="text-white/60 hover:text-primary transition-smooth cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-bold font-poppins mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'GitHub', url: 'https://github.com/ARUNSANKARB' },
                { label: 'LinkedIn', url: 'https://www.linkedin.com/in/arun-sankar-b-4683b3319/' },
                { label: 'LeetCode', url: 'https://leetcode.com/u/ARUNSANKARB/' },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-primary transition-smooth"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center gap-4 pb-12 border-b border-white/10"
        >
          {[
            { icon: FaGithub, url: 'https://github.com/ARUNSANKARB' },
            {
              icon: FaLinkedin,
              url: 'https://www.linkedin.com/in/arun-sankar-b-4683b3319/',
            },
            { icon: FaCode, url: 'https://leetcode.com/u/ARUNSANKARB/' },
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Social media link"
              className="p-3 bg-white/5 hover:bg-primary/20 rounded-button transition-smooth"
            >
              <social.icon size={20} className="text-white" />
            </a>
          ))}
        </motion.div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-sm text-white/60 font-inter">
          <p>
            © {currentYear} Arun Sankar B. All rights reserved.
          </p>
          <Link
            to="hero"
            smooth
            duration={500}
            className="p-2 bg-white/5 hover:bg-primary/20 rounded-button transition-smooth cursor-pointer"
          >
            <FaArrowUp size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
};
