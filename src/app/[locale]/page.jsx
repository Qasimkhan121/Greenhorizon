import React, { Suspense } from "react";
import HeroSection from "@/app/components/Hero";
import LuxurySection from "@/app/components/Luxury";
import Slider from "@/app/components/Slider";
import Developments from "@/app/components/Developments";
import ExploreSection from "@/app/components/Explore";
import Communities from "@/app/components/Communities";
// import Quote from "@/app/components/Quote";
// import Announcement from "@/app/components/Announcement";
import WorkWIthUs from "@/app/components/WorkWIthUs";
import Footer from "@/app/components/Footer";
import Contact from "../components/Contact";
import Bot from "../components/Bot";
import LegacyOfLuxury from "../components/LegacyOfLuxury";
import LatestBlogs from "../blogComponents/LatestBlogs";

const page = () => {
  return (
    <main className="w-full">
      <HeroSection />
      <LuxurySection />
      <Slider />
      <LegacyOfLuxury />
      <Developments />
      <ExploreSection />
      <Communities />

      {/* <Quote /> */}
      {/* <Announcement /> */}
      <Contact />
      <Suspense>
        <LatestBlogs />
      </Suspense>
      <WorkWIthUs />

      <Footer />
      <Bot />
    </main>
  );
};

export default page;
