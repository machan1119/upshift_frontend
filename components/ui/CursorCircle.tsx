"use client";
import React, { useEffect, useState } from "react";

export default function CursorCircle() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoveringLink, setHoveringLink] = useState(false);

  useEffect(() => {
    const mouseMoveHandler = (e: any) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const mouseOverHandler = (e: any) => {
      if (e.target.tagName === "A") setHoveringLink(true);
    };

    const mouseOutHandler = (e: any) => {
      if (e.target.tagName === "A") setHoveringLink(false);
    };

    window.addEventListener("mousemove", mouseMoveHandler);
    window.addEventListener("mouseover", mouseOverHandler);
    window.addEventListener("mouseout", mouseOutHandler);

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
      window.removeEventListener("mouseover", mouseOverHandler);
      window.removeEventListener("mouseout", mouseOutHandler);
    };
  }, []);

  return (
    <div
      className={`
          fixed pointer-events-none rounded-full border-2 border-blue-500 bg-blue-100 bg-opacity-30
          transition-all duration-300 ease-out
          ${
            hoveringLink
              ? "w-20 h-20 -translate-x-8 -translate-y-8"
              : "w-10 h-10 -translate-x-4 -translate-y-4"
          }
        `}
      style={{
        left: position.x,
        top: position.y,
        transform: `translate(-50%, -50%)`,
        position: "fixed",
        zIndex: 9999,
      }}
    />
  );
}
