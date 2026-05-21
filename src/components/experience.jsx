import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <section id="experience" className="section-pad border-b border-[var(--color-line)]">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <span className="section-kicker">Experiences</span>
            <h2 className="section-title">Experiences</h2>
          </div>
        </div>

        <div className="mt-12">
          {EXPERIENCES.map((experience, index) => (
            <motion.article
              key={`${experience.year}-${experience.role}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="grid gap-5 border-t border-[var(--color-line)] py-7 lg:grid-cols-[0.28fr_0.72fr]"
            >
              <div>
                <p className="display-type text-2xl font-black accent-amber">{String(index + 1).padStart(2, "0")}</p>
                <p className="mt-2 text-sm font-bold uppercase tracking-[0.12em] text-soft">{experience.year}</p>
              </div>

              <div>
                <h3 className="text-2xl font-black">
                  {experience.role}
                  <span className="block pt-1 text-base font-bold text-muted">{experience.company}</span>
                </h3>
                <p className="mt-5 max-w-4xl leading-8 text-muted">{experience.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span key={tech} className="border border-[var(--color-line)] px-2.5 py-1 text-xs font-bold uppercase tracking-[0.08em] accent-cyan">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
