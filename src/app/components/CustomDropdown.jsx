"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";

const CustomDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const languages = [
    { code: "en", label: "EN" },
    { code: "ru", label: "RU" },
  ];

  const handleLanguageChange = (code) => {
    setIsOpen(false);

    const newPath = pathname.replace(/^\/[a-z]{2}/, `/${code}`);

    router.push(newPath);
  };

  return (
    <div className="relative z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="dropdown"
        className="bg-transparent text-white font-bold lg:px-3 py-1 flex items-center gap-2 p1"
      >
        {languages.find((lang) => lang.code === locale)?.label}
        <span className="text-xs">▼</span>
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-20 bg-white divide-y-2 text-black z-50 rounded-sm overflow-hidden">
          {languages.map((lang) => (
            <button
              aria-label="language"
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full px-4 py-2 p1 text-left ${
                lang.code === locale
                  ? "bg-green text-white"
                  : "bg-white text-black"
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
