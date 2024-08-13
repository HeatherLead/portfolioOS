"use client";
import React, { useRef, useState } from "react";
import { useBaseAnimations } from "@/hooks/useBaseAnimations";
import useDragger from "@/hooks/useDragger";
import { Screen } from "./mail";
import { Space_Mono } from "next/font/google";
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
  useDragger("games");
  return (
    <div className="w-screen h-screen p-0 m-0 overflow-hidden  flex justify-center items-center">
      <div
        className="bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 z-30 grid grid-cols-10 grid-rows-6  gap-4 overflow-hidden w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        id="games"
      >
        <div className="bar flex gap-3 p-2 col-span-1 row-span-1 ">
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

        <div className=" col-span-3 row-span-3 ">
          <img
            src="/assets/ticTacToe.png"
            alt=""
            className=" object-cover w-full h-full"
          />
        </div>
        <div className=" col-span-3 row-span-4 ">
          <img
            src="/assets/toDoList.png"
            alt=""
            className=" object-contain w-full h-full"
          />
        </div>
        <div className=" col-span-3 row-span-2 ">
          <img
            src="/assets/headset.png"
            alt=""
            className=" object-cover w-full h-full"
          />
        </div>
        <div className=" col-span-1 row-span-2">
          <img
            src="/assets/chat2.png"
            alt=""
            className=" object-cover w-full h-full"
          />
        </div>
        <div className=" col-span-3 row-span-3 ">
          <img
            src="/assets/weather2.png"
            alt=""
            className=" object-cover w-full h-full"
          />
        </div>
        <div className=" col-span-4 row-span-3 ">
          <img
            src="/assets/isro.png"
            alt=""
            className=" object-cover w-full h-full"
          />
        </div>
        <div className=" col-span-3 row-span-2 ">
          <img
            src="/assets/Drum-kit.png"
            alt=""
            className=" object-cover w-full h-full"
          />
        </div>
        <div className=" col-span-3 row-span-1  ">
          <h1
            className={`${space_mono.className} text-wrap text-white text-lg`}
          >
            Old Projects and games
          </h1>
          <p className={`${space_mono.className} text-wrap text-white`}>
            @ayushbangar
          </p>
        </div>
      </div>
    </div>
  );
};

export default Games;
