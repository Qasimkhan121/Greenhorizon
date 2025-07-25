import Image from "next/image";
import img1 from "@/images/announcement/1.png";
import img2 from "@/images/announcement/2.png";
import img3 from "@/images/announcement/3.png";
import { useTranslations } from "next-intl";

const exploreOptions = [
  // {
  //   icon: img1,
  //   title: "1.title",
  //   locationTime: "1.locationTime",
  // },
  {
    icon: img2,
    title: "2.title",
    locationTime: "2.locationTime",
  },
  // {
  //   icon: img3,
  //   title: "3.title",
  //   locationTime: "3.locationTime",
  // },
];

const Announcement = () => {
  const t = useTranslations("ExploreOptions");
  return (
    <section className="py-20 bg-white text-center">
      <h4 className="uppercase">{t("title")}</h4>
      <h2 className=" mt-2 lg:mt-4 uppercase">
        {t("desc1")}
        <br className="hidden lg:block" />
        {t("desc2")}
      </h2>

      <div className="grid  container mx-auto mt-10 lg:mt-14 gap-12 lg:gap-14">
        {exploreOptions.map(({ icon, title, locationTime }, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-start sm:items-start text-start relative w-full"
          >
            <div className="relative w-full sm:w-[40%] h-64 sm:h-80 md:h-[266px]">
              <Image
                src={icon}
                alt={t(title)}
                fill
                className="absolute inset-0 object-cover"
              />
            </div>
            <div className="w-full sm:w-[70%] py-6 lg:py-0 lg:pl-20 flex flex-col justify-start items-start">
              <p className="text-sm leading-[30px] text-gray">
                {t(locationTime)}
              </p>
              <h3 className="mt-2 lg:mt-3">{t(title)}</h3>
              <button
                className="border-b border-black btn uppercase mt-6 lg:mt-8"
                aria-label={t("readMore")}
              >
                {t("readMore")}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Announcement;
