"use client";
import { useState } from "react";
import content from "@/app/_data/content.json";
import Image from "next/image";
import { motion as m } from "framer-motion";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();
  const [projectHovered, setProjectHovered] = useState(false);

  const MouseEnter = (e) => {
    console.log("ENTERING", e.target.dataset.id);
    setProjectHovered(e.target.dataset.id);
  };

  const MouseLeave = () => {
    console.log("LEAVING");
    setProjectHovered();
  };

  const animeText = {
    hide: {
      y: "100%",
      opacity: 0,
      transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] },
    },
    show: {
      y: 0,
      opacity: 1.0,
      transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] },
    },
  };

  return (
    <>
      <div className="relative hidden flex-wrap justify-around items-center max-w-[1440px] mx-auto px-5 lg:flex">
        {content.pages.products.hero.map(({ src, width, height, name }, i) => {
          return (
            <div
              className="w-[250px] h-[250px] grid place-content-center"
              key={i}
            >
              <Image
                data-id={i}
                onMouseEnter={(e) => MouseEnter(e)}
                onMouseLeave={() => MouseLeave()}
                src={src}
                width={width}
                height={height}
                alt={`image ${name}`}
                className="object-cover object-center transition-opacity duration-300 ease-[cubic-bezier(0.65, 0, 0.35, 1)] not-hover:opacity-50 hover:cursor-pointer"
              />
            </div>
          );
        })}
        <div className="lg:block hidden absolute w-full inset-0 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] pointer-events-none z-30">
          {content.pages.products.hero.map(({ name, underName }, i) => {
            return (
              <m.div
                initial="hide"
                animate={projectHovered == i ? "show" : "hide"}
                key={i}
                className="absolute w-full text-center "
              >
                <div className="overflow-hidden">
                  <m.h1 variants={animeText} className="text-6xl">
                    {name}
                  </m.h1>
                </div>
                <div className="overflow-hidden">
                  <m.p variants={animeText} className="text-2xl">
                    {underName}
                  </m.p>
                </div>
              </m.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
