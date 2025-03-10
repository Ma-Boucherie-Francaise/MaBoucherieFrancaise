import Image from "next/image";
import React from "react";

const Separation = () => {
  return (
    <div className="w-full py-5 grid place-content-center">
      <Image
        src="/images/ascent/pattern-red-3.png"
        width={153}
        height={30}
        alt=""
      />
    </div>
  );
};

export default Separation;
