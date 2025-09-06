import { RiReactjsLine } from "react-icons/ri";
import { SiNumpy, SiPytorch, SiPowerbi, SiExpo, SiSupabase, SiNextdotjs, SiStripe, SiAppwrite } from "react-icons/si";
import { FaPython, FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        
        {/* React */}
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 text-center"
        >
          <RiReactjsLine className="text-7xl" style={{ color: "#61DAFB" }} />
          <p className="mt-2 text-xl font-semibold text-neutral-300">React</p>
        </motion.div>

        {/* NumPy */}
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 text-center"
        >
          <SiNumpy className="text-7xl" style={{ color: "#013243" }} />
          <p className="mt-2 text-xl font-semibold text-neutral-300">NumPy</p>
        </motion.div>

        {/* PyTorch */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 text-center"
        >
          <SiPytorch className="text-7xl" style={{ color: "#EE4C2C" }} />
          <p className="mt-2 text-xl font-semibold text-neutral-300">PyTorch</p>
        </motion.div>

        {/* Power BI */}
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 text-center"
        >
          <SiPowerbi className="text-7xl" style={{ color: "#F2C811" }} />
          <p className="mt-2 text-xl font-semibold text-neutral-300">Power BI</p>
        </motion.div>

        {/* Python */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 text-center"
        >
          <FaPython className="text-7xl" style={{ color: "#3776AB" }} />
          <p className="mt-2 text-xl font-semibold text-neutral-300">Python</p>
        </motion.div>

        {/* Node.js */}
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 text-center"
        >
          <FaNodeJs className="text-7xl" style={{ color: "#68A063" }} />
          <p className="mt-2 text-xl font-semibold text-neutral-300">Node.js</p>
        </motion.div>

        {/* PostgreSQL */}
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 text-center"
        >
          <BiLogoPostgresql className="text-7xl" style={{ color: "#336791" }} />
          <p className="mt-2 text-xl font-semibold text-neutral-300">PostgreSQL</p>
        </motion.div>

        {/* Expo */}
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 text-center"
        >
          <SiExpo className="text-7xl" style={{ color: "#000020" }} />
          <p className="mt-2 text-xl font-semibold text-neutral-300">Expo</p>
        </motion.div>

        {/* Appwrite */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 text-center"
        >
          <SiAppwrite className="text-7xl" style={{ color: "#F02E65" }} />
          <p className="mt-2 text-xl font-semibold text-neutral-300">Appwrite</p>
        </motion.div>

        {/* Supabase */}
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 text-center"
        >
          <SiSupabase className="text-7xl" style={{ color: "#3ECF8E" }} />
          <p className="mt-2 text-xl font-semibold text-neutral-300">Supabase</p>
        </motion.div>

        {/* Next.js */}
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 text-center"
        >
          <SiNextdotjs className="text-7xl" style={{ color: "#FFFFFF" }} />
          <p className="mt-2 text-xl font-semibold text-neutral-300">Next.js</p>
        </motion.div>

        {/* Stripe */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 text-center"
        >
          <SiStripe className="text-7xl" style={{ color: "#635BFF" }} />
          <p className="mt-2 text-xl font-semibold text-neutral-300">Stripe</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
