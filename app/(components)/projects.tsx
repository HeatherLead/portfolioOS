"use client";
import React, { useRef, useState } from "react";
import { Space_Mono, Poppins } from "next/font/google";
import { Screen } from "./mail";
import { useBaseAnimations } from "@/hooks/useBaseAnimations";
import useDragger from "@/hooks/useDragger";
import Image from "next/image";
import Sidebar from "./sidebar";

const space_mono = Space_Mono({
  weight: "400",
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: "700",
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

  useDragger("projectBar", "project");
  return (
    <div className=" w-screen h-screen overflow-hidden m-0 p-0  flex justify-center items-center ">
      <div
        id="project"
        className="z-20 border border-white   rounded-xl   w-full h-full overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          id="projectBar"
          className="bar flex gap-3 p-5  hover:bg-gray-400  hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-md hover:bg-opacity-20 transition-all duration-100 hover:cursor-grab "
        >
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
        <div className="grid grid-cols-3 w-full h-full">
          <div className=" col-span-1 bg-[#f7f7f7]">
            <Sidebar />
          </div>
          <div className=" col-span-2 bg-gradient-to-r from-white to-neutral-200 border-b-0 bg-transparent p-5 relative">
            <h1 className={`text-4xl font-bold mb-5 ${poppins.className}`}>
              Projects
            </h1>
            <div className="w-full h-[74%] lg:absolute -left-20 grid grid-cols-6 grid-rows-4 gap-5 p-5">
              <Image
                src="/assets/vexElement.png"
                width={400}
                height={400}
                className=" w-full rounded shadow-md shadow-gray-400 object-cover col-span-2 row-span-2"
                alt=""
              />

              <Image
                src="/assets/movieAi.png"
                width={400}
                height={400}
                className=" w-full rounded shadow-md shadow-gray-400 aspect-square object-cover col-span-1"
                alt=""
              />
              <Image
                src="/assets/posterShop.png"
                width={400}
                height={0}
                className=" w-full rounded shadow-md shadow-gray-400 object-cover col-span-3 row-span-2 "
                alt=""
              />
              <Image
                src="/assets/issueTracker.png"
                width={400}
                height={400}
                className=" w-full rounded shadow-md shadow-gray-400 object-cover col-span-3 row-span-2"
                alt=""
              />
              <Image
                src="/assets/housieCover.png"
                width={250}
                height={40}
                className=" w-full rounded shadow-md shadow-gray-400 aspect-[4/3] object-cover col-span-2 row-span-2"
                alt=""
              />
              <Image
                src="/assets/task.png"
                width={400}
                height={400}
                className=" w-full rounded shadow-md shadow-gray-400 aspect-[9/15]  object-contain  col-span-1"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
