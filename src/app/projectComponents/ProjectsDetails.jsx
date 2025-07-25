import Image from "next/image";

import img1 from "@/images/projects/sunsetBay/projectsIcon/1.png";
import img2 from "@/images/projects/sunsetBay/projectsIcon/2.png";
import img3 from "@/images/projects/sunsetBay/projectsIcon/3.png";
import img4 from "@/images/projects/sunsetBay/projectsIcon/4.png";

const data = ({ data }) => {
  const exploreOptions = [
    {
      icon: img1,
      title: data.detail1.title,
      desc: data.detail1.desc,
    },
    {
      icon: img2,
      title: data.detail2.title,
      desc: data.detail2.desc,
    },
    {
      icon: img3,
      title: data.detail3.title,
      desc: data.detail3.desc,
    },
    {
      icon: img4,
      title: data.detail4.title,
      desc: data.detail4.desc,
    },
  ];

  return (
    <section className="pt-8 pb-24 lg:pt-16 bg-green">
      <div className="container mx-auto text-center">
        <h4 className="my-6 uppercase text-gold">{data.label}</h4>
        <div className="grid lg:grid-cols-4 justify-center gap-10 pt-2 lg:pt-20">
          {exploreOptions.map(({ icon, title, desc }, index) => (
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
                <h4
                  className={`mb-2 uppercase ${
                    index === 1 ? "text-white" : "text-gold"
                  }`}
                >
                  {title}
                </h4>

                {desc ? (
                  <h4
                    className={`uppercase ${
                      index === 1 ? "text-gold" : "text-white"
                    }`}
                  >
                    {desc}
                  </h4>
                ) : (
                  <>
                    <h4 className="mb-2 text-white uppercase">
                      {data.detail4.title1} <br />
                      {data.detail4.title2} <br />
                      {data.detail4.title3}
                    </h4>
                    <h4 className="text-gold uppercase">
                      {data.detail4.title4}
                    </h4>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* <div className="grid justify-center pt-10 lg:pt-20 w-[80%] lg:w-[30%] mx-auto">
          <div className="relative flex justify-center flex-col items-center">
            <div className="mb-4 w-[55px] lg:w-[76px]">
              <Image
                src={img4}
                alt="Logo"
                width={74}
                height={76}
                priority
                className="w-full"
              />
            </div>

            <h4 className="text-gold uppercase">{data.detail4.title4}</h4>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default data;
