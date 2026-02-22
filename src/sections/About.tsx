import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';

export const About = () => {
  return (
    <section id="about" className="py-section-mobile md:py-section bg-gradient-to-b from-transparent to-primary/5">
      <div className="container-custom">
        <SectionTitle
          title="About Me"
          subtitle="Get to know the person behind the code"
        />

        <div className="max-w-3xl mx-auto">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 md:order-1"
          >
            <p className="text-white/80 text-base md:text-lg leading-relaxed font-inter">
              I'm a passionate Full Stack Developer with a strong foundation in Java and modern web technologies. Pre-final year Computer Science and Business Systems (CSBS) student, driven by the challenge of solving complex problems and building scalable applications.
            </p>

            <p className="text-white/80 text-base md:text-lg leading-relaxed font-inter">
              My expertise spans from backend architecture with Spring Boot to frontend development with React. I believe in writing clean, maintainable code and following industry best practices.
            </p>

            <p className="text-white/80 text-base md:text-lg leading-relaxed font-inter">
              When I'm not coding, you'll find me solving algorithmic challenges on LeetCode or exploring the latest technologies in the developer community.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {[
                { label: 'Projects', value: '5+' },
                { label: 'Internships', value: '4' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="glass p-card rounded-card text-center"
                >
                  <p className="text-2xl md:text-3xl font-bold text-primary font-poppins">
                    {stat.value}
                  </p>
                  <p className="text-white/60 text-sm mt-2 font-inter">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            {
              title: 'Backend Development',
              description: 'Expertise in Spring Boot, microservices, and scalable API design.',
              icon: '⚙️',
            },
            {
              title: 'Full Stack Solutions',
              description: 'End-to-end development from database design to UI implementation.',
              icon: '🔗',
            },
            {
              title: 'Problem Solving',
              description: 'Strong algorithmic skills and data structure knowledge.',
              icon: '🧠',
            },
          ].map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass p-card rounded-card hover:shadow-lg hover:shadow-primary/10 transition-smooth"
            >
              <p className="text-4xl mb-4">{card.icon}</p>
              <h3 className="text-xl font-bold font-poppins mb-2">
                {card.title}
              </h3>
              <p className="text-white/60 text-sm font-inter">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
