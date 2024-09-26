"use client";
import Image from "next/image";
import { useState } from "react";
import Futebol1 from "../app/assets/futebol1.jpg";
import Futebol2 from "../app/assets/futebol2.jpg";
import Futebol3 from "../app/assets/futebol3.jpg";
import Volei1 from "../app/assets/volei1.jpg";
import Volei2 from "../app/assets/volei2.jpg";

const images = [Futebol1, Futebol2, Futebol3, Volei1, Volei2];

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <>
      <div id="default-carousel" className="relative w-full" data-carousel="slide">
        <div className="relative h-56 md:h-96 w-full overflow-hidden rounded-lg">
          <div className="block duration-200 ease-in-out" data-carousel-item>
            <Image
              src={images[currentIndex]}
              className="absolute block w-full h-full object-cover"
              alt={`Imagem ${currentIndex + 1}`}
            />
          </div>
        </div>

        {/* Botões de navegação */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {images.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`w-3 h-3 rounded-full ${
                idx === currentIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
              aria-current={idx === currentIndex ? "true" : "false"}
              aria-label={`Slide ${idx + 1}`}
              onClick={() => setCurrentIndex(idx)}
            ></button>
          ))}
        </div>

        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handlePrev}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
            <svg
              className="w-4 h-4 text-white rtl:rotate-180"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>

        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handleNext}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
            <svg
              className="w-4 h-4 text-white rtl:rotate-180"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </>
  );
};
