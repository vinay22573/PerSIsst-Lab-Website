'use client';
// This Carousel is used to show the current Works in Research Section
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import { useState } from "react";

interface CarouselProps {
  slides: React.ReactNode[]; // Define the type for the `slides` prop
}

export default function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition ease duration-300"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="flex-shrink-0 w-full">
            {slide}
          </div>
        ))}
      </div>
      <div className="absolute top-0 h-full w-full justify-between items-center flex text-purple-500/75 max-md:px-0.5 lg:px-1 text-4xl">
        <button onClick={prevSlide}>
          <IoIosArrowDropleftCircle />
        </button>
        <button onClick={nextSlide}>
          <IoIosArrowDroprightCircle />
        </button>
      </div>

      <div className="hidden bottom-0 md:flex md:justify-center md:gap-2 w-full">
        {slides.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to Slide ${index + 1}`}
            className="cursor-pointer hover:scale-125"
            onClick={() => setCurrent(index)}
          >
            <div
              className={`rounded-full w-4 h-4 ${
                index === current ? "bg-purple-500" : "bg-slate-500"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
