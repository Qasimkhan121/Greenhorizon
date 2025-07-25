import Link from "next/link";
import { call, carbonTime, email, location } from "../_icons/icons";
import { useTranslations } from "next-intl";

const Location = () => {
  const t = useTranslations("Contact");
  return (
    <section className="bg-[#0E2D21] text-white py-16  ">
      <h4 className="text-center text-gold uppercase tracking-[1px]">
        {t("label")}
      </h4>
      <h2 className="text-center  mt-2">
        {t("locationTitle1")} <br /> {t("locationTitle2")}
      </h2>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 mt-20 ">
        <div className="relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.488048178539!2d55.2807294!3d25.2204818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43f80077cb13%3A0xfc221566ffd02e71!2sMillennium%20Plaza%20Downtown%20Hotel!5e0!3m2!1sen!2sin!4v1740569190982!5m2!1sen!2sin"
            className="w-full h-[286px] lg:h-[452px] grayscale"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <Link
            href="https://www.google.com/maps/place/Millennium+Plaza+Downtown+Hotel/@25.2204818,55.2807294,15z/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="absolute inset-0 bg-transparent cursor-pointer"></div>
          </Link>
        </div>

        <div className="space-y-10 text-center lg:text-start">
          <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-start lg:items-start space-x-4">
            {location}
            <div>
              <h3 className="">{t("officeAddress")}</h3>
              <p className="p1 tracking-[1px]">
                {/* {t("officeAddressData1")} <br /> */}
                {t("officeAddressData2")} <br />
                {t("officeAddressData3")} <br />
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-start lg:items-start space-x-4">
            {call}
            <div>
              <h3 className="">{t("callUs")}</h3>
              <p className="p1 tracking-[1px]">
                <Link href="tel:+971582264311">+971 58 226 4311</Link>
              </p>
              {/* <p className="p1 tracking-[1px]">
                800 Imtiaz (468 429) - {t("emailData")}
              </p> */}
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-start lg:items-start space-x-4">
            {email}
            <div>
              <h3 className="">{t("emailUs")}</h3>
              <p className="p1 tracking-[1px]">
                <Link href="mailto:Info@ghorizon.ae">Info@ghorizon.ae</Link>
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start space-x-4">
            {carbonTime}
            <div>
              <h3 className="">{t("workingHours")}</h3>
              <p className="p1 tracking-[1px]">
                {t("workingHoursData1")} <br /> {t("workingHoursData2")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
