import { motion } from "framer-motion";
import {
  SiAppwrite,
  SiCaddy,
  SiDocker,
  SiExpo,
  SiFastapi,
  SiMicrosoftazure,
  SiNestjs,
  SiNextdotjs,
  SiNumpy,
  SiPowerbi,
  SiPytorch,
  SiSelenium,
  SiStripe,
  SiSupabase,
  SiUbuntu,
} from "react-icons/si";
import { FaAws, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

const groups = [
  {
    title: "Interface and product",
    copy: "Frontends, mobile apps, dashboards, payment flows, and admin tools.",
    accent: "accent-cyan",
    tools: [
      { name: "React", Icon: FaReact },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "React Native", Icon: SiExpo },
      { name: "Stripe", Icon: SiStripe },
      { name: "Supabase", Icon: SiSupabase },
      { name: "Appwrite", Icon: SiAppwrite },
    ],
  },
  {
    title: "Systems and deployment",
    copy: "APIs, databases, containers, reverse proxies, and production hosting.",
    accent: "accent-green",
    tools: [
      { name: "Node.js", Icon: FaNodeJs },
      { name: "NestJS", Icon: SiNestjs },
      { name: "FastAPI", Icon: SiFastapi },
      { name: "PostgreSQL", Icon: BiLogoPostgresql },
      { name: "Docker", Icon: SiDocker },
      { name: "Caddy", Icon: SiCaddy },
      { name: "Ubuntu", Icon: SiUbuntu },
    ],
  },
  {
    title: "AI, data, and automation",
    copy: "Prediction pipelines, biomedical datasets, reporting, and test automation.",
    accent: "accent-coral",
    tools: [
      { name: "Python", Icon: FaPython },
      { name: "PyTorch", Icon: SiPytorch },
      { name: "NumPy", Icon: SiNumpy },
      { name: "Power BI", Icon: SiPowerbi },
      { name: "Azure", Icon: SiMicrosoftazure },
      { name: "Selenium", Icon: SiSelenium },
      { name: "AWS", Icon: FaAws },
    ],
  },
];

const Technologies = () => {
  return (
    <section id="stack" className="section-pad border-b border-[var(--color-line)]">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <span className="section-kicker">Toolchain</span>
            <h2 className="section-title">Technology with a job.</h2>
          </div>
          <p className="section-copy lg:mt-14">
            Each tool supports a real workflow: interfaces people use, services that stay online, and AI/data pipelines that add intelligence.
          </p>
        </div>

        <div className="mt-12 grid gap-5">
          {groups.map((group, groupIndex) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.58, delay: groupIndex * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="surface-panel grid gap-6 p-5 lg:grid-cols-[0.42fr_1fr] lg:p-7"
            >
              <div>
                <p className={`text-sm font-black uppercase tracking-[0.16em] ${group.accent}`}>{group.title}</p>
                <p className="mt-4 max-w-md leading-7 text-muted">{group.copy}</p>
              </div>

              <div className="flex flex-wrap gap-3">
                {group.tools.map(({ name, Icon }) => (
                  <span
                    key={name}
                    className="inline-flex min-h-11 items-center gap-2 border border-[var(--color-line)] bg-[oklch(13%_0.04_244_/_0.72)] px-3 py-2 text-sm font-bold text-[var(--color-ink)]"
                  >
                    <Icon className={group.accent} size={18} aria-hidden="true" />
                    {name}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
