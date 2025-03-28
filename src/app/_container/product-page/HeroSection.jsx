"use client";
import { useState } from "react";
import content from "@/app/_data/content.json";
import Image from "next/image";
import { motion as m } from "framer-motion";

const HeroSection = () => {
  const [projectHovered, setProjectHovered] = useState(false);

  const MouseEnter = (e) => {
    setProjectHovered(e.target.dataset.id);
  };

  const MouseLeave = () => {
    setProjectHovered();
  };

  const animeText = {
    hide: {
      y: "102%",
      transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] },
    },
    show: {
      y: 0,
      transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] },
    },
  };

  return (
    <>
      <div className="flex flex-wrap justify-around items-center max-w-[1440px] mx-auto px-5">
        {content.pages.products.hero.map(({ src, width, height, name }, i) => {
          return (
            <div
              className="w-[250px] h-[250px] grid place-content-center"
              key={i}
              data-id={i}
              onMouseEnter={(e) => MouseEnter(e)}
              onMouseLeave={() => MouseLeave()}
            >
              <Image
                src={src}
                width={width}
                height={height}
                alt={`image ${name}`}
                className="object-cover object-center transition-opacity duration-300 ease-[cubic-bezier(0.65, 0, 0.35, 1)] not-hover:opacity-50 hover:cursor-pointer"
              />
            </div>
          );
        })}
      </div>
      <div className="">
        {content.pages.products.hero.map(({ name, underName, sentence }, i) => {
          return (
            <m.div
              initial="hide"
              animate={projectHovered === i ? "show" : "hide"}
              key={i}
              className="text"
            >
              <div className="hidden">
                <m.h1 variants={animeText}>{name}</m.h1>
              </div>
              <div className="hidden">
                <m.p variants={animeText}>{underName}</m.p>
              </div>
              <div className="hidden">
                <m.span variants={animeText}>{sentence}</m.span>
              </div>
            </m.div>
          );
        })}
      </div>
    </>
  );
};

export default HeroSection;
