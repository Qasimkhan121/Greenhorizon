"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import bgImage from "@/images/luxury.webp";
import functionality from "@/images/lifestyles.svg";
import { imageVectorGray, rightArrowWhite } from "../_icons/icons";
import { useTranslations } from "next-intl";
import Link from "next/link";

const LuxurySection = () => {
  const t = useTranslations("Luxury");

  const stats = [
    { value: 14, label1: t("state.1.title1"), label2: t("state.1.title2") },
    { value: 7, label1: t("state.2.title1"), label2: t("state.2.title2") },
    { value: 1000, label1: t("state.3.title1"), label2: t("state.3.title2") },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const animateCount = (start, end, index) => {
      let startTime;
      const duration = 1000; // 1 second animation duration

      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const newValue = Math.floor(progress * (end - start) + start);
        setCounts((prev) => {
          const updatedCounts = [...prev];
          updatedCounts[index] = newValue;
          return updatedCounts;
        });

        if (progress < 1) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
    };

    const startAnimation = () => {
      stats.forEach((stat, index) => animateCount(0, stat.value, index));
    };

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimation();
          }
        });
      },
      { threshold: 0.5 } // Trigger animation when 50% of the section is visible
    );

    if (sectionRef.current) {
      observerRef.current.observe(sectionRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative pt-14 lg:pt-0 bg-green text-white"
      >
        <div className="w-full relative flex flex-col justify-end lg:flex-row items-center">
          <div className="container lg:pl-28 top-20 lg:absolute z-10 lg:w-full space-y-4 lg:space-y-6 overflow-hidden w-full">
            <h4 className="uppercase text-gold">{t("title")}</h4>

            <h2 className="font-medium inline-flex flex-col items-start uppercase">
              {t("title2")}
              <div className="inline-flex items-center gap-4 ml-20">
                {t("title3")}
                <span>
                  <Image
                    src={functionality}
                    alt="Functionality"
                    width={400}
                    height={85}
                    quality={100}
                    className="h-[50px] lg:h-[85px] w-auto"
                  />
                </span>
              </div>
            </h2>

            <div className="pl-8 lg:pl-24 space-y-10 lg:w-[40%]">
              <p className="p1 pt-6 tracking-[1px]">{t("para1")}</p>
              <p className="p1 tracking-[1px]">{t("para2")}</p>

              <Link
                href="#"
                className="gap-2 borderBtn !px-6 btn uppercase items-center inline-flex rounded-full transition"
              >
                {t("knowMore")}
                <span className="hover:text-green">{rightArrowWhite}</span>
              </Link>
            </div>
          </div>

          <div className="hidden lg:block lg:relative w-full lg:w-[70%] lg:h-[1041px]">
            <Image
              src={bgImage}
              alt="Luxury Living"
              fill
              className="rounded-lg object-cover"
            />
            <div className="absolute bottom-0 hidden lg:block h-full bg-gradient-to-r from-green/80 to-transparent w-[5%]"></div>
          </div>
          <div className="lg:hidden lg:relative w-full lg:w-[70%]">
            <Image
              src={bgImage}
              alt="Luxury Living"
              width={423}
              height={346}
              className="w-full"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-4 hidden lg:block">
          {imageVectorGray}
        </div>
      </section>

      <div className="bg-green text-white">
        <div className="pl-20 mx-auto py-16 lg:py-28 lg:w-[85%] max-w-[1920px] lg:px-20 flex flex-col sm:flex-row items-center lg:justify-center text-left lg:gap-10 sm:gap-0">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex-1 h-40 flex flex-col items-start relative w-full ${
                index < stats.length - 1
                  ? "border-b-2 py-8 lg:border-r-2 lg:border-b-0 sm:border-[#CACACA] lg:px-14 lg:py-0"
                  : "lg:px-14 py-8 lg:py-0"
              }`}
            >
              {/* Add "+" sign to first and last card */}
              <h1 className="font-medium">
                {counts[index]}
                {index === 0 || index === stats.length - 1 ? "+" : ""}
              </h1>
              <h4 className="whitespace-pre-line text-left mt-3 !leading-[25px]">
                {stat.label1} <br /> {stat.label2}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LuxurySection;
