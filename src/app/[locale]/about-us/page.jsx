import { bot } from "@/app/_icons/icons";
import AboutHero from "@/app/aboutComponents/AboutHero";
import Development from "@/app/aboutComponents/Development";
import ExploreSection from "@/app/aboutComponents/Explore";
import LuxurySection from "@/app/aboutComponents/Luxury";
// import Quote from "@/app/aboutComponents/Quote";
import Bot from "@/app/components/Bot";
import Footer from "@/app/components/Footer";
import React from "react";

const page = () => {
  return (
    <div>
      <AboutHero />
      <LuxurySection />
      <ExploreSection />
      <Development />
      {/* <Quote /> */}
      <Footer />
      <Bot />
    </div>
  );
};

export default page;
