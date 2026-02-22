import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { education, certifications } from '../data/education';

export const Education = () => {
  return (
    <section id="education" className="py-section-mobile md:py-section bg-gradient-to-b from-transparent to-accent/5">
      <div className="container-custom">
        <SectionTitle
          title="Education & Certifications"
          subtitle="My academic background and professional certifications"
        />

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold font-poppins mb-8 text-center text-accent">
            Education
          </h3>
          <div className="space-y-6 max-w-3xl mx-auto">
            {education.map((edu, idx) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="glass p-card rounded-card border-l-4 border-accent"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="text-lg md:text-xl font-bold font-poppins text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-accent font-600 text-sm mt-1">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="text-sm font-jetbrains text-white/50 whitespace-nowrap ml-4">
                    {edu.yearOfPassing}
                  </span>
                </div>
                {edu.gpa && (
                  <p className="text-white/70 text-sm mb-3 font-inter">
                    CGPA: <span className="font-600 text-accent">{edu.gpa}</span>
                  </p>
                )}
                {edu.achievements && (
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, aidx) => (
                      <li key={aidx} className="text-white/60 text-sm flex gap-2">
                        <span className="text-accent flex-shrink-0">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold font-poppins mb-8 text-center text-accent">
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="glass p-card rounded-card hover:shadow-lg hover:shadow-primary/10 transition-smooth"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-lg font-bold font-poppins text-white">
                      {cert.name}
                    </h4>
                    <p className="text-primary font-600 text-sm mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                  <span className="text-xs font-jetbrains text-white/50">
                    {cert.date}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
