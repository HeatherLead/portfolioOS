import React, { useRef } from "react";
import home from "./assets/Icons.svg";
import profile from "./assets/User.svg";
import project from "./assets/Folders.svg";
import contact from "./assets/Contacts.svg";
import games from "./assets/games.svg";
import mail from "./assets/Message.svg";
import Image from "next/image";

enum State {
  About,
  Contact,
  Games,
  Mail,
  Projects,
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
    <div className="flex w-1/2 justify-evenly items-center p-4 border border-b-0 rounded-t-xl fixed bottom-0 left-1/2 -translate-x-1/2 bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-30 border-gray-100">
      <Image
        width={32}
        height={32}
        className="h-9 cursor-pointer"
        src={profile.src}
        alt=""
        onClick={() => handleClick(State.About)}
      />

      <Image
        width={32}
        height={32}
        className="h-9 cursor-pointer"
        src={project.src}
        alt=""
        onClick={() => handleClick(State.Projects)}
      />

      <Image
        width={32}
        height={32}
        className="h-9 cursor-pointer"
        src={contact.src}
        alt=""
        onClick={() => handleClick(State.Contact)}
      />

      <Image
        width={32}
        height={32}
        className="h-9 cursor-pointer"
        src={games.src}
        alt=""
        onClick={() => handleClick(State.Games)}
      />

      <Image
        width={32}
        height={32}
        className="h-9 cursor-pointer"
        src={mail.src}
        alt=""
        onClick={() => handleClick(State.Mail)}
      />
    </div>
  );
};

export default Taskbar;
