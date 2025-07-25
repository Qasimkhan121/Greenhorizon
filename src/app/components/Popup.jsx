// "use client";
// import React, { useState, useEffect } from "react";
// import { useSearchParams, useRouter } from "next/navigation";
// import { cross, rightArrowWhite } from "../_icons/icons";
// import FormComp from "./FormComp";
// import { useTranslations } from "next-intl";

// const Popup = () => {
//   const t = useTranslations("Form");
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const [popup, setPopup] = useState(false);
//   const [load, setLoad] = useState(false);

//   useEffect(() => {
//     const showPopup = searchParams.get("showPopup") === "true";
//     setPopup(showPopup);
//     console.log("popup--", popup);

//     if (showPopup) {
//       document.body.classList.add("overflow-hidden");
//     } else {
//       document.body.classList.remove("overflow-hidden");
//     }

//     return () => {
//       document.body.classList.remove("overflow-hidden");
//     };
//   }, [searchParams]);

//   const closePopup = () => {
//     setPopup(false);
//     document.body.classList.remove("overflow-hidden");

//     const currentParams = new URLSearchParams(window.location.search);
//     currentParams.delete("showPopup");

//     router.replace("?" + currentParams.toString(), { scroll: false });
//   };

//   return (
//     popup && (
//       <div className="fixed z-[1000001] inset-0 flex justify-center items-center bg-black bg-opacity-50">
//         <div className="w-full lg:w-[63%] max-w-6xl bg-white rounded-[20px] px-6 lg:px-10 py-8 lg:py-6 2xl:py-16 relative">
//           <button
//             onClick={closePopup}
//             className="absolute top-8 right-8 text-green flex items-center gap-2 text-xl text-buttonText"
//           >
//             X
//           </button>

//           <div className="py-4">
//             <h4 className="tracking-[1px] uppercase text-center text-green">
//               {t("title1")}
//             </h4>
//             <h2 className="tracking-[1px] my-2 lg:my-2 text-center text-green">
//               {t("title2")}
//             </h2>
//           </div>
//           <FormComp formName={"popupForm"} setLoad={setLoad} />

//           <label
//             htmlFor="popupForm-submit"
//             tabIndex="0"
//             className={` mt-10 relative  w-[60%]  lg:w-[25%]  text-base lg:text-[20px] font-heading tracking-[2px]  greenBtn  flex  items-center justify-center !h-[55px] text-center mx-auto ${
//               load ? "cursor-not-allowed" : ""
//             }`}
//           >
//             {load ? (
//               t("submitting")
//             ) : (
//               <>
//                 <span className="">{t("submit")} </span>
//                 <span className="absolute right-[28px]">
//                   {" "}
//                   {rightArrowWhite}
//                 </span>
//               </>
//             )}
//           </label>
//         </div>
//       </div>
//     )
//   );
// };

// export default Popup;

"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import FormComp from "./FormComp";
import { rightArrowWhite } from "../_icons/icons";

const Popup = ({ isOpen, onClose }) => {
  const t = useTranslations("Form");
  const [load, setLoad] = useState(false);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed z-[1000001] inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <motion.div
        className="w-full lg:w-[63%] max-w-6xl bg-white rounded-[20px] px-6 lg:px-10 py-8 lg:py-6 2xl:py-16 relative"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.3 }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
        >
          ✖
        </button>

        <div className="py-4">
          <h4 className="tracking-[1px] uppercase text-center text-green">
            {t("title1")}
          </h4>
          <h2 className="tracking-[1px] my-2 lg:my-2 text-center text-green">
            {t("title2")}
          </h2>
        </div>
        <FormComp formName={"popupForm"} setLoad={setLoad} />

        <label
          htmlFor="popupForm-submit"
          tabIndex="0"
          className={` mt-10 relative  w-[60%]  lg:w-[25%]  text-base lg:text-[20px] font-heading tracking-[2px]  greenBtn  flex  items-center justify-center !h-[55px] text-center mx-auto ${
            load ? "cursor-not-allowed" : ""
          }`}
        >
          {load ? (
            t("submitting")
          ) : (
            <>
              <span className="">{t("submit")} </span>
              <span className="absolute right-[28px]"> {rightArrowWhite}</span>
            </>
          )}
        </label>
      </motion.div>
    </div>
  );
};

export default Popup;
