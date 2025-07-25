import Image from "next/image";

import img1 from "@/images/communities/1.jpeg";
import img2 from "@/images/communities/2.jpg";
import img3 from "@/images/communities/3.jpg";
import img4 from "@/images/communities/4.jpg";
import { useTranslations } from "next-intl";

const exploreOptions = [
  {
    icon: img1,
    title: "JVC",
  },
  {
    icon: img2,
    title: "JumeirahGardenCity",
  },
  {
    icon: img3,
    title: "DubaiLand",
  },
  {
    icon: img4,
    title: "DubaiIsland",
  },
];

const Communities = () => {
  const t = useTranslations("Communities");
  return (
    <section className="pt-16 lg:pt-20 bg-gold text-center w-full lg:w-full mx-auto">
      <h2 className="mb-4 uppercase w-[93%] mx-auto">{t("title")}</h2>
      <p className="text-[16px] leading-[20px] w-[93%] mx-auto">
        {t("description")}
      </p>
      <div className="hidden lg:grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 mt-10 max-w-[1920px] mx-auto">
        {exploreOptions.map(({ icon, title }, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center relative w-full overflow-hidden group"
          >
            <div className="relative w-full h-64 md:h-80 lg:h-[640px]">
              <Image
                src={icon}
                alt={t(title)}
                fill
                className="absolute inset-0 object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-125"
              />
              <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center justify-center pb-4">
                <h3 className="text-white uppercase">{t(title)}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex lg:hidden mt-10 overflow-x-auto scrollbar-hide sm:hidden pl-3 pb-16">
        {exploreOptions.map(({ icon, title }, index) => (
          <div
            key={index}
            className="flex-shrink-0 h-[640px] w-[372px] relative overflow-hidden group"
          >
            <h2 className="absolute inset-x-0 bottom-10 z-20 text-white text-center p-2 uppercase">
              {t(title)}
            </h2>
            <Image
              src={icon}
              fill
              alt={t(title)}
              className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-125"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Communities;
