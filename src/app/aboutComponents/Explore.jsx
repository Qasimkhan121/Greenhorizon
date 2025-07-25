import Image from "next/image";
import {
  aboutFour,
  aboutOne,
  aboutThree,
  aboutTwo,
  imageVector,
} from "../_icons/icons";

import { useTranslations } from "next-intl";

const exploreOptions = [
  {
    icon: aboutOne,
    title: "item1.title",
    title2: "item1.title2",
    desc: "item1.desc",
  },
  {
    icon: aboutTwo,
    title: "item2.title",
    title2: "item2.title2",
    desc: "item2.desc",
  },
  {
    icon: aboutThree,
    title: "item3.title",
    title2: "item3.title2",
    desc: "item3.desc",
  },
  {
    icon: aboutFour,
    title: "item4.title",
    title2: "item4.title2",
    desc: "item4.desc",
  },
];

const ExploreSection = () => {
  const t = useTranslations("About.ExploreSection");
  return (
    <section className=" pt-14 pb-40 lg:pt-20 lg:pb-[16rem] bg-white w-full  mx-auto text-center relative">
      <div className="flex justify-center">{imageVector}</div>
      <h2 className="mb-10 mt-6 uppercase">
        {t("title1")} <br /> {t("title2")}
      </h2>

      <div className="grid lg:grid-cols-2 xl:grid-cols-4 justify-center gap-8 container mx-auto">
        {exploreOptions.map(({ icon, title, desc, title2 }, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center relative"
          >
            {/* <div className="group flex flex-col items-center text-center relative">
              <div className="relative w-64 h-64 xl:w-72 xl:h-72 mb-4 border-gray border flex justify-center flex-col items-center border-dashed rounded-full group-hover:bg-green group-hover:text-white transition-colors duration-300">
                <div className="h-[77px] w-[77px] rounded-full flex justify-center items-center bg-[#E7EAE9]">
                  <div className="mb-4 text-black group-hover:text-white ">
                    {icon}
                  </div>
                </div>
                <h3 className="mb-2">
             
                  {t(title)} <br /> {t(title2)}
                </h3>
                <p className="p2 w-[70%] text-gray group-hover:text-white whitespace-pre-line">
                  {t(desc)}
                </p>
              </div>
            </div> */}
            <div className="group flex flex-col items-center text-center relative">
              <div className="relative w-64 h-64 xl:w-72 xl:h-72 mb-4 border-gray border flex justify-center flex-col items-center border-dashed rounded-full group-hover:bg-green group-hover:text-white transition-colors duration-300">
                <div className="mb-4 text-black group-hover:text-white rounded-full flex justify-center items-center">
                  <span>{icon}</span>
                </div>
                <h3 className="mb-2">
                  {t(title)} <br /> {t(title2)}
                </h3>
                <p className="p2 w-[70%] text-gray group-hover:text-white whitespace-pre-line">
                  {t(desc)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 w-full flex flex-col items-center justify-center h-[5%] lg:h-1/4 bg-gradient-to-t from-[#EFE8DC] via-[#EFE8DCA6]/65 to-transparent"></div>
    </section>
  );
};

export default ExploreSection;
