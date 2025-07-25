import Image from "next/image";
import exampleImage from "@/images/quote/chairman.png";
import { quotes, quotes2 } from "../_icons/icons";
import { useTranslations } from "next-intl";

const Quote = () => {
  const t = useTranslations("Quote");
  return (
    <section className="relative bg-black pt-20 pb-14 lg:py-12">
      <div className="max-w-[1920px] mx-auto gap-8 flex flex-col  items-center justify-center relative">
        <div className="relative">
          <Image
            src={exampleImage}
            alt="Example Image"
            width={468}
            height={505}
            className="object-cover grayscale"
          />
          <div className="absolute bottom-0  w-full bg-gradient-to-t  from-[#131313] via-[#131313]/65 to-transparent h-20"></div>
        </div>

        <div className="text-white text-center container flex justify-center flex-col items-center w-full  ">
          <div className="-mt-8 mb-3"> {quotes2}</div>
          <h2 className="lg:hidden tracking-[1px] mb-4 uppercase !text-[18px] !leading-[26px] ">
            {t("title2")}
          </h2>
          <h2 className="hidden lg:block mb-4 uppercase tracking-[1px] w-[55%]">
            {t("title2")}
          </h2>
          <p className="p1 tracking-[1px] mb-6 w-[75%] lg:w-[60%]">
            {t("para2")}
          </p>
          <h4>
            {t("name")} <br />
            {t("job")}
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Quote;
