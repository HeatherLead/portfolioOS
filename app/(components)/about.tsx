"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Image from "next/image";
import { Sacramento, Space_Mono } from "next/font/google";
import { Progress } from "@radix-ui/themes";

const sacramento = Sacramento({
  weight: "400",
  subsets: ["latin"],
});
const space_mono = Space_Mono({
  weight: "400",
  subsets: ["latin"],
});

export default function About() {
  const container = useRef(null);

  useGSAP(() => {
    const t1 = gsap.timeline();
    gsap.set(container.current, {
      opacity: 0,
      bottom: 0,
      width: 2,
      height: 2,
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
        opacity: 100,
        width: "70%",
        height: "80%",
        ease: "power2.out",
      },
      "-=.3"
    );
  });
  return (
    <div className="w-screen h-screen p-0 m-0  relative flex justify-center items-center">
      <div
        ref={container}
        className="h-full w-full grid grid-cols-8 grid-rows-5 gap-5 absolute top-[49%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border p-5 border-gray-100 rounded-xl text-white m-0"
      >
        <div className=" col-span-2 row-span-2 flex p-5 justify-center items-center border rounded ">
          <Image
            width={200}
            height={200}
            src="/profile.jpg"
            className=" aspect-square object-cover rounded-full "
            alt=""
          />
        </div>
        <div className=" col-span-6 row-span-1 border rounded p-2">
          <h1 className="font-medium pb-1">About Me</h1>
          <p className=" text-sm">
            Experienced web development enthusiast with a passion for creating
            innovative digital experiences. Proficient in React, Node.js, and
            frameworks like Next.js, 2 years of experience in building websites
            and web applications.
          </p>
        </div>
        <div
          className={` col-span-4 row-span-2 border rounded p-2 ${space_mono.className}`}
        >
          <h1 className=" text-center font-medium">Tech Stack</h1>
          <div className=" grid grid-cols-3 gap-2  ">
            <div className=" col-span-1 border h-full">
              <h1></h1>
            </div>
            <div className=" col-span-1 border h-full"></div>
            <div className=" col-span-1 border h-full"></div>
          </div>
        </div>
        <div
          className={` col-span-2 row-span-3 border rounded p-4 pt-7 ${space_mono.className}`}
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
            <h1>Machine Learning</h1>
            <Progress value={20} color="plum" size={"2"} radius="full" />
          </div>
        </div>
        <div className=" col-span-2 row-span-3 border rounded p-2"></div>
        <div className=" col-span-4 row-span-2 border rounded p-2"></div>
        <div className=" col-span-2 row-span-1 border rounded p-2">
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
