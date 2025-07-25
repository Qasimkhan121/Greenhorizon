// import { imageVectorWhite } from "@/app/_icons/icons";
// import Footer from "@/app/components/Footer";
// import Navbar from "@/app/components/Navbar";
// import React from "react";

// const CookiePolicy = () => {
//   return (
//     <main className="w-full">
//       <div className="relative w-full h-[400px]">
//         <Navbar />
//         <div className="absolute inset-x-0 bottom-0 h-full z-[-1] bg-green w-full  flex flex-col items-center justify-end text-white text-center px-4">
//           <div className="flex justify-center mb-4 lg:mb-8">
//             {imageVectorWhite}
//           </div>
//           <h1 className="text-[40px] leading-[57px]   lg:!text-[56px] lg:!leading-[60px]  lg:!font-normal lg:uppercase mb-4 2xl:mb-8">
//             Cookie Policy
//           </h1>
//         </div>
//       </div>
//       <div className="container mx-auto pb-6 pt-10 lg:pt-20">
//         <section className="mb-6">
//           <h3 className="mb-2">1. Introduction</h3>
//           <p className="p2">
//             Welcome to Green Horizon Real Estate Development LLC ("we," "our,"
//             "us"). We are committed to safeguarding your privacy and ensuring
//             that your personal data is protected. This Cookie Policy explains
//             how we use cookies and similar technologies on our website{" "}
//             <a href="https://ghorizon.ae/" className="text-blue-500 underline">
//               https://ghorizon.ae/
//             </a>{" "}
//             ("Website"). By accessing or using our Website, you consent to the
//             use of cookies as described in this policy.
//           </p>
//         </section>

//         <section className="mb-6">
//           <h3 className=" mb-2">2. What Are Cookies?</h3>
//           <p className="p2">
//             Cookies are small text files that are placed on your device
//             (computer, smartphone, tablet) when you visit a website. They are
//             widely used to make websites work efficiently, as well as to provide
//             information to the site owners.
//           </p>
//         </section>

//         <section className="mb-6">
//           <h3 className="mb-2">3. Types of Cookies We Use</h3>
//           <ul className="list-disc pl-6 p2">
//             <li>
//               <strong>Strictly Necessary Cookies:</strong> Essential for the
//               operation of our Website.
//             </li>
//             <li>
//               <strong>Performance Cookies:</strong> Collect information about
//               how visitors use our Website.
//             </li>
//             <li>
//               <strong>Functionality Cookies:</strong> Allow our Website to
//               remember choices you make.
//             </li>
//             <li>
//               <strong>Advertising Cookies:</strong> Deliver advertisements that
//               are more relevant to you.
//             </li>
//           </ul>
//         </section>

//         <section className="mb-6">
//           <h3 className=" mb-2">4. Third-Party Cookies</h3>
//           <p className="p2">
//             We may allow third-party service providers to place cookies on your
//             device for analytics and advertising purposes. We do not control
//             these third-party cookies.
//           </p>
//         </section>

//         <section className="mb-6">
//           <h3 className=" mb-2">5. How to Manage Cookies</h3>
//           <p className="p2">
//             You have the right to accept or reject cookies. Most web browsers
//             automatically accept cookies, but you can modify your browser
//             settings to decline them.
//           </p>
//           <ul className="list-disc pl-6 p2">
//             <li>Google Chrome</li>
//             <li>Mozilla Firefox</li>
//             <li>Safari</li>
//             <li>Microsoft Edge</li>
//           </ul>
//         </section>

//         <section className="mb-6">
//           <h3 className="mb-2">6. Changes to This Cookie Policy</h3>
//           <p className="p2">
//             We may update this Cookie Policy from time to time. We encourage you
//             to review this policy periodically.
//           </p>
//         </section>

//         <section className="mb-6">
//           <h3 className=" mb-2">7. Contact Us</h3>
//           <p className="p2">If you have any questions, please contact us at:</p>

