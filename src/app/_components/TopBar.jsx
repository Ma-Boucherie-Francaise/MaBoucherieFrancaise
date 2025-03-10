import React from "react";

const TopBar = ({ text }) => {
  return (
    <div className="w-full h-fit py-1.5 grid place-content-center bg-[var(--color-secondary)]">
      <p className="font-normal text-[10px] md:text-xs text-white">{text}</p>
    </div>
  );
};

export default TopBar;
