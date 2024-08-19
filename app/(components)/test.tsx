import React, { useState } from "react";

const ZIndexDemo = () => {
  const initialDivs = [
    { id: 1, zIndex: 1 },
    { id: 2, zIndex: 2 },
    { id: 3, zIndex: 3 },
  ];

  const [divs, setDivs] = useState(initialDivs);

  const handleDivClick = (id: number) => {
    const clickedDiv = divs.find((div) => div.id === id);
    const clickedZIndex = clickedDiv!.zIndex;

    const updatedDivs = divs.map((div) => {
      if (div.id === id) {
        return { ...div, zIndex: 3 };
      } else if (div.zIndex > clickedZIndex) {
        return { ...div, zIndex: div.zIndex - 1 };
      }
      return div;
    });

    setDivs(updatedDivs);
    console.log(divs);
  };

  return (
    <div className="relative w-full h-screen">
      {divs.map((div) => (
        <div
          key={div.id}
          className=" w-32 h-32 bg-blue-500 m-2 cursor-pointer"
          style={{ zIndex: div.zIndex }}
          onClick={() => handleDivClick(div.id)}
        >
          Div {div.id}
        </div>
      ))}
    </div>
  );
};

export default ZIndexDemo;
