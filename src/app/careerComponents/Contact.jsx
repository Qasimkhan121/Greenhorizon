"use client";
import React, { useState } from "react";
import { rightArrowWhite } from "../_icons/icons";
import { useTranslations } from "next-intl";
import CareerForm from "./CareerForm";

const Contact = () => {
  const [load, setLoad] = useState(false);
  const t = useTranslations("Form");
  return (
    <div className="bg-green">
      <div className="container mx-auto flex gap-4 flex-col items-center justify-center pt-10 pb-10 lg:py-28">
        <h4 className="tracking-[1px] uppercase text-white">{t("title1")} </h4>
        <h2 className="tracking-[1px] text-white">{t("title2")}</h2>

        <div className="w-[90%] lg:w-[80%] xl:w-[70%] mx-auto space-y-10 text-center my-6">
          <CareerForm
            formName={"bottomForm"}
            setLoad={setLoad}
            type={"light"}
          />

          <label
            htmlFor="bottomForm-submit"
            tabIndex="0"
            className={`goldBtn  relative w-[60%]  lg:w-[25%] text-base lg:text-[20px] font-heading tracking-[2px] flex  items-center justify-center !h-[55px] text-center mx-auto ${
              load ? "cursor-not-allowed" : ""
            }`}
          >
            {load ? (
              t("submitting")
            ) : (
              <>
                <span className="">{t("submit")} </span>
                <span className="absolute right-6"> {rightArrowWhite}</span>
              </>
            )}
          </label>
        </div>
      </div>
    </div>
  );
};

export default Contact;
