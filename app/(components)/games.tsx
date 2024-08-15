"use client";
import React, { useRef, useState } from "react";
import { useBaseAnimations } from "@/hooks/useBaseAnimations";
import useDragger from "@/hooks/useDragger";
import { Screen } from "./mail";
import { Space_Mono } from "next/font/google";
import { MdOpenInNew } from "react-icons/md";
import {
  Drawer,
  DrawerClose,
  DrawerTrigger,
  DrawerContent,
  DrawerTitle,
  DrawerDescription,
  DrawerHeader,
  DrawerFooter,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
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
  useDragger("gamesBar", "games");
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
        <div className=" w-full h-full grid grid-cols-10 grid-rows-6  gap-4">
          <div className=" col-span-2 row-span-3">
            <Drawer>
              <DrawerTrigger asChild className=" w-full h-full">
                <img
                  src="/assets/mindGame.png"
                  alt=""
                  className=" object-cover w-full h-full"
                />
              </DrawerTrigger>
              <DrawerContent className=" text-white ">
                <DrawerHeader>
                  <DrawerTitle>Mind Game</DrawerTitle>
                  <DrawerDescription>
                    <div className=" flex gap-5 py-5">
                      <img
                        src="/assets/mindGame.png"
                        className=" object-cover w-2/3"
                        draggable
                        alt=""
                      />
                      <div>
                        <p className=" mb-5 text-balance">
                          Welcome to Mind Game, a captivating and challenging
                          puzzle game designed to stimulate your brain and
                          enhance your cognitive abilities. This game offers a
                          series of levels that progressively increase in
                          difficulty, providing a fun and engaging way to test
                          your mental agility, problem-solving skills, and
                          memory.
                        </p>
                        <div className=" flex gap-5">
                          <Button
                            className=" rounded  "
                            color="white"
                            variant="outline"
                          >
                            Code <FaGithub className=" ml-4" />
                          </Button>
                          <Button className=" rounded bg-[#FF931E] hover:bg-orange-500  ">
                            Preview <MdOpenInNew className=" ml-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <DrawerClose>
                    <Button
                      variant="outline"
                      style={{
                        borderRadius: "6px",
                      }}
                    >
                      Back
                    </Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
          <div className=" col-span-2 row-span-3 ">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
