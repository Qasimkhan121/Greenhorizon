"use client";

import { imageVectorWhite } from "@/app/_icons/icons";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { useLocale, useTranslations } from "next-intl";

const PrivacyPolicy = () => {
  const t = useTranslations("PrivacyPolicy");
  const u = useTranslations("CookiePolicy");
  const locale = useLocale();

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
      <div className="container mx-auto pb-20 pt-10 lg:pt-20">
        <section className="mb-6">
          <h3 className="mb-2">{t("introduction.title")}</h3>
          <p className="p2">{t("introduction.text1")}</p>
          <p className="p2">{t("introduction.text2")}</p>
        </section>

        <section className="mb-6">
          <h3 className="mb-2">{t("informationWeCollect.title")}</h3>
          <h4 className="font-medium mb-2">
            {t("informationWeCollect.personal.title")}
          </h4>
          <p className="p2">{t("informationWeCollect.personal.text")}</p>
          <ul className="list-disc list-inside p2">
            <li>{t("informationWeCollect.personal.items.name")}</li>
            <li>{t("informationWeCollect.personal.items.email")}</li>
            <li>{t("informationWeCollect.personal.items.phone")}</li>
            <li>{t("informationWeCollect.personal.items.address")}</li>
            <li>{t("informationWeCollect.personal.items.company")}</li>
          </ul>

          <h4 className="font-medium mt-4 mb-2">
            {t("informationWeCollect.nonPersonal.title")}
          </h4>
          <p className="p2">{t("informationWeCollect.nonPersonal.text")}</p>
          <ul className="list-disc list-inside p2">
            <li>{t("informationWeCollect.nonPersonal.items.ip")}</li>
            <li>{t("informationWeCollect.nonPersonal.items.browser")}</li>
            <li>{t("informationWeCollect.nonPersonal.items.pagesVisited")}</li>
            <li>{t("informationWeCollect.nonPersonal.items.time")}</li>
            <li>{t("informationWeCollect.nonPersonal.items.referrer")}</li>
          </ul>
          <h4 className="font-medium mt-4 mb-2">
            {t("informationWeCollect.cookies.title")}
          </h4>
          <p className="p2">
            {t("informationWeCollect.cookies.text")}{" "}
            <a href={`/${locale}/cookie-policy`} className="text-blue-600">
              {t("informationWeCollect.cookies.cookiePolicy")}
            </a>{" "}
            {t("informationWeCollect.cookies.text2")}
          </p>
        </section>

        <section className="mb-6">
          <h3 className="mb-2">{t("section3.title")}</h3>

          <p className="p2">{t("section3.text")}</p>
          <ul className="list-disc list-inside p2">
            <li>{t("section3.items.1")}</li>
            <li>{t("section3.items.2")}</li>
            <li>{t("section3.items.3")}</li>
            <li>{t("section3.items.4")}</li>
            <li>{t("section3.items.5")}</li>
          </ul>
        </section>
        <section className="mb-6">
          <h3 className="mb-2">{t("section4.title")}</h3>

          <p className="p2">{t("section4.text")}</p>
          <ul className="list-disc list-inside p2">
            <li>
              {" "}
              <strong>{t("section4.items.1.text")}</strong>{" "}
              {t("section4.items.1.data")}
            </li>
            <li>
              {" "}
              <strong>{t("section4.items.2.text")}</strong>{" "}
              {t("section4.items.2.data")}
            </li>
            <li>
              {" "}
              <strong>{t("section4.items.3.text")}</strong>{" "}
              {t("section4.items.3.data")}
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="mb-2">{t("section5.title")}</h3>

          <p className="p2">{t("section5.text")}</p>
        </section>
        <section className="mb-6">
          <h3 className="mb-2">{t("section6.title")}</h3>

          <p className="p2">{t("section6.text")}</p>
          <ul className="list-disc list-inside p2">
            <li>{t("section6.items.1")}</li>
            <li>{t("section6.items.2")}</li>
            <li>{t("section6.items.3")}</li>
          </ul>
          <p className="p2">
            {t("section6.text2")}{" "}
            <a href="https://ghorizon.ae/" className="text-blue-500 underline">
              https://ghorizon.ae/
            </a>{" "}
          </p>
        </section>
        <section className="mb-6">
          <h3 className="mb-2">{t("section7.title")}</h3>

          <p className="p2">{t("section7.text")}</p>
        </section>
        <section className="mb-6">
          <h3 className="mb-2">{t("section8.title")}</h3>

          <p className="p2">{t("section8.text")}</p>
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

export default PrivacyPolicy;
