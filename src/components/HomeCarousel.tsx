"use client";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useWindowSize from "@/hooks/useWindowSize";
const carouselItem = [
  {
    heading: "News one",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis adipisci aliquam eaque, ipsa facere ea ducimus quo blanditiis qui ad, modi exercitationem esse enim et atque, pariatur asperiores consectetur vitae!",
    link: "#",
  },
  {
    heading: "News two",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis adipisci aliquam eaque, ipsa facere ea ducimus quo blanditiis qui ad, modi exercitationem esse enim et atque, pariatur asperiores consectetur vitae!",
    link: "#",
  },
  {
    heading: "News three",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis adipisci aliquam eaque, ipsa facere ea ducimus quo blanditiis qui ad, modi exercitationem esse enim et atque, pariatur asperiores consectetur vitae!",
    link: "#",
  },
  {
    heading: "News four",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis adipisci aliquam eaque, ipsa facere ea ducimus quo blanditiis qui ad, modi exercitationem esse enim et atque, pariatur asperiores consectetur vitae!",
    link: "#",
  },
  {
    heading: "News five",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis adipisci aliquam eaque, ipsa facere ea ducimus quo blanditiis qui ad, modi exercitationem esse enim et atque, pariatur asperiores consectetur vitae!",
    link: "#",
  },
];

const HomeCarousel = () => {
  const { windowSize } = useWindowSize();
  return (
    <Carousel
      showArrows={false}
      infiniteLoop
      interval={3000}
      autoPlay
      emulateTouch
      showThumbs={false}
      showStatus={false}
      stopOnHover={true}
      centerMode={windowSize.width! >= 780}
      centerSlidePercentage={50}
    >
      {carouselItem.map((item, index) => {
        return (
          <div
            className={` ${
              windowSize.width! >= 780 ? "border-l-2" : ""
            } border-slate-200 h-[calc(70vh-4rem)] md:h-[calc(70vh-4rem)] flex  flex-col justify-center gap-6 pt-8 pl-7 `}
            key={index}
          >
            <h1 className="w-[90%] max-w-lg text-left text-[30px] uppercase font-extrabold">
              {item.heading}
            </h1>
            <p className="w-[90%] max-w-xl text-left">{item.content}</p>
          </div>
        );
      })}
    </Carousel>
  );
};

export default HomeCarousel;
