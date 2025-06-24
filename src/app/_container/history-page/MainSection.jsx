"use client";
import React from "react";
import content from "@/app/_data/content.json";
import Image from "next/image";
import { motion } from "motion/react";

const MainSection = () => {
  const promessesVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: i * 0.08,
        ease: [0.65, 0, 0.35, 1],
      },
    }),
  };
  return (
    <main className="bg-[var(--color-secondary)] text-white">
      <section className="max-w-[1440px] mx-auto py-[90px] md:pb-28 px-5">
        <header>
          <h1 className="text-6xl sm:text-8xl leading-16 sm:leading-24 mb-5">
            {content.pages.history.title}
          </h1>
          <p className="text-sm font-normal md:text-lg lg:text-2xl md:w-4/5">
            {content.pages.history.intro}
          </p>
        </header>
        <div className="w-full py-[90px] grid place-content-center">
          <Image
            src="/images/ascent/pattern-white-3.png"
            width={153}
            height={30}
            alt=""
          />
        </div>
        {/* L'histoire */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-11">
          <Image
            src={content.pages.history.history.image.href}
            width={content.pages.history.history.image.width}
            height={content.pages.history.history.image.height}
            alt="Image de la boutique Ma Boucherie Française"
            className="w-full"
          />
          <div className="flex flex-col gap-10">
            {content.pages.history.history.text.map((text, i) => (
              <div key={i}>
                <p className="text-2xl font-semibold mb-2">{text.title}</p>
                <p className="text-sm font-medium md:text-lg">{text.text}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Promesses */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-11 py-[90px] md:py-28">
          <div>
            <h2 className="text-4xl mb-2 md:mb-4 md:text-6xl   md:leading-18">
              {content.pages.history.promesses.title}
            </h2>
            <div className="mt-8 w-5/6 flex flex-col gap-4">
              <p className="text-sm font-medium md:text-lg">
                {content.pages.history.promesses.first_text}
              </p>
              <p className="text-sm font-medium md:text-lg">
                {content.pages.history.promesses.second_text}
              </p>
              <p className="text-sm font-medium md:text-lg">
                {content.pages.history.promesses.third_text}
              </p>
              <p className="text-sm font-medium md:text-lg">
                {content.pages.history.promesses.fourth_text}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {content.pages.history.promesses.quality.map((quality, i) => (
              <motion.div
                className="flex gap-5 items-center"
                key={i}
                custom={i}
                variants={promessesVariants}
                initial="hidden"
                whileInView="visible"
              >
                <Image
                  src={quality.image.href}
                  width={quality.image.width}
                  height={quality.image.height}
                  className="w-[100px] lg:w-[150px] h-[100px] lg:h-[150px]"
                  alt={quality.title}
                />
                <p className="text-xl font-semibold mb-2 w-2/5">
                  {quality.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Bon contre avis */}
        <div></div>
      </section>
    </main>
  );
};

export default MainSection;