//           <address className="not-italic p2">
//             <strong>Green Horizon Real Estate Development LLC</strong>
//             <br />
//             Floor 5, Office 501, Millennium Executive Tower
//             <br />
//             Sheikh Zayed Road, Dubai, UAE
//             <br />
//             Phone:{" "}
//             <a href="tel:+971582264311" className="text-blue-600">
//               +971 58 226 4311
//             </a>
//             <br />
//             Email:{" "}
//             <a href="mailto:info@ghorizon.ae" className="text-blue-600">
//               info@ghorizon.ae
//             </a>
//           </address>
//         </section>
//       </div>
//       <Footer />
//     </main>
//   );
// };

// export default CookiePolicy;
import { imageVectorWhite } from "@/app/_icons/icons";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { useTranslations } from "next-intl";
import React from "react";

const CookiePolicy = () => {
  const t = useTranslations("CookiePolicy");

  return (
    <main className="w-full">
      <div className="relative w-full h-[400px]">
        <Navbar />
        <div className="absolute inset-x-0 bottom-0 h-full z-[-1] bg-green w-full flex flex-col items-center justify-end text-white text-center px-4">
          <div className="flex justify-center mb-4 lg:mb-8">
            {imageVectorWhite}
          </div>
          <h1 className="text-[40px] leading-[57px] lg:!text-[56px] lg:!leading-[60px] lg:!font-normal lg:uppercase mb-4 2xl:mb-8">
            {t("title")}
          </h1>
        </div>
      </div>
      <div className="container mx-auto pb-20 pt-10 lg:pt-20">
        <section className="mb-6">
          <h3 className="mb-2">{t("section1.title")}</h3>
          <p className="p2">
            {t("section1.description")}{" "}
            <a href="https://ghorizon.ae/" className="text-blue-500 underline">
              https://ghorizon.ae/
            </a>{" "}
            {t("section1.description2")}
          </p>
        </section>

        <section className="mb-6">
          <h3 className="mb-2">{t("section2.title")}</h3>
          <p className="p2">{t("section2.description")}</p>
        </section>

        <section className="mb-6">
          <h3 className="mb-2">{t("section3.title")}</h3>
          <ul className="list-disc pl-6 p2">
            <li>
              <strong>{t("section3.strictlyNecessary")}</strong>:{" "}
              {t("section3.strictlyNecessaryDesc")}
            </li>
            <li>
              <strong>{t("section3.performance")}</strong>:{" "}
              {t("section3.performanceDesc")}
            </li>
            <li>
              <strong>{t("section3.functionality")}</strong>:{" "}
              {t("section3.functionalityDesc")}
            </li>
            <li>
              <strong>{t("section3.advertising")}</strong>:{" "}
              {t("section3.advertisingDesc")}
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="mb-2">{t("section4.title")}</h3>
          <p className="p2">{t("section4.description")}</p>
        </section>

        <section className="mb-6">
          <h3 className="mb-2">{t("section5.title")}</h3>
          <p className="p2">{t("section5.description")}</p>
          <ul className="list-disc pl-6 p2">
            <li>{t("section5.browsers.chrome")}</li>
            <li>{t("section5.browsers.firefox")}</li>
            <li>{t("section5.browsers.safari")}</li>
            <li>{t("section5.browsers.edge")}</li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="mb-2">{t("section6.title")}</h3>
          <p className="p2">{t("section6.description")}</p>
        </section>

        <section className="mb-6">
          <h3 className="mb-2">{t("section7.title")}</h3>
          <p className="p2">{t("section7.description")}</p>

          <address className="not-italic p2">
            <strong>{t("contact.name")}</strong>
            <br />
            {t("contact.address")}
            <br />
            {t("contact.city")}
            <br />
            {t("contact.phone")}{" "}
            <a href="tel:+971582264311" className="text-blue-600">
              +971 58 226 4311
            </a>
            <br />
            {t("contact.email")}{" "}
            <a href="mailto:info@ghorizon.ae" className="text-blue-600">
              info@ghorizon.ae
            </a>
          </address>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default CookiePolicy;
