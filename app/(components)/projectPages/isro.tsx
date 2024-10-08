import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Poppins } from "next/font/google";
import { MdOpenInNew } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
const poppins = Poppins({
  weight: "700",
  subsets: ["latin"],
});
interface IsroProps {
  handleExpand: (idx: number | null) => void;
}
const Isro = ({ handleExpand }: IsroProps) => {
  return (
    <ScrollArea className="w-full p-5 pb-20 bg-[#f7f7f7]">
      <div className=" w-full flex justify-between mb-2">
        <h1 className={` tracking-widest text-4xl ${poppins.className}`}>
          Isro
        </h1>
        <Button
          variant={"link"}
          onClick={() => handleExpand(null)}
          className=""
        >
          <IoMdArrowRoundBack className=" text-lg mr-2" /> Close
        </Button>
      </div>
      <div className=" w-full grid lg:grid-cols-3 gap-5 ">
        <Image
          src="/assets/isro.png"
          className=" lg:col-span-2 w-full mb-5"
          alt=""
          width={400}
          height={400}
        />
        <div className=" lg:col-span-1 w-full">
          <div className="">
            <p className={`  text-balance text-sm mb-5`}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium aspernatur molestiae saepe obcaecati dicta recusandae
              iusto consequuntur possimus, nemo officiis.
            </p>
          </div>
          <div>
            <h1 className={` ${poppins.className} text-balance`}>Tech Stack</h1>
            <div className=" mb-4 w-full">
              <Badge variant={"outline"} className=" mr-4 my-2">
                React Js
              </Badge>
              <Badge variant={"outline"} className=" mr-4 my-2">
                React Js
              </Badge>
              <Badge variant={"outline"} className=" mr-4 my-2">
                React Js
              </Badge>
              <Badge variant={"outline"} className=" mr-4 my-2">
                React Js
              </Badge>
              <Badge variant={"outline"} className=" mr-4 my-2">
                React Js
              </Badge>
              <Badge variant={"outline"} className=" mr-4 my-2">
                React Js
              </Badge>
            </div>
          </div>
          <div className="col-span-1 flex flex-col gap-4 pt-4">
            <Button variant={"outline"}>
              <a
                className={`flex justify-between w-full ${poppins.className}`}
                href=""
              >
                Preview <MdOpenInNew className="text-lg" />
              </a>
            </Button>
            <Button variant={"outline"}>
              <a
                className={`flex justify-between w-full ${poppins.className}`}
                href=""
              >
                Github <FaGithub className=" text-lg" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};

export default Isro;
