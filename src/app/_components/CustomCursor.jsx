"use client";
import { useState, useEffect } from "react";
import content from "@/app/_data/content.json";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", updatePosition);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  return (
    <img
      src={content.cursor_img}
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        width: "32px",
        height: "32px",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
      }}
      className="hidden md:block"
    />
  );
};

export default CustomCursor;
