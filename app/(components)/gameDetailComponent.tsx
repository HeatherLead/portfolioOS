import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Poppins } from "next/font/google";
import { MdOpenInNew } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import useExpand from "@/hooks/useExpand";
import { IoGameController } from "react-icons/io5";
const poppins = Poppins({
  weight: "700",
  subsets: ["latin"],
});
type gameDetail = {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  previewLink: string;
  githubLink: string;
  isGame?: boolean;
};

interface GameDetailComponentProps {
  handleParentExpand: (idx: number | null) => void;
  data: gameDetail;
}

const GameDetailComponent = ({
  handleParentExpand,
  data,
}: GameDetailComponentProps) => {
  if (!data) return;
  const { containerRef, expanded, handleExpand, newComponentRef } =
    useExpand(0);
  return (
    <ScrollArea ref={containerRef} className="w-full p-5 pb-20 bg-[#f7f7f7]">
      <div className=" w-full flex justify-between mb-2">
        <h1 className={` tracking-widest text-4xl ${poppins.className}`}>
          {data.title}
        </h1>
        <Button
          variant={"link"}
          onClick={() => handleParentExpand(null)}
          className=""
        >
          <IoMdArrowRoundBack className=" text-lg mr-2" /> Close
        </Button>
      </div>
      <div className=" w-full grid lg:grid-cols-3 gap-5 ">
        <Image
          src={data.image}
          className=" lg:col-span-2 w-full mb-5"
          alt=""
          width={1920}
          height={1080}
        />
        <div className=" lg:col-span-1 w-full">
          <div className="">
            <p className={`  text-balance text-sm mb-5`}>{data.description}</p>
          </div>
          <div>
            <h1 className={` ${poppins.className} text-balance`}>Tech Stack</h1>
            <div className=" mb-4 w-full">
              {data.techStack &&
                data.techStack.map((item, idx) => (
                  <Badge variant={"outline"} className=" mr-4 my-2" key={idx}>
                    {item}
                  </Badge>
                ))}
            </div>
          </div>
          <div className="col-span-1 flex flex-col gap-4 pt-4">
            <Button variant={"outline"}>
              <a
                className={`flex justify-between w-full ${poppins.className}`}
                href={data.previewLink}
              >
                Preview <MdOpenInNew className="text-lg" />
              </a>
            </Button>
            <Button variant={"outline"}>
              <a
                className={`flex justify-between w-full ${poppins.className}`}
                href={data.githubLink}
              >
                Github <FaGithub className=" text-lg" />
              </a>
            </Button>
            {data.isGame && (
              <Button variant={"secondary"}>
                <a
                  className={`flex justify-between w-full ${poppins.className}`}
                  onClick={() => handleExpand(1)}
                >
                  play now <IoGameController className=" text-lg" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
      <div
        ref={newComponentRef}
        className={`absolute top-0 left-0 w-full h-full  ${
          expanded !== null ? "grid" : "hidden"
        }`}
      >
        <div className=" fixed top-0 w-full flex justify-end p-5  ">
          <Button
            variant={"link"}
            onClick={() => handleExpand(null)}
            className=" text-white"
          >
            <IoMdArrowRoundBack className=" text-lg mr-2" /> Close
          </Button>
        </div>
        <iframe src={data.previewLink} className="w-full h-full" />
      </div>
    </ScrollArea>
  );
};

export default GameDetailComponent;
