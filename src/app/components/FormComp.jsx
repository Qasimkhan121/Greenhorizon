"use client";
import React, { useState, useEffect, useCallback } from "react";
import PhoneInput from "react-phone-input-2";
import "../phone.css";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { getVisitorAPIInfo, getCountryCode, addForm } from "../utils/utils";

function FormComp({ formName, setLoad, styles = {}, type }) {
  const router = useRouter();
  const t = useTranslations("Form");
  const pathname = usePathname();
  const locale = useLocale();
  const isBlogPage = pathname.startsWith(`/${locale}/blogs/`);

  const initState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    note: "",
    agreeToTerms: false,
    formName,
  };

  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState(initState);
  const [countryCodeISO, setCountryCodeISO] = useState("in");
  const [phoneData, setPhoneData] = useState();
  const [visitorInfo, setVisitorInfo] = useState("");

  useEffect(() => {
    getVisitorAPIInfo().then((data) => {
      const countryCode = data?.countryCode?.toLowerCase() || "in";
      const visitorNotes = data?.notes || "";

      setCountryCodeISO(countryCode);
      setVisitorInfo(visitorNotes);

      const countryData = getCountryCode(countryCode);
      if (countryData && countryData.dial_code) {
        setPhoneData({
          dialCode: countryData.dial_code.replace("+", ""),
        });
      }
    });
  }, []);

  useEffect(() => {
    let countryData = getCountryCode(countryCodeISO);
    if (countryData?.code) {
      setPhoneData({ dialCode: countryData.dial_code.replace("+", "") });
    }
  }, [countryCodeISO]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleTermsChange = useCallback(() => {
    setFormData((prev) => ({
      ...prev,
      agreeToTerms: !prev.agreeToTerms,
    }));
  }, []);

  const validate = (data = formData) => {
    const errors = {};

    if (!data.firstName.trim()) {
      errors.firstName = "First name is required.";
    }
    if (!data.lastName.trim()) {
      errors.lastName = "Last name is required.";
    }
    if (!data.email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is invalid.";
    }

    if (!data.phone.trim()) {
      errors.phone = "Contact number is required.";
    } else if (/\s/.test(data.phone)) {
      errors.phone = "Contact number cannot contain spaces.";
    }
    if (!data.agreeToTerms) {
      errors.agreeToTerms = "You must agree to the Terms and Privacy Policy.";
    }

    setFormErrors(errors);
    return errors;
  };

  // const onSubmit = async (e) => {
  //   e.preventDefault();

  //   const errors = validate();
  //   if (Object.keys(errors).length > 0) {
  //     return;
  //   }

  //   const obj = {
  //     note: visitorInfo,
  //     phoneData,
  //     countryCodeISO,
  //     firstName: formData.firstName,
  //     lastName: formData.lastName,
  //     email: formData.email,
  //     // mobile: `+${phoneData.dialCode}${formData.phone}`,
  //     mobile: `${formData.phone}`,
  //   };

  //   setLoad(true);

  //   try {
  //     // console.log("Submitting data:", obj);
  //     let doc = await addForm(obj);

  //     setLoad(false);
  //     if (doc?.ok) {
  //       setFormData(initState);
  //       router.push(`/${locale}/thankyou`);
  //     }
  //   } catch (error) {
  //     console.error("Error while submitting form", error);
  //     setLoad(false);
  //   }
  // };

  const onSubmit = async (e) => {
    e.preventDefault();

    const errors = validate();
    if (Object.keys(errors).length > 0) {
      return;
    }

    const obj = {
      note: visitorInfo,
      phoneData,
      countryCodeISO: countryCodeISO || phoneData?.countryCode || "",
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      mobile: `+${phoneData.dialCode}${formData.phone}`,
    };

    setLoad(true);

    try {
      let doc = await addForm(obj);
      setLoad(false);

      if (doc?.ok) {
        setFormData(initState);

        router.replace(`/${locale}/thankyou`);
      }
    } catch (error) {
      console.error("Error while submitting form", error);
      setLoad(false);
    }
  };

  return (
    <div
      id={"formName"}
      className={type === "light" ? "formComp2" : "formComp"}
    >
      <form
        method="get"
        name={formName}
        className="flex flex-col items-center w-full"
        onSubmit={onSubmit}
        noValidate
      >
        <div className="flex flex-col w-full gap-6">
          <div
            className={`grid gap-6 ${
              isBlogPage ? "grid-cols-1" : "lg:grid-cols-2"
            }`}
          >
            {/* <div className="grid lg:grid-cols-2 gap-6"> */}
            <div>
              <input
                className={`${styles.inputStyle || "inputStyle p1"} ${
                  type === "light" ? "peer" : ""
                }`}
                placeholder={t("firstname")}
                name="firstName"
                onChange={handleChange}
                required
                value={formData.firstName}
              />
              {formErrors.firstName && (
                <p className="text-red-500 text-start text-sm">
                  {formErrors.firstName}
                </p>
              )}
            </div>
            <div>
              <input
                className={`${styles.inputStyle || "inputStyle p1"} ${
                  type === "light" ? "peer" : ""
                }`}
                placeholder={t("lastname")}
                name="lastName"
                onChange={handleChange}
                required
                value={formData.lastName}
              />
              {formErrors.lastName && (
                <p className="text-red-500 text-start text-sm">
                  {formErrors.lastName}
                </p>
              )}
            </div>
          </div>

          <div
            className={`grid gap-6 ${
              isBlogPage ? "grid-cols-1" : "lg:grid-cols-2"
            }`}
            // className="grid lg:grid-cols-2 gap-6"
          >
            <div>
              <input
                className={`${styles.inputStyle || "inputStyle p1"} ${
                  type === "light" ? "peer" : ""
                }`}
                type="email"
                placeholder={t("email")}
                name="email"
                onChange={handleChange}
                required
                value={formData.email}
              />
              {formErrors.email && (
                <p className="text-red-500 text-start text-sm">
                  {formErrors.email}
                </p>
              )}
            </div>

            <div
              className={`${
                styles.phoneContainer || "flex flex-col w-full justify-between "
              }`}
              id="phoneField"
            >
              <div className="flex w-full justify-between">
                <div
                  className={`inputStyle !w-[35%] lg:!w-[40%] !font-body my-auto `}
                >
                  <PhoneInput
                    // enableSearch={true}
                    countryCodeEditable={true}
                    inputClass={`font-body ${type === "light" ? "peer" : ""}`}
                    autoFormat={true}
                    containerClass={"rti"}
                    inputStyle={{
                      height: "58px",
                      fontSize: "16px",
                      backgroundColor: "transparent",
                      lineHeight: "24px",
                      width: "100px",
                      borderRadius: "0",
                      margin: "0 0 auto",
                      color: type === "light" ? "#EFE8DC" : "#0E2E23",
                    }}
                    buttonStyle={{
                      backgroundColor: "transparent",
                      height: "58px",
                    }}
                    placeholder={"+91"}
                    inputProps={{
                      name: "deveot",
                      maxLength: 15,
                    }}
                    preferredCountries={[
                      "ae",
                      "in",
                      "uk",
                      "de",
                      "ru",
                      "sg",
                      "us",
                    ]}
                    country={countryCodeISO}
                    onChange={(value, data) => {
                      const countryCode = data?.countryCode || "";
                      setFormData((prev) => ({
                        ...prev,
                      }));
                      setPhoneData(data);
                      setCountryCodeISO(countryCode);
                    }}
                  />
                </div>

                <input
                  className={`ml-3 inputStyle placeholder:!text-[#B8AB92] tracking-[1px] p1 bg-red-400 ${
                    type === "light" ? "peer" : ""
                  }`}
                  type="tel"
                  placeholder="XXX XXX XXX"
                  name="phone"
                  id="phone"
                  value={formData.phone || ""}
                  onChange={(e) => {
                    setFormData((prev) => ({
                      ...prev,
                      phone: e.target.value,
                    }));
                  }}
                  required
                  maxLength={15}
                />
              </div>
              {formErrors.phone && (
                <p className="text-red-500 text-sm text-start">
                  {formErrors.phone}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex text-start lg:text-center items-center gap-2 mt-6">
          <div>
            <input
              type="checkbox"
              id="termsCheckbox"
              className="hidden peer"
              checked={formData.agreeToTerms}
              onChange={handleTermsChange}
              required
            />
            <span
              className={`w-6 h-6 flex items-center justify-center text-sm border border-green transition-all duration-200
                ${
                  formData.agreeToTerms
                    ? type === "light"
                      ? "bg-white text-green"
                      : "bg-transparent text-green"
                    : type === "light"
                    ? "bg-white text-green"
                    : "bg-transparent border-black text-green"
                }
                `}
              onClick={() =>
                handleTermsChange({
                  target: { checked: !formData.agreeToTerms },
                })
              }
            >
              {formData.agreeToTerms && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={4}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </span>
          </div>

          <label
            htmlFor="termsCheckbox"
            className={`p1 cursor-pointer !text-start ${
              type === "light" ? "text-white" : "text-green"
            }`}
          >
            {t("agreeText")}{" "}
            <Link href="#" className="hover:underline">
              {t("termsConditions")}
            </Link>{" "}
            {t("and")}{" "}
            <Link href="#" className="hover:underline">
              {t("privacyPolicy")}
            </Link>
          </label>
        </div>
        {formErrors.agreeToTerms && (
          <span className="text-red-500 text-sm text-start">
            {formErrors.agreeToTerms}
          </span>
        )}

        {/* <button
          type="submit"
          id={`${formName}-submit`}
          className="hidden"
          aria-label="submit button"
        ></button> */}
        <input type="submit" id={`${formName}-submit`} className="hidden" />
      </form>
    </div>
  );
}

export default FormComp;
