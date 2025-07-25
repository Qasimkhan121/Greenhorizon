import Image from "next/image";

const Amineties = ({ data }) => {
  const exploreOptions = [
    {
      icon: data.image1,
      title: data.Amenity1,
    },
    {
      icon: data.image2,
      title: data.Amenity2,
    },
    {
      icon: data.image3,
      title: data.Amenity3,
    },
    {
      icon: data.image4,
      title: data.Amenity4,
    },
    {
      icon: data.image5,
      title: data.Amenity5,
    },
    {
      icon: data.image6,
      title: data.Amenity6,
    },
    {
      icon: data.image7,
      title: data.Amenity7,
    },
    {
      icon: data.image8,
      title: data.Amenity8,
    },
  ];
  return (
    <>
      <section className="relative w-full h-[600px] lg:h-[900px]">
        <div className="hidden lg:block absolute inset-0">
          <Image
            src={data.mainImage}
            alt="Hero Background"
            fill
            quality={100}
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="lg:hidden absolute inset-0">
          <Image
            src={data.mainImage}
            alt="Hero Background"
            fill
            quality={100}
            priority
            className="object-cover"
          />
        </div>

        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-green/100 to-transparent"></div>

        <div className="hidden absolute inset-x-0 bottom-6   lg:flex flex-col items-center justify-center text-white text-center px-4">
          <h4 className="  mb-6 text-gold tracking-[1px]">{data.label}</h4>
        </div>
      </section>
      <section className=" pt-10 lg:pt-4 pb-20 lg:pb-32 bg-green ">
        <div className="container mx-auto text-center">
          <h4 className="lg:hidden  mb-4 text-gold tracking-[1px]">
            {data.label}
          </h4>
          <h2 className="uppercase text-white">
            {data.title1}
            <br />
            {data.title2}
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 justify-center lg:gap-y-16 gap-10 pt-10 lg:pt-14">
            {exploreOptions.map(({ icon, title }, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center relative"
              >
                <div className="relative flex justify-center flex-col items-center ">
                  <div className="mb-4 w-[74px] h-[76px]">
                    <Image
                      src={icon}
                      alt="Logo"
                      width={74}
                      height={76}
                      priority
                    />
                  </div>
                  <h4 className={`mb-2 uppercase text-white `}>{title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Amineties;
