import Image from "next/image";
import bgImage from "@/images/career/luxury.png";

import { useTranslations } from "next-intl";

const LuxurySection = () => {
  const t = useTranslations("Career.Luxury");

  return (
    <>
      <section className="relative pt-14 lg:pt-0 bg-green text-white">
        <div className="w-full relative flex flex-col justify-end lg:flex-row items-center">
          <div className="container lg:pl-28 top-20 lg:absolute z-10  lg:w-full space-y-4 lg:space-y-6 overflow-hidden w-full">
            <h4 className="uppercase text-gold text-center"> {t("label")} </h4>

            <h2 className=" font-medium  text-center uppercase">
              {t("title")}
            </h2>

            <div className="space-y-10 w-[95%] lg:w-[45%]">
              <p className="p1 pt-4 lg:pt-20 tracking-[1px] font-light">
                {t("para1")}
              </p>
            </div>
          </div>

          <div className="hidden lg:block lg:relative w-full lg:w-[590px] lg:h-[579px]">
            <Image
              src={bgImage}
              alt="Luxury Living"
              fill
              className="rounded-lg object-cover"
            />
            <div className="absolute bottom-0 hidden lg:block h-full bg-gradient-to-r  from-green/80  to-transparent w-[5%]"></div>
          </div>
          <div className=" lg:hidden relative -mt-8 w-full lg:w-[70%] ">
            <Image
              src={bgImage}
              alt="Luxury Living"
              width={423}
              height={346}
              className="w-full "
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default LuxurySection;
