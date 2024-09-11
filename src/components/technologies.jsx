import { RiReactjsLine } from "react-icons/ri";
import { SiNumpy } from "react-icons/si";
import { SiPytorch } from "react-icons/si";
import { SiPowerbi } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
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
          <motion.div
            variants={iconVariants(0.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4 text-center"
          >
            <RiReactjsLine className="text-7xl" style={{ color: '#61DAFB' }} /> 
            <p className="mt-2 text-xl font-semibold text-neutral-300">React</p>
          </motion.div>

          <motion.div
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4 text-center"
          >
            <SiNumpy className="text-7xl" style={{ color: '#013243' }} /> 
            <p className="mt-2 text-xl font-semibold text-neutral-300">NumPy</p>
          </motion.div>

          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4 text-center"
          >
            <SiPytorch className="text-7xl" style={{ color: '#EE4C2C' }} /> 
            <p className="mt-2 text-xl font-semibold text-neutral-300">PyTorch</p>
          </motion.div>

          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4 text-center"
          >
            <SiPowerbi className="text-7xl" style={{ color: '#F2C811' }} /> 
            <p className="mt-2 text-xl font-semibold text-neutral-300">Power BI</p>
          </motion.div>

          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4 text-center"
          >
            <FaPython className="text-7xl" style={{ color: '#3776AB' }} /> 
            <p className="mt-2 text-xl font-semibold text-neutral-300">Python</p>
          </motion.div>

          <motion.div
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4 text-center"
          >
            <FaNodeJs className="text-7xl" style={{ color: '#68A063' }} /> 
            <p className="mt-2 text-xl font-semibold text-neutral-300">Node.js</p>
          </motion.div>

          <motion.div
            variants={iconVariants(0.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4 text-center"
          >
            <BiLogoPostgresql className="text-7xl" style={{ color: '#336791' }} /> 
            <p className="mt-2 text-xl font-semibold text-neutral-300">PostgreSQL</p>
          </motion.div>

        </div>
      </div>
    );
  };
  
  export default Technologies;
