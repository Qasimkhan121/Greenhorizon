"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { strapiUrl } from "../utils/utils";
import { rightArrowWhite } from "../_icons/icons";
import img from "@/images/blogs/noImage.webp";

const BlogCard = ({ blogData, locale }) => {
  if (!Array.isArray(blogData) || blogData.length === 0) {
    return <p className="text-white">No blogs available.</p>;
  }

  const reversedArticles = [...blogData].reverse();

  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
      {reversedArticles.map((i, index) => {
        const item = i?.attributes || {};

        let imageUrl = img;

        if (item?.thumbnail?.data?.attributes?.formats?.medium?.url) {
          imageUrl = `${strapiUrl}${item.thumbnail.data.attributes.formats.medium.url}`;
        } else {
          const blogDataMatch = item?.blogData?.match(/<img.*?src="(.*?)"/);
          if (blogDataMatch && blogDataMatch[1]) {
            imageUrl = blogDataMatch[1];
          }
        }

        const imageAlt =
          item?.thumbnail?.data?.attributes?.alternativeText || "Blog Image";

        return (
          <motion.div
            key={i.id || index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ amount: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link
              prefetch={false}
              href={`/${locale}/blogs/${item.slug}`}
              className="block"
            >
              <div className="relative">
                <motion.div
                  className="relative overflow-hidden cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    className="w-full transition-transform duration-300 ease-linear transform hover:scale-110"
                    src={imageUrl}
                    width={245}
                    height={139}
                    alt={imageAlt}
                    priority
                  />
                </motion.div>
                <div className="pt-8 pb-10">
                  <h3 className="text-white mb-6 uppercase">{item.title}</h3>
                  <button className="borderBtn btn !py-3 items-center inline-flex gap-2">
                    Read More
                    <span className="hover:text-green">{rightArrowWhite}</span>
                  </button>
                </div>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
};

export default BlogCard;
