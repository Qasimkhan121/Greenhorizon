"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import logo from "../../../../public/logoGreen.svg";
import Image from "next/image";

export default function ComingSoon() {
  const t = useTranslations("ComingSoon");
  const locale = useLocale();
  const router = useRouter();

  const goBack = () => {
    router.push(`/${locale}`);
  };

  return (
    <div className="flex flex-col py-20 h-screen bg-gold">
      <div className="flex items-center m-auto h-[80%] w-4/5 max-w-2xl justify-center gap-12 flex-col z-10">
        <Image src={logo} alt="Logo" width={147} height={55} priority={true} />

        <h2 className=" text-[48px] leading-[58px] text-green uppercase">
          {t("comingSoon")}
        </h2>

        <button
          onClick={goBack}
          aria-label={t("btn")}
          className="greenBtn  !py-4 !px-10 btn uppercase !tracking-[2px]"
        >
          {t("btn")}
        </button>
      </div>
    </div>
  );
}
