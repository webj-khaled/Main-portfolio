import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { HERO_CONTENT } from "../constants";
import { CursorSpotlight } from "@/components/ui/cursor-spotlight";
import { SplineScene } from "@/components/ui/splite";

const fadeUp = {
  hidden: { y: 32, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.72, ease: [0.16, 1, 0.3, 1] },
  },
};

const stats = [
  { value: "13+", label: "live and portfolio projects" },
  { value: "4", label: "connected practice areas" },
  { value: "18", label: "scientific visuals" },
];

const Hero = () => {
  const [showRobot, setShowRobot] = useState(false);
  const heroRef = useRef(null);
  const robotLayerRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1181px)");
    const syncRobotVisibility = () => setShowRobot(mediaQuery.matches);

    syncRobotVisibility();
    mediaQuery.addEventListener("change", syncRobotVisibility);

    return () => {
      mediaQuery.removeEventListener("change", syncRobotVisibility);
    };
  }, []);

  useEffect(() => {
    if (!showRobot) return undefined;

    const hero = heroRef.current;
    const robotLayer = robotLayerRef.current;
    if (!hero || !robotLayer) return undefined;

    const forwardPointerToRobot = (event) => {
      const canvas = robotLayer.querySelector("canvas");
      if (!canvas) return;

      const heroRect = hero.getBoundingClientRect();
      const canvasRect = canvas.getBoundingClientRect();
      const xRatio = (event.clientX - heroRect.left) / heroRect.width;
      const yRatio = (event.clientY - heroRect.top) / heroRect.height;
      const mappedX = canvasRect.left + xRatio * canvasRect.width;
      const mappedY = canvasRect.top + yRatio * canvasRect.height;

      if (typeof window.PointerEvent === "function") {
        canvas.dispatchEvent(
          new PointerEvent("pointermove", {
            bubbles: false,
            cancelable: false,
            clientX: mappedX,
            clientY: mappedY,
            pointerId: 1,
            pointerType: "mouse",
            isPrimary: true,
          }),
        );
      }

      canvas.dispatchEvent(
        new MouseEvent("mousemove", {
          bubbles: false,
          cancelable: false,
          clientX: mappedX,
          clientY: mappedY,
        }),
      );
    };

    hero.addEventListener("pointermove", forwardPointerToRobot, { passive: true });

    return () => {
      hero.removeEventListener("pointermove", forwardPointerToRobot);
    };
  }, [showRobot]);

  return (

    <section ref={heroRef} className="hero-section relative overflow-hidden pt-12 sm:pt-16 lg:pt-20">
      {showRobot ? (
        <div ref={robotLayerRef} className="hero-robot-layer" aria-hidden="true">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="hero-robot-scene"
          />
        </div>
      ) : null}

      <CursorSpotlight
        size={360}
        className="z-[2] from-cyan-200/35 via-emerald-200/20 to-transparent"
      />

      <div className="section-shell relative z-10 py-12 lg:py-16">
        <motion.div
          className="hero-copy"
          initial="hidden"
          animate="visible"
        >
          <div>
            <motion.div variants={fadeUp} className="mb-7 flex flex-wrap items-center gap-3">
              <span className="section-kicker">Available now</span>
              <span className="rounded-full border border-[var(--color-line)] px-3 py-1 text-sm font-semibold text-muted">
                Salzburg, Austria
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="display-type text-[clamp(3rem,10vw,8.8rem)] font-black leading-[0.84]"
            >
              Creative
              <span className="block accent-green">full-stack</span>
              developer.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-2xl text-xl leading-8 text-muted sm:text-2xl sm:leading-10"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="action-button">
                View work <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a href="#contact" className="action-button secondary">
                Start a conversation <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/khaled-elfaham/"
                target="_blank"
                rel="noopener noreferrer"
                className="action-button secondary"
              >
                LinkedIn <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </motion.div>

            <motion.dl
              variants={fadeUp}
              className="mt-12 grid max-w-3xl grid-cols-3 border-y border-[var(--color-line)]"
            >
              {stats.map((item) => (
                <div key={item.label} className="border-r border-[var(--color-line)] px-3 py-4 last:border-r-0 sm:px-5 sm:py-5">
                  <dt className="display-type text-2xl font-black accent-cyan sm:text-3xl">{item.value}</dt>
                  <dd className="mt-2 text-[0.62rem] font-bold uppercase leading-4 tracking-[0.12em] text-soft sm:text-sm sm:leading-5 sm:tracking-[0.14em]">
                    {item.label}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

        </motion.div>

      </div>

      <div className="pointer-events-none border-y border-[var(--color-line)] py-5">
        <div className="marquee" aria-hidden="true">
          <span>AI models / web applications / mobile applications / IT solutions /</span>
          <span>AI models / web applications / mobile applications / IT solutions /</span>
        </div>
      </div>
    </section>

  );
};

export default Hero;
