"use client";
import React, { useRef, useState } from "react";
import { useBaseAnimations } from "@/hooks/useBaseAnimations";
import useDragger from "@/hooks/useDragger";
import { Screen } from "./mail";
import { Space_Mono } from "next/font/google";
import useExpand from "@/hooks/useExpand";
import Isro from "./projectPages/isro";
import { gamesData } from "@/data/data";
import GameDetailComponent from "./gameDetailComponent";
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
  Cv,
}

type gameDetail = {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  previewLink: string;
  githubLink: string;
};
interface GamesProps {
  handleIconClick: (state: State) => void;
}
const Games = ({ handleIconClick }: GamesProps) => {
  const t1Ref = useRef<GSAPTimeline | null>(null);
  const [screenWidth, setScreenWidth] = useState(Screen.min);

  useBaseAnimations({
    id: "games",
    screenWidth,
    t1Ref,
  });

  const closeWindow = () => {
    if (t1Ref.current) {
      t1Ref.current.reverse().then(() => {
        handleIconClick(State.Games);
      });
    }
  };
  useDragger("gamesBar", "games");

  const { expanded, containerRef, newComponentRef, handleExpand } = useExpand();

  const images = [
    { src: "/assets/mindGame.png", colSpan: 2, rowSpan: 3 },
    { src: "/assets/ticTacToe.png", colSpan: 2, rowSpan: 3 },
    { src: "/assets/toDoList.png", colSpan: 3, rowSpan: 4 },
    { src: "/assets/headset.png", colSpan: 3, rowSpan: 2 },
    { src: "/assets/weather2.png", colSpan: 3, rowSpan: 3 },
    { src: "/assets/isro.png", colSpan: 4, rowSpan: 3 },
    { src: "/assets/Drum-kit.png", colSpan: 3, rowSpan: 2 },
  ];
  const renderExpandedContent = () => {
    switch (expanded) {
      case 0:
        return (
          <GameDetailComponent
            handleExpand={handleExpand}
            data={gamesData[0]}
          />
        );
      case 1:
        return (
          <GameDetailComponent
            handleExpand={handleExpand}
            data={gamesData[1]}
          />
        );
      case 2:
        return (
          <GameDetailComponent
            handleExpand={handleExpand}
            data={gamesData[2]}
          />
        );
      case 3:
        return (
          <GameDetailComponent
            handleExpand={handleExpand}
            data={gamesData[3]}
          />
        );
      case 4:
        return (
          <GameDetailComponent
            handleExpand={handleExpand}
            data={gamesData[4]}
          />
        );
      case 5:
        return (
          <GameDetailComponent
            handleExpand={handleExpand}
            data={gamesData[5]}
          />
        );
      case 6:
        return (
          <GameDetailComponent
            handleExpand={handleExpand}
            data={gamesData[6]}
          />
        );
      case 7:
        return (
          <GameDetailComponent
            handleExpand={handleExpand}
            data={gamesData[7]}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-screen h-screen p-0 m-0 overflow-hidden  flex justify-center items-center">
      <div
        className="bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 z-30 border border-white rounded-xl  overflow-hidden w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        id="games"
      >
        <div
          id="gamesBar"
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
        <div
          ref={containerRef}
          className="holder w-full h-full grid grid-cols-10 grid-rows-6 gap-4"
        >
          {images.map((img, index) => (
            <div
              key={index}
              className={`col-span-${img.colSpan} row-span-${img.rowSpan}`}
              onClick={() => handleExpand(index)}
            >
              <img
                src={img.src}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
          ))}
          {expanded === null && (
            <div className="col-span-3 row-span-1">
              <h1
                className={`${space_mono.className} text-wrap text-white text-lg`}
              >
                Old Projects and games
              </h1>
            </div>
          )}

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

export default Games;
