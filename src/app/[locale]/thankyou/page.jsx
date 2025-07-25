"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import logo from "../../../../public/logoGreen.svg";
import Image from "next/image";

export default function ThankYouPage() {
  const t = useTranslations("Thankyou");
  const locale = useLocale();
  const router = useRouter();

  const goBack = () => {
    router.push(`/${locale}`);
  };

  return (
    <div className="flex flex-col py-20 h-screen bg-gold">
      <div className="flex items-center m-auto h-[80%] w-4/5 max-w-2xl justify-between flex-col z-10">
        <Image src={logo} alt="Logo" width={147} height={55} priority={true} />

        <div className="text-center space-y-4">
          <h2 className="mb-4 text-[48px] leading-[58px] text-green uppercase">
            {t("thankyou")}
          </h2>
          <p className="mb-6 p1 text-green">
            {t("para1")} <br className="hidden lg:block" /> {t("para2")}
          </p>
        </div>

        <button
          onClick={goBack}
          aria-label={t("btn")}
          className="greenBtn mt-4 !py-4 !px-10 btn uppercase !tracking-[2px]"
        >
          {t("btn")}
        </button>
      </div>
    </div>
  );
}
