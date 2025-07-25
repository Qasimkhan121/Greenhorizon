"use client";

import { imageVectorWhite } from "@/app/_icons/icons";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { useTranslations } from "next-intl";

const TermsAndConditions = () => {
  const t = useTranslations("TermsAndConditions");
  const u = useTranslations("CookiePolicy");

  return (
    <main className="w-full">
      <div className="relative w-full h-[400px]">
        <Navbar />
        <div className="absolute inset-x-0 bottom-0 h-full z-[-1] bg-green w-full flex flex-col items-center justify-end text-white text-center px-4">
          <div className="flex justify-center mb-4 lg:mb-8">
            {imageVectorWhite}
          </div>
          <h1 className="text-[40px] leading-[57px] lg:!text-[56px] lg:!leading-[60px] lg:!font-normal lg:uppercase mb-4 2xl:mb-8">
            {t("title")}
          </h1>
        </div>
      </div>
      <div className="container mx-auto p-6 pt-10 lg:pt-20">
        <section className="mb-6">
          <h3 className="mb-2">{t("section1.title")}</h3>
          <p className="p2">
            {t("section1.description")}{" "}
            <a href="https://ghorizon.ae/" className="text-blue-500 underline">
              https://ghorizon.ae/
            </a>{" "}
            {t("section1.description2")}
          </p>
        </section>

        <section className="mb-6">
          <h3 className="mb-2">{t("section2.title")}</h3>
          <p className="p2">{t("section2.description")}</p>
          <ul className="list-disc list-inside p2">
            <li>{t("section2.point1")}</li>
            <li>{t("section2.point2")}</li>
            <li>{t("section2.point3")}</li>
            <p className="p2">{t("section2.text")}</p>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="mb-2">{t("section3.title")}</h3>
          <p className="p2">{t("section3.description")}</p>
        </section>

        <section className="mb-6">
          <h3 className="mb-2">{t("section4.title")}</h3>
          <p className="p2">{t("section4.description")}</p>
        </section>

        <section className="mb-6">
          <h3 className="mb-2">{t("section5.title")}</h3>
          <p className="p2">{t("section5.description")}</p>
        </section>

        <section className="mb-6">
          <h3 className="mb-2">{t("section6.title")}</h3>
          <p className="p2">{t("section6.description")}</p>
          <ul className="list-disc list-inside p2">
            <li>{t("section6.point1")}</li>
            <li>{t("section6.point2")}</li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="mb-2">{t("section7.title")}</h3>
          <p className="p2">{t("section7.description")}</p>
        </section>

        <section className="mb-6">
          <h3 className="mb-2">{t("section8.title")}</h3>
          <p className="p2">{t("section8.description")}</p>
        </section>

        <section className="mb-6">
          <h3 className="mb-2">{t("contact.title")}</h3>
          <p className="p2">{t("contact.description")}</p>

          <address className="not-italic p2">
            <strong>{u("contact.name")}</strong>
            <br />
            {u("contact.address")}
            <br />
            {u("contact.city")}
            <br />
            {u("contact.phone")}{" "}
            <a href="tel:+971582264311" className="text-blue-600">
              +971 58 226 4311
            </a>
            <br />
            {u("contact.email")}{" "}
            <a href="mailto:info@ghorizon.ae" className="text-blue-600">
              info@ghorizon.ae
            </a>
          </address>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default TermsAndConditions;
