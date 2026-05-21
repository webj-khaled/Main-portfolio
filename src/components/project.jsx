import { motion } from "framer-motion";
import { ArrowUpRight, Github, Radio } from "lucide-react";
import { PROJECTS } from "../constants";

const getProjectType = (project) => {
  const tech = project.technologies.join(" ").toLowerCase();
  if (tech.includes("pytorch") || tech.includes("python")) return "AI / data";
  if (tech.includes("next") || tech.includes("nest") || tech.includes("symfony")) return "Full-stack";
  if (tech.includes("react native")) return "Mobile";
  return "Product";
};

const getCta = (url) => {
  const isCode = url.includes("github.com");
  return {
    label: isCode ? "Open code" : "Open live project",
    Icon: isCode ? Github : ArrowUpRight,
  };
};

const renderFeatureProject = (project, index) => {
  const { label, Icon } = getCta(project.github);

  return (
    <motion.article
      key={project.title}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="surface-panel grid overflow-hidden lg:grid-cols-[0.95fr_1.05fr]"
    >
      <a href={project.github} target="_blank" rel="noopener noreferrer" className="group relative block min-h-[280px] overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} project preview`}
          className="h-full min-h-[280px] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,oklch(12%_0.035_244_/_0.76)_100%)]" aria-hidden="true" />
        <span className="absolute left-5 top-5 inline-flex items-center gap-2 border border-[var(--color-cyan)] bg-[var(--color-bg)] px-3 py-2 text-xs font-black uppercase tracking-[0.16em] accent-cyan">
          <Radio size={14} aria-hidden="true" />
          {getProjectType(project)}
        </span>
      </a>

      <div className="flex min-h-[360px] flex-col justify-between p-6 sm:p-8 lg:p-10">
        <div>
          <div className="mb-5 text-sm font-black uppercase tracking-[0.16em] text-soft">
            Featured project 0{index + 1}
          </div>
          <h3 className="display-type text-3xl font-black leading-tight sm:text-4xl">{project.title}</h3>
          <p className="mt-5 leading-8 text-muted">{project.description}</p>
        </div>

        <div className="mt-8">
          <div className="mb-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="border border-[var(--color-line)] px-2.5 py-1 text-xs font-bold uppercase tracking-[0.08em] text-soft">
                {tech}
              </span>
            ))}
          </div>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="action-button">
            {label} <Icon size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </motion.article>
  );
};

const renderArchiveProject = (project, index) => {
  const { label, Icon } = getCta(project.github);

  return (
    <motion.article
      key={project.title}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.48, delay: Math.min(index, 6) * 0.035, ease: [0.16, 1, 0.3, 1] }}
      className="grid gap-4 border-t border-[var(--color-line)] py-5 md:grid-cols-[84px_1fr_auto] md:items-center"
    >
      <img src={project.image} alt="" className="h-20 w-20 object-cover opacity-85" />
      <div>
        <p className="text-xs font-black uppercase tracking-[0.16em] accent-green">{getProjectType(project)}</p>
        <h3 className="mt-1 text-xl font-black">{project.title}</h3>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">
          {project.description.split(". ")[0]}.
        </p>
      </div>
      <a href={project.github} target="_blank" rel="noopener noreferrer" className="action-button secondary">
        {label} <Icon size={17} aria-hidden="true" />
      </a>
    </motion.article>
  );
};

const Projects = () => {
  const featured = PROJECTS.slice(0, 3);
  const archive = PROJECTS.slice(3);

  return (
    <section id="projects" className="section-pad border-b border-[var(--color-line)]">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <span className="section-kicker">Selected projects</span>
            <h2 className="section-title">Projects that actually left localhost.</h2>
          </div>
          <p className="section-copy">
            These projects show deployed platforms, payment flows, backend work, AI prediction tools, and real users. A collection of recent completed projects is included below.
          </p>
        </div>

        <div className="mt-12 grid gap-6">
          {featured.map((project, index) => renderFeatureProject(project, index))}
        </div>

        <div className="mt-14">
          <div className="mb-2 flex items-end justify-between gap-4">
            <h3 className="display-type text-3xl font-black">Project archive</h3>
            <span className="text-sm font-bold uppercase tracking-[0.14em] text-soft">{archive.length} more projects</span>
          </div>

          <div>
            {archive.map((project, index) => renderArchiveProject(project, index))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
