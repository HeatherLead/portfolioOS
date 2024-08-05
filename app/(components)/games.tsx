"use client";
import React, { useRef, useState } from "react";
import { State } from "../page";
import { useBaseAnimations } from "@/hooks/useBaseAnimations";
import useDragger from "@/hooks/useDragger";
import { Screen } from "./mail";
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
    <div className=" flex justify-center  items-end h-screen pb-28  relative p-0 m-0">
      <div
        className=" grid grid-cols-10 grid-rows-6  gap-4 w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        id="games"
      >
        <div className="bar flex gap-3 p-2 col-span-1 row-span-1">
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

        <div className=" col-span-3 row-span-3 "></div>
        <div className=" col-span-3 row-span-4 "></div>
        <div className=" col-span-3 row-span-2 "></div>
        <div className=" col-span-1 row-span-2"></div>
        <div className=" col-span-3 row-span-3 "></div>
        <div className=" col-span-4 row-span-3 "></div>
        <div className=" col-span-3 row-span-2 "></div>
        <div className=" col-span-3 row-span-1 "></div>
      </div>
    </div>
  );
};

export default Games;
