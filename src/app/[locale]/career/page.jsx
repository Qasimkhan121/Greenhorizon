import { bot } from "@/app/_icons/icons";
import Advantages from "@/app/careerComponents/Advantages";
import Contact from "@/app/careerComponents/Contact";
import HeroSection from "@/app/careerComponents/Hero";
import LuxurySection from "@/app/careerComponents/Luxury";
import Bot from "@/app/components/Bot";
import Footer from "@/app/components/Footer";

import React from "react";

const page = () => {
  return (
    <div>
      <HeroSection />
      <LuxurySection />
      <Advantages />
      <Contact />
      <Footer />
      <Bot />
    </div>
  );
};

export default page;
