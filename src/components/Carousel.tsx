import React, { useEffect, useState } from "react";

const slides = [
  { id: 1, text: "Slide 1", color: "bg-blue-400" },
  { id: 2, text: "Slide 2", color: "bg-green-400" },
  { id: 3, text: "Slide 3", color: "bg-purple-400" },
  { id: 4, text: "Slide 4", color: "bg-red-400" },
];

const Carousels: React.FC = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="md:h-[370px] h-[200px] lg:h-[80vh] overflow-hidden relative">
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`w-full h-full flex-shrink-0 flex items-center justify-center text-white text-3xl font-semibold ${slide.color}`}
          >
            {slide.text}
          </div>
        ))}
      </div>

      {/* Optional Dots */} 
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-1 rounded-full ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrent(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousels;
