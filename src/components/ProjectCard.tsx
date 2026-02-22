import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="glass group p-card rounded-card overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-smooth"
    >
      {/* Project Header */}
      <div className="mb-4">
        <h3 className="text-xl md:text-2xl font-bold mb-2 font-poppins text-white group-hover:text-accent transition-smooth">
          {project.title}
        </h3>
        <p className="text-white/70 text-sm md:text-base font-inter">
          {project.description}
        </p>
      </div>

      {/* Highlights */}
      <div className="mb-6 space-y-2">
        {project.highlights.slice(0, 3).map((highlight, idx) => (
          <p key={idx} className="text-white/60 text-sm flex items-start gap-2">
            <span className="text-accent mt-1">▸</span>
            <span>{highlight}</span>
          </p>
        ))}
      </div>

      {/* Tech Stack */}
      <div className="mb-6 flex flex-wrap gap-2">
        {project.tech.map((tech, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-primary/10 text-accent text-xs font-jetbrains rounded-full border border-primary/20"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} on GitHub`}
          className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary hover:bg-primary hover:text-white border border-primary/30 rounded-button transition-smooth"
        >
          <FaGithub size={16} />
          <span className="text-sm font-600">Code</span>
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} demo`}
            className="flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent hover:bg-accent hover:text-secondary border border-accent/30 rounded-button transition-smooth"
          >
            <FaExternalLinkAlt size={16} />
            <span className="text-sm font-600">Demo</span>
          </a>
        )}
      </div>
    </motion.div>
  );
};
