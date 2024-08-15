import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Poppins, Space_Mono } from "next/font/google";
const poppins = Poppins({
  weight: "700",
  subsets: ["latin"],
});
const space_mono = Space_Mono({
  weight: "400",
  subsets: ["latin"],
});
interface IsroProps {
  handleExpand: (idx: number | null) => void;
}
const Isro = ({ handleExpand }: IsroProps) => {
  return (
    <ScrollArea className="w-full p-5 pb-20">
      <div className=" w-full flex justify-between">
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
      <div>
        <Image
          src="/assets/isro.png"
          className=" w-4/5 mb-5"
          alt=""
          width={400}
          height={400}
        />
        <div className=" grid lg:grid-cols-3 w-full">
          <div className="col-span-1">
            <h1 className={`text-3xl ${poppins.className}`}>Ayush</h1>
            <p className=" tracking-widest">Isro</p>
          </div>
          <div className="col-span-1">
            <h1 className={`text-xl ${poppins.className}`}>Description</h1>
            <p className={` ${space_mono.className} text-balance`}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium aspernatur molestiae saepe obcaecati dicta recusandae
              iusto consequuntur possimus, nemo officiis.
            </p>
          </div>
          <div className="col-span-1 flex flex-col gap-4 p-4">
            <Button variant={"secondary"}>Github</Button>
            <Button variant={"secondary"}>Github</Button>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};

export default Isro;
