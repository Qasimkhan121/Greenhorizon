"use client";
import React, { Suspense, useState } from "react";
import Popup from "./Popup";
import { bot, enquiry } from "../_icons/icons";

const Bot = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleRequestDemoClick = () => {
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set("showPopup", "true");
    window.history.pushState({}, "", currentUrl.toString());
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.delete("showPopup");
    window.history.pushState({}, "", currentUrl.toString());
    setIsPopupOpen(false);
  };
  return (
    <div className="whatsAppIcon relative">
      <a
        id="waLink"
        href="https://wa.me/+971582264311?text=Hi%2C%20I%20want%20to%20learn%20more%20about%20GREEN%20HORIZON"
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className="border-y border-l rounded-l-full border-white pr-9 py-2 pl-9 bg-white/10 backdrop-blur-xs">
          {bot}
        </div>
      </a>

      <button
        className="border-y border-l rounded-l-full border-white pr-9 py-2 pl-9 bg-white/10 backdrop-blur-xs mt-2"
        rel="noopener noreferrer"
        target="_blank"
        onClick={handleRequestDemoClick}
      >
        <span>{enquiry}</span>
      </button>

      <Suspense>
        <Popup isOpen={isPopupOpen} onClose={handleClosePopup} />
      </Suspense>
    </div>
  );
};

export default Bot;
