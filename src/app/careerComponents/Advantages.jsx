import Image from "next/image";

import img1 from "@/images/career/advantages/1.svg";
import img2 from "@/images/career/advantages/2.svg";
import img3 from "@/images/career/advantages/3.svg";
import img4 from "@/images/career/advantages/4.svg";
import img5 from "@/images/career/advantages/5.svg";
import { useTranslations } from "next-intl";

const AdvantagesData1 = [
  {
    icon: img1,
    title: "advantage1",
  },
  {
    icon: img2,
    title: "advantage2",
  },
  {
    icon: img3,
    title: "advantage3",
  },
];
const AdvantagesData2 = [
  {
    icon: img4,
    title: "advantage4",
  },
  {
    icon: img5,
    title: "advantage5",
  },
];

const Advantages = () => {
  const t = useTranslations("Career.Advantages");
  return (
    <section className="pt-8 pb-24 lg:pt-10 bg-green">
      <div className="container mx-auto text-center">
        <h4 className="my-6 uppercase text-gold">{t("label")}</h4>
        <h2 className=" font-medium  text-center uppercase text-white">
          {t("title1")} <br />
          {t("title2")}
        </h2>
        <div className="grid lg:grid-cols-3 justify-center gap-10 pt-16 lg:pt-20">
          {AdvantagesData1.map(({ icon, title }, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center relative"
            >
              <div className="relative flex justify-center flex-col items-center">
                <div className="mb-4 w-[55px] lg:w-[76px]">
                  <Image
                    src={icon}
                    alt="icon"
                    width={74}
                    height={76}
                    priority
                    className="w-full"
                  />
                </div>
                <h4 className={`mb-2 uppercase text-white`}>{t(title)}</h4>
              </div>
            </div>
          ))}
        </div>
        <div className="grid lg:grid-cols-2 justify-center gap-10 pt-10 lg:pt-28 w-[80%] mx-auto">
          {AdvantagesData2.map(({ icon, title }, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center relative"
            >
              <div className="relative flex justify-center flex-col items-center">
                <div className="mb-4 w-[55px] lg:w-[76px]">
                  <Image
                    src={icon}
                    alt="icon"
                    width={74}
                    height={76}
                    priority
                    className="w-full"
                  />
                </div>
                <h4 className={`mb-2 uppercase text-white`}>{t(title)}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
