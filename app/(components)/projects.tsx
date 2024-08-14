"use client";
import React, { useRef, useState } from "react";
import { Space_Mono, Poppins } from "next/font/google";
import { Screen } from "./mail";
import { useBaseAnimations } from "@/hooks/useBaseAnimations";
import useDragger from "@/hooks/useDragger";
import Image from "next/image";
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
}
interface ProjectsProps {
  handleIconClick: (state: State) => void;
}

const Projects = ({ handleIconClick }: ProjectsProps) => {
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

  return (
    <div className=" w-screen h-screen overflow-hidden m-0 p-0  flex justify-center items-center ">
      <div
        id="project"
        className="bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 z-20 border border-white   rounded-xl   w-full h-full overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div id="projectBar" className="bar flex gap-3 p-5 ">
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
        <div className="grid grid-cols-3 w-full h-full">
          <div className=" col-span-1 bg-[#f5eaea]"></div>
          <div className=" col-span-2 bg-gradient-to-br from-neutral-100 to-neutral-50 bg-transparent p-5 relative">
            <h1 className={`text-4xl font-bold mb-5 ${poppins.className}`}>
              Projects
            </h1>
            <div className="w-full h-[74%] lg:absolute -left-20 grid grid-cols-6 grid-rows-4 gap-5 p-5">
              <Image
                src="/assets/vexElement.png"
                width={400}
                height={400}
                className=" w-full rounded shadow-md shadow-gray-400 object-cover col-span-2 row-span-2"
                alt=""
              />

              <Image
                src="/assets/movieAi.png"
                width={400}
                height={400}
                className=" w-full rounded shadow-md shadow-gray-400 aspect-square object-cover col-span-1"
                alt=""
              />
              <Image
                src="/assets/posterShop.png"
                width={400}
                height={0}
                className=" w-full rounded shadow-md shadow-gray-400 object-cover col-span-3 row-span-2 "
                alt=""
              />
              <Image
                src="/assets/issueTracker.png"
                width={400}
                height={400}
                className=" w-full rounded shadow-md shadow-gray-400 object-cover col-span-3 row-span-2"
                alt=""
              />
              <Image
                src="/assets/housieCover.png"
                width={250}
                height={40}
                className=" w-full rounded shadow-md shadow-gray-400 aspect-[4/3] object-cover col-span-2 row-span-2"
                alt=""
              />
              <Image
                src="/assets/task.png"
                width={400}
                height={400}
                className=" w-full rounded shadow-md shadow-gray-400 aspect-[9/15]  object-contain  col-span-1"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

//  <Swiper
//           effect={"coverflow"}
//           grabCursor={true}
//           centerInsufficientSlides={true}
//           centeredSlides={true}
//           slidesPerView={2}
//           coverflowEffect={{
//             rotate: 0,
//             stretch: 0,
//             depth: 100,
//             modifier: 2.5,
//           }}
//           modules={[EffectCoverflow, Pagination, Navigation]}
//           className="swiper-container flex justify-center items-center absolute overflow-hidden w-full h-[70%]  "
//           id="project"
//         >
//           <SwiperSlide>
//             <div className=" w-full h-full  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100 rounded-2xl p-5">
//               <div className=" w-full h-full  rounded bg-[#f5f5f5]  ">
//                 <div className=" w-full h-[80%]  bg-[url('/assets/vex.png')] bg-cover   rounded  flex justify-end items-center flex-col gap-5">
//                   <h1 className=" text-5xl font-bold text-center w-full ">
//                     Vex
//                   </h1>
//                   <div className=" flex gap-5 mb-2">
//                     <Button
//                       color="gray"
//                       variant="outline"
//                       size={"3"}
//                       highContrast
//                     >
//                       Code <FaGithub />
//                     </Button>
//                     <Button size={"3"}>
//                       Preview <RxOpenInNewWindow />
//                     </Button>
//                   </div>
//                 </div>
//                 <p className=" text-xs text-muted-foreground text-center">
//                   Developed Vex, a collaborative online whiteboard application
//                   inspired by Miro. Designed and implemented real-time
//                   collaboration features, allowing multiple users to create,
//                   edit, and share visual content seamlessly.
//                 </p>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className=" w-full h-full  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100 rounded-2xl"></div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className=" w-full h-full  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100 rounded-2xl"></div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className=" w-full h-full  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100 rounded-2xl"></div>
//           </SwiperSlide>
//         </Swiper>
