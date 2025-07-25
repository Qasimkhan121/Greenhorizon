"use client";
import Image from "next/image";

import logo from "../../../public/logo.svg";
import { useParams } from "next/navigation";

const ProjectOverview = ({ data }) => {
  const params = useParams();

  const isSunsetBay = ["Sunset-Bay-2", "Sunset-Bay"].includes(params?.slug);
  return (
    <section className="relative w-full lg:h-screen flex flex-col py-6 lg:pb-0 lg:pt-8  lg:items-end bg-green ">
      <div
        className={`hidden lg:block absolute inset-0 w-full  ${
          isSunsetBay ? "lg:w-[70%]" : "lg:w-[45%]"
        }`}
      >
        <Image
          src={data.image}
          alt="Overview image"
          fill
          className=" object-cover bg-gradient-to-t from-green via-green/60 to-transparent"
        />
      </div>
      <h4 className="lg:hidden uppercase trackng-[1px] lg:text-center text-gold  w-[93%]  lg:w-full mx-auto">
        {data.label}
      </h4>
      <h2 className=" mt-4 -mb-10 uppercase lg:hidden text-white w-[93%] lg:w-full mx-auto">
        {data.title}
      </h2>
      <div className="lg:hidden relative inset-0 w-full pt-10">
        <Image
          src={data.image}
          alt="Overview image"
          width={600}
          height={400}
          className={`  h-[300px] object-cover object-left ${
            isSunsetBay ? "w-[100%]" : "w-[70%] "
          }`}
        />
      </div>
      <div className="relative z-10 w-full lg:w-[70%] xl:w-[64%] text-start text-white px-6 lg:pl-28">
        <h4 className="hidden lg:block uppercase trackng-[1px]  text-gold  w-[93%]  lg:w-full mx-auto">
          {data.label}
        </h4>
        <h2 className=" mt-8 uppercase hidden lg:block"> {data.title}</h2>

        <div className="w-[75%] lg:w-[90%] xl:w-[85%] mt-4 lg:mt-12 lg:pl-20 xl:pl-28 ml-auto lg:ml-0">
          <p className="text-xs leading-[18px] lg:text-base lg:leading-6 tracking-[1px] ">
            {" "}
            {data.para}
          </p>

          <div className="hidden lg:block">
            <Image
              src={logo}
              alt="Logo"
              width={150}
              height={66}
              priority
              className="my-14 mx-auto"
            />
          </div>
          <div className="lg:hidden">
            <Image
              src={logo}
              alt="Logo"
              width={69}
              height={31}
              priority
              className="my-4 mx-auto"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-2 lg:flex justify-center items-center w-full hidden ">
        <h4 className="tracking-[1px] uppercase text-gold mx-auto">
          {data.label2}
        </h4>
      </div>
    </section>
  );
};

export default ProjectOverview;
