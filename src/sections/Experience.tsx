import { SectionTitle } from '../components/SectionTitle';
import { ExperienceCard } from '../components/ExperienceCard';
import { experiences } from '../data/experiences';

export const Experience = () => {
  return (
    <section id="experience" className="py-section-mobile md:py-section">
      <div className="container-custom">
        <SectionTitle
          title="Experience"
          subtitle="My professional journey and internships"
        />

        <div className="space-y-6 max-w-3xl mx-auto">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>

        {/* Timeline Info */}
        <div className="mt-12 text-center p-6 glass rounded-card max-w-2xl mx-auto">
          <p className="text-white/80 font-inter">
            As a fresher, I'm eager to contribute and grow through internship and entry-level full-stack development opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};
