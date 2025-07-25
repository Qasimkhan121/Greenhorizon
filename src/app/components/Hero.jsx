import Navbar from "./Navbar";
import heading from "@/images/excellenceHomes.svg";
import { imageVectorWhite } from "../_icons/icons";
import { useTranslations } from "next-intl";
import Image from "next/image";

const HeroSection = () => {
  const t = useTranslations("Hero");

  return (
    <section className="relative w-full h-[665px] lg:h-screen">
      <video
        className="absolute inset-0 w-full h-full lg:h-auto object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/poster.webp"
      >
        <source src="/greenHorizonVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-green via-green/60 to-transparent"></div>

      <Navbar />

      <div className="absolute inset-x-0 bottom-16 lg:inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <div className="flex justify-center mb-8 w-[160px] h-[48px] mx-auto">
          {imageVectorWhite}
        </div>
        <h1 className="text-[20px] lg:!text-[35px] !leading-[24px] tracking-[5px] !font-normal uppercase mb-4">
          {t("title")}
        </h1>
        <Image
          src={heading}
          alt="Hero Heading"
          width={681}
          height={196}
          quality={100}
          priority
        />
      </div>
    </section>
  );
};

export default HeroSection;
