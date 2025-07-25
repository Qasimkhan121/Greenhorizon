"use client";
import React, { useState } from "react";
import FormComp from "./FormComp";
import { useTranslations } from "next-intl";
import { rightArrowWhite } from "../_icons/icons";

const PopupForm = () => {
  const t = useTranslations("Form");
  const [load, setLoad] = useState(false);
  return (
    <div>
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
    </div>
  );
};

export default PopupForm;
