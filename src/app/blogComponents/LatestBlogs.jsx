"use client";
import React, { useEffect, useState } from "react";
import BlogSliderNew from "./BlogSliderNew";
import { strapiUrl } from "../utils/utils";
import { useLocale } from "next-intl";
import img from "@/images/blogs/noImage.webp";

const LatestBlogs = () => {
  const locale = useLocale();
  const [modData, setModData] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const currentTime = new Date().getTime();
        let url = `${strapiUrl}/api/blogs?locale=${locale}&pagination[page]=1&pagination[pageSize]=200&ts=${currentTime}&populate=*`;
        const res = await fetch(url);
        const data = await res.json();

        const formattedData = data?.data?.map((item) => {
          const blogDataContent = item.attributes.blogData;
          let imageUrl = "";

          const imageMatch = blogDataContent?.match(
            /<img\s+src=["']([^"']+)["']/
          );
          if (imageMatch) {
            imageUrl = imageMatch[1];
          }

          return {
            title: item.attributes.title,
            description: item.attributes.description,
            thumbnail: imageUrl || img,
            publishedAt: item.attributes.publishedAt,
            slug: item.attributes.slug,
          };
        });

        setModData(formattedData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, [locale]);

  return (
    <>
      {modData.length ? (
        <section className="newsUpdate bg-gold py-16 lg:py-20">
          <div className="container mx-auto">
            <h2 className="text-center text-green uppercase">Latest Blogs</h2>
          </div>
          <div className="container pt-5 md:pt-14 mx-auto">
            <BlogSliderNew loc={locale} modData={modData} />
          </div>
        </section>
      ) : null}
    </>
  );
};

export default LatestBlogs;
