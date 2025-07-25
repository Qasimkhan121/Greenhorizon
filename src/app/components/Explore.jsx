"use client";
import { motion } from "framer-motion";
import {
  clock,
  icon360,
  imageVector,
  register,
  videoCall,
} from "../_icons/icons";
import { useTranslations } from "next-intl";
import { useState, Suspense } from "react";
import Popup from "./Popup";

const exploreOptions = [
  {
    icon: icon360,
    title: "Try3DTour.title",
    desc: "Try3DTour.desc",
  },
  {
    icon: clock,
    title: "BookViewing.title",
    desc: "BookViewing.desc",
  },
  {
    icon: videoCall,
    title: "SalesVideoCall.title",
    desc: "SalesVideoCall.desc",
  },
  {
    icon: register,
    title: "RegisterInterest.title",
    desc: "RegisterInterest.desc",
  },
];

const ExploreSection = () => {
  const t = useTranslations("ExploreSection");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <section className="py-14 lg:pb-20 lg:pt-16 bg-white container mx-auto text-center">
      <h2 className="my-6 uppercase">
        {t("title1")} <br className="hidden lg:block" />
        {t("title2")}
      </h2>

      <motion.div
        className="grid lg:grid-cols-4 justify-center gap-8 lg:pt-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 0.2,
              duration: 0.8,
              ease: "easeOut",
            },
          },
        }}
      >
        {exploreOptions.map((option, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center cursor-pointer"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            onClick={handleOpenPopup} // Open popup when card is clicked
          >
            <div className="group flex flex-col items-center text-center">
              <motion.div className="relative w-64 h-64 xl:w-72 xl:h-72 mb-4 border-gray border-2 flex justify-center flex-col items-center border-dashed rounded-full group-hover:bg-green group-hover:text-white transition-colors duration-300">
                <div className="mb-4 text-black group-hover:text-white">
                  {option.icon}
                </div>
                <h3 className="mb-2">{t(option.title)}</h3>
                <p className="p2 w-[70%] text-gray group-hover:text-white whitespace-pre-line">
                  {t(option.desc)}
                </p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <Suspense>
        <Popup isOpen={isPopupOpen} onClose={handleClosePopup} />
      </Suspense>
    </section>
  );
};

export default ExploreSection;
