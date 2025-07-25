// import Image from "next/image";

// import Navbar from "@/app/components/Navbar";
// import { imageVectorWhite } from "@/app/_icons/icons";

// const SunsetBayHero = ({ data, bgBanner, bgBannerMob }) => {
//   return (
//     <section className="relative w-full h-[72vh] lg:h-screen ">
//       <div className="hidden lg:block absolute inset-0">
//         <Image
//           src={bgBanner}
//           alt="Hero Background"
//           fill
//           quality={100}
//           priority
//           className="object-cover object-center"
//         />
//       </div>
//       <div className="lg:hidden absolute inset-0">
//         <Image
//           src={bgBannerMob}
//           alt="Hero Background"
//           fill
//           priority
//           className="object-cover object-center"
//         />
//       </div>

//       <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-green/100 to-transparent"></div>

//       <Navbar />

//       <div className="absolute inset-x-0 bottom-10   flex flex-col items-center justify-center text-white text-center px-4">
//         <div className="flex justify-center mb-4 lg:mb-8">
//           {imageVectorWhite}
//         </div>
//         <h1 className="  mb-4 2xl:mb-8">{data}</h1>
//       </div>
//     </section>
//   );
// };

// export default SunsetBayHero;

"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import { imageVectorWhite } from "@/app/_icons/icons";

const SunsetBayHero = ({ data, bgBanner, bgBannerMob }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative w-full h-[72vh] lg:h-screen">
      <Image
        src={isMobile ? bgBannerMob : bgBanner}
        alt="Hero Background"
        fill
        quality={100}
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-green/100 to-transparent"></div>

      <Navbar />

      <div className="absolute inset-x-0 bottom-10 flex flex-col items-center justify-center text-white text-center px-4">
        <div className="flex justify-center mb-4 lg:mb-8">
          {imageVectorWhite}
        </div>
        <h1 className="mb-4 2xl:mb-8">{data}</h1>
      </div>
    </section>
  );
};

export default SunsetBayHero;
