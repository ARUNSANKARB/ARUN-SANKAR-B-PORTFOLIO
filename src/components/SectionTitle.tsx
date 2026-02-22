import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12 md:mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-white/60 text-lg max-w-paragraph mx-auto font-inter">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
