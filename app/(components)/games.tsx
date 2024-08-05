"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { Button } from "@radix-ui/themes";
import { RxOpenInNewWindow } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Games = () => {
  const container = useRef(null);
  useGSAP(() => {
    const t1 = gsap.timeline();
    gsap.set(container.current, {
      bottom: 0,
      width: 9,
      height: 9,
      transformOrigin: "bottom",
    });
    t1.to(container.current, {
      bottom: "15%",
      width: "20%",
      height: "60%",
      ease: "power2.in",
    }).to(
      container.current,
      {
        position: "static",
        width: "90%",
        height: "90%",
        ease: "power2.out",
      },
      "-=.3"
    );
  });
  return (
    <div className=" flex justify-center  items-end h-screen pb-28  relative p-0 m-0">
      <div className=" grid grid-cols-10 grid-rows-6  gap-4" ref={container}>
        <div className="  flex gap-3 p-2 pl-4 col-span-1 row-span-3">
          <div className=" w-5 h-5 border border-white rounded-full cursor-pointer bg-[#FF1D25]"></div>
          <div className=" w-5 h-5 border border-white rounded-full cursor-pointer bg-[#FF931E]"></div>
          <div className=" w-5 h-5 border border-white rounded-full cursor-pointer bg-[#8CC63F]"></div>
        </div>
        <div className=" col-span-3 row-span-3 "></div>
        <div className=" col-span-3 row-span-4 "></div>
        <div className=" col-span-3 row-span-2 "></div>
        <div className=" col-span-3 row-span-3 "></div>
        <div className=" col-span-4 row-span-3 "></div>
        <div className=" col-span-3 row-span-2 "></div>
        <div className=" col-span-3 row-span-1 "></div>
      </div>
    </div>
  );
};

export default Games;
