import { SectionTitle } from '../components/SectionTitle';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';

export const Projects = () => {
  return (
    <section id="projects" className="py-section-mobile md:py-section bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container-custom">
        <SectionTitle
          title="Featured Projects"
          subtitle="Showcasing my best work and technical expertise"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-white/70 text-lg mb-4 font-inter">
            Interested in more projects?
          </p>
          <a
            href="https://github.com/ARUNSANKARB"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-8 py-3 bg-primary text-white rounded-button font-600 hover:bg-blue-600 transition-smooth"
          >
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};
