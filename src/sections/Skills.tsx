import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { SkillBadge } from '../components/SkillBadge';
import { skills, skillCategories } from '../data/skills';

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredSkills = selectedCategory
    ? skills.filter((skill) => skill.category === selectedCategory)
    : skills;

  return (
    <section id="skills" className="py-section-mobile md:py-section">
      <div className="container-custom">
        <SectionTitle
          title="Skills & Technologies"
          subtitle="Tools and technologies I work with"
        />

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-2 justify-center mb-12"
        >
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-button font-600 transition-smooth ${
              selectedCategory === null
                ? 'bg-primary text-white'
                : 'bg-white/5 text-white/70 hover:bg-white/10'
            }`}
          >
            All Skills
          </button>
          {skillCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-button font-600 transition-smooth ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-white/5 text-white/70 hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {filteredSkills.map((skill, idx) => (
            <motion.div
              key={`${skill.name}-${idx}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: idx * 0.05, duration: 0.3 }}
            >
              <SkillBadge name={skill.name} />
            </motion.div>
          ))}
        </motion.div>

        {/* Performance Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Programming Languages', value: '6+' },
            { label: 'Frontend Libraries', value: '5+' },
            { label: 'Backend Frameworks', value: '3+' },
            { label: 'Databases', value: '5+' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass p-card rounded-card text-center"
            >
              <p className="text-2xl md:text-3xl font-bold text-accent font-poppins">
                {stat.value}
              </p>
              <p className="text-white/60 text-sm mt-2 font-inter">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
