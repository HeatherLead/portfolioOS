"use client";
import React, { RefObject, useRef, useState } from "react";
import { Space_Mono, Poppins } from "next/font/google";
import { Screen } from "./mail";
import { useBaseAnimations } from "@/hooks/useBaseAnimations";
import useDragger from "@/hooks/useDragger";
import Image from "next/image";
import Sidebar from "./sidebar";
import { projectData } from "@/data/data";
import GameDetailComponent from "./gameDetailComponent";
import exp from "constants";

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
  Cv,
}
type ExpandType = {
  containerRef: RefObject<HTMLDivElement>;
  expanded: number | null;
  handleExpand: (index: number | null) => void;
  newComponentRef: RefObject<HTMLDivElement>;
};

type ImageProps = {
  src: string;
  colSpan: string;
  rowSpan: string;
  aspect?: string;
};

interface ProjectsProps {
  handleIconClick: (state: State) => void;
  handleProjectClick: (value: number) => void;
  zIndex: number;
  updateZIndex: (state: State) => void;
  expandedProps: ExpandType;
}

const Projects = ({
  handleIconClick,
  updateZIndex,
  zIndex,
  expandedProps,
  handleProjectClick,
}: ProjectsProps) => {
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

  const { containerRef, expanded, handleExpand, newComponentRef } =
    expandedProps;

  const images: ImageProps[] = [
    {
      src: "/assets/vexElement.png",
      colSpan: "col-span-2",
      rowSpan: "row-span-2",
    },
    {
      src: "/assets/movieAi.png",
      colSpan: "col-span-1",
      rowSpan: "",
      aspect: "aspect-square",
    },
    {
      src: "/assets/posterShop.png",
      colSpan: "col-span-3",
      rowSpan: "row-span-2",
    },
    {
      src: "/assets/issueTracker.png",
      colSpan: "col-span-3",
      rowSpan: "row-span-2",
    },
    {
      src: "/assets/housieCover.png",
      colSpan: "col-span-2",
      rowSpan: "row-span-2",
    },
    {
      src: "/assets/task.png",
      colSpan: "col-span-1",
      rowSpan: "row-span-2",
    },
  ];

  const renderExpandedContent = () => {
    if (expanded !== null && expanded >= 0 && expanded < projectData.length) {
      handleProjectClick(expanded);
      return (
        <GameDetailComponent
          handleParentExpand={handleExpand}
          data={projectData[expanded]}
        />
      );
    } else {
      return null;
    }
  };

  return (
    <div className="w-screen h-screen overflow-hidden m-0 p-0 flex justify-center items-center">
      <div
        id="project"
        style={{ zIndex: zIndex }}
        onClick={() => updateZIndex(State.Projects)}
        className=" border border-white rounded-xl w-full h-full overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          id="projectBar"
          className="bar flex gap-3 p-5 hover:bg-gray-400 hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-md hover:bg-opacity-20 transition-all duration-100 hover:cursor-grab"
        >
          <div
            onClick={closeWindow}
            className="w-5 h-5 border border-white rounded-full cursor-pointer bg-[#FF1D25]"
          ></div>
          <div
            onClick={() => {
              setScreenWidth(Screen.min);
            }}
            className="w-5 h-5 border border-white rounded-full cursor-pointer bg-[#FF931E]"
          ></div>
          <div
            onClick={() => {
              setScreenWidth(Screen.max);
            }}
            className="w-5 h-5 border border-white rounded-full cursor-pointer bg-[#8CC63F]"
          ></div>
        </div>
        <div ref={containerRef} className="grid grid-cols-3 w-full h-full">
          <div className="col-span-1 bg-[#f7f7f7]">
            <Sidebar />
          </div>
          <div className="col-span-2 bg-gradient-to-r from-white to-neutral-200 border-b-0 bg-transparent p-5 relative">
            <h1 className={`text-4xl font-bold mb-5 ${poppins.className}`}>
              Projects
            </h1>
            <div className="w-full h-[74%] lg:absolute -left-20 grid grid-cols-6 grid-rows-4 gap-5 p-5">
              {images.map((image, idx) => (
                <Image
                  src={image.src}
                  key={idx}
                  width={1920}
                  height={1080}
                  onClick={() => handleExpand(idx)}
                  className={`w-full h-full rounded shadow-md shadow-gray-400 object-cover ${
                    image.colSpan
                  } ${image.rowSpan} ${image.aspect ? image.aspect : ""}`}
                  alt=""
                />
              ))}
            </div>
          </div>
          <div
            ref={newComponentRef}
            className={`absolute top-14 left-0 w-full h-full bg-white overflow-hidden ${
              expanded !== null ? "grid" : "hidden"
            }`}
          >
            {renderExpandedContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
