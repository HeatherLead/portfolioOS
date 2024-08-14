import React from "react";

const Timeline = () => {
  return (
    <div className=" w-full max-h-full  grid grid-cols-9 grid-rows-3  ">
      <div className=" col-span-4 row-span-1"></div>
      <div className=" col-span-1 row-span-1 h-full w-full relative flex justify-center">
        <div className=" h-full w-[3px] bg-white"></div>
        <span className=" absolute top-0 w-3 aspect-square bg-white rounded-full "></span>
      </div>
      <div className=" col-span-4 row-span-1 flex flex-col gap-2 pb-6">
        <h1 className=" text-sm">05-2022</h1>
        <p className=" text-xs">
          Started my Btech in Artificial Intelligence & data science
        </p>
      </div>
      <div className=" col-span-4 row-span-1 flex flex-col gap-2 pb-6 text-end">
        <h1 className=" text-sm">07-2022</h1>
        <p className=" text-xs">Started My journey as a freelancer</p>
      </div>
      <div className=" col-span-1 row-span-1 h-full w-full relative flex justify-center">
        <div className=" h-full w-[3px] bg-white"></div>
        <span className=" absolute top-0 w-3 aspect-square bg-white rounded-full "></span>
      </div>
      <div className=" col-span-4 row-span-1"></div>
      <div className=" col-span-4 row-span-1"></div>
      <div className=" col-span-1 row-span-1 h-full w-full relative flex justify-center">
        <div className=" h-full w-[3px] bg-white"></div>
        <span className=" absolute top-0 w-3 aspect-square bg-white rounded-full "></span>
      </div>
      <div className=" col-span-4 row-span-1 flex flex-col gap-2 pb-6">
        <h1 className=" text-sm">04-2022</h1>
        <p className=" text-xs">Joined prodigy Infotech as an intern</p>
      </div>
    </div>
  );
};

export default Timeline;
