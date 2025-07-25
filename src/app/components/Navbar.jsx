"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { useLocale, useTranslations } from "next-intl";
import logo from "../../../public/logo.svg";
import { cross, hamburger, phone, rightArrowWhite } from "../_icons/icons";
import Fb from "../_icons/socialmedia/fb";
import Insta from "../_icons/socialmedia/insta";
import Linkedin from "../_icons/socialmedia/linkedin";
import Yt from "../_icons/socialmedia/yt";
import CookieConsent from "./CookieConsent";
// import CustomDropdown from "./CustomDropdown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Navbar");
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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const tabs1 = [
    { name: t("aboutUs"), link: `/${locale}/about-us` },
    { name: t("residences"), link: `/${locale}/coming-soon` },
  ];

  const tabs2 = [
    { name: t("mediaStories"), link: `/${locale}/coming-soon` },
    { name: t("career"), link: `/${locale}/career` },
  ];

  return (
    <nav className="bg-gradient-to-b from-black/90 via-black/50 h-1/4 to-transparent relative">
      <div className="container mx-auto py-4 lg:py-4 flex items-center justify-between lg:justify-center gap-40">
        {/* <div className="lg:hidden">
          <CustomDropdown />
        </div> */}
        <Link href={`/${locale}`} className="text-2xl font-bold lg:hidden">
          <Image src={logo} alt="Logo" width={115} height={29} priority />
        </Link>
        {/* <div className="hidden lg:flex items-center space-x-4  ">
          <span className="text-white font-bold text-[22px] leading-[24px] inline-flex items-center gap-2 w-[50px]">
            {phone} {t("800GREEN")}
          </span>
        </div> */}

        <div className="hidden lg:block space-x-10 z-20">
          {tabs1.map((tab, index) => (
            <Link
              key={index}
              href={tab.link}
              className=" hover:text-[#185B45]  text-[15px] leading-[24px] text-white "
            >
              {tab.name}
            </Link>
          ))}
        </div>

        <Link
          href={`/${locale}`}
          className="text-2xl font-bold hidden lg:block"
        >
          <Image src={logo} alt="Logo" width={115} height={29} priority />
        </Link>
        <div className="hidden space-x-10 z-20 lg:flex">
          {tabs2.map((tab, index) => (
            <Link
              key={index}
              href={tab.link}
              className=" hover:text-[#185B45]   text-[15px] leading-[24px] text-white "
            >
              {tab.name}
            </Link>
          ))}
        </div>
        <div className="flex justify-end items-center  lg:hidden">
          {/* <select
            value={locale}
            onChange={handleLanguageChange}
            className="bg-transparent text-white font-bold z-50 outline-none px-2 py-1 custom-select"
          >
            {languages.map((lang) => (
              <option
                key={lang.code}
                value={lang.code}
                className="p1 text-black"
              >
                {lang.label}
              </option>
            ))}
          </select> */}

          {/* <div className="hidden lg:block">
            <CustomDropdown />
          </div> */}

          <button
            className="z-50 bg-white rounded-full "
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {hamburger}
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-screen w-full lg:w-[50%] bg-green z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="w-[85%] lg:w-[80%] pl-4 mx-auto py-8 flex flex-col items-start gap-4 lg:gap-8">
          <button
            className="self-end  mb-4 lg:mr-10"
            onClick={toggleMenu}
            aria-label="close Menu"
          >
            {cross}
          </button>

          {tabs1.map((tab, index) => (
            <Link key={index} href={tab.link} className="w-full">
              <button
                className="text-xs leading-[20px] lg:text-base lg:leading-6 border-green border-b hover:border-b hover:border-white font-bold text-white  text-left"
                onClick={toggleMenu}
                aria-label={tab.name}
              >
                {tab.name}
              </button>
            </Link>
          ))}
          {tabs2.map((tab, index) => (
            <Link key={index} href={tab.link} className="w-full">
              <button
                className="text-xs leading-[20px] lg:text-base lg:leading-6 border-green border-b hover:border-b hover:border-white font-bold text-white  text-left"
                onClick={toggleMenu}
                aria-label={tab.name}
              >
                {tab.name}
              </button>
            </Link>
          ))}

          <div className="flex lg:items-start flex-col mt-4 gap-8 w-full">
            {/* <span className="text-white text-[20px] leading-[24px] font-bold inline-flex items-center gap-2">
              {phone} {t("800GREEN")}
            </span> */}
            <Link
              className="whiteBtn uppercase inline-flex gap-2 items-center cursor-pointer w-[60%] lg:w-auto"
              href={`/${locale}/contact-us`}
            >
              {t("contactUs")} {rightArrowWhite}
            </Link>

            <div className="flex gap-2">
              {/* {[Fb, Insta, Linkedin, Yt].map((Icon, index) => (
                <Link key={index} href="#" className="transition">
                  <Icon />
                </Link>
              ))} */}
              {socialLinks.map(({ icon: Icon, href }, index) => (
                <Link key={index} href={href} className="transition">
                  <Icon />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <CookieConsent />
    </nav>
  );
};

export default Navbar;
