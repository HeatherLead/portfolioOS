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
  Home = "home",
  About = "about",
  Contact = "contact",
  Games = "games",
  Mail = "mail",
  Projects = "projects",
}

export default function Home() {
  const [currentState, setCurrentState] = useState<State>(State.Home);
  const [componentKeys, setComponentKeys] = useState({
    [State.Home]: 0,
    [State.About]: 0,
    [State.Contact]: 0,
    [State.Games]: 0,
    [State.Mail]: 0,
    [State.Projects]: 0,
  });

  const handleIconClick = (state: State) => {
    setCurrentState(state);
    setComponentKeys((prevKeys) => ({
      ...prevKeys,
      [state]: prevKeys[state] + 1,
    }));
  };

  return (
    <div className="bg-[url('./assets/background.svg')] bg-cover w-screen h-screen overflow-hidden  m-0 relative pt-2">
      {currentState === State.Home && (
        <>
          <div className=" flex flex-col justify-center items-center w-fit cursor-pointer">
            <Image src={pdf} alt="" height={80} width={80} />
            <h1 className=" text-white">CV.pdf</h1>
          </div>
        </>
      )}
      {currentState === State.About && (
        <About key={componentKeys[State.About]} />
      )}
      {currentState === State.Contact && (
        <Contact key={componentKeys[State.Contact]} />
      )}
      {currentState === State.Projects && (
        <Projects key={componentKeys[State.Projects]} />
      )}
      {currentState === State.Games && (
        <Games key={componentKeys[State.Games]} />
      )}
      {currentState === State.Mail && (
        <Mail
          animate={true}
          setCurrentState={setCurrentState}
          key={componentKeys[State.Mail]}
        />
      )}
      <Taskbar
        currentState={currentState}
        setCurrentState={setCurrentState}
        handleIconClick={handleIconClick}
      />
    </div>
  );
}
