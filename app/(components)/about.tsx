"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import Image from "next/image";
import { Sacramento, Space_Mono } from "next/font/google";
import { Progress } from "@radix-ui/themes";
import { useBaseAnimations } from "@/hooks/useBaseAnimations";
import useDragger from "@/hooks/useDragger";
import { State } from "../page";
import { Screen } from "./mail";

const sacramento = Sacramento({
  weight: "400",
  subsets: ["latin"],
});
const space_mono = Space_Mono({
  weight: "400",
  subsets: ["latin"],
});
interface AboutProps {
  handleIconClick: (state: State) => void;
}
export default function About({ handleIconClick }: AboutProps) {
  const t1Ref = useRef<GSAPTimeline | null>(null);
  const [screenWidth, setScreenWidth] = useState(Screen.min);

  useBaseAnimations({
    id: "about",
    screenWidth,
    t1Ref,
  });

  const closeWindow = () => {
    if (t1Ref.current) {
      t1Ref.current.reverse().then(() => {
        handleIconClick(State.About);
      });
    }
  };
  useDragger("about");

  return (
    <div className="w-screen h-screen p-0 m-0 overflow-hidden  flex justify-center items-center">
      <div
        id="about"
        className=" z-10 h-full w-full grid grid-cols-8 grid-rows-10 gap-5 absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border p-5 border-gray-100 rounded-xl text-white m-0"
      >
        <div className="bar flex gap-3 col-span-2 row-span-1">
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
        <div className=" col-span-4 row-span-4 border rounded p-2"></div>
        <div className=" col-span-2 row-span-4 flex p-5 justify-center items-center border rounded ">
          <Image
            width={200}
            height={200}
            src="/profile.jpg"
            className=" aspect-square object-cover rounded-full "
            alt=""
          />
        </div>
        <div
          className={` col-span-2 row-span-7 border rounded p-4 pt-7 ${space_mono.className}`}
        >
          <h1 className=" text-lg font-semibold text-center ">Progress</h1>
          <div className=" grid gap-2 mt-5">
            <h1>Frontend</h1>
            <Progress value={90} color="cyan" size={"2"} radius="full" />
          </div>
          <div className=" grid gap-2 mt-5">
            <h1>DSA</h1>
            <Progress value={50} size={"2"} color="violet" radius="full" />
          </div>
          <div className=" grid gap-2 mt-5">
            <h1>Backend</h1>
            <Progress value={70} color="grass" size={"2"} radius="full" />
          </div>
          <div className=" grid gap-2 mt-5">
            <h1>Database</h1>
            <Progress value={80} size={"2"} color="violet" radius="full" />
          </div>
          <div className=" grid gap-2 mt-5">
            <h1>Machine Learning</h1>
            <Progress value={20} color="plum" size={"2"} radius="full" />
          </div>
        </div>
        <div className=" col-span-6 row-span-2 border rounded p-2">
          <h1 className="font-medium pb-1">About Me</h1>
          <p className=" text-sm overflow-clip">
            Experienced web development enthusiast with a passion for creating
            innovative digital experiences. Proficient in React, Node.js, and
            frameworks like Next.js, 2 years of experience in building websites
            and web applications.
          </p>
        </div>
        <div className=" col-span-2 row-span-4 border rounded p-2"></div>
        <div
          className={` col-span-4 row-span-4 border rounded p-2 ${space_mono.className}`}
        >
          <h1 className=" text-center font-bold text-lg">Skills</h1>
          <div className=" grid grid-cols-3 gap-2">
            <div className=" col-span-1 h-full  ">
              <h1 className=" font-semibold  py-1">Language</h1>
              <p>Html</p>
              <p>CSS</p>
              <p>Javascript</p>
              <p>Java</p>
              <p>python</p>
            </div>
            <div className=" col-span-1  h-full">
              <h1 className=" font-semibold  py-1">Technologies</h1>
              <p>React js</p>
              <p>convex</p>
              <p>Mongodb</p>
              <p>Next js</p>
              <p>Firebase</p>
            </div>
            <div className=" col-span-1  h-full">
              <h1 className=" font-semibold  py-1">Core</h1>
              <p>DSA</p>
              <p>Node js</p>
              <p>cloud computing</p>
            </div>
          </div>
        </div>

        <div className=" col-span-2 row-span-2 border rounded p-2">
          <p className={`text-sm font-bold pb-2  ${space_mono.className}`}>
            Bachelor of Engineering
          </p>
          <p className=" text-xs">
            Artificial Intelligence and Data science(VESIT)
          </p>
        </div>
      </div>
    </div>
  );
}
