import React, { useEffect } from "react";

const Clock = () => {
  useEffect(() => {
    const hr = document.querySelector<HTMLDivElement>("#hr");
    const mn = document.querySelector<HTMLDivElement>("#mn");
    const sc = document.querySelector<HTMLDivElement>("#sc");

    const updateClock = () => {
      const day = new Date();
      const hh = day.getHours() * 30;
      const mm = day.getMinutes() * 6;
      const ss = day.getSeconds() * 6;

      if (hr) hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
      if (mn) mn.style.transform = `rotateZ(${mm}deg)`;
      if (sc) sc.style.transform = `rotateZ(${ss}deg)`;
    };

    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-400">
      <div className="relative w-72 h-72 bg-blue-200 flex justify-center items-center rounded-full shadow-2xl">
        <div className="absolute w-1 h-1 bg-pink-500 rounded-full z-50 shadow-inner"></div>
        <div className="absolute inset-9 bg-blue-900 rounded-full shadow-inner">
          <div className="absolute inset-4 rounded-full bg-gradient-to-b from-blue-500 to-pink-500 animate-spin-slow"></div>
          <div className="absolute inset-8 rounded-full bg-blue-900"></div>
          <span
            className="absolute inset-2.5 text-center text-white text-xl"
            style={{ transform: "rotate(0deg)" }}
          >
            <b
              className="font-semibold block"
              style={{ transform: "rotate(0deg)" }}
            >
              12
            </b>
          </span>
          <span
            className="absolute inset-2.5 text-center text-white text-xl"
            style={{ transform: "rotate(90deg)" }}
          >
            <b
              className="font-semibold block"
              style={{ transform: "rotate(-90deg)" }}
            >
              3
            </b>
          </span>
          <span
            className="absolute inset-2.5 text-center text-white text-xl"
            style={{ transform: "rotate(180deg)" }}
          >
            <b
              className="font-semibold block"
              style={{ transform: "rotate(-180deg)" }}
            >
              6
            </b>
          </span>
          <span
            className="absolute inset-2.5 text-center text-white text-xl"
            style={{ transform: "rotate(270deg)" }}
          >
            <b
              className="font-semibold block"
              style={{ transform: "rotate(-270deg)" }}
            >
              9
            </b>
          </span>

          {/* Rotating Circles */}
          <div
            id="hr"
            className="absolute inset-0 rounded-full flex justify-center z-10"
          >
            <i className="absolute w-1 h-1/2 bg-white transform origin-bottom scale-y-[0.3]"></i>
          </div>
          <div
            id="mn"
            className="absolute inset-0 rounded-full flex justify-center z-10"
          >
            <i className="absolute w-1 h-1/2 bg-white transform origin-bottom scale-y-[0.45]"></i>
          </div>
          <div
            id="sc"
            className="absolute inset-0 rounded-full flex justify-center z-10"
          >
            <i className="absolute w-1 h-1/2 bg-pink-500 transform origin-bottom scale-y-[0.55] shadow-pink-500"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
