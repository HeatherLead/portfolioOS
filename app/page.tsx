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
import useExpand from "@/hooks/useExpand";
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
  const [zIndices, setZIndices] = useState<{ [key in State]?: number }>({});
  const t1Ref = useRef<GSAPTimeline | null>(null);
  const [gamesNumber, setGamesNumber] = useState(0);
  const [projectNumber, setProjectNumber] = useState(0);
  const handleGamesClick = (value: number) => {
    setGamesNumber(value);
  };
  const handleProjectClick = (value: number) => {
    setProjectNumber(value);
  };
  const {
    expanded: expandedProjects,
    handleExpand: handleExpandProjects,
    containerRef: projectsContainerRef,
    newComponentRef: projectsNewComponentRef,
  } = useExpand(projectNumber);
  const {
    expanded: expandedGames,
    handleExpand: handleExpandGames,
    containerRef: gamesContainerRef,
    newComponentRef: gamesNewComponentRef,
  } = useExpand(gamesNumber);

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
    updateZIndex(state);
  };

  const updateZIndex = (state: State) => {
    const maxZIndex = Math.max(0, ...Object.values(zIndices));
    const clickedZIndex = zIndices[state] || 0;

    const newZIndices = { ...zIndices, [state]: maxZIndex + 1 };

    Object.keys(zIndices).forEach((key) => {
      const currentState = key as unknown as State;
      if (zIndices[currentState]! > clickedZIndex) {
        newZIndices[currentState] = zIndices[currentState]! - 1;
      }
    });

    setZIndices(newZIndices);
  };

  const renderComponent = (state: State) => {
    switch (state) {
      case State.About:
        return (
          <About
            zIndex={zIndices[state] || 1}
            updateZIndex={updateZIndex}
            handleIconClick={handleIconClick}
            key={state}
          />
        );
      case State.Projects:
        return (
          <Projects
            zIndex={zIndices[state] || 1}
            updateZIndex={updateZIndex}
            handleIconClick={handleIconClick}
            expandedProps={{
              containerRef: projectsContainerRef,
              expanded: expandedProjects,
              handleExpand: handleExpandProjects,
              newComponentRef: projectsNewComponentRef,
            }}
            handleProjectClick={handleProjectClick}
            key={state}
          />
        );
      case State.Contact:
        return (
          <Contact
            zIndex={zIndices[state] || 1}
            updateZIndex={updateZIndex}
            handleIconClick={handleIconClick}
            key={state}
          />
        );
      case State.Games:
        return (
          <Games
            zIndex={zIndices[state] || 1}
            updateZIndex={updateZIndex}
            handleIconClick={handleIconClick}
            expandedProps={{
              containerRef: gamesContainerRef,
              expanded: expandedGames,
              handleExpand: handleExpandGames,
              newComponentRef: gamesNewComponentRef,
            }}
            handleGamesClick={handleGamesClick}
            key={state}
          />
        );
      case State.Mail:
        return (
          <Mail
            zIndex={zIndices[state] || 1}
            updateZIndex={updateZIndex}
            handleIconClick={handleIconClick}
            key={state}
          />
        );
      case State.Cv:
        return (
          <CvViewer
            zIndex={zIndices[state] || 1}
            updateZIndex={updateZIndex}
            handleIconClick={handleIconClick}
            key={state}
          />
        );
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
