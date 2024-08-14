"use client";
import { Poppins } from "next/font/google";
import React, { useState, useEffect } from "react";

const poppins = Poppins({
  weight: "700",
  subsets: ["latin"],
});

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = Number(hours.toString().padStart(2, "0"));

    return `${hours}:${minutes} ${ampm}`;
  };

  return (
    <div className={`${poppins.className} text-4xl font-bold `}>
      {formatTime(time)}
    </div>
  );
};

export default Clock;
