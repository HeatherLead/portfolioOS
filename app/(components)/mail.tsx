import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { HiOutlineInboxStack } from "react-icons/hi2";
import { Avatar, Box, Button, Card, Flex, Text } from "@radix-ui/themes";
import { IoSend } from "react-icons/io5";
import { State } from "../page";
import useDragger from "@/hooks/useDragger";
export enum Screen {
  max,
  min,
}
interface MailProps {
  animate: boolean;
  setCurrentState: (state: State) => void;
}
const Mail = ({ animate, setCurrentState }: MailProps) => {
  const container = useRef<HTMLDivElement>(null);
  const [screenWidth, setScreenWidth] = useState(Screen.min);
  const [reverseAnimate, setReverseAnimate] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);

  useGSAP(() => {
    const t1 = gsap.timeline();
    if (firstLoad) {
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
      t1.reversed(reverseAnimate);
      setFirstLoad(false);
    }
  });
  useGSAP(() => {
    const t2 = gsap.timeline();
    if (firstLoad) return;
    if (screenWidth === Screen.max) {
      t2.to(container.current, {
        width: "98%",
        height: "96%",
        ease: "power3.in",
        left: "50%",
        top: "42%",
        transform: "translate(-50%, -50%)",
      });
    }
    if (screenWidth === Screen.min) {
      t2.to(container.current, {
        width: "70%",
        height: "80%",
        ease: "power3.in",
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-50%)",
      });
    }
  }, [screenWidth]);
  useDragger("box");
  return (
    <div className=" w-screen h-screen overflow-hidden m-0 p-0  flex justify-center items-center ">
      <div
        ref={container}
        id="box"
        className="rounded-xl border grid grid-cols-4 w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className=" col-span-1 bg-transparent rounded-l-xl backdrop-blur-md p-3 ">
          <div className="bar flex gap-3 p-5">
            <div
              onClick={() => {
                setReverseAnimate(true);
              }}
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
