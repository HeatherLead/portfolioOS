import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { HiOutlineInboxStack } from "react-icons/hi2";
import { Avatar, Box, Button, Card, Flex, Text } from "@radix-ui/themes";
import { IoSend } from "react-icons/io5";
import { State } from "../page";
import useDragger from "@/hooks/useDragger";
import { useBaseAnimations } from "@/hooks/useBaseAnimations";
export enum Screen {
  max,
  min,
}
interface MailProps {
  handleIconClick: (state: State) => void;
}
const Mail = ({ handleIconClick }: MailProps) => {
  const t1Ref = useRef<GSAPTimeline | null>(null);
  const [screenWidth, setScreenWidth] = useState(Screen.min);

  useBaseAnimations({
    id: "box",
    screenWidth,
    t1Ref,
  });

  const closeWindow = () => {
    if (t1Ref.current) {
      t1Ref.current.reverse().then(() => {
        handleIconClick(State.Mail);
      });
    }
  };

  useDragger("box");
  return (
    <div className=" w-screen h-screen overflow-hidden m-0 p-0  flex justify-center items-center ">
      <div
        id="box"
        className="rounded-xl border grid grid-cols-4 w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className=" col-span-1 bg-transparent rounded-l-xl backdrop-blur-md p-3 ">
          <div className="bar flex gap-3 p-5">
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
          <p className=" text-center w-full py-2 bg-gray-100 rounded-[4px] text-muted-foreground mb-5 ">
            <HiOutlineInboxStack className=" inline-block mr-5" />
            all Inboxes
          </p>
          <Box>
            <Card>
              <Flex gap="3" align="center">
                <Avatar
                  size="3"
                  src="/profile.jpg"
                  radius="full"
                  fallback="T"
                />
                <Box>
                  <Text as="div" size="2" weight="bold">
                    Ayush Bangar
                  </Text>
                  <Text as="div" size="2" color="gray">
                    Developer
                  </Text>
                </Box>
              </Flex>
            </Card>
          </Box>
        </div>
        <div className=" col-span-3 bg-white rounded-r-[11px] p-4 ">
          <div className="  flex gap-4 flex-wrap lg:flex-nowrap ">
            <input
              type="text"
              value="ayushbangar04@gmail.com"
              disabled
              className=" focus:outline-none p-2 w-full lg:w-1/2 border rounded-[4px] bg-white "
            />
            <input
              type="email"
              className=" focus:outline-none p-2 w-full  lg:w-1/2 border rounded-[4px] bg-white "
              placeholder="From:"
            />
          </div>
          <textarea
            placeholder="Description"
            className="  mt-4 focus:outline-none w-full h-[80%] p-2  border  rounded-[4px] resize-none"
          />
          <div className=" flex justify-end">
            <Button style={{ cursor: "pointer" }} size={"3"}>
              Send <IoSend />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mail;
