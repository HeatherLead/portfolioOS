"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { Button } from "@radix-ui/themes";
import { RxOpenInNewWindow } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
import { Space_Mono } from "next/font/google";
import { Screen } from "./mail";
import { useBaseAnimations } from "@/hooks/useBaseAnimations";
import useDragger from "@/hooks/useDragger";
import Image from "next/image";
const space_mono = Space_Mono({
  weight: "400",
  subsets: ["latin"],
});
enum State {
  About,
  Contact,
  Games,
  Mail,
  Projects,
}

interface ProjectsProps {
  handleIconClick: (state: State) => void;
}

const Projects = ({ handleIconClick }: ProjectsProps) => {
  const t1Ref = useRef<GSAPTimeline | null>(null);
  const [screenWidth, setScreenWidth] = useState(Screen.min);

  useBaseAnimations({
    id: "project",
    screenWidth,
    t1Ref,
  });

  const closeWindow = () => {
    if (t1Ref.current) {
      t1Ref.current.reverse().then(() => {
        handleIconClick(State.Projects);
      });
    }
  };

  useDragger("project");
  return (
    <div className=" w-screen h-screen overflow-hidden m-0 p-0  flex justify-center items-center ">
      <div
        id="project"
        className="bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 z-20 rounded-xl border border-white  w-full h-full overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="bar flex gap-3 p-5">
          <div
            onClick={closeWindow}
            className=" w-5 h-5 border border-white rounded-full cursor-pointer bg-[#FF1D25]"
          ></div>
          <div
            onClick={() => {
              setScreenWidth(Screen.min);
            }}
            className=" w-5 h-5 border border-white rounded-full cursor-pointer bg-[#FF931E]"
          ></div>
          <div
            onClick={() => {
              setScreenWidth(Screen.max);
            }}
            className=" w-5 h-5 border border-white rounded-full cursor-pointer bg-[#8CC63F]"
          ></div>
        </div>
        <Swiper
          effect={"coverflow"}
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
          className="swiper-container flex justify-center items-center absolute overflow-hidden w-full h-[70%]  "
          id="project"
        >
          <SwiperSlide>
            <div className=" w-full h-full  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100 rounded-2xl p-5 text-white">
              <div className=" grid grid-cols-2 grid-rows-1 w-full h-1/2 gap-5">
                <div className=" col-span-1 self-center ">
                  <h1 className=" text-5xl font-bold mb-10">VEX</h1>
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
                <img
                  src="/assets/vex.png"
                  alt="vexImage"
                  className="col-span-1 object-cover aspect-[4/3]"
                />
              </div>
              <p className={` mt-3 ${space_mono.className}`}>
                Developed Vex, a collaborative online whiteboard application
                inspired by Miro. Designed and implemented real-time
                collaboration features, allowing multiple users to create, edit,
                and share visual content seamlessly.
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
    </div>
  );
};

export default Projects;
