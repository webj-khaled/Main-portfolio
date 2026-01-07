import { RiReactjsLine } from "react-icons/ri";
import {
  SiNumpy,
  SiPytorch,
  SiPowerbi,
  SiExpo,
  SiSupabase,
  SiNextdotjs,
  SiStripe,
  SiAppwrite,
  SiNestjs,
  SiLaravel,
  SiMicrosoftazure,
  SiSelenium,
} from "react-icons/si";
import { FaPython, FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";
import { FaAws } from "react-icons/fa";

const iconVariants = (duration = 1.2) => ({
  initial: { y: 0 },
  animate: {
    y: [-8, 8],
    transition: {
      duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});


const tech = [
  { name: "React", Icon: RiReactjsLine, color: "#61DAFB", duration: 1.5 },
  { name: "NumPy", Icon: SiNumpy, color: "#013243", duration: 1.5 },
  { name: "PyTorch", Icon: SiPytorch, color: "#EE4C2C", duration: 2.5 },
  { name: "Power BI", Icon: SiPowerbi, color: "#F2C811", duration: 4 },
  { name: "Python", Icon: FaPython, color: "#3776AB", duration: 2.5 },
  { name: "Node.js", Icon: FaNodeJs, color: "#68A063", duration: 1.5 },
  { name: "NestJS", Icon: SiNestjs, color: "#E0234E", duration: 2 },
  { name: "Laravel", Icon: SiLaravel, color: "#FF2D20", duration: 2.8 },
  { name: "PostgreSQL", Icon: BiLogoPostgresql, color: "#336791", duration: 1.5 },
  { name: "Expo", Icon: SiExpo, color: "#000020", duration: 2 },
  { name: "Appwrite", Icon: SiAppwrite, color: "#F02E65", duration: 3 },
  { name: "Supabase", Icon: SiSupabase, color: "#3ECF8E", duration: 2 },
  { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF", duration: 2 },
  { name: "Stripe", Icon: SiStripe, color: "#635BFF", duration: 2.5 },
  { name: "AWS", Icon: FaAws, color: "#FF9900", duration: 3.2 },
  { name: "Azure", Icon: SiMicrosoftazure, color: "#0078D4", duration: 3 },
  { name: "Selenium", Icon: SiSelenium, color: "#43B02A", duration: 2.2 },
];

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {tech.map(({ name, Icon, color, duration }) => (
          <motion.div
            key={name}
            variants={iconVariants(duration)}
            initial="initial"
            animate="animate"
            whileHover={{
              scale: 1.08,
              y: -6,
              boxShadow: `0 0 25px ${color}55`,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="rounded-2xl border-4 border-neutral-800 p-4 text-center cursor-pointer"
          >
            <Icon className="text-7xl" style={{ color }} />
            <p className="mt-2 text-xl font-semibold text-neutral-300">
              {name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
