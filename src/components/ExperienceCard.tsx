import { motion } from 'framer-motion';
import { Experience } from '../data/experiences';

interface ExperienceCardProps {
  experience: Experience;
}

export const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="glass p-card rounded-card border-l-4 border-primary hover:shadow-lg hover:shadow-primary/10 transition-smooth relative"
    >
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-lg md:text-xl font-bold font-poppins text-white">
            {experience.role}
          </h3>
          <p className="text-primary font-600 text-sm">{experience.company}</p>
        </div>
        <span className="text-xs font-jetbrains text-white/50 whitespace-nowrap ml-4">
          {experience.duration}
        </span>
      </div>

      <p className="text-white/70 text-sm md:text-base mb-4 font-inter">
        {experience.description}
      </p>

      <div className="mb-4 space-y-2">
        {experience.achievements.map((achievement, idx) => (
          <p key={idx} className="text-white/60 text-sm flex gap-2">
            <span className="text-accent flex-shrink-0">▸</span>
            {achievement}
          </p>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {experience.skills.map((skill, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-accent/10 text-accent text-xs font-jetbrains rounded-full border border-accent/20"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};
