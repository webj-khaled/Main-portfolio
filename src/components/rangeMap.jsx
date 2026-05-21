import { motion } from "framer-motion";
import { BrainCircuit, Code2, Dna, Palette } from "lucide-react";
import { ABOUT_TEXT } from "../constants";

const lanes = [
  {
    label: "Product",
    title: "Full-stack products",
    copy: "React, Next.js, mobile, APIs, auth, payments, dashboards, deployment.",
    Icon: Code2,
    color: "accent-cyan",
  },
  {
    label: "Intelligence",
    title: "AI and ML",
    copy: "Python, PyTorch, prediction workflows, biomedical datasets, explainability.",
    Icon: BrainCircuit,
    color: "accent-green",
  },
  {
    label: "Science",
    title: "Biomedical context",
    copy: "Medical biology, bioinformatics, data analysis, protein and genomic work.",
    Icon: Dna,
    color: "accent-coral",
  },
  {
    label: "Visual",
    title: "Scientific design",
    copy: "3D structures and didactic illustrations used in university teaching.",
    Icon: Palette,
    color: "accent-amber",
  },
];

const RangeMap = () => {
  return (
    <section className="section-pad border-b border-[var(--color-line)]">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-kicker">Capability map</span>
          <h2 className="section-title">
            Four ways
            <span className="block">I deliver.</span>
          </h2>
          <p className="section-copy mt-7">{ABOUT_TEXT}</p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {lanes.map(({ label, title, copy, Icon, color }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="surface-panel p-5"
            >
              <div className={`mb-7 inline-grid h-12 w-12 place-items-center border border-current ${color}`}>
                <Icon size={24} aria-hidden="true" />
              </div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-soft">{label}</p>
              <h3 className="mt-2 text-2xl font-black">{title}</h3>
              <p className="mt-4 leading-7 text-muted">{copy}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RangeMap;
