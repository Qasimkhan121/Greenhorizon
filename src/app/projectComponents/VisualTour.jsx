"use client";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";

const VisualTour = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 10 },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 15 },
      },
    },
    mode: "free-snap",
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  return (
    <section className="w-full bg-green pt-16 lg:pt-1 pb-20 lg:pb-28 text-white">
      <div className="text-center mb-16">
        <h4 className="tracking-[1px] uppercase text-gold mx-auto lg:hidden">
          {data.label}
        </h4>
        <h2 className="mt-4 uppercase">
          {data.title1} <br /> {data.title2}
        </h2>
      </div>

      <div className="relative w-full mx-auto px-4">
        <div ref={sliderRef} className="keen-slider">
          {data.images.map((src, index) => (
            <div key={index} className="keen-slider__slide">
              <Image
                src={src}
                alt={`Luxury Interior ${index + 1}`}
                width={710}
                height={340}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>

        <div className="absolute top-0 left-0 bg-gradient-to-r from-green via-green/80 to-transparent h-full px-6 hidden md:flex">
          <button
            onClick={() => instanceRef.current?.prev()}
            aria-label="left slide"
            className="relative left-0 top-1/2 transform -translate-y-1/2 h-10 w-10 p-3 rounded-full border border-[#EFE8DC] flex justify-center items-center"
          >
            <svg width="10" height="18" viewBox="0 0 10 18" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.456766 8.05198L7.99943 0.509314L9.88476 2.39465L3.28476 8.99465L9.88477 15.5946L7.99943 17.48L0.456766 9.93731C0.206805 9.68728 0.0663836 9.3482 0.0663836 8.99465C0.0663835 8.6411 0.206804 8.30202 0.456766 8.05198Z"
                fill="#EFE8DC"
              />
            </svg>
          </button>
        </div>

        <div className="absolute top-0 right-0 bg-gradient-to-l from-green via-green/80 to-transparent h-full px-6 hidden md:flex">
          <button
            onClick={() => instanceRef.current?.next()}
            aria-label="right slide"
            className="relative right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 flex justify-center items-center p-3 rounded-full border border-[#EFE8DC] transition"
          >
            <svg width="10" height="18" viewBox="0 0 10 18" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.54323 9.94802L2.00057 17.4907L0.115234 15.6054L6.71523 9.00535L0.115234 2.40535L2.00057 0.52002L9.54323 8.06269C9.79319 8.31272 9.93362 8.6518 9.93362 9.00535C9.93362 9.3589 9.79319 9.69798 9.54323 9.94802Z"
                fill="#EFE8DC"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-4 space-x-3">
        {data.images.map((_, i) => (
          <button
            key={i}
            onClick={() => instanceRef.current?.moveToIdx(i)}
            className={`w-[8px] h-[8px] lg:w-[10px] lg:h-[10px] rounded-full transition ${
              i === currentSlide ? "bg-[#E3BF72]" : "bg-white"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default VisualTour;
