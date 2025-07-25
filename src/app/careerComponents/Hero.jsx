"use client";
import Image from "next/image";
import hero from "@/images/career/hero.jpg";
import heroMob from "@/images/career/heroMob.jpg";
import Navbar from "@/app/components/Navbar";
import { imageVectorWhite } from "@/app/_icons/icons";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const HeroSection = ({}) => {
  const t = useTranslations("Career");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative w-full h-[72vh] lg:h-screen">
      {/* <Image
        src={hero}
        alt="Hero Background"
        fill
        quality={100}
        priority
        className="object-cover object-center lg:object-top"
      /> */}
      <Image
        src={isMobile ? heroMob : hero}
        alt="Hero Background"
        fill
        quality={100}
        priority
        className="object-cover object-center lg:object-top"
      />

      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-green/100 to-transparent"></div>

      <Navbar />

      <div className="absolute inset-x-0 bottom-10 flex flex-col items-center justify-center text-white text-center px-4">
        <div className="flex justify-center mb-4 lg:mb-8">
          {imageVectorWhite}
        </div>
        <h1 className="mb-4 2xl:mb-8">{t("title")} </h1>
      </div>
    </section>
  );
};

export default HeroSection;
