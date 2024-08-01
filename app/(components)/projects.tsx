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
const Projects = () => {
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
        width: "100%",
        height: "70%",
        ease: "power2.out",
      },
      "-=.3"
    );
  });
  return (
    <div className="  w-screen h-screen relative p-0 m-0 pb-20 flex justify-center items-center">
      <Swiper
        effect={"coverflow"}
        spaceBetween={50}
        grabCursor={true}
        centerInsufficientSlides={true}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper-container absolute flex justify-center items-center"
        ref={container}
      >
        <SwiperSlide>
          <div className=" w-full h-full  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100 rounded-2xl p-5 text-white">
            <div className=" grid grid-cols-2 grid-rows-1 w-full h-1/2 gap-5">
              <div className=" col-span-1 self-center ">
                <h1 className=" text-6xl font-bold mb-10">PROJECT1</h1>
                <div className=" flex gap-5">
                  <Button
                    color="gray"
                    variant="outline"
                    size={"3"}
                    highContrast
                  >
                    Code <FaGithub />
                  </Button>
                  <Button size={"3"}>
                    Preview <RxOpenInNewWindow />
                  </Button>
                </div>
              </div>
              <div className=" col-span-1 bg-blue-400"></div>
            </div>
            <p className=" mt-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
              dolore tempora repellat dignissimos voluptatem. Atque dolorum
              nobis eligendi fuga nesciunt!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full h-full  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100 rounded-2xl"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full h-full  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100 rounded-2xl"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full h-full  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100 rounded-2xl"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Projects;
