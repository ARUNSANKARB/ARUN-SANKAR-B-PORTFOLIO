import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import { Link } from 'react-scroll';

export const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl opacity-20 animate-pulse" />
      </div>

      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <p className="text-accent font-600 text-lg">
                  Welcome to my portfolio
                </p>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold font-poppins leading-tight"
              >
                Hi, I'm <span className="gradient-text">Arun Sankar B</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl text-white/70 font-inter"
              >
                Java Full Stack Developer
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-base md:text-lg text-white/60 max-w-paragraph font-inter leading-relaxed"
              >
                Building scalable backend systems with Spring Boot and responsive UIs with React. Pre-final year Computer Science and Business Systems (CSBS) student passionate about clean code and modern web technologies.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Link
                  to="projects"
                  smooth
                  duration={500}
                  className="px-8 py-3 bg-primary text-white rounded-button font-600 hover:bg-blue-600 transition-smooth cursor-pointer text-center"
                >
                  View My Work
                </Link>
                <a
                  href="/resume.pdf"
                  download
                  className="px-8 py-3 border-2 border-primary text-primary rounded-button font-600 hover:bg-primary/10 transition-smooth text-center"
                >
                  Download Resume
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="flex gap-4 pt-4"
              >
                <a
                  href="https://github.com/ARUNSANKARB"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-3 bg-white/5 hover:bg-primary/20 rounded-button transition-smooth"
                >
                  <FaGithub size={24} className="text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/arun-sankar-b-4683b3319/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-3 bg-white/5 hover:bg-primary/20 rounded-button transition-smooth"
                >
                  <FaLinkedin size={24} className="text-white" />
                </a>
                <a
                  href="https://leetcode.com/u/ARUNSANKARB/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LeetCode"
                  className="p-3 bg-white/5 hover:bg-primary/20 rounded-button transition-smooth"
                >
                  <FaCode size={24} className="text-white" />
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden md:flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-image blur-2xl opacity-30" />
              <img
                src="/profile.png"
                alt="Arun Sankar B"
                className="relative w-64 h-80 object-cover rounded-image border-2 border-primary/20"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/40 flex flex-col items-center gap-2"
      >
        <span className="text-sm">Scroll to explore</span>
        <svg
          className="w-6 h-6 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
};
