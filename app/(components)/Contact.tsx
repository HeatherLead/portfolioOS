"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import face from "../assets/face.svg";
import { FaInstagram, FaGithub, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { Sacramento } from "next/font/google";
const sacramento = Sacramento({
  weight: "400",
  subsets: ["latin"],
});
const Contact = () => {
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
        width: "80%",
        height: "90%",
        ease: "power2.out",
      },
      "-=.3"
    );
  });
  return (
    <div className="  w-screen h-screen  pb-28 relative flex justify-center items-center overflow-hidden">
      <div
        ref={container}
        className=" w-[70%] h-[70%]  rounded-xl absolute grid  grid-cols-3"
      >
        <div className=" col-span-1  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border-r rounded-l-xl p-5 ">
          <div className="bar flex gap-3">
            <div className=" w-5 h-5 border border-white rounded-full cursor-pointer bg-[#FF1D25]"></div>
            <div className=" w-5 h-5 border border-white rounded-full cursor-pointer bg-[#FF931E]"></div>
            <div className=" w-5 h-5 border border-white rounded-full cursor-pointer bg-[#8CC63F]"></div>
          </div>
        </div>
        <div className=" col-span-2 bg-white rounded-r-xl grid grid-rows-4">
          <div className=" flex  justify-center items-end gap-12 row-span-1">
            <img className=" w-24 aspect-square" src={face.src} alt="" />
            <h1 className={`text-5xl ${sacramento.className}`}>Ayush Bangar</h1>
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
              <p className="col-start-3 col-span-2">Ayushbangar04@gmail.com</p>
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
  );
};

export default Contact;
