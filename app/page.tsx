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

  return (
    <div className="bg-[url('./assets/background.svg')] bg-cover w-screen h-screen overflow-hidden  p-5 m-0 relative  pt-10">
      {currentState === State.Home && (
        <>
          <div className=" flex flex-col justify-center items-center w-fit cursor-pointer">
            <Image src={pdf} alt="" height={80} width={80} />
            <h1 className=" text-white">CV.pdf</h1>
          </div>
        </>
      )}
      {currentState === State.About && <About />}
      {currentState === State.Contact && <Contact />}
      {currentState === State.Projects && <Projects />}
      {currentState === State.Games && <Games />}
      {currentState === State.Mail && <Mail />}
      <Taskbar setCurrentState={setCurrentState} />
    </div>
  );
}
