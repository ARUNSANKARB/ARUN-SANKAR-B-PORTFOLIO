import { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useActiveSection } from '../hooks/useActiveSection';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Experience', to: 'experience' },
  { name: 'Education', to: 'education' },
  { name: 'Contact', to: 'contact' },
];

export const Navbar = () => {
  const activeSection = useActiveSection();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-white/10"
    >
      <div className="container-custom flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link
          to="hero"
          smooth
          duration={500}
          className="text-xl md:text-2xl font-bold font-poppins gradient-text cursor-pointer"
        >
          BAS
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={500}
              className={`px-4 py-2 rounded-button transition-all cursor-pointer font-500 text-sm ${
                activeSection === link.to
                  ? 'text-primary bg-primary/10'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="hidden sm:inline-flex px-4 py-2 bg-primary text-white rounded-button font-600 text-sm hover:bg-blue-600 transition-smooth"
          >
            Resume
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-button hover:bg-white/10 transition-smooth"
          >
            {mobileMenuOpen ? (
              <FaTimes size={20} />
            ) : (
              <FaBars size={20} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden border-t border-white/10 bg-secondary/80 backdrop-blur-md"
        >
          <div className="container-custom py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={500}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded-button transition-all cursor-pointer font-500 ${
                  activeSection === link.to
                    ? 'text-primary bg-primary/10'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              download
              className="block px-4 py-2 bg-primary text-white rounded-button font-600 text-center hover:bg-blue-600 transition-smooth mt-4"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};
