"use client";
import React, { useState } from "react";
import Taskbar from "./taskbar/Taskbar";
import About from "./(components)/about";
import Contact from "./(components)/Contact";
import Projects from "./(components)/projects";
import Games from "./(components)/games";
import Mail from "./(components)/mail";
import pdf from "./assets/pdf.svg";
import Image from "next/image";
export enum State {
  Home,
  About,
  Contact,
  Games,
  Mail,
  Projects,
}

export default function page() {
  const [activeStates, setActiveStates] = useState<State[]>([State.Home]);

  const handleIconClick = (state: State) => {
    setActiveStates((prevStates) =>
      prevStates.includes(state)
        ? prevStates.filter((s) => s !== state)
        : [...prevStates, state]
    );
  };
  const renderComponent = (state: State) => {
    switch (state) {
      case State.About:
        return <About key={state} />;
      case State.Projects:
        return <Projects key={state} />;
      case State.Contact:
        return <Contact key={state} />;
      case State.Games:
        return <Games key={state} />;
      case State.Mail:
        return <Mail handleIconClick={handleIconClick} key={state} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-[url('./assets/background.svg')] bg-cover w-screen h-screen overflow-hidden  m-0 relative pt-2">
      <div className=" flex flex-col justify-center items-center w-fit cursor-pointer absolute">
        <Image src={pdf} alt="" height={80} width={80} />
        <h1 className=" text-white">CV.pdf</h1>
      </div>
      {activeStates.map((state) => (
        <div key={state} className="component-wrapper">
          {renderComponent(state)}
        </div>
      ))}
      <Taskbar handleIconClick={handleIconClick} />
    </div>
  );
}
