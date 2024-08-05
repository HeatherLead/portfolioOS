import React, { Dispatch, SetStateAction } from "react";
import home from "./assets/Icons.svg";
import profile from "./assets/User.svg";
import project from "./assets/Folders.svg";
import contact from "./assets/Contacts.svg";
import games from "./assets/games.svg";
import mail from "./assets/Message.svg";
import Image from "next/image";
import { State } from "../page";
interface TaskbarProps {
  currentState: State;
  handleIconClick: (state: State) => void;
  setCurrentState: (state: State) => void;
}
const Taskbar = ({
  setCurrentState,
  currentState,
  handleIconClick,
}: TaskbarProps) => {
  return (
    <div className=" flex w-1/2 justify-evenly items-center p-4 border border-b-0 rounded-t-xl fixed bottom-0 left-1/2 -translate-x-1/2 bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-30  border-gray-100">
      <Image
        width={36}
        height={36}
        className=" h-9 cursor-pointer  "
        src={home.src}
        alt=""
        onClick={() => {
          setCurrentState(State.Home);
          handleIconClick(State.Home);
        }}
      />

      <Image
        width={36}
        height={36}
        className=" h-9 cursor-pointer  "
        src={profile.src}
        alt=""
        onClick={() => {
          setCurrentState(State.About);
          handleIconClick(State.About);
        }}
      />

      <Image
        width={36}
        height={36}
        className=" h-9 cursor-pointer  "
        src={project.src}
        alt=""
        onClick={() => {
          setCurrentState(State.Projects);
          handleIconClick(State.Projects);
        }}
      />

      <Image
        width={36}
        height={36}
        className=" h-9 cursor-pointer  "
        src={contact.src}
        alt=""
        onClick={() => {
          setCurrentState(State.Contact);
          handleIconClick(State.Contact);
        }}
      />

      <Image
        width={36}
        height={36}
        className=" h-9 cursor-pointer  "
        src={games.src}
        alt=""
        onClick={() => {
          setCurrentState(State.Games);
          handleIconClick(State.Games);
        }}
      />

      <Image
        width={36}
        height={36}
        className=" h-9 cursor-pointer  "
        src={mail.src}
        alt=""
        onClick={() => {
          setCurrentState(State.Mail);
          handleIconClick(State.Mail);
        }}
      />
    </div>
  );
};

export default Taskbar;
