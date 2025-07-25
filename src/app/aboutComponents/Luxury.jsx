import Image from "next/image";
import bgImage from "@/images/about/bg.png";
import logo from "../../../public/logo.svg";
import { useTranslations } from "next-intl";
import aim from "@/images/about/aim.svg";
import eye from "@/images/about/eye.svg";

const LuxurySection = () => {
  const t = useTranslations("About.Luxury");

  return (
    <>
      <section className="relative pt-20 bg-green text-white">
        <div className="w-full relative flex flex-col  ">
          <div className="container mx-auto flex flex-col lg:ml-40 z-10 lg:w-[70%]  xl:w-[60%] 2xl:w-[50%] space-y-4 lg:space-y-6 overflow-hidden w-full">
            <h4 className="uppercase text-[#EFE8DC]">{t("label")}</h4>

            <h2 className=" font-medium inline-flex lg:flex-col items-start uppercase">
              {t("title1")} <br className="hidden lg:block" /> {t("title2")}
            </h2>

            <div className="pl-8 lg:pl-32  space-y-6 ">
              <p className="p1">{t("para1")}</p>
              <p className="p1">{t("para2")}</p>
              <p className="p1 pb-4">{t("para3")}</p>
            </div>
          </div>

          <div className="relative lg:mt-16">
            <div className="hidden lg:relative lg:flex ml-auto w-full lg:w-[70%] lg:h-[1071px]">
              <Image
                src={bgImage}
                alt="Luxury Living"
                fill
                className="object-cover"
              />
            </div>
            <div className=" relative lg:absolute lg:inset-0 lg:top-16">
              <div className="lg:flex justify-center flex-col gap-10 items-center hidden ">
                <Image src={logo} alt="Logo" width={119} height={57} />
                <h2 className="uppercase">{t("title4")}</h2>
              </div>
              <div className="container mx-auto py-20">
                <div className="grid lg:grid-cols-2 w-full xl:w-[80%] 2xl:w-[78%] gap-8 xl:px-6 lg:pl-4 ">
                  <div className="border border-gray py-6 lg:py-8   lg:gap-8 px-6 pr-8 lg:px-10 bg-green flex justify-between flex-col lg:translate-y-[40%]">
                    <div className="flex justify-end">
                      <div className=" lg:hidden">
                        <Image
                          src={aim}
                          alt="aim icon"
                          width={70}
                          height={70}
                        />
                      </div>
                      <div className=" hidden lg:block">
                        <Image
                          src={aim}
                          alt="aim icon"
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h2>{t("ourMission")} </h2>
                      <p className="text-[#939393]">{t("ourMissionDisc1")}</p>
                      <p className="text-[#939393]">{t("ourMissionDisc2")}</p>
                    </div>
                  </div>
                  <div className="border border-gray py-6 lg:py-8 lg:mb-6 lg:gap-8 px-6 pr-8 lg:px-6  bg-green flex justify-between flex-col ">
                    <div className="flex justify-end">
                      <div className="hidden lg:block">
                        <Image
                          src={eye}
                          alt="eye icon"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="lg:hidden">
                        <Image
                          src={eye}
                          alt="eye icon"
                          width={70}
                          height={70}
                        />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h2>{t("ourVision")}</h2>
                      <p className="text-[#939393]">{t("ourVisionDisc1")}</p>
                      <p className="text-[#939393]">{t("ourVisionDisc2")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="lg:hidden lg:relative w-full lg:w-[70%] ">
            <Image
              src={bgImage}
              alt="Luxury Living"
              width={423}
              height={346}
              className="w-full "
            />
          </div> */}
        </div>
      </section>
    </>
  );
};

export default LuxurySection;
