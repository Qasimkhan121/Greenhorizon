"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { leftArrow, rightArrow, rightArrowWhite } from "../_icons/icons";

const BlogSliderNew = ({ loc, modData }) => {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="relative px-4">
      <Slider ref={sliderRef} {...settings}>
        {modData.map((item, index) => (
          <div key={index} className="px-4">
            <Link href={`/${loc}/blogs/${item.slug}`} className="block">
              <div className="relative z-0  overflow-hidden">
                <div className="relative overflow-hidden cursor-pointer">
                  <Image
                    className="w-full transition-transform duration-300 ease-linear transform hover:scale-110"
                    src={item.thumbnail}
                    width={245}
                    height={139}
                    alt="News image"
                    priority
                  />
                </div>
                <div className="w-full h-full flex items-end p-3">
                  <div>
                    <h3 className=" text-black mb-2 line-clamp-2 uppercase">
                      {item.title}
                    </h3>
                    <p className=" p1 text-green uppercase inline-flex items-center gap-2">
                      Read More{" "}
                      <span className="hover:text-green">
                        {rightArrowWhite}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>

      <div className="flex justify-center lg:mt-4 gap-6">
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className=" z-10 "
        >
          {leftArrow}
        </button>
        <button
          onClick={() => sliderRef.current?.slickNext()}
          className=" z-10 "
        >
          {rightArrow}
        </button>
      </div>
    </section>
  );
};

export default BlogSliderNew;
