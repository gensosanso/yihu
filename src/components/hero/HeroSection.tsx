import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroSectionProps {
  slides?: Array<{
    imageUrl: string;
    title: string;
    description: string;
  }>;
}

const HeroSection = ({
  slides = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1528277342758-f1d7613953a2?w=1920&auto=format&fit=crop",
      title: "Discover Cameroon",
      description:
        "Experience the vibrant culture and natural beauty of Central Africa",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1517144447511-aebb25bbc5d2?w=1920&auto=format&fit=crop",
      title: "Connect Two Worlds",
      description: "Direct flights from Canada to Cameroon's major cities",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1528277342758-f1d7613953a2?w=1920&auto=format&fit=crop",
      title: "Exclusive Travel Packages",
      description: "Curated experiences for unforgettable journeys",
    },
  ],
}: HeroSectionProps) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[600px] bg-gray-900 overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{
            opacity: currentSlide === index ? 1 : 0,
            transition: { duration: 0.5 },
          }}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={slide.imageUrl}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
            <div className="max-w-4xl">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{
                  y: currentSlide === index ? 0 : 20,
                  opacity: currentSlide === index ? 1 : 0,
                }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-4xl md:text-6xl font-bold text-white mb-4"
              >
                {slide.title}
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{
                  y: currentSlide === index ? 0 : 20,
                  opacity: currentSlide === index ? 1 : 0,
                }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-xl md:text-2xl text-white mb-8"
              >
                {slide.description}
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{
                  y: currentSlide === index ? 0 : 20,
                  opacity: currentSlide === index ? 1 : 0,
                }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Book Now
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${currentSlide === index ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
