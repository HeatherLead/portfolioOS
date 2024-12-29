import React, { useRef } from "react";
import profile from "./assets/User.svg";
import project from "./assets/Folders.svg";
import contact from "./assets/Contacts.svg";
import games from "./assets/games.svg";
import mail from "./assets/Message.svg";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

enum State {
  About,
  Contact,
  Games,
  Mail,
  Projects,
  Cv,
}
interface TaskbarProps {
  handleIconClick: (state: State) => void;
  activeStates: State[];
}

const Taskbar = ({ handleIconClick, activeStates }: TaskbarProps) => {
  const t1Ref = useRef<GSAPTimeline | null>(null);

  const closeWindow = (state: State) => {
    if (t1Ref.current) {
      t1Ref.current.reverse().then(() => {
        handleIconClick(state);
      });
    } else {
      handleIconClick(state);
    }
  };

  const handleClick = (state: State) => {
    if (activeStates.includes(state)) {
      closeWindow(state);
    } else {
      handleIconClick(state);
    }
  };

  return (
    <div className=" z-50 flex w-full justify-center gap-10 items-center p-2 fixed bottom-0 left-1/2 -translate-x-1/2 bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-30 border-gray-100">
      <div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Image
                width={32}
                height={32}
                className="h-12 w-12 cursor-pointer p-2 rounded aspect-square hover:border border-white border-opacity-20"
                src={profile.src}
                alt=""
                onClick={() => handleClick(State.About)}
              />
            </TooltipTrigger>
            <TooltipContent className=" rounded ">
              <p>About</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <hr
          className={`w-4 relative left-1/2 -translate-x-1/2 rounded-full animate-accordion-up duration-500 ${
            activeStates.includes(State.About) ? " opacity-100" : " opacity-0"
          }`}
        />
      </div>
      <div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Image
                width={32}
                height={32}
                className="h-12 w-12 cursor-pointer p-2 rounded aspect-square hover:border border-white border-opacity-20"
                src={project.src}
                alt=""
                onClick={() => handleClick(State.Projects)}
              />
            </TooltipTrigger>
            <TooltipContent className=" rounded">
              <p>Projects</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <hr
          className={`w-4 relative left-1/2 -translate-x-1/2 rounded-full animate-accordion-up duration-500 ${
            activeStates.includes(State.Projects)
              ? " opacity-100"
              : " opacity-0"
          }`}
        />
      </div>
      <div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Image
                width={32}
                height={32}
                className="h-12 w-12 cursor-pointer p-2 rounded aspect-square hover:border border-white border-opacity-20"
                src={contact.src}
                alt=""
                onClick={() => handleClick(State.Contact)}
              />
            </TooltipTrigger>
            <TooltipContent className=" rounded ">
              <p>Contact</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <hr
          className={`w-4 relative left-1/2 -translate-x-1/2 rounded-full animate-accordion-up duration-500 ${
            activeStates.includes(State.Contact) ? " opacity-100" : " opacity-0"
          }`}
        />
      </div>
      <div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Image
                width={32}
                height={32}
                className="h-12 w-12 cursor-pointer p-2 rounded aspect-square hover:border border-white border-opacity-20"
                src={games.src}
                alt=""
                onClick={() => handleClick(State.Games)}
              />
            </TooltipTrigger>
            <TooltipContent className=" rounded ">
              <p>Games</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <hr
          className={`w-4 relative left-1/2 -translate-x-1/2 rounded-full animate-accordion-up duration-500 ${
            activeStates.includes(State.Games) ? " opacity-100" : " opacity-0"
          }`}
        />
      </div>
      <div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Image
                width={32}
                height={32}
                className="h-12 w-12 cursor-pointer p-2 rounded aspect-square hover:border border-white border-opacity-20"
                src={mail.src}
                alt=""
                onClick={() => handleClick(State.Mail)}
              />
            </TooltipTrigger>
            <TooltipContent className=" rounded ">
              <p>Mail</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <hr
          className={`w-4 relative left-1/2 -translate-x-1/2 rounded-full animate-accordion-up duration-500 ${
            activeStates.includes(State.Mail) ? " opacity-100" : " opacity-0"
          }`}
        />
      </div>
    </div>
  );
};

export default Taskbar;
