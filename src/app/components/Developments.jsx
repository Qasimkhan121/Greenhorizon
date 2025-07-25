"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import img1 from "@/images/developments/1.jpg";
import img2 from "@/images/developments/2.png";
import img3 from "@/images/developments/3.png";
import img4 from "@/images/developments/4.png";
import img5 from "@/images/developments/5.png";
import img6 from "@/images/developments/6.png";
import img7 from "@/images/developments/7.jpg";
import img8 from "@/images/developments/8.jpg";
import { useLocale, useTranslations } from "next-intl";

const developments = [
  {
    id: 1,
    name: "1.name",
    location: "1.location",
    size: "1.size",
    duration: "1.duration",
    image: img1,
    category: "UAE",
    link: "#",
  },
  {
    id: 3,
    name: "3.name",
    location: "3.location",
    size: "3.size",
    duration: "3.duration",
    image: img3,
    category: "UAE",
    link: "#",
  },
  {
    id: 4,
    name: "4.name",
    location: "4.location",
    size: "4.size",
    duration: "4.duration",
    image: img4,
    category: "UAE",
    link: "#",
  },
  {
    id: 5,
    name: "5.name",
    location: "5.location",
    size: "5.size",
    duration: "5.duration",
    image: img5,
    category: "London",
    link: "#",
  },
  {
    id: 6,
    name: "6.name",
    location: "6.location",
    size: "6.size",
    duration: "6.duration",
    image: img6,
    category: "London",
    link: "#",
  },
  {
    id: 7,
    name: "7.name",
    location: "7.location",
    size: "7.size",
    duration: "7.duration",
    image: img7,
    category: "London",
    link: "#",
  },
  {
    id: 8,
    name: "8.name",
    location: "8.location",
    size: "8.size",
    duration: "8.duration",
    image: img8,
    category: "London",
    link: "#",
  },
];

export default function Developments() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const t = useTranslations("Developments");
  const locale = useLocale();

  const filteredDevelopments =
    selectedCategory === "All"
      ? developments
      : developments.filter((dev) => dev.category === selectedCategory);

  return (
    <section className="bg-gold pt-14 pb-20 lg:pt-20 lg:pb-28">
      <div className="text-center mb-8 container mx-auto">
        <h4 className="mb-2 lg:mb-4">{t("label")}</h4>
        <h2 className="tracking-[1px]">
          {t("title1")} <br className="hidden lg:block" /> {t("title2")}
        </h2>
        <div className="mt-4 lg:mt-8 flex flex-col lg:flex-row items-center justify-center gap-4">
          {["All", "UAE", "London"].map((category, index) => (
            <button
              aria-label={t(`categories.${category}`)}
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`w-64 px-6 uppercase rounded-full text-[22px] font-heading leading-[50px] border border-[#958360] transition-all ${
                selectedCategory === category
                  ? "bg-[#958360] text-white"
                  : "text-[#958360]"
              }`}
            >
              {t(`categories.${category}`)}
            </button>
          ))}
        </div>
      </div>
      <div className="container mx-auto">
        <div className="w-[93%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-10 lg:gap-y-20">
          {filteredDevelopments.map(
            ({ id, name, location, size, duration, image, link }) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ amount: 0.3 }}
                className="block"
              >
                <Link href={link} className="block">
                  <div className="cursor-pointer group">
                    {/* Image wrapper for zoom effect */}
                    <div className="overflow-hidden">
                      <Image
                        src={image}
                        alt={t(name)}
                        width={360}
                        height={500}
                        className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-125"
                      />
                    </div>
                    <h2 className="mt-6 !text-[24px] !leading-[30px] hover:underline">
                      {t(name)}
                    </h2>
                    <p className="p1 font-bold mt-2 hover:underline">
                      {t(location)}
                    </p>
                    <p className="p1 mt-2 hover:underline">{t(size)}</p>
                    <p className="p1 hover:underline">{t(duration)}</p>
                  </div>
                </Link>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
