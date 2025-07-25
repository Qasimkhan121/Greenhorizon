"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import FormComp from "../components/FormComp";
import { rightArrowWhite } from "../_icons/icons";

const BlogForm = () => {
  const [load, setLoad] = useState(false);
  const t = useTranslations("Form");
  return (
    <div className="bg-green">
      <div className="w-full  mx-auto flex gap-4 flex-col items-center justify-center pt-20 pb-10 lg:py-10 border border-white lg:p-6">
        {/* <h4 className="tracking-[1px] uppercase text-gold">{t("title1")} </h4> */}
        <h3 className=" text-white tracking-[1px] uppercase">{t("title2")}</h3>

        <div className="w-[90%] lg:w-full mx-auto space-y-10 text-center my-6">
          <FormComp formName={"blogForm"} setLoad={setLoad} type={"light"} />

          <label
            htmlFor="blogForm-submit"
            tabIndex="0"
            className={`goldBtn  relative w-full  text-base lg:text-[20px] font-heading tracking-[2px] flex  items-center justify-center !h-[55px] text-center mx-auto ${
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

export default BlogForm;
