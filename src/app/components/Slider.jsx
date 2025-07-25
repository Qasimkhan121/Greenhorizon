"use client";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import Link from "next/link";
import img1 from "@/images/slide.png";
import { sliderIconLeft, sliderIconRight } from "../_icons/icons";
import { useLocale, useTranslations } from "next-intl";

const locations = [
  {
    image1: img1,
    link: "Cotier-House",
  },
  // {
  //   image1: img1,
  //   link: "Cotier-House",
  // },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const locale = useLocale();
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: { perView: 1 },
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const handleNext = () => instanceRef.current?.next();
  const handlePrev = () => instanceRef.current?.prev();
  const t = useTranslations("Slider");

  return (
    <section className="w-full mx-auto">
      <div className="w-full mx-auto relative">
        <div ref={sliderRef} className="keen-slider">
          {/* {locations.map((location, index) => (
            <div key={index} className="keen-slider__slide grid w-full"> */}
          <div className="relative w-full">
            {/* <Link href={`/${locale}/projects/Cotier-House`}> */}
            <Link href={"#"}>
              <Image
                src={img1}
                alt={`Slide`}
                width={1440}
                height={600}
                className="w-full h-[519px] lg:h-auto object-cover cursor-pointer"
              />

              <div className="absolute inset-0 text-white text-center">
                <div className="absolute top-14 lg:top-28 w-full flex flex-col items-center justify-center gap-6">
                  {/* <h4 className="text-center tracking-[1px] ">{t("title")}</h4> */}
                  <div className="flex justify-center">
                    <h1 className="!font-normal !text-[50px] lg:!text-[79px] !leading-[50px] !tracking-[1px] uppercase ">
                      {t("title")}
                    </h1>
                  </div>
                  <p className="p1 tracking-[1px]">
                    {t("discription")}
                    {/* <br /> {t("discription2")} */}
                  </p>
                </div>
                {/* <div className="flex justify-center mt-4 space-x-2 absolute bottom-10 inset-x-0">
                      {locations.map((_, idx) => (
                        <button
                          key={idx}
                          aria-label="location button"
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            currentSlide === idx
                              ? "bg-white"
                              : "bg-gray hover:bg-gray"
                          }`}
                          onClick={() => instanceRef.current?.moveToIdx(idx)}
                        ></button>
                      ))}
                    </div> */}
              </div>
            </Link>
          </div>
          {/* </div>
          ))} */}
        </div>

        {/* <button
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full text-2xl"
          onClick={handlePrev}
          aria-label="previous slide"
        >
          {sliderIconLeft}
        </button> */}

        {/* <button
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full text-2xl"
          onClick={handleNext}
          aria-label="next slide"
        >
          {sliderIconRight}
        </button> */}
      </div>
    </section>
  );
};

export default Slider;
