"use client";
import React, { useState } from "react";
import FormComp from "./FormComp";
import { rightArrowWhite } from "../_icons/icons";
import { useTranslations } from "next-intl";

const Contact = () => {
  const [load, setLoad] = useState(false);
  const t = useTranslations("Form");
  return (
    <div className="bg-white ">
      <div className="container mx-auto flex gap-4 flex-col items-center justify-center py-28 lg:py-48">
        <h4 className="tracking-[1px] uppercase text-green">{t("title1")} </h4>
        <h2 className="tracking-[1px] text-green">{t("title2")}</h2>

        <div className="w-full lg:w-[80%] xl:w-[70%] mx-auto space-y-6 text-center my-6">
          <FormComp formName={"bottomForm"} setLoad={setLoad} />

          <label
            htmlFor="bottomForm-submit"
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
                <span className="absolute right-[28px]">
                  {" "}
                  {rightArrowWhite}
                </span>
              </>
            )}
          </label>
        </div>
      </div>
    </div>
  );
};

export default Contact;
