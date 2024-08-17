"use client";
import React, { useState, useRef } from "react";
import Taskbar from "./taskbar/Taskbar";
import About from "./(components)/about";
import Contact from "./(components)/Contact";
import Projects from "./(components)/projects";
import Games from "./(components)/games";
import Mail from "./(components)/mail";
import pdf from "./assets/pdf.svg";
import Image from "next/image";
import CvViewer from "./(components)/cvViewer";
enum State {
  About,
  Contact,
  Games,
  Mail,
  Projects,
  Cv,
}

export default function Page() {
  const [activeStates, setActiveStates] = useState<State[]>([]);
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
        return <About handleIconClick={handleIconClick} key={state} />;
      case State.Projects:
        return <Projects handleIconClick={handleIconClick} key={state} />;
      case State.Contact:
        return <Contact handleIconClick={handleIconClick} key={state} />;
      case State.Games:
        return <Games handleIconClick={handleIconClick} key={state} />;
      case State.Mail:
        return <Mail handleIconClick={handleIconClick} key={state} />;
      case State.Cv:
        return <CvViewer handleIconClick={handleIconClick} key={state} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-[url('/beach.jpg')] bg-cover w-screen h-screen overflow-hidden  m-0 relative">
      <a
        onClick={() => {
          closeWindow(State.Cv);
        }}
        target="_blank"
        className=" flex flex-col justify-center items-center w-fit cursor-pointer absolute"
      >
        <Image src={pdf} alt="" height={80} width={80} />
        <h1 className=" text-white">CV.pdf</h1>
      </a>
      {activeStates.map((state) => (
        <div key={state} className="component-wrapper">
          {renderComponent(state)}
        </div>
      ))}
      <Taskbar activeStates={activeStates} handleIconClick={handleIconClick} />
    </div>
  );
}
