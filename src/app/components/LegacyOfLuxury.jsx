import React from "react";
import { rightArrowWhite } from "../_icons/icons";
import Link from "next/link";
import img1 from "@/images/legacyOfLuxury/1.png";
import img2 from "@/images/legacyOfLuxury/2.png";
import Image from "next/image";
import { useTranslations } from "next-intl";

const LegacyOfLuxury = () => {
  const t = useTranslations("LegacyOfLuxury");
  return (
    <section className="bg-green w-full relative py-20 lg:py-32">
      <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-8 container mx-auto">
        <div className="grid grid-cols-2 gap-4 lg:w-1/2">
          <div className="overflow-hidden group">
            <Image
              src={img1}
              alt="image"
              width={270}
              height={379}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-125"
            />
          </div>
          <div className="overflow-hidden group">
            <Image
              src={img2}
              alt="image"
              width={270}
              height={379}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-125"
            />
          </div>
        </div>

        <div className="text-white lg:w-1/2">
          <h4 className="text-gold uppercase mb-4">{t("label")} </h4>
          <h2 className="uppercase mb-8">
            {t("title1")} <br className="hidden 2xl:block" /> {t("title2")}
          </h2>
          <p className="p2 mb-8 text-gold">
            {t("para1")} <br /> {t("para2")}
          </p>
          <Link
            href="#"
            className="gap-2 borderBtn !px-6 btn items-center inline-flex  rounded-full  transition"
          >
            {t("btn")}
            <span className=" hover:text-green">{rightArrowWhite}</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LegacyOfLuxury;
