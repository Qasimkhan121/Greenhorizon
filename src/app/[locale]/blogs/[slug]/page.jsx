// import React from "react";
// import { notFound } from "next/navigation";
// import { unstable_setRequestLocale } from "next-intl/server";
// import { strapiUrl } from "@/app/utils/utils";
// import Footer from "@/app/components/Footer";
// import Navbar from "@/app/components/Navbar";
// import BlogForm from "@/app/blogComponents/BlogForm";
// import Image from "next/image";
// import { imageVectorWhite } from "@/app/_icons/icons";

// const extractImageUrl = (htmlContent) => {
//   const match = htmlContent.match(/<img[^>]+src=["']([^"']+)["']/);
//   return match ? match[1] : null;
// };

// const Page = async ({ params }) => {
//   let { locale } = await params;
//   let { slug } = await params;
//   unstable_setRequestLocale(locale);

//   let blogData = null;

//   try {
//     const currentTime = new Date().getTime();
//     let url = `${strapiUrl}/api/blogs?locale=${locale}&filters[slug][$eq]=${slug}&ts=${currentTime}`;

//     const { data } = await fetch(url).then((res) => res.json());
//     blogData = data?.[0]?.attributes;
//     blogData.blogData = blogData.blogData.replaceAll(
//       'rel="noopener noreferrer"',
//       'rel="nofollow"'
//     );
//   } catch (error) {
//     blogData = null;
//   }

//   if (!blogData) {
//     notFound();
//   }

//   const heroImage = extractImageUrl(blogData.blogData);
//   const removeImagesFromHTML = (htmlContent) => {
//     return htmlContent.replace(/<img[^>]*>/g, "");
//   };

//   return (
//     <>
//       <div className="relative top-0 z-0">
//         <section className="relative w-full h-screen">
//           <div className="absolute inset-0">
//             {heroImage ? (
//               <Image
//                 src={heroImage}
//                 alt={blogData.title || "Blog Hero Image"}
//                 fill
//                 quality={100}
//                 priority
//                 className="object-cover object-top"
//               />
//             ) : (
//               <div className="w-full h-full bg-gray"></div>
//             )}
//           </div>

//           <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-green/100 to-transparent"></div>

//           <Navbar />

//           <div className="absolute inset-x-0 bottom-10 flex flex-col items-center justify-center text-white text-center px-4">
//             <div className="flex justify-center mb-4 lg:mb-8">
//               {imageVectorWhite}
//             </div>
//             <h1 className="text-[40px] leading-[57px] lg:!text-[56px] lg:!leading-[60px] lg:!font-normal uppercase mb-4 2xl:mb-8">
//               {blogData?.title}
//             </h1>
//           </div>
//         </section>

//         <div className="blog-section2  pt-10">
//           <div className=" mx-auto">
//             <div className="grid grid-cols-1  gap-0 lg:gap-10">
//               <div
//                 className="container py-20 mx-auto text-center"
//                 dangerouslySetInnerHTML={{
//                   __html: blogData?.blogData
//                     ? removeImagesFromHTML(blogData.blogData)
//                     : "",
//                 }}
//               ></div>
//             </div>

//             <BlogForm />
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Page;
import React from "react";
import { notFound } from "next/navigation";
import { unstable_setRequestLocale } from "next-intl/server";
import { strapiUrl } from "@/app/utils/utils";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import BlogForm from "@/app/blogComponents/BlogForm";
import Image from "next/image";

const extractImageUrl = (htmlContent) => {
  const match = htmlContent.match(/<img[^>]+src=["']([^"']+)["']/);
  return match ? match[1] : null;
};

const Page = async ({ params }) => {
  let { locale } = await params;
  let { slug } = await params;
  unstable_setRequestLocale(locale);

  let blogData = null;

  try {
    const currentTime = new Date().getTime();
    let url = `${strapiUrl}/api/blogs?locale=${locale}&filters[slug][$eq]=${slug}&ts=${currentTime}`;

    const { data } = await fetch(url).then((res) => res.json());
    blogData = data?.[0]?.attributes;
    blogData.blogData = blogData.blogData.replaceAll(
      'rel="noopener noreferrer"',
      'rel="nofollow"'
    );
  } catch (error) {
    blogData = null;
  }

  if (!blogData) {
    notFound();
  }

  const heroImage = extractImageUrl(blogData.blogData);
  const removeImagesFromHTML = (htmlContent) => {
    return htmlContent.replace(/<img[^>]*>/g, "");
  };
  const cleanHTML = (htmlContent) => {
    return htmlContent
      .replace(/<p>(&nbsp;|\s)*<\/p>/g, "")
      .replace(/<img[^>]*>/g, "");
  };

  return (
    <>
      <div className="relative w-full h-[100px]">
        <Navbar />
        <div className="absolute inset-x-0 bottom-0 h-full z-[-1] bg-green w-full flex flex-col items-center justify-end text-white text-center px-4"></div>
      </div>

      <div className="bg-green">
        <div className="container mx-auto  py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 ">
            <div className="lg:col-span-8 space-y-6">
              {heroImage && (
                <Image
                  src={heroImage}
                  alt={blogData.title || "Blog Image"}
                  width={800}
                  height={450}
                />
              )}

              <h1 className="text-[32px] lg:text-[40px] font-semibold text-white leading-tight">
                {blogData?.title}
              </h1>
              <p className="p1 font-semibold text-white leading-tight">
                {blogData?.description}
              </p>

              <div className="blog-section2">
                <div className=" mx-auto">
                  <div className="grid grid-cols-1  gap-0 lg:gap-10">
                    <div
                      className="text-white leading-7 text-lg"
                      dangerouslySetInnerHTML={{
                        __html: blogData?.blogData
                          ? removeImagesFromHTML(cleanHTML(blogData.blogData))
                          : "",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Form (Right) */}
            <div className="lg:col-span-4 ">
              <BlogForm />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Page;
