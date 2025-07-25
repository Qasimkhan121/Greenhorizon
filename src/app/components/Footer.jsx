import Link from "next/link";
import logo from "../../../public/logo.svg";
import Image from "next/image";
import { imageVectorGray } from "../_icons/icons";
import ImageVectorGray from "../_icons/imageVectorGray";
import Fb from "../_icons/socialmedia/fb";
import Insta from "../_icons/socialmedia/insta";
import Linkedin from "../_icons/socialmedia/linkedin";
import Yt from "../_icons/socialmedia/yt";
import { useLocale, useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");
  const locale = useLocale();

  const socialLinks = [
    {
      icon: Fb,
      href: "https://www.facebook.com/GreenHorizonDevelopmentsDubai/",
    },
    { icon: Insta, href: "https://www.instagram.com/greenhorizon_dubai" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/green-horizon-developers-dubai1/",
    },
    {
      icon: Yt,
      href: "https://www.youtube.com/@GreenHorizonDevelopmentsDubai",
    },
  ];

  const exploreLinks = [
    { label: t("residences"), href: "#" },
    { label: t("mediaStories"), href: "#" },
    { label: t("career"), href: "#" },
    { label: t("agentHub"), href: "#" },
    { label: t("contactUs"), href: "contact-us" },
  ];

  const projectLinks = [
    // { label: t("sunsetBay"), href: `Sunset-Bay` },
    // { label: t("beachWalkGrand"), href: "Beach-Walk-Grand" },
    // { label: t("coveEditionIII"), href: "Cove-Edition-3" },
    { label: t("sunsetBay"), href: `#` },
    // { label: t("beachWalkGrand"), href: "#" },
    { label: t("coveEditionIII"), href: "#" },
    { label: t("HideWalk"), href: "#" },
  ];

  const completedProjectLinks = [
    { label: t("53LangasterGate"), href: "#" },
    { label: t("hydeparkMansion"), href: "#" },
    { label: t("gloucesterTerrace"), href: "#" },
    // { label: t("coveLiving"), href: "#" },
    // { label: t("coastElegence"), href: "#" },
    // { label: t("pearlHotel"), href: "#" },
    // { label: t("westwoodGrande"), href: "#" },
  ];

  const footerLinks = [
    { label: t("cookiePolicy"), href: "cookie-policy" },
    { label: t("privacyPolicy"), href: "privacy-policy" },
    { label: t("termsConditions"), href: "terms-conditions" },
  ];

  return (
    <footer className="bg-green text-white pt-10">
      <div className="mx-auto flex items-center justify-center mt-14 mb-10 gap-4">
        <div className="h-px w-full bg-white"></div>
        <Link href={`/${locale}`} className="w-[50%] lg:w-[30%]">
          <Image
            src={logo}
            alt="Logo"
            width={200}
            height={200}
            className="w-full"
          />
        </Link>
        <div className="h-px w-full bg-white"></div>
      </div>

      <div className="container mx-auto justify-between flex flex-col lg:flex-row">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="mb-4">{t("explore")}</h4>
            <ul className="space-y-2 p2">
              {exploreLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link href={`/${locale}/${href}`} className="hover:underline">
                    {/* <Link href={`#`} className="hover:underline"> */}
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* <ul className="mt-14">
              {[t("payNow"), t("enquireNow"), t("channelPartner")].map(
                (btn) => (
                  <li key={btn}>
                    <button
                      className="borderBtn btn transition mb-4"
                      aria-label={btn}
                    >
                      {btn}
                    </button>
                  </li>
                )
              )}
            </ul> */}
            <div className="mt-14">
              <h4 className="mb-4">{t("completedProjects")}</h4>
              <ul className="space-y-2 p2">
                {completedProjectLinks.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="hover:underline">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h4 className="mb-4">{t("ongoingProjects")}</h4>
            <ul className="space-y-2 p2">
              {projectLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    // href={`/${locale}/projects/${href}`}
                    href={`#`}
                    className="hover:underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4">
              {t("contact")}
              <br className="lg:hidden" /> {t("info")}
            </h4>
            {/* <p className="p2">{t("add1")}</p> */}
            {/* <p className="p2 mt-2">{t("add2")}</p> */}
            <p className="p2 mt-2">
              {t("add2")} {t("add3")}
            </p>
            {/* <p className="p2 mt-2">{t("add3")}</p> */}
            <p className="mt-2 p2">
              <Link href="tel:+971582264311">+971 58 226 4311</Link>
            </p>

            <p className="mt-2 p2">
              {" "}
              <Link href="mailto:Info@ghorizon.ae">Info@ghorizon.ae</Link>
            </p>
          </div>

          <div className="lg:hidden flex flex-col">
            <h4 className="mb-4">{t("followUs")}</h4>
            <div className="flex gap-2">
              {socialLinks.map(({ icon: Icon, href }, index) => (
                <Link key={index} href={href} className="transition">
                  <Icon />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden lg:flex flex-col">
          <h4 className="mb-4">{t("followUs")}</h4>
          <div className="flex gap-2">
            {socialLinks.map(({ icon: Icon, href }, index) => (
              <Link key={index} href={href} className="transition">
                <Icon />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-20">
        <p className="p2">
          * Project done under a Joint Venture (JV) with Imtiaz Developments
        </p>
        <p className="p2">
          {t("rights")} <br className="lg:hidden" /> {t("rights2")}
        </p>
        {/* <p className="p2">{t("greenHorizon")}</p> */}
        <p className="p2">{t("licenceNum")}</p>
        <div className="flex p2 justify-center space-x-8 mt-10">
          {footerLinks.map(({ label, href }) => (
            // <Link key={label} href={href} className="hover:underline">
            <Link
              key={label}
              href={`/${locale}/${href}`}
              className="hover:underline"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      <div className="w-full mt-20 lg:flex justify-center hidden">
        {imageVectorGray}
      </div>
      <div className="lg:hidden mt-20 flex justify-center">
        <ImageVectorGray height="127" width="398" />
      </div>
    </footer>
  );
};

export default Footer;
