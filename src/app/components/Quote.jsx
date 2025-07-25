import Image from "next/image";
import exampleImage from "@/images/quote/chairman.png";
import { quotes } from "../_icons/icons";
import { useTranslations } from "next-intl";

const Quote = () => {
  const t = useTranslations("Quote");
  return (
    <section className="relative bg-black lg:bg-gradient-to-r from-black via-[#343434] to-black pt-14 pb-20 lg:py-0   ">
      <div className="max-w-[1920px] mx-auto gap-8 flex flex-col lg:flex-row-reverse items-center justify-between ">
        <div className=" w-full lg:w-[40%] relative">
          <Image
            src={exampleImage}
            alt="Example Image"
            width={658}
            height={644}
            className="rounded-lg object-cover grayscale pt-6 lg:pt-14"
          />
          <div className="absolute bottom-0 lg:hidden w-full bg-gradient-to-t  from-[#131313] via-[#131313]/65 to-transparent h-20"></div>
        </div>
        <div className="text-white text-center lg:text-start container flex justify-center lg:items-start flex-col items-center w-full lg:w-[60%] lg:pl-20">
          <div className="lg:pl-2 mb-3"> {quotes}</div>
          <h2 className="lg:hidden tracking-[1px] mb-4 uppercase !text-[18px] !leading-[26px]">
            {t("title1")}
          </h2>
          <h2 className="hidden lg:block mb-4 uppercase tracking-[1px] ">
            {t("title1")}
          </h2>
          <p className="p1 tracking-[1px] mb-6">{t("para")}</p>
          <h4 className="">
            {t("name")} <br />
            {t("job")}
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Quote;
