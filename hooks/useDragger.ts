import React, { useEffect, useRef } from "react";

function useDragger(barId: string, targetId: string): void {
  const isClicked = useRef<boolean>(false);

  const coords = useRef<{
    startX: number;
    startY: number;
    lastX: number;
    lastY: number;
  }>({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
  });

  useEffect(() => {
    const bar = document.getElementById(barId);
    const target = document.getElementById(targetId);

    if (!bar || !target) throw new Error("Element with given id doesn't exist");

    if (!target.parentElement) throw new Error("target element must have a parent");

    coords.current.lastX = target.offsetLeft;
    coords.current.lastY = target.offsetTop;

    const onMouseDown = (e: MouseEvent) => {
      isClicked.current = true;
      coords.current.startX = e.clientX;
      coords.current.startY = e.clientY;
    };

    const onMouseUp = () => {
      isClicked.current = false;
      coords.current.lastX = target.offsetLeft;
      coords.current.lastY = target.offsetTop;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isClicked.current) return;

      const nextX = e.clientX - coords.current.startX + coords.current.lastX;
      const nextY = e.clientY - coords.current.startY + coords.current.lastY;

      target.style.top = `${nextY}px`;
      target.style.left = `${nextX}px`;
    };

    bar.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);

    return () => {
      bar.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, [barId, targetId]);

  useEffect(() => {
    const target = document.getElementById(targetId);
    if (target) {
      coords.current.lastX = target.offsetLeft;
      coords.current.lastY = target.offsetTop;
    }
  }, [targetId]);
}

export default useDragger;
