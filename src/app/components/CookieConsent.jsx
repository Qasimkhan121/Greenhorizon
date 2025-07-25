"use client";
import React, { useEffect, useState } from "react";
import { hasCookie, setCookie } from "cookies-next";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const locale = useLocale();
  const t = useTranslations("cookieConsent");

  useEffect(() => {
    setShowConsent(!hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setCookie("localConsent", "true", {});
    setShowConsent(false);
  };
  const rejectCookie = () => {
    setCookie("localConsent", "false", {});
    setShowConsent(false);
  };

  if (!showConsent) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 z-[10000001] w-full">
      <div className="w-full lg:px-7 px-5 lg:py-6 py-5 bg-[#0b271e] bg-opacity-80  shadow-lg backdrop-blur-md">
        <h3 className="uppercase text-white">{t("title")} </h3>
        <div className="flex flex-col lg:flex-row justify-between">
          <p className="p2 mt-2 mb-4 text-white lg:w-[70%]">
            {t("text")}{" "}
            <Link
              href={`/${locale}/cookie-policy`}
              className="hover:underline text-white"
            >
              {t("cookiePolicy")}
            </Link>{" "}
            .
          </p>
          <div className="flex gap-5 lg:w-[30%]">
            <button className="greenBtn w-1/2" onClick={() => acceptCookie()}>
              {t("accept")}
            </button>
            <button
              className="!border !border-green-400 whiteBtn w-1/2"
              onClick={() => rejectCookie()}
            >
              {t("rejectAll")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
