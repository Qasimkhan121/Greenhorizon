import React from "react";
import img1 from "@/images/work.jpg";
import Image from "next/image";
import { imageVectorWhite, rightArrowWhite } from "../_icons/icons";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const WorkWIthUs = () => {
  const t = useTranslations("WorkWithUs");
  const locale = useLocale();
  return (
    <div className="">
      <div className="relative">
        <Image
          src={img1}
          alt={`Slide`}
          width={1440}
          height={697}
          className="w-full h-[697px] lg:h-auto object-cover"
        />
        <div className="absolute inset-0 text-white text-center">
          <div className="absolute bottom-0 w-full flex flex-col items-center justify-center lg:gap-4 bg-gradient-to-t from-green/100 via-green/70 to-transparent p-6 py-10 ">
            <div className="flex justify-center w-[160px] h-[48px] mx-auto">
              {imageVectorWhite}
            </div>
            <h1 className="my-2  lg:my-4 !text-[26px] !leading-[66px] lg:!text-[56px] !font-normal uppercase text-white">
              {t("title")}
            </h1>
            <Link
              href={`/${locale}/career`}
              aria-label={t("btnText")}
              className="greenBtn btn  items-center uppercase inline-flex gap-2 text-white border-white"
            >
              {t("btnText")} {rightArrowWhite}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkWIthUs;
