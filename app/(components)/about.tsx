"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
export default function About() {
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
        width: "70%",
        height: "90%",
        ease: "power2.out",
      },
      "-=.3"
    );
  });
  return (
    <div className="  w-screen h-screen p-0 m-0 pb-24 relative flex justify-center items-center ">
      <div
        ref={container}
        className="h-full w-full bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 absolute rounded-xl"
      ></div>
    </div>
  );
}
