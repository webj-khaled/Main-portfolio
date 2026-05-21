import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

import a from "../assets/designs/1.png";
import b from "../assets/designs/2.png";
import c from "../assets/designs/3.png";
import d from "../assets/designs/4.png";
import e from "../assets/designs/5.png";
import f from "../assets/designs/6.png";
import g from "../assets/designs/7.png";
import h from "../assets/designs/8.png";
import i from "../assets/designs/9.png";
import j from "../assets/designs/10.png";
import k from "../assets/designs/11.png";
import l from "../assets/designs/12.png";
import m from "../assets/designs/13.png";
import n from "../assets/designs/14.png";
import o from "../assets/designs/15.png";
import p from "../assets/designs/16.png";
import q from "../assets/designs/17.png";
import r from "../assets/designs/18.png";

const sources = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r];

const IllustrationGallery = () => {
  const images = useMemo(
    () =>
      sources.map((src, index) => ({
        id: index + 1,
        src,
        title: `Scientific plate ${String(index + 1).padStart(2, "0")}`,
      })),
    [],
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }, [images.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }, [images.length]);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleTouchStart = (event) => {
    setTouchEnd(null);
    setTouchStart(event.targetTouches[0].clientX);
  };

  const handleTouchMove = (event) => {
    setTouchEnd(event.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) goToNext();
    if (distance < -50) goToPrev();
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isModalOpen) return;
      if (event.key === "ArrowRight") goToNext();
      if (event.key === "ArrowLeft") goToPrev();
      if (event.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrev, isModalOpen]);

  return (
    <section id="visuals" className="section-pad overflow-hidden border-b border-[var(--color-line)]">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <div>
            <span className="section-kicker">Scientific visuals</span>
            <h2 className="section-title">The biology work has a visual system too.</h2>
          </div>
          <p className="section-copy">
            Scientific illustrations and 3D structures created for teaching at the University of Salzburg. This section keeps the creative side connected to the technical one: complex systems, made legible.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {images.slice(0, 12).map((image, index) => (
            <motion.button
              key={image.id}
              type="button"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.42, delay: Math.min(index, 8) * 0.035, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative aspect-[4/5] overflow-hidden border border-[var(--color-line)] bg-[var(--color-panel)] text-left ${
                index === 0 || index === 7 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
              onClick={() => openModal(index)}
              aria-label={`Open ${image.title}`}
            >
              <img
                src={image.src}
                alt={image.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04] group-hover:brightness-110"
              />
              <span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-[oklch(12%_0.035_244_/_0.82)] px-3 py-2 text-xs font-black uppercase tracking-[0.13em] text-[var(--color-ink)]">
                {image.title}
                <Maximize2 size={14} aria-hidden="true" />
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] grid place-items-center bg-[oklch(8%_0.03_244_/_0.96)] p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Scientific illustration viewer"
            onClick={closeModal}
          >
            <div className="relative w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
              <button
                type="button"
                onClick={closeModal}
                className="absolute right-3 top-3 z-10 grid min-h-11 min-w-11 place-items-center border border-[var(--color-line)] bg-[var(--color-panel)] text-[var(--color-ink)] transition hover:border-[var(--color-coral)] hover:text-[var(--color-coral)]"
                aria-label="Close gallery"
              >
                <X size={24} aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={goToPrev}
                className="absolute left-3 top-1/2 z-10 grid min-h-11 min-w-11 -translate-y-1/2 place-items-center border border-[var(--color-line)] bg-[var(--color-panel)] text-[var(--color-ink)] transition hover:border-[var(--color-green)] hover:text-[var(--color-green)]"
                aria-label="Previous image"
              >
                <ChevronLeft size={28} aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={goToNext}
                className="absolute right-3 top-1/2 z-10 grid min-h-11 min-w-11 -translate-y-1/2 place-items-center border border-[var(--color-line)] bg-[var(--color-panel)] text-[var(--color-ink)] transition hover:border-[var(--color-green)] hover:text-[var(--color-green)]"
                aria-label="Next image"
              >
                <ChevronRight size={28} aria-hidden="true" />
              </button>

              <motion.img
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.24 }}
                src={images[currentIndex].src}
                alt={images[currentIndex].title}
                className="mx-auto max-h-[82vh] w-auto border border-[var(--color-line)] object-contain"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              />

              <p className="mx-auto mt-4 w-fit border border-[var(--color-line)] bg-[var(--color-panel)] px-4 py-2 text-sm font-bold text-muted">
                {images[currentIndex].title} / {currentIndex + 1} of {images.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default IllustrationGallery;
