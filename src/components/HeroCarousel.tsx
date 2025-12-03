import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import heroWalking from "@/assets/hero-walking.jpg";
import heroCommunity from "@/assets/hero-community.jpg";
import heroNature from "@/assets/hero-nature.jpg";

const slides = [
  {
    image: heroWalking,
    title: "Walk Together, Grow Together",
    subtitle: "Join Visakhapatnam's premier walking community",
  },
  {
    image: heroCommunity,
    title: "Building Healthy Communities",
    subtitle: "Where friendship meets fitness",
  },
  {
    image: heroNature,
    title: "Step Into Wellness",
    subtitle: "Embrace an active lifestyle with us",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      opacity: 0,
      scale: 1.05,
      x: direction > 0 ? 100 : -100,
    }),
    center: {
      opacity: 1,
      scale: 1,
      x: 0,
    },
    exit: (direction: number) => ({
      opacity: 0,
      scale: 1.05,
      x: direction < 0 ? 100 : -100,
    }),
  };

  return (
    <div className="relative h-[600px] md:h-[750px] overflow-hidden rounded-3xl shadow-xl">

      {/* 🌟 NEXT MEETING TICKER — Positioned on the hero image */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
       className="
  absolute top-6 right-6 z-30
  bg-black/60 backdrop-blur-xl
  text-white
  shadow-xl rounded-2xl p-4 w-80
  border border-white/20
"
      >
        <p className="text-sm font-semibold uppercase tracking-wide text-yellow-300 mb-2">
          Next Meeting
        </p>

        <div className="mb-3">
          <p className="font-bold text-lg">Sunday General Meeting</p>
          <p className="text-sm">📍 VUDA Park</p>
          <p className="text-sm">🗓 9 Feb 2025</p>
          <p className="text-sm">⏰ 6:30 AM</p>
        </div>

        <div className="border-t border-white/30 my-2"></div>

        <div>
          <p className="font-bold text-lg">Friday Walk & Talk</p>
          <p className="text-sm">📍 Beach Road</p>
          <p className="text-sm">🗓 7 Feb 2025</p>
          <p className="text-sm">⏰ 6:00 AM</p>
        </div>
      </motion.div>

      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

          <div className="absolute inset-0 flex items-center px-8 md:px-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-2xl text-white"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                {slides[current].title}
              </h2>

              <p className="text-xl md:text-2xl opacity-90 mb-6 drop-shadow-lg">
                {slides[current].subtitle}
              </p>

              <blockquote className="italic text-lg md:text-xl text-gray-200 flex items-start gap-3">
                <Quote className="opacity-70 mt-1" />
                <span>
                  HEALTH IS WEALTH - WALK YOUR WAY TO HEALTH
                </span>
              </blockquote>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={handlePrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/30 transition-all shadow-lg"
      >
        <ChevronLeft size={26} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/30 transition-all shadow-lg"
      >
        <ChevronRight size={26} />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > current ? 1 : -1);
              setCurrent(index);
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? "bg-white w-8" : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
