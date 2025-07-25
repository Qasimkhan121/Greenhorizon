"use client";
import React from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import bg from "@/images/about/work.jpg";
import logo from "@/images/logoBlack.svg";
import img1 from "@/images/about/features/1.png";
import img2 from "@/images/about/features/2.png";
import img3 from "@/images/about/features/3.png";
import img4 from "@/images/about/features/4.png";
import img5 from "@/images/about/features/5.png";
import img6 from "@/images/about/features/6.png";
import img7 from "@/images/about/features/7.png";
import { rightArrow, leftArrow } from "../_icons/icons";
import { useTranslations } from "next-intl";

const features = [
  {
    title: "item1.title1",
    description: "item1.desc",
    image: img1,
  },
  {
    title: "item2.title1",
    description: "item2.desc",
    image: img2,
  },
  {
    title: "item3.title1",
    description: "item3.desc",
    image: img3,
  },
  {
    title: "item4.title1",
    description: "item4.desc",
    image: img4,
  },
  {
    title: "item5.title1",
    description: "item5.desc",
    image: img5,
  },
  {
    title: "item6.title1",
    description: "item6.desc",
    image: img6,
  },
  {
    title: "item7.title1",
    description: "item7.desc",
    image: img7,
  },
];

const Development = () => {
  const t = useTranslations("About.Features");
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: { perView: 2.5, spacing: 16 },
    loop: false,
  });

  return (
    <section>
      {/* <div className="relative">
        <Image
          src={bg}
          alt="Background"
          width={1440}
          height={697}
          className="w-full h-[697px] lg:h-auto object-cover"
        />
        <div className="absolute inset-0 text-white text-center">
          <div className="absolute bottom-0 w-full flex flex-col items-center justify-center h-1/4 bg-gradient-to-t from-[#EFE8DC] via-[#EFE8DCA6]/65 to-transparent">
            <Image src={logo} alt="Logo" width={179} height={85} />
          </div>
        </div>
      </div> */}

      <div className="bg-gold pt-6 pb-20  lg:pb-20">
        <div className="text-center mb-12 container mx-auto">
          <h4 className="mb-4 uppercase">{t("label")}</h4>
          <h2 className="tracking-[1px] uppercase">{t("title1")}</h2>
        </div>

        <div className="relative max-w-[1920px] overflow-hidden hidden lg:block">
          <button
            onClick={() => instanceRef.current?.prev()}
            aria-label="left arrow"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 px-4 pr-10 bg-gradient-to-r from-[#EFE8DC] via-[#EFE8DCA6]/65 to-transparent h-full "
          >
            {leftArrow}
          </button>

          <div ref={sliderRef} className="keen-slider  px-20">
            {features.map((feature, index) => (
              <div key={index} className="keen-slider__slide ">
                <div className="w-full relative">
                  <Image
                    src={feature.image}
                    alt={t(feature.title)}
                    width={545}
                    height={450}
                  />
                </div>
                <h2 className="!text-[32px] !leading-[45px] font-normal mt-6 ">
                  {t(feature.title)}
                </h2>
                <p className="p1 mt-4 w-[80%]"> {t(feature.description)} </p>
              </div>
            ))}
          </div>

          <div className="px-4 absolute right-0 z-10  top-1/2  bg-gradient-to-l from-[#EFE8DC] via-[#EFE8DCA6]/65 to-transparent h-full transform -translate-y-1/2">
            <button
              onClick={() => instanceRef.current?.next()}
              aria-label="right arrow"
              className="flex justify-center items-center h-full "
            >
              {rightArrow}
            </button>
          </div>
        </div>

        <div className="lg:hidden grid container mx-auto gap-10">
          {features.map((feature, index) => (
            <div key={index} className="w-full shadow-lg">
              <div className="w-full relative">
                <Image
                  src={feature.image}
                  alt={t(feature.title)}
                  width={545}
                  height={450}
                />
              </div>
              <div className="py-10 px-6">
                <h2 className="!text-[32px] !leading-[45px] font-normal  ">
                  {t(feature.title)}
                </h2>
                <p className="p1 mt-4"> {t(feature.description)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Development;
