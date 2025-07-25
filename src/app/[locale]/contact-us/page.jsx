import { bot } from "@/app/_icons/icons";
import Bot from "@/app/components/Bot";
import Footer from "@/app/components/Footer";
import Contact from "@/app/contactComponents/Contact";
import ContactHero from "@/app/contactComponents/ContactHero";
import Location from "@/app/contactComponents/Location";
import React from "react";

const page = () => {
  return (
    <div>
      <ContactHero />
      <Location />
      <Contact />
      <Footer />
      <Bot />
    </div>
  );
};

export default page;
