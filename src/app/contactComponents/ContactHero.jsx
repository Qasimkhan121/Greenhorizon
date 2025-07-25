import Image from "next/image";
import hero from "@/images/contact/hero.jpg";
import heroMob from "@/images/contact/heroMob.jpg";

import { imageVectorWhite } from "../_icons/icons";
import { useTranslations } from "next-intl";
import Navbar from "../components/Navbar";

const ContactHero = () => {
  const t = useTranslations("Contact");
  return (
    <section className="relative w-full h-screen">
      <div className="hidden lg:block absolute inset-0">
        <Image
          src={hero}
          alt="Hero Background"
          fill
          quality={100}
          priority
          className="object-cover object-top"
        />
      </div>
      <div className="lg:hidden absolute inset-0">
        <Image
          src={heroMob}
          alt="Hero Background"
          fill
          quality={100}
          priority
          className="object-cover"
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-green/100 to-transparent"></div>

      <Navbar />

      <div className="absolute inset-x-0 bottom-10   flex flex-col items-center justify-center text-white text-center px-4">
        <div className="flex justify-center mb-4 lg:mb-8">
          {imageVectorWhite}
        </div>
        <h1 className="text-[40px] leading-[57px]  lg:!text-[56px] lg:!leading-[60px]  lg:!font-normal uppercase mb-4 2xl:mb-8">
          {t("title")}
        </h1>
      </div>
    </section>
  );
};

export default ContactHero;
