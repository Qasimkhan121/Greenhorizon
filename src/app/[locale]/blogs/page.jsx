import React from "react";
import { unstable_setRequestLocale } from "next-intl/server";

import Footer from "@/app/components/Footer";
import BlogCard from "@/app/blogComponents/BlogCard";
import { strapiUrl } from "@/app/utils/utils";
import Navbar from "@/app/components/Navbar";
import { imageVectorWhite } from "@/app/_icons/icons";
import hero from "@/images/blogs/bg.jpg";
import Image from "next/image";

export const dynamic = "force-static";

const Page = async ({ params }) => {
  let { locale } = await params;

  unstable_setRequestLocale(locale);

  const currentTime = new Date().getTime();

  let blogData = [];

  try {
    let url = `${strapiUrl}/api/blogs?locale=${locale}&pagination[page]=1&pagination[pageSize]=200&ts=${currentTime}&populate=*`;

    const res = await fetch(url).then((res) => res.json());
    blogData = res?.data;
    console.log("strapiUrl:", strapiUrl);
    console.log(
      "Final URL:",
      `${strapiUrl}/api/blogs?locale=${locale}&pagination[page]=1&pagination[pageSize]=200&ts=${currentTime}&populate=*`
    );
  } catch (error) {
    blogData = [];
  }

  return (
    <>
      <section className="relative  bg-green  z-0">
        <div className="relative w-full h-screen">
          <div className=" absolute inset-0">
            <Image
              src={hero}
              alt="Hero Background"
              fill
              quality={100}
              priority
              className="object-cover object-top"
            />
          </div>

          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-green/100 to-transparent"></div>

          <Navbar />

          <div className="absolute inset-x-0 bottom-10   flex flex-col items-center justify-center text-white text-center px-4">
            <div className="flex justify-center mb-4 lg:mb-8">
              {imageVectorWhite}
            </div>
            <h1 className="  lg:!font-normal uppercase mb-4 2xl:mb-8">Blogs</h1>
          </div>
        </div>
        {/* <Breadcrum
          PervCrum={"text-white opacity-60"}
          FirstCrum={"Blogs"}
          FirstSlug={`/${loc}/blog`}
        /> */}
        <section className="lg:py-28 py-10 bg-green" id="newsSection">
          <div className="container mx-auto">
            <BlogCard blogData={blogData} locale={locale} />
          </div>
        </section>
      </section>
      <div className="relative z-0 ">
        <Footer />
      </div>
    </>
  );
};

export async function generateStaticParams() {
  try {
    const res = await fetch("https://api.vercel.app/blogs");

    if (!res.ok) {
      console.error("Failed to fetch blogs:", res.status, res.statusText);
      return [];
    }

    const text = await res.text();

    let posts;
    try {
      posts = JSON.parse(text);
    } catch (error) {
      console.error("Invalid JSON response:", text);
      return [];
    }

    return posts.map((post) => ({
      id: String(post.id),
    }));
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

export default Page;
