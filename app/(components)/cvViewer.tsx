"use client";
import React, { useState, useRef } from "react";
import useDragger from "@/hooks/useDragger";
import { useBaseAnimations } from "@/hooks/useBaseAnimations";
import { ScrollArea } from "@/components/ui/scroll-area";
enum State {
  About,
  Contact,
  Games,
  Mail,
  Projects,
  Cv,
}
enum Screen {
  max,
  min,
}
interface CvViewerProps {
  handleIconClick: (state: State) => void;
}
const CvViewer = ({ handleIconClick }: CvViewerProps) => {
  const t1Ref = useRef<GSAPTimeline | null>(null);
  const [screenWidth, setScreenWidth] = useState(Screen.min);

  useBaseAnimations({
    id: "cv",
    screenWidth,
    t1Ref,
  });

  const closeWindow = () => {
    if (t1Ref.current) {
      t1Ref.current.reverse().then(() => {
        handleIconClick(State.Cv);
      });
    }
  };

  useDragger("cvBar", "cv");
  return (
    <div className=" w-screen h-screen overflow-hidden m-0 p-0  flex justify-center items-end ">
      <div
        id="cv"
        className="bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 z-40 rounded-xl border border-white  w-full h-full overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          id="cvBar"
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
        <div className="w-full h-full">
          <iframe className="w-full h-full overflow-hidden" src="/CV.pdf" />
        </div>
      </div>
    </div>
  );
};

export default CvViewer;
