import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const Carrusel = ({
  children: slides,
  autoSlide = true,
  autoSlideInterval = 3000,
}) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  const handleDotClick = (index) => {
    setCurr(index);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" max-w-lg mb-10">
        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform ease-out duration-500"
            style={{
              transform: `translateX(-${curr * 100}%)`,
              transitionDuration: "2s",
            }}
          >
            {slides}
          </div>
          <div className="absolute flex justify-between items-center inset-0 p-4">
            <button
              onClick={prev}
              className="rounded-full bg-white/50 hover:bg-white shadow text-gray-800"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={next}
              className="rounded-full bg-white/50 hover:bg-white shadow text-gray-800"
            >
              <ChevronRight />
            </button>
          </div>
          <div className="absolute bottom-4 right-0 left-0">
            <div className="flex justify-center space-x-4">
              {slides.map((i, index) => (
                <div
                  onClick={() => handleDotClick(index)}
                  key={index}
                  className={`transition-all w-2 h-2 rounded-full cursor-pointer ${
                    curr === index ? "bg-white" : "bg-white/30"
                  } `}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrusel;
