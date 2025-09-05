import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// Import your images (replace with your actual imports)
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



const IllustrationGallery = () => {
  const [images, setImages] = useState([
    { id: 1, src: a, title: 'Design 1' },
    { id: 2, src: b, title: 'Design 2' },
    { id: 3, src: c, title: 'Design 3' },
    { id: 4, src: d, title: 'Design 4' },
    { id: 5, src: e, title: 'Design 5' },
    { id: 6, src: f, title: 'Design 6' },
    { id: 7, src: g, title: 'Design 7' },
    { id: 8, src: h, title: 'Design 8' },
    { id: 9, src: i, title: 'Design 9' },
    { id: 10, src: j, title: 'Design 10' },
    { id: 11, src: k, title: 'Design 11' },
    { id: 12, src: l, title: 'Design 12' },
    { id: 13, src: m, title: 'Design 13' },
    { id: 14, src: n, title: 'Design 14' },
    { id: 15, src: o, title: 'Design 15' },
    { id: 16, src: p, title: 'Design 16' },
    { id: 17, src: q, title: 'Design 17' },
    { id: 18, src: r, title: 'Design 18' },
  ]);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Generate random colors for background
  const generateRandomColors = () => {
    const colors = [
      'from-purple-900', 'to-blue-900',
      'from-pink-900', 'to-rose-900', 
      'from-teal-900', 'to-emerald-900',
      'from-amber-900', 'to-orange-900',
      'from-indigo-900', 'to-violet-900',
      'from-cyan-900', 'to-sky-900',
      'from-fuchsia-900', 'to-purple-900',
      'from-green-900', 'to-lime-900'
    ];
    
    const shuffled = [...colors].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 6);
  };

  const [randomColors, setRandomColors] = useState([]);

  useEffect(() => {
    setRandomColors(generateRandomColors());
  }, []);

  // Minimum swipe distance
  const minSwipeDistance = 50;

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrev();
    }
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;
      
      if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrev();
      } else if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, currentIndex]);

  return (
    <div className="py-16 px-4 min-h-screen relative overflow-hidden">
      {/* Multi-colored gradient background */}
      <div className="absolute inset-0 z-0 opacity-80">
        <div className={`absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br ${randomColors[0] || 'from-purple-900'} ${randomColors[1] || 'to-blue-900'} rounded-full filter blur-3xl opacity-70`}></div>
        <div className={`absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl ${randomColors[2] || 'from-pink-900'} ${randomColors[3] || 'to-rose-900'} rounded-full filter blur-3xl opacity-70`}></div>
        <div className={`absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr ${randomColors[4] || 'from-teal-900'} ${randomColors[5] || 'to-emerald-900'} rounded-full filter blur-3xl opacity-70`}></div>
        <div className={`absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl ${randomColors[0] || 'from-amber-900'} ${randomColors[1] || 'to-orange-900'} rounded-full filter blur-3xl opacity-70`}></div>
        
        {/* Additional random shapes */}
        <div className={`absolute top-1/4 left-1/4 w-40 h-40 bg-gradient-to-r ${randomColors[2] || 'from-indigo-900'} ${randomColors[3] || 'to-violet-900'} rounded-full filter blur-2xl opacity-60 animate-pulse`}></div>
        <div className={`absolute top-1/3 right-1/3 w-32 h-32 bg-gradient-to-l ${randomColors[4] || 'from-cyan-900'} ${randomColors[5] || 'to-sky-900'} rounded-full filter blur-2xl opacity-60 animate-pulse`} style={{ animationDelay: '1s' }}></div>
        <div className={`absolute bottom-1/4 left-1/3 w-36 h-36 bg-gradient-to-b ${randomColors[0] || 'from-fuchsia-900'} ${randomColors[1] || 'to-purple-900'} rounded-full filter blur-2xl opacity-60 animate-pulse`} style={{ animationDelay: '2s' }}></div>
        <div className={`absolute bottom-1/3 right-1/4 w-28 h-28 bg-gradient-to-t ${randomColors[2] || 'from-green-900'} ${randomColors[3] || 'to-lime-900'} rounded-full filter blur-2xl opacity-60 animate-pulse`} style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Updated title and description */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 drop-shadow-2xl"
          >
            Scientific Designer
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed drop-shadow-md"
          >
            I am also a scientific designer & illustrator. My designs are used as educational material in biology classes and courses lectured at{" "}
            <span className="font-bold bg-gradient-to-r from-amber-300 to-amber-400 bg-clip-text text-transparent drop-shadow-md">
              University of Salzburg
            </span>. Here are some.
            
          </motion.p>
        </div>
        
        {/* Thumbnail Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <motion.div 
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-xl cursor-pointer group shadow-2xl backdrop-blur-sm bg-white/5 border border-white/10"
              onClick={() => openModal(index)}
            >
              <img 
                src={image.src} 
                alt={image.title}
                className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-4">
                <h3 className="text-white text-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {image.title}
                </h3>
              </div>
              
              {/* Hover effect border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 group-hover:scale-95 transition-all duration-500 rounded-xl"></div>
            </motion.div>
          ))}
        </div>

        {/* Modal for full-size view */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <div 
                className="relative max-w-6xl w-full max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 text-white bg-black/50 rounded-full p-3 hover:bg-purple-600 transition-all backdrop-blur-sm"
                >
                  <X size={28} />
                </motion.button>

                {/* Navigation buttons */}
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  onClick={goToPrev}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white bg-black/50 rounded-full p-3 hover:bg-purple-600 transition-all backdrop-blur-sm"
                >
                  <ChevronLeft size={36} />
                </motion.button>
                
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white bg-black/50 rounded-full p-3 hover:bg-purple-600 transition-all backdrop-blur-sm"
                >
                  <ChevronRight size={36} />
                </motion.button>

                {/* Image display */}
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="flex justify-center items-center h-full"
                >
                  <img
                    src={images[currentIndex].src}
                    alt={images[currentIndex].title}
                    className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                  />
                </motion.div>

                {/* Image counter */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white bg-black/50 rounded-full px-5 py-2 backdrop-blur-sm"
                >
                  {currentIndex + 1} / {images.length}
                </motion.div>

                {/* Image title */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="absolute top-6 left-1/2 transform -translate-x-1/2 text-white text-xl font-medium bg-black/50 rounded-full px-5 py-2 backdrop-blur-sm"
                >
                  {images[currentIndex].title}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default IllustrationGallery;