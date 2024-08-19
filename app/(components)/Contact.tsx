"use client";
import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import face from "../assets/face.svg";
import { FaInstagram, FaGithub, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { Sacramento } from "next/font/google";
import { Screen } from "./mail";
import { useBaseAnimations } from "@/hooks/useBaseAnimations";
import useDragger from "@/hooks/useDragger";
import Sidebar from "./sidebar";
const sacramento = Sacramento({
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
interface ContactProps {
  handleIconClick: (state: State) => void;
  zIndex: number;
  updateZIndex: (state: State) => void;
}
const Contact = ({ handleIconClick, updateZIndex, zIndex }: ContactProps) => {
  const t1Ref = useRef<GSAPTimeline | null>(null);
  const [screenWidth, setScreenWidth] = useState(Screen.min);

  useBaseAnimations({
    id: "contact",
    screenWidth,
    t1Ref,
  });

  const closeWindow = () => {
    if (t1Ref.current) {
      t1Ref.current.reverse().then(() => {
        handleIconClick(State.Contact);
      });
    }
  };
  useDragger("contactBar", "contact");
  return (
    <div className=" w-screen h-screen p-0 m-0 overflow-hidden flex justify-center items-center">
      <div
        id="contact"
        style={{ zIndex: zIndex }}
        onClick={() => updateZIndex(State.Contact)}
        className=" w-[70%] h-[70%]  rounded-xl overflow-hidden absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white"
      >
        <div
          id="contactBar"
          className="bar flex gap-3 p-5  hover:bg-gray-400  hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-md hover:bg-opacity-20 transition-all duration-100 hover:cursor-grab"
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
        <div className="grid  grid-cols-3 h-full">
          <div className=" col-span-1 bg-[#f7f7f7] border-r rounded-lb-xl">
            <Sidebar />
          </div>
          <div className=" col-span-2 bg-white rounded-rb-xl grid grid-rows-4">
            <div className=" flex  justify-center items-end gap-12 row-span-1">
              <img className=" w-24 aspect-square" src={face.src} alt="" />
              <h1 className={`text-5xl ${sacramento.className}`}>
                Ayush Bangar
              </h1>
            </div>
            <div className=" flex justify-center items-center gap-14 row-span-1 ">
              <a
                href="https://linkedin.com/in/ayush-bangar-474608297"
                className=" w-12 aspect-square rounded-full bg-blue-500  flex justify-center items-center cursor-pointer"
              >
                <FaLinkedinIn className=" text-white text-2xl" />
              </a>

              <a
                href="https://github.com/HeatherLead"
                className=" w-12 aspect-square rounded-full bg-blue-500  flex justify-center items-center cursor-pointer"
              >
                <FaGithub className=" text-white text-2xl" />
              </a>

              <a
                href="https://youtube.com/@ayushbangar4916"
                className=" w-12 aspect-square rounded-full bg-red-500  flex justify-center items-center cursor-pointer"
              >
                <FaYoutube className=" text-white text-2xl" />
              </a>

              <a
                href="https://www.instagram.com/ayushbangar25/"
                className=" w-12 aspect-square rounded-full bg-red-500  flex justify-center items-center cursor-pointer"
              >
                <FaInstagram className=" text-white text-2xl" />
              </a>
            </div>
            <div className=" row-span-2 mt-10">
              <hr />
              <div className="grid w-full grid-cols-4 mt-1 mb-1">
                <div></div>
                <h1 className="col-start-2">Email</h1>
                <p className="col-start-3 col-span-2">
                  Ayushbangar04@gmail.com
                </p>
              </div>
              <hr />
              <div className="grid w-full grid-cols-4 mt-1 mb-1">
                <div></div>
                <h1 className="col-start-2">Work</h1>
                <p className="col-start-3 col-span-2">Full stack Developer</p>
              </div>
              <hr />
              <div className="grid w-full grid-cols-4 mt-1 mb-1">
                <div></div>
                <h1 className="col-start-2">Birthday</h1>
                <p className="col-start-3 col-span-2">5-6-2004</p>
              </div>
              <hr />
              <div className="grid w-full grid-cols-4 mt-1 mb-1">
                <div></div>
                <h1 className="col-start-2">Location</h1>
                <p className="col-start-3 col-span-2">Mumbai</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
