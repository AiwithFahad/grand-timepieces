import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroWrist from "@/assets/hero-watch-wrist.jpg";
import heroMovement from "@/assets/hero-movement.jpg";

const slides = [
  {
    image: heroWrist,
    title: "Precision\nRedefined",
    subtitle: "Where mechanical mastery meets modern elegance",
    cta: "Shop Collection",
  },
  {
    image: heroMovement,
    title: "The Art of\nMovement",
    subtitle: "Hand-assembled calibers with centuries of tradition",
    cta: "Discover More",
  },
];

export const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent(c => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent(c => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [paused, next]);

  return (
    <section
      className="relative h-screen overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-2xl"
            >
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6 text-foreground whitespace-pre-line">
                {slides[current].title}
              </h1>
              <p className="font-sans text-lg md:text-xl text-muted-foreground mb-8 max-w-md">
                {slides[current].subtitle}
              </p>
              <div className="flex gap-4">
                <a
                  href="#best-sellers"
                  className="inline-flex items-center px-8 py-3 bg-bronze text-primary-foreground font-sans font-medium text-sm tracking-wider uppercase rounded-sm hover:bg-bronze/90 transition-colors glow-bronze"
                >
                  {slides[current].cta}
                </a>
                <a
                  href="#collections"
                  className="inline-flex items-center px-8 py-3 border border-foreground/20 text-foreground font-sans font-medium text-sm tracking-wider uppercase rounded-sm hover:border-foreground/40 transition-colors"
                >
                  Explore
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex items-center justify-center gap-4">
        <button onClick={prev} className="p-2 text-foreground/50 hover:text-foreground transition-colors">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1 rounded-full transition-all duration-500 ${i === current ? 'w-8 bg-bronze' : 'w-4 bg-foreground/20'}`}
            />
          ))}
        </div>
        <button onClick={next} className="p-2 text-foreground/50 hover:text-foreground transition-colors">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
};
